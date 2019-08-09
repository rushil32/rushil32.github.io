import React from "react"
import styles from "./styles/instructions.module.scss"

const installation = `npm install -S ramen-ui`;
const sampleUsage = 
`import React from 'react';
import { Button } from 'ramen-ui';

const App = () => (
  <Button>
    Ramen-UI
  </Button>
);

export default App;`

const Instructions = () => {
  return (
    <div className={styles.instructions}>
      <h2>Installation</h2>
      <p>
        Available as an NPM package. Can also be found on{" "}
        <a href="https://www.npmjs.com/package/ramen-ui">NPMJS</a>. Source code
        available at <a href="https://github.com/rushil32/ramen-ui">GitHub</a>
      </p>
      <pre>
        <code>{installation}</code>
      </pre>
      <h2>Usage</h2>
      <p>Import the components from the NPM package and plug into your JSX</p>
      <pre>
        <code>{sampleUsage}</code>
      </pre>
    </div>
  )
}

export default Instructions
