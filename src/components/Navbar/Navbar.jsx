import React from "react";
import styled from "styled-components";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const NavbarWrapper = styled.div`
  /* Default styles for both desktop and mobile */
  /* Add any common styles here */

  @media (max-width: 769px) {
    /* Media query for mobile view (adjust the width as needed) */
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: block;
    }
  }

  @media (min-width: 769px) {
    /* Media query for desktop view (adjust the width as needed) */
    .desktop-view {
      display: block;
    }
    .mobile-view {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      {/* Desktop view */}
      <div className="desktop-view">
      <Desktop />
      </div>

      {/* Mobile view */}
      <div className="mobile-view">
        <Mobile />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
