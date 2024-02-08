import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
      Назад
    </Link>
  );
};

export { BackButton };
