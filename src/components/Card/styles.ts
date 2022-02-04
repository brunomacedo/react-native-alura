import {StyleSheet} from 'react-native';
import styles, {colors} from '../../theme/styles';

const CardStyles = StyleSheet.create({
  cardContent: {
    backgroundColor: styles.primary.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
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
  deleteButton: {
    width: 120,
    backgroundColor: colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardStyles;
