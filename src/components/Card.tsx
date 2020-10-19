import React from 'react';
import styles from 'styles/card.module.scss';

enum CardEnum {
  shooting,
  schedule,
  endSchedule
}

type ListItemType = {
  img: string
  children?: string
};

type CardType = {
  id:number
  type?:CardEnum
  title?:string
  subTitle?:string
  wage?:string
  meetingPlace?:string
  meetingTime?:string
  shootingDate?:string
};

const { shooting, endSchedule } = CardEnum;

function ListItem({ img, children }: ListItemType) {
  return (
    <div className={styles.list}>
      <div className={styles.listIcon}>
        <img src={`images/${img}.png`} alt="" />
      </div>
      <text>{children}</text>
    </div>
  );
}

ListItem.defaultProps = {
  children: '',
};

export default function Card({
  id, type, title, subTitle, wage, meetingPlace, meetingTime, shootingDate,
}: CardType) {
  return (
    <div key={id} className={styles.cardWrap}>
      {type !== shooting && (
      <div className={styles.cardStatusWrap}>
        <div className={styles.cardStatus}>심사중</div>
        <div className={styles.cardStatus}>촬영예정</div>
        <div className={styles.cardStatus}>촬영진행</div>
        <div className={styles.cardStatus}>지급대기</div>
        <div className={styles.cardStatus}>지급완료</div>
      </div>
      )}
      <div className={styles.cardHeader}>
        <div>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <button type="button">
          <svg style={{ fill: '#4b3790' }} xmlns="http://www.w3.org/2000/svg" width="24.985" height="23.923" viewBox="0 0 24.985 23.923">
            <path fill="#e0e1e9" d="M450.569 279.048a1.229 1.229 0 0 0-.99-.844l-7.133-1.078-3.157-6.488a1.233 1.233 0 0 0-1.1-.694h-.007a1.233 1.233 0 0 0-1.1.681l-3.23 6.452-7.145 1a1.232 1.232 0 0 0-.7 2.1l5.137 5.066-1.26 7.1a1.233 1.233 0 0 0 1.782 1.31l6.4-3.321 6.367 3.392a1.232 1.232 0 0 0 1.8-1.289l-1.179-7.117 5.2-5.006a1.234 1.234 0 0 0 .315-1.264z" transform="translate(-425.642 -269.944)" />
          </svg>
        </button>
      </div>
      <div className={styles.cardBody}>
        <ListItem img="calendar">{shootingDate}</ListItem>
        <ListItem img="money">{wage}</ListItem>
        <ListItem img="position">{meetingPlace}</ListItem>
        <ListItem img="clock">{meetingTime}</ListItem>
      </div>
      {type === endSchedule && <button type="button" className={styles.cardBotton}>문의하기</button>}
    </div>
  );
}

Card.defaultProps = {
  title: '',
  type: shooting,
  subTitle: '',
  wage: '',
  meetingPlace: '',
  meetingTime: '',
  shootingDate: '',
};
