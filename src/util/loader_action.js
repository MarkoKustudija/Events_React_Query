import { redirect } from "react-router-dom";
import { fetchEvent, queryClient, updateEvent } from "./http";

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