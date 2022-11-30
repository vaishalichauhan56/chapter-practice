import PropTypes from 'prop-types'

export default function Navbar(props) {

    return (
        <>
            <h1 className="text-primary">About Us</h1>
        </>
    )
}
Navbar.prototype = {
    title: PropTypes.string  // define name type string
}

Navbar.defaultProps = {
    title: 'Demo here'  // define name type string
};
