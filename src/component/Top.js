import Image from 'next/image';
import React from 'react';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display: 'flex', paddingTop: 20 }}>
        <div style={{ flex: '100px 0 0' }}>
          <Image
            width="100"
            height="100"
            src="/images/logo.png"
            alt="logo"
            style={{ display: 'block' }}
          />
        </div>
        <Header as="h1">FireFox</Header>
      </div>
      <Gnb />
    </div>
  );
}
