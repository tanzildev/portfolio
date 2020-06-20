import React from "react";
import { Element } from "react-scroll";
import { Container, Col, Row } from "react-bootstrap";

import { Events, animateScroll as scroll, scroller } from "react-scroll";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Anthem from "../../images/experienced/anthem.png";
import Schneider from "../../images/experienced/schneider.png";
import Homedepot from "../../images/experienced/homedepot.jpg";
import Ant from "../../images/experienced/ant.jpg";

import Uspto from "../../images/experienced/uspto.png";

export default class Experienced extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.state = {
      openNavbar: false,
      count: 1,
    };
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

  setCount = (id) => {
    this.setState({
      count: id,
    });
  };
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
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
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  openNavbar = () => {
    this.setState({
      openNavbar: !this.state.openNavbar,
    });
  };
  render() {
    return (
      <Element name="test2" className="element">
        <Container>
          <Row>
            <Col md={12}>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ color: "#fff" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="June 2018 - Present"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    BI Developer Advisor at Anthem
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Atlanta, GA
                  </h4>
                  <div
                    className="first-icon"
                    style={{
                      position: "relative",
                      top: "-146px",
                      left: "118%",
                      zIndex: "999",
                    }}
                  >
                    {" "}
                    <img src={Anthem} alt="" />
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="June 2016 - June 2018"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Senior Software Engineer at Home Depot
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Atlanta, GA
                  </h4>
                  <div
                    className="second-icon"
                    style={{
                      position: "relative",
                      top: "-135px",
                      left: "-29%",
                      zIndex: "999",
                    }}
                  >
                    {" "}
                    <img src={Ant} alt="" />
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2016"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Sr.Test Automation Framework Lead at AT&T
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Atlanta, GA
                  </h4>
                  <div
                    className="third-icon"
                    style={{
                      position: "relative",
                      top: "-138px",
                      left: "118%",
                      zIndex: "999",
                    }}
                  >
                    {" "}
                    <img src={Homedepot} alt="" />
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2015-2016"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Sr. Test Automation Lead at USPTO{" "}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Alexandria, VA
                  </h4>
                  <div
                    className="fourth-icon"
                    style={{
                      position: "relative",
                      top: "-135px",
                      left: "-110px",
                      zIndex: "999",
                    }}
                  >
                    {" "}
                    <img src={Uspto} alt="" />
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2014-2015"
                  iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    System Engineer at Schneider Electric
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    La Vergne, TN
                  </h4>
                  <div
                    className="five-icon"
                    style={{
                      position: "relative",
                      top: "-125px",
                      left: "119%",
                      zIndex: "999",
                    }}
                  >
                    {" "}
                    <img src={Schneider} alt="" />
                  </div>{" "}
                  */}
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </Element>
    );
  }
}
