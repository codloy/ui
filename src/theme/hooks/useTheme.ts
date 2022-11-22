import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { Theme } from '../types';

export function useTheme() {
  return useContext<Theme>(ThemeContext);
}
