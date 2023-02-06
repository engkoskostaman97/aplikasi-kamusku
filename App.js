/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StatusBar, Text, TextInput, StyleSheet, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'green'} />
        <View style={{padding: 20, backgroundColor: 'blue'}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            KAMUSKU
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Masukan Kata Kunci"
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    color: 'gray',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
export default App;
