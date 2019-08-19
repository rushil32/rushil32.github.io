---
title: Animation with React Spring &#x1F3A9;
date: 2019-08-07
path: /blog/react-spring
author: 'Rushil Saraogi'
---

## The Basics

1. Find it here - https://www.react-spring.io/
2. You'll need to install it (skipping this step makes the rest of it pretty complicated) -

```shell
npm install --save-dev react-spring

```

- And import it:

```javascript
import { useSpring, animated } from "react-spring"
```

--split--

## Simple Animation

You'll need to create an object that conforms to this API (https://www.react-spring.io/docs/hooks/api) so you can pass it to the animated element - 

```javascript
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

--split--

Wrap the element to be animated with a &nbsp;`<animated.div>`&nbsp; tag.

```javascript
<animated.div style={props}>
  <p>This thing will fade in</p>
</animated.div>
```
Notice the object created in the last step is being passed in as a style object. &#9757;

--split--

## Trailing Animation

One use case the spring library handles really well is trailing animation - where one elements start and end time is dependent on another. Traditionally this was done using delays and duration values in CSS. Here's an example of trailing animation using React Spring - https://rushil32.github.io.

--split--

## Create trailing animation - 

```javascript
import { useTrail, animated } from "react-spring"
```

Create a config, to be used with the animation - 

```javascript
const config = { mass: 5, tension: 2500, friction: 200 }
```
--split--

Create the trail object - 

```javascript
const trail = useTrail(items.length, {
  config,
  opacity: 1,
  transform: "scale(1)",
  from: { opacity: 0, transform: "scale(0.9)" },
})
```
--split--

Map the trail list to each element -

```javascript
{trail.map((style, index) => (
  <animated.div key={items[index]} style={style}>
    {renderLink(items[index], index)}
  </animated.div>
))}
```