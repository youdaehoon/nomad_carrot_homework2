import { cls } from "@/libs/utils";
import React from "react";

interface LayourProps {
  title?: string;
  canGoBack?: boolean;
  hasTabar?: boolean;
  children: React.ReactNode;
}
const Layout = ({ children, title, canGoBack, hasTabar }: LayourProps) => {
  return (
    <div>
      <div className=" max-w-lg  bg-white w-full text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex items-center justify-center">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-16", hasTabar ? "pb-16" : "")}>{children}</div>
      {hasTabar ? (
        <nav className="bg-white w-full text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center">
          <div>
            <span>홈</span>
          </div>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
