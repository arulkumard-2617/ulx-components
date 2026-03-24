const EVENT_THEMES = ["red", "orange", "teal", "violet", "green", "blue", "yellow", "brown"];
function generatePseudoNumber(id) {
  if (!id) {
    return 0;
  }
  let hash = 0;
  const idStr = id.toString();
  for (let index = 0; index < idStr.length; index++) {
    const charCode = idStr.charCodeAt(index);
    hash = (hash << 5) - hash + charCode;
  }
  return Math.abs(hash);
}
function getPseudoUniqueColorClass(id, colorsArray = EVENT_THEMES) {
  const hash = generatePseudoNumber(id);
  const totalColors = colorsArray.length;
  const index = hash % totalColors;
  return colorsArray[index];
}
const GeneralUtil = {
  generatePseudoNumber,
  getPseudoUniqueColorClass
};

export { EVENT_THEMES, GeneralUtil as default, generatePseudoNumber, getPseudoUniqueColorClass };
//# sourceMappingURL=general-util.js.map
