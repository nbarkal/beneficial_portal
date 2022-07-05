import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import logoWhite from '../Navbar/whiteLogo.png';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            <div className="m_title_logo">
                <img src={logoWhite} className='m-logo-svg'></img>
                <h1 className="m_title">
                    ბენეფიციარის პორტალი
                </h1>
            </div>

            {toggleMenu && (
                <ul className='list'>
                    <li className='items'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>ჩვენ შესახებ</Accordion.Header>
                                <Accordion.Body>
                                    <ul className='accordion-ul'>
                                        <li>ინფორმაცია</li>
                                        <li>სამსახური</li>
                                        <li>პროფილი</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </li>
                    <li className='items'>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>სერვისები</Accordion.Header>
                                <Accordion.Body>
                                    <ul className='accordion-ul'>
                                        <li>ინფორმაცია</li>
                                        <li>სამსახური</li>
                                        <li>პროფილი</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </li>
                    <li className='items'><Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>კონტაქტი</Accordion.Header>
                            <Accordion.Body>
                                <ul className='accordion-ul'>
                                    <li>ინფორმაცია</li>
                                    <li>სამსახური</li>
                                    <li>პროფილი</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></li>
                </ul>)}

            <button onClick={toggleNav} className='toggle'>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <button className='m-user'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                <span className='notification-element'>2</span>
            </button>
        </nav>
    )
}
