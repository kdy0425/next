import Layout from "../components/layout";
import Head from "next/head";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>DODOOM 회사소개</title>
            </Head>
            <div id="content" className="mgt0">
                <div className="about_visual">
                    <div className="container">
                        <h2 className="page_group">About</h2>
                        <div className="about_txt">
                            <h3 className="about_title">가치있게<br />담백하게<span></span></h3>
                            <div className="txt">
                                <p>Mark J.Penn의 Micro trend X에서 묘사된 것처럼,
                                    트렌드는 바이러스처럼 예상치 못한 순간 전염되고
                                    불가능이 현실이 되기도 합니다</p>
                                <p>누구도 예측하지 못한 그 한순간을 위해 돋움은 사용자
                                    경험을 핵심가치로 생각하고 새로운 방향을 제시합니다</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about_dodoom">
                        <span className="txt1">돋움은</span>
                        <div className="txt_wrap">
                            <div className="title">새로운 생각과 행동을 통해<br />감성을 이해하는 사용자 중심의<br /><strong><span>Community Group</span></strong>입니다.</div>
                            <p>디지털 세상에서 급속히 이루어지고 있는 패러다임 속에서도
                                인간 중심의 가치를 발견하고 다양한 시각과 전략으로
                                본질이 더욱 돋보이는 디지털 경험을 선사하는 것이 돋움이
                                생각하는 핵심 가치입니다</p>
                        </div>
                    </div>

                    <div className="about_wwd">
                        <div className="about_stitle">What we do</div>
                        <ul className="wwd_list">
                            <li>
                                <span className="tit">폐쇄몰/복지몰 <br />솔루션</span>
                                <span className="cnt">폐쇄몰이나 임직원 복지몰을 운영하는 기업을 위한 최상의 선택</span>
                            </li>
                            <li>
                                <span className="tit">광고결합형 <br />쇼핑몰</span>
                                <span className="cnt">비즈니스와 쇼핑을 결합한 광고결합형 몰 구축으로 수익 확대</span>
                            </li>
                            <li>
                                <span className="tit">숙박/체험 예약 <br />솔루션</span>
                                <span className="cnt">숙박과 체험을 한번에 관리하는 원스톱 예약관리 솔루션</span>
                            </li>
                            <li>
                                <span className="tit">도서판매유통 <br />솔루션</span>
                                <span className="cnt">국내 메이저 대리점이 인정한 전집유통 최상의 파트너</span>
                            </li>
                            <li>
                                <span className="tit">블록체인 투표 <br />솔루션</span>
                                <span className="cnt">블록체인 기반 대용량 온라인 투표시스템으로 신뢰감 상승</span>
                            </li>
                        </ul>
                    </div>

                    <div className="about_tng">
                        <div className="about_stitle">Technology</div>
                        <div className="tng_list">
                        <Swiper
                        slidesPerView={'auto'}
                        >
                        <SwiperSlide><Image src="/images/technologyimg1.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg2.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg3.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg4.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg5.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg6.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg7.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        <SwiperSlide><Image src="/images/technologyimg8.png" alt="" width={300} height={300} priority styles={{ objectFit: 'contain' }}/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        </Layout >
    )
}

About.headerStyle = 'header_white'
