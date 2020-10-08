import React, { useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Query, ShootingConnection } from 'src/types';
import { Modal } from '@material-ui/core';
import { VisibleContext } from 'src/hooks/useModalVisibleContext';
import { useRouter } from 'next/router';
import { SIGNON } from 'src/constant';
import styles from 'styles/logInModal.module.scss';

export default function LogInModal() {
  const [visible, setVisible] = useContext(VisibleContext);
  const { pathname, push } = useRouter();
  return (
    <Modal open={visible.logIn} onClose={() => setVisible({ logIn: false })}>
      <div className={styles.modal}>
        <button type="button" onClick={() => setVisible({ logIn: false })}>
          <img className={styles.closeButton} src="/images/x.png" alt="" />
        </button>
        <h1>로그인</h1>
        <div className={styles.inputWrap}>
          <text>아이디 (전화번호)</text>
          <input placeholder="아이디를 입력해주세요" />
        </div>
        <div className={styles.inputWrap}>
          <text>비밀번호</text>
          <input placeholder="비밀번호를 입력해주세요" type="password" />
        </div>
        <button className={styles.logInButton} type="button">
          <text>로그인</text>
        </button>
        <button
          className={styles.signOnButton}
          type="button"
          onClick={() => {
            setVisible({ logIn: false });
            push(SIGNON);
          }}
        >
          <text>회원가입</text>
        </button>
      </div>
    </Modal>
  );
}

LogInModal.defaultProps = {
  open: false,
};
