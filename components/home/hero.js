import Animation from "./ani";
import Link from 'next/link';

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">불러 보고, 별 이름과 아무 덮어 언덕 버리었습니다.</h1>
                <p className="mb-8 leading-relaxed">내일 별 계집애들의 이름자 너무나 불러 이웃 거외다. 내린 오면 별 하나에 벌레는 겨울이 그러나 이 까닭입니다. 하나에 다 너무나 남은 별 없이 지나고 까닭입니다. 하나에 이름을 노루, 봅니다. 하늘에는 잠, 별 마리아 보고, 있습니다. 나의 그리워 것은 계십니다. 어머니, 멀리 애기 하나에 별에도 내일 있습니다. 아스라히 쉬이 이름을 둘 그러나 묻힌 어머님, 차 별을 있습니다. 무엇인지 내 가을 당신은 듯합니다. 딴은 남은 이름과, 별이 잔디가 계십니다.

    아무 파란 북간도에 이름을 버리었습니다. 가슴속에 위에도 릴케 나는 아름다운 많은 때 밤을 계십니다. 이웃 파란 않은 이국 강아지, 별을 계십니다. 새워 별이 까닭이요, 어머니, 쓸쓸함과 까닭입니다. 어머니, 그러나 나는 계십니다. 소녀들의 별에도 어머니, 이름자 비둘기, 별 거외다. 별에도 릴케 것은 우는 무엇인지 나는 시인의 토끼, 거외다. 청춘이 이제 나는 우는 거외다. 하나에 차 때 어머님, 그리고 파란 지나고 있습니다. 겨울이 사람들의 애기 이름과, 멀듯이, 봅니다. 별이 별 내린 밤을 내일 위에 버리었습니다.</p>
                <div className="flex justify-center">
                <Link href="/projects" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}