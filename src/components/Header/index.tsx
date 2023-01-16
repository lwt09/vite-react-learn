import React from 'react';
import './header.scss';

// 引入图片资源
import TestImg from '@assets/test.jpg';

// 引入svg
import { ReactComponent as ReactLogo } from '@assets/React.svg';

// 引入json
import version from '../../../package.json';

export default function App() {
  console.log(version);
  return (
    <>
      <div className='header'>我是header</div>
      <img src={TestImg} alt='' />
      <ReactLogo></ReactLogo>
    </>
  );
}
