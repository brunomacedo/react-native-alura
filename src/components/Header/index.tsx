import React from 'react';
import {Image, View} from 'react-native';
import HeaderStyles from './styles';
import styles from '../../theme/styles';
import {CaretDown} from 'phosphor-react-native';

const Header: React.FC = () => {
  return (
    <View style={HeaderStyles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/logo/Chiper.png')}
      />
      <CaretDown
        weight="bold"
        style={HeaderStyles.arrow}
        color={styles.primary.color}
        size={18}
      />
    </View>
  );
};

export default Header;
