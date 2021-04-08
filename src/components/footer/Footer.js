import React from 'react'
import styled from 'styled-components'
import test from '../../images/test.PNG'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { RiTwitterFill } from 'react-icons/ri'
import FooterMiddle from './FooterMiddle'
import customer from '../../images/customer.png'
import mail from '../../images/mail.png'
import phone from '../../images/phone.png'

const Footer = () => {
  return (
    <Wrapper className='section-center'>
      <div className='social'>
        <FaFacebookF />
        <RiTwitterFill />
        <FiInstagram />
        <FaLinkedinIn />
        <AiFillYoutube />
      </div>
      <div className='wrapper'>
        <div>
          <img src={test} alt='' />
        </div>
        <div>
          <FooterMiddle />
        </div>
        <div className='contact'>
          <h5>CONTACT US</h5>
          <div className='header'>
            <div className='imgcontainer'>
              <img src={customer} alt='' />
            </div>
            <h6>hotline : </h6>
          </div>
          <p>+8801929459195 (10am-10pm/Sat-Thur)</p>

          <div className='header'>
            <div className='imgcontainer'>
              <img src={phone} alt='' />
            </div>
            <h6>Whole Sales : </h6>
          </div>
          <p>01929459195 (10am-12pm)</p>

          <div className='header'>
            <div className='imgcontainer'>
              <img src={mail} alt='' />
            </div>
            <h6>Email :</h6>
          </div>
          <p>support.example@gmail.com</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  border-top: 1px solid #efefef;
  .social {
    margin: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }
  .social svg {
    color: #cbcbcb;
    font-size: 20px;
    cursor: pointer;
  }
  .wrapper {
    display: grid;
    gap: 2rem;
    justify-items: center;
    @media (min-width: 950px) {
      grid-template-columns: 1fr 2fr;
    }
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 2fr 1fr;
    }
  }

  margin-bottom: 3rem;
  h6 {
    letter-spacing: var(--spacing);
    font-size: 14px;
    text-transform: capitalize;
  }
  .header {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin-top: 1rem;
  }
  p {
    font-size: 13px;
    padding-left: 1.5rem;
  }
  .imgcontainer {
    height: 14px;
    width: 14px;
  }
`
export default Footer
