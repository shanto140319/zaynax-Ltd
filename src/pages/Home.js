import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import shanto from '../images/shanto.jpg'

const Home = () => {
  return (
    <Wrapper className='page'>
      <div className='section-center'>
        <hr />
        <div className='header'>
          <h2>Home Page</h2>
        </div>
        <hr />
        <div className='content'>
          <div className='img-container'>
            <img src={shanto} alt='' />
          </div>
          <div className='desc'>
            <h3>Jahidul Haque shanto</h3>
            <h5>Front end developer - React.js</h5>
            <p>Email : shanto140318@gmail.com</p>
            <p>Contact : 01795307435</p>
            <hr />
            <p>
              Hello! I’m Jahidul Haque Shanto. I am expert in Frontend
              Development - React. I have completed my B.sc degree from Daffodil
              International University in Computer Science and Engineering. I
              have programming knowledge . My first programming language was
              'C'. Now I am working with React which I like so much.
            </p>
            <Link to='/products'>
              <div className='btn'>go product page</div>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .header {
    padding: 1rem 0;
    text-align: center;
  }
  .content {
    padding: 0 1rem;
    margin: 3rem auto;
    display: grid;
    gap: 2rem;
    row-gap: 2rem;
    justify-items: center;
    place-items: center;
    @media (min-width: 790px) {
      grid-template-columns: 1fr 2fr;
    }
  }
  .img-container {
    height: 280px;
    width: 290px;
    position: relative;
  }
  .img-container:after {
    content: '';
    height: 3.5rem;
    width: 3.5rem;
    opacity: 0.5;
    background: var(--clr-green);
    position: absolute;
    top: -7%;
    right: -10%;
    @media (max-width: 790px) {
      height: 0;
      width: 0;
    }
  }
  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .desc {
    position: relative;
  }
  .desc:after {
    content: '';
    height: 1px;
    width: 10rem;
    background: var(--clr-green);
    position: absolute;
    top: 15%;
    left: 39%;
    @media (max-width: 790px) {
      height: 0;
      width: 0;
    }
  }
  .desc hr {
    margin: 1rem 0;
  }
  .btn {
    margin-top: 2rem;
    background: var(--clr-green);
    color: #fff;
  }
  .btn:hover {
    opacity: 0.8;
  }
`
export default Home
