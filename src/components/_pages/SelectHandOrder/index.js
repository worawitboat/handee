import React from 'react'
import { Flex } from 'reflexbox'
import {Button, Input} from 'antd';
import router from 'next/router'
import styled from '@emotion/styled';


export default function SelectHandOrder(props) {
    const CommitForm = () => {
        // let Names = document.getElementById('names').value;
        // let Lastnames = document.getElementById('lastnames').value;
        // let Locations = document.getElementById('locations').value;
        // let Phonenumbers = document.getElementById('phonenumbers').value;
        // const x = [];
        // x.push(Names , Lastnames , Locations , Phonenumbers);
        router.push('/DetailProHand')
    }

const InputName = styled(Input)`
    width:100%;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 40px;
`

const InputLastname = styled(Input)`
    width:100%;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 70px;
`

const InputLocation = styled(Input)`
    width:100%;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 48px;
`

const InputPhonenumber = styled(Input)`
    width:100%;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 68px;
`


const Div = styled.div `
    position:relative;
    `

const LabelName = styled.label
`
    position:absolute;
	left:15px;
	font-weight:bold;
	font-size:0.8em;
	color:#444;
	top:8px;
`

const LabelLastName = styled.label
`
    position:absolute;
	left:15px;
	font-weight:bold;
	font-size:0.8em;
	color:#444;
	top:58px;
`

const LabelLocation = styled.label
`
    position:absolute;
	left:15px;
	font-weight:bold;
	font-size:0.8em;
	color:#444;
	top:112px;
`

const LabelPhone = styled.label
`
    position:absolute;
	left:15px;
	font-weight:bold;
	font-size:0.785em;
	color:#444;
	top:162px;
`

const Buttons = styled(Button)`
width:130px;
height:40px;
font-weight:bold;
font-size:15px;
border-radius: 50px;
`


return (
        <>
            <Flex justifyContent="center" style={{marginTop: 100}}> 
                <Flex  flexDirection="column" textAlign="center">
                <h2><b>กรอกข้อมูลสำหรับคนฝากหิ้ว</b></h2><br/>              
                   <Div>
                   <InputName type="text" id="names" />
                   <LabelName>ชื่อ :</LabelName><br/><br/>

                   <InputLastname type="text" id="lastnames"/>
                   <LabelLastName>นามสกุล :</LabelLastName><br/><br/>

                   <InputLocation type="text" id="locations"/>
                   <LabelLocation>ที่อยู่ :</LabelLocation><br/><br/>

                   <InputPhonenumber type="text" id="phonenumbers"/>
                   <LabelPhone>เบอร์โทร :</LabelPhone><br/><br/>
                    </Div>
                   <Flex justifyContent="center"style={{marginTop: 25}}>
                       <div style={{paddingRight:25}}>
                       <Buttons onClick={CommitForm} type="primary">ยืนยัน</Buttons>
                       </div>
                        <div>
                        <Buttons onClick={()=>{router.push('/')}} type="danger">ยกเลิก</Buttons>
                        </div>
                        
                   </Flex>
                </Flex>
            </Flex>
        </>
    )
}


