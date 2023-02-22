import React from 'react';
import styles from "./modal.module.css";
export default function Modal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, name } = props;
  
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? `${styles.layer_form} ${styles.terms_layer} ${styles.name}` : 'modal'}>
        {open ? (
          <div>
              <div className={styles.layer_box}>
                  <div className={styles.layer_title}>{header}</div>
                  <div className={styles.layer_cnt}>
                    {props.children}
                  </div>
                  <button type="button" className={styles.layer_close} onClick={close}>팝업 닫기</button>
              </div>
              <span className={styles.layer_bg} onClick={close}>팝업 닫기</span>
          </div>
        ) : null}
      </div>
    );
  };