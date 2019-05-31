import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import SendMessageForm from '../components/SendMessageForm';
import Title from '../components/Title';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <SendMessageForm/>  
        </ScrollView>
      </View>
    );
  }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260D0A',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
