import { QrCodeElement } from "./QrCodeElement.js";

const TAG_NAME = "qr-code";

customElements.get(TAG_NAME) ?? customElements.define(TAG_NAME, QrCodeElement);

declare global {
  interface HTMLElementTagNameMap {
    [TAG_NAME]: QrCodeElement;
  }
}
