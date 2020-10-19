import React, { useEffect, useState } from 'react';
import { User_Gender } from 'src/types';
import styles from 'styles/input.module.scss';

const current = new Date();

export enum SelctType {
  text = 'text',
  selecter = 'selecter',
  birthday = 'birthday',
  phoneNumber = 'phoneNumber',
  password = 'password',
}

const {
  birthday, password, selecter, phoneNumber, text,
} = SelctType;

type InputType = {
  title: string
  placeholder?: string
  type?: SelctType
  options?: {text:string, value: string | boolean | User_Gender, imgName:string }[];
  onChangeText?: (value: string) => void
  onChange?:(event: {value: string | boolean | User_Gender, text: string, imgName: string}) => void
  onChangeDate?:(event: Date) => void
};

export default function Input({
  title, placeholder = '', type, options, onChangeText, onChange, onChangeDate,
}: InputType) {
  const [open, setOpen] = useState(false);
  const [selectOne, setSelectOne] = useState(0);
  const [value, setValue] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    switch (type) {
      case selecter:
        onChange(options[selectOne]);
        break;
      case birthday:
        onChangeDate(date);
        break;
      default:
        onChangeText(value);
        break;
    }
  }, [value, selectOne, date]);

  let typeInput = (
    <div className={styles.inputWrap}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );

  switch (type) {
    case selecter:
      if (options.length < 1) break;
      typeInput = (
        <>
          <button type="button" className={styles.selected} onClick={() => setOpen(!open)}>
            <div className={styles.selectedContents}>
              <img src={`/images/${options[selectOne].imgName}.png`} alt="" />
              {options[selectOne].text}
            </div>
            <img src="/images/down.png" alt="" />
          </button>
          {open && (
          <div className={styles.optionWrap}>
            {options.map((obj, i) => (
              <button type="button" className={styles.option} onClick={() => { setSelectOne(i); setOpen(!open); }}>
                <div className={styles.selectedContents}>
                  <img src={`/images/${obj.imgName}.png`} alt="" />
                  {obj.text}
                </div>
              </button>
            ))}
          </div>
          )}
        </>
      );
      break;
    case birthday:
      typeInput = (
        <div className={styles.birthdayWrap}>
          <select
            className={styles.yearSelect}
            onChange={(e) => setDate(new Date(`${e.target.value}-${date.getMonth() + 1}-${date.getDate()}`))}
          >
            {[...Array(200)].map((v, i) => <option value={`${current.getFullYear() - i}`}>{`${current.getFullYear() - i}년`}</option>)}
          </select>
          <select
            className={styles.monthDaySelect}
            onChange={(e) => setDate(new Date(`${date.getFullYear()}-${e.target.value}-${date.getDate()}`))}
          >
            {[...Array(12)].map((v, i) => <option value={`${i + 1}`}>{`${i + 1}월`}</option>)}
          </select>
          <select
            className={styles.monthDaySelect}
            onChange={(e) => setDate(new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${e.target.value}`))}
          >
            {[...Array(31)].map((v, i) => <option value={`${i + 1}`}>{`${i + 1}일`}</option>)}
          </select>
        </div>
      );
      break;
    case phoneNumber:
      break;
    case password:
      typeInput = (
        <div className={styles.inputWrap}>
          <input
            className={styles.input}
            type="password"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <h4>{title}</h4>
      {typeInput}
    </>
  );
}

Input.defaultProps = {
  placeholder: '',
  type: '',
  options: [],
  onChangeText: () => {},
  onChange: () => {},
  onChangeDate: () => {},
};
