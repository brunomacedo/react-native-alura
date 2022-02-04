import {StyleSheet} from 'react-native';
import styles, {colors} from '../../theme/styles';

const CardStyles = StyleSheet.create({
  cardContent: {
    borderTopColor: colors['gray-100'],
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    paddingVertical: 32,
    minHeight: 210,
  },
  cardContentDescription: {
    fontSize: 22,
    color: styles.primary.color,
  },
  cardContentTitle: {
    fontSize: 16,
    marginTop: 6,
    color: colors['gray-300'],
  },
});

export default CardStyles;
