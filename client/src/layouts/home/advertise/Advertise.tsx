import { Col, Row } from 'antd'
import React from 'react'
import HomeCarousel from './HomeCarousel'
import Banner from './Banner'

export default function Advertise() {
    return (
        <Row className='h-[30rem]'>
            <Col lg={14} className='h-full'>
                <HomeCarousel />
            </Col>
            <Col lg={10} className='flex items-center justify-center h-full'>
                <Banner />
            </Col>
        </Row>
    )
}
