import { FaPlus } from "react-icons/fa6"
import "./page.scss"

function CreateFormPage() {

  const toggleFormMenu = () => {
    console.log('toggleFormMenu')
  }

  return (
    <div className='create-form-wrapper'>
      <div className='side-menu-wrapper'>
        <div className='side-menu-header'>
          <h3>Create Form</h3>
          <p onClick={() => toggleFormMenu}>
            <FaPlus />
          </p>
        </div>

        <div className='side-menu-objects'>
          <h2>CreateFormPage</h2>
          <p>Här ska man se nuvarande valda object / inputs.</p>
        </div>
        <div className='side-menu-new-objects'>
          <p>Här ska man kunna lägga till nya objekt / inputs.</p>
        </div>
      </div>

      <section className='form-preview'></section>
    </div>
  )
}

export default CreateFormPage
