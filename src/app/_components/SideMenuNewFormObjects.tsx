import { CiLink } from "react-icons/ci"
import { FaPhoneAlt, FaRegDotCircle } from "react-icons/fa"
import { IoCalendarNumberSharp } from "react-icons/io5"
import { LuFormInput } from "react-icons/lu"
import { MdEmail } from "react-icons/md"
import { RxDropdownMenu } from "react-icons/rx"
import { TbLetterT, TbNumbers, TbSquareLetterT } from "react-icons/tb"
import { TiInputChecked } from "react-icons/ti"
import styles from "./SideMenuNewFormObjects.module.scss"

function SideMenuNewFormObjects() {
  return (
    <div className={styles.sideMenuNewObjects}>
      <div className={styles.inputBox}>
        <label id='object-title'>Object title (required)</label>
        <input id='object-title' type='text' name='object-title' required />
      </div>

      <h4>Object types:</h4>
      <div className={styles.blockTypeContainer}>
        <div>
          <TbLetterT />
          <p>Text</p>
        </div>
        <div>
          <TbSquareLetterT />
          <p>Text Area</p>
        </div>
        <div>
          <LuFormInput />
          <p>Text input</p>
        </div>
        <div>
          <TbNumbers />
          <p>Number input</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>Phone input</p>
        </div>
        <div>
          <MdEmail />
          <p>Email input</p>
        </div>
        <div>
          <IoCalendarNumberSharp />
          <p>Date input</p>
        </div>
        <div>
          <CiLink />
          <p>Url input</p>
        </div>
        <div>
          <RxDropdownMenu />
          <p>Dropdown input</p>
        </div>
        <div>
          <FaRegDotCircle />
          <p>Radio Button</p>
        </div>
        <div>
          <TiInputChecked />
          <p>Checkbox</p>
        </div>
      </div>
    </div>
  )
}

export default SideMenuNewFormObjects
