export function stringToObject(str) {
  const [key, value] = str.split(" ");
  const booleanValue =
    value === "true" ? true : value === "false" ? false : value;
  return {
    [key]: booleanValue,
  };
}
export function objectToString(obj) {
  const [[key, value]] = Object.entries(obj);
  const valueString =
    typeof value === "boolean" ? (value ? "true" : "false") : value;
  return `${key} ${valueString}`;
}

export const equipmentOptions = [
  { value: "AC true", icon: "icon-ac", label: "AC" },
  {
    value: "transmission automatic",
    icon: "icon-diagram",
    label: "Automatic",
  },
  { value: "kitchen true", icon: "icon-cup", label: "Kitchen" },
  { value: "TV true", icon: "icon-tv", label: "TV" },
  { value: "bathroom true", icon: "icon-drop", label: "Bathroom" },
];

export const vehicleTypeOptions = [
  { value: "form panelTruck", icon: "icon-bi_grid-1x2", label: "Van" },
  {
    value: "form fullyIntegrated",
    icon: "icon-bi_grid",
    label: "Fully Integrated",
  },
  { value: "form alcove", icon: "icon-bi_grid-3x3-gap", label: "Alcove" },
];
