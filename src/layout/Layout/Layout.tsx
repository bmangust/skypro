import { FC } from "react";
import "./Layout.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="page">
      <div className="header">Skypro</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
