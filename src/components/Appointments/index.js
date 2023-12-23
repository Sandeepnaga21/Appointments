import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {AppointmentList: [], name: '', date: '', isFavorite: false}

  onChangeName = event => ({name: event.target.value})

  onChangeDate = event => ({
    date: format(event.target.value, 'dd MMMM yyyy, EEEE'),
  })

  toggleIsFavorite = id => {
    const {isFavorite} = this.state
    this.setState(prevState => ({
      AppointmentList: prevState.AppointmentList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      name,
      date,
      isFavorite: false,
    }
    this.setState(prevState => ({
      AppointmentList: [...prevState.AppointmentList, newAppointment],
    }))
  }

  render() {
    const {AppointmentList} = this.state
    return (
      <div className="app-container">
        <form className="form">
          <h1 className="title">Add Appointment</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            className="img"
            alt="appointments"
          />
          <p className="label">TITLE</p>
          <input id="title" type="text" onChange={this.onChangeName} />
          <p className="label">DATE</p>
          <input id="date" type="date" onChange={this.onChangeDate} />
          <button className="button" onClick={this.onAddAppointment}>
            Add
          </button>
          <hr />
          <h1 className="appointment">Appointments</h1>
          <button className="star">Starred</button>
          <ul className="list">
            {AppointmentList.map(each => (
              <AppointmentItem
                appointmentDetails={each}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </form>
      </div>
    )
  }
}

export default Appointments
