import { Link, Outlet } from "react-router-dom";
import EventsIntroSection from "./EventsIntroSection";
import NewEventsSection from "./NewEventsSection";
import FindEventSection from "./FindEventSection";

function Events() {
  return (
    <>
      <Outlet />
      <Link to="events/new" className="button">
        New Event
      </Link>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}

export default Events;
