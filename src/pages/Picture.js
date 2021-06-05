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
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="snow" src="images/snow.jpg" alt="snow Duck" />

                <Carousel.Caption>
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
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="" src="images/finger.jpg" alt="finger Ducks" />
                <Carousel.Caption>
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
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="nun" src="images/nun.jpg" alt="nun Duck" />
                <Carousel.Caption>
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
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="cross"
                  src="images/cross.jpg"
                  alt="cross Duck"
                />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="flower"
                  src="images/flower.jpg"
                  alt="flower Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="flying-hat"
                  src="images/flying-hat.jpg"
                  alt="flying-hat Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="graduation"
                  src="images/graduation.jpg"
                  alt="graduation Duck"
                />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="grey" src="images/grey.jpg" alt="grey Duck" />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="king" src="images/king.jpg" alt="king Duck" />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="princess"
                  src="images/princess.jpg"
                  alt="princess Duck"
                />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="punk-band"
                  src="images/punk-band.jpg"
                  alt="punk-band Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="purple-queen"
                  src="images/purple-queen.jpg"
                  alt="purple-queen Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="skate-board"
                  src="images/skate-board.jpg"
                  alt="skate-board Duck"
                />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="scuba"
                  src="images/scuba.jpg"
                  alt="scuba Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="smart"
                  src="images/smart.jpg"
                  alt="smart Duck"
                />

                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="soccer-coach"
                  src="images/soccer-coach.jpg"
                  alt="coach Duck"
                />
                <Carousel.Caption>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="swimming"
                  src="images/swimming.jpg"
                  alt="swimming Duck"
                />

                <Carousel.Caption>
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
