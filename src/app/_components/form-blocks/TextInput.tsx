import Button, { IconType } from "./../Button"
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
      <Button
        label='Click'
        icon={IconType.Down}
        className={styles.iconStyle}
      ></Button>
    </div>
  )
}

export default TextInput
