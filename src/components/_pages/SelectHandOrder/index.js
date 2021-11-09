import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Input } from 'antd';
import router from 'next/router'
import styled from '@emotion/styled';


export default function SelectHandOrder(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    function submit() {
        const data = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone
        }
        console.log(data);
    }


    return (
        <>
            <Flex justifyContent="center" style={{ paddingTop: 100 }}>
                <Flex flexDirection="column" textAlign="center">
                    <h2>กรอกข้อมูลสำหรับคนฝากหิ้ว</h2>
                    <Input placeholder="ชื่อ" style={{ marginTop: 20, borderRadius: 50}} onChange={(e)=> setFirstName(e.target.value)}/>
                    <Input placeholder="นามสกุล" style={{ marginTop: 20, borderRadius: 50 }} onChange={(e)=> setLastName(e.target.value)}/>
                    <Input placeholder="ที่อยู่" style={{ marginTop: 20, borderRadius: 50 }} onChange={(e)=> setAddress(e.target.value)}/>
                    <Input placeholder="เบอร์โทรศัพท์" style={{ marginTop: 20, borderRadius: 50 }} onChange={(e)=> setPhone(e.target.value)}/>
                    <Flex justifyContent="center" style={{ marginTop: 20, borderRadius: 50 }} >
                        <Box width={1/3}>
                            <Button type="primary" style={{ borderRadius: 20 }} onClick={()=> submit()}>ยืนยัน</Button>
                        </Box>
                        <Box width={1/3}>

                        </Box>
                        <Box width={1/3}>
                            <Button type="primary" danger style={{ borderRadius: 20 }} onClick={()=> router.push('/')}>ยกเลิก</Button>
                        </Box>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}


