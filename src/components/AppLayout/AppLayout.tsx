import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { AppStyled, MainLogoStyled } from './styled';


export const AppLayout: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): JSX.Element => {
  return (
    <>
      <AppStyled>
        <Link to="/">
          <MainLogoStyled src='https://point.md/static/svg/new-point-logo.svg' alt='Point logo' />
        </Link>
        <Outlet />
        {children}
      </AppStyled>
    </>
  );
};