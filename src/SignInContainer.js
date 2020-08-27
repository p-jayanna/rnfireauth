import React, {PureComponent} from 'react';
import SignInScreen from './SignInScreen';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '228281987519-g733i9kcl332eiff9plvdesdm2rj87c4.apps.googleusercontent.com',
});
class SignInContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return <SignInScreen navigation={navigation} />;
  }
}

export default SignInContainer;
