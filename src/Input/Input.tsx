import { Addon, Helper, InputIcon, Label } from '..';
import { classes } from 'utils';
import { useTheme } from 'theme';
import { InputProps } from './types';
import {
  base,
  statuses,
  icon as _icon,
  endIcon as _endIcon,
  addon as _addon,
  sizes,
} from './styles';

export default function Input(props: InputProps) {
  const theme = useTheme();

  const {
    size = 'md',
    id,
    name,
    label,
    helper,
    icon,
    endIcon,
    addon,
    addonPosition = 'start',
    register,
    error,
    success,
    loading,
    className,
    ...rest
  } = {
    ...theme.component?.Input?.props,
    ...props,
  };

  let STATUS = statuses.normal;
  if (error) STATUS = statuses.error;
  else if (success) STATUS = statuses.success;
  else if (loading) STATUS = statuses.loading;

  return (
    <div className='relative'>
      {label && (
        <Label
          htmlFor={id || name}
          error={error}
          success={success}
          loading={loading}
        >
          {label}
        </Label>
      )}

      <div className={`relative ${addon && 'flex'}`}>
        {addon && (
          <Addon
            error={error}
            success={success}
            loading={loading}
            position={addonPosition}
          >
            {addon}
          </Addon>
        )}

        {icon && <InputIcon>{icon}</InputIcon>}

        <input
          id={id || name}
          className={classes(
            base,
            icon && _icon,
            endIcon && _endIcon,
            addon && _addon,
            sizes[size],
            STATUS,
            className
          )}
          {...rest}
          {...(register && register(id || name))}
        />
        {endIcon && <InputIcon position='end'>{icon}</InputIcon>}
      </div>
      {helper && <Helper>{helper}</Helper>}
      {error && <Helper error={error}>{error}</Helper>}
      {success && <Helper success={success}>{success}</Helper>}
      {loading && <Helper loading={loading}>{loading}</Helper>}
    </div>
  );
}
