import React  from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Card , Image } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import router from 'next/router'

export default function deliverySuccess(props) {
    
    return (
        <>
        <Flex style={{marginTop: 10, marginBottom:50}}>
            <Button style={{fontSize:20}} type="text" onClick={()=> {router.push('/handee')}}><LeftOutlined /></Button>
        </Flex>
        <Flex justifyContent="center" style={{marginTop: 50 , marginBottom:50}}>
        <Flex  flexDirection="column" textAlign="center">
            <Image src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/255010731_3237246086552901_6590496060818331039_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHNgIk3bnIDsNAzE4_MLK5ePeIFLboqZr094gUtuipmvSjamqxmzM8R_lRfyfgDMLgJRsSavtJiApg0R8fF9HZi&_nc_ohc=-5BNIDhKUtwAX88U84i&_nc_ht=scontent.fbkk22-6.fna&oh=38f54eec007e652624fb53a2637c198a&oe=61B32FEB"/>
            
            <Flex justifyContent="center" style={{marginTop:30}}>
            <Button style={{backgroundColor:"black" , color:"white" ,borderRadius:50 ,width:200}}>ส่งออเดอร์สำเร็จ</Button>
                </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


