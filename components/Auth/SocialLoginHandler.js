import {login as loginKakao} from '@react-native-seoul/kakao-login';
import {NaverLogin} from '@react-native-seoul/naver-login';
import {Platform} from 'react-native';
import {firebaseInstance} from '../../firebase';
import {GoogleSignin} from '@react-native-community/google-signin';

const androidkeys = {
  kConsumerKey: 'v_Zwv8BgHTwbQUNQSrEu',
  kConsumerSecret: 'pSUBUMgJXG',
  kServiceAppName: '하프딜리버리',
};

const iosKeys = {
  //제대로 된 값 아님.
  kConsumerKey: 'v_Zwv8BgHTwbQUNQSrEu',
  kConsumerSecret: 'pSUBUMgJXG',
  kServiceAppName: '하프딜리버리',
};

const initials = Platform.OS === 'ios' ? iosKeys : androidkeys;

export const KakaoPress = async () => {
  const {idToken} = await loginKakao();
  console.log(idToken);
};

export const LoginNaver = () => {
  return new Promise((resolve, reject) => {
    NaverLogin.login(initials, (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
      if (err) {
        reject(err);
        return;
      }
      console.log(token);
      resolve(token);
    });
  });
};

export const naverLogout = () => {
  NaverLogin.logout();
};

export const GooglePress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential =
    firebaseInstance.auth.GoogleAuthProvider.credential(idToken);
  return googleCredential;
};
