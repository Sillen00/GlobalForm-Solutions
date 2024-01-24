"use client"
import { type FormBlockType } from "@prisma/client"
import { useState } from "react"
import { useForm } from "~/contexts/FormContext"
import Button, { IconType } from "../../Button"
import styles from "./SideMenuTextBlock.module.scss"

interface Props {
  toggleSideMenuContent: () => void
}

function SideMenuTextBlock({ toggleSideMenuContent }: Props) {
  const { addFormBlock } = useForm()
  const [blockTitle, setBlockTitle] = useState<string>("")
  const [blockText, setBlockText] = useState<string>("")
  const [orderNumber, setOrderNumber] = useState<number>(0)

  const handleClick = () => {
    // Validate that the block title is not empty
    if (blockText.trim() === "") {
      alert("Please enter a text to show in the form.")
      return
    }

    setOrderNumber(orderNumber + 1)

    const newFormBlock = {
      order: orderNumber,
      title: blockTitle,
      content: blockText,
      type: "text" as FormBlockType,
      required: false,
    }

    addFormBlock(newFormBlock)
    toggleSideMenuContent()
  }

  return (
    <div className={styles.textContainer}>
      <h2>Text block</h2>
      <p>This block simply adds readable text for the user to read.</p>
      <div className={styles.inputBox}>
        <label id='block-title'>Block title (optional)</label>
        <input
          id='block-title'
          type='text'
          name='block-title'
          required
          value={blockTitle}
          onChange={e => setBlockTitle(e.target.value)}
        />
      </div>
      <label id='block-text'>
        Block text <span>*</span>
      </label>
      <textarea
        id='block-text'
        name='block-text'
        required
        value={blockText}
        onChange={e => setBlockText(e.target.value)}
      ></textarea>
      <Button
        icon={IconType.None}
        onClick={() => {
          handleClick()
        }}
      >
        Add block
      </Button>
    </div>
  )
}

export default SideMenuTextBlock
