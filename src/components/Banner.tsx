import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Query, ShootingConnection } from 'src/types';
import styles from 'styles/banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.bannerWrap}>
      <span />
      <div className={styles.banner}>
        {/* <img src="/images/testBanner.png" alt="" /> */}
        <text>
          영화, 드라마, 광고
          <br />
          보조출연자 이것만 알고가자
        </text>
        <button type="button">더보기</button>
      </div>
    </div>
  );
}
