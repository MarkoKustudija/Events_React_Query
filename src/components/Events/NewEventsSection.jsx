import { useEffect, useState } from "react";
import EventItem from "./EventItem";
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import { fetchEvents } from "../../util/http";

function NewEventsSection() {

  
  let content;

  if (isLoading) {
    content = <LoadingIndicator />
  }

  if (error) {
    content = (
      <ErrorBlock title="An error occured" message="Failed to fetch events"/>
    )
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}

export default NewEventsSection;
