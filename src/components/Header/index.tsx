import React from 'react';
import './header.scss';

// 引入图片资源
import TestImg from '@assets/test.jpg';

export default function App() {
  console.log('test5');
  return (
    <>
      <div className='header'>我是header</div>
      <img src={TestImg} alt='' />
    </>
  );
}
