import React from 'react'
import styled from 'styled-components'

const SingleProduct = ({ item }) => {
  const { image, name, price, description, discount } = item
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='desc'>
        <p>{name}</p>
        <p>{description}</p>
        <h5>BDT {`${((100 - discount) * price) / 100}`}</h5>
        <div className='flex'>
          <p className='relative'>BDT {price} </p>
          <p>{discount}%</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05);

  .img-container {
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img-container img {
    height: 80%;
  }
  .desc {
    padding: 1rem;
    padding-top: 0;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
  }
  .relative {
    position: relative;
  }
  .relative::after {
    content: '';
    height: 1px;
    width: 100%;
    background: var(--clr-black);
    top: 58%;
    left: 0;
    position: absolute;
  }
`
export default SingleProduct
