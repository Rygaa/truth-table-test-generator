import React from 'react';
import classes from './Page.module.scss';

const Page = ({ ryTitle, ryAside, ryPrincipal, buttons, ...props }) => {
  return (
    <div
      className={
        ryTitle ? classes['container'] : classes['container-without-title']
      }
    >
      {ryTitle !== '' && <p>{ryTitle}</p>}
      <div className={classes['sidebar']}>{buttons}</div>
      <div className={classes['main-1']}>{props.children}</div>
    </div>
  );
};

export default Page;