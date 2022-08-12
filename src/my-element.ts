/// <reference types="google.maps" />
import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';

declare global {
  interface Window {
    google: typeof google;
  }
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      position: relative;
    }
    * {
      box-sizing: border-box;
    }
    input {
      border: 1px solid grey;
      margin: 0;
      padding: 10px;
      width: 100%;
    }
    ul {
      background-color: white;
      margin: 0;
      margin-top: -1px;
      padding: 0;
      list-style-type: none;
      border: 1px solid grey;
      position: absolute;
      width: 100%;
    }
    li {
      padding: 10px;
    }
    li:nth-child(even) {
      background: #eee;
    }
  `;

  /**
   * The current list of suggestions
   */
  @state()
  private suggestions: string[] = [];
  

  private renderSuggestions() {
    if (this.suggestions.length) {
      return html`
        <ul>
          ${this.suggestions.map((suggestion) =>
            html`<li>${suggestion}</li>`
          )}
        </ul>
      `;
    } {
      return null;
    }
  }

  override render() {
    return html`
      <input type="text" @input=${this._onInput} autocomplete="off" spellcheck="false"/>
      ${this.renderSuggestions()}
    `;
  }

  private _onInput(e: InputEvent) {
    if (!e.target) return;
    const text = (e.target as HTMLInputElement).value;
    // console.log(newValue);
    // if (newValue.length) {
    //   this.suggestions = ["Option 1", "Option 2", "Option 3"];
    // } else {
    //   this.suggestions = [];
    // }

    if (text.length < 2) {
      this.suggestions = [];
      return
    };

    const gmaps = window.google.maps;

    const options = {
      input: text,
      types: ["geocode"],
      // sessionToken: this.sessionToken,
    };
    const service = new gmaps.places.AutocompleteService();
    service.getPlacePredictions(options, (results, status) => {
      if (status === gmaps.places.PlacesServiceStatus.OK) {
        this.suggestions = results?.map(r => r.description) || [];
      }
    });

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
