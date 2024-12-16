import { useMemo, type ReactNode } from "react";
import { lolcatColorize, rgbToCssString } from "./helpers";
import type { LolcatOptions } from "./models";

export const useLolcat = (text: string, config?: LolcatOptions): ReactNode => {
  return useMemo(() => {
    // Memo should make it so we only re-build this when the text actually changes.
    const colorizedText = lolcatColorize(text, config);
    return (
      <>
        {colorizedText.map((row, rowIdx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div key={`row-${rowIdx}`}>
            {row.map((item, itemIdx) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={`char-${itemIdx}`}
                style={{ color: rgbToCssString(item[1]) }}
              >
                {item[0]}
              </span>
            ))}
          </div>
        ))}
      </>
    );
  }, [text, config]);
};
