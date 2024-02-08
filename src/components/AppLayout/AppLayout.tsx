import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { AppStyled, MainLogoStyled } from './styled';
import { LOGO_URL } from '@constants/index';


export const AppLayout: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): JSX.Element => {
  
  const logoLink = process.env.REACT_APP_LOGO_LINK || LOGO_URL;

  return (
    <>
      <AppStyled>
        <Link to="/">
          <MainLogoStyled src={logoLink} alt='Point logo' />
        </Link>
        <Outlet />
        {children}
      </AppStyled>
    </>
  );
};