import React from 'react'
import {Flex} from 'reflexbox'
import {Result, Button} from 'antd';
import router from 'next/router';


export default function SelectHandOrder(props) {
    const OrderNumber = "A21F45216235aa"

    return (
        <>
            <Flex justifyContent="center">
                <Result status="success"
                    extra={
                        [
                            <h1><b>ยินดีด้วย</b></h1>,
                            <Flex justifyContent="center">
                               <p style={{color:"gray"}}>
                                ขอแสดงความยินดีด้วยค่ะ คุณได้ทำจัดส่งออเดอร์สำเร็จแล้ว
                            </p> 
                            </Flex>
                            ,
                            <Flex style={{marginTop:10}} justifyContent="center" >
                                <Button onClick={()=>{router.push("/menuOrder/orderMenu")}} type="primary" style={{ width:100 , height:"100%", borderRadius:50 , borderColor:"orange" , backgroundColor:"orange"}}><b>ตกลง</b></Button>
                            </Flex>
                            ,
                        ]
                    }/>
            </Flex>

        </>
    )
}
