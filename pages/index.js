import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Axios from "axios";

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
              breakpoints={{
                // when window width is >= 640px
                750: {
                  allowTouchMove: true
                }
              }}
            >
              <SwiperSlide>
              <Link href="/about">
                  <div className="cnt">
                    <span className="num">1</span>
                    <span className="subject">온라인솔루션</span>
                    <ul className="items">
                      <li>e커머스 플랫폼 </li>
                      <li>비즈니스 어플리케이션</li>
                      <li>회원관리 시스템</li>
                      <li>키오스크 판매 시스템</li>
                      <li>교육 솔루션 </li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/about">
                  <div className="cnt">
                    <span className="num">2</span>
                    <span className="subject">블록체인 개발</span>
                    <ul className="items">
                      <li>NFT Marketplace / 거래소 구축</li>
                      <li>블록체인 투표시스템 구축</li>
                      <li>블록체인 지역화폐 개발</li>
                      <li>블록체인 농산물이력관리 개발</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/about">
                  <div className="cnt">
                    <span className="num">3</span>
                    <span className="subject">마케팅</span>
                    <ul className="items">
                      <li>온라인마케팅</li>
                      <li>보상형 리워드광고</li>
                      <li>온라인 판로 개척</li>
                      <li>인플루언서 마케팅</li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
              <Link href="/about">
                  <div className="cnt">
                    <span className="num">4</span>
                    <span className="subject">지역개발컨설팅</span>
                    <ul className="items">
                      <li>농산어촌개발 컨설팅</li>
                      <li>관광 및 교육 콘텐츠</li>
                      <li>스마트 팜 </li>
                    </ul>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
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