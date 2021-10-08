import { connect } from 'react-redux'
import EventList from '../component'
import { pushRoute } from 'rdx/actions'
import { acceptShowRequest } from '../action'

const mapState = (state, ownProps) => {
    let event = null
    const isRequestetShows = ownProps.location.state.requestetShows
    if (ownProps.location.state.requestetShows) {
        if (state.requestedShows.rows) {
            event = state.requestedShows.rows.find(
                (item) => item.id === ownProps.match.params.id
            )
            if (event) event = event.doc
        }
    } else {
        event = state.eventList.find(
            (item) => item._id === ownProps.match.params.id
        )
    }
    return {
        event,
        isEventListEmpty: state.eventList.length === 0,
        isRequestetShows,
    }
}

const mapDispatch = (dispatch) => ({
    redirctToPageNotFound: () => dispatch(pushRoute('/pageNotFound')),
    acceptShowRequest: (event) => dispatch(acceptShowRequest(event)),
})

const connector = connect(mapState, mapDispatch)

export default connector(EventList)
