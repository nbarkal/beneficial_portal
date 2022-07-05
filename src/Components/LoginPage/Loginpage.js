import React from 'react'
import './LoginPage.css'
import Navbar from '../Navbar/Navbar'
import Button from 'react-bootstrap/Button'

const LoginPage = () => {
  return (
    <div>
      <div className="body">
      <Navbar />
      <div className="login_container">
        <h1>შესვლა</h1>
        <input placeholder="პირადი ნომერი" className="id_input"></input>
        <input placeholder="პაროლი" className="password_input"></input>
      </div>
      <div className='sms_container'>
        <a href="#">პაროლის აღდგენა</a>
        <a href="#">მობილურის განახლება</a>
        <input placeholder="SMS კოდი" className="sms_input">
        </input>
      </div>
      <Button className='sms_input'>შესვლა</Button>
      </div>
    </div>
  )
}

export default LoginPage;
