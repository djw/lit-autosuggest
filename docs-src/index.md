---
layout: page.11ty.cjs
title: <lit-autosuggest> ⌲ Home
---

# &lt;lit-autosuggest>

`<lit-autosuggest>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-autosuggest>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-autosuggest></lit-autosuggest>
```

  </div>
  <div>

<lit-autosuggest></lit-autosuggest>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-autosuggest>` can be configured with attributed in plain HTML.

```html
<lit-autosuggest name="HTML"></lit-autosuggest>
```

  </div>
  <div>

<lit-autosuggest name="HTML"></lit-autosuggest>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-autosuggest>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;lit-autosuggest&gt;</h2>
    <lit-autosuggest .name=${name}></lit-autosuggest>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;lit-autosuggest&gt;</h2>
<lit-autosuggest name="lit-html"></lit-autosuggest>

  </div>
</section>
