export class Element {
  private tag: string;
  private attributes: object;
  private element: HTMLElement;

  constructor(tagName: string, tagAttributes: object) {
    this.tag = tagName;
    this.element = this.createElement();

    this.attributes = tagAttributes;
    this.element = this.setAttributes();
  }

  get getElement() {

    return this.element;
  }

  private createElement(): HTMLElement {

    const element: HTMLElement = document.createElement(this.tag);

    return element;
  }

  private setAttributes(): HTMLElement {

    let element = this.element;
    const attributes = this.attributes;

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    return element;
  }
}