import React from 'react';
import {ChatText, ShoppingBagOpen, Tag, UserList} from 'phosphor-react-native';
import {IconStore} from '../components/Icons/store';
import styles from '../theme/styles';

export const MenuItems = [
  {
    id: '1',
    icon: <IconStore size={50} color={styles.primary.color} />,
    text: 'Loja',
  },
  {
    id: '2',
    icon: <ShoppingBagOpen size={50} color={styles.primary.color} />,
    text: 'Ofertas',
  },
  {
    id: '3',
    icon: <Tag size={50} color={styles.primary.color} />,
    text: 'Cupons',
  },
  {
    id: '4',
    icon: <ChatText size={50} color={styles.primary.color} />,
    text: 'Ajuda',
  },
  {
    id: '5',
    icon: <UserList size={50} color={styles.primary.color} />,
    text: 'Conta',
  },
];
