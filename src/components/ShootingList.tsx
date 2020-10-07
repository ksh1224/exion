import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Query, ShootingConnection } from 'src/types';
import styles from 'styles/shootingList.scss';

export const shootingsFragment = gql`
query Shootings($first: Int!, $after: String, ) {
  shootings(searchShooting: {}, first: $first, after: $after) {
  edges{
    cursor
    node {
      id
      title
      producer
      shootingStartAt
      shootingEndAt
      wage
      meetingPlace
      meetingTime
    }
  }
  pageInfo {
    hasNextPage
    startCursor
  }
}
}
`;

function dateToText(date:string) {
  const [year, month, day] = date.substr(0, 10).split('-');
  return `${year.substr(2)}년 ${month}월 ${day}일`;
}

function timeToText(date:string) {
  const [time, minute] = date.substr(11).split(':');
  return `${time}시 ${minute}분`;
}

export default function ShootingList() {
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery<Query>(
    shootingsFragment,
    {
      variables: { first: 12 },
    },
  );

  // const { shootings } = data;
  return (
    <div className={styles.cardWrap}>
      <div className={styles.tabWrap}>
        <div className={styles.tab}>추천순 | 최신순</div>
      </div>
      <ul className={`${styles.list}`}>
        {loading ? <div /> : data.shootings?.edges.map((edge, index) => {
          const { node: shooting, cursor } = edge;
          return (
            <li id={cursor}>
              <div className={styles.liCard}>
                <img src="/images/star.png" alt="" className={styles.star} />
                <div className={styles.liCardTitle}>
                  <h1>{shooting.title}</h1>
                  <h2>{shooting.producer}</h2>
                </div>
                <div className={styles.liDetail}>
                  <span>촬영날짜</span>
                  <div />
                  <text>{`${dateToText(shooting.shootingStartAt)} - ${dateToText(shooting.shootingEndAt)}`}</text>
                </div>
                <div className={styles.liDetail}>
                  <span>촬영비</span>
                  <div />
                  <text>{`기본급 ${shooting.wage}원`}</text>
                </div>
                <div className={styles.liDetail}>
                  <span>집합지</span>
                  <div />
                  <text>{shooting.meetingPlace}</text>
                </div>
                <div className={styles.liDetail}>
                  <span>집합시간</span>
                  <div />
                  <text>{timeToText(shooting.meetingTime)}</text>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
