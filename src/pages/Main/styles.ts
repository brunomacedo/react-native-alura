import {StyleSheet} from 'react-native';
import styles, {colors} from '../../theme/styles';

const MainStyles = StyleSheet.create({
  cardContent: {
    borderTopColor: colors['gray-100'],
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    marginHorizontal: 32,
    paddingVertical: 32,
    minHeight: 210,
  },
  cardContentTitle: {
    fontSize: 14,
    color: colors['gray-300'],
  },
  cardContentDescription: {
    fontSize: 22,
    marginTop: 6,
    color: styles.primary.color,
  },
});

export default MainStyles;
