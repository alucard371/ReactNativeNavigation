import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TouitContainer from '../components/TouitContainer';


export default class TouitsScreen extends React.Component {
  static navigationOptions = {
    title: 'Touits',
    headerStyle: {
      backgroundColor: '#260D0A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouitContainer/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260D0A',
  },
});
