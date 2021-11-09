import type { IBoxProps } from 'honey-rn';

export type ISimpleGridProps = IBoxProps<ISimpleGridProps> & {
  space?: number;
  columns?: number;
  minChildWidth?: number;
  spacingX?: number;
  spacingY?: number;
};
