import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Header(){
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const openMenu = () => {
        setModalOpen(true);
    };
    const closeMenu = () => {
        setModalOpen(false);
    };
    const handleLinkClick = (href) => {
        if (router.asPath === href) {
            closeMenu(); 
        }
    };
    return (
        <div id="header">
            <div className="hd_inner">
                <div className="in_wrap">
                    <h1 id="logo"><Link href="/">돋움 dodoom</Link></h1>
                    <a href="/_next/static/files/dodoom.pdf" className="hd_brochure" download>company brochure</a>
                    <button type="button" id="menuToggle" className="menu_toggle" onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="sound_only">메뉴열기</span>
                    </button>
                    <div className={modalOpen ? 'nav_wrap active' : 'nav_wrap'} >
                        <div id="" className="nav_box">
                            <ul id="nav">
                            <li>
                                <Link href='/'>
                                    <div onClick={() => handleLinkClick('/')}>
                                    <span className="en">Home</span><span className="kr"><span>홈</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/business/platform'>
                                    <div onClick={() => handleLinkClick('/business/platform')}>
                                    <span className="en">Business</span><span className="kr"><span>사업소개</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <div onClick={() => handleLinkClick('/about')}>
                                    <span className="en">About</span><span className="kr"><span>회사소개</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/projects'>
                                    <div onClick={() => handleLinkClick('/projects')}>
                                    <span className="en">Work</span><span className="kr"><span>프로젝트</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/request'>
                                    <div onClick={() => handleLinkClick('/request')}>
                                    <span className="en">Request</span><span className="kr"><span>문의 및 채용</span></span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact'>
                                    <div onClick={() => handleLinkClick('/contact')}>
                                    <span className="en">Contact</span><span className="kr"><span>오시는길</span></span>
                                    </div>
                                </Link>
                            </li>
                            </ul>
                            <div className="brochure">
                                <a href="/_next/static/files/dodoom.pdf" download>company brochure</a>
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
                        <button type="button" className="nav_close" onClick={closeMenu}>메뉴 닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}