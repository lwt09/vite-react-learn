import React from 'react';
import './header.scss';

// 引入图片资源
import TestImg from '@assets/test.jpg';

// 引入svg
import { ReactComponent as ReactLogo } from '@assets/React.svg';

export default function App() {
  console.log('test5');
  return (
    <>
      <div className='header'>我是header</div>
      <img src={TestImg} alt='' />
      <ReactLogo></ReactLogo>
    </>
  );
}
