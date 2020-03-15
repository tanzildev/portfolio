import React from "react"
import { Link } from "gatsby"
import {Container,Col,Row} from 'react-bootstrap'

// import styled, { keyframes } from 'styled-components';
// import Section  from '../styles/Section';

// const StyledContainer = styled(Section)`
//   position: relative;
// `;

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const SecondPage = () => (
    <Container>
    <Row>
    <Col md={12}>
<div className="resume">

<h3>Please contact me for the latest version of my resume!</h3>
      <Link to="/" className="mail-contact" style={{marginRight:15}}> Homepage</Link>
      <a className="mail-contact" href="mailto:tanzildev@gmail.com">Send Email</a>
</div>
      </Col>

    </Row>

    </Container>
)

export default SecondPage


