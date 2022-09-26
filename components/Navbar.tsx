import Next, { NextPage } from "next";
import styled from "styled-components";
import Heading from "./Heading";

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
        </NavbarStyle>
    )
}

export default Navbar;