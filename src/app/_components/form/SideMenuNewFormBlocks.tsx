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
import Text from "./form-sidebar-blocks/Text"
import TextInput from "./form-sidebar-blocks/TextInput"

function SideMenuNewFormBlocks() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const handleFormBlockClick = (formBlock: string) => {
    setSelectedBlock(formBlock)
  }

  return (
    <div className={styles.sideMenuNewBlocks}>
      {/* If the selectedblock state is empty show all blocks */}
      {selectedBlock === null && (
        <div className={styles.blockTypeContainer}>
          <div onClick={() => handleFormBlockClick("text")}>
            <TbLetterT />
            <p>Text</p>
          </div>
          <div onClick={() => handleFormBlockClick("textinput")}>
            <LuFormInput />
            <p>Text input</p>
          </div>
          <div className='text-gray-600'>
            <TbSquareLetterT />
            <p>Text Area</p>
          </div>
          <div className='text-gray-600'>
            <TbNumbers />
            <p>Number input</p>
          </div>
          <div className='text-gray-600'>
            <FaPhoneAlt />
            <p>Phone input</p>
          </div>
          <div className='text-gray-600'>
            <MdEmail />
            <p>Email input</p>
          </div>
          <div className='text-gray-600'>
            <IoCalendarNumberSharp />
            <p>Date input</p>
          </div>
          <div className='text-gray-600'>
            <CiLink />
            <p>Url input</p>
          </div>
          <div className='text-gray-600'>
            <RxDropdownMenu />
            <p>Dropdown input</p>
          </div>
          <div className='text-gray-600'>
            <FaRegDotCircle />
            <p>Radio Button</p>
          </div>
          <div className='text-gray-600'>
            <TiInputChecked />
            <p>Checkbox</p>
          </div>
        </div>
      )}

      {selectedBlock === "text" && <Text />}
      {selectedBlock === "textinput" && <TextInput />}
    </div>
  )
}

export default SideMenuNewFormBlocks
