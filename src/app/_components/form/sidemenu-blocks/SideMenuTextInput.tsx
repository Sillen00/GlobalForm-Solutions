"use client"
import { useState } from "react"
import { useForm } from "~/contexts/FormContext"
import Button, { IconType } from "../../Button"
import styles from "./SideMenuTextInput.module.scss"
import { type FormBlockType } from "@prisma/client"

// Button skall skapa ett nytt block i preview
// Button skall skicka block till createform

interface Props {
  toggleSideMenuContent: () => void
}

function SideMenuTextInput({ toggleSideMenuContent }: Props) {
  const [blockTitle, setBlockTitle] = useState<string>("")
  const { addFormBlock } = useForm()
  const [orderNumber, setOrderNumber] = useState<number>(0)

  const handleClick = () => {
    // Create a state that adds the order number +1 every time a new block is added
    setOrderNumber(orderNumber + 1)

    const newFormBlock = {
      order: orderNumber,
      title: blockTitle,
      type: "textInput" as FormBlockType,
      required: false,
      placeholderText: "Write something here...",
    }
    //Send newFormBlock to formContext and add it to the formBlocks array
    addFormBlock(newFormBlock)
  }

  return (
    <div className={styles.textInputContainer}>
      <h2>Text input block</h2>
      <p>
        This block adds a simple input field to the form, that the user can fill
        in before sending a response back to you.
      </p>

      <div className={styles.inputBox}>
        <label id='block-title'>
          Block title <span style={{ color: "red" }}>*</span>
        </label>
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
          onClick={() => {
            handleClick()
            toggleSideMenuContent()
          }}
        >
          Add block
        </Button>
      </div>
    </div>
  )
}

export default SideMenuTextInput
