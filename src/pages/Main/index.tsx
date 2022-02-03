import React from 'react';
import {Animated, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';

import styles from '../../theme/styles';
import MainStyles from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
              praesentium exercitationem vel?
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit quis vero amet dignissimos numquam vel autem ullam
              sequi optio. Numquam, ab in odit et illo quis reiciendis excepturi
              dignissimos culpa.
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet aut facere quisquam, consequatur fuga
              magni neque, autem nostrum exercitationem laudantium. Veritatis
              ratione suscipit rem eum eaque eius alias porro.
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit amet tenetur iste eligendi alias mollitia
              veritatis in, soluta reprehenderit eius est cupiditate sunt
              obcaecati voluptatibus voluptates placeat! Assumenda delectus
              repudiandae odit animi.
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur
            </Text>
          </View>
        </Animated.View>

        <Animated.View>
          <View style={MainStyles.cardContent}>
            <Text numberOfLines={2} style={MainStyles.cardContentTitle}>
              Lorem
            </Text>
            <Text numberOfLines={4} style={MainStyles.cardContentDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              quibusdam minima. Suscipit, natus molestias facere placeat laborum
              doloribus hic. Autem, commodi. Repudiandae reiciendis in, officia
              saepe consectetur ab id error?
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </>
  );
};

export default Main;
