import Next, { NextPage } from "next";
import styled from "styled-components";
import Heading from "./Heading";
import LinkButton from "./LinkButton";
import Button from "./Button";

const NavbarStyle = styled.nav`
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  
  .navbar_link_container{
    display: flex;
    align-items: center;
    gap: 6em;
  }
`;


const Navbar: NextPage = () => {
    return (
        <NavbarStyle>
            <div className="navbar_heading_container">
                <Heading
                    HEADING = "Tutor Master"
                    SUBHEADING = "Knowledge Transfer"
                    LINE_HEIGHT = "1em"/>
            </div>
            <div className="navbar_link_container">
                <LinkButton LINK="#"
                    TEXT = "Home"/>
                <LinkButton LINK="#" TEXT = "Trainings"/>
                <LinkButton LINK="#" TEXT = "About"/>
                <Button TEXT = "Login"/>
            </div>
        </NavbarStyle>
    )
}

export default Navbar;