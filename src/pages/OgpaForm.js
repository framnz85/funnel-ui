import React, { useState, useEffect } from 'react';
import {
    MailOutlined,
    KeyOutlined,
    UserOutlined,
    RightCircleOutlined,
    WalletOutlined,
    MobileOutlined
} from '@ant-design/icons';
import { Input, Space, Form, Radio } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";
import axios from 'axios';
import Joi from "joi-browser";
import { isMobile } from 'react-device-detect';
import NumberFormat from "react-number-format";

import TimerHeader from './components/TimerHeader';

import { imagesDir } from './components/objectNeeded';

const OgpaForm = () => {
    const navigate = useNavigate();
    const refid = process.env.REACT_APP_ESTORE_ID;
    const queryParams = new URLSearchParams(window.location.search);

    const Sarisari = imagesDir + "sarisari.jpg";
    const Paypal = imagesDir + "paypal.png";
    const BDO = imagesDir + "bdo.png";
    const BPI = imagesDir + "bpi.png";
    const Unionbank = imagesDir + "union.png";
    const Gcash = imagesDir + "gcash.png";
    const Maya = imagesDir + "maya.png";

    const initialState = {
        amount: 0,
        name: "",
        email: "",
        password: "",
        repassword: "",
        mobile: "",
        payment: ""
    }

    const [bodyStyle, setBodyStyle] = useState({ backgroundImage: `url(${Sarisari})` });
    const [values, setValues] = useState(initialState);
    const [mcid, setMcid] = useState(0);
    const [timer, setTimer] = useState({
        days: 0, hours: 0, minutes: 0, seconds:0
    });
    const [extend, setExtend] = useState(0);
    const [spotLeft, setSpotLeft] = useState(0);

    useEffect(() => {
        setBodyStyle({ ...bodyStyle, height: document.body.scrollHeight });
        getOgpaDetails();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const mcidExist = queryParams.get("mcid");
        if (mcidExist) {
            setMcid(mcidExist);
            localStorage.setItem("mcid", mcidExist);
        } else {
            if (localStorage.getItem("mcid")) {
                setMcid(localStorage.getItem("mcid"));
            } else {
                setMcid(0);
                localStorage.removeItem("mcid");
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getOgpaDetails = async () => {
        const ogpa = await axios.get(process.env.REACT_APP_API + "/ogpa");
        if (ogpa.data.err) {
            toast.error(ogpa.data.err);
        } else {
            setValues({
                ...values,
                amount: ogpa.data.amount
            });
            setExtend(ogpa.data.extend)
        }
    }

    const schema = {
        name: Joi.string().required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        amount: Joi.number().required(),
        password: Joi.string().min(6).max(32).required(),
        payment: Joi.string().required().error(() => {
            return {
                message: 'You need to Choose a Payment first',
                };
            }
        )
    };

    const handleSubmit = async () => {
        const forSubmit = { ...values };

        if (forSubmit.password !== forSubmit.repassword)
            return toast.error("Password does not match");
            
        delete forSubmit.repassword;
        delete forSubmit.mobile;

        const validate = Joi.validate(forSubmit, schema, {
            abortEarly: false,
        });

        if (validate.error) {
            for (let item of validate.error.details) toast.error(item.message);
            return;
        }

        delete values.repassword;

        const newOgpa = await axios.post(process.env.REACT_APP_API + "/ogpa/new", {...values, refid});

        if (newOgpa.data.err) {
            toast.error(newOgpa.data.err);
        } else {
            localStorage.setItem("ogpaUser", JSON.stringify(newOgpa.data));
            navigate(`/ogpareg${mcid ? "?mcid=" + mcid : ""}`);
        }

        if(mcid && values.email) {
            const mcemail = await axios.get(process.env.REACT_APP_API + "/manychat-purchase/" + mcid + "/" + values.email);
            if (mcemail) {
                await axios.get(process.env.REACT_APP_API + "/manychat/" + mcid + "/content20221004132940_191845");
            }
        }
    }

    const onChange = (e) => {
        setValues({ ...values, payment: e.target.value });
    };

    return (
        <div style={bodyStyle}>
            {extend > 0 && <TimerHeader
                title="Register as We End in..."
                timer={timer}
                setTimer={setTimer}
                extend={extend}
                setSpotTaken={() => ""}
                setSpotLeft={setSpotLeft}
            />}
            {extend === 0 && <TimerHeader
                title="Register as We End in..."
                timer={timer}
                setTimer={setTimer}
                extend={extend}
                setSpotTaken={() => ""}
                setSpotLeft={setSpotLeft}
            />}
            <div align="center" style={{padding: isMobile ? "10px" : "20px"}}>
                <div align="center" style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 1200, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 8 }}>
                    <h2>OGPA Program Registration Form</h2>
                    <h4 style={{color: "red"}}>{spotLeft} Spot Left!!!</h4>
                    <Form onFinish={() => handleSubmit()}>
                        <Space direction="vertical" style={{width: isMobile ? 330 : 480}}>
                            <Input
                                size="large"
                                placeholder="Name"
                                prefix={<UserOutlined />}
                                value={values.name}
                                onChange={(e) => setValues({ ...values, name: e.target.value })}
                            />
                            <Input
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                value={values.email}
                                onChange={(e) => setValues({ ...values, email: e.target.value })}
                            />
                            <Input
                                size="large"
                                placeholder="Amount"
                                prefix={<WalletOutlined />}
                                value={`₱${values.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                                disabled
                            />
                            <Input.Password
                                size="large"
                                placeholder="Password"
                                prefix={<KeyOutlined />}
                                value={values.password}
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                            />
                            <Input.Password
                                size="large"
                                placeholder="Re-type Password"
                                prefix={<KeyOutlined />}
                                value={values.repassword}
                                onChange={(e) => setValues({ ...values, repassword: e.target.value })}
                            />
                            <Input
                                size="large"
                                placeholder="Mobile (Optional)"
                                prefix={<MobileOutlined  />}
                                value={values.mobile}
                                onChange={(e) => setValues({ ...values, mobile: e.target.value })}
                            />
                            <br/>
                        </Space>
                        <h5>Choose a Payment Below</h5>
                        <Radio.Group onChange={onChange} defaultValue={values.payment}>
                            <Radio.Button value="pal" style={{ height: 80 }}>
                                <img src={Paypal} width="100" height="50" alt="Card Payment or Paypal" /><br />
                                Credit / Debit Card
                            </Radio.Button>
                            <Radio.Button value="bdo" style={{ height: 80 }}>
                                <img src={BDO} width="100" height="50" alt="BDO Payment" /><br />
                                BDO Deposit or Online
                            </Radio.Button>
                            <Radio.Button value="bpi" style={{ height: 80 }}>
                                <img src={BPI} width="100" height="50" alt="BPI Payment" /><br />
                                BPI Deposit or Online
                            </Radio.Button><br />
                            <Radio.Button value="uni" style={{ height: 80 }}>
                                <img src={Unionbank} width="100" height="50" alt="Unionbank Payment" /><br />
                                Unionbank Deposit or Online
                            </Radio.Button>
                            <Radio.Button value="gca" style={{ height: 80 }}>
                                <img src={Gcash} width="100" height="50" alt="Gcash Payment" /><br />
                                Gcash Send
                            </Radio.Button>
                            <Radio.Button value="may" style={{ height: 80 }}>
                                <img src={Maya} width="100" height="50" alt="Maya Payment" /><br />
                                Maya Send Money
                            </Radio.Button>
                        </Radio.Group>
                        <br />
                        <button
                            type="submit"
                            className="btn-primary btn-lg"
                            style={{ fontSize: isMobile ? "18px" : "30px", padding: isMobile ? "15px 40px" : "15px 80px", margin: 30 }}
                        >
                            Pay{" "}
                            <NumberFormat
                                value={Number(values.amount).toFixed(0)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={`₱`}
                                style={{margin: 0}}
                            />{" "}NOW{" "}
                            <RightCircleOutlined />
                        </button>
                    </Form>
                </div>
            </div><br /><br />
        </div>
    );
}
 
export default OgpaForm;