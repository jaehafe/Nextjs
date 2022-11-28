import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [item, setItem] = useState({});
  // const router = useRouter();
  // const { id } = router.query;
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  // async function getData() {
  //   const { data } = await axios.get(API_URL);
  //   console.log(data);
  //   setItem(data);
  //   setIsLoading(false);

  // useEffect(() => {
  //   try {
  //     if (id && id > 0) {
  //       getData();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [id]);

  //   return (
  //     <>
  //       {isLoading ? (
  //         <div style={{ padding: '300px 0' }}>
  //           <Loader active inline="centered">
  //             Loading
  //           </Loader>
  //         </div>
  //       ) : (
  //         <Item item={item} />
  //       )}
  //     </>
  //   );
  // };
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// SSR
export async function getServerSideProps(context) {
  const ctx = context;
  console.log('ctx', ctx);
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const { data } = await axios.get(apiUrl);

  return {
    // props: will be passed to the page component as props
    // https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
