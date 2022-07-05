// import logo from './logo.svg';

import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, } from "@fortawesome/free-regular-svg-icons";
import {
  faHandsHolding, faHeartPulse, faFlask, faNetworkWired,
  faUsersLine, faHandHoldingHeart, faBriefcaseMedical,
  faGroupArrowsRotate, faPhone, faEnvelope, faArrowUp,
  faAnglesUp, faAnglesDown, faBars,
} from '@fortawesome/free-solid-svg-icons'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from "./image/choose-img.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import slider from './image/slider.jpg'
import logo from './image/logo.png'
import logowhite from './image/logo-white.png'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Collapse from 'react-bootstrap/Collapse'
import navbars from './image/navbars.png'
import cardBackground from './image/cardBackground.png'
import cardBackground2 from './image/cardBackground2.png'
import Accordion from 'react-bootstrap/Accordion';
import Navbar from './Components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";

import { Slide, Slider } from './Slider'

import image1 from './assets/image_1.jpg';
import image2 from './assets/image_2.jpg';
import image3 from './assets/image_3.jpg';
import image4 from './assets/image_4.jpg';
import image5 from './assets/image_5.jpg';



function App() {
  const [showSlider, setShowSlider] = useState(false);
  const [hideBtn, setHideBtn] = useState('');
  const [hideBtn1, setHideBtn1] = useState('none');
  const [cardColor, setCardColor] = useState('');
  const [cardColor1, setCardColor1] = useState('');
  const [cardColor2, setCardColor2] = useState('');
  const [cardColor3, setCardColor3] = useState('');
  const [cardColor4, setCardColor4] = useState('');
  const [cardColor5, setCardColor5] = useState('');
  const [cardColor6, setCardColor6] = useState('');
  const [cardColor7, setCardColor7] = useState('');
  const [cardColor8, setCardColor8] = useState('');
  const [cardColor9, setCardColor9] = useState('');
  const [cardColor10, setCardColor10] = useState('');
  const [cardColor11, setCardColor11] = useState('');
  const [cardTxtColor, setTxtCardColor] = useState('');
  const [cardTxtColor1, setTxtCardColor1] = useState('');
  const [cardTxtColor2, setTxtCardColor2] = useState('');
  const [cardTxtColor3, setTxtCardColor3] = useState('');
  const [cardTxtColor4, setTxtCardColor4] = useState('');
  const [cardTxtColor5, setTxtCardColor5] = useState('');
  const [cardTxtColor6, setTxtCardColor6] = useState('');
  const [cardTxtColor7, setTxtCardColor7] = useState('');
  const [cardTxtColor8, setTxtCardColor8] = useState('');
  const [cardTxtColor9, setTxtCardColor9] = useState('');
  const [cardTxtColor10, setTxtCardColor10] = useState('');
  const [cardTxtColor11, setTxtCardColor11] = useState('');
  let navigate = useNavigate();


  const showMoreClick = () => {
    console.log('111111111111')
  }

  const loginClick = () => {
    console.log('nika');
    navigate(`/login`);
  }

  return (
    <>
      <style type="text/css">
        {`

        .dropdown-toggle:empty::after {
          margin-left: 2.5px;
        }

        .dropdown{
          background-image: url("./image/navbars.jpg");
        }
                      
      `}
      </style>

      <div className="App">
        <div className="body">

          <div className="header">
            <ul className="title">
              <li><a href="#"><img src={logo}></img></a></li>
              <li><a href="#"><h5>ბენეფიციარის<br className="br-mobile-enable"></br>პორტალი</h5></a></li>
            </ul>
            <div className="nav-container">
              <div className="nav-bar">
                <li className="d-none d-lg-block"><a href="#">- ჩვენ შესახებ</a></li>
                <li className="d-none d-lg-block"><a href="#">- სერვისები</a></li>
                <li className="d-none d-lg-block"><a href="#">- კონტაქტი</a></li>
              </div>
              <div className="h-btns">
                <li className='d-none d-lg-block'>
                  <Button className="notifications">
                    <FontAwesomeIcon icon={faBell} className="notificationIcon" />
                  </Button>
                </li>
                <li>
                  <Button className="profile">
                    <FontAwesomeIcon icon={faUser} className="profileIcon" />
                  </Button>
                </li>
                <li className='d-block d-lg-none'>
                  <DropdownButton align="center" id="dropdown-menu-align-start">
                    <Dropdown.Item eventKey="1">- ჩვენ შესახებ
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">- სერვისები
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">- კონტაქტი
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </div>
            </div>
          </div>
          <Navbar />


          <button className="slider-down" style={{ display: hideBtn1 }} onClick={() => { setShowSlider(!showSlider); setHideBtn(''); setHideBtn1('none') }}>
            <FontAwesomeIcon icon={faAnglesDown}></FontAwesomeIcon>
          </button>



          {/* droebiti clasneimi */}

          <div className={`test ${showSlider ? 'hide' : ''}`}>
            <div className='d-block d-md-none lg-slider'>
              <Carousel className='md-slider' interval={null} nextLabel={null} nextIcon={null}>
                <Carousel.Item>
                  <div className="first-slide">
                    <img src={foto} className='main-photo'></img>
                    <div className="slider-text-container">
                      <h1>
                        შენი პირადი პროფილი..
                      </h1>
                      <h6>
                        ეწვიეთ პირად პროფილს ან გაიარეთ
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </h6>
                    </div>
                    <div className="mob-slider-buttons">
                      <Button onClick={loginClick}>შესვლა</Button>
                      <Button>რეგისტრაცია</Button>
                    </div>
                  </div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="second-slide">
                    <img src={foto} className='main-photo'></img>
                    <div className="slider-text-container">
                      <h1>
                        შენი პირადი პროფილი..
                      </h1>
                      <h6>
                        ეწვიეთ პირად პროფილს ან გაიარეთ
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </h6>
                    </div>
                    <div className="mob-slider-buttons">
                      <Button>შესვლა</Button>
                      <Button>რეგისტრაცია</Button>
                    </div>
                  </div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="third-slide">
                    <img src={foto} className='main-photo'></img>
                    <div className="slider-text-container">
                      <h1>
                        შენი პირადი პროფილი..
                      </h1>
                      <h6>
                        ეწვიეთ პირად პროფილს ან გაიარეთ
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        რეგისტრაცია. მიიღეთ სრული
                        <br></br>
                        ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </h6>
                    </div>
                    <div className="mob-slider-buttons">
                      <Button>შესვლა</Button>
                      <Button>რეგისტრაცია</Button>
                    </div>
                  </div>
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <Button className='arrow-up' style={{ display: hideBtn }} onClick={() => { setShowSlider(!showSlider); setHideBtn1(''); setHideBtn('none') }}>
              <FontAwesomeIcon icon={faAnglesUp} className={`${showSlider ? 'font_awesome_arrow' : ''}`}></FontAwesomeIcon>
            </Button>

          </div>





          <div className="slider-box">
            <Slider showNav>
              <Slide>
                <div className='login_register'>
                  <div className='login_register_container'>
                    <h4>შენი პირადი პროფილი..</h4>
                    <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                      მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                      <br></br>
                      სერვისები..
                      ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                    </p>
                    <div className="log-reg-btn-container">
                      <Button className='login-btn'>შესვლა</Button>
                      <Button className='register-btn'>რეგისტრაცია</Button>
                    </div>
                  </div>
                </div>
                <div className='first-slider-img'>
                  <img src={foto}></img>
                </div>
              </Slide>
              <Slide>
                <div className='login_register'>
                  <div className='login_register_container'>
                    <h4>შენი პირადი პროფილი..</h4>
                    <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                      მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                      <br></br>
                      სერვისები..
                      ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                    </p>
                    <div className="log-reg-btn-container">
                      <Button className='login-btn'>შესვლა</Button>
                      <Button className='register-btn'>რეგისტრაცია</Button>
                    </div>
                  </div>
                </div>
                <div className='first-slider-img'>
                  <img src={foto}></img>
                </div>
              </Slide>
              <Slide>
                <div className='login_register'>
                  <div className='login_register_container'>
                    <h4>შენი პირადი პროფილი..</h4>
                    <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                      მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                      <br></br>
                      სერვისები..
                      ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                      <br></br>
                    </p>
                    <div className="log-reg-btn-container">
                      <Button className='login-btn'>შესვლა</Button>
                      <Button className='register-btn'>რეგისტრაცია</Button>
                    </div>
                  </div>
                </div>
                <div className='first-slider-img'>
                  <img src={foto}></img>
                </div>
              </Slide>
            </Slider>
            {/* <Carousel interval={null}>
              <Carousel.Item>
                <div className="first-slide-pc">
                  <div className="personal-profile">
                    <div className="personal-profile-container">
                      <h4>შენი პირადი პროფილი..</h4>
                      <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                        <br></br>
                        მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </p>
                      <div className="login-register">
                        <Button className='login-btn'>შესვლა</Button>
                        <Button className='register-btn'>რეგისტრაცია</Button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-img">
                    <img src={foto}></img>
                  </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="first-slide-pc">
                  <div className="personal-profile">
                    <div className="personal-profile-container">
                      <h4>შენი პირადი პროფილი..</h4>
                      <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                        <br></br>
                        მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </p>
                      <div className="login-register">
                        <Button className='login-btn'>შესვლა</Button>
                        <Button className='register-btn'>რეგისტრაცია</Button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-img">
                    <img src={foto}></img>
                  </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="first-slide-pc">
                  <div className="personal-profile">
                    <div className="personal-profile-container">
                      <h4>შენი პირადი პროფილი..</h4>
                      <p>ეწვიეთ პირად პროფილს ან გაიარეთ რეგისტრაცია.
                        <br></br>
                        მიიღეთ სრული ინფორმაცია და თქვენთვის სასურველი
                        <br></br>
                        სერვისები..
                      </p>
                      <div className="login-register">
                        <Button className='login-btn'>შესვლა</Button>
                        <Button className='register-btn'>რეგისტრაცია</Button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-img">
                    <img src={foto}></img>
                  </div>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>

          {/* <img
    style={{ width: '400px' }}
    className="d-block"
    src={foto}
    alt="Second slide"
  /> */}


          <div className="collection">

            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a className='block' style={{ background: cardColor, color: cardTxtColor }}
                onClick={() => { setCardColor('#23448F'); setTxtCardColor('white') }}>
                <div><FontAwesomeIcon icon={faHandsHolding} className='c_icon' style={{ color: cardTxtColor }} /></div>
                <div style={{ color: cardTxtColor }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a className='showmore' onClick={showMoreClick} style={{ cursor: "pointer" }}>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor1, color: cardTxtColor1 }}
                onClick={() => { setCardColor1('#23448F'); setTxtCardColor1('white') }}>
                <div><FontAwesomeIcon icon={faHeartPulse} className='c_icon' style={{ color: cardTxtColor1 }} /></div>
                <div style={{ color: cardTxtColor1 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor2, color: cardTxtColor2 }}
                onClick={() => { setCardColor2('#23448F'); setTxtCardColor2('white') }}>
                <div><FontAwesomeIcon icon={faFlask} className='c_icon' style={{ color: cardTxtColor2 }} /></div>
                <div style={{ color: cardTxtColor2 }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor3, color: cardTxtColor3 }}
                onClick={() => { setCardColor3('#23448F'); setTxtCardColor3('white') }}>
                <div><FontAwesomeIcon icon={faNetworkWired} className='c_icon' style={{ color: cardTxtColor3 }} /></div>
                <div style={{ color: cardTxtColor3 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor4, color: cardTxtColor4 }}
                onClick={() => { setCardColor4('#23448F'); setTxtCardColor4('white') }}>
                <div><FontAwesomeIcon icon={faUsersLine} className='c_icon' style={{ color: cardTxtColor4 }} /></div>
                <div style={{ color: cardTxtColor4 }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor5, color: cardTxtColor5 }}
                onClick={() => { setCardColor5('#23448F'); setTxtCardColor5('white') }}>
                <div><FontAwesomeIcon icon={faHandHoldingHeart} className='c_icon' style={{ color: cardTxtColor5 }} /></div>
                <div style={{ color: cardTxtColor5 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor6, color: cardTxtColor6 }}
                onClick={() => { setCardColor6('#23448F'); setTxtCardColor6('white') }}>
                <div><FontAwesomeIcon icon={faBriefcaseMedical} className='c_icon' style={{ color: cardTxtColor6 }} /></div>
                <div style={{ color: cardTxtColor6 }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor7, color: cardTxtColor7 }}
                onClick={() => { setCardColor7('#23448F'); setTxtCardColor7('white') }}>
                <div><FontAwesomeIcon icon={faHeartPulse} className='c_icon' style={{ color: cardTxtColor7 }} /></div>
                <div style={{ color: cardTxtColor7 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a className='block' style={{ background: cardColor8, color: cardTxtColor8 }}
                onClick={() => { setCardColor8('#23448F'); setTxtCardColor8('white') }}>
                <div><FontAwesomeIcon icon={faHandsHolding} className='c_icon' style={{ color: cardTxtColor8 }} /></div>
                <div style={{ color: cardTxtColor8 }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a className='showmore' onClick={showMoreClick} style={{ cursor: "pointer" }}>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor9, color: cardTxtColor9 }}
                onClick={() => { setCardColor9('#23448F'); setTxtCardColor9('white') }}>
                <div><FontAwesomeIcon icon={faHeartPulse} className='c_icon' style={{ color: cardTxtColor9 }} /></div>
                <div style={{ color: cardTxtColor9 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor10, color: cardTxtColor10 }}
                onClick={() => { setCardColor10('#23448F'); setTxtCardColor10('white') }}>
                <div><FontAwesomeIcon icon={faFlask} className='c_icon' style={{ color: cardTxtColor10 }} /></div>
                <div style={{ color: cardTxtColor10 }}>
                  სოციალური
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
            <div className="col">
              {/* <img src={cardBackground} className="cardBackground"></img>
                  <img src={cardBackground2} className="cardBackground2"></img> */}
              <a href="#" className='block' style={{ background: cardColor11, color: cardTxtColor11 }}
                onClick={() => { setCardColor11('#23448F'); setTxtCardColor11('white') }}>
                <div><FontAwesomeIcon icon={faNetworkWired} className='c_icon' style={{ color: cardTxtColor11 }} /></div>
                <div style={{ color: cardTxtColor11 }}>
                  ჯანდაცვის
                  <br className='br-mobile-disable'></br>
                  სერვისები და
                  <br className='br-mobile-disable'></br>
                  შენი პროფილი
                </div>
                <a href="#" className='showmore'>
                  ვრცლად..
                </a>
              </a>
            </div>
          </div>

          <footer className="footer">
            <Container fluid>
              <Row>
                <Col xl={4} lg={4} className="d-none d-lg-block mt-lg-4 ml-lg-4 mt-md-4 ml-md-4">
                  <img src={logowhite} className="logo-img"></img>
                  <h5 className="footerh4">ბენეფიციარის პორტალი</h5>
                </Col>
                <Col xl={8} lg={8} md={12} sm={12} fluid>
                  <div className="table">
                    <div className="mt-md-3 mt-sm-4 m-425">
                      <ul>
                        <li className='f_child'>ჩვენ შესახებ</li>
                      </ul>
                      <ul>
                        <li><a href="#">- ინფორმაცია</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">- სამსახური</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">- პროფილი</a></li>
                      </ul>
                    </div>
                    <div className='mt-md-3  mt-sm-4 m-425'>
                      <ul>
                        <li className='f_child'>სერვისები</li>
                      </ul>
                      <ul>
                        <li><a href="#">- ინფორმაცია</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">- სამსახური</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">- პროფილი</a></li>
                      </ul>
                    </div>
                    <div className='mt-md-3  mt-sm-4'>
                      <ul>
                        <li className='f_child'>კონტაქტი</li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            &nbsp;
                            (+995 32) 2 333 333
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            &nbsp;
                            moh@gov.ge
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </div>
    </>
  );

}

export default App;
