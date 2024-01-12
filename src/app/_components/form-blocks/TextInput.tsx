import Button, { IconType } from "./../Button"
import styles from "./TextInput.module.scss"
import { useState } from "react"

// Button skall skapa ett nytt block i preview
// Button skall skicka block till DB
// Button skall skicka block till createform
// block skall ha med id, title, type, order, formid, required

function TextInput() {
  const [blockTitle, setBlockTitle] = useState<string>("")

  const handleClick = () => {
    setBlockTitle(blockTitle)
    // skicka textinput till context
    console.log(blockTitle)
  }

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
          value={blockTitle}
          onChange={e => setBlockTitle(e.target.value)}
        />
      </div>
      <div>
        <Button
          icon={IconType.None}
          className={styles.iconStyle}
          onClick={handleClick}
        >
          Add block
        </Button>
      </div>
    </div>
  )
}

export default TextInput
