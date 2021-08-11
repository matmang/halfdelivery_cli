import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TempHome from '../screens/Main/tempHome';
import MakeMatching from '../screens/Main/makeMatching';
import MatchingRequestClient from '../screens/Main/matchingRequestClient';
import MatchingRequestHost from '../screens/Main/matchingRequestHost';
import MatchingSuccess from '../screens/Main/matchingSuccess';
import MatchingFailed from '../screens/Main/matchingFailed';
import InfoBoard from '../screens/Main/infoBoard';
import PoliciesBoard from '../screens/Main/policiesBoard';

const Main = createStackNavigator();

export default () => (
  <Main.Navigator
    initialRouteName="TempHome"
    screenOptions={{

    }}>
    <Main.Screen
      name="TempHome"
      component={TempHome}
      options={{
        title: '(임시) 홈',
      }}
    />
    <Main.Screen
      name="MakeMatching"
      component={MakeMatching}
      options={{
        title: '매칭방 만들기',
      }}
    />
    <Main.Screen
      name="MatchingRequestHost"
      component={MatchingRequestHost}
      options={{
        title: '매칭 요청중 - Host',
      }}
    />
    <Main.Screen
      name="MatchingRequestClient"
      component={MatchingRequestClient}
      options={{
        title: '매칭 요청하기 - Client',
      }}
    />
    <Main.Screen
      name="MatchingSuccess"
      component={MatchingSuccess}
      options={{
        title: '매칭 성공',
      }}
    />
    <Main.Screen
      name="MatchingFailed"
      component={MatchingFailed}
      options={{
        title: '매칭 실패',
      }}
    />
    <Main.Screen
      name="InfoBoard"
      component={InfoBoard}
      options={{
        title: '공지사항',
      }}
    />
    <Main.Screen
      name="PoliciesBoard"
      component={PoliciesBoard}
      options={{
        title: '약관 및 정책',
      }}
    />
  </Main.Navigator>
);
