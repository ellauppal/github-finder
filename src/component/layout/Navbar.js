import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({ icon, title }) => {
    return (
        // making colour navbar
        <nav className='navbar bg-primary'> 
            <h1>
            <i className={icon} ></i> {title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon:  'fa fa-github'
};

// ensuring proper data types are used for components
// not required but important
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
    // different from UserItem.js because no object
}

export default Navbar
