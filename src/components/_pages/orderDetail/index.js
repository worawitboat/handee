import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import { Input, Button, Upload, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import router from 'next/router'
import ImgCrop from 'antd-img-crop';

export default function DetailOrder(props) {
    const { data } = props


    return (
        <>
            <Flex width={1 / 15}></Flex>
            <Flex flexDirection="column" width={1} style={{ marginTop: 50 }} justifyContent="center" textAlign="center">
                <h1><b>รายละเอียดออเดอร์</b></h1>
                <Card key={data.id} justifyContent="center" textAlign="center" style={{ width: "100%", height: "100%", marginTop: 20, marginBottom: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: 10 }} >
                    <Flex justifyContent="center">

                        <Flex style={{ marginTop: 50 }}>
                            <Box><img style={{ width: 100, borderRadius: 10 }} src={data.img} /></Box>
                        </Flex>

                        <Flex justifyContent="left" textAlign="left">
                            <Box style={{ marginTop: 20, marginLeft: 30 }}>

                                <p>
                                    <h2><b>{data.nameproduct}</b></h2>
                                    <h5><b>ที่อยู่จัดส่ง : {data.addressProduct}</b></h5>
                                    <h5><b>เบอร์โทร : {data.phone}</b></h5>
                                    <h5><b>และสถานที่ซื้อสินค้า : {data.location} </b> </h5>
                                </p>
                            </Box>
                        </Flex>
                    </Flex>
                </Card>


                <Flex flexDirection="row" style={{ marginTop: 30 }} justifyContent="center">
                    <Box width={1}><Button style={{ borderRadius: 50 }} type="primary" onClick={() => { router.push({ pathname: 'orderDetail/Tracking', query: { data: JSON.stringify(data) } }) }}><b>ส่งออเดอร์สำเร็จ</b></Button></Box>
                    <Box width={1 / 15}></Box>
                    <Box width={1}><Button style={{ borderRadius: 50 }} type="primary" danger onClick={() => { router.push('/menuOrder/orderMenu') }}><b>ยกเลิกออเดอร์</b></Button></Box>
                </Flex>
            </Flex>
            <Flex width={1 / 15}></Flex>
        </>
    )
}
