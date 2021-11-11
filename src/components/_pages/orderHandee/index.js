import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs } from 'antd';
import styled from '@emotion/styled';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

import SelectHandOrder from '../SelectHandOrder'

const { TabPane } = Tabs;

export default function OrderHandee() {

    const [tabPosition, setTabPosition] = useState('bottom')

    const router = useRouter()
    return (
        <div>
            <Tabs tabPosition={tabPosition} defaultActiveKey="1" style={{ alignItems: "center", position: 'relative' }} >
                <TabPane
                    tab={
                        <span>
                            <AppleOutlined />
                            รับหิ้ว
                        </span>
                    }
                    key="1"
                >
                    รับหิ้ว
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            รายการออเดอร์
                        </span>
                    }
                    key="2"
                >
                    Tab 2
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            ประวัติออเดอร์
                        </span>
                    }
                    key="3"
                >
                    Tab 2
                </TabPane><TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            ติดต่อเรา
                        </span>
                    }
                    key="4"
                >
                    Tab 2
                </TabPane>
            </Tabs>
        </div>
    )
}
