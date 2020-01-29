/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import {
  ApplicationProvider,
  TopNavigation,
  TopNavigationAction,
  Icon,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';
import configureStore from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './screens/main/Main';

// import SearchBar from './components/SearchBar'

const MenuIcon = (props) => (
  <Icon {...props} name="menu" />
);

Sentry.init({
  dsn: 'https://771da545272f4e9dada72a2f69569601@sentry.io/2062143',
  enableInExpoDevelopment: true,
  debug: true
});
Sentry.setRelease(Constants.manifest.revisionId);


const MenuAction = () => <TopNavigationAction icon={MenuIcon} />;
const store = configureStore();
const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <ErrorBoundary>
        <TopNavigation
          style={styles.topNav}
          leftControl={MenuAction()}
        />
        <Layout style={styles.container}>
          <Main />
        </Layout>
      </ErrorBoundary>
    </ApplicationProvider>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  topNav: {
    marginTop: StatusBar.currentHeight
  }
});

export default App;
