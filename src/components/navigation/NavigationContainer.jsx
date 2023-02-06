import { connect } from 'react-redux'
import Navigation from './Navigation'

const mapStateToProps = (state) => {
    return {
        navigationMenuLinks: state.navigationSection.navigationMenuLinks,
        friends: state.navigationSection.friends,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer
