import { useState } from "react"
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
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const handleFormBlockClick = (formBlock: string) => {
    setSelectedBlock(formBlock)
  }

  const addFormBlock = () => {
    console.log("add form block")
    console.log(selectedBlock)
  }

  return (
    <div className={styles.sideMenuNewBlocks}>
      <div className={styles.inputBox}>
        <label id='block-title'>Block title (required)</label>
        <input id='block-title' type='text' name='block-title' required />
      </div>

      <h4>Block types:</h4>
      <div className={styles.blockTypeContainer}>
        <div onClick={() => handleFormBlockClick("text")}>
          <TbLetterT />
          <p>Text</p>
        </div>
        <div onClick={() => handleFormBlockClick("textarea")}>
          <TbSquareLetterT />
          <p>Text Area</p>
        </div>
        <div onClick={() => handleFormBlockClick("textinput")}>
          <LuFormInput />
          <p>Text input</p>
        </div>
        <div onClick={() => handleFormBlockClick("numberinput")}>
          <TbNumbers />
          <p>Number input</p>
        </div>
        <div onClick={() => handleFormBlockClick("phoneinput")}>
          <FaPhoneAlt />
          <p>Phone input</p>
        </div>
        <div onClick={() => handleFormBlockClick("emailinput")}>
          <MdEmail />
          <p>Email input</p>
        </div>
        <div onClick={() => handleFormBlockClick("dateinput")}>
          <IoCalendarNumberSharp />
          <p>Date input</p>
        </div>
        <div onClick={() => handleFormBlockClick("urlinput")}>
          <CiLink />
          <p>Url input</p>
        </div>
        <div onClick={() => handleFormBlockClick("dropdowninput")}>
          <RxDropdownMenu />
          <p>Dropdown input</p>
        </div>
        <div onClick={() => handleFormBlockClick("radiobutton")}>
          <FaRegDotCircle />
          <p>Radio Button</p>
        </div>
        <div onClick={() => handleFormBlockClick("checkbox")}>
          <TiInputChecked />
          <p>Checkbox</p>
        </div>
      </div>

      <button onClick={addFormBlock}>Add block</button>
    </div>
  )
}

export default SideMenuNewFormBlocks
