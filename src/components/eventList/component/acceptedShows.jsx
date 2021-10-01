import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'
import EventFilter from 'components/eventFilter/container'
import DisplayDates from './displayDates'
import EventListItem from './eventListItem'

const EventList = ({ eventList, eventFilter }) => {
  const today = moment()

  if (eventList.length === 0) return null
  const sortEvents = {}
  eventList
    .filter((event) => {
      let regionActive = true
      let genreActive = true
            

      if (eventFilter.regions) {
        if (event.venueRegion && eventFilter.regions.includes(event.venueRegion)) {
          regionActive = true
        } else {
          regionActive = false
        }
      }
      if (eventFilter.genres) {
        if ( event.genres.reduce((acc, cur) => {
          return acc || eventFilter.genres.indexOf(cur) !== -1
        }, false)) {
          genreActive = true
        } else {
          genreActive = false
        }
      }
      return regionActive && genreActive
    })
    .forEach((event) => {
      event.dateKey = moment(event.date).format('DD.MM.YYYY')
      if (sortEvents[event.dateKey]) {
        return sortEvents[event.dateKey].push(event)
      }
      sortEvents[event.dateKey] = [event]
    })
  return (
    <Col className="event-list">
      <h1>Next shows</h1>
      <EventFilter />
      {Object.keys(sortEvents).map((key) => {
        const events = sortEvents[key]
        return (
          <div key={key}>
            <Row>
              <div className="event-list-date">
                <DisplayDates eventDate={key} today={today} />
              </div>
            </Row>
            {events.map((event, index) => (
              <EventListItem key={index} event={event} />
            ))}
          </div>
        )
      })}
    </Col>
  )
}

EventList.propTypes = {
  eventList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      date: PropTypes.string,
      name: PropTypes.string,
      headliner: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  eventFilter: PropTypes.object
}

export default EventList
