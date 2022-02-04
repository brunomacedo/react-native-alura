import React from 'react';
import {Text, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {colors} from '../../theme/styles';
import CardStyles from './styles';

interface IItem {
  id: string;
  icon: JSX.Element;
  text: string;
}

const Card: React.FC<{item: IItem}> = ({item}) => {
  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          style={CardStyles.deleteButton}
          onPress={() => console.warn(`Delete button pressed ${item.id}`)}>
          <Text style={{color: colors.white}}>Delete</Text>
        </TouchableOpacity>
      )}>
      <Animated.View style={CardStyles.cardContent}>
        {item.icon}
        <Text numberOfLines={4} style={CardStyles.cardContentDescription}>
          {item.text}
        </Text>
        <Text numberOfLines={3} style={CardStyles.cardContentTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          incidunt aut inventore, nam praesentium delectus tempore, ex id ipsam
          est facilis repellat ut quos commodi quibusdam
        </Text>
      </Animated.View>
    </Swipeable>
  );
};

export default Card;
