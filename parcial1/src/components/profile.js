import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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
                    <p>Nombre de usuario</p>
                    <input type="text" placeholder='Username'/>
                </Row>
                <Row>
                    <p>Nombre completo</p>
                    <input type="text" placeholder='Nombre completo'/>
                </Row>
                <Row>
                    <p>Descripción de perfil</p>
                    <input type="text" placeholder='Decripción del perfil'/>
                </Row>
                <Row>
                    <p>URL página principal</p>
                    <input type="text" placeholder='URL página personal'/>
                </Row>
                <Button onClick={goOther} >Guardar</Button>
                
            </Container>

        </div>
    );
};

export default Profile;