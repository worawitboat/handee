import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import { Input, Button, Upload, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import ImgCrop from 'antd-img-crop';

export default function DetailOrder(props) {
    const { data } = props

    return (
        <>
        <Flex width={1/15}></Flex>
        <Flex width={1} style={{marginTop: 30}} justifyContent="center" textAlign="center">
            <h1><b>ข้อมูลออเดอร์</b></h1>
        {data.map((item,index)=>{
                return(
                  
                    <Card key={index} justifyContent="center" textAlign="center" style={{ width:"100%" , height:"100%", marginTop: 10 ,marginBottom:20,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:10 }} >
                        <Flex justifyContent="left">

                            <Flex style={{marginTop:10}}>
                            <div style={{width:100 , height:120}}>
                            <img style={{ width: "100%" , height:"100%", borderRadius: 10 }} src={item.img}/>
                            </div>
                            </Flex>

                            <Flex justifyContent="left" textAlign="left">
                                                <Box style={{marginTop:10 , marginLeft:30}}>
                
                                                    <p>
                                                    <h2><b>{item.nameproduct}</b></h2>
                                                        <h5><b>ที่อยู่จัดส่ง : {item.address}</b></h5>
                                                        <h5><b>เบอร์โทร : {item.phonenumber}</b></h5>
                                                        <h5><b>และสถานที่ซื้อสินค้า : {item.locationproduct} </b> </h5>
                                                    </p>
                                                </Box>    
                                            </Flex>
                        </Flex>

                        <Flex style={{marginTop:30}} justifyContent="center">
                        <Button style={{borderRadius:50}} type="primary" onClick={()=>{router.push('/orderMenu')}}><b>รับออเดอร์</b></Button>      
                        </Flex>
                                          
                    </Card>
                )})}
            </Flex>
            <Flex width={1 / 15}></Flex>
        </>
    )
}


