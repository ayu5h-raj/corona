import React, {Component} from 'react';
import {Card, Avatar } from 'antd';

const { Meta } = Card;

class Types extends Component {

    render() {
        return (
            <Card style={{ width: 300, marginTop: 16 }}>
                <Meta
                    avatar={
                        <Avatar src="../../Assets/cases.png" />
                    }
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        )
    }
}

export default Types;