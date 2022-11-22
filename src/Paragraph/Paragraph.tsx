import { classes } from 'utils';
import { useTheme } from 'theme';
import { ParagraphProps } from './types';
import { base, leading as _leading } from './styles';

export default function Paragraph(props: ParagraphProps) {
  const theme = useTheme();

  const { children, leading, className } = {
    ...theme.component?.Paragraph?.props,
    ...props,
  };

  return (
    <p className={classes(base, leading && _leading, className)}>{children}</p>
  );
}
