import { ReactNode } from 'react';
import { Theme } from 'theme';

export interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
}
