import { useState } from "react"
import { CiLink } from "react-icons/ci"
import { FaPhoneAlt, FaRegDotCircle } from "react-icons/fa"
import { IoCalendarNumberSharp } from "react-icons/io5"
import { LuFormInput } from "react-icons/lu"
import { MdEmail } from "react-icons/md"
import { RxDropdownMenu } from "react-icons/rx"
import { TbLetterT, TbNumbers, TbSquareLetterT } from "react-icons/tb"
import { TiInputChecked } from "react-icons/ti"
import styles from "./SideMenuAddFormBlocks.module.scss"
import SideMenuTextBlock from "./sidemenu-blocks/SideMenuTextBlock"
import SideMenuTextInput from "./sidemenu-blocks/SideMenuTextInput"

interface Props {
  toggleSideMenuContent: () => void
}

function SideMenuAddFormBlocks({ toggleSideMenuContent }: Props) {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null)

  const handleFormBlockClick = (formBlock: string) => {
    setSelectedBlock(formBlock)
  }

  return (
    <div className={styles.sideMenuAddBlocks}>
      {/* If the selectedblock state is empty show all blocks */}
      {selectedBlock === null && (
        <div className={styles.blockTypeContainer}>
          <div onClick={() => handleFormBlockClick("text")}>
            <TbLetterT aria-label='Text icon' />
            <p>Text</p>
          </div>
          <div onClick={() => handleFormBlockClick("textInput")}>
            <LuFormInput aria-label='Form input icon' />
            <p>Text input</p>
          </div>
          <div className='text-gray-600'>
            <TbSquareLetterT aria-label='Text area icon' />
            <p>Text Area</p>
          </div>
          <div className='text-gray-600'>
            <TbNumbers aria-label='Number icon' />
            <p>Number input</p>
          </div>
          <div className='text-gray-600'>
            <FaPhoneAlt aria-label='Phone icon' />
            <p>Phone input</p>
          </div>
          <div className='text-gray-600'>
            <MdEmail aria-label='Email icon' />
            <p>Email input</p>
          </div>
          <div className='text-gray-600'>
            <IoCalendarNumberSharp aria-label='Calendar icon' />
            <p>Date input</p>
          </div>
          <div className='text-gray-600'>
            <CiLink aria-label='Link icon' />
            <p>Url input</p>
          </div>
          <div className='text-gray-600'>
            <RxDropdownMenu aria-label='Dropdown icon' />
            <p>Dropdown input</p>
          </div>
          <div className='text-gray-600'>
            <FaRegDotCircle aria-label='Radio buttons icon' />
            <p>Radio Button</p>
          </div>
          <div className='text-gray-600'>
            <TiInputChecked aria-label='Checkbox icon' />
            <p>Checkbox</p>
          </div>
        </div>
      )}

      {/* Side Menu Blocks */}
      {selectedBlock === "text" && (
        <SideMenuTextBlock toggleSideMenuContent={toggleSideMenuContent} />
      )}
      {selectedBlock === "textInput" && (
        <SideMenuTextInput toggleSideMenuContent={toggleSideMenuContent} />
      )}
    </div>
  )
}

export default SideMenuAddFormBlocks
