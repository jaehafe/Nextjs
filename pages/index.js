import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';

const Index = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  // 처음 한번만 호출
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Cosmetics</title>
        <meta name="description" content="Cosmetics 홈"></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
};

export default Index;
