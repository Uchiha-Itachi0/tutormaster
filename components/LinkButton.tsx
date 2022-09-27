import Next, { NextPage } from "next";
import styled from "styled-components";
import {LinkButtonInterface} from "../utils/Interface";

const LinkButtonStyle = styled.a`
  position: relative;
  display: inline-block;
  padding: .3em 0;
  color: #fff;

  &:hover{
    &::before{
      width: 100%;
    }
  }

    &::before{
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 5%;
    background: #fff;
    transition: width .3s;

    }
`;

const LinkButton: NextPage<LinkButtonInterface> = ({
    LINK,
    TEXT = "Home"
                                                   }) => {
    return (
        <LinkButtonStyle href={LINK}>
            {TEXT}
        </LinkButtonStyle>
    )
};

export default LinkButton;