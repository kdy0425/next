import Link from 'next/link';

export default function Header(){
    return (
        <div id="header">
            <div className="hd_inner">
                <div className="in_wrap">
                    <h1 id="logo"><Link href="/">dodoom</Link></h1>

                    <a href="#" className="hd_brochure">company brochure</a>
                    <button type="button" id="menuToggle" className="menu_toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="sound_only">메뉴열기</span>
                    </button>
                    <div className="nav_wrap" >
                        <div id="" className="nav_box">
                            <ul id="nav">
                            <li><span className="en">Home</span><span className="kr"><span>홈</span></span>className</li>
                            <li><span className="en">About</span><span className="kr"><span>회사소개</span></span>className</li>
                            <li><span className="en">Work</span><span className="kr"><span>프로젝트</span></span>className</li>
                            <li><span className="en">Request</span><span className="kr"><span>문의 및 채용</span></span>className</li>
                            <li><span className="en">Contact</span><span className="kr"><span>오시는길</span></span>className</li>
                            </ul>
                            <div className="brochure">
                                <a href="#">company brochure</a>
                            </div>
                            <div className="nav_cs">
                                <div className="item">
                                    <span className="tit">E-mail</span>
                                    <span className="cnt font_m">phan@dodoom.co.kr</span>
                                </div>
                                <div className="item">
                                    <span className="tit">Office</span>
                                    <span className="cnt">경기도 고양시 일산동구 백마로 195<br/>sk엠시티타워 섹션동 3008호</span>
                                </div>
                                <div className="item">
                                    <span className="tit">Tel</span>
                                    <span className="cnt">02-6012-4040</span>
                                </div>
                                <div className="nav_copy">ⓒ DODOOM. All Rights Reserved.</div>
                            </div>
                        </div>
                        <button type="button" className="nav_close">메뉴 닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}