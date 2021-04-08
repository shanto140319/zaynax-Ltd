import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filterContext'

const Colors = ({ colors }) => {
  const {
    filters: { color },
    updateFilters,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='form-control'>
        <h5>colors</h5>
        <div className='colors'>
          {colors.map((c, index) => {
            if (c === 'all') {
              return (
                <button
                  key={index}
                  name='color'
                  onClick={updateFilters}
                  data-type='all'
                  className={`${color === c ? 'all-btn active' : 'all-btn'}`}
                >
                  all
                </button>
              )
            }
            return (
              <button
                key={index}
                name='color'
                style={{ background: c }}
                onClick={updateFilters}
                data-type={c}
                className={`${color === c ? 'color-btn active' : 'color-btn'}`}
              ></button>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.3rem;
    border: none;
    text-transform: capitalize;
    background: transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  .active {
    border: 1px solid var(--clr-grey-5);
    opacity: 1 !important;
  }
  .colors {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .color-btn {
    height: 1rem;
    width: 1rem;
    background: #222;
    margin-right: 0.5rem;
    cursor: pointer;
    opacity: 0.4;
  }
`
export default Colors
