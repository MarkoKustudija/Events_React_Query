/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import EventForm from "./EventForm";
import Modal from "../UI/Modal";
import { useMutation } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../../util/http";
import ErrorBlock from "../UI/ErrorBlock";

function NewEvent() {
  
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  const handleSubmit = (formData) => {
    mutate({ event: formData });
  };

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}

export default NewEvent;
