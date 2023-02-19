import Link from "next/link";

export default function Header(){
    return (
        <div id="footer">
            <a href="#" id="to_top" >TOP</a>
            <div className="ft_top clearfix">
                <div className="container">
                    <span className="prj_title">돋움과 함께 성공적인 프로젝트를 경험하세요</span>
                    <Link href="#" className="prj_inquiry"><span className="txt"><span>프로젝트 </span>문의하기</span></Link>
                </div>
            </div>
            <div className="ft_bottom">
                <span className="ft_logo">dodoom</span>
                <div className="ft_info">
                    <span className="ads"><strong>Office</strong>경기도 고양시 일산동구 백마로 195 sk엠시티타워 섹션동 3008호</span>
                    <div className="ft_te clearfix">
                        <span><strong>T</strong>02-6012-4040</span>
                        <span><strong>E</strong>phan@dodoom.co.kr</span>
                    </div>
                </div>
                <span className="ft_copy">ⓒ DODOOM. All Rights Reserved.</span>
            </div>
        </div>
    )
}