import PropTypes from 'prop-types'

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/">About Us</a>
                            </li>

                        </ul>
                        <div className={`form-check form-switch text-${props.mode==='primary'?'dark':'primary'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="modeOn" />
                            <label className="form-check-label text-light" htmlFor="modeOn">Default switch checkbox input</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.prototype = {
    title: PropTypes.string  // define name type string
}

Navbar.defaultProps = {
    title: 'Demo here'  // define name type string
};
