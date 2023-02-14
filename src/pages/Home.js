import React, { useState } from 'react';
import { Input, Space, Button, Form } from 'antd';
import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MailOutlined } from '@ant-design/icons';

import Header from './components/Header';

import { imagesDir } from './components/objectNeeded';


const Session1 = () => {
    const navigate = useNavigate();
    const refid = process.env.REACT_APP_ESTORE_ID;
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        if (name && email) {
            try {
                const user = await axios.post(process.env.REACT_APP_API + "/ogt", { name, email, refid });
                if (user) {
                    navigate("/thankyou");
                }
            } catch (error) {
                toast.error("An error occured");
            }
        } else {
            toast.error("There is no name or email in the form")
        }
    }

    return (
        <div
            style={{ backgroundImage: `url(${imagesDir}sarisari.jpg)`, height: document.body.scrollHeight }}
        >
            <Header title="Online Grocery Live Free Training" />
            <div align="center" style={{padding: "20px"}}>
                <img src={`${imagesDir}onlinegrocery1.png`} alt="Online Grocery Training" style={ isMobile ? { width: "100%", borderRadius: 8 } : {borderRadius: 8} } />
            </div>
            <div align="center" style={{padding: "0 20px"}}>
                <div style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 850, padding: "20px", fontSize: 16, borderRadius: 8 }}>
                    <h4>Register To Get Notification</h4>
                    Training Schedules: (Every Wed & Sat @ 8PM)<br/><br/>
                    <Form onFinish={() => handleSubmit()}>
                        <Space direction="vertical" style={{width: isMobile ? "100%" : 450}}>
                            <Input
                                size="large"
                                placeholder="Full Name"
                                prefix={<MailOutlined />}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{borderRadius: 8, fontSize: 24}}
                            />
                            <Input
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{borderRadius: 8, fontSize: 24}}
                            />
                            <Button
                                type="primary"
                                style={{ width: isMobile ? "100%" : 450, height: 60, fontSize: 24, borderRadius: 8 }}
                                onClick={() => handleSubmit()}
                            >
                                Submit Registration
                            </Button>
                        </Space>
                    </Form>
                </div>
            </div>
        </div>
    );
}
 
export default Session1;