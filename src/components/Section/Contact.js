import React from "react";
import { Element } from "react-scroll";

export default function Contact({ id }) {
  return (
    <Element name="test3" className="element">
      <div className="flex-container-contact">
        <p className="contact-bio">
          Looking to work together or want to grab a cup of coffee? My inbox is
          always open.
        </p>
        <div className="send-mail">
          <a className="mail-contact" href="mailto:tanzildev@gmail.com">
            Send Email
          </a>
        </div>
      </div>
    </Element>
  );
}
