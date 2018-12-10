import { connect } from 'react-redux'

import { constants } from '../constants/actionTypes.js'
import RootComponent from '../components/rootComponent.js'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent)

export default RootContainer