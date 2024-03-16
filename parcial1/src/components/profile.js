import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {FormattedMessage} from 'react-intl';

const Profile = () => {
    const goOther = () => {
        window.location.href = '/';
    }

    return (
        <div>
            <Container>
                <Row xs={6} md={4}>   
                    <Image src="https://picsum.photos/350" roundedCircle />
                </Row>
                <Row>   
                    <p><FormattedMessage id='username'/> </p>
                    <input type="text" placeholder='Username'/>
                </Row>
                <Row>
                    <p><FormattedMessage id='fullname'/> </p>
                    <input type="text" placeholder='Nombre completo'/>
                </Row>
                <Row>
                    <p><FormattedMessage id='description'/> </p>
                    <input type="text" placeholder='Decripción del perfil'/>
                </Row>
                <Row>
                    <p><FormattedMessage id='url'/> </p>
                    <input type="text" placeholder='URL página personal'/>
                </Row>
                <Button onClick={goOther} ><FormattedMessage id='save'/> </Button>
                
            </Container>

        </div>
    );
};

export default Profile;