import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import { toast } from 'react-toastify';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { isMobile } from 'react-device-detect';
import { useNavigate  } from "react-router-dom";

import TimerHeader from './components/TimerHeader';

import { imagesDir } from './components/objectNeeded';

const OgpaPay = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const userExist = JSON.parse(localStorage.getItem("ogpaUser"));

    const Sarisari = imagesDir + "sarisari.jpg";
    const Paypal = imagesDir + "paypal.png";
    const BDO = imagesDir + "bdo.png";
    const BPI = imagesDir + "bpi.png";
    const Unionbank = imagesDir + "union.png";
    const Gcash = imagesDir + "gcash.png";
    const Maya = imagesDir + "maya.png";

    const [bodyStyle, setBodyStyle] = useState({ backgroundImage: `url(${Sarisari})` });
    const [ogpaUser, setOgpaUser] = useState(userExist ? userExist : {});
    const [success, setSuccess] = useState(false);
    const [mcid, setMcid] = useState(0);
    const [timer, setTimer] = useState({
        days: 0, hours: 0, minutes: 0, seconds:0
    });
    const [extend, setExtend] = useState(0);
    const [spotLeft, setSpotLeft] = useState(0);

    const paypalClientId = "ATy4_rfmeiT3mEPwjPOHoUFbNA_ZSsqGT9BvtkFkMW4io40J4kdX0NQpYM9YdSWXmawnKufvTNaEuuOg"

    useEffect(() => {
        setBodyStyle({ ...bodyStyle, height: document.body.scrollHeight });
        if (userExist) {
            getOgpaDetails();
        } else {
            getOgpaExist();
        }
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
            setOgpaUser({
                ...ogpaUser,
                amount: ogpa.data.amount
            });
            setExtend(ogpa.data.extend);
        }
    }

    const getOgpaExist = async () => {
        const ogpaExist = await axios.get(process.env.REACT_APP_API + "/ogpa-email/" + queryParams.get("ogpaem"));

        if (!ogpaExist.data._id || ogpaExist.data.err) {
            navigate(`/ogpaform${mcid ? "?mcid=" + mcid : ""}`);
        } else {
            setOgpaUser(ogpaExist.data);
            localStorage.setItem("ogpaUser", JSON.stringify(ogpaExist.data));
        }
    }

    const onChange = async (e) => {
        console.log(e.target.value)
        setOgpaUser({ ...ogpaUser, payment: e.target.value });
        localStorage.setItem("ogpaUser", JSON.stringify({ ...ogpaUser, payment: e.target.value }));
        if (ogpaUser.email) {
            await axios.post(process.env.REACT_APP_API + "/ogpa/new", { ...ogpaUser, payment: e.target.value });
        }
    };

    const handleApprove = async (sellerTxnID) => {
        if (sellerTxnID) {
            setSuccess(true);
            await axios.post(process.env.REACT_APP_API + "/ogpa/new", { ...ogpaUser, payDetails: sellerTxnID });
        }
    };

    return (
        <div style={bodyStyle}>
            {extend > 0 && <TimerHeader
                title="You only have this time left to pay OGPA..."
                timer={timer}
                setTimer={setTimer}
                extend={extend}
                setSpotTaken={() => ""}
                setSpotLeft={setSpotLeft}
            />}
            {extend === 0 && <TimerHeader
                title="You only have this time left to pay OGPA..."
                timer={timer}
                setTimer={setTimer}
                extend={extend}
                setSpotTaken={() => ""}
                setSpotLeft={setSpotLeft}
            />}
            <div align="center">
                <div align="center" style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 1200, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 8 }}>
                    <h3>Choose Payment Below</h3>
                    <span style={{ color: "#f00", fontSize: 24 }}>
                        Total Amount: <b>₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</b>
                    </span><br /><br />
                    <Radio.Group onChange={onChange} defaultValue={ogpaUser.payment && ogpaUser.payment.toString()}>
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
                                Unionbak Deposit or Online
                            </Radio.Button>
                            <Radio.Button value="gca" style={{ height: 80 }}>
                                <img src={Gcash} width="100" height="50" alt="Gcash Payment" /><br />
                                Gcash Send
                            </Radio.Button>
                            <Radio.Button value="may" style={{ height: 80 }}>
                                <img src={Maya} width="100" height="50" alt="Maya Payment" /><br />
                                Maya Send Money
                            </Radio.Button>
                    </Radio.Group><br /><br />
                    <h4 style={{color: "red"}}>{spotLeft} Spot Left!!!</h4>
                    {ogpaUser.payment === "pal" && !success &&
                        <PayPalScriptProvider options={{ "client-id": paypalClientId, currency: "PHP", }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                description: "Payment for OGPA Workshop - email: " + ogpaUser.email,
                                                amount: {
                                                    value: Number(ogpaUser.amount).toFixed(2)
                                                }
                                            }
                                        ]
                                    })
                                }}
                                onApprove={async (data, actions) => {
                                    const order = await actions.order.capture();
                                    handleApprove(order.purchase_units[0].payments.captures[0].id);
                                }}
                                onError={(err) => {
                                    toast.error(err);
                                }}
                            />
                        </PayPalScriptProvider>
                    }
                    {ogpaUser.payment === "pal" && success &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <h2 style={{color:"green"}}>Success!!! Thank you for your Payment.</h2>
                                Please notify us together with your email registered <b>{ogpaUser.email}</b> that you have paid the workshop by emailing us at davgros.85@gmail.com or chat us on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a> so we can approve your registration.
                            </div><br />
                        </div>
                    }
                    {ogpaUser.payment === "bdo" &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <b>Here's how to Pay:</b><br/>
                            Send your payments by going to the nearest BDO branch or by transferring thru your BDO Online Banking and by using the details below: <br /><br/>
                            <div align="center">
                                <b>Account Number:</b> 006760032739<br/>
                                <b>Account Name:</b> Francis John Clavano<br/>
                                <b>Amount:</b> ₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <br /><br/>
                                After sending the payment, send the screenshot of your Payment Receipt together with the email address you registered here <b>{ogpaUser.email}</b> to davgros.85@gmail.com or chat it on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a>.
                            </div><br />
                        </div>
                    }
                    {ogpaUser.payment === "bpi" &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <b>Here's how to Pay:</b><br/>
                            Send your payments by going to the nearest BPI branch or by transferring thru your BPI Online Banking and by using the details below: <br /><br/>
                            <div align="center">
                                <b>Account Number:</b> 2149704874<br/>
                                <b>Account Name:</b> Francis John Clavano<br/>
                                <b>Amount:</b> ₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <br /><br/>
                                After sending the payment, send the screenshot of your Payment Receipt together with the email address you registered here <b>{ogpaUser.email}</b> to davgros.85@gmail.com or chat it on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a>.
                            </div><br />
                        </div>
                    }
                    {ogpaUser.payment === "uni" &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <b>Here's how to Pay:</b><br/>
                            Send your payments by going to the nearest Unionbank branch or by transferring thru your Unionbank Online Banking and by using the details below: <br /><br/>
                            <div align="center">
                                <b>Account Number:</b> 109430284113<br/>
                                <b>Account Name:</b> Francis John Clavano<br/>
                                <b>Amount:</b> ₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <br /><br/>
                                After sending the payment, send the screenshot of your Payment Receipt together with the email address you registered here <b>{ogpaUser.email}</b> to davgros.85@gmail.com or chat it on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a>.
                            </div><br />
                        </div>
                    }
                    {ogpaUser.payment === "gca" &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <b>Here's how to Pay:</b><br/>
                            Send your payments by logging in to your Gcash App and choose Send. Then provide the details below: <br /><br/>
                            <div align="center">
                                <b>Account/Mobile Number:</b> 09778557778<br/>
                                <b>Account Name:</b> Francis John Clavano<br/>
                                <b>Amount:</b> ₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <br /><br/>
                                After sending the payment, send the screenshot of your Payment Receipt together with the email address you registered here <b>{ogpaUser.email}</b> to davgros.85@gmail.com or chat it on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a>.
                            </div><br />
                        </div>
                    }
                    {ogpaUser.payment === "may" &&
                        <div>
                            <div align="center" className="alert alert-success" role="alert">
                            <b>Here's how to Pay:</b><br/>
                            Send your payments by logging in to your Maya App and choose Send money. Then provide the details below: <br /><br/>
                            <div align="center">
                                <b>Account/Mobile Number:</b> 09778557778<br/>
                                <b>Account Name:</b> Francis John Clavano<br/>
                                <b>Amount:</b> ₱{ogpaUser.amount && ogpaUser.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <br /><br/>
                                After sending the payment, send the screenshot of your Payment Receipt together with the email address you registered here <b>{ogpaUser.email}</b> to davgros.85@gmail.com or chat it on my <a href="https://www.facebook.com/francisjohn.clavano" target="_blank" rel="noreferrer">FB Account "Francis Clavano"</a>.
                            </div><br />
                        </div>
                    }
                </div>
            </div><br /><br />
        </div>
    );
}
 
export default OgpaPay;