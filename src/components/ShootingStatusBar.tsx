import { setServers } from 'dns';
import React, { useState, useRef } from 'react';
import styles from 'styles/shootingStatusBar.module.scss';

// import { initializeApollo } from '../lib/apolloCient';

export default function ShootingStatusBar(props:string) {
  const stepList = {
    screening: 'screening',
    toBeShooting: 'toBeShooting',
    inShooting: 'inShooting',
    shootingComplete: 'shootingComplete',
    paymentCompleted: 'paymentCompleted',
  };

  return (
    <div className={styles.body} />
  );
}
