import css from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.buttons}>
          <button onClick={onConfirm} className={css.confirmButton}>
            Confirm
          </button>
          <button onClick={onCancel} className={css.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
