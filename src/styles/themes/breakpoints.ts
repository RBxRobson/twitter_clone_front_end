const breakpoints = {
  xs: '419px',
  sm: '724px',
  md: '1034px',
  lg: '1109x',
  xl: '1294px',
};

const setBreakpoint = (size: string) => `@media (max-width: ${size})`;

export { breakpoints, setBreakpoint };