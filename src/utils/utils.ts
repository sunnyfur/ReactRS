export const getColor = (rating: number) => {
  const max = 10;

  const fromR = 255;
  const fromG = 0;
  const fromB = 10;

  const toR = 0;
  const toG = 255;
  const toB = 10;

  const deltaR = Math.round((toR - fromR) / max);
  const deltaG = Math.round((toG - fromG) / max);
  const deltaB = Math.round((toB - fromB) / max);

  const R = fromR + rating * deltaR;
  const G = fromG + rating * deltaG;
  const B = fromB + rating * deltaB;

  return `rgb(${R},${G},${B})`;
};
