import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
  updateContact,
} from "../../redux/contacts/operations";
import { openModal, closeModal } from "../../redux/modal/slice";
import css from "./Contact.module.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { selectModal } from "../../redux/modal/selectors";
import { selectUpdating } from "../../redux/contacts/selectors";
import {
  selectUpdateContactName,
  selectUpdateContactNumber,
  selectEditingId,
} from "../../redux/update/selectors";
import {
  startEditing,
  stopEditing,
  updateContactName,
  updateContactNumber,
} from "../../redux/update/slice";
import { UserIcon, PhoneIcon, DeleteIcon } from "../../images/icons";
import toast from "react-hot-toast";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const { showModal, modalContent } = useSelector(selectModal);
  const updating = useSelector(selectUpdating);
  const contactName = useSelector(selectUpdateContactName);
  const contactNumber = useSelector(selectUpdateContactNumber);
  const editingId = useSelector(selectEditingId);

  const isEditing = editingId === id;

  const handleDeleteClick = () => {
    dispatch(openModal("Are you sure you want to delete this contact?"));
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
    toast.success("Successfully deleted!", { duration: 5000 });
  };

  const handleCancelDelete = () => {
    dispatch(closeModal());
  };

  const handleEditClick = () => {
    dispatch(startEditing({ id, name, number }));
  };

  const handleSaveClick = async () => {
    await dispatch(
      updateContact({ id, name: contactName, number: contactNumber })
    ).unwrap();
    dispatch(stopEditing());
    dispatch(fetchContacts());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={contactName}
              onChange={(e) => dispatch(updateContactName(e.target.value))}
            />
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => dispatch(updateContactNumber(e.target.value))}
            />
          </>
        ) : (
          <>
            <p>
              <UserIcon className={css.icon} />
              {name}
            </p>
            <p>
              <PhoneIcon className={css.icon} />
              {number}
            </p>
          </>
        )}
      </div>
      <button onClick={handleDeleteClick} className={css.button}>
        <DeleteIcon />
      </button>
      {isEditing ? (
        <button onClick={handleSaveClick} disabled={updating}>
          {updating ? "Saving..." : "Save"}
        </button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
      {showModal && modalContent && (
        <ConfirmationModal
          message={modalContent}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Contact;
