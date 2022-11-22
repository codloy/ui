import { classes } from 'utils';
import { useTheme } from 'theme';
import { FlexProps } from './types';
import { base, directions, gaps } from './styles';

export default function Flex(props: FlexProps) {
  const theme = useTheme();

  const {
    direction = 'col',
    gap = 'md',
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Flex?.props,
    ...props,
  };

  return (
    <div
      className={classes(base, directions[direction], gaps[gap], className)}
      {...rest}
    >
      {children}
    </div>
  );
}
