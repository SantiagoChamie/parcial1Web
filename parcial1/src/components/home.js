import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [posts, setPosts] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch(`https://my.api.mockaroo.com/parcial1.json?key=140b83e0`)
            .then(response => {
                if (!response.ok) {
                    console.log('a');
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsername(data[0].username);
                setFullname(data[0].fullname);
                setDescription(data[0].description);
                setUrl(data[0].url);
                setPosts(data[0].posts);
                setFollowers(data[0].followers);
                setFollowing(data[0].following);
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []); 

    const goOther = () => {
        window.location.href = '/profile';
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Container>
                <Row>   
                    <Col>
                    <Image onClick={goOther} src="https://picsum.photos/350" roundedCircle />
                    </Col>
                    <Col>
                        <Row>
                            <h1>{username}</h1>
                        </Row>
                        <Row>
                            <h3>{fullname} {description} {url}</h3>
                        </Row>
                        <Row>
                            <h3><b>{posts}</b> <FormattedMessage id='posts'/>    <b>{followers}</b> <FormattedMessage id='followers'/>     <b>{following}</b> <FormattedMessage id='following'/> </h3>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                    </Col>
                    <Col>
                    <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                    </Col>
                    <Col>
                    <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow} src="https://picsum.photos/350" rounded />
                        <Image onClick={handleShow}src="https://picsum.photos/350" rounded />
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body><Image src="https://picsum.photos/350" rounded /></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                <FormattedMessage id='close'/> 
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default Home;