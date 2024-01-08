import { CiLink } from "react-icons/ci"
import { FaPhoneAlt, FaRegDotCircle } from "react-icons/fa"
import { IoCalendarNumberSharp } from "react-icons/io5"
import { LuFormInput } from "react-icons/lu"
import { MdEmail } from "react-icons/md"
import { RxDropdownMenu } from "react-icons/rx"
import { TbLetterT, TbNumbers, TbSquareLetterT } from "react-icons/tb"
import { TiInputChecked } from "react-icons/ti"
import styles from "./SideMenuNewFormBlocks.module.scss"

function SideMenuNewFormBlocks() {
  const addFormBlock = () => {
    console.log("add form block")
  }

  return (
    <div className={styles.sideMenuNewBlocks}>
      <div className={styles.inputBox}>
        <label id='block-title'>Block title (required)</label>
        <input id='block-title' type='text' name='block-title' required />
      </div>

      <h4>Block types:</h4>
      <div className={styles.blockTypeContainer}>
        <div onClick={addFormBlock}>
          <TbLetterT />
          <p>Text</p>
        </div>
        <div onClick={addFormBlock}>
          <TbSquareLetterT />
          <p>Text Area</p>
        </div>
        <div onClick={addFormBlock}>
          <LuFormInput />
          <p>Text input</p>
        </div>
        <div onClick={addFormBlock}>
          <TbNumbers />
          <p>Number input</p>
        </div>
        <div onClick={addFormBlock}>
          <FaPhoneAlt />
          <p>Phone input</p>
        </div>
        <div onClick={addFormBlock}>
          <MdEmail />
          <p>Email input</p>
        </div>
        <div onClick={addFormBlock}>
          <IoCalendarNumberSharp />
          <p>Date input</p>
        </div>
        <div onClick={addFormBlock}>
          <CiLink />
          <p>Url input</p>
        </div>
        <div onClick={addFormBlock}>
          <RxDropdownMenu />
          <p>Dropdown input</p>
        </div>
        <div onClick={addFormBlock}>
          <FaRegDotCircle />
          <p>Radio Button</p>
        </div>
        <div onClick={addFormBlock}>
          <TiInputChecked />
          <p>Checkbox</p>
        </div>
      </div>
    </div>
  )
}

export default SideMenuNewFormBlocks
