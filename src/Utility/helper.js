const LEFT_KEY = 37;
const RIGHT_KEY = 39;

export const navigateSubPages = (subPagesArr, index, history, event) => {
  if (event.keyCode === LEFT_KEY && index > 0) {
    history.push(subPagesArr[index - 1]);
  }
  if (event.keyCode === RIGHT_KEY && index < subPagesArr.length - 1) {
    history.push(subPagesArr[index + 1]);
  }
};

export const getSubpageIndex = (main_page, param) => {
  const destSubPages = ["moon", "mars", "europa", "titan"];
  const crewSubPages = ["commander", "specialist", "pilot", "engr"];
  const techSubPages = ["vehicle", "spaceport", "capsule"];

  switch (main_page) {
    case "destination":
      return destSubPages.indexOf(param);
    case "crew":
      return crewSubPages.indexOf(param);
    case "tech":
      return techSubPages.indexOf(param);
    default:
      return -1;
  }
};
