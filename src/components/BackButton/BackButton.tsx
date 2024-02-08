import React from "react";
import { Link } from "react-router-dom";

const BackButton: React.FC<{ to?: string }> = ({ to }) => {
  return (
    <Link to={to || "/"} style={{ textDecoration: "none", color: "blue" }}>
      Назад
    </Link>
  );
};

export { BackButton };
