import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Input} from 'antd';
import router from 'next/router'


export default function SelectHandOrder(props) {
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
            pathname: '/handee',
            query: 'error'
        })
        
    }


return (
        <>
            <Flex justifyContent="center" style={{marginTop: 100}}> 
                <Flex  flexDirection="column" textAlign="center">
                <h2><b>กรอกข้อมูลสำหรับคนฝากหิ้ว</b></h2>             
                   <Input type="text" placeholder="ชื่อ" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setFirstName(e.target.value)} />
                   <Input type="text" placeholder="นามสกุล" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setLastName(e.target.value)} />
                   <Input type="text" placeholder="ที่อยู่" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setAddress(e.target.value)} />
                   <Input type="text" placeholder="เบอร์โทรศัพท์" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setPhone(e.target.value)} />
                   <Flex justifyContent="center"style={{marginTop: 40}}>
                       <Box style={{paddingRight:25}}>
                       <Button style={{width:"130px",height:"40px",fontWeight:"bold",fontSize:"15px",borderRadius: "50px"}} onClick={()=>{CommitForm()}} type="primary">ยืนยัน</Button>
                       </Box>
                        <Box>
                        <Button style={{width:"130px",height:"40px",fontWeight:"bold",fontSize:"15px",borderRadius: "50px"}} onClick={()=>{router.push('/')}} type="danger">ยกเลิก</Button>
                        </Box>
                   </Flex>
                </Flex>

            </Flex>
        </>
    )
}


