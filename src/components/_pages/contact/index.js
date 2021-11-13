import React from 'react'
import { Flex } from 'reflexbox'
import { Button, Card, Avatar } from 'antd'
import { LeftOutlined, MailOutlined } from '@ant-design/icons'
import router from 'next/router';

export default function Contact(props) {
    const teamData = [
        {
            name: 'Sakkarin',
        },
        {
            name: 'Anapitcha',
        },
        {
            name: 'Worawit',
        },
        {
            name: 'Phattarapon',
        }
    ]

    return (
        <>
            <Flex style={{ marginTop: 10 }}>
                <Button style={{ fontSize: 20 }} type="text" onClick={() => { router.push('/handee') }}><LeftOutlined /></Button>
            </Flex>
            <Flex width={1 / 15}></Flex>
            <Flex width={1} justifyContent="center">
                <Flex justifyContent="center" style={{ marginTop: 50 }}>
                    <Flex flexDirection="column" textAlign="center">
                        <h1><b>ติดต่อเรา</b></h1>


                        <Flex justifyContent="center" style={{ marginTop: 30 }}>
                            <Flex flexDirection="column" textAlign="left">
                                <h2>Team</h2>
                                {teamData.map((item, index) => {
                                    return (
                                        <Card key={index} style={{ width: "100%", height: 70, marginTop: 10, marginRight: 190, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: 20 }}>
                                            <Flex>
                                                <Avatar src="https://joeschmoe.io/api/v1/random"
                                                    width="100%"
                                                    height={200}
                                                    marginTop={15} />
                                                <p style={{ marginLeft: 40, marginTop: 2 }}><b><b>{item.name}</b></b></p>
                                            </Flex>
                                        </Card>
                                    )
                                })
                                }
                            </Flex>
                        </Flex>
                        <Flex textAlign="left">
                            <h2 style={{ marginTop: 40 }}>Admin</h2>
                        </Flex>

                        <Flex style={{ marginTop: 20 }}>
                            <MailOutlined />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex width={1 / 15}></Flex>


        </>
    )
}




