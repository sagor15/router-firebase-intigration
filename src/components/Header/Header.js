import React from "react";
import { Link } from "react-router-dom";
import useRegister from "../../Hooks/useRegister";
import "./Header.css";

const Header = () => {
  const { user, handleSingOut } = useRegister();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        <img src={user?.photoURL && user.photoURL} alt="" />
        {user?.uid ? <button onClick={handleSingOut}>Sign Out</button> : <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

export default Header;
