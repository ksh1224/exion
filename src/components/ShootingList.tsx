import React from 'react';
import { useQuery } from '@apollo/client';
import { Query, ShootingConnection } from 'src/types';
import styles from 'styles/shootingList.module.scss';
import { queryShootings } from 'src/store/gql';
import Card from './Card';

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
    queryShootings,
    {
      variables: { first: 12 },
    },
  );

  // const { shootings } = data;
  return (
    <div className={styles.container}>
      <div className={styles.tabWrap}>
        <div className={styles.tab}>추천순 | 최신순</div>
      </div>
      <div className={styles.listWrap}>
        {
          loading ? <div /> : data.shootings?.edges.map((edge, index) => {
            const { node: shooting, cursor } = edge;
            return (
              <div className={styles.cardWrap}>
                <Card
                  id={shooting.id}
                  title={shooting.title.length > 21 ? `${shooting.title.substr(0, 18)}...` : shooting.title}
                  subTitle={shooting.producer}
                  wage={`기본급 ${shooting.wage}원`}
                  meetingPlace={shooting.meetingPlace}
                  shootingDate={`${dateToText(shooting.shootingStartAt)} - ${dateToText(shooting.shootingEndAt)}`}
                  meetingTime={timeToText(shooting.meetingTime)}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
