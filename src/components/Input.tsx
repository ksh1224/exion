import React, { useEffect, useState } from 'react';
import styles from 'styles/input.scss';

const current = new Date();

type InputType = {
  title: string
  placeholder?: string
  type?: string
  options?: {text:string, value: string, imgName:string }[];
};

export default function Input({
  title, placeholder = '', type, options,
}: InputType) {
  const [open, setOpen] = useState(false);
  const [selectOne, setSelectOne] = useState(0);
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('value', value);
  }, [value]);
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
    case 'selecter':
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
    case 'birthday':
      typeInput = (
        <div className={styles.birthdayWrap}>
          <select className={styles.yearSelect}>
            {[...Array(200)].map((v, i) => <option value={`${current.getFullYear() - i}`}>{`${current.getFullYear() - i}년`}</option>)}
          </select>
          <select className={styles.monthDaySelect}>
            {[...Array(12)].map((v, i) => <option value={`${i + 1}`}>{`${i + 1}월`}</option>)}
          </select>
          <select className={styles.monthDaySelect}>
            {[...Array(31)].map((v, i) => <option value={`${i + 1}`}>{`${i + 1}일`}</option>)}
          </select>
        </div>
      );
      break;
    case 'phoneNumber':
      break;
    case 'password':
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
};
