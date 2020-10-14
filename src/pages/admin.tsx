import { setServers } from 'dns';
import React, { useState, useRef } from 'react';
import styles from 'styles/admin.module.scss';
import ShootingItem from 'src/components/ShootingItem';
import ShootingStatusBar from 'src/components/ShootingStatusBar';
import { Shooting } from 'src/types';

// import { initializeApollo } from '../lib/apolloCient';

export default function Admin() {
  const generateDateString = (dateObj) => {
    const year = dateObj.getFullYear().toString();
    const month = dateObj.getMonth() > 9 ? dateObj.getMonth().toString() : `0${dateObj.getMonth().toString()}`;
    const date = dateObj.getDate() > 9 ? dateObj.getDate().toString() : `0${dateObj.getMonth().toString()}`;

    return `${year}-${month}-${date}`;
  };

  const modalTypeList = {
    create: 'create',
    beforeShoot: 'beforeShoot',
    shooting: 'shooting',
    afterShoot: 'afterShoot',
    done: 'done',
  };

  const [searchText, setSearchText] = useState('');
  const [title, setTitle] = useState('');
  const [production, setProduction] = useState('');
  const [startDate, setStartDate] = useState(generateDateString(new Date()));
  const [endDate, setEndDate] = useState(generateDateString(new Date()));
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [requirements, setRequirements] = useState('');
  const [details, setDetails] = useState('');

  const [modalType, setModalType] = useState('beforeShoot');
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [shootingList, setShootingList] = useState<Shooting[]>(
    [
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
      { id: 1, step: '1' },
    ],
  );

  const divRef = useRef();
  // eslint-disable-next-line global-require
  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

  // useEffect(() => {

  // }, [])
  const clearInput = () => {
  };

  const createNewShoot = () => {

  };

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <p className={styles.logo}>EXION - ADMIN</p>
            <button
              className={styles.newButton}
              type="button"
              onClick={() => {
                clearInput();
                setModalType(modalTypeList.create);
                setEditing(true);
                setShowModal(true);
              }}
            >
              <p className={styles.newButtonPlusIcon}>+</p>
              <p className={styles.newButtonLabel}>새 공고 작성</p>
            </button>
          </div>
          <div className={styles.headerContainer} style={{ alignItems: 'flex-end' }}>
            <div className={styles.searchBar}>
              <input
                className={styles.searchInput}
                placeholder="제목으로 검색하세요"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className={styles.searchButton} type="button">
                <img className={styles.searchIcon} alt="" />
              </button>
            </div>
            <div ref={divRef} className={styles.statusTab}>
              <p className={styles.tab}>전체</p>
              <div className={styles.tabDivider} />
              <p className={styles.tab}>심사중</p>
              <div className={styles.tabDivider} />
              <p className={styles.tab}>촬영진행</p>
              <div className={styles.tabDivider} />
              <p className={styles.tab}>촬영완료</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {shootingList.map((shootingData) => (
            <ShootingItem shootingInfo={shootingData} type="hey" />
          ))}
        </div>
      </div>
      <div className={styles.modal} style={{ display: showModal ? 'flex' : 'none' }}>
        <div className={styles.shootPage}>
          <div className={styles.modalHeader}>
            <button
              className={styles.modalHeaderButton}
              style={{ display: (modalType === modalTypeList.beforeShoot) && !editing ? 'flex' : 'none' }}
              type="button"
              onClick={() => {}}
            >
              <p className={styles.modalHeaderButtonLabel}>공고종료</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: (modalType === modalTypeList.beforeShoot && editing) ? 'flex' : 'none' }}
              type="button"
              onClick={() => {}}
            >
              <p className={styles.modalHeaderButtonLabel}>공고삭제</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: ((modalType === modalTypeList.beforeShoot || modalTypeList.beforeShoot) && !editing) ? 'flex' : 'none', backgroundColor: '#503396' }}
              type="button"
              onClick={() => {}}
            >
              <p className={styles.modalHeaderButtonLabel}>수정</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: ((modalType === modalTypeList.beforeShoot || modalType === modalTypeList.shooting) && editing) ? 'flex' : 'none', backgroundColor: '#503396' }}
              type="button"
              onClick={() => {}}
            >
              <p className={styles.modalHeaderButtonLabel}>수정완료</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: ((modalType === modalTypeList.afterShoot) && editing) ? 'flex' : 'none', backgroundColor: '#503396' }}
              type="button"
              onClick={() => {}}
            >
              <p className={styles.modalHeaderButtonLabel}>지급완료</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: (modalType === modalTypeList.create) ? 'flex' : 'none', backgroundColor: '#503396' }}
              type="button"
              onClick={() => {
                createNewShoot();
                setShowModal(false);
              }}
            >
              <p className={styles.modalHeaderButtonLabel}>공고생성</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: (!(modalType === modalTypeList.create) && !editing) ? 'flex' : 'none', backgroundColor: '#D2D2D2' }}
              type="button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <p className={styles.modalHeaderButtonLabel} style={{ color: '#0E1111' }}>닫기</p>
            </button>
            <button
              className={styles.modalHeaderButton}
              style={{ display: (editing) ? 'flex' : 'none', backgroundColor: '#D2D2D2' }}
              type="button"
              onClick={() => {
                if (modalType === modalTypeList.create) {
                  setShowModal(false);
                } else {
                  setEditing(false);
                }
              }}
            >
              <p className={styles.modalHeaderButtonLabel} style={{ color: '#0E1111' }}>취소</p>
            </button>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.shootContent}>
              <input
                className={styles.shootTitle}
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={!editing}
              />
              <input
                className={styles.shootProduction}
                placeholder="제작사를 입력하세요"
                value={production}
                onChange={(e) => setProduction(e.target.value)}
                disabled={!editing}
              />
              <ShootingStatusBar
                style={{ display: 'none' }}
                status="screening"
              />
              <div className={styles.contentHeader}>
                <p className={styles.contentHeaderLabel}>모집내용</p>
              </div>
              <div className={styles.shootInputContainer}>
                <p className={styles.shootInputLabel}>날짜</p>
                <div className={styles.shootDates}>
                  <input
                    type="date"
                    className={styles.shootDate}
                    style={{ marginRight: '15px' }}
                    value={startDate}
                    min={generateDateString(new Date())}
                    onChange={(e) => setStartDate(e.target.value)}
                    disabled={!editing}
                  />
                  <input
                    type="date"
                    className={styles.shootDate}
                    value={endDate}
                    min={generateDateString(new Date())}
                    onChange={(e) => setEndDate(e.target.value)}
                    disabled={!editing}
                  />
                </div>
              </div>
              <div className={styles.shootInputContainer}>
                <p className={styles.shootInputLabel}>급여</p>
                <input
                  className={styles.shootInput}
                  placeholder="급여를 입력하세요"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  disabled={!editing}
                />
              </div>
              <div className={styles.shootInputContainer}>
                <p className={styles.shootInputLabel}>모집장소</p>
                <input
                  className={styles.shootInput}
                  placeholder="모집장소를 입력하세요"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={!editing}
                />
              </div>
              <div className={styles.shootInputContainer}>
                <p className={styles.shootInputLabel}>모집시간</p>
                <input
                  className={styles.shootInput}
                  placeholder="모집시간을 입력하세요"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  disabled={!editing}
                />
              </div>
              <div className={styles.contentHeader}>
                <p className={styles.contentHeaderLabel}>자격요건</p>
              </div>
              <textarea
                rows={6}
                className={styles.shootRequirements}
                placeholder="간단한 자격 요건을 입력 해 주세요"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                disabled={!editing}
              />
              <div className={styles.contentHeader}>
                <p className={styles.contentHeaderLabel}>상세 모집내용</p>
              </div>
              <ReactQuill
                className={styles.shootDetails}
                value={details}
                onChange={(value) => setDetails(value)}
                readOnly={!editing}
              />
            </div>
            <div className={styles.participationListArea} style={{ display: (modalType === modalTypeList.create) ? 'none' : 'flex', backgroundColor: '#503396' }} />
          </div>
        </div>
      </div>
    </div>

  );
}
