import { FC } from "react";
import "./Layout.scss";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
