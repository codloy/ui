import { classes } from 'utils';
import { useTheme } from 'theme';
import { base } from './styles';
import { NavProps } from './types';

export const NAV_CONTAINER_CORE = [
  'flex flex-wrap items-center justify-between mx-auto',
];

export default function Nav(props: NavProps) {
  const theme = useTheme();

  const { children, className } = {
    ...theme.component?.Nav?.props,
    ...props,
  };

  return (
    <nav className={classes(base, className)}>
      <div className={`flex flex-wrap items-center justify-between mx-auto`}>
        {children}
      </div>
    </nav>
  );
}
