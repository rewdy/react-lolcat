/**
 * Lolcat Options
 */
export type LolcatOptions = {
  /**
   * Seed of the rainbow; use the same for the same pattern
   */
  seed?: number;
  /**
   * Spread of the rainbow
   */
  spread?: number;
  /**
   * Frequency of the rainbow colors
   */
  frequency?: number;
};

/**
 * RGB color object
 */
export type Color = { red: number; green: number; blue: number };

/**
 * Single character and color
 */
type LolcatChar = [string, Color];

/**
 * Single row of characters and corresponding colors
 */
type LolcatRow = Array<LolcatChar>;

/**
 * Rows of lines of characters with colors
 */
export type LolcatResult = Array<LolcatRow>;
