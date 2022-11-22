import { CoreDiv } from 'types';

export type AccordionProps = Omit<CoreDiv, 'title'> & {
  title: string;
  open: boolean;
  hover?: boolean;
};
