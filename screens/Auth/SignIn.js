import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => alert(username);
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <InputContainer>
            <Input
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              stateFn={setUsername}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
        </KeyboardAvoidingView>
        <Btn text={'Sign In'} accent onPress={handleSubmit} />
      </Container>
    </DismissKeyboard>
  );
};
