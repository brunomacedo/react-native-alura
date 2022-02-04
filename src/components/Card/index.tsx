import React from 'react';
import {View, Text} from 'react-native';

import CardStyles from './styles';

interface IProps {
  id: string;
  icon: JSX.Element;
  text: string;
}

const Card: React.FC<{item: IProps}> = ({item}) => {
  return (
    <View style={CardStyles.cardContent}>
      {item.icon}
      <Text numberOfLines={4} style={CardStyles.cardContentDescription}>
        {item.text}
      </Text>
      <Text numberOfLines={3} style={CardStyles.cardContentTitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero incidunt
        aut inventore, nam praesentium delectus tempore, ex id ipsam est facilis
        repellat ut quos commodi quibusdam
      </Text>
    </View>
  );
};

export default Card;
