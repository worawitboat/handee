import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button } from 'antd'
import {LeftOutlined , PlusOutlined} from '@ant-design/icons'
import router from 'next/router';

export default function DetailCommit(props) {
const Price = "100,000";
const Delivery = "200"
    return (
        <>
        <Flex style={{marginTop: 10}}>
            <Button style={{fontSize:20}} type="text" onClick={()=> {router.push('/DetailShop')}}><LeftOutlined /></Button>
        </Flex>
        <Flex justifyContent="center" style={{marginTop: 50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>ยืนยันการชำระเงิน</b></h1>
            <Flex justifyContent="center" style={{marginTop:20}}>
            <Box><Button type="dashed" style={{width:120 , height:120, color:"DodgerBlue" ,borderColor:"DodgerBlue"}}><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></Button></Box>
            </Flex>
            <Flex justifyContent="center" style={{marginTop:20}}>
            <h6 style={{color:"red"}}><b>*หมายเหตุ : ใส่หลักฐานการชำระเงินที่นี่</b></h6>
            </Flex>
            <Flex justifyContent="center" textAlign="center">
                <Box style={{marginTop:20}}>
                    <p>
                        <h3>ค่าสินค้า : {Price} บาท.</h3>
                        <h3>ค่าบริการ : {Delivery} บาท.</h3>
                    </p>
                </Box>    
            </Flex>
            <Flex justifyContent="center" style={{marginTop:30}}>
                <Button style={{borderRadius:50 , width: 80}} type="primary" onClick={()=>{router.push('/DetailCommit')}}>ตกลง</Button>
            </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


