import { useTheme } from 'theme';
import { classes } from 'utils';
import { AccordionProps } from './types';
import { base, header } from './styles';

export default function Accordion(props: AccordionProps) {
  const theme = useTheme();

  const { id, title, open, hover, children, className, ...rest } = {
    ...theme.component?.Accordion?.props,
    ...props,
  };

  return (
    <div id={id} className={classes(base, hover, className)} {...rest}>
      <h2 id={id + '-heading'}>
        <button
          type='button'
          className={classes(header)}
          data-accordion-target={`#${id}-body`}
          aria-expanded='true'
          aria-controls={id + '-body'}
        >
          <span>{title}</span>
          <svg
            className='w-6 h-6 shrink-0'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id={id + '-body'}
        className={open ? '' : 'hidden'}
        aria-labelledby={id + '-heading'}
      >
        <div className='p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 mb-2'>
          {children}
        </div>
      </div>
    </div>
  );
}
