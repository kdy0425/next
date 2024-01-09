import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Axios from "axios";

import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);

export default function Home(props) {
  const items = props.data;
  return (
    <Layout>
      <Head>
      </Head>

      <div id="content">
        <span className="slogan">가치있게 담백하게</span>

        <div className="main_business">
          <div className="container mf">
            <Swiper
              observer={true}
              observeParents={true}
              allowTouchMove={true}
              pagination={true}
              autoplay={{
                delay: 2000, // autoplay 간격 설정
                disableOnInteraction: false,
              }}
              breakpoints={{
                // when window width is >= 640px
                750: {
                  allowTouchMove: true,

                }
              }}
            >
              <SwiperSlide>
                <Link href="/business/platform">
                  <div className="cnt">
                    <span className="num">01</span>
                    <span className="subject">커머스플랫폼 구축</span>
                    <ul className="items">
                      <li>쇼핑몰 시스템</li>
                      <li>폐쇄몰 시스템</li>
                      <li>식자재 유통관리 시스템</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/business/kiosk">
                  <div className="cnt">
                    <span className="num">02</span>
                    <span className="subject">키오스크/자판기 시스템</span>
                    <ul className="items">
                      <li>광고형 키오스크</li>
                      <li>스마트약국자판기</li>
                      <li>비대면상담 스마트자판기(수출)</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/business/blockchain">
                  <div className="cnt">
                    <span className="num">03</span>
                    <span className="subject">블록체인 개발</span>
                    <ul className="items">
                      <li>블록체인기반 이커머스</li>
                      <li>블록체인 마켓플레이스</li>
                      <li>NFT 마켓플레이스</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/business/service">
                  <div className="cnt">
                    <span className="num">04</span>
                    <span className="subject">서비스</span>
                    <ul className="items">
                      <li>도서유통판매관리 시스템</li>
                      <li>대용량 선거인단 모집 및 투표시스템</li>
                      <li>QR플랫폼</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="main_about">
          <div className="container">
            <h2 className="title_big">About</h2>
            <div className="main_about_cnt">
              <div class="about_title">가치있게 <br/>담백하게<span></span></div>
              <div class="txt">
                <p>Mark J.Penn의 Micro trend X에서 묘사된 것처럼, 트렌드는 바이러스처럼 예상치 못한 순간 전염되고 불가능이 현실이 되기도 합니다</p>
                <p>누구도 예측하지 못한 그 한순간을 위해 돋움은 사용자 경험을 핵심가치로 생각하고 새로운 방향을 제시합니다</p>
                <Link href="/about" className="view_more"><span>View More</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="main_work">
          <div className="container">
            <h2 className="title_big">Work</h2>
            <ul id="work_list" className="work_list clearfix">
              {items.map((item) => (
                <li key={item.id}>
                  <a>
                    <span className="thum"
                      style={{
                        backgroundImage: `url(${item.image})`
                      }}
                    ></span>
                    <div className="cnt">
                      <div className="cate">{item.cate}</div>
                      <span className="subject">{item.name}</span>
                    </div>
                    <div className="dt">
                      <p>{item.message}</p>
                      <span><strong>Client.</strong>{item.client}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="more_btn">
              <Link href="/projects" className="view_more"><span>View More</span></Link>
            </div>
          </div>
        </div>

        <div className="main_service">
          <div className="container">
            <h2 className="title_big">Service</h2>
            <div className="service_list">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  750: {
                    slidesPerView: 3
                  }
                }}
              >
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service1.jpg')`
                    }}
                  ></span>
                  <span className="subject">폐쇄몰/복지몰 솔루션</span>
                  <span className="txt">폐쇄몰이나 임직원 복지몰을 운영하는<br /> 기업을 위한 최상의 선택</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service2.jpg')`
                    }}
                  ></span>
                  <span className="subject">광고결합형 쇼핑몰</span>
                  <span className="txt">비즈니스와 쇼핑을 결합한<br /> 광고결합형 몰 구축으로 수익 확대</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service3.jpg')`
                    }}
                  ></span>
                  <span className="subject">숙박/체험 예약솔루션</span>
                  <span className="txt">숙박과 체험을 한번에 관리하는<br /> 원스톱 예약관리 솔루션</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service4.jpg')`
                    }}
                  ></span>
                  <span className="subject">도서판매유통 솔루션</span>
                  <span className="txt">국내 메이저 대리점이 인정한 전집유통<br /> 최상의 파트너</span>
                </SwiperSlide>
                <SwiperSlide>
                  <span className="thum"
                    style={{
                      backgroundImage: `url('/images/service/service5.jpg')`
                    }}
                  ></span>
                  <span className="subject">블록체인 투표솔루션</span>
                  <span className="txt">블록체인 기반 대용량 온라인<br /> 투표시스템으로 신뢰감 상승</span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </div>


    </Layout >
  )
}



export const getServerSideProps = async () => {
  const res = await Axios.get("https://api.dodoom.co.kr/worklist/index")

  return {
    props: { data: res.data.slice(0, 6)},
  };
};