import { useTheme } from 'theme';
import { classes } from 'utils';
import { AccordionsProps } from './types';
import { base } from './styles';

export default function Accordions(props: AccordionsProps) {
  const theme = useTheme();

  const { children, className, ...rest } = {
    ...theme.component?.Accordions?.props,
    ...props,
  };

  return (
    <div className={classes(base, className)} {...rest}>
      {children}
    </div>
  );
}
