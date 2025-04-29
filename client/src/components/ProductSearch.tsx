import { Button, Input } from 'antd'
import React from 'react'

export default function ProductSearch() {
  return (
    <div className='flex gap-1 items-center'><Input className='h-[40px]' style={{width:"35rem"}}  placeholder="Basic usage" /><Button >Search</Button></div>
  )
}
