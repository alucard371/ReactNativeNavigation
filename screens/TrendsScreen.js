import React from 'react';
import TrendContainer from '../components/TrendContainer';
import { ScrollView, StyleSheet} from 'react-native';

export default class TrendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Trends',
    headerStyle: {
      backgroundColor: '#260D0A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return(
      <ScrollView style={styles.container}>
        <TrendContainer/>
      </ScrollView>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#260D0A',
  },
  
});
