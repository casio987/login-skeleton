import React, { FunctionComponent } from "react";

type SiteLayoutProps = {
  children: JSX.Element | JSX.Element[];
}

const SiteLayout: FunctionComponent<SiteLayoutProps> = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

export default SiteLayout;