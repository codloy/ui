import { classes } from 'utils';
import { useTheme } from 'theme';
import { ButtonProps } from './types';
import { LoadingIcon, InputIcon } from '..';
import {
  base,
  borders,
  sizes,
  types,
  icon as _icon,
  endIcon as _endIcon,
  full as _full,
  loading as _loading,
  disableds,
} from './styles';

export default function Button(props: ButtonProps) {
  const theme = useTheme();

  const {
    size = 'md',
    border = 'rounded',
    submit,
    reset,
    full,
    type = 'fill',
    color = 'normal',
    icon,
    endIcon,
    loading,
    disabled,
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Button?.props,
    ...props,
  };

  return (
    <button
      className={classes(
        base,
        sizes[size],
        borders[border],
        types[type][color],
        icon && _icon,
        endIcon && _endIcon,
        full && _full,
        loading && _loading,
        disabled && disableds[type],
        className
      )}
      disabled={loading || disabled}
      type={submit ? 'submit' : reset ? 'reset' : 'button'}
      {...rest}
    >
      {icon && <InputIcon>{icon}</InputIcon>}
      {loading && <LoadingIcon />}
      {children}
      {endIcon && <InputIcon position='end'>{endIcon}</InputIcon>}
    </button>
  );
}
