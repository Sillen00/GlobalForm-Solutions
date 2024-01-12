import { useState } from "react"
import { useForm } from "~/app/(contexts)/FormContext"
import Button, { IconType } from "./../Button"
import styles from "./TextInput.module.scss"

// Button skall skapa ett nytt block i preview
// Button skall skicka block till DB
// Button skall skicka block till createform
// block skall ha med id, title, type, order, formid, required

function TextInput() {
  const [blockTitle, setBlockTitle] = useState<string>("")
  const { setFormData } = useForm()

  const handleClick = () => {
    console.log(blockTitle)

    const blockTypeTextInput = "textinput"

    // Ändra setFormDatas block array så att den innehåller ett block med 
    //"blockTitle" samt en string som indikerar att det är av typen "textinput".

    // 1. vi skall skapa ett nytt block och sedan lägga till det i formdata
    //2. blocket skall innehålla id, title, type, order, formid, required

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
