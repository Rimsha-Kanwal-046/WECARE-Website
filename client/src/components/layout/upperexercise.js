import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import food from '../../img/food3.jpg';
import before from '../../img/PA2.jpg';
import after from '../../img/PA1.jpg';
import ReactPlayer from 'react-player'
import egg from '../../img/slide1egg.jpg';
import apple from '../../img/slide7apple.jpg';
import bread from '../../img/slide2bread.jpg';
import rice from '../../img/slide3rice.jpg';
import burger from '../../img/gym1.jpg';
import lowergym from '../../img/gym2.jpg';
import gym3 from '../../img/gym33.jpg';
import pasta from '../../img/slide6pasta.jpg';
import pizza from '../../img/slide5pizza.jpg';
import coke from '../../img/slide8coke.jpg';
import arms from '../../img/arms.jpg';
import fullbody from '../../img/fullbody.jpg';
import armss from '../../img/armss.jpg';
import gif1 from '../../img/gif1.gif';
import gif2 from '../../img/gif2.gif';
import gif3 from '../../img/gif3.gif';

import gif4 from '../../img/gif4.gif';

import exe1 from '../../img/exe1.JPG';

import exeban1 from '../../img/eban1.jpg';
import exeban2 from '../../img/eban22.jpg';

import { Form, Col, Row, Container, Button, Dropdown, Jumbotron, Card, CardGroup, Badge, Table, Carousel, Spinner } from 'react-bootstrap';
import BeforeAfterSlider from 'react-before-after-slider'


class Upperexercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feet: '',
            inches: '',
            weight: '',
            bmi: '',
            age: '',
            gender: '',
            activity: '',
            goal: '',

            show_button: true,
            mydata: null,
            chart: null,
            recommendation: null
        };
    }

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={exeban1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="exehead"><i class="fas fa-dumbbell"></i> BE STRONGER THEN YOUR EXCUSES <i class="fas fa-dumbbell"></i></h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={exeban2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="exehead" ><i class="fas fa-dumbbell"></i> GET INTO SHAPE <i class="fas fa-dumbbell"></i></h2>

                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <br/>
                <center><h2><i class="fas fa-volleyball-ball"></i> Upper Body Workouts <i class="fas fa-volleyball-ball"></i></h2></center>
                <hr/>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <img src={gif1} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Flat Chest Presses</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Lying flat on bench, hold the dumbbells directly above chest, arms extended.<br />
                                <i class="fas fa-arrow-circle-right"></i> Lower dumbbells to chest in a controlled manner.<br />
                                <i class="fas fa-arrow-circle-right"></i> Press dumbbells back to starting position.<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif2} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Incline Chest Presses</h5></Badge><br />
                                <br />
                                <i class="fas fa-arrow-circle-right"></i> Adjust bench to an incline of 30 to 45 degrees.<br />
                                <i class="fas fa-arrow-circle-right"></i> Repeat as above.<br />

                            
                            </p>

                        </Col>
                        <Col sm={2}>
                            <img src={gif3} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Flat Chest Flies</h5></Badge><br />
                                <i class="fas fa-arrow-circle-right"></i> Lying flat on bench, hold dumbbells directly above chest.<br />
                                <i class="fas fa-arrow-circle-right"></i> Bend elbows slightly and maintain throughout the exercise.<br />
                                <i class="fas fa-arrow-circle-right"></i> Open arms to sides. Elbows should remain ‘locked’ in a slightly flexed position.<br />

                            
                            </p>
                        </Col>
                        <Col sm={2}>
                            <img src={gif4} />
                        </Col>
                        <Col sm={4}>

                            <p className="dietcard">
                                <Badge variant="success"> <h5>Incline Chest Flies</h5></Badge><br />
                                <br/>
                                <i class="fas fa-arrow-circle-right"></i> Adjust bench to an incline of 30 to 45 degrees.<br />
                                <i class="fas fa-arrow-circle-right"></i> Repeat as above.<br />
                               
                            
                            </p>
                        </Col>
                    </Row>
                    <hr/>
                    <br/>
                    <Row>
                        <Col sm={4}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=bU0A-UwHHpU' playing />
                        </Col>
                        <Col sm={8}>cdcdc</Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default Upperexercise;
