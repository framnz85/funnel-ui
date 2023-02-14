import React from 'react';
import { isMobile } from 'react-device-detect';
import { Button } from 'antd';

import Header from './components/Header';

import { imagesDir } from './components/objectNeeded';

const ThankYou = () => {
    return (
        <div
            style={{ backgroundImage: `url(${imagesDir}sarisari.jpg)`, height: document.body.scrollHeight }}
        >
            <Header title="Online Grocery Live Free Training" />
            <div align="center" style={{padding: isMobile ? "10px" : "20px"}}>
                <div align="center" style={{ backgroundColor: "#fff", width: isMobile ? "100%" : 1200, marginTop: 20, padding: 30, fontSize: 18, borderRadius: 8 }}>
                    <div align="center">
                        <h2>Thank You For Registering</h2><br />
                    </div>
                    <div>
                        <div style={{ width: "30%", float: "left" }}>
                            <img src={`${imagesDir}francisclavano.jpg`} alt="Francis Clavano" style={{ width: "100%"}} />
                        </div>
                        <div style={{ width: "70%", float: "left", paddingLeft: 20 }}>
                            By the way, my name is Francis Clavano and I'm going to be your host for the Live Free Training on How to Start your own Self-Operated Online Grocery Business. To know the next schedule of our Live Free Training, click the button below!
                        
                            <div align="center" style={{paddingTop: 40}}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: isMobile ? "100%" : 500, height: isMobile ? 90 : 60, fontSize: 24 }}
                                    onClick={() => window.open("https://m.me/startonlinegrocery?ref=ogt--" + process.env.REACT_APP_ESTORE_URL)}
                                >
                                    See The Upcoming{isMobile ? <br /> : " "}Schedule HERE
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{clear: "both"}}></div>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}
 
export default ThankYou;