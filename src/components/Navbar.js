import React from "react";
import styled from "styled-components";

const Header = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lime;
  }

  .navLogo {
    background-color: pink;

    &:hover {
      background-color: red;
    }
  }

  ul {
    li {
      float: left;
      list-style-type: none;
      padding: 0 1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <Header>
        <div className="navbar">
          <div className="navLogo">Logo</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div>login</div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
