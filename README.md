# @sec-ant/wc-qr-code

A `<qr-code>` web component Powered by [Lit](https://lit.dev/).

## Install

```bash
npm i @sec-ant/wc-qr-code
```

## Usage

This package does not bundle dependencies inside it, and is designed to be used with a build tool. For further information on this design decision, please check [this link](https://lit.dev/docs/tools/publishing/#don't-bundle-minify-or-optimize-modules).

This packages exports 3 import paths: `@sec-ant/wc-qr-code/pure`, `@sec-ant/wc-qr-code/side-effects` and `@sec-ant/wc-qr-code`.

### `@sec-ant/wc-qr-code/pure`

This subpath exports the `QRCodeElement` class. You'll have to manually register it on the [`CustomElementRegistry`](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry) to use the web component.

In your script:

```ts
import { QRCodeElement } from "@sec-ant/wc-qr-code/pure";

customElements.define("qr-code", QRCodeElement);
```

Afterwards, in your html file:

```html
<qr-code value="Hello World!"></qr-code>
```

Before https://github.com/WICG/webcomponents/issues/716 is resolved, you'll have to handle possible tag name collisions yourself.

If you use Typescript and wants `document.createElement("qr-code")` to infer the `QRCodeElement` type for you, you should create a declaration file to augment the types:

```ts
declare global {
  interface HTMLElementTagNameMap {
    "qr-code": QRCodeElement;
  }
}
```

### `@sec-ant/wc-qr-code/side-effects`

This subpath will automatically register `QRCodeElement` on the `CustomElementRegistry` with the tag name `qr-code`, only if the tag name `qr-code` isn't already registered. `HTMLElementTagNameMap` will be automatically augmented.

In your script:

```ts
import "@sec-ant/wc-qr-code/side-effects";
```

Afterwards, in your html file:

```html
<qr-code value="Hello World!"></qr-code>
```

### `@sec-ant/wc-qr-code`

This works just like `side-effects` but also exports the `QRCodeElement` class.

## Attributes

### `value`

The value of the encoded QR code.

Default: ""

### `ecc`

Error correction code level. Case-insensitive.

- "l" or "low"
- "m" or "medium"
- "q" or "quartile"
- "h" or "high"

Default: "low"

### `border`

Size of the quiet zone in module blocks.

Default: "4"

### `scale`

Size of one module block in pixels.

Default: "8"

### `light-color`

The color of light module blocks.

Default: "#fff"

### `dark-color`

The color of dark module blocks.

Default: "#000"
