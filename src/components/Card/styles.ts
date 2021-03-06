import {StyleSheet} from 'react-native';
import styles, {colors} from '../../theme/styles';

const fixPaddingRadius = 12;

const CardStyles = StyleSheet.create({
  cardContent: {
    backgroundColor: styles.primary.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 16 + fixPaddingRadius,
    minHeight: 210,
    borderRadius: fixPaddingRadius,
    marginRight: -fixPaddingRadius,
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
    paddingLeft: fixPaddingRadius,
    backgroundColor: colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardStyles;
