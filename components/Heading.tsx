import Next, { NextPage } from "next";
import styled from "styled-components";
import {HeadingInterface, HeadingStyleInterface} from "../utils/Interface";

const HeadingStyle = styled.div<HeadingStyleInterface>`
  .heading{
    font-size: max(1.5vw, 1em);
  }
  .subheading{
    font-size: max(.8vw, .5em);
    line-height: ${({LINE_HEIGHT}) => LINE_HEIGHT};

  }
`;


const Heading: NextPage<HeadingInterface> = ({
    HEADING = "This is heading",
    SUBHEADING = "This is subheading",
    LINE_HEIGHT = "1em"
                                             }) => {
    return (
        <HeadingStyle LINE_HEIGHT={LINE_HEIGHT}>
            <h1 className="heading">{HEADING}</h1>
            <h2 className="subheading">{SUBHEADING}</h2>
        </HeadingStyle>
    )
}

export default Heading;