import { CodeBlock } from "./docs/components/CodeBlock";
import { Layout } from "./docs/components/Layout";
import {
  COMPONENT_EXAMPLE,
  COMPONENT_EXAMPLE_TEXT,
  HOOK_EXAMPLE,
  HOOK_EXAMPLE_TEXT,
  OPTIONS_TYPE,
} from "./docs/examples";
import { Lolcat, useLolcat } from "./lib";

function App() {
  const hookExampleContent = useLolcat(HOOK_EXAMPLE_TEXT);

  return (
    <Layout>
      <p>
        <strong>react-lolcat</strong> is a{" "}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React
        </a>{" "}
        implementation of{" "}
        <a
          href="https://github.com/busyloop/lolcat"
          target="_blank"
          rel="noreferrer"
        >
          lolcat
        </a>{" "}
        for the web.
      </p>
      <p>
        <b>If you don't know what lolcat is</b>, it is a tool that provides a
        way to display rainbow-colorized text in your terminal. Something like
        this:
      </p>
      <p className="text-center">
        <img src="/lolcat.png" alt="lolcat text in rainbow colors" />
        <br />😜
      </p>
      <section className="doc-section">
        <h2>Installation</h2>
        <p>Install the normal way. If you use npm, it may look like this.</p>
        <pre>
          <code>npm install react-lolcat</code>
        </pre>
        <p>
          (If you use <code>yarn</code>, <code>pnpm</code>, <code>bun</code>,
          etc. you obvs know what to do.)
        </p>
      </section>
      <section className="doc-section">
        <h2>Usage</h2>
        <p>
          <b>react-lolcat</b> provides a <code>&lt;Lolcat /&gt;</code> component
          and a <code>useLolcat()</code> hook. Both take a string of text and
          return a colorized <code>ReactNode</code>.
        </p>
        <h3>Component example</h3>
        <p>This is how it may look to implement as a component:</p>
        <CodeBlock>{COMPONENT_EXAMPLE}</CodeBlock>

        <p>Which would render something like this:</p>
        <pre className="pre-dark">
          <code>
            <Lolcat text={COMPONENT_EXAMPLE_TEXT} />
          </code>
        </pre>
        <h3>Hook example</h3>
        <p>
          If for your usage, you prefer using a hook, we got chu. This is an
          example of how you would use with a hook:
        </p>
        <CodeBlock>{HOOK_EXAMPLE}</CodeBlock>
        <p>This one would render like this:</p>
        <pre className="pre-dark">
          <code>{hookExampleContent}</code>
        </pre>
        <h3>Options</h3>
        <p>
          Both the component and the hook take a <code>config</code> prop to
          adjust the lolcat options. The config type looks like this:
        </p>
        <CodeBlock>{OPTIONS_TYPE}</CodeBlock>
        <p>
          You can play with this config to fine-tune how your lolcats are
          displayed.
        </p>
        <p>
          If you want to completely customize how the lolcats are rendered, you
          can do so by implementing the underlying colorizing function. The
          library exports <code>lolcatColorize()</code> that returns a matrix of
          rows of characters which are tuples of the character{" "}
          <code>string</code> and a <code>Color</code> object which has{" "}
          <code>red</code>, <code>green</code>, and <code>blue</code> values.
        </p>
        <p>I'll let your figure it out from there. ✌️</p>
      </section>
      <section className="doc-section">
        <h2>Final notes</h2>
        <ul>
          <li>
            Major shout out to{" "}
            <a
              href="https://github.com/robertmarsal/lolcatjs"
              target="_blank"
              rel="noreferrer"
            >
              lolcatjs
            </a>{" "}
            which is where the actual logic for colorizing the text has come
            from. (FYI, lolcatjs only works in your terminal, so that is why I
            made <b>react-lolcat</b>.)
          </li>
          <li>
            I made this for another little project you may like:{" "}
            <a
              href="https://figlet-browser.rewdy.lol"
              target="_blank"
              rel="noreferrer"
            >
              figlet browser
            </a>
            . Figlet browser gives a nice way to find a figlet font to use.
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default App;
