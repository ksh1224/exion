import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from 'styles/signOn.module.scss';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Input, { SelctType } from 'src/components/Input';
import { User, UserCreateInput, User_Gender } from 'src/types';
import { initializeApollo } from 'src/lib/apolloCient';
import { signUp } from 'src/store/gql/user';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
// import { initializeApollo } from '../lib/apolloCient';

const {
  birthday, password: passwordType, selecter, phoneNumber: phoneNumberType, text,
} = SelctType;

const { Female, Male } = User_Gender;

export default function Search() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState < UserCreateInput >({
    phoneNumber: null,
    password: null,
    isDyeing: false,
    isGlasses: false,
    isTattoo: false,
    gender: Male,
  });
  const [submitSignUp, { error, loading }] = useMutation<User, UserCreateInput>(signUp, {
    variables: {
      ...userInfo,
    },
  });

  function submit() {
    const { password, phoneNumber } = userInfo;
    if (!password && phoneNumber === '' && password.length !== 11) return alert('형식에 맞는 전화번호를 입력해주세요!');
    if (!password && password === '' && password.length < 8) return alert('형식에 맞는 비밀번호를 입력해주세요!');
    submitSignUp();
    alert('가입 완료!');
    router.back();
  }

  return (
    <Layout home>
      <div className={styles.container}>
        <div className={styles.signOnWrap}>
          <h1>회원가입</h1>
          <h2>기본정보</h2>
          <div className={styles.profile}>
            <img src="" alt="" />
          </div>
          <Input title="이름" placeholder="이름을 입력해주세요" onChangeText={(e) => setUserInfo({ ...userInfo, name: e })} />
          <Input title="전화번호" placeholder="01012345678" onChangeText={(e) => setUserInfo({ ...userInfo, phoneNumber: e })} />
          <Input title="비밀번호" type={passwordType} placeholder="영문, 특수문자 포함 8자리 이상 입력" onChangeText={(e) => setUserInfo({ ...userInfo, password: e })} />
          <Input title="생년월일" type={birthday} onChangeDate={(e) => setUserInfo({ ...userInfo, birthday: e })} />
          <Input
            title="성별"
            type={selecter}
            options={[{ value: Male, text: '남성', imgName: 'Male' }, { value: Female, text: '여성', imgName: 'female' }]}
            onChange={(e) => {
              if (e.value === Female || e.value === Male) setUserInfo({ ...userInfo, gender: e.value });
            }}
          />

          <h2 style={{ marginBottom: 0 }}>세부정보</h2>
          <h3>심사에 필요한 정보임으로 정확하게 입력 해 주시기 바랍니다.</h3>
          <Input title="신장(cm)" placeholder="" onChangeText={(e) => setUserInfo({ ...userInfo, height: parseInt(e, 10) })} />
          <Input title="몸무게(kg)" placeholder="" onChangeText={(e) => setUserInfo({ ...userInfo, weight: parseInt(e, 10) })} />
          <Input
            title="안경"
            type={selecter}
            options={[{ value: false, text: '안경 안씀', imgName: 'noGlasses' }, { value: true, text: '안경 씀', imgName: 'glasses' }]}
            onChange={(e) => typeof e.value === 'boolean' && setUserInfo({ ...userInfo, isGlasses: e.value })}
          />
          <Input
            title="문신"
            type={selecter}
            options={[{ value: false, text: '문신 없음', imgName: 'noTattoo' }, { value: true, text: '문신 있음', imgName: 'tattoo' }]}
            onChange={(e) => typeof e.value === 'boolean' && setUserInfo({ ...userInfo, isTattoo: e.value })}
          />
          <Input
            title="염색"
            type={selecter}
            options={[{ value: false, text: '염색 안했음', imgName: 'noDyeing' }, { value: true, text: '염색 했음', imgName: 'dyeing' }]}
            onChange={(e) => typeof e.value === 'boolean' && setUserInfo({ ...userInfo, isDyeing: e.value })}
          />
          <button onClick={() => submit()} className={styles.signOnButton} type="button">회원가입</button>
        </div>
      </div>
    </Layout>
  );
}
