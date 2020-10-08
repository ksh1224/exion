import React from 'react';
import Head from 'next/head';

import styles from 'styles/layout.module.scss';
import Header from './Header';

export const siteTitle = 'Exion';

type LayoutType = {
  children: JSX.Element | JSX.Element[];
  home?: boolean;
};

export default function Layout({ children, home }: LayoutType) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        {home && <Header />}
        {children}
      </div>
      <div className={styles.footerWrap}>
        <div>
          <text className={styles.text}>서울 서초구 사임당로 175 갤럭시타워 7층 704호</text>
          <text className={styles.text}>support@unli.co.kr</text>
          <text className={styles.text}>070 7743 0505</text>
        </div>
        <div className={styles.left}>
          <button className={styles.button} type="button">회사소개</button>
          <button className={styles.button} type="button">개인정보 처리 방침</button>
          <button className={styles.button} type="button">이용약관</button>
        </div>
      </div>
    </>
  );
}

Layout.defaultProps = {
  home: false,
};
