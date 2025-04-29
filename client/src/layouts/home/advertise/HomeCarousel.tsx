import React from 'react'
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '30rem',
  color: '#fff',
  lineHeight: '30rem',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomeCarousel() {
  return (
    <Carousel autoplay arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}
