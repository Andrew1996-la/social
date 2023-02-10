import Friends from './Friends'
import { connect } from 'react-redux'

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = () => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
