import { classes } from 'utils';
import { useTheme } from 'theme';
import { MainProps } from './types';
import { base, widths } from './styles';

export default function Main(props: MainProps) {
  const theme = useTheme();

  const {
    children,
    width = 'xs',
    className,
    ...rest
  } = {
    ...theme.component?.Main?.props,
    ...props,
  };

  return (
    <main className={classes(base, widths[width], className)} {...rest}>
      {children}
    </main>
  );
}
