# HSML Hyperscript

## Hyperscript

Based on [https://github.com/hyperhype/hyperscript](https://github.com/hyperhype/hyperscript)

### Example

```javascript
import { h } from "hsml-h";

h('div#page',
  h('div#header',
    h('h1.classy', 'h', { style: {'background-color': '#22f'} })),
  h('div#menu', { style: {'background-color': '#2f2'} },
    h('ul',
      h('li', 'one'),
      h('li', 'two'),
      h('li', 'three'))),
    h('h2', 'content title',  { style: {'background-color': '#f22'} }),
    h('p',
      "so it's just like a templating engine,\n",
      "but easy to use inline with javascript\n"),
    h('p',
      "the intention is for this to be used to create\n",
      "reusable, interactive html widgets. "))
```

## Helper Functions

Try online converter [http://html-to-hyperscript.paqmind.com/](http://html-to-hyperscript.paqmind.com/)

### Example

```javascript
import { div, ul, li } from "hsml-h/dist/helpers";

div(".menu", [
  ul([
    li([`option #1`]),
    li([`option #2`])
  ])
]);
```
