
import {useEffect, type PropsWithChildren} from 'react';
import * as React from 'react';
// import { Button } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Appearance,
} from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => Appearance.setColorScheme('light'), []);
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={backgroundStyle}>
          <Text>Hello</Text>
          <View style={{ flex: 1,alignSelf:'center',justifyContent:'center'}}>
          <Button style={{width:'50%',alignSelf:'center',justifyContent:'center'}} mode="contained" onPress={() => console.log('Pressed')}>
            Register
          </Button>
          <Button style={{width:'50%',alignSelf:'center',justifyContent:'center',margin:50}} mode="contained" onPress={() => console.log('Pressed')}>
            Make Payment
          </Button>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
    //  <AccountListScreen/>
    // <MyComponent/>
  );
}

export default App;
