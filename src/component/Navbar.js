import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar sticky-top navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Themes
                                </a>
                                <ul className="dropdown-menu">
                                    {/* <button className='dropdown-item btn btn-secondary' onClick={props.blueTheme} > Blue </button> */}
                                    {/* <img className='dropdown-item' src="https://miro.medium.com/v2/resize:fit:1400/1*-MckW8N4L4BQPtQvgVqT9w.png" alt="" width="10%"/> */}
                                    <li><a className="dropdown-item" href="#">Frontend Developer</a></li>
                                    <li><a className="dropdown-item" href="#">Backend Developer</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">FullStack Website Developer</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-disabled="true">About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>{props.btnText}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
