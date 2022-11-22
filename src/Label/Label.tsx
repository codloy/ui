import { classes } from 'utils';
import { useTheme } from 'theme';
import { LabelProps } from './types';
import { base, statuses } from './styles';

export default function Label(props: LabelProps) {
  const theme = useTheme();

  const { children, className, error, success, loading, ...rest } = {
    ...theme.component?.Label?.props,
    ...props,
  };

  let STATUS = statuses.normal;
  if (error) STATUS = statuses.error;
  else if (success) STATUS = statuses.success;
  else if (loading) STATUS = statuses.loading;

  return (
    <label className={classes(base, STATUS, className)} {...rest}>
      {children}
    </label>
  );
}
