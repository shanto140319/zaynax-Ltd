import React from 'react'
import styled from 'styled-components'
import Blogs from '../components/Blogs'
import Filters from '../components/Filters'
import Product from '../components/Product'
import Services from '../components/Services'
import Topsection from '../components/Topsection'

const Products = () => {
  return (
    <Wrapper className='section-center'>
      <hr />
      <Topsection />
      <hr />
      <div className='wrapper section'>
        <Filters className='1' />
        <Product className='2' />
      </div>
      <Blogs />
      <Services />
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
