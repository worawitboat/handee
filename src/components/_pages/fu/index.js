import React,{useState} from 'react';
import {Cards } from '../../_common';
import { Modal , Button , Input} from 'antd';
import {Flex, Box } from 'reflexbox';
import {SearchOutlined} from '@ant-design/icons';
import router from 'next/router';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';

export default function Fu() {
    const [visible, setVisible] = useState(false);
    const [search , setSearch] = useState('')
    const GoogleSearch = () => {
        if(search === '' || search === null){
            alert("please !! Enter Data in Input")
        }
        else{
            router.push('https://www.google.com/search?q='+search)
        }
    }
    return (
        <div >
            <Flex >
                <Box width={[1/8]}>
                </Box>
                <Box width={[6/8]} >
                <Flex justifyContent="center" paddingTop="30px"><h1>Who is What??</h1></Flex>
                    <Flex justifyContent="center" padding="10px">
                        <a onClick={() => setVisible(true)}><Cards Title="Sword Girl" Subtitle="sword girl is ..." Src="https://mocah.org/thumbs/501156-anime-4k-free.jpg"/></a>
                    </Flex ><br></br>
                    <Flex justifyContent="center"><h3>if you want to search : </h3></Flex >
                    <Flex justifyContent="center"><Input placeholder="Search Google" type="text" style={{width:"700px"}} onChange={(e)=>{setSearch(e.target.value)}}></Input><Button onClick={GoogleSearch}><SearchOutlined /></Button></Flex><br/>
                    <Flex justifyContent="center"><Button onClick={()=>{router.push('/')}}>Back</Button></Flex>
                    <br></br>
                    <br></br>
                    
                </Box>
                <Box width={[1/8]}>
                </Box>
            </Flex>
            <Modal title="Card code" centered visible={visible} onOk={() => setVisible(false)} cancelButtonProps={{ disabled: true }} width={1000}>
                <h1>Girl is Ninja !!</h1>
                <span></span>
            </Modal>
        </div>
    )
}




