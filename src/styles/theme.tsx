const color = {
  primary: '#3629B7',
  secondary: '#F2F1F9',
  white: '#FFF',
  neutral: '#343434',
};

const font = {
  poppins: 'Poppins-Regular',
};

type Theme = {
  color: typeof color;
  font: typeof font;
};

const theme: Theme = {
  color,
  font,
};

export default theme;
