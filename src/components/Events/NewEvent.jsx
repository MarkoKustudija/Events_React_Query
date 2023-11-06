/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import EventForm from "./EventForm";
import Modal from '../UI/Modal';

function NewEvent() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {};

  return (
    <div>
      <Modal onClose={() => navigate("../")}>
        <EventForm onSubmit={handleSubmit}>
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        </EventForm>
      </Modal>
    </div>
  );
}

export default NewEvent;
