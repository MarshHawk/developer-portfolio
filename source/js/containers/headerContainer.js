import { connect } from 'react-redux'

import { constants } from '../constants/actionTypes.js'
import HeaderComponent from '../components/headerComponent.js'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent)

export default HeaderContainer