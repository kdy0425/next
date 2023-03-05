import Layout from "../components/layout";
import Head from "next/head";
import Axios from "axios";
import React, { useState , useEffect, useMemo} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ItemList from "../components/itemList";

export default function Test(props) {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    function getData(){
        Axios.get(API_URL).then((res) => {
            console.log(res.data);
            setList(res.data);
            setIsLoading(false);
        })
    }
    useEffect(() => {
        getData();
    }, [])

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
                        <ItemList list={list} />
                    )}
                </div>
            </div>

        </Layout>
    )
}

