import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Upload } from 'antd'
import {LeftOutlined , PlusOutlined} from '@ant-design/icons'
import router from 'next/router';

export default function DetailCommit(props) {
const Price = "100,000";
const Delivery = "200"
const [fileList, setFileList] = useState([]);

const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
};

const onPreview = async file => {
    console.log(file.type)
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

const Success = () => {
    const premise = {
        image : fileList
    }
    console.log(premise)
    router.push('DetailCommit/success')
}
    return (
        <>
        <Flex justifyContent="center" style={{marginTop:50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>ยืนยันการชำระเงิน</b></h1>
            <Flex justifyContent="center" style={{marginTop:20}}>
            <Box>
           
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
           </Box>
            </Flex>
            <Flex justifyContent="center" style={{marginTop:20}}>
            <h6 style={{color:"red"}}><b>*หมายเหตุ : ใส่หลักฐานการชำระเงินที่นี่</b></h6>
            </Flex>
            <Flex justifyContent="center" textAlign="center">
                <Box style={{marginTop:20}}>
                    <p>
                        <h3>ค่าสินค้า : {Price} บาท.</h3>
                        <h3>ค่าบริการ : {Delivery} บาท.</h3>
                    </p>
                </Box>    
            </Flex>
            <Flex justifyContent="center" style={{marginTop:30}}>
                <Button style={{borderRadius:50 , width: 80}} type="primary" onClick={()=>{Success()}}><b>ตกลง</b></Button>
            </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


