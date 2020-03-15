import React from 'react';
import { Element } from 'react-scroll'
import { motion } from "framer-motion";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {Container,Col,Row} from 'react-bootstrap'

import { fadeInRight,fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import AboutImage from '../../images/about.jpg'

import {
  Link,
 
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";
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

const leftAnimation = keyframes`${fadeInLeft}`;
const rightAnimation = keyframes`${fadeInRight}`;

const LeftDiv = styled.div`
  animation: 4s ${leftAnimation};
  width:100%
`;
const RightDiv = styled.div`
  animation: 3s ${rightAnimation};
  width:100%
`;

export default class About extends React.Component{

  // setCount=()=>{
  //   this.setState({
  //     count:1
  //   })
  // }

    //   scroll.scrollToTop();
  // };
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
 this.state={
  openNavbar:false,
  count:1,
 }
  }

  componentDidMount() {
    this.setCount(1);
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  
  setCount = (id)=>{
    this.setState({
      count:id
    })
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");

  }
  openNavbar=()=>{
    this.setState({
      openNavbar:!this.state.openNavbar
    })
  }
  render(){
    return(
      <Element name="test1" className="element">
      <Container >
  <Row as="div" bsPrefix="about">
  <Row>
  <Col md={6} sm={12}>
  <LeftDiv>
    <div className="about-image">
        <img src={AboutImage} alt=""/>
      </div>
      </LeftDiv>
    </Col>
    <Col md={6} sm={12}>
    <RightDiv>
    <div className="about-content">
  
    <h4 className="education-text">I graduated from <strong>Georgia Institue of Technology </strong>with an <strong>Electrical</strong> and <strong> Computer Engineering</strong> degree.</h4>
  
        <h4 className="working-text">  I'm a <strong> software engineer, architect, mentor,</strong> and <strong>leader.</strong></h4>
        
        <h4 className="working-text">I love building great teams, asking questions to understand the problem, and solving complicated problems. Currently focusing on building applications that are <strong>secure, fault-tolerant, scalable</strong>, and <strong>configurable</strong>. </h4>
        <h4 className="working-text">I also enjoy developing <strong> automation frameworks </strong>and <strong>integrating</strong> it with <strong>CI/CD pipelines.</strong></h4>
      </div>
      </RightDiv>
  
    </Col>
    <Col md={12}>       
       <div className="slide-icon">
  

       <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
     <motion.div
        transition={bounceTransition}
        animate={{
          y: ["10%", "-10%"],
        }}
      >
                                                      <FontAwesomeIcon icon={faAngleDown} />

        </motion.div>
            
                  </Link>
       </div>
       </Col>
  </Row>
  </Row>
   </Container>
  </Element>
    )
  }
}

