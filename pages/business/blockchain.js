import Layout from "../../components/layout";
import Head from "next/head";
import Link from 'next/link';

export default function business() {
    return (
        <Layout>
            <Head>
            <title>돋움 DODOOM 사업내용 - 블록체인 개발</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Business</h2>
                    <h3 className="page_title">함께 미래를 혁신하며,<br/> 동반자로서의 가치를 실현합니다</h3>
                    <div className="cate_tap kr">
                        <Link href="/business/platform"><span>커머스플랫폼 구축</span></Link>
                        <Link href="/business/kiosk"><span>키오스크/자판기 시스템</span></Link>
                        <Link className="active" href="/business/blockchain"><span>블록체인 개발</span></Link>
                        <Link href="/business/service"><span>서비스</span></Link>
                    </div>

                    <div className="business_title">
                        <h4>블록체인 개발</h4>
                        <p>레이어 1 레벨의 메인넷인 닉토넷(NiktoNet)을 개발하여 그 기술력을 인정받은 블록체인 기술 개발 기업헤세그와 협업하여 블록체인 플랫폼을 구축<br/>
                        돋움의 다양한 이커머스 개발 노하우를 접목하여, 블록체인과 마켓을 연결하는 사업을 추진</p>
                    </div>

                    <div className="business_wrap">
                        <div className="business_box">
                            <div className="box_tit">헤세그</div>
                            <p>레이어 1 레벨의 메인넷인 닉토넷(NiktoNet)을 개발</p>
                            <p>멀티체인 지갑(Multichain Wallet)인 클라투(Klaatoo) 개발</p>
                            <p>알제리 기업, Shedio-Design과 블록체인 기반 기부 플랫폼 구축 중</p>
                            <p>스위스 소재 ILFP, 브라질 소재의 C9 Tech와 함께 중남미 지역의 블록체인 파이낸셜 플랫폼 공동 개발 추진</p>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">블록체인기반 이커머스</div>
                            <p>NFT를 활용하여 명품/진품 증명</p>
                            <p>포인트를 토큰으로 전환, 다양한 프로모션으로 활용</p>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">블록체인 마켓플레이스</div>
                            <p>블록체인상에서 생성된 토큰을 거래하는 마켓플레이스 구축</p>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">NFT 마켓플레이스</div>
                            <p>K컨텐츠를 기반으로한 NFT 생성 및 판매 플랫폼 구축</p>
                        </div>

                        <div className="business_box">
                            <div className="box_tit">블록체인 기반 Project Tokem Market 플랫폼</div>
                            <div className="box_tit_sub">Project에서 발행한 PROTO(project Tokem)를 누구나 쉽게 구매하고 거래할 수 있는 마켓 플랫폼</div>
                            <dl>
                                <dt>프로젝트 자체를 분할한 최초의 토큰, PROTO</dt>
                                <dd>· 영화, 공연, 웹툰, 드라마, 연극 등 모든 프로젝트에 접목 가능</dd>
                                <dd>· 프로젝트 별 특성에 맞게 프로젝트 개설자의 자유로운 보상 설계 <span className="sub">예시) 영화: NFT, 시사회 초대권 / 공연: 공연 입장권, 지정석, 굿즈</span></dd>

                                <dt>전세계 누구나 프로젝트 개설 및 참여 가능</dt>
                                <dd>· Global Service로써 자유로운 참여 가능</dd>
                            </dl>

                            <div className="blockchain_flow">
                                <div className="content">
                                    <div className="platform">
                                        <div className="tit">Platform</div>
                                        <div className="arrow l d"><span>판매대금</span></div>
                                        <div className="arrow r d"><span>PROTO 발행</span></div>
                                    </div>
                                    <div className="creator">
                                        <div className="tit">Creator</div>
                                        <div className="arrow r u"><span>프로젝트 개설</span></div>
                                        <div className="arrow r c"><span>토근 폴더에 보상 지급</span></div>
                                    </div>
                                    <div className="user">
                                        <div className="tit">User</div>
                                        <div className="arrow l c"><span>자격증명 (with PROTO)</span></div>
                                        <div className="arrow l u"><span>프로젝트 구매<br/>(with Crypto)</span></div>
                                    </div>
                                </div>
                                <div className="title">&lt;프로젝트를 추진하는 새로운 패러다임&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}
