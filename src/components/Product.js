import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import { useProductsContext } from '../context/productContext'
import SingleProduct from './SingleProduct'

const Product = () => {
  const { data, page, prevPage, handlePage, nextPage } = useProductsContext()

  const { filtered_products } = useFilterContext()
  return (
    <Wrapper>
      <div className='div'>
        {filtered_products.map((item, index) => {
          return <SingleProduct key={index} item={item} />
        })}
      </div>
      <div className='btn-container section'>
        <button className='prev-btn' onClick={prevPage}>
          prev
        </button>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? 'active-btn' : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          )
        })}
        <button className='next-btn' onClick={nextPage}>
          next
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .div {
    display: grid;
    gap: 1rem;
    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 950px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  .btn-container {
    margin-top: 3rem;
    width: 60%;
    border-radius: 100000px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    box-shadow: var(--light-shadow);
    padding: 0.7rem;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    color: var(--clr-grey-6);
  }
  button:focus {
    outline: none;
  }
  .active-btn {
    background: var(--clr-green);
    color: #fff;
  }
  .prev-btn,
  .next-btn {
    color: var(--clr-green);
    text-transform: capitalize;
    font-weight: 700;
  }
`
export default Product
