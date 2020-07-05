export const getColor = (index, colors, offset) => {
  let colorPick;
  const length = colors.length;
  if (index > 4 && offset) {
    colorPick = (index - length / 2) % length;
  } else {
    colorPick = index % length;
  }
  return colors[colorPick];
};
