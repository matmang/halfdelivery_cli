import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';
import {authService, firebaseInstance} from '../../firebase';
import {isEmail} from '../../utils';
import {GoogleSignin} from '@react-native-community/google-signin';
import {KakaoPress, LoginNaver} from '../../components/Auth/KakaoNaver';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 30px;
`;

export default () => {
  useEffect(() => {
    const socialGoogleConfigure = async () => {
      await GoogleSignin.configure({
        webClientId:
          '271269689660-ql3c8s34ihsf3vvj4fdqec89uikupvge.apps.googleusercontent.com',
      });
    };
    socialGoogleConfigure();
  }, []);
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
  const GooglePress = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential =
      firebaseInstance.auth.GoogleAuthProvider.credential(idToken);
    return authService.signInWithCredential(googleCredential);
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
        <ButtonContainer>
          <Btn text={'Sign Up'} accent onPress={handleSubmit} />
          <Btn
            text={'Sign with google'}
            name="google"
            accent
            onPress={GooglePress}
          />
          <Btn
            text={'Sign with Kakao'}
            name="kakao"
            accent
            onPress={KakaoPress}
          />
          <Btn
            text={'Sign with Naver'}
            name="naver"
            accent
            onPress={LoginNaver}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
