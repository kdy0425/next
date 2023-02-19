import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

export default function Request() {
    const [uploadFiles, setuploadFiles] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const onError = (error) => {
        console.log('에러');
        console.log(error);
    };

    const handleUpload = (e) => {
        if(!e.target.files){
            return false;
        }
        let uploadedFiles = e.target.files;
        console.log(uploadFiles)
        let fileName = uploadedFiles[0].name.slice(uploadedFiles[0].name.indexOf(".") + 1).toLowerCase();

        if(fileName != "ppt" && fileName != "pptx" &&  fileName != "pdf" &&  fileName != "doc" &&  fileName != "hwp" &&  fileName != "zip"){
            Swal.fire('허용 가능한 파일형식은 ppt, pptx, pdf, doc, hwp, zip입니다. 파일형식을 확인해주세요.')

            e.target.value = null;
            return false;
        }
        if(uploadedFiles.size > 20 * 1024 * 1024) {
            Swal.fire('파일은 20MB이하로 첨부해주세요.')
            e.target.value = null;
            return false;
        }
        const files = e.target.files[0];
        console.log(files)
        setuploadFiles(files.name);
    };

    const fileRemove = (e) => {
        document.getElementById('fl1').value = null;
        setuploadFiles('');
    }

    return (
        <Layout>
            <Head>
                <title>DODOOM</title>
                <meta name="description" content="DODOOM" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="content">
                <div className="container">
                    <h2 className="page_group">Request</h2>
                    <h3 className="page_title">돋움은 함께할<br />준비가 되어 있습니다</h3>

                    <div className="cate_tap kr">
                        <Link href='/request' className="view_more active"><span>프로젝트를 의뢰합니다</span></Link>
                        <Link href='/apply' className="view_more "><span>함께 성장하고 싶어요</span></Link>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="form_wrap">
                            <div className="form_box">
                                <div className="title">
                                    <strong>1. 문의하시는 프로젝트의 분야를 선택해 주세요</strong>
                                    <span>원하시는 서비스를 1개 이상 선택 해 주세요. 다중선택이 가능합니다</span>
                                </div>

                                <div className="cnt">
                                    <div className="form_labels">
                                        <div className="item"><input {...register("type")} id="ck1" type="checkbox" value="온라인솔루션" /><label htmlFor="ck1">온라인솔루션</label></div>
                                        <div className="item"><input {...register("type")} id="ck2" type="checkbox" value="콘텐츠개발" /><label htmlFor="ck2">콘텐츠개발</label></div>
                                        <div className="item"><input {...register("type")} id="ck3" type="checkbox" value="마케팅" /><label htmlFor="ck3">마케팅</label></div>
                                        <div className="item"><input {...register("type")} id="ck4" type="checkbox" value="지역개발컨설팅" /><label htmlFor="ck4">지역개발컨설팅</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="form_box">
                                <div className="title">
                                    <strong>2. 프로젝트 주요 내용을 입력해 주세요</strong>
                                </div>
                                <div className="cnt">
                                    <textarea {...register("message")} />

                                    <div className="file_box">
                                        <input id="fl1" 
                                        {...register("files")}
                                        type="file"
                                        onChange={handleUpload}
                                        name="files"
                                        />
                                        <label htmlFor="fl1" className="add_btn">파일첨부</label>
                                        <div className={"file_listing " + (uploadFiles ? 'show' : 'hide')}>
                                            <div className="file_item">
                                                <span id="fileName">{uploadFiles}</span>
                                                <button type="button" className="remove_file" onClick={fileRemove}>파일삭제</button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="form_txt">* 이력서,포트폴리오를 첨부해주세요. 첨부 가능한 파일 형태는 ppt, pptx, pdf, doc, hwp, zip (최대 20MB 까지 첨부 가능합니다)</p>
                                    
                                </div>
                            </div>
                            <div className="form_box">
                                <div className="title">
                                    <strong>3. 의뢰인 정보를 입력해 주세요</strong>
                                </div>
                                <div className="cnt">
                                    <div className="form_ip">
                                        <div className="item">
                                            <input type="text" placeholder="회사이름" {...register("company", { required: true, })} />
                                        </div>
                                        <div className="item">
                                            <input type="text" placeholder="담당자/직급" {...register("name", { required: true, maxLength: 100 })} />
                                        </div>
                                        <div className="item">
                                            <input type="text" placeholder="이메일" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                        </div>
                                        <div className="item">
                                            <input type="tel" placeholder="연락처" {...register("tel", { required: true, minLength: 6, maxLength: 12 })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form_check">
                                    <input {...register("terms", { required: true})} id="fck1" type="checkbox" value="yes" />
                                    <label htmlFor="fck1"></label> <a href="#" onClick={e => e.preventDefault()}>개인정보 수집ㆍ이용</a>에 동의합니다
                                </div>
                            </div>
                        </div>
                        <div className="form_btns">
                            <button type="submit" className="btn submit">프로젝트 문의하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout >
    );
}