import { classes } from 'utils';
import { useTheme } from 'theme';
import { AnchorProps } from './types';
import { base, full as _full } from './styles';

export default function Anchor(props: AnchorProps) {
  const theme = useTheme();

  const {
    as: As,
    full,
    children,
    className,
    ...rest
  } = {
    ...theme.component?.Anchor?.props,
    ...props,
  };

  if (As) {
    return (
      <As className={classes(base, full && _full, className)} {...rest}>
        {children}
      </As>
    );
  }

  return (
    <a className={classes(base, full && _full, className)} {...rest}>
      {children}
    </a>
  );
}
