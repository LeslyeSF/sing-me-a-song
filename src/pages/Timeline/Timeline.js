/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
import { Outlet } from "react-router-dom";

// eslint-disable-next-line prettier/prettier
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

export default function Timeline() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
}
