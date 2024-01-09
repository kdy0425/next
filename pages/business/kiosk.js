import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';

export default function business() {
    return (
        <Layout>
            <Head>
                <title>돋움 DODOOM 사업내용 - 커머스플랫폼 구축</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">함께 미래를 혁신하며,<br/> 동반자로서의 가치를 실현합니다</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>커머스플랫폼 구축</span></Link>
                        <Link className="active" href="/business/kiosk"><span>키오스크/자판기 시스템</span></Link>
                        <Link href="/business/blockchain"><span>블록체인 개발</span></Link>
                        <Link href="/business/service"><span>서비스</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>커머스플랫폼 구축</h4>
                        <p>돋움은 다양한 플랫폼에서 오랜 기간 쌓아온 노하우를 바탕으로 효과적인 키오스크와 자판기 시스템을 구현합니다.<br/>혁신적인 기술과 실용적인 디자인을 결합하여 편리하고 안정적인 사용자 경험을 제공합니다.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">키오스크 간편 쇼핑 및 광고 </div>
                            <div className="box_tit_sub">키오스크 간편쇼핑 전략</div>
                            <p>지역내 관광지/음식점 뿐만 아니라 밀집지역내 안테나샵 내에 키오스크 광고판 및 쇼핑몰 오픈</p>
                            <p>찾아온 고객에게 프로모션을 강화하여 바로 구매로 유도</p>
                            <p>추후 전국적인 광고채널로 확대를 모색</p>
                            <p>사업확대를 위한 관련 특허 보유 <strong>(키오스크 쇼핑 제어 시스템 및 방법 , mCoupon 서비스를 위한 초경량 NFC 인증 시스템 및 방법)</strong></p>
                            <div className="kiosk_cnt">
                                <div className="kiosk_image"><img src="/images/kiosk.jpg"/><div className="img_sub">&lt;키오스크 기계&gt;</div></div>
                                <div className="kiosk_detail">
                                    <div className="kiosk_area">
                                        <div className="title">&lt;A 지자체 관광지/음식점&gt;</div>
                                        <div className="list">
                                            <div className="area">Aa1</div>
                                            <div className="area">Aa2</div>
                                            <div className="area">Ab1</div>
                                        </div>
                                    </div>
                                    <div className="kiosk_mall">
                                        <div className="title">&lt;A 지자체 전용몰&gt;</div>
                                        <div className="mall_cnt">
                                            <div className="mall">
                                                <div>Aa매장</div>
                                                <div>Ab매장</div>
                                            </div>
                                            <div className="options">
                                                <div><span>키오스크별 상품관리</span></div>
                                                <div><span>광고관리</span></div>
                                                <div><span>주문관리</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="all">전국통합 <br/>광고솔루션 확대</div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">약국스마트무인자판기</div>
                            <div className="box_tit_sub">광고형 스마트자판기</div>
                            <p>팜24와 공동사업진행</p>
                            <p>기존 자판기와는 달리 광고를 적극 탑재한 시스템으로 수익성을 극대화(정면 롤링광고, 측면 광고 등)</p>
                            <p>국내는 약국전용무인자판기로 운영</p>
                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img"><img src="/images/machine1.jpg"/></div>
                                    <div className="img"><img src="/images/machine2.jpg"/></div>
                                    <div className="img"><img src="/images/machine3.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;국내 약국전용스마트자판기&gt;</div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">비대면상담 스마트자판기</div>
                            <div className="box_tit_sub">미국은 비대면상담시스템까지 삽입(약사 상담 후 허용된 약 판매)</div>
                            <p>공항, 대학교, 공장 등에 설치될 예정(미국 애틀란타 DJ CONSULTING 과 수출 진행 중)</p>
                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img lg"><img src="/images/machine4.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;해외 비대면상담 스마트자판기&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
