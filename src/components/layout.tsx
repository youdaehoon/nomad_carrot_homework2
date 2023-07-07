import { cls } from "@/libs/utils";
import React from "react";

interface LayourProps {
  hasTabar?: boolean;
  children: React.ReactNode;
}
const Layout = ({ children }: LayourProps) => {
  return (
    <div className={cls(" bg-slate-300 w-full h-screen py-8 flex")}>
      {children}
    </div>
  );
};

export default Layout;
