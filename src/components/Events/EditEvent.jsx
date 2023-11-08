/* eslint-disable no-unused-vars */
import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";
import EventForm from "./EventForm";
import Modal from "../UI/Modal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";

function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const { state } = useNavigation();
  const submit = useSubmit();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id: params.id }],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,

  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({
  //   //     queryKey: ['events', {id:params.id}],
  //   //     // refetchType: "none",
  //   //   })
  //   //   navigate('../')
  //   // }

  //   onMutate: async (data) => {
  //     const newEvent = data.event;
  //     await queryClient.cancelQueries({ queryKey: ["events", params.id] });
  //     const previousEvent = queryClient.getQueryData(["events", params.id]);

  //     queryClient.setQueryData(["events", params.id], newEvent);

  //     return { previousEvent };
  //   },

  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", params.id], context.previousEvent);
  //   },

  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", params.id]);
  //   },
  // });

  const handleSubmit = (formData) => {
    // mutate({ id: params.id, event: formData });
    submit(formData, { method: "PUT" });
    // navigate("../");
  };

  const handleClose = () => {
    navigate("../");
  };

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <div>
            <p>Sending data...</p>
          </div>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export default EditEvent;

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formaData = await request.formData();
  const updatedEventData = Object.fromEntries(formaData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
