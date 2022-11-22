import { classes } from 'utils';
import { useTheme } from 'theme';
import { CardProps } from './types';
import { base } from './styles';

export default function Card(props: CardProps) {
  const theme = useTheme();

  const { children, className, ...rest } = {
    ...theme.component?.Card?.props,
    ...props,
  };

  return (
    <div className={classes(base, className)} {...rest}>
      {children}
    </div>
  );
}
