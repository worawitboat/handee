import React from "react";
import { Flex, Box } from "reflexbox";
import { Button, Card, Avatar, Image } from "antd";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'



export default function PamPage() {
  const { Search } = Input;
  const router = useRouter()

  const countriesData = [
    {
      image: 'https://travel.mthai.com/app/uploads/2019/02/16730144_1867791716833973_2744032784152525809_n.jpg',
      name: 'Korea',
    },
    {
      image: 'http://www.thaifly.com/image/data/img_thaifly/article/switzerland/stmoritz.jpg',
      name: 'Switzerland',
    },
    {
      image: 'https://pix10.agoda.net/geo/city/2994/1_2994_02.jpg?s=1920x822',
      name: 'Dubai',
    },
  ]

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = value => console.log(value);
  const { Meta } = Card;

  return (
    <div>
      <Flex justifyContent="center" style={{ marginLeft: 95 }}>
        <Box width={[1 / 6]} p={4}>
          <p style={{ cursor: 'pointer' }}>Home</p>
        </Box>
        <Box width={[1 / 6]} p={4}>
          Tickets
        </Box>
        <Box width={[1 / 6]} p={4}>
          Hotels
        </Box>
        <Box width={[1 / 6]} p={4}>
          Car Hire
        </Box>
        <Box width={[1 / 6]} p={4}>
          Contact
        </Box>
        <Box width={[1 / 6]} p={4}>
          <Button type="primary" onClick={() => router.push("/signin")}>
            SIGN IN
          </Button>
        </Box>
      </Flex>
      <Flex flexDirection='column'>
        <Image
          style={{ marginTop: 0.5, height: 700, width: '100%', padding: 10 }}
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2061&q=80" />
        <Space direction="vertical">
          <Flex>
            <Box width={1 / 3}></Box>
            <Box width={1 / 3}>
              <Search
                style={{ marginTop: -200 }}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Box>
            <Box width={1 / 3}></Box>
          </Flex>
        </Space>
        <Flex justifyContent="center">
          {countriesData.map(item => {
            return (
              <Card
                style={{ marginTop: 10, marginLeft: 90 }}
                cover={
                  <img
                    style={{ width: 400, height: 200, }}
                    alt="example"
                    src={item.image}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={item.name}
                  description="This is the description"
                />
              </Card>
            )
          })

          }
        </Flex>
      </Flex>
    </div>



  );
}