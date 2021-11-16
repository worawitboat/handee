import React from 'react'
import {Flex} from 'reflexbox'
import {Result, Button} from 'antd';
import router from 'next/router';


export default function Success(props) {
    const OrderNumber = "A21F45216235aa"

    return (
        <>
            <Flex style={{marginTop:150}} justifyContent="center">
                <Result status="success"
                    extra={
                        [
                            <h1 key="1"><b>ชำระเงินสำเร็จแล้ว</b></h1>,
                            <Flex key="2" justifyContent="center">
                               <p style={{color:"gray"}}>
                               ระบบจะทำการตรวจสอบและจัดส่งออเดอร์ของคุณ ขอบคุณค่ะ
                            </p> 
                            </Flex>
                            ,
                            <Flex key="3" style={{marginTop:10}} justifyContent="center" >
                                <Button onClick={()=>{router.push("/order")}} type="primary" style={{ width:100 , height:"100%", borderRadius:50}}><b>ตกลง</b></Button>
                            </Flex>
                            ,
                        ]
                    }/>
            </Flex>

        </>
    )
}
