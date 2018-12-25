import { connect } from 'react-redux'

//import { constants } from '../constants/actionTypes.js'
import FeatureComponent from '../components/featureComponent.js'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FeatureContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureComponent)

export default FeatureContainer