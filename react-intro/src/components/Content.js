import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="container">
      <div className="jumbotron">
          <h1>Learn to Create Websites</h1>
          <p>In today's world internet is the most popular way of connecting with the people. At <a href="" target="_blank">tutorialrepublic.com</a> you will learn the essential of web development technologies along with real life practice example, so that you can create your own website to connect with the people around the world.</p>
          <p><a href="" target="_blank" className="btn btn-success btn-lg">Get started today</a></p>
      </div>
      <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>HTML</h2>
              <p>HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages or website.</p>
              <p><a href="/html-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>CSS</h2>
              <p>CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.</p>
              <p><a href="/css-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
          <div className="clearfix visible-sm-block"></div>
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>Bootstrap</h2>
              <p>Bootstrap is a powerful front-end framework for faster and easier web development. The Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can create web your own website with much less efforts.</p>
              <p><a href="/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
          <div className="clearfix visible-md-block"></div>
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>References</h2>
              <p>The references section outlines all the standard HTML tags and CSS properties along with other useful references such as color names and values, symbols and character entities, web safe fonts, language codes, HTTP messages and much more.</p>
              <p><a href="/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
          <div className="clearfix visible-sm-block"></div>
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>Examples</h2>
              <p>The examples section encloses an extensive collection of examples on various topic that you can try and test yourself using online HTML editor.</p>
              <p><a href="/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2">
              <h2>FAQ</h2>
              <p>The collection of Frequently Asked Questions (FAQ) provides brief answers to many common questions related to web design and development.</p>
              <p><a href="/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
          </div>
            <hr/>
      </div>
</div>
    );
  }
}

export default Content;
