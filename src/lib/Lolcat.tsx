import type React from "react";
import { useLolcat } from "./useLolcat";
import type { LolcatOptions } from "./models";

export type LolcatProps = {
  text: string;
  config?: LolcatOptions;
};

export const Lolcat: React.FC<LolcatProps> = ({ text, config }) => {
  const colorized = useLolcat(text, config);
  return colorized;
};
