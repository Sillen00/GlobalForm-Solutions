import styles from "./FormTextInput.module.scss"

export default function FormTextInput({
  title,
  onChange,
}: {
  title: string
  onChange: (title: string, value: string) => void
}) {
  return (
    <div className={styles.textInputContainer}>
      <input
        type='text'
        onChange={e => onChange(title, e.target.value)}
      ></input>
    </div>
  )
}
