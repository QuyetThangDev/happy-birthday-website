import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
        Chào mừng cậu đến mới Đảo Hy Vọng
        {/* <span className='mx-2 font-semibold text-white'>Adrian</span> */}
        👋
        <br />
        {/* A Software Engineer from Croatia 🇭🇷 */}
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Truyền thuyết kể rằng, những ai nhìn thấy hòn đảo này sẽ luôn gặp may mắn, không bao giờ từ bỏ hy vọng trong tim!
        </p>

        {/* <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link> */}
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Hãy mơ thật lớn, hãy bay thật xa và đừng quên mang theo bên mình hành trang là sự tự tin nhé!
        </p>
        {/* <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link> */}
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Cuối cùng, tuổi mới thật nhiều niềm vui nhé... À, mình chưa bao giờ ngừng quan tâm đến cậu như cậu nghĩ đâu... Thanh Thi của mình ạ!
        </p>
{/* 
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link> */}
      </div>
    );
  }

  return null;
};

export default HomeInfo;
