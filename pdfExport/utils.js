import "@simonwep/pickr/dist/themes/nano.min.css";
import Pickr from "@simonwep/pickr";

export const createPicker = (el, defaultColor) => {
  const pickr = Pickr.create({
    el,
    theme: "nano",
    swatches: [
      // "#fcfcfc",
      // "#ffffff",
      "rgb(244, 67, 54)",
      "rgb(233, 30, 99)",
      "rgb(156, 39, 176)",
      "rgb(103, 58, 183)",
      "rgb(63, 81, 181)",
      "rgb(33, 150, 243)",
      "rgb(3, 169, 244)",
      "rgb(0, 188, 212)",
      "rgb(0, 150, 136)",
      "rgb(76, 175, 80)",
      "rgb(139, 195, 74)",
      "rgb(205, 220, 57)",
      "rgb(255, 235, 59)",
      "rgb(255, 193, 7)"
    ],
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        input: true,
        save: true
      }
    },
    default: defaultColor
  });

  return pickr;
};
