import styles from "./DeleteModal.module.scss"

interface Props {
  confirmDeleteForm: () => void
  cancelDeleteForm: () => void
}

function DeleteModal({ confirmDeleteForm, cancelDeleteForm }: Props) {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__content}>
        <p>Are you sure you want to delete this form?</p>
        <div className={styles.modal__buttons}>
          <button className={styles.yes} onClick={confirmDeleteForm}>
            Yes
          </button>
          <button className={styles.no} onClick={cancelDeleteForm}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
