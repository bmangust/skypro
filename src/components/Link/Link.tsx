import { FC, ReactNode } from "react";
import css from "./Link.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const LinkComponent: FC<Props> = ({ href, children, className }) => {
  return (
    <Link to={href} className={cn(css.link, className)}>
      {children}
    </Link>
  );
};

export default LinkComponent;
