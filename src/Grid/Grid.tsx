import { classes } from 'utils';
import { useTheme } from 'theme';
import { GridProps } from './types';
import {
  base,
  container as _container,
  center as _center,
  gaps,
  cols,
} from './styles';

export default function Grid(props: GridProps) {
  const theme = useTheme();

  const { children, container, className, xs, sm, md, lg, xl, gap, center } = {
    ...theme.component?.Grid?.props,
    ...props,
  };

  return (
    <div
      className={classes(
        base,
        container && _container,
        center && _center,
        gap && gaps[gap],
        xs && cols.xs.xs[xs],
        sm && cols.sm.sm[sm],
        md && cols.md.md[md],
        lg && cols.lg.lg[lg],
        xl && cols.xl.xl[xl],
        className
      )}
    >
      {children}
    </div>
  );
}
