/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Input} from 'antd';
import router from 'next/router'


export default function edit(props) {
const [firstName , setFirstName] = useState();
const [lastName , setLastName] = useState();
const [address , setAddress] = useState();
const [phone , setPhone] = useState();

function CommitForm(){
    const data = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone
        }
        console.log(data);
        
        router.push({
            pathname: '/edit/DetailProHand',
            query:{data: JSON.stringify(data) }
        })  
        
    }


return (
        <>
        <Flex width={1/15} justifyContent="center"></Flex>
            <Flex width={1} justifyContent="center" textAlign="center">
                <Flex justifyContent="center" style={{marginTop: 50}}> 
                <Flex  flexDirection="column" textAlign="center">
                <h2><b>กรอกข้อมูลสำหรับคนฝากหิ้ว</b></h2>
                <Flex justifyContent="center" flexDirection="column" >
                    <Input  type="text" placeholder="ชื่อ" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 25px"}} onChange={(e)=> setFirstName(e.target.value)} />
                    <Input  type="text" placeholder="นามสกุล" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setLastName(e.target.value)} />
                    <Input  type="text" placeholder="ที่อยู่จัดส่ง" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setAddress(e.target.value)} />
                    <Input  type="text" placeholder="เบอร์โทรศัพท์" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setPhone(e.target.value)} />
                    </Flex>             
                   <Flex justifyContent="center" style={{marginTop: 50}}>
                       <Box>
                       <Button style={{width:"130px",height:"40px",fontWeight:"bold",fontSize:"15px",borderRadius: "50px"}} onClick={()=>{CommitForm()}} type="primary">ยืนยัน</Button>
                       </Box>
                       <Box style={{marginLeft:10 , marginRight:10}}>
                       </Box>
                        <Box>
                        <Button style={{width:"130px",height:"40px",fontWeight:"bold",fontSize:"15px",borderRadius: "50px"}} onClick={()=>{router.push('/handee')}} type="danger">ยกเลิก</Button>
                        </Box>
                   </Flex>
                </Flex>
            </Flex>
        <Flex width={1/15}></Flex>
            

            </Flex>
        </>
    )
}
