/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import EventForm from "./EventForm";
import Modal from "../UI/Modal";

function EditEvent() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {};

  const handleClose = () => {
    navigate("../");
  };
  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={null} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}

export default EditEvent;
