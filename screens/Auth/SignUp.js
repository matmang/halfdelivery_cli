import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';
import {authService} from '../../firebase';
import {isEmail} from '../../utils';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = () => {
    if (email === '' || password === '') {
      alert('All fields are required.');
      return;
    }
    if (!isEmail(email)) {
      alert('Please add a valid email.');
      return;
    }
  };
  const handleSubmit = async () => {
    validateForm();
    try {
      const data = await authService.createUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView behavior="position">
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
        </KeyboardAvoidingView>
        <Btn text={'Sign Up'} accent onPress={handleSubmit} />
      </Container>
    </DismissKeyboard>
  );
};
