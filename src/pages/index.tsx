import React from 'react';
import Head from 'next/head';
import styles from 'styles/Home.scss';
import Layout from 'src/components/Layout';
import Banner from 'src/components/Banner';
import ShootingList, { shootingsFragment } from 'src/components/ShootingList';
import { initializeApollo } from '../lib/apolloCient';

export default function Home() {
  return (
    <Layout home>
      <Banner />
      <ShootingList />
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: shootingsFragment,
    variables: { first: 10 },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
