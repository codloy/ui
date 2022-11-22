import { classes } from 'utils';
import { useTheme } from 'theme';
import { AlertProps } from './types';
import { base, colors, icon as _icon } from './styles';

export default function Alert(props: AlertProps) {
  const theme = useTheme();

  const {
    title,
    color = 'normal',
    icon,
    actions,
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Alert?.props,
    ...props,
  };

  return (
    <div
      className={classes(base, colors[color], icon && _icon, className)}
      role='alert'
      {...rest}
    >
      <div className='flex items-center [&>:first-child]:inline [&>:first-child]:w-5 [&>:first-child]:h-5 [&>:first-child]:mr-3'>
        {icon && icon}
        <span className='sr-only'>Alert</span>
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>
      <div className='mt-2 mb-4 text-sm'>{children}</div>
      <div className='flex [&>*]:mr-2'>{actions && actions}</div>
    </div>
  );
}
