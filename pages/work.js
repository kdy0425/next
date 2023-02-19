import Layout from "../components/layout";
import Head from "next/head";
import 'swiper/css';
import Axios from "axios";

export default function About(props) {
    const items = props.data;
    console.log(props.data)
    return (
        <Layout>
            <Head>
                <title>DODOOM</title>
                <meta name="description" content="DODOOM" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Work</h2>

                    <h3 className="page_title">고객의 생각을 담아<br/>디지털 경험을 제공합니다</h3>
                    
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
                </div>
            </div>
        </Layout >
    )
}


export const getStaticProps = async () => {
    const res = await Axios.get("https://api.dodoom.co.kr/worklist/index")
  
    return {
      props: { data: res.data}
    };
  };