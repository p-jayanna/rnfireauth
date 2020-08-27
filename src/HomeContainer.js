import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';

export default class HomeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      route: {params = {}},
    } = this.props;
    console.log(JSON.stringify(params));

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'black',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}> {JSON.stringify(params)}</Text>
      </View>
    );
  }
}
