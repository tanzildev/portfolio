import React from 'react';

import {Container,Col,Row} from 'react-bootstrap'
import Typist from 'react-typist';
import { motion } from "framer-motion";

// import AnimationImage from '../../images/about-img.gif'
import AnimationImage from '../../images/tanzil.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
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
class Slider extends React.Component{

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
  componentDidUpdate(prevProps,PrevState){
    if(PrevState.count !==this.state.count){
      this.setCount(1)
    }
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


  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   setCount(1);
  // }, [count]);


  return (
   <Container> 
   <Row as="div" bsPrefix="slider">
     
  <Row>
  <Col md={6}>
        <div className="slider-content">
   
        <h2>Hello!</h2>
         <h3>I'm</h3>
          {this.state.count ? (
        <Typist avgTypingDelay={100} onTypingDone={() => this.setCount(0)}>
       Tanzil Chowdhury

 <Typist.Backspace count={20} delay={800} />
</Typist>):""}
        </div>
        <p style={{marginTop:20,textAlign:"left"}}>
       Remove friction from delivering great software! (code = coffee + developer)
     </p> 
          
        </Col>
       
<Col md={6}>
<img className="img-right" src={AnimationImage} alt=""/>
</Col>  
<Col md={12}>       
       <div className="slide-icon">
  

       <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
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

  
);
}
}





export default Slider;
