import ThemeContext from '../ThemeContext';
import { ThemeProviderProps } from './types';

export default function ThemeProvider(props: ThemeProviderProps) {
  const { theme, children } = props;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
