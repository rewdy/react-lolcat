export const COMPONENT_EXAMPLE_TEXT = "Hello, world!";
export const COMPONENT_EXAMPLE = `import { Lolcat } from "react-lolcat";

function Example() {
  return (
    {/* Note that you will probably want to wrap the output in a <pre /> tag. */}
    <pre><Lolcat text="${COMPONENT_EXAMPLE_TEXT}" /></pre>
  );
}
`;

export const HOOK_EXAMPLE_TEXT = "Oh... hello. ;)";
export const HOOK_EXAMPLE = `import { useLolcat } from "react-lolcat";

function Example() {
  const colorized = useLolcat("${HOOK_EXAMPLE_TEXT}");
  // Again, note that you'll likely want to render this in a <pre /> tag.
  return <pre>{colorized}</pre>;
}
`;

export const OPTIONS_TYPE = `/**
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
};`;
