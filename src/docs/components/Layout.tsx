import type React from "react";
import "./Layout.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <header className="site-header">
        <h1>react-lolcat 🌈</h1>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p className="text-center">
          😂 Made with joy by <a href="https://rewdy.lol">rewdy</a>
        </p>
      </footer>
    </>
  );
};
