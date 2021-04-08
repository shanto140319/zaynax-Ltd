import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const Countries = ({ countries }) => {
  const {
    filters: { country },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='formControl'>
        <h5>country</h5>
        <div>
          {countries.map((c, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={updateFilters}
                name='country'
                className={`${
                  country.toLowerCase() === c.toLowerCase() ? 'active' : null
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  button {
    border: none;
    display: block;
    background: none;
    text-transform: capitalize;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
  }
  button:focus {
    outline: none;
  }
  .active {
    color: var(--clr-black);
  }
`

export default Countries
