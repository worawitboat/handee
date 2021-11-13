/* eslint-disable react-hooks/rules-of-hooks */
import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Input, Upload} from 'antd';
import router from 'next/router'
import ImgCrop from 'antd-img-crop';


export default function edit(props) {
const [firstName , setFirstName] = useState();
const [lastName , setLastName] = useState();
const [address , setAddress] = useState();
const [phone , setPhone] = useState();
const [fileList, setFileList] = useState([]);

function CommitForm(){
    const data = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone
        }
        console.log(data);
        
        router.push({
            pathname: '/DetailProHand',
        })
        
    }

    
const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };


return (
        <>
        <Flex width={1/15} justifyContent="center"></Flex>
            <Flex width={1} justifyContent="center" textAlign="right">
                <Flex justifyContent="center" style={{marginTop: 50}}> 
                <Flex  flexDirection="column" textAlign="center">
                <h2><b>กรอกข้อมูลสำหรับคนรับหิ้ว</b></h2>
                <Flex justifyContent="center" flexDirection="column" >
                    <Input type="text" placeholder="ชื่อ" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 25px"}} onChange={(e)=> setFirstName(e.target.value)} />
                    <Input type="text" placeholder="นามสกุล" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setLastName(e.target.value)} />
                    <Input type="text" placeholder="ที่อยู่" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setAddress(e.target.value)} />
                    <Input type="text" placeholder="เบอร์โทรศัพท์" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> setPhone(e.target.value)} />
                    </Flex>

                    <Flex justifyContent="center" style={{marginTop:30 , marginBottom:30}}>
                    <Box>
                        <ImgCrop >
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                            {fileList.length < 2 && '+ Upload'}
                            </Upload>
                        </ImgCrop></Box>
                    </Flex>

                    <Flex>
                        <p style={{color:"red"}}><b>* หมายเหตุ : รูปถ่ายบัตรประชาชน และ รูปถ่ายหน้าตรง  </b></p>
                    </Flex>

                   <Flex width={1} justifyContent="center" style={{marginTop: 25}}>
                       <Box width={1}>
                       <Button style={{width:"130px",height:"40px",fontWeight:"bold",fontSize:"15px",borderRadius: "50px"}} onClick={()=>{CommitForm()}} type="primary">ยืนยัน</Button>
                       </Box>
                       <Box width={1/3}>
                       </Box>
                        <Box width={1}>
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


