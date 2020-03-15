import React, { Component } from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
 import { motion } from "framer-motion";
 import {Container,Col,Row} from 'react-bootstrap'

 const ScrollTop = styled.div`
 float: right;
 padding: 5px 10px;
 font-size: 14px;

`;


const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8
  }
};
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 10) {
        console.log(window.pageYOffset)
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
        <ScrollTop>
        {is_visible && (
          <div>
            <motion.div
        transition={bounceTransition}
        animate={{
          y: ["10%", "-10%"],
        }}
      >
              <FontAwesomeIcon onClick={() => this.scrollToTop()} icon={faAngleUp} />

        </motion.div>
            
          </div>
        )}
        </ScrollTop>
          </Col>
        </Row>
      </Container>
    );
  }
}
