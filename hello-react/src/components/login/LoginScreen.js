import React,{useState} from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import {
	Form,
	Button,
	Card,
	Row,
	Col,
	Container
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import SignUpModal from '../signUp/SignUpModal'

const LoginScreen = props => {
	const [emailAddress, setEmailAddress] = useState(
		props.emailAddress
	)
	const [password, setPassword] = useState(
		props.password
	)
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(
		false
	)
	const handleClickLogin = () => {
		console.log(emailAddress);
		console.log(password);
	}


	return (
		<Container>
		<Row>
		<Col/>
		<Col>
		 <Card
			 style={
				 {
					 width: '30rem'
				 }
			 }
			 border={'dark'}
		 >
			 <Card.Header>
			 	Rentea
			 </Card.Header>
			  <Card.Body>
					<Form.Group controlId='formBasicEmail'>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={emailAddress}
							onChange={
								newEmailAddress => {setEmailAddress(newEmailAddress.target.value)}
							}
						/>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
							onChange={
								newPassword => {setPassword(newPassword.target.value)}
							}
						/>
					</Form.Group>
					<Button
						variant='link'
						type='submit'
						onClick={
							() => {setIsSignUpModalOpen(true)}
						}
					>
						sign up
					</Button>
					<Button
						variant='primary'
						type='submit'
						onClick={handleClickLogin}
					>
						Login
					</Button>
				</Card.Body>
			</Card>
			</Col>
		<Col/>
		</Row>
		{isSignUpModalOpen && (
			<SignUpModal
			 setIsSignUpModalOpen={setIsSignUpModalOpen}
			/>
		)}
		</Container>
	)

}

LoginScreen.propTypes = {
	emailAddress: PropTypes.string,
	password: PropTypes.string,
}

LoginScreen.defaultProps = {
	emailAddress: '',
	password: '',
}

export default LoginScreen;
