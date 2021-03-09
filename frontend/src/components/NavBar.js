import React from 'react'
// eslint-disable-next-line

const NavBar = () => {

    const onClick = (event) => {
        event.preventDefault();
        const val = document.getElementById('searchValue').value;
        alert(`The Movie/TV Show search is: ${val}`);
    }

    return (
        <div className= 'container'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-3">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/aboutus">About Us</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 col-6">
                        <label htmlFor="searchValue"></label>
                    <input className="form-control mr-sm-2 col-8" type="search" placeholder="Search Movies/TV Shows" aria-label="Search" id="searchValue"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={onClick}>Search</button>
                    </form>
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Register</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
