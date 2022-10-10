import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There, <br />
        I'm Mark Fernandez
      </SectionTitle>
      <SectionText>
        I am a Technical Artist with a passion for building video games and expanding my skill sets. I am currently working as a senior technical artist in the Bay Area at a startup based in Austin, Texas. I am also a graduate of the Art Institute of California, Silicon Valley with a degree in Game Art & Design.
      </SectionText>
      {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      <Button onClick={() => window.location = 'https://google.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;