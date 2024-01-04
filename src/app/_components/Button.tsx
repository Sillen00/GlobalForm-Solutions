import { IoIosArrowDroprightCircle } from "react-icons/io"
import "./Button.scss"

interface FakeButtonProps {
  label: string
}

function FakeButton({ label }: FakeButtonProps): JSX.Element {
  return (
    <button className='buttonStyle'>
      <span>{label}</span>
      <IoIosArrowDroprightCircle className='arrow-btn' />
    </button>
  )
}

export default FakeButton
