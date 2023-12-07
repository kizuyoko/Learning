import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />

      {/* Placeholder for the content. Inside of children in router */}
      <Outlet />
    </>
  );
}

export default RootLayout;