import { Link, Outlet } from "react-router-dom";
import EventsIntroSection from "./EventsIntroSection";
import NewEventsSection from "./NewEventsSection";
import FindEventSection from "./FindEventSection";
import Header from "../Layout/Header";

function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="events/new" className="button">
          New Event
        </Link>
      </Header>

      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}

export default Events;
