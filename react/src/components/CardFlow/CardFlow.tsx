import React from "react";
import "./CardFlow.scss";

type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  noHeader?: boolean;
};

const CardFlow: React.FC<Props> = ({ title, subtitle, children, noHeader }) => {
  return (
    <div className="CardFlow">
      <div className="container">
        {!noHeader && (
          <div className="header">
            <div>
              <div className="title">{title}</div>
              <div className="subtitle">{subtitle}</div>
            </div>
          </div>
        )}
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

CardFlow.defaultProps = {
  noHeader: false,
};

export default CardFlow;
