import Layout from "../components/layout";
import Head from "next/head";
import Axios from "axios";
import React, { useState , useEffect, useMemo} from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Projects(props) {
    //리스트 데이터
    const items = props.data;
    const cates = [];
    
    for(let i=0; i<items.length;i++){
        if(cates.indexOf(items[i].cate) < 1){
            cates.push({name:items[i].cate[0]})
        }
    }

    const catesData = cates.filter((olitem, idx, arr)=>{
        return arr.findIndex((item) => item.name === olitem.name) === idx
    });

    for(let i=0; i<catesData.length;i++){
        catesData[i]['id'] = i;
    }

    //필터링
    const [itemList, setitemList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // Add default value on page load
    useEffect(() => {
        setitemList(items);
    }, []);
    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        setIsLoading(false);
        if (!selectedCategory) {
            return itemList;
        }else{
            return itemList.filter((item) => item.cate[0] === selectedCategory);
        }
    }
    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, itemList]);
    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <Layout>
            <Head>
                <title>DODOOM 프로젝트</title>
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Work</h2>
                    <h3 className="page_title">고객의 생각을 담아<br />디지털 경험을 제공합니다</h3>

                    {isLoading && (
                    <>
                    123
                    </>
                    )}
                    {!isLoading && (
                    <>
                    <div className="cate_tap">
                        <ul>
                            <li>
                                <input type="radio" id="radioAll" name="itemList" value="" onChange={handleCategoryChange} defaultChecked/><label htmlFor="radioAll"><span>All</span></label>
                            </li>
                            {catesData.map((item) => (
                            <li key={item.id}>
                                <input type="radio" id={`radio${item.id}`} name="itemList" value={item.name} onChange={handleCategoryChange}/><label htmlFor={`radio${item.id}`}><span>{item.name}</span></label>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <ul id="work_list" className="work_list">
                        {filteredList.map((item) => (
                            <motion.li key={item.id}
                            animate={{ opacity: 1, top: 0}}
                            initial={{ opacity: 0, top: 50}}
                            transition={{ duration: 0.3 }}
                            >
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
                            </motion.li>
                        ))}
                    </ul>
                    </>
                    )}
                </div>
            </div>

        </Layout>
    )
}


export const getServerSideProps = async () => {
    const res = await Axios.get(process.env.API_URL)
    return {
        props: { data: res.data },
    };
};