import React from 'react';
import {Animated, View, Text} from 'react-native';
import Header from '../../components/Header';

import {
  PanGestureHandlerStateChangeEvent,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import styles, {primary} from '../../theme/styles';
import MainStyles from './styles';
import {CurrencyDollar, Eye} from 'phosphor-react-native';

const Main: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={MainStyles.content}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={{
              ...MainStyles.card,
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <View style={MainStyles.cardHeader}>
              <CurrencyDollar size={32} color={primary} />
              <Eye size={32} color={primary} />
            </View>
            <View style={MainStyles.cardContent}>
              <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
              <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
                Lorem ipsum dolor sit, amet consectetur
              </Text>
            </View>
            <View style={MainStyles.cardFooter}>
              <Text numberOfLines={2} style={MainStyles.cardAnnotation}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, totam rem aperiam a saepe odio vel
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default Main;
