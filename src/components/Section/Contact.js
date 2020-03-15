import React from 'react';
import { Element} from 'react-scroll'

import styled from 'styled-components';
import Section  from '../../styles/Section';
const StyledContainer = styled(Section)`
  position: relative;
`;

export default function Contact({  id }) {
  return (
    <Element name="test3" className="element">
      <StyledContainer  id={id}>
     <p className="contact-bio"> Looking to work together or want to grab a cup of coffee?  My inbox is always open.</p>
<a className="mail-contact" href="mailto:tanzildev@gmail.com">Send Email</a>
 </StyledContainer>
 
  </Element>
  );
}
