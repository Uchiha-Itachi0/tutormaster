import Next, { NextPage } from "next";
import styled from "styled-components";
import {ButtonInterface} from "../utils/Interface";

const ButtonStyle = styled.button`
  background: #fff;
  padding: 1em 2em;
  color: #006EA9;
  border: none;
  border-radius: 3px;
`;

const Button: NextPage<ButtonInterface> = ({
    TEXT = "Get Started"
                                           }) => {
    return <ButtonStyle>{TEXT}</ButtonStyle>;
};

export default Button;