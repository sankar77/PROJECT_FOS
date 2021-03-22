import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthProvider";
import { Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {

    const onClick = (event) => {
        event.preventDefault();
        const val = document.getElementById('searchValue').value;
        alert(`The Movie/TV Show search is: ${val}`);
    }

    const {user, logOut} = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    const customToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            href=""
            ref={ref}
            onClick={e => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                 className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            {children}
        </a>
    ));

    async function signOutHandler(event) {
        setError('');
        try {
            await logOut();
            history.pushState('/');
        } catch {
            setError('Failed to sign out.');
        }
    }

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-3">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutuspage">About Us</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 col-6">
                        <label htmlFor="searchValue"></label>
                        <input className="form-control mr-sm-2 col-8" type="search" placeholder="Search Movies/TV Shows"
                               aria-label="Search" id="searchValue"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"
                                onClick={onClick}>Search
                        </button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                        {user != null
                            ? <>
                                <li className="nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle as={customToggle} id="dropdown-custom-components">
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1">
                                                <Link to='/profile'>Profile</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2">
                                                <Link to='/account'>Account</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onClick={signOutHandler}>
                                                Sign Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </>
                            : <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Log In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">Sign Up</a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
