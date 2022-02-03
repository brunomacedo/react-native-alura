import {StyleSheet} from 'react-native';
import styles from '../../theme/styles';

const HeaderStyles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: styles.primary.backgroundColor,
  },
  arrow: {
    marginTop: 10,
  },
});

export default HeaderStyles;
