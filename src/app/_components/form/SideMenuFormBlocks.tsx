// "use client"
import { FaGripLines, FaTrashCan } from "react-icons/fa6"
import { api } from "~/trpc/react"
import { useForm } from "../../../contexts/FormContext"
import styles from "./SideMenuFormBlocks.module.scss"

function SideMenuFormBlocks() {
  const { formData, setFormData, removeFormBlock } = useForm()

  const handleRemoveFormBlock = (index: number) => {
    removeFormBlock(index)
  }

  const moveBlock = () => {
    // Function to move the form block in the form
    console.log("moveBlock")
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  //   {
  //     "title": "New form with a long for a very cool event",
  //     "startDate": "2024-01-19",
  //     "endDate": "2024-01-19",
  //     "startTime": "13:30",
  //     "endTime": "16:30",
  //     "location": "Dårhuset",
  //     "description": "Join us for an unforgettable event filled with exciting activities and opportunities to connect! This event promises a diverse lineup of engaging experiences suitable for all ages and interests. From interactive workshops and inspiring keynote speeches to entertaining performances and networking sessions, there's something for everyone. Whether you're looking to learn new skills, meet like-minded individuals, or simply enjoy a day of fun and discovery, our event is the perfect destination. Mark your calendars and stay tuned for more details. We look forward to welcoming you and creating memorable moments together",
  //     "formBlocks": [
  //         {
  //             "order": 0,
  //             "title": "sdaasd",
  //             "type": "textInput",
  //             "required": false,
  //             "placeholderText": "Write something here..."
  //         }
  //     ],
  //     "responses": []
  // }

  const { mutate } = api.form.createForm.useMutation()

  const generateForm = () => {
    // mutate(formData)
    console.log(formData)
  }

  return (
    <div className={styles.sideMenuFormBlock}>
      <h2 className={styles.sideMenuHeading}>Required blocks</h2>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-title'>Form Title *</label>
        <input
          required
          id='form-title'
          name='title'
          type='text'
          value={formData.title}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Date *</label>
        <input
          required
          id='form-date'
          name='startDate'
          type='date'
          value={formData.startDate}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-location'>Form Time *</label>
        <input
          required
          id='form-time'
          name='startTime'
          type='time'
          value={formData.startTime}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-date'>Form Location *</label>
        <input
          required
          id='form-date'
          name='location'
          type='text'
          value={formData.location}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <div className={styles.formBlock}>
        <FaTrashCan onClick={handleRemoveFormBlock} />
        <label id='form-description'>Form Description *</label>
        <input
          required
          id='form-description'
          name='description'
          type='text'
          value={formData.description}
          onChange={handleInputChange}
        />
        <FaGripLines onClick={moveBlock} />
      </div>
      <br />

      <h2 className={styles.sideMenuHeading}>Added blocks</h2>
      {formData.formBlocks.map((formBlock, index) => {
        return (
          <div className={styles.formBlock} key={index}>
            <FaTrashCan onClick={() => handleRemoveFormBlock(index)} />
            <p>
              {formBlock.type} - {`${formBlock.title} ${formBlock.content}`}
            </p>
            <FaGripLines onClick={moveBlock} />
          </div>
        )
      })}

      {formData.formBlocks.length > 0 && (
        <div className={styles.iconContainer}>
          <button onClick={generateForm}>Generate Form</button>
        </div>
      )}
    </div>
  )
}

export default SideMenuFormBlocks
