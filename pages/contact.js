import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from 'react';

export default function Contact() {
    const [currentTab, clickTab] = useState(0);
    const menuArr = [
    { id: 1 ,name: '본사' ,email: 'phan@dodoom.co.kr' ,ads:'경기도 고양시 일산동구 백마로 195 sk엠시티타워 섹션동 3008호' ,tel: '02-6012-4040', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25270.090651103885!2d126.75424473849762!3d37.654814783093755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c85461d0eb609%3A0xf09af8a0080e978e!2zKOyjvCnrj4vsm4A!5e0!3m2!1sko!2skr!4v1641793382887!5m2!1sko!2skr'},
    { id: 2 ,name: '영남지사' ,email: 'kdg@dodoom.co.kr' ,ads:'부산광역시 금정구 중앙대로 1799 425호 ' ,tel: '070-8672-6477', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13033.82337473143!2d129.09857344227433!3d35.24491366679141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356891601d75c44f%3A0x5ba5fc9fb4c00311!2z67aA7IKw6rSR7Jet7IucIOq4iOygleq1rCDspJHslZnrjIDroZwgMTc5OQ!5e0!3m2!1sko!2skr!4v1642659989874!5m2!1sko!2skr'}, 
    { id: 3 ,name: '호남지사' ,email: 'kdw@dodoom.co.kr' ,ads:'광주광역시 북구 첨단연신로100, b동 605호 ' ,tel: '070-8672-6478', map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15506.78118191946!2d126.86178552357997!3d35.20898025692939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35718e79cf923381%3A0xa3814a781effc5b6!2z6rSR7KO86rSR7Jet7IucIOu2geq1rCDqsbTqta3rj5kgNTY5LTg!5e0!3m2!1sko!2skr!4v1646202810257!5m2!1sko!2skr'}, 
    ];
    const selectMenuHandler = (index) => {
        event.preventDefault;
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
    };
    
    return (
        <Layout>
            <Head>
                <title>돋움 DODOOM 오시는길</title>
            </Head>
            <div id="content" className="mgb0">
                <div className="container">
                    <h2 className="page_group">Contact</h2>

                    <h3 className="page_title">환영합니다<br/>우리는 돋움입니다</h3>
                    
                    <div className="cate_tap kr">
                        {menuArr.map((el,index) => (
                            <a href={'#'+ el.name} className={index === currentTab ? "active" : "" }
                            onClick={() => 
                                {
                                    e => e.preventDefault
                                    selectMenuHandler(index)
                                    
                                }
                            } key={el.id}><span>{el.name}</span></a>
                        ))}
                    </div>

                    <div className="map_info">
                        <div className="item">
                        <span className="tit">E-mail</span>
                        <span className="cnt email">{menuArr[currentTab].email}</span>
                        </div>
                        <div className="item">
                        <span className="tit">Office</span>
                        
                        <span className="cnt ads">{menuArr[currentTab].ads}</span>
                        </div>
                        <div className="item">
                        <span className="tit">Tel</span>
                        <span className="cnt tel">{menuArr[currentTab].tel}</span>
                        </div>
                    </div>

                </div>
                <div className="map_wrap">
                    <iframe src={menuArr[currentTab].map}  loading="lazy"></iframe>
                </div>
            </div >
        </Layout >
    )
}

