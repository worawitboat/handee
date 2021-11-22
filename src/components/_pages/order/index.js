/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { Box, Flex } from 'reflexbox'
import { Button, Card, Image, Tabs, Tag } from 'antd';
import router from 'next/router'
import { statusorder } from '../../../modules/_test/services';
import { ClockCircleOutlined, CloseCircleOutlined, MoneyCollectFilled, SyncOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { TabPane } = Tabs;
export default function order(props) {

  const [userId, setUserId] = useState("");
  const [data, setData] = useState([])


  function callback(key) {
    console.log(key);
  }

  useEffect(async () => {
    const liff = (await import('@line/liff')).default
    liff.init({ liffId: '1656624101-Ng7Vpxwd' }, async () => {
      if (liff.isLoggedIn()) {
        liff.getProfile().then(async (profile) => {
          console.log(profile);
          setUserId(profile.userId);
          await getMyOrder(profile.userId).then(async (res) => {
            setData([])
            console.log(res.data)
            await res.data.data.map((data) =>
              setData(element => [...element, {
                id: data.id,
                productName: data.nameorder,
                addressProduct: data.address,
                price: data.price,
                img: data.idimage,
                status: data.status
              }]))
          })
        }).catch(err => console.error(err));
      } else {
        liff.login();
      }

    }, err => console.error(err));
  }, [])

  function submit(id, status) {
    console.log(id, status)
    const data = {
      id: id,
      status: status
    }
    router.push({
      pathname: 'order/HistoryProHand',
      query: { data: JSON.stringify(data) }
    })
    // router.push('order/HistoryProHand')
  }

  return (

    <>
      <Flex justifyContent="center" flexDirection="column">
        <Flex justifyContent="center" flexDirection="column" textAlign="center" style={{ marginTop: 20 }}>
          <Flex flexDirection="column" textAlign="center">
            <h2>รายการออเดอร์</h2>
          </Flex>
        </Flex>

        <Flex justifyContent="center" >
          <Tabs justifyContent="center" style={{ alignItems: 'center' }} defaultActiveKey="1" onChange={callback}>
            <TabPane tab="progress" key="1">
              <Flex justifyContent="center" style={{ marginTop: 20 }}>
                <Flex flexDirection="column">
                  {data.map((item, index) => {
                    return (
                      <Card key={index} onClick={() => { if (item.status !== 'wait') { submit(item.id, item.status) } }} style={{ width: "100%", height: "90%", marginTop: 20, marginBottom: 30, marginRight: 140, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Flex justifyContent="right">
                          {item.status === 'wait' ? <Tag icon={<ClockCircleOutlined />} color="warning">waiting</Tag>
                            : item.status === 'progress' ? <Tag icon={<SyncOutlined spin />} color="processing">progress</Tag>
                              : item.status === 'payment' ? <Tag icon={<MoneyCollectFilled />} color="purple">Payment</Tag>
                                : item.status === 'rejected' ? <Tag icon={<CloseCircleOutlined />} color="error">rejected</Tag>
                                  : <></>
                          }
                        </Flex>
                        <Flex>
                          <img
                            width={150}
                            height={120}
                            src={item.img}
                          />
                          <p style={{ textAlign: "left", marginLeft: 15, marginTop: 20 }}>
                            <p>ชื่อสินค้า : {item.productName}</p>
                            <p>ราคาสินค้า : {item.price}</p>
                            <p>สถานที่ซื้อสินค้า : {item.addressProduct}</p>
                          </p>
                          <Flex>
                          </Flex>
                        </Flex>
                      </Card>
                    )
                  })

                  }

                </Flex>
              </Flex>
            </TabPane>
            {/* <TabPane tab="success" key="2">
              <Flex justifyContent="center" style={{ marginTop: 20 }}>
                <Flex flexDirection="column" textAlign="center">
                  {data.map((item, index) => {
                    return (
                      <Card key={index} onClick={() => { router.push('order/rate') }} style={{ width: "100%", height: "90%", marginTop: 20, marginRight: 140, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Flex>
                          <img
                            width={150}
                            height={120}
                            src={item.img}
                          />
                          <p style={{ textAlign: "left", marginLeft: 15, marginTop: 20 }}>
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
            </TabPane> */}
          </Tabs>
        </Flex>
      </Flex>

    </>
  )
}