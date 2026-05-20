import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          First-Class Software Engineering graduate with commercial experience
          building scalable applications and modern web solutions. Skilled in
          React, Node.js, TypeScript, and Angular, with a strong focus on clean
          architecture, problem solving, and continuous improvement.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/haris-rafiq-1ab281195")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
