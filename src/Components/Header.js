import React, { Component, useState } from "react";
import Slideshow from "./Slideshow";
import defaultSlides from "./Slides";

// import cars from "../../public/images/portfolio/cars.png";

class Header extends React.Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		active: false,
  // 	};
  // 	this.addActiveClass = this.addActiveClass.bind(this);
  // }

  // toggleClass() {
  // 	const currentState = this.state.active;
  // 	this.setState({ active: !currentState });
  // }
  render() {
    if (this.props.data) {
      //   var projectImage = "images/portfolio/" + ;

      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var image1 = <img src={"images/portfolio/cars.png"} />;

      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
						Show navigation
					</a>
					<a className="mobile-btn" href="#home" title="Hide navigation">
						Hide navigation
					</a> */}

          <ul
            id="nav"
            className="nav"
          >
            <li>
              <a
                className="smoothscroll"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                href="#portfolio"
              >
                Projects
              </a>
            </li>
            {/* <li>
							<a className="smoothscroll" href="#testimonials">
								Testimonials
							</a>
						</li> */}
            <li>
              <a
                className="smoothscroll"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              {/* <li className={this.state.active ? "current" : null} onClick={this.toggleClass}> */}
              <a
                className="smoothscroll"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="smoothscroll"
                href="https://drive.google.com/drive/folders/0B0OphUTJf5iYfjc4MWlDaXdTVXlZZThVeC1TSFJoRjUtMzBXY1dHS3B1TmpnUHNtQThoT3c?resourcekey=0-BndXevPWou6HRcLbxEx0gQ&usp=drive_link"
              >
                Aerial Portfolio
              </a>
            </li>
          </ul>

          <ul className="social">{networks}</ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            {/* <img src={"images/portfolio/cars.png"} /> */}
            {/* <Slideshow  slides={[image1, "./images/portfolio/dom2.png"]} /> */}

            <h3>
              <span>{occupation}</span> <i>{description}</i>
            </h3>
            <hr />
            <div style={{ height: 200 }}>
              <Slideshow slides={defaultSlides} />
            </div>
            {/* <img src={"images/portfolio/hack2.jpg"} /> */}
          </div>
        </div>

        {/* <div className="row banner">
				</div> */}

        <div
          style={{
            borderColor: "black",
            height: "20%",
            alignSelf: "center",
          }}
        >
          <img src={"images/portfolio/hack2.jpg"} />

          {/* <Slideshow slides={defaultSlides} /> */}
        </div>
        <p className="scrolldown">
          <a
            className="smoothscroll"
            href="#about"
          >
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
