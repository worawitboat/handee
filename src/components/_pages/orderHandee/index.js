// import React , {useState} from 'react'
// import { Flex , Box } from 'reflexbox'
// import { Input , Button , Upload, Image } from 'antd'
// import router from 'next/router'

// export default function Orderhandee(props) {

//     const menuOrder = "https://scontent.fbkk22-7.fna.fbcdn.net/v/t1.15752-9/247939690_394980445643131_5211637257758748374_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF6zMCgoD-gry4IPyLCp3gPZzLj1rbSl1VnMuPWttKXVXQqZvQBB3AIJvd14NI6aNZzhPz-81-vhCB2kmc_3WzS&_nc_ohc=5IIIma53D8sAX_8hglK&_nc_ht=scontent.fbkk22-7.fna&oh=68a4aaceb588aa9f6cd9ab48c240608c&oe=61B40FE6"
//     const History = "https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-9/253704621_469516127824819_31486693092999933_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeH5SeiE0vlIZtr-XT2cmVGCdGfIWj8eyZ90Z8haPx7Jn9VnWy8YWL0he8Y-SmjTgEss-KOkgd_ets1OGzoyDMwK&_nc_ohc=Jdy-E5RM1doAX9oVlok&_nc_ht=scontent.fbkk22-1.fna&oh=cd18a3ffad911e6a24be6d2d45b61f58&oe=61B2BF40"
//     const Contact = "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/255010731_3237246086552901_6590496060818331039_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHNgIk3bnIDsNAzE4_MLK5ePeIFLboqZr094gUtuipmvSjamqxmzM8R_lRfyfgDMLgJRsSavtJiApg0R8fF9HZi&_nc_ohc=-5BNIDhKUtwAX88U84i&_nc_ht=scontent.fbkk22-6.fna&oh=38f54eec007e652624fb53a2637c198a&oe=61B32FEB"

//     function menuOrders(){
//         router.push('/menuOrder')
//     }

//     function historys(){
//         router.push('/orderHistory')
//     }

//     function contacts(){
//         router.push('/contact')
//     }


//     return (
//         <>
        
//         <Flex justifyContent="center" textAilgn="center">
//             <Flex width={1/15}></Flex>
//             <Flex width={1} justifyContent="center">
//         <Flex justifyContent="center" style={{marginTop: 50}}>
//             <Flex  flexDirection="column" textAlign="center">
                
//             <Flex onClick={()=>{menuOrders()}} justifyContent="center" style={{width:"100%", height:"100%" ,marginTop:20 , marginBottom:20}}>
//                 <img style={{width:"100%", height:"100%" }} src={menuOrder} />
//             </Flex>
//             <Flex onClick={()=>{historys()}} justifyContent="center" style={{width:"100%", height:"100%" ,marginTop:20 , marginBottom:20}}>
//                 <img style={{width:"100%", height:"100%" }} src={History} />
//             </Flex>
//             <Flex onClick={()=>{contacts()}} justifyContent="center" style={{width:"100%", height:"100%" ,marginTop:20 , marginBottom:20}}>
//                 <img style={{width:"100%", height:"100%" }} src={Contact} />
//             </Flex>
//         </Flex>
//         </Flex> 
//             </Flex>
//             <Flex width={1/15}></Flex>

//         </Flex>
        
                
//         </>
//     )
// }


import React from 'react'
import { Flex } from 'reflexbox'
import { Card } from 'antd';
import { ContactsOutlined  , UnorderedListOutlined , HistoryOutlined , ShoppingCartOutlined } from "@ant-design/icons";
import router from 'next/router';

export default function index(props) {
    
    function menuOrders(){
        router.push('/menuOrder')
    }

    function historys(){
        router.push('/history')
    }

    function contacts(){
        router.push('/contact')
    }
    return (
        <div>
            <Flex justifyContent="center">
                <Flex flexDirection="column" textAlign="center" style={{ marginTop:80 ,boxshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <h1 style={{ color: "orange" , marginTop: -30 , marginLeft:-190 , fontSize: 45}}>Handee</h1>
                <div style={{ fontSize: "70px" , marginLeft:60 , marginTop: -110 }}>
                        <ShoppingCartOutlined />
                     </div>
                <Card onClick={()=>{menuOrders()}} style={{ width: 405 , height: 190 , marginTop : 50 , backgroundColor: 'rgba(255, 193, 83, 83)' }}>
                    <div style={{ fontSize: "90px" , marginLeft:-230 }}>
                        <UnorderedListOutlined />
                     </div>
                    <h1 style={{ marginTop: -100 , marginLeft:75}}>ออเดอร์</h1>
                </Card>

                <Card onClick={()=>{historys()}} style={{ width: 405 , height: 190 , backgroundColor: 'rgba(235, 107, 86, 86)' }}>
                    <div style={{ fontSize: "90px" , marginLeft:-230 }}>
                        <ContactsOutlined />
                     </div>
                    <h1 style={{ marginTop: -100 , marginLeft:100}}>ประวัติการใช้งาน</h1>
                </Card>

                <Card  onClick={()=>{contacts()}} style={{ width: 405 , height: 190 , backgroundColor: 'rgba(176, 95, 109, 109)' }}>
                    <div style={{ fontSize: "90px" , marginLeft:-230 }}>
                        <HistoryOutlined />
                     </div>
                    <h1 style={{ marginTop: -90 , marginLeft:80}}>ติดต่อเรา</h1>
                </Card>
                </Flex>
            </Flex>
        </div>
    )
}

