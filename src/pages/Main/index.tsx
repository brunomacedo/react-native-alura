import React from 'react';
import {FlatList} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {MenuItems} from '../../services/menu.services';
import styles from '../../theme/styles';

// import MainStyles from './styles';

const Main: React.FC = () => {
  return (
    <FlatList
      data={MenuItems}
      renderItem={Card}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Header}
      style={styles.primary}
    />
  );
};

export default Main;
