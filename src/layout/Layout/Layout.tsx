import { FC } from "react";
import css from "./Layout.module.scss";
import Header from "components/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={css.page}>
      <Header />
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default Layout;
