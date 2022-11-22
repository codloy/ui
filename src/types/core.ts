import {
  DetailedHTMLProps as Props,
  HTMLAttributes as HTMLAtt,
  SVGProps,
  ButtonHTMLAttributes as ButtonAtt,
  InputHTMLAttributes as InputAtt,
  LabelHTMLAttributes as LabelAtt,
  FormHTMLAttributes as FormAtt,
  AnchorHTMLAttributes as AnchorAtt,
  ImgHTMLAttributes as ImgAtt,
} from 'react';

export type Button = HTMLButtonElement;
export type Span = HTMLSpanElement;
export type Div = HTMLDivElement;
export type Heading = HTMLHeadingElement;
export type Paragraph = HTMLParagraphElement;
export type Input = HTMLInputElement;
export type Label = HTMLLabelElement;
export type Element = HTMLElement;
export type Form = HTMLFormElement;
export type SVG = SVGSVGElement;
export type Anchor = HTMLAnchorElement;
export type Img = HTMLImageElement;

export type CoreButton = Props<ButtonAtt<Button>, Button>;
export type CoreSpan = Props<HTMLAtt<Span>, Span>;
export type CoreDiv = Props<HTMLAtt<Div>, Div>;
export type CoreHeading = Props<HTMLAtt<Heading>, Heading>;
export type CoreParagraph = Props<HTMLAtt<Paragraph>, Paragraph>;
export type CoreInput = Props<InputAtt<Input>, Input>;
export type CoreLabel = Props<LabelAtt<Label>, Label>;
export type CoreMain = Props<HTMLAtt<Element>, Element>;
export type CoreForm = Props<FormAtt<Form>, Form>;
export type CoreSVG = SVGProps<SVG>;
export type CoreAnchor = Props<AnchorAtt<Anchor>, Anchor>;
export type CoreImg = Props<ImgAtt<Img>, Img>;
export type CoreNav = Props<HTMLAtt<Element>, Element>;
