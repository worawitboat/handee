import React  from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Card , Image } from 'antd'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import router from 'next/router'

export default function menuOder(props) {
    return (
        <>
        <Flex justifyContent="center"   style={{marginTop: 50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>ออเดอร์</b></h1>
            
            <Flex>
                    <Card justifyContent="center" textAlign="center" style={{ width:"100%" , height:"100%", marginTop: 20 ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:10 }} >
                        <Flex justifyContent="left">

                            <Flex style={{marginTop:50  }}>
                                <Box><img style={{width:100 , borderRadius:10}} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg"/></Box>
                            </Flex>
                            
                            <Flex justifyContent="left" textAlign="left">
                                <Box style={{marginTop:20 , marginLeft:30}}>
                                    <p>
                                        <h2><b>แมวพันธ์ุดูไบ (แรร์)</b></h2>
                                        <h5><b>ที่อยู่จัดส่ง : 100/100 ต.คะแนน อ.เกรด A จ.เทอมนี้</b></h5>
                                        <h5><b>เบอร์โทร : 0914445521</b></h5>
                                        <h5><b>และสถานที่ซื้อสินค้า : ตะลาดะเจริยศะรี อ.ศะรีไค จ.ดูใบ </b> </h5>
                                             
                                            
                                            
                                    </p>
                                </Box>    
                            </Flex>
                        </Flex>

                        <Flex style={{marginTop:30}} justifyContent="center">
                        <Button style={{borderRadius:50}} type="primary" onClick={()=>{router.push('/orderMenu')}}><b>รับออเดอร์</b></Button>      
                        </Flex>
                                          
                    </Card>
            </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


