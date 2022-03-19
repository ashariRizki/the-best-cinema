import React from "react";

const Loading: React.FC = () => {
  return (
    <div className='fetch-loading'>
      <div className='fetch-loading-animation'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
