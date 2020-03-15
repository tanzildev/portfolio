import React, { Component } from "react";
import {Link as RouteLink} from 'gatsby'

import {
  Link,
 
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

import {Container,Col,Row,Navbar,Nav} from 'react-bootstrap'

 


export default class Navbars extends Component {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
 this.state={
  openNavbar:false
 }
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
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
  render() {
    return (

      <Container fluid={true}>

          <Row>
            <Col>
            <Navbar expand="lg">

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="mr-auto">

     <div className="nav-menu">
   <ul>
     <li>
     <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
     </li>
     <li>
     <Link
                                    activeClass="active"
                                    className="test2"
                                    to="test2"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                  >
                                    Experience
                                  </Link>
     </li>
     <li>
     <Link
                                    activeClass="active"
                                    className="test2"
                                    to="test3"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                  >
                                    Contact
                                  </Link>
     </li>
     <li className="resume">

     <RouteLink to="/resume">
                                    Resume
                                  </RouteLink>
                                  
     </li>
   </ul>
   </div>




    </Nav>


  </Navbar.Collapse>
</Navbar></Col>
          </Row>
</Container>
         


  
    );
  }
}



