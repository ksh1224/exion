import { useRouter } from 'next/router';
import Link from 'next/link';
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { Button } from '@material-ui/core';
import useWindowSize from 'src/hooks/useWindowSize';
import { VisibleContext } from 'src/hooks/useModalVisibleContext';
import { MAIN, SCHEDULE, MYPAGE } from 'src/constant';
import styles from 'styles/header.module.scss';
import { me } from 'src/store/gql/user';
import { useQuery } from '@apollo/client';
import { Query } from 'src/types';
import Calendar from './Calendar';

export default function Header() {
  const {
    loading, error, data, fetchMore, networkStatus,
  } = useQuery<Query>(me);
  const inputRef = useRef<HTMLInputElement>();
  const { pathname, push } = useRouter();
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const { width } = useWindowSize();
  const [visible, setVisible] = useContext(VisibleContext);
  // console.log('data', data);
  // console.log('localStorage', typeof window !== 'undefined' && window.localStorage.getItem('token'));

  return (
    <div>
      <header>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <text>EXION</text>
          </div>
          <div className={styles.center}>
            <div className={styles.tabs}>
              <button type="button" onClick={() => push(MAIN)}>
                공고
                <div className={pathname === MAIN ? styles.selectPoint : styles.selectPointOff} />
              </button>
              <button type="button" onClick={() => push(SCHEDULE)}>
                스케줄
                <div className={pathname === SCHEDULE ? styles.selectPoint
                  : styles.selectPointOff}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.headerContent}>
          {width > 960
            ? (pathname === MAIN && (
            <div className={styles.searchWrap}>

              <Button
                className={styles.inputWrap}
                style={{
                  borderBottomLeftRadius: 'inherit', borderTopLeftRadius: 'inherit', justifyContent: 'flex-start', paddingLeft: '30px',
                }}
                disableTouchRipple
                disableFocusRipple
                onClick={() => inputRef.current.focus()}
              >
                <input
                  ref={inputRef}
                  className={styles.input}
                  placeholder="영화 제목을 입력해주세요"
                />
              </Button>
              <div className={styles.breakLineWrap}>
                <div className={styles.breakLine} />
              </div>
              <Button
                className={styles.startDate}
                disableTouchRipple
              >
                <Calendar
                  value={startValue}
                  onChange={(value) => setStartValue(value)}
                  placeholder="시작일 선택"
                />
              </Button>
              <div className={styles.breakLineWrap}>
                <div className={styles.breakLine} />
              </div>
              <Button className={styles.endDate} disableTouchRipple>
                <Calendar
                  value={endValue}
                  onChange={(value) => setEndValue(value)}
                  placeholder="마감일 선택"
                />
              </Button>
              <button type="button" className={styles.searchButton}>
                <img src="/images/search.png" alt="" />
              </button>
            </div>
            ))
            : (
              <button type="button" className={styles.searchButton}>
                <img src="/images/search.png" alt="" />
              </button>
            )}

          <button type="button" className={styles.profile} onClick={() => (data?.me ? push(MYPAGE) : setVisible({ logIn: true }))}>
            <img src="/images/login.png" alt="" />
            <text>{data?.me.name || '로그인'}</text>
          </button>
        </div>
      </header>
    </div>
  );
}
