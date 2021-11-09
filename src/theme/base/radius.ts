const radii = {
  'none': 0,
  'xs': 4,
  'sm': 6,
  'md': 8,
  'lg': 10,
  'xl': 14,
  '2xl': 18,
  '3xl': 26,
  'full': 9999,
};

export type IRadii = keyof typeof radii;

export default radii;
