import React from "react";
import { MovieDetailProps } from "../../interfaces/movieDetail";

const ModalDetail: React.FC<MovieDetailProps> = (props) => {
  return (
    <>
      <div onClick={() => props.setShow(!props.show)} className='modal'></div>
    </>
  );
};

export default ModalDetail;
