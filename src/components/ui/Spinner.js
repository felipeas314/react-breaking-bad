import React from 'react';
import spinner from '../../img/spinner.png';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{width:'200px',margin:'auto',display:'block'}}
    />
  );
}

export default Spinner;