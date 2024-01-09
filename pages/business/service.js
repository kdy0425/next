import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';

export default function business() {
    return (
        <Layout>
            <Head>
                <title>돋움 DODOOM 사업내용 - 서비스</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">함께 미래를 혁신하며,<br/> 동반자로서의 가치를 실현합니다</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>커머스플랫폼 구축</span></Link>
                        <Link href="/business/kiosk"><span>키오스크/자판기 시스템</span></Link>
                        <Link href="/business/blockchain"><span>블록체인 개발</span></Link>
                        <Link className="active" href="/business/service"><span>서비스</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>서비스</h4>
                        <p>도서 유통판매관리, 대용량 투표인단 모집 및 투표, <br/>그리고 QR플랫폼을 통한 온라인과 오프라인의 완벽한 연결을 경험하세요.</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">(도서) 유통판매관리 시스템</div>
                            <div className="box_tit_sub">기존 시스템 고도화 및 SaaS 형태의 클라우드 서비스로 확장</div>
                            <p>현재 성우, 다산북스, 천재교육, 키즈엠퍼스트 등  전집 유통시장에서 활용하고 있으며 신규 전집이 등장할 때 가장 우선시되는 도서유통솔루션</p>
                            <p>주문관리에 특화된 도서유통전문 ERP솔루션</p>
                            <p>기존 개별공급 관리형태에서 벗어나 클라우드 형태의 서비스로 전환 개발 진행</p>
                            <p>업체별 별도의 DB 공간을 제공</p>

                            <div className="boxtext_list">
                                <div className="list mb_row item_inline">
                                    <div className="item">
                                        <div className="tit">주요기능</div>
                                        <div className="cnt">
                                            <span>· 관리자관리</span>
                                            <span>· 출판사관리</span>
                                            <span>· 상품관리</span>
                                            <span className="color">· 판매점관리</span>
                                            <span className="color">· 주문관리</span>
                                            <span>· 해피콜관리</span>
                                            <span>· 매출관리</span>
                                            <span>· 선입금관리</span>
                                            <span>· 통계관리</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">· 판매점 관리</div>
                                        <div className="cnt">
                                            <span>· 대량회원 등록</span>
                                            <span>· 판매점코드 설정(대량등록 지원)</span>
                                            <span>· 판매점 등급관리</span>
                                            <span>· 지역권 설정</span>
                                            <span>· 조직관리(상위조직/하위조직)</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">· 주문 관리</div>
                                        <div className="cnt">
                                            <span>· 중복주문관리</span>
                                            <span>· 동일취소내역관리</span>
                                            <span>· 지역권위배주문관리</span>
                                            <span>· 배송관리(박스 등록 매칭)</span>
                                            <span>· 발송관리 송장체크 APP제공</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">대용량 투표인단 모집 및 투표시스템</div>
                            <div className="box_tit_sub">다량의 투표인단 모집 및 투표 시스템을 고려한 투표/설문 폴 시스템</div>
                            <p>본인인증을 기반으로 투표인단 모집</p>
                            <p>안정적인 대용량 투표시스템 구성 (초당 2,000명 이상 커버), 추후 블록체인 시스템 도입</p>
                            <p>소규모 민간대상을 위한 투표시스템 개발(보상 시스템 고도화 가능)</p>

                            <div className="boxtext_list">
                                <div className="list mb_row arrow_items">
                                    <div className="group">
                                        <div className="item">
                                            <div className="tit">투표인단 모집</div>
                                            <div className="cnt">
                                                <span>· 알림톡 발송</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="tit">투표인단 등록</div>
                                            <div className="cnt">
                                                <span>· 대량업로드</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">이의신청/정정</div>
                                        <div className="cnt">
                                            <span>· 본인인증</span>
                                            <span>· 휴대폰인증</span>
                                            <span>· 이메일인증</span>
                                        </div>
                                    </div>
                                    <div className="item color">
                                        <div className="tit">투표실시</div>
                                        <div className="cnt">
                                            <span>· 알림톡 발송</span>
                                            <span>· 미투표자 알림톡 발송</span>
                                            <span>· 본인인증</span>
                                            <span>· 휴대폰인증</span>
                                            <span>· 이메일인증</span>
                                            <span>· 택일</span>
                                            <span>· 다중선택</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="tit">투표결과 오픈</div>
                                        <div className="cnt">
                                            <span>· 개표일시 지정</span>
                                            <span>· 담당자 본인인증</span>
                                            <span>· 개표비밀번호 생성</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">온라인과 오프라인을 연결하는 QR플랫폼</div>
                            <div className="box_tit_sub">QR과 당신의 비즈니스를 쉽고 강력하게 연결합니다.</div>
                            <p>동적 QR 코드 생성/ 검색 추적 및 분석</p>
                            <p>모바일에 최적화된 페이지 만들기 지원/출력을 위한 고해상도 QR 코드 대량다운로드</p>

                            <div className="img_list">
                                <div className="img_item">
                                    <div className="img"><img src="/images/isqr1.jpg"/></div>
                                    <div className="img"><img src="/images/isqr2.jpg"/></div>
                                    <div className="img"><img src="/images/isqr3.jpg"/></div>
                                </div>
                                <div className="img_sub">&lt;ISQR 사이트&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
