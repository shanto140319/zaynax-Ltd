import React from 'react'
import styled from 'styled-components'
import { FaTelegramPlane } from 'react-icons/fa'

import bkash from '../../images/bkash.png'
import amx from '../../images/amex-logo-png.png'
import visa from '../../images/g4158.png'
import master from '../../images/Mastercard-logo.png'
import nagad from '../../images/nagad-logo-7A70CCFEE0-seeklogo.com.png'

const FooterMiddle = () => {
  return (
    <Wrapper>
      <h5>SUBSCRIBE</h5>
      <p>Get the latest news from zDrop</p>
      <form>
        <input type='email' placeholder='Email address' />
        <button type='submit'>
          <FaTelegramPlane className='telegram' />
        </button>
      </form>
      <ul>
        <li>About</li>
        <li>zDrop</li>
        <li>FAQ & Support</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>

      <ul className='images'>
        <li>
          <img src={bkash} alt='' />
        </li>
        <li>
          <img src={amx} alt='' />
        </li>
        <li>
          <img src={visa} alt='' />
        </li>
        <li>
          <img src={master} alt='' />
        </li>
        <li>
          <img src={nagad} alt='' />
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (max-width: 450px) {
    padding: 0 1rem;
  }
  p {
    font-size: 14px;
  }
  form {
    margin: 1rem 0;
    position: relative;
  }
  input {
    border: none;
    border-bottom: 1px solid #222;
    padding-bottom: 0.4rem;
    width: 300px;
    @media (max-width: 450px) {
      width: 250px;
    }
  }
  input:focus {
    outline: none;
  }
  .telegram {
    position: absolute;
    top: 30%;
    right: 35%;
    @media (max-width: 450px) {
      right: 25%;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin: 1.5rem 0;
    @media (max-width: 450px) {
      gap: 0.6rem;
    }
  }
  ul li {
    font-size: 13px;
    font-weight: 500;
  }
  .images li {
    height: 30px;
    width: 70px;
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    padding: 0.5rem;
    border-radius: 5px;
  }
`
export default FooterMiddle
