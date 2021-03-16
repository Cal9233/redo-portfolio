import React from 'react';
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Progress = ({ value: {icon, name, level} }) => {
  const bar_width = `${level}%`
  return (
    <div className="bar">
      <div className="bar__wrapper" style={{
        'width' : bar_width
      }}>
        <span className="bar__name">
          <i className={`${icon} bar__icon mr-2` }/>{name}
        </span>
      </div>
    </div>
  )
}

export default Progress
