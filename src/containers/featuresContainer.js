import { connect } from 'react-redux'

//import { constants } from '../constants/actionTypes.js'
import FeaturesComponent from '../components/featuresComponent.js'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FeaturesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturesComponent)

export default FeaturesContainer