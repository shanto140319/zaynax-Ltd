import React from 'react'
import styled from 'styled-components'
import Filters from '../components/Filters'
import Product from '../components/Product'
import Topsection from '../components/Topsection'

const Products = () => {
  return (
    <Wrapper className='section-center'>
      <hr />
      <Topsection />
      <hr />
      <div className='wrapper section'>
        <Filters />
        <Product />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .wrapper {
    display: grid;
    row-gap: 2rem;
    @media (min-width: 600px) {
      grid-template-columns: 250px 1fr;
    }
  }
`
export default Products
