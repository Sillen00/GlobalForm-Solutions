import { FaGripLines, FaTrashCan } from "react-icons/fa6"

import "./SideMenuFormObjects.scss"

function SideMenuFormObjects() {
  return (
    <div className='side-menu-form-objects'>
      <div className='form-object'>
        <FaTrashCan className='trashcan-icon' />
        <div className='input-box'>
          <label id='form-title'>Form Title</label>
          <input id='form-title' type='text' />
        </div>
        <FaGripLines />
      </div>
    </div>
  )
}

export default SideMenuFormObjects
