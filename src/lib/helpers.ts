import type { Color, LolcatOptions, LolcatResult } from "./models";

/**
 * Get color function. Largely copied from lolcat js
 *
 * ref: https://github.com/robertmarsal/lolcatjs/blob/main/index.js#L27
 */
const getColor = (frequency: number, i: number): Color => {
  const red = Math.round(Math.sin(frequency * i + 0) * 127 + 128);
  const green = Math.round(
    Math.sin(frequency * i + (2 * Math.PI) / 3) * 127 + 128
  );
  const blue = Math.round(
    Math.sin(frequency * i + (4 * Math.PI) / 3) * 127 + 128
  );

  return {
    red,
    green,
    blue,
  };
};

/**
 * Function to convert rgb values to a string we can use in CSS
 */
export const rgbToCssString = (rgb: Color): string =>
  `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;

/**
 * Default options
 */
const defaultOptions: Required<LolcatOptions> = {
  seed: 0,
  spread: 8.0,
  frequency: 0.3,
};

/**
 * 🐱 Core lolcat function that returns a list of rows of lines with characters and colors
 *
 * @param text String of text to colorize
 * @param options Options for colorizing the text
 * @returns List of rows of list of characters along with their RGB color value
 */
export const lolcatColorize = (
  text: string,
  options?: LolcatOptions
): LolcatResult => {
  const opt = {
    ...defaultOptions,
    ...options,
  };
  const lines = text.split("\n");
  const result: LolcatResult = [];
  lines.forEach((line, lineIdx) => {
    result.push([]);
    line.split("").forEach((char, charIdx) => {
      const i = opt.seed + charIdx / opt.spread;
      result[lineIdx].push([char, getColor(opt.frequency, i)]);
    });
  });

  return result;
};
