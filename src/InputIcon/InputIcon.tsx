import { classes } from 'utils';
import { useTheme } from 'theme';
import { InputIconProps } from './types';
import { base, positions } from './styles';

export default function InputIcon(props: InputIconProps) {
  const theme = useTheme();

  const {
    children,
    position = 'start',
    size,
    className,
    ...rest
  } = {
    ...theme.component?.InputIcon?.props,
    ...props,
  };

  return (
    <div className={classes(base, positions[position], className)} {...rest}>
      {children}
    </div>
  );
}
