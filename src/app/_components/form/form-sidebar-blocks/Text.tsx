"use client"
import { useState } from "react"
import { useForm } from "~/contexts/FormContext"
import Button, { IconType } from "../../Button"
import styles from "./Text.module.scss"

interface Props {
  toggleSideMenuContent: () => void
}

function Text({ toggleSideMenuContent }: Props) {
  const { addFormBlock } = useForm()
  const [blockText, setBlockText] = useState<string>("")
  const [orderNumber, setOrderNumber] = useState<number>(0)

  const handleClick = () => {
    const blockTypeText = "text"

    setOrderNumber(orderNumber + 1)

    const newFormBlock = {
      order: orderNumber,
      title: "",
      content: blockText,
      type: blockTypeText,
      required: false,
    }

    addFormBlock(newFormBlock)
  }

  return (
    <div className={styles.textContainer}>
      <div>Text</div>
      <label id='block-text'>Block text</label>
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
          toggleSideMenuContent()
        }}
      >
        Add block
      </Button>
    </div>
  )
}

export default Text
