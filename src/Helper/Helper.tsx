import { classes } from 'utils';
import { useTheme } from 'theme';
import { HelperProps } from './types';
import { base, statuses } from './styles';

export default function Helper(props: HelperProps) {
  const theme = useTheme();

  const { error, success, loading, children, className, ...rest } = {
    ...theme.component?.Helper?.props,
    ...props,
  };

  let STATUS = statuses.normal;
  if (error) STATUS = statuses.error;
  else if (success) STATUS = statuses.success;
  else if (loading) STATUS = statuses.loading;

  return (
    <p className={classes(base, STATUS, className)} {...rest}>
      {children}
    </p>
  );
}
