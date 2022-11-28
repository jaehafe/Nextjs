import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from '../src/component/Top';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환시 레이아웃 유지가능
 * 페이지 전환시 상태값 유지
 * componentDidCatch를 이용해서 Custom error handling 가능
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능
 * 글로벌 CSS를 여기서 선언
 */
