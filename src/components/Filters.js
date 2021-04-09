import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'
import Brands from './Brands'
import Categorys from './Categorys'
import Colors from './Colors'
import Countries from './Countries'
import CurrentFilters from './CurrentFilters'
import Discount from './Discount'
import Febrics from './Febrics'
import Patterns from './Patterns'
import Prices from './Prices'
import Ratings from './Ratings'
import Sizes from './Sizes'
import { getUniqueValues } from '../uniqueValues'

const Filters = () => {
  const { all_products } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  //brands
  const brands = getUniqueValues(all_products, 'brand')
  //country
  const countries = getUniqueValues(all_products, 'country')
  //sizes
  const sizes = getUniqueValues(all_products, 'size')
  // colors
  const colors = getUniqueValues(all_products, 'colors')
  //febrics
  const febrices = getUniqueValues(all_products, 'febric')
  return (
    <Wrapper>
      <ul>
        <li>
          <CurrentFilters />
        </li>
        <li>
          <Categorys categories={categories} />
        </li>
        <li>
          <Brands brands={brands} />
        </li>
        <li>
          <Countries countries={countries} />
        </li>
        <li>
          <Sizes sizes={sizes} />
        </li>
        <li>
          <Colors colors={colors} />
        </li>
        <li>
          <Discount />
        </li>
        <li>
          <Prices />
        </li>
        <li>
          <Ratings />
        </li>
        <li>
          <Febrics febrices={febrices} />
        </li>
        <li>
          <Patterns />
        </li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  margin-right: 1.5rem;

  ul li {
    padding: 1rem;
    border-bottom: 1px dashed #222;
  }
  ul li:last-child {
    border-bottom: none;
  }
`
export default Filters
