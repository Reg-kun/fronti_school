import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ".Navbar.css";

const Navbar = ({ user }) => {
  const [access, setAccess] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const access = localStorage.getItem("access_token");
    setData(user);
    setAccess(access);
  }, [data]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
    navigate("/login");
  };

  return (
    <header className="navbar">
      <h3>Электронный дневник</h3>
      <button onClick={logout}>Выйти</button>
    </header>
  );
};

export default Navbar;
