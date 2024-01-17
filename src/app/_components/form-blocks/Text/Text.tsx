import Button, { IconType } from "../../Button"
import styles from "./Text.module.scss"

function Text() {
  // const { addFormBlock } = useForm()
  // const [orderNumber, setOrderNumber] = useState<number>(0)

  return (
    <div className={styles.textContainer}>
      <div>Text</div>
      <label id='block-title'>Block title (required)</label>
      <textarea></textarea>
      <Button icon={IconType.None}>Add block</Button>
    </div>
  )
}

export default Text
