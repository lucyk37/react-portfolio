import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image"

import "./Main.css";

const Main = () => {
    return (

        <section id="home">
            <Container className="aboutMe">
                <Row>
                <Col xs={12} md={3}>
                <Image
                    height="250" width="245" src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/359422416_255260027219782_6918764291304025941_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=L0wE6ws8NB4AX9mC0-j&_nc_ht=scontent-atl3-2.xx&oh=00_AfBUDjDGVues3lww35voO5ltp0KlT52VKTMsox0N0l0dDg&oe=64B216D9" roundedCircle
                />

                </Col>
                <Col>
                    <h1>Hi there!</h1>
                    <h6>My name is Lucy Kim. I am 26 years old. After spending five years in the food and customer service industry. I decided to switch career paths and become a Web Developer. I'm currently studying Web Development at Wake Techical Community College. My skillset includes HTML, CSS, Javascript as well as knowledge with the MERN stack. I am also proficient with C# and SQLPlus.
                    </h6>         
                </Col>
                </Row>
            </Container>  
        </section>
    );
};

const Projects = () => {
    return (
        <section id="projects">
            <Container className="myProjects">
                <h1>Recent Projects</h1>
                <Row className="projectRow">
                    <Col>
                        <h3>Pleasure Island</h3>
                        <a href="https://wcet.waketech.edu/lkim2/WEB125/bootstrap/index.html#attractions" target="_blank" rel="noopener noreferrer">
                            <Image height="300" width="500" src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/358426531_255240687221716_6260384853013824394_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=aCjeqAoB5PAAX9H2V6B&_nc_ht=scontent-atl3-2.xx&oh=00_AfA75HEPbxDKRkO7rioa5zlGUc6oh_6TRG6YZ05loqlRtA&oe=64B16A1C" />
                        </a>
                    </Col>
                    <Col>
                        <h3>Sample Portfolio</h3>
                        <a href="https://wcet.waketech.edu/lkim2/WEB210/portfolio/index.html" target="_blank" rel="noopener noreferrer">
                            <Image height="300" width="500" src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/358426364_255240617221723_8805723849969600794_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=a6Z8VcWzDY0AX9TGjwT&_nc_ht=scontent-atl3-1.xx&oh=00_AfBNVNT9uicDjAYdcCpInFjlG9sf7jl6cjgLmuhYKa86Gw&oe=64B23873" />
                        </a>
                    </Col>
                    <Col>
                        <h3>Build Your Resume</h3>
                        <a href="https://wcet.waketech.edu/lkim2/WEB115/javascriptProject/finalProject.html" target="_blank" rel="noopener noreferrer">
                            <Image height="300" width="500" src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/358418989_255240613888390_3802321072244032402_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=nxB9QxK4VpgAX9-Qaej&_nc_ht=scontent-atl3-2.xx&oh=00_AfD0ZA0JO3QXJpnYq-muz3V6nPoWnrkePzSJh6O6nLoOKw&oe=64B1E610" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const Skills = () => {
    return (
        <section id="skills">
            <Container className="mySkills">
                <Row>
                    <Col md={6}>
                        <h1>Skills</h1>
                            <ul>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                                <li>C#</li>
                                <li>SQLPlus</li>
                            </ul>
                    </Col>
                    <Col md={6}>
                        <h1>Experience</h1>
                            <h5>Freelance Web Developer | 2022 - Present</h5>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                    </Col>
                </Row>
            </Container>
        </section>
        
    );
};

export { Skills, Projects };
export default Main;