import React, { Component } from "react"
import Loader from "./Loader"
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Section/Slider";

import About from "../components/Section/About";
import Experienced from "../components/Section/Experienced";
import Contact from "../components/Section/Contact";

import Layout from "../components/layout"


import SEO from "../components/seo"

class IndexPage extends Component {
  state = { loading: true }
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds)
    this.setState({

      loading: false,
    })
  }
  componentDidMount() {
    this.wait(3000)
  }

  render() {
    if (this.state.loading) return <Loader isMounted={this.state.loading}/>

    return (
      <Layout>
        <SEO title="Home" />
        <Navbar isMounted={this.state.loading}/>
        <Slider

          // id="section1"
        />
        <About
          id="section2"
        />
        <Experienced
          id="section3"
        />
        <Contact
       id="section4"
        />
        
      </Layout>
    )
  }
}

export default IndexPage
