export default class Utils {
  protected element: HTMLElement;
  private tag: string;
  private attributes: Object;

  constructor(tagName: string, tagAttributes: object) {
    this.tag = tagName;
    this.element = this.createElement();

    this.attributes = tagAttributes;
    this.element = this.setAttributes();
  }

  get getElement(): HTMLElement {

    return this.element;
  }

  private createElement(): HTMLElement {

    const element: HTMLElement = document.createElement(this.tag);

    return element;
  }

  private setAttributes(): HTMLElement {

    let element: HTMLElement = this.element;
    const attributes: Object = this.attributes;

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    }); 

    return element;
  }

  public removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  public addClass(className: string): void {
    this.element.classList.add(className);
  }

  public changeClasses(removedClass: string, addedClass: string): void {
    this.removeClass(removedClass);
    this.addClass(addedClass);
  }

  public append(selector: string): void {
    let parent: HTMLElement = document.querySelector(selector);

    parent.appendChild(this.element);
  }

  public appendChild(child: HTMLElement): void {
    this.element.appendChild(child);
  }

  public addListner(event: string, callback: EventListenerOrEventListenerObject): void {
    this.element.addEventListener(event, callback);
  }
}