/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import codePush from "react-native-code-push";

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  // mandatoryInstallMode: codePush.InstallMode.IMMEDIATE
};



const App = () => {
  useEffect(() => {
    codePush.getCurrentPackage()
      .then((update) => {
        console.log('update-=-=-', update)
        // If the current app "session" represents the first time
        // this update has run, and it had a description provided
        // with it upon release, let's show it to the end user

      });



  }, [])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: 'green',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <Button
          title='HEY Click Me'
          onPress={() => Alert.alert('', 'Thanks for clicking me ≧◠‿◠≦✌')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default codePush(codePushOptions)(App);
