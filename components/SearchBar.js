import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  Input,
  Icon
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default function SearchBar() {
  const [value, setValue] = React.useState('');
  return (
    <Layout style={styles.root}>
      <Layout level="2">
        <Icon name="menu" width={32} height={32} fill="#222B45" />
      </Layout>
      <Layout level="1">
        <Input placeholder="Search for Beach..." value={value} onChangeText={setValue} />
      </Layout>
    </Layout>
  );
}
