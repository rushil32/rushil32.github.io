---
title: Animation with React Spring
date: 2019-08-07
path: /blog/react-spring
author: 'Rushil Saraogi'
image: ../../../images/blog/rabbit-thumb.jpeg
---

## What do you need to know?

- **One!** This is what we're talking about - https://www.react-spring.io/
- **Two!** You'll need to install it (skipping this step makes the rest of it pretty complicated) -

```
npm install --save-dev react-spring

```

- And import it:

```
import { useSpring, animated } from "react-spring"
```


- **Three**, you'll need to create an object that conforms to this not so intuitive API (https://www.react-spring.io/docs/hooks/api) so you can pass it to the animated element - 

```
const props = useSpring({
  opacity: show ? 1 : 0
  pointerEvents: show ? 'auto' : 'none', 
  from: { 
    opacity: 0, 
    pointerEvents: 'none' 
  } 
})
```
This code snippet from a modal component essentially says that it should start at opacity 0 with no pointer events and animate to an opacity of 1 and regular pointer events. This creates a simple fade in fade out effect for a modal.

- **Four!** Wrap the element to be animated with a &nbsp;`<animated.div>`&nbsp; tag.

```
<animated.div style={props}>
  <p>This thing will fade in</p>
</animated.div>
```
Notice the object created in the last step is being passed in as a style object. &#9757;
