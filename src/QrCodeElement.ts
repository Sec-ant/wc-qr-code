import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { Ecc, QrCode } from "@sec-ant/qr-code-generator";

export class QrCodeElement extends LitElement {
  /**
   * Closed mode shadow dom
   */
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    mode: "closed",
  };

  /**
   * The QR Code value.
   */
  @property({ type: String })
  value = "";

  /**
   * The QR Code ECC level.
   */
  @property({
    converter: {
      fromAttribute: (value) => {
        if (value === null || value === "") {
          return Ecc.LOW;
        }
        switch (value.toLowerCase()) {
          case "l":
          case "low":
            return Ecc.LOW;
          case "m":
          case "medium":
            return Ecc.MEDIUM;
          case "q":
          case "quartile":
            return Ecc.QUARTILE;
          case "h":
          case "high":
            return Ecc.HIGH;
          default:
            throw new TypeError(`Unsupported ECC level: ${value}`);
        }
      },
    },
  })
  ecc = Ecc.LOW;

  /**
   * The QR Code quiet zone.
   */
  @property({ type: Number })
  border = 4;

  /**
   * The scale ratio: scale = x pixels per module
   */
  @property({ type: Number })
  scale = 8;

  /**
   * The light color.
   */
  @property({ type: String, attribute: "light-color" })
  lightColor = "#fff";

  /**
   * The dark color.
   */
  @property({ type: String, attribute: "dark-color" })
  darkColor = "#000";

  render() {
    if (this.border < 0) {
      throw new RangeError("Border must be non-negative");
    }
    const qr = QrCode.encodeText(this.value, this.ecc);
    const parts: string[] = [];
    for (let y = 0; y < qr.size; ++y) {
      for (let x = 0; x < qr.size; ++x) {
        if (qr.getModule(x, y)) {
          parts.push(`M${x + this.border},${y + this.border}h1v1h-1z`);
        }
      }
    }
    return html`
      <style>
        :host {
          display: block;
          width: ${(qr.size + this.border * 2) * this.scale}px;
        }
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        viewBox="0 0 ${qr.size + this.border * 2} ${qr.size + this.border * 2}"
        stroke="none"
      >
        <rect width="100%" height="100%" fill="${this.lightColor}" />
        <path d="${parts.join(" ")}" fill="${this.darkColor}" />
      </svg>
    `;
  }
}
