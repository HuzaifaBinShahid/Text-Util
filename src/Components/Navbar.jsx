import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Navbar(props) {

  let iconStyle = {
    color: 'white'
  }

  const lightTheme = <FontAwesomeIcon size="2xl" icon={faMoon} style={iconStyle} />
  const darkTheme = <FontAwesomeIcon size="2xl" icon={faSun} style={iconStyle} />


  const handelModeClick = () => {
    props.onModeClick();

  }


  const currentMode = props.LightMode ? darkTheme : lightTheme;




  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>


          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}

          <li onClick={handelModeClick} style={{ listStyle: 'none' }}>{currentMode}</li>


        </div>
      </div>
    </nav>

  );

}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "about text here"
}

