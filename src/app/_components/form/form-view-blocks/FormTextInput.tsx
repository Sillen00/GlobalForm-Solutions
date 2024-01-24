import styles from "./FormTextInput.module.scss"

export default function FormTextInput({
  title,
  onChange,
}: {
  title: string
  onChange: (title: string, value: string) => void
}) {
  const placeholderWords = [
    "Email",
    "email",
    "e-mail",
    "Name",
    "name",
    "fullname",
    "Full name",
  ]
  const showPlaceholder = placeholderWords.some(word => title.includes(word))
    ? `please enter your ${title}`
    : ""

  return (
    <div className={styles.textInputContainer}>
      <input
        type='text'
        onChange={e => onChange(title, e.target.value)}
        placeholder={showPlaceholder}
      ></input>
    </div>
  )
}
