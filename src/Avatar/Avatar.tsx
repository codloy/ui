import { classes } from 'utils';
import { useTheme } from 'theme';
import { AvatarProps } from './types';
import { base, children as _children, sizes, types } from './styles';

export default function Avatar(props: AvatarProps) {
  const theme = useTheme();

  const {
    border = 'rounded',
    size = 'md',
    children,
    alt,
    className,
    ...rest
  } = {
    ...theme.component?.Avatar?.props,
    ...props,
  };

  if (children) {
    return (
      <div
        className={classes(
          base,
          _children,
          types[border],
          sizes[size],
          className
        )}
      >
        <span className='font-medium text-gray-600 dark:text-gray-300'>
          {children}
        </span>
      </div>
    );
  }

  return (
    <img
      className={classes(base, types[border], sizes[size], className)}
      alt={alt}
      {...rest}
    />
  );
}
