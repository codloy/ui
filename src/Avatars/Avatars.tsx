import { classes } from 'utils';
import { useTheme } from 'theme';
import { AvatarsProps } from './types';
import { base, gaps } from './styles';

export default function Avatars(props: AvatarsProps) {
  const theme = useTheme();

  const {
    gap = 'md',
    children,
    className,
  } = {
    ...theme.component?.Avatars?.props,
    ...props,
  };

  return <div className={classes(base, gaps[gap], className)}>{children}</div>;
}
