import React, { useState } from 'react';
import Head from 'next/head';
import styles from 'styles/signOn.module.scss';
import Layout from 'src/components/Layout';
import Header from 'src/components/Header';
import Input from 'src/components/Input';
// import { initializeApollo } from '../lib/apolloCient';

export default function Search() {
  return (
    <Layout home>
      <div className={styles.container}>
        <div className={styles.signOnWrap}>
          <h1>회원가입</h1>
          <h2>기본정보</h2>
          <div className={styles.profile}>
            <img src="" alt="" />
          </div>
          <Input title="이름" placeholder="이름을 입력해주세요" />
          <Input title="전화번호" placeholder="01012345678" />
          <Input title="비밀번호" type="password" placeholder="영문, 특수문자 포함 8자리 이상 입력" />
          <Input title="생년월일" type="birthday" />
          <Input title="성별" type="selecter" options={[{ value: 'male', text: '남성', imgName: 'male' }, { value: 'female', text: '여성', imgName: 'female' }]} />

          <h2 style={{ marginBottom: 0 }}>세부정보</h2>
          <h3>심사에 필요한 정보임으로 정확하게 입력 해 주시기 바랍니다.</h3>
          <Input title="신장(cm)" placeholder="" />
          <Input title="몸무게(kg)" placeholder="" />
          <Input title="안경" type="selecter" options={[{ value: 'male', text: '안경 안씀', imgName: 'noGlasses' }, { value: 'female', text: '안경 씀', imgName: 'glasses' }]} />
          <Input title="문신" type="selecter" options={[{ value: 'male', text: '문신 없음', imgName: 'noTattoo' }, { value: 'female', text: '문신 있음', imgName: 'tattoo' }]} />
          <Input title="염색" type="selecter" options={[{ value: 'male', text: '염색 안했음', imgName: 'noDyeing' }, { value: 'female', text: '염색 했음', imgName: 'dyeing' }]} />
          <button className={styles.signOnButton} type="button">회원가입</button>
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   // await apolloClient.query({
//   //   query: ALL_POSTS_QUERY,
//   //   variables: allPostsQueryVars,
//   // });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   };
// }
