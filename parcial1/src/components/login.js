import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [userData, setUserData] = useState(null);
    const [password, setPassword] = useState('Ingresa tu email');
    const [text, setText] = useState('Acceder');
    const [emailP, setEmailP] = useState(null);

    useEffect(() => {
        // Fetch data when component mounts
        fetch(`https://my.api.mockaroo.com/login_(practica).json?key=140b83e0`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserData(data);
                console.log(data)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError('There was a problem with the fetch operation');
            });
    }, []); 

    const handleLogin = () => {
        let userExists = false;
        let pass = null;
        userData.forEach(user => {
            if (user.email === email) {
                userExists = true;
                pass = user.password;
            }
        });
        if(emailP == null){
            if (userExists) {
                console.log('Email exists');
                setText(email);
                setEmail('');
                setPassword('Ingresa tu contraseña');
                setEmailP(pass);
            } else {
                setError('Email does not exist');
            }
        } else {
            if (emailP === email) {
                console.log('Password correct');
                setText('Acceso correcto');
                setEmail('');
                setPassword('Ingresa tu email');
                window.location.href = '/home';

            } else {
                setError('Password incorrect');
            }
        }        
    };

    return (
        <div>
            <h1>{text}</h1>
            <input
                type="text"
                placeholder={password}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p>{error}</p>}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Button variant="primary" onClick={handleLogin}>Login</Button>
            </div>
        </div>
    );
};

export default Login;
