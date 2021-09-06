import { useEffect, useState } from 'react';
import './Banner.css';

import Timer from './Timer';

const Banner = (props) => {
  const [classList, setClassList] = useState('banner_box');
  useEffect(() => {
    switch (props.options.bg) {
      case 'blue':
        setClassList((c) => c + ' banner_blue_bg');
        break;
      case 'violet':
        setClassList((c) => c + ' banner_violet_bg');
        break;
      case 'green':
        setClassList((c) => c + ' banner_green_bg');
        break;
      case 'dark':
        setClassList((c) => c + ' banner_dark_bg');
        break;
      default:
        setClassList((c) => c);
    }
  }, [props]);
  return (
    <>
      <div className={classList}>
        <div className="banner_text_block">
          <div className="banner_texts">
            <span className="banner_title">{props.title}</span>
            <span className="banner_text">{props.text}</span>
          </div>
          <Timer time={new Date(props.time).getTime()} />
        </div>
      </div>
    </>
  );
};

export default Banner;
