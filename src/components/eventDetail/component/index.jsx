import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'

import { eventShape } from 'gncsPropTypes'
import { randomFigure } from 'components/utils'

class EventDetail extends React.Component {
  componentDidUpdate() {
    const { event, isEventListEmpty, redirctToPageNotFound } = this.props
    if (!event && !isEventListEmpty) redirctToPageNotFound()
  }

  render() {
    const { event } = this.props
    if (!event) return <div>not found</div>

    let imageNumber = randomFigure(20)
    const imageName = '.jpg'
    const imagePath = '/images/eventDetailHeader/'
    const eventDate = moment(event.date).format('DD.MM.YYYY - HH.mm')
    const [eventDay, eventTime] = eventDate.split(' - ')

    return (
      <div className="event-detail">
        <Col>
          <div className="event-head" style={{ backgroundImage: `url("${imagePath}${imageNumber}${imageName}")` }} >
            <img src="" />
            <h2 className="event-headline">
              {eventDate}
            </h2>
            <h2 className="event-headline">
              {event.name && event.name.trim() !== ''
                ? event.name
                : event.headliner}
            </h2>
            <h2 className="event-headline">{event.venue}</h2>
          </div>

          <Row className="event-body">
            <Col md={{ span: 6 }}>
              <div>
                {event.description ?
                  (
                    <div>
                      <p>{event.description}</p>
                    </div>
                  ) : ''
                }
              </div>
              {event.artist_details.map((artist_details, index) => (
                <div key={index} className="event-artist-details">
                  <h2>{artist_details.name}</h2>
                  <p>Genre: {artist_details.genres.join(', ')}</p>
                  <ul>
                    {artist_details.links.map((link, index) => (
                      <li key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Col>

            <Col md={{ span: 4, offset: 2 }} className="float-right event-details">
              <div className="floatright">

                <h2>Details</h2>
                <ul>
                  <li>
                    <span className="float-left">
                      Date:
                    </span>
                    <span className="float-right">
                      {eventDay}
                    </span>
                  </li>
                  <li>
                    <span className="float-left">
                      Start:
                    </span>
                    <span className="float-right">
                      {eventTime}
                    </span>
                  </li>
                  <li>
                    <span className="float-left">
                      Location:
                    </span>
                    <span className="float-right text-right">
                      {event.venue} <br />
                      {event.venueStreet} <br />
                      {event.venuePostalCode} <br />
                      {event.venueRegion}
                    </span>
                  </li>
                  <li>
                    <span className="float-left">
                      Presale:
                    </span>
                    <span className="float-right">
                      {event.presale ? event.presale : '-'}
                    </span>
                  </li>
                  <li>
                    <span className="float-left">
                      box office:
                    </span>
                    <span className="float-right">
                      {event.atTheDoor ? event.atTheDoor : '-'}
                    </span>
                  </li>
                  <li>
                    {event.facebookLink && event.facebookLink.trim() !== '' ? (
                      <>
                        <a
                          href={event.facebookLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Facebook Event
                        </a>
                      </>
                    ) : (
                      ''
                    )}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    )
  }
}

EventDetail.propTypes = {
  event: PropTypes.shape(eventShape),
  handleClick: PropTypes.func,
  isEventListEmpty: PropTypes.bool,
  redirctToPageNotFound: PropTypes.func,
}

export default EventDetail
