import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import { Input , Button , Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import ImgCrop from 'antd-img-crop';

export default function DetailProHand(props) {
    const [Nameproduct , setNameProduct] = useState();
    const [Priceproduct , setPriceProduct] = useState();
    const [Locationproduct , setLocationProduct] = useState();
    const [fileList, setFileList] = useState([]);
    const router = useRouter();

    const Deal = () => {
       const DataPassToOrderHand = {
            imageproduct : fileList,    
            nameproduct : Nameproduct,
            priceproduct: Priceproduct,
            locationproduct:Locationproduct,
            
        }

        console.log(DataPassToOrderHand);
        router.push('DetailProHand/HistoryProHand')
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


const x = props.router



    return (
        <>
        <Flex width={1/15}></Flex>
        <Flex width={1} style={{marginTop: 50}} justifyContent="center" textAlign="center">
         
        <Flex  flexDirection="column" textAlign="center">
            <h2><b>รายละเอียดสินค้าที่ต้องการฝากหิ้ว</b></h2>
            <Flex justifyContent="center" style={{marginTop:30}}>
            <Box><ImgCrop>
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
            <Flex justifyContent="center" flexDirection="column" style={{marginTop:20}}>
            <Box><Input type="text" placeholder="ชื่อสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setNameProduct(e.target.value)}} /></Box>
            <Box><Input type="text" placeholder="ราคาสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setPriceProduct(e.target.value)}} /></Box>
            <Box><Input type="text" placeholder="สถานที่ซื้อสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setLocationProduct(e.target.value)}} /></Box>
            </Flex>
            <Flex justifyContent="center" style={{marginTop:60}}>
            <Box width={1/2}><Button onClick={()=>{Deal()}} type="primary" style={{borderRadius:50, width:120, height:40, fontWeight:"bold"}}>ยืนยัน</Button></Box>
            <Box width={1/2}><Button onClick={()=>{router.push('/edit')}} type="primary" danger style={{borderRadius:50, width:120, height:40, fontWeight:"bold"}}>ยกเลิก</Button></Box> 
        </Flex>
        </Flex>
            </Flex>
        <Flex width={1/15}></Flex>  
        </>
    )
}


