import React from "react";
import { Header, Footer } from "../components/common";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <div className="mt-4">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
