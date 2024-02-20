import React, {Component} from 'react';
import {View} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LoginButton
        onLoginFinished={(error, result) => {
          console.log('RESUKT', result);
          console.log('ERROR', error);
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};
export default App;
