import React  from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Card , Image } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import router from 'next/router'

export default function DetailHistory(props) {
    const showDetail = () =>{
        alert('fff')
    }
    return (
        <>
        <Flex style={{marginTop: 10, marginBottom:50}}>
            <Button style={{fontSize:20}} type="text" onClick={()=> {router.push('/handee')}}><LeftOutlined /></Button>
        </Flex>
        <Flex justifyContent="center" style={{marginTop: 50 , marginBottom:50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>ประวัติการใช้งาน</b></h1>
            <Flex textAlign="Left">
                <a onClick={()=>{showDetail()}} >
                    <Card  style={{ width:300 , height:"100%", marginTop: 20 ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                        <Flex>
                            <Flex>
                                <Box>
                                    <Image style={{width:80 , borderRadius:10}} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg"/>
                                </Box>
                            </Flex>
                            
                            <Flex justifyContent="center" textAlign="Left">
                                <Box style={{marginTop:10 , marginLeft:20}}>
                                    <p>
                                        <h2><b>ชื่อสินค้า</b></h2>
                                        <h6>รายละเอียดต่างๆ</h6>
                                    </p>
                                </Box>    
                            </Flex>
                        </Flex>             
                    </Card>
                </a>
            </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


