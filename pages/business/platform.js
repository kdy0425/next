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
                        <Link className="active" href="/business/platform"><span>커머스플랫폼 구축</span></Link>
                        <Link href="/business/kiosk"><span>키오스크/자판기 시스템</span></Link>
                        <Link href="/business/blockchain"><span>블록체인 개발</span></Link>
                        <Link href="/business/service"><span>서비스</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>커머스플랫폼 구축</h4>
                        <p>돋움은 오랜 기간 쇼핑기능을 중심으로 다양한 플랫폼을 만들어 왔습니다.<br/>내부 노하우와 트렌드를 반영하여 성과가 높은 이커머스 플랫폼을 제공합니다.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">쇼핑몰</div>
                            <div className="box_tit_sub">비즈니스 발전을 고려한 독립형 쇼핑시스템</div>
                            <p>독립쇼핑기반으로 타 광고업체와의 연동이 자유로움<br/>
                            오픈형 개발환경을 기반으로 지속적인 개발이 가능하여 기업만의 독자적인 비즈니스를 확대를 지원함</p>
                            <div className="boxtext_list">
                                <div className="title">사용자 기능</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">회원가입</div>
                                        <div className="cnt">
                                            <span>폐쇄몰/오픈몰</span>
                                            <span>회원/비회원</span>
                                            <span>간편회원가입 지원</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">상품진열</div>
                                        <div className="cnt">
                                            <span>모바일 First</span>
                                            <span>검색기능</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">구매</div>
                                        <div className="cnt">
                                            <span>장바구니</span>
                                            <span>원하는 PG 개발</span>
                                            <span>공급처별 묶음구매</span>
                                            <span>배송할인</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">마이페이지</div>
                                        <div className="cnt">
                                            <span>회원정보 수정</span>
                                            <span>배송정보</span>
                                            <span>주문취소</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">연동</div>
                                        <div className="cnt">
                                            <span>외부 서비스와 연결</span>
                                            <span>SSO 개발</span>
                                            <span>CSP광고 연계</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="boxtext_list">
                                <div className="title">관리자 기능</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">상품관리</div>
                                        <div className="cnt">
                                            <span>카테고리 설정</span>
                                            <span>기획전</span>
                                            <span>상품진열</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">회원관리</div>
                                        <div className="cnt">
                                            <span>회원정보 암호화</span>
                                            <span>휴면회원</span>
                                            <span>포인트 관리</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">주문관리</div>
                                        <div className="cnt">
                                            <span>주문상태관리</span>
                                            <span>대량주문업로드</span>
                                            <span>송장업로드</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">공급사관리</div>
                                        <div className="cnt">
                                            <span>상품공급사 관리</span>
                                            <span>공급사별 복수담당자</span>
                                            <span>관리 지원</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">폐쇄몰 시스템</div>
                            <div className="box_tit_sub">임대형 B2B/E  쇼핑시스템</div>
                            <p>일반 소비자와 구분된 쇼핑몰을 제공하고자 하는 벤더사를 위한 임대형 쇼핑몰 시스템</p>
                            <p>회원관리, 상품관리, 주문관리, 메시지관리, 결제관리 지원</p>

                            <div className="b2be_system">
                                <div className="mall">
                                    <span className="tit">쇼핑몰</span>
                                    <span className="tit">쇼핑몰</span>
                                    <span className="tit">쇼핑몰</span>
                                </div>
                                <div className="cc">
                                    <span className="tit">고객사</span>
                                    <div className="options">
                                        <span className="color">쇼핑몰분양관리</span>
                                        <span className="color">공급사관리</span>
                                        <span>상품관리</span>
                                        <span>주문관리</span>
                                        <span>디자인관리</span>
                                        <span>정산관리</span>
                                        <span>메시지관리</span>
                                    </div>
                                </div>
                                <div className="sc">
                                    <div className="tit">
                                        <span>공급사</span>
                                        <span>공급사</span>
                                        <span>공급사</span>
                                    </div>
                                    <div className="options">
                                        <span>담당자관리</span>
                                        <span>상품관리</span>
                                        <span>주문관리</span>
                                        <span>질의응답관리</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">식자재 유통관리 시스템</div>
                            <div className="box_tit_sub">식품 유통플랫폼 구축 지원</div>
                            <p>식자재 유통에 필요한 수주, 발주, 입고, 출고, 재고, 정산 기능 제공</p>
                            <p>발주처별 신용한도 지정 등을 활용한 외상거래 지원, 예치금에 따른 추가 보너스 포인트 지급 등 프로모션 지원 </p>
                            <div className="food_system">
                                <div className="title">시스템 구조</div>
                                <div className="food_system_cnt">
                                    <div className="del_direct">
                                        <span>직접배송</span>
                                        <strong className="pointer pointer0"></strong>
                                        <strong className="pointer pointer1"></strong>
                                        <strong className="pointer pointer2"></strong>
                                    </div>
                                    <div className="group">
                                        <div className="tit">공급사</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="down"><span>물류센터 <br/>입고</span></span>
                                        <span className="up"><span>주문</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">시스템</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="up"><span>발주</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">발주사</div>
                                    </div>
                                    <div className="arrow">
                                        <span className="up"><span>승인</span></span>
                                    </div>
                                    <div className="group">
                                        <div className="tit">대리점</div>
                                        <div className="tit">대리점</div>
                                    </div>
                                    <div className="del_app">
                                        <span>직접배송 <strong>관리APP</strong></span>
                                        <strong className="pointer pointer0"></strong>
                                        <strong className="pointer pointer1"></strong>
                                        <strong className="pointer pointer2"></strong>
                                    </div>
                                </div>
                            </div>
                            <div className="boxtext_list">
                                <div className="title">시스템 장점</div>
                                <div className="list">
                                    <div className="item">
                                        <div className="tit">다양한 결제</div>
                                        <div className="cnt">
                                            <span>예치금</span>
                                            <span>외상거래(신용한도)</span>
                                            <span>PG</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">주문관리</div>
                                        <div className="cnt">
                                            <span>피킹리스트 생성</span>
                                            <span>출고증 출력</span>
                                            <span>직배관리APP</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">발주사 관리</div>
                                        <div className="cnt">
                                            <span>하위 대리점 운영가능</span>
                                            <span>대리점 결제 유무선택</span>
                                            <span>승인제도 운영가능</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">배송관리</div>
                                        <div className="cnt">
                                            <span>직물류 지원</span>
                                            <span>일반택배(송장 등록)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
