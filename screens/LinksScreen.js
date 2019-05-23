import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TouitContainer from '../components/TouitContainer';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Touits',
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
