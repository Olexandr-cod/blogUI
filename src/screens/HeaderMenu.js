import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const App = () => {
  return (
            <View style={styles.container}>
              <Text style={styles.text}>HeaderMenu</Text>

            </View>
            
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
}) 

export default App;