/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

let database = [
  {indonesia: 'Ayam', english: 'Chicken'},
  {indonesia: 'Anjing', english: 'Dog'},
  {indonesia: 'Kelinci', english: 'Rabbit'},
  {indonesia: 'Kucing', english: 'Cats'},
  {indonesia: 'Tikus', english: 'Mouse'},
  {indonesia: 'Buaya', english: 'Crocodile'},
  {indonesia: 'Naga', english: 'Dragon'},
  {indonesia: 'Hiu', english: 'Sharck'},
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database,
    };
  }
  search = () => {
    let data = database;

    data = data.filter(item =>
      item.indonesia
        .toLocaleLowerCase()
        .includes(this.state.text.toLocaleLowerCase()),
    );
    this.setState({
      data: data,
    });
  };

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
          onKeyPress={() => this.search()}
        />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginHorizontal: 5,
                marginVertical: 15,
                padding: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.indonesia}
              </Text>
              <Text style={{fontSize: 16, marginTop: 5}}>{item.english}</Text>
            </View>
          )}
          keyExtractor={item => item.indonesia}
        />
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
