import { FC, ReactNode } from "react";
import "./Link.scss";
import cn from "classnames";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link: FC<Props> = ({ href, children, className }) => {
  return (
    <a href={href} className={cn("link", className)}>
      {children}
    </a>
  );
};

export default Link;
