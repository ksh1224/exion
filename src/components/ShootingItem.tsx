import { setServers } from 'dns';
import React, { useState, useRef } from 'react';
import styles from 'styles/shooting.module.scss';
import ShootingStatusBar from 'src/components/ShootingStatusBar';
import { Shooting } from 'src/types';

// import { initializeApollo } from '../lib/apolloCient';

export default function ShootingItem({
  shootingInfo, type,
}:{shootingInfo:Shooting, type:string}) {
  const generateDateString = (dateObj) => {
    const year = dateObj.getFullYear().toString();
    const month = dateObj.getMonth() > 9 ? dateObj.getMonth().toString() : `0${dateObj.getMonth().toString()}`;
    const date = dateObj.getDate() > 9 ? dateObj.getDate().toString() : `0${dateObj.getMonth().toString()}`;

    return `${year}-${month}-${date}`;
  };

  return (
    <div className={styles.body}>
      <ShootingStatusBar status="screening" />
    </div>
  );
}
