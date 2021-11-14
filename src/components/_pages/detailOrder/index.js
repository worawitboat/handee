import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import { Input , Button , Upload, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import ImgCrop from 'antd-img-crop';

export default function DetailOrder(props) {
    const Data =[{}]

    return (
        <>
        <Flex width={1/15}></Flex>
        <Flex width={1} style={{marginTop: 50}} justifyContent="center" textAlign="center">
            <h1><b>ข้อมูลออเดอร์</b></h1>
        {data.map((item,index)=>{
                return(
                  
                    <Card key={index} justifyContent="center" textAlign="center" style={{ width:"100%" , height:"100%", marginTop: 20 ,marginBottom:20,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:10 }} >
                        <Flex justifyContent="left">

                            <Flex style={{marginTop:50}}>
                                <Box><img style={{width:100 , borderRadius:10}} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg"/></Box>
                            </Flex>

                            <Flex justifyContent="left" textAlign="left">
                                                <Box style={{marginTop:20 , marginLeft:30}}>
                
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
        <Flex width={1/15}></Flex>  
        </>
    )
}


