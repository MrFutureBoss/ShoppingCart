import React from 'react'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
};

export default function Categories() {
    return (
        <div>
            <div className='bg-white m-6 p-4' style={{ borderBottom: "1px solid rgba(0, 0, 0, .05)" }}>
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                />
            </div>

        </div>
    )
}
