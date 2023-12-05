import React, { useState } from 'react';
import classes from './ExpandableContainer.module.scss';

const ExpandableContainer = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={ isExpanded ? classes.container : classes.containerClosed}>
      <div className={classes.title} onClick={toggleExpansion}>
        <p>{title}</p>
        <span className={`${classes.arrow} ${isExpanded ? classes.rotate : ''}`}>&#9660;</span>
      </div>
      <div className={classes.content}>
        {isExpanded && children}
      </div>
      {/* {isExpanded && <div className={classes.content}>{children}</div>} */}
    </div>
  );
};

export default ExpandableContainer;
