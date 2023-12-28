import "./FormCard.scss"

interface FormCardProps {
  date: string
  time: string
  title: string
  place: string
}

function FormCard({ date, time, title, place }: FormCardProps) {
  return (
    <div className='form-card'>
      <div className='top-card-text'>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <h3>{title}</h3>
      <p>{place}</p>
    </div>
  )
}

export default FormCard
