import Layout from "../components/layout";
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function PageNotFound() {
    return (
        <Layout>
            <Head>
                <title>DODOOM 404</title>
            </Head>
            <div id="content">
                <div className="not_found">
                404 page
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
        </Layout >
    )
}
