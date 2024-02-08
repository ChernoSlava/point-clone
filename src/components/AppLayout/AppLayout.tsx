import React from "react";
import { Link, Outlet } from "react-router-dom";

import { AppStyled, MainLogoStyled } from "./styled";

const AppLayout: React.FC<{
  children?: React.ReactElement | null;
  logo: string;
}> = ({ children, logo }): React.JSX.Element => {
  return (
    <AppStyled>
      <Link to="/">
        <MainLogoStyled src={logo} alt="Point logo" />
      </Link>
      <Outlet />
      {children}
    </AppStyled>
  );
};

export { AppLayout };
