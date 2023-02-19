import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

export default function Apply() {
    const errorMessage = [];
    const [uploadFiles, setuploadFiles] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    
    const onError = (error) => {
        //Swal.fire('등록시 문제발생했습니다.')
        console.log(error);
        let aaa = error;
        console.log(aaa);
        let bbb = ['11', '22','33'];
        console.log(bbb);

        let newArr = [];

        for (let i = 0; i < Object.keys(aaa).length; i++) {
            let key = Object.keys(aaa)[i];
            let value = Object.values(aaa)[i];
            newArr.push({ value });
        }

        console.log(newArr);

        // {Object.keys(errors).map((fieldName) => (
        // <ErrorMessage errors={errors} name={fieldName as any} as="div" key={fieldName} />
        // ))}
        
        // error.forEach(element => {
        //     console.log(element.message);
        // });

        //errorMessage.push(item.message)
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
                        <Link href='/request' className="view_more"><span>프로젝트를 의뢰합니다</span></Link>
                        <Link href='/apply' className="view_more active"><span>함께 성장하고 싶어요</span></Link>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="form_wrap">
                            <div className="form_box">
                                <div className="title">
                                    <strong>1. 지원 분야를 선택해 주세요</strong>
                                </div>

                                <div className="cnt">
                                    <div className="form_labels">
                                        <div className="item">
                                            <input {...register("type", { required: {value:true,message:"지원분야 선택은 필수값 입니다."}})} id="ck1" type="checkbox" value="기획자" />
                                            <label htmlFor="ck1">기획자</label>
                                        </div>
                                        <div className="item">
                                            <input {...register("type", { required: {value:true,message:"지원분야 선택은 필수값 입니다."}})} id="ck2" type="checkbox" value="디자이너" />
                                            <label htmlFor="ck2">디자이너</label>
                                        </div>
                                        <div className="item">
                                            <input {...register("type", { required: {value:true,message:"지원분야 선택은 필수값 입니다."}})} id="ck3" type="checkbox" value="퍼블리싱" />
                                            <label htmlFor="ck3">퍼블리싱</label>
                                        </div>
                                        <div className="item">
                                            <input {...register("type", { required: {value:true,message:"지원분야 선택은 필수값 입니다."}})} id="ck4" type="checkbox" value="개발자" />
                                            <label htmlFor="ck4">개발자</label>
                                        </div>
                                        <div className="item">
                                            <input {...register("type", { required: {value:true,message:"지원분야 선택은 필수값 입니다."}})} id="ck5" type="checkbox" value="마케팅" />
                                            <label htmlFor="ck5">마케팅</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form_box">
                                <div className="title">
                                    <strong>2. 지원자 정보를 입력해 주세요</strong>
                                </div>
                                <div className="cnt">
                                    <div className="form_ip">
                                        <div className="item">
                                            <input type="text" placeholder="이름" {...register("company", { required: "이름은 필수값 입니다.", })} />
                                        </div>
                                        <div className="item">
                                            <input type="text" placeholder="이메일" {...register("email", { required: '이메일은 필수값 입니다.', pattern: /^\S+@\S+$/i })} />
                                        </div>
                                        <div className="item">
                                            <input type="tel" placeholder="연락처" {...register("tel", { required: '연락처는 필수값 입니다.', minLength: 6, maxLength: 12 })} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form_box">
                                <div className="title">
                                    <strong>3. 지원자 정보를 입력해 주세요</strong>
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
                                <div className="form_check">
                                    <input {...register("terms", { required: '개인정보 수집 및 이용 동의는 필수입니다.'})} id="fck1" type="checkbox" value="yes" />
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