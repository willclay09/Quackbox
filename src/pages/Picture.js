import React, { useState } from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import "./Picture.css";
import LikedMessages from "../components/likedMessages/LikedMessages";

function Picture(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Picture">
      <Menu isAuthenticated={props.isAuthenticated} />
      <Row>
        <Col>
          <div className="Images">
            <Carousel
              className="Carousel"
              activeIndex={index}
              onSelect={handleSelect}
            >
              <Carousel.Item>
                <img className="Bat" src="images/batman.jpg" alt="Bat Duck" />
                <Carousel.Caption>
                  <h4>Bat Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="snow" src="images/snow.jpg" alt="snow Duck" />

                <Carousel.Caption>
                  <h4>Snow Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="angel"
                  src="images/angel.jpg"
                  alt="angel Duck"
                />
                <Carousel.Caption>
                  <h6>Angel Duck</h6>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="clock"
                  src="images/clock.jpg "
                  alt="Clock Body"
                />

                <Carousel.Caption>
                  <h5>Clock Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="devil"
                  src="images/devil.jpg"
                  alt="devil Duck"
                />

                <Carousel.Caption>
                  <h4>Devil Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="doctor"
                  src="images/doctor.jpg"
                  alt="doctor Duck"
                />
                <Carousel.Caption>
                  <h4>Doctor Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="duck-fest"
                  src="images/duck-fest.jpg"
                  alt="duck-fest Duck"
                />

                <Carousel.Caption>
                  <h5>Duck-fest Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="fireman"
                  src="images/fireman.jpg"
                  alt="fireman Duck"
                />

                <Carousel.Caption>
                  <h4>Fireman Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src="images/finger.jpg" alt="finger Ducks" />
                <Carousel.Caption>
                  <h5>finger Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="harley-quinn"
                  src="images/harley-quinn.jpg"
                  alt="harley Quinn Duck"
                />

                <Carousel.Caption>
                  <h5>harley Quinn Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="Iron Madden"
                  src="images/iron-madden.jpg"
                  alt="Iron Duck"
                />

                <Carousel.Caption>
                  <h5>Iron Madden Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="nun" src="images/nun.jpg" alt="nun Duck" />
                <Carousel.Caption>
                  <h5>Nun Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="pirate"
                  src="images/pirate.jpg"
                  alt="pirate Duck"
                />

                <Carousel.Caption>
                  <h4>Pirate Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="queen"
                  src="images/queen.jpg"
                  alt="queen Duck"
                />

                <Carousel.Caption>
                  <h4>Queen Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="st.patties"
                  src="images/st-patties.jpg"
                  alt="st.patties Duck"
                />
                <Carousel.Caption>
                  <h5>St.Patties Duck</h5>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="surgeon"
                  src="images/surgeon.jpg"
                  alt="surgeon Duck"
                />

                <Carousel.Caption>
                  <h4>Surgeon Duck</h4>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="wedding"
                  src="images/wedding.jpg"
                  alt="wedding Duck"
                />

                <Carousel.Caption>
                  <h3>Wedding Duck</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col>
          <h1>Picture</h1>
          <Figure>
            <FigureImage
              className="Duck"
              alt="171x180"
              src="https://www.smbc-comics.com/comics/1479484954-20161118%20(1).png"
            />
            <FigureCaption className="Rubber">
              <h3>Rubber Ducking</h3>
            </FigureCaption>
          </Figure>
        </Col>
        <Col>
          <LikedMessages />
        </Col>
      </Row>
    </div>
  );
}

export default userIsAuthenticated(Picture);
