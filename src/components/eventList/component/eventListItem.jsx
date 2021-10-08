import React from 'react'
import PropTypes from 'prop-types'
import { eventShape } from 'gncsPropTypes'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

import EventTitle from './eventTitle'
import { randomFigure } from 'components/utils'

const EventListItem = ({ event }) => {
  const imageNumber = randomFigure(20)
  const imageName = '.jpg'
  const imagePath = '/images/eventListElement/'
  const eventDate = moment(event.date).format('HH:mm | DD.MM.YYYY')

  return (
    <Link to={'/EventDetail/' + event._id}>
      <div className="list-event">
        <Row>
          <Col xs={12} md={2} className="event-list-img">
            <img src={`${imagePath}${imageNumber}${imageName}`} alt="default event list logo" />
          </Col>
          <Col xs={12} md={5}>
            <EventTitle title={event.name} headliner={event.headliner} />
            <ul>
              {event.support.map((support, index, array) => (
                <li key={`support-list-${index}`}>
                  {support} {index === array.length - 1 ? '' : '-'}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={3} className="d-none d-sm-block">
            <h2>{event.venue}</h2>
            {eventDate}
          </Col>
          <Col xs={12} className="d-block d-sm-none">
            <h3>
              <span className="float-left">{event.venue}</span>
              <span className="float-right">
                {eventDate}
              </span>
            </h3>
          </Col>
          <Col xs={12} md={2}>
            <p>
              {event.presale && `Presale: ${event.presale} ${event.atTheDoor ? ', ' : ''} `}
              {event.atTheDoor && `Price at the Door: ${event.atTheDoor}`}
            </p>
            <p className="genres">
              {Array.from(
                new Set(
                  [].concat.apply(
                    [],
                    event.artist_details.map((item) => item.genres)
                  )
                )
              ).join(', ')}
            </p>
          </Col>
        </Row>
      </div>
    </Link>
  )

}

EventListItem.propTypes = {
  event: PropTypes.shape(eventShape),
}

export default EventListItem
