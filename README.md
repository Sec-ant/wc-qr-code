# wc-qr-code

A QR Code Web Component Powered by [Lit](https://lit.dev/).

## Install

```bash
npm i wc-qr-code
```

## Usage

Please use a build tool to install and import this package. This package is not bundled and doesn't support CDN. This package has side effects and the web component will automatically define itself in a global registry when imported. Check [publishing best practices](https://lit.dev/docs/tools/publishing/#publishing-best-practices) from Lit for more information.

```ts
// This statement will automatically register <qr-code> in the global registry.
import "wc-qr-code";
```

```html
<!-- You can use it like a native HTML element afterwards. -->
<qr-code value="Hello World!" />
```

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
