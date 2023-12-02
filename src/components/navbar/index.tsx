import React from "react";
import s from "./navbar.module.css";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <Button variant="filled" onClick={() => navigate("/")}>
        Home
      </Button>
      <div className={s.buttonWrapper} onClick={() => navigate("/create")}>
        <Button variant="filled">+ product</Button>
      </div>
    </div>
  );
};
