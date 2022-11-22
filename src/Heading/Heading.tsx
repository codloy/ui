import { classes } from 'utils';
import { useTheme } from 'theme';
import { HeadingProps } from './types';
import { alings, base, types } from './styles';

export default function Heading(props: HeadingProps) {
  const theme = useTheme();

  const {
    type = 'h3',
    align = 'left',
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Heading?.props,
    ...props,
  };

  return (
    <h1
      className={classes(base, types[type], alings[align], className)}
      {...rest}
    >
      {children}
    </h1>
  );
}
