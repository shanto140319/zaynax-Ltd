import React from 'react'
import styled from 'styled-components'
import { services } from '../services_data'
console.log(services)
const Services = () => {
  return (
    <Wrapper>
      {services.map((item, index) => {
        const { icon, style, title, msg } = item
        return (
          <div className='single'>
            <p className={`icon ${style}`}>{icon}</p>
            <h5>{title}</h5>
            <p>{msg}</p>
          </div>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  .single {
    width: 200px;
  }
  .icon {
    font-size: 2.5rem;
  }
  .heart {
    color: var(--clr-red-light);
  }
  .brand {
    color: #285fb8;
  }
  .telegram {
    color: #f28313;
  }
  .message {
    color: #1dbf73;
  }
`
export default Services
