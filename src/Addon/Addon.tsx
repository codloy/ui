import { useTheme } from 'theme';
import { classes } from 'utils';
import { AddonProps } from './types';
import { base, positions, statuses } from './styles';

export default function Addon(props: AddonProps) {
  const theme = useTheme();

  const {
    error,
    success,
    loading,
    position = 'start',
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Addon?.props,
    ...props,
  };

  let STATUS = statuses.normal;
  if (success) STATUS = statuses.success;
  else if (error) STATUS = statuses.error;
  else if (loading) STATUS = statuses.loading;

  return (
    <span
      className={classes(base, STATUS, positions[position], className)}
      {...rest}
    >
      {children}
    </span>
  );
}
