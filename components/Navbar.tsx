import Next, { NextPage } from "next";
import styled from "styled-components";
import Heading from "./Heading";
import LinkButton from "./LinkButton";

const NavbarStyle = styled.nav``;


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
            </div>
        </NavbarStyle>
    )
}

export default Navbar;