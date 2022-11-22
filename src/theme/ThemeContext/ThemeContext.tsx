import { createContext } from 'react';
import defaultTheme from '../defaultTheme';
import { Theme } from '../types';

const ThemeContext = createContext<Theme>(defaultTheme);

export default ThemeContext;
