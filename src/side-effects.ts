import { QRCodeElement } from "./QRCodeElement.js";

const TAG_NAME = "qr-code";

customElements.get(TAG_NAME) ?? customElements.define(TAG_NAME, QRCodeElement);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: QRCodeElement;
  }
}
