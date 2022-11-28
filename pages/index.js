// meta 태그 정의하는 파일

import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  async function getData() {
    const { data } = await axios.get(API_URL);
    console.log(data);
    setList(data);
    setIsLoading(false);
  }

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Home | NextJS</title>
        <meta name="description" content="홈 입니다."></meta>
      </Head>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader active inline="centered">
            Loading
          </Loader>
        </div>
      ) : (
        <div>
          <Header xas="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList isLoading={isLoading} list={list.slice(9)} />
        </div>
      )}
    </div>
  );
}
