import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LOGO_URL } from "@constants/index";

import { AppStyled, MainLogoStyled } from "./styled";

const AppLayout: React.FC<{
  children: React.ReactElement | null;
}> = ({ children }): React.JSX.Element => {
  const logoLink = process.env.REACT_APP_LOGO_LINK || LOGO_URL;

  return (
    <AppStyled>
      <Link to="/">
        <MainLogoStyled src={logoLink} alt="Point logo" />
      </Link>
      <Outlet />
      {children}
    </AppStyled>
  );
};

export { AppLayout };
