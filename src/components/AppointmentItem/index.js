import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {name, id, date, isFavorite} = appointmentDetails

  const onToggleBtnClicked = () => {
    toggleIsFavorite(id)
  }

  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-conatiner">
      <h1 className="heading">{name}</h1>
      <p className="date">{date}</p>
      <button className="button" onClick={onToggleBtnClicked}>
        <img src={imgUrl} alt="like" />
      </button>
    </li>
  )
}

export default AppointmentItem
