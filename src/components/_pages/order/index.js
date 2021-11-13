import React , {useState} from 'react'
import { Box, Flex } from 'reflexbox'
import { Button , Card ,Image, Tabs } from 'antd';
import router from 'next/router'

const { TabPane } = Tabs;
export default function order(props) {
  const data = [
    {img:'https://ci.lnwfile.com/cupnjk.jpg', productName: 'hh', addressProduct: 'qqq' , price: '100'},
    {img:'https://ci.lnwfile.com/cupnjk.jpg', productName: 'hh', addressProduct: 'qqq' , price: '100'},
    {img:'https://ci.lnwfile.com/cupnjk.jpg', productName: 'hh', addressProduct: 'qqq' , price: '100'},
    {img:'https://ci.lnwfile.com/cupnjk.jpg', productName: 'hh', addressProduct: 'qqq' , price: '100'},
    {img:'https://ci.lnwfile.com/cupnjk.jpg', productName: 'hh', addressProduct: 'qqq' , price: '100'}
  ]

  function callback(key) {
    console.log(key);
  }

  return (

    <>
    <Flex justifyContent="center" flexDirection="column">
    <Flex justifyContent="center" flexDirection="column" textAlign="center" style={{ marginTop:20}}>
        <Flex flexDirection="column" textAlign="center">
          <h2>รายการออเดอร์</h2>
        </Flex>
      </Flex>
      
      <Flex justifyContent="center" >
      <Tabs justifyContent="center" style={{alignItems: 'center'}} defaultActiveKey="1" onChange={callback}>
    <TabPane tab="progress" key="1">
    <Flex justifyContent="center" style={{ marginTop:20}}>
        <Flex flexDirection="column" textAlign="center">
          {data.map((item, index) => {
            return (
            <Card key={index} onClick={()=>{router.push('order/rate')}} style={{ width:"100%", height:"90%", marginTop: 20 , marginRight: 140 ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
            <Flex>
              <Image
                  width={150}
                  height={120}
                  src={item.img}
                />
              <p style={{textAlign:"left" , marginLeft:15 , marginTop:20}}>
                <p>ชื่อสินค้า : {item.productName}</p>
                <p>ราคาสินค้า : {item.price}</p>
                <p>สถานที่ซื้อสินค้า : {item.addressProduct}</p>
              </p>
            </Flex>
            <Flex justifyContent="row" textAlign="center">
              </Flex>
          </Card>

            )
          })

          }
          
        </Flex>
      </Flex>
    </TabPane>
    <TabPane tab="success" key="2">
    <Flex justifyContent="center" style={{ marginTop:20}}>
        <Flex flexDirection="column" textAlign="center">
          {data.map((item, index) => {
            return (
            <Card key={index} onClick={()=>{router.push('order/rate')}} style={{ width:"100%", height:"90%", marginTop: 20 , marginRight: 140 ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
            <Flex>
              <Image
                  width={150}
                  height={120}
                  src={item.img}
                />
              <p style={{textAlign:"left" , marginLeft:15 , marginTop:20}}>
                <p>ชื่อสินค้า : {item.productName}</p>
                <p>ราคาสินค้า : {item.price}</p>
                <p>สถานที่ซื้อสินค้า : {item.addressProduct}</p>
              </p>
            </Flex>
            <Flex justifyContent="row" textAlign="center">
              </Flex>
          </Card>

            )
          })

          }
          
        </Flex>
      </Flex>
    </TabPane>
    </Tabs>
      </Flex>   
    </Flex>
      
    </>
  )
}