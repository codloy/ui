import { classes } from 'utils';
import { useTheme } from 'theme';
import { FormProps } from './types';
import { base } from './styles';

export default function Form(props: FormProps) {
  const theme = useTheme();

  const { children, className, ...rest } = {
    ...theme.component?.Form?.props,
    ...props,
  };

  return (
    <form className={classes(base, className)} {...rest}>
      {children}
    </form>
  );
}
