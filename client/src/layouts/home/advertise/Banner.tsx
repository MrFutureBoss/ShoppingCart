import React from 'react'

const contentStyle: React.CSSProperties = {
  height: '14rem',
  backgroundColor: 'red',
  margin:'0.5rem'
};

const contentStyle2: React.CSSProperties = {
  height: '14rem',
  backgroundColor: 'yellow',
   margin:'0.5rem'
};

export default function Banner() {
  return (
    <div>
      <div style={contentStyle}>1</div>
      <div style={contentStyle2}>2</div>
    </div>
  )
}
