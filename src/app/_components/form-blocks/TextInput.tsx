import styles from "./TextInput.module.scss"

function TextInput() {
  return (
    <div className={styles.textInputContainer}>
      <div>TextInput</div>

      <div className={styles.inputBox}>
        <label id='block-title'>Block title (required)</label>
        <input
          id='block-title'
          type='text'
          name='block-title'
          required
          //   value={blockTitle}
          //   onChange={e => setBlockTitle(e.target.value)}
        />
      </div>
      <button>Add block</button>
    </div>
  )
}

export default TextInput
