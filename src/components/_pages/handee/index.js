import React, { useState, useEffect } from 'react'
import { Flex } from 'reflexbox'
import { Card } from 'antd';
import { ContactsOutlined, UserOutlined, UnorderedListOutlined, HistoryOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import router from 'next/router'

export default function Handee() {

    const [idToken, setIdToken] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [userId, setUserId] = useState("");

    // const logout = async () => {

    //     const liff = (await import('@line/liff')).default
    //     liff.logout();
    //     window.location.reload();
    //   }

    function editOrders() {
        router.push('/edit')
    }

    function menuOrders() {
        router.push("edit/DetailProHand/HistoryProHand/DetailShop/DetailCommit/order")
    }

    function historys() {
        router.push('/history')
    }

    function contacts() {
        router.push('/contact')
    }

    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-Ng7Vpxwd' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(profile => {
                    console.log(profile);
                    setDisplayName(profile.displayName);
                    setPictureUrl(profile.pictureUrl);
                    setStatusMessage(profile.statusMessage);
                    setUserId(profile.userId);
                }).catch(err => console.error(err));
            } else {
                liff.login();
            }

        }, err => console.error(err));
    })

    return (
        <div>
            <Flex justifyContent="center">
                <Flex flexDirection="column" textAlign="center" style={{ marginTop: 80, boxshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    <h1 style={{ color: "orange", marginTop: -30, marginLeft: -190, fontSize: 45, fontFamily: 'Prompt' }}><b>Handee</b></h1>
                    <div style={{ fontSize: "70px", marginLeft: 60, marginTop: -110 }}>
                        <ShoppingCartOutlined />
                    </div>
                    <Card onClick={() => { editOrders() }} style={{ width: 405, height: 160, marginTop: 50, backgroundColor: 'rgba(255, 193, 83, 83)' }}>
                        <div style={{ fontSize: "70px", marginLeft: -230 }}>
                            <UserOutlined />
                        </div>
                        <h1 style={{ marginTop: -80, marginLeft: 60, fontFamily: 'Prompt' }}>คนฝากหิ้ว</h1>
                    </Card>

                    <Card onClick={() => { menuOrders() }} style={{ width: 405, height: 160, backgroundColor: 'rgba(1, 192, 160, 0.8)' }}>
                        <div style={{ fontSize: "70px", marginLeft: -230 }}>
                            <UnorderedListOutlined />
                        </div>
                        <h1 style={{ marginTop: -80, marginLeft: 75 }}>รายการออเดอร์</h1>
                    </Card>

                    <Card onClick={() => { historys() }} style={{ width: 405, height: 160, backgroundColor: 'rgba(235, 107, 86, 86)' }}>
                        <div style={{ fontSize: "70px", marginLeft: -230 }}>
                            <ContactsOutlined />
                        </div>
                        <h1 style={{ marginTop: -80, marginLeft: 75 }}>ประวัติการใช้งาน</h1>
                    </Card>

                    <Card onClick={() => { contacts() }} style={{ width: 405, height: 160, backgroundColor: 'rgba(176, 95, 109, 109)' }}>
                        <div style={{ fontSize: "70px", marginLeft: -230 }}>
                            <HistoryOutlined />
                        </div>
                        <h1 style={{ marginTop: -80, marginLeft: 60 }}>ติดต่อเรา</h1>
                    </Card>
                </Flex>
            </Flex>
        </div>
    )
}

