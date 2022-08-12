/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitAutosuggest} from '../lit-autosuggest';

import {assert} from '@open-wc/testing';
// import {html} from 'lit/static-html.js';

suite('lit-autosuggest', () => {
  test('is defined', () => {
    const el = document.createElement('lit-autosuggest');
    assert.instanceOf(el, LitAutosuggest);
  });

  // test('renders with default values', async () => {
  //   const el = await fixture(html`<lit-autosuggest></lit-autosuggest>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('renders with a set name', async () => {
  //   const el = await fixture(html`<lit-autosuggest name="Test"></lit-autosuggest>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, Test!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('handles a click', async () => {
  //   const el = (await fixture(html`<lit-autosuggest></lit-autosuggest>`)) as LitAutosuggest;
  //   const button = el.shadowRoot!.querySelector('button')!;
  //   button.click();
  //   await el.updateComplete;
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 1</button>
  //     <slot></slot>
  //   `
  //   );
  // });

  // test('styling applied', async () => {
  //   const el = (await fixture(html`<lit-autosuggest></lit-autosuggest>`)) as LitAutosuggest;
  //   await el.updateComplete;
  //   assert.equal(getComputedStyle(el).paddingTop, '16px');
  // });
});
