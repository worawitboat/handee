import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import { Input , Button , Upload, Card } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import router from 'next/router'
import ImgCrop from 'antd-img-crop';

export default function DetailOrder(props) {
    const  data = [{
        nameproduct : "แมวพันธ์ุดูไบ (แรร์)",
        address : "100/100 ต.คะแนน อ.เกรด A จ.เทอมนี้",
        phonenumber : "0914445521",
        locationproduct : "ตะลาดะเจริยศะรี อ.ศะรีไค จ.ดูใบ"
    }]

    return (
        <>
        <Flex width={1/15}></Flex>
        <Flex flexDirection="column" width={1} style={{marginTop: 50}} justifyContent="center" textAlign="center">
            <h1><b>รายละเอียดออเดอร์</b></h1>
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
                    </Card>
                )})}

                        <Flex flexDirection="row" style={{marginTop:30}} justifyContent="center">
                            <Box width={1/3}><Button style={{borderRadius:50}} type="primary" onClick={()=>{router.push('orderDetail/SuccessPage')}}><b>ส่งออเดอร์สำเร็จ</b></Button></Box>
                        </Flex>
            </Flex>
        <Flex width={1/15}></Flex>  
        </>
    )
}
