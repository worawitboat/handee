import React from 'react'
import { Flex } from 'reflexbox'
import { Card } from 'antd';
import { ContactsOutlined  , UnorderedListOutlined , HistoryOutlined , ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import router from 'next/router';

export default function index(props) {

    const [userId, setUserId] = useState("");

    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-M972rAGm' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(profile => {
                    console.log(profile);
                    setUserId(profile.userId);
                }).catch(err => console.error(err));
            } else {
                liff.login();
            }

        }, err => console.error(err));
    })
    
    function menuOrders(){
        router.push('/menuOrder')
    }

    function getOrder(){
        router.push('/orderMenu')
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

                <Card onClick={()=>{getOrder()}} style={{ width: 405 , height: 190 , backgroundColor: 'rgba(235, 107, 86, 86)' }}>
                    <div style={{ fontSize: "90px" , marginLeft:-230 }}>
                        <ShoppingOutlined />
                     </div>
                    <h1 style={{ marginTop: -100 , marginLeft:100}}>ออเดอร์ที่รับ</h1>
                </Card>

                <Card onClick={()=>{historys()}} style={{ width: 405 , height: 190 , backgroundColor: 'rgba(235, 150, 80, 80)' }}>
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

