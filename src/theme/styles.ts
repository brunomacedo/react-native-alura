import {Appearance, StyleSheet} from 'react-native';

const colorScheme = Appearance.getColorScheme();

const isDarkMode = colorScheme === 'dark';

type TColorsList =
  | 'black'
  | 'bleu'
  | 'brand'
  | 'bright-yellow'
  | 'dark-blue'
  | 'ghost-white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-25'
  | 'gray-300'
  | 'green'
  | 'jeans'
  | 'philippine'
  | 'white'
  | 'yankees';

type TColors = {
  [key in TColorsList]?: string;
};

export const colors: TColors = {
  black: '#333333',
  bleu: '#3584E0',
  brand: '#FF0136',
  'bright-yellow': '#FF9F26',
  'dark-blue': '#666A8F',
  'ghost-white': '#FAFBFC',
  green: '#00D27C',
  'gray-100': '#C6C9D8',
  'gray-200': '#A2A6BD',
  'gray-25': '#EBEDF1',
  'gray-300': '#8084A2',
  jeans: '#56B0F3',
  philippine: '#01834E',
  white: '#FFFFFF',
  yankees: '#2B2845',
};

export const light = colors['ghost-white'];

export const dark = colors.black;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: isDarkMode ? dark : light,
    color: !isDarkMode ? dark : light,
  },
  safearea: {
    flex: 1,
    backgroundColor: isDarkMode ? dark : light,
  },
  container: {
    backgroundColor: isDarkMode ? dark : light,
  },
  tinyLogo: {
    width: 120,
    height: 45,
    tintColor: !isDarkMode ? colors.brand : colors.white,
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors['gray-100'],
  },
});

export default styles;
