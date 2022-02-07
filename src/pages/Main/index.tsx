import React, {useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../../components/Card';
import Header from '../../components/Header';
import {MenuItems} from '../../services/menu.services';
import styles from '../../theme/styles';

const Main: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setdata] = useState(MenuItems());

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setdata(item => [...MenuItems(), ...item]);
      setRefreshing(false);
    }, 1000);
  };

  return (
    <FlatList
      data={data}
      renderItem={Card}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Header}
      style={styles.primary}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default Main;
