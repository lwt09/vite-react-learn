import React, { useEffect } from 'react';
import './header.scss';

// 引入图片资源
import TestImg from '@assets/test.jpg';

// 引入svg
import { ReactComponent as ReactLogo } from '@assets/React.svg';

// 引入json
import version from '../../../package.json';

export default function Header() {
  useEffect(() => {
    console.log(version);
    // browser 打印环境变量
    console.log('import', import.meta.env.VITE_BASE_URL);
  }, []);

  return (
    <>
      <div className='header'>我是header</div>
      <img src={TestImg} />
      <ReactLogo></ReactLogo>
    </>
  );
}
