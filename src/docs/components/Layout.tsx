import type React from "react";
import "./Layout.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <header className="site-header">
        <nav>
          <ul>
            <li>
              <h1>react-lolcat 🌈</h1>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/rewdy/react-lolcat">GitHub</a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/@rewdy/react-lolcat">
                npm
              </a>
            </li>
          </ul>
        </nav>
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
