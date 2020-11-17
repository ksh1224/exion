import React, { useContext, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  AuthPayload, Mutation, Query, ShootingConnection,
} from 'src/types';
import { Modal } from '@material-ui/core';
import { VisibleContext } from 'src/hooks/useModalVisibleContext';
import { useRouter } from 'next/router';
import { SIGNON, MAIN } from 'src/constant';
import styles from 'styles/logInModal.module.scss';
import { signInPhoneNumber } from 'src/store/gql/user';

type LogInDataType = {
  phoneNumber?: string
  password?: string
};

export default function LogInModal() {
  const [visible, setVisible] = useContext(VisibleContext);
  const [logInData, setLogInData] = useState<LogInDataType>({});
  const { push } = useRouter();

  const [submitSignIn, { data, error, loading }] = useMutation<Mutation>(signInPhoneNumber, {
    variables: {
      ...logInData,
    },
  });

  function submit() {
    setVisible({ logIn: false });
    submitSignIn();
    console.log('datatoken', data);
    if (data && data.signInPhoneNumber && data.signInPhoneNumber.token && typeof window !== 'undefined') {
      window.localStorage.setItem('token', data.signInPhoneNumber.token);
      push(MAIN);
    }
  }
  return (
    <Modal open={visible.logIn} onClose={() => setVisible({ logIn: false })}>
      <div className={styles.modal}>
        <button type="button" onClick={() => setVisible({ logIn: false })}>
          <img className={styles.closeButton} src="/images/x.png" alt="" />
        </button>
        <h1>로그인</h1>
        <div className={styles.inputWrap}>
          <text>아이디 (전화번호)</text>
          <input
            placeholder="아이디를 입력해주세요"
            value={logInData.phoneNumber}
            onChange={(e) => setLogInData({ ...logInData, phoneNumber: e.target.value })}
          />
        </div>
        <div className={styles.inputWrap}>
          <text>비밀번호</text>
          <input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={logInData.password}
            onChange={(e) => setLogInData({ ...logInData, password: e.target.value })}
          />
        </div>
        <button
          className={styles.logInButton}
          type="button"
          onClick={() => submit()}
        >
          <text>로그인</text>
        </button>
        <button
          className={styles.signOnButton}
          type="button"
          onClick={() => push(SIGNON)}
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
