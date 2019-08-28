import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <img src="https://www.packrs.co/images/packrs-logo.png" alt="logo" className="Logo"/>
      <span className="logo-text">PACKRS</span>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo {
    width:70px;
    height:auto;
  }
  .logo-text {
    font-size: 42px;
    font-family: ${p => p.theme.fonts.sansSerif};
    color: ${p => p.theme.colors.primary};
  }
`;
