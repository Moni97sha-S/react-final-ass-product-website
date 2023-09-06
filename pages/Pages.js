import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Products from "../components/products/Products";
import Account from "../components/account/Account";
import Login from "../components/Login";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

export default Pages;
