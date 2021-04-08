import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import { slider } from '../slider_data'
import { FaCalendarAlt } from 'react-icons/fa'
import { RiMessage2Line } from 'react-icons/ri'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
]

const Blogs = () => {
  return (
    <Wrapper>
      <h4>LATEST BLOGS</h4>
      <p>
        This is a place devoted to giving you deeper insight into the news,
        <br />
        trends, people and technology behind Bing.
      </p>
      <div className='carousel '>
        <Carousel breakPoints={breakPoints}>
          {slider.map((item) => {
            console.log(item)
            return (
              <div key={item.id} className='single'>
                <img src={item.image} alt='' />
                <h5 className='title'>{item.title}</h5>
                <span>
                  <p className='mr'>
                    <FaCalendarAlt /> Oct 12, 2020
                  </p>
                  <p className='float'>
                    <RiMessage2Line /> 26
                  </p>
                </span>
              </div>
            )
          })}
        </Carousel>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 4rem auto;
  text-align: center;
  p {
    font-weight: 500;
  }
  .carousel {
    margin-top: 2rem;
  }
  .single {
    width: 220px;
    height: 200px;
    position: relative;
    border-radius: 10px;
    z-index: -111;
  }
  .single img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .title {
    position: absolute;
    top: 4%;
    left: 5%;
    z-index: 999;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    background: var(--clr-green);
    padding: 0.3rem;
    border-radius: 2px;
  }
  span {
    position: absolute;
    display: flex;
    bottom: 2%;
    z-index: 999;
    left: 5%;
  }
  span p {
    color: #e0dfdc;
    font-weight: 300;
    font-size: 10px;
  }
  .mr {
    margin-right: 7rem;
  }
  .rec-arrow {
    background: var(--clr-green);
    color: #fff;
  }
  .rec-arrow:hover {
    background: var(--clr-green);
  }
  .rec-dot {
    height: 7px;
    width: 7px;
  }

  .rec-dot_active {
    background: var(--clr-green);
  }
`
export default Blogs
