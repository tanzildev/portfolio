import React from 'react';
import Helmet from 'react-helmet';
import Typing from 'react-typing-animation';
import {Container,Col,Row} from 'react-bootstrap'




const Loader = ({isMounted}) => {


  return (
    <Container>
      <Helmet bodyAttributes={{ class: `hidden` }} />
<Row>
  <Col md={12}>
  
  <div className="loading" >
    
     <div className="wlc-loading">
     <Typing speed={200} >
      WELCOME
      </Typing>
       
     </div>
      </div>
    
    </Col>
</Row>
    </Container>
  );
};



export default Loader;
