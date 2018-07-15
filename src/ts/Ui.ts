import Utils from './utils/Utils';
import Controls from './Controls';
import Config from './interfaces/Config';

export default class Ui {
  private readonly config: Config;
  private container: HTMLElement;
  private video: HTMLVideoElement;
  private controls: Controls;

  constructor(className: string, config: Config) {
    this.config = config;
    this.video = this.getVideo(className);
    this.container = this.getContainer(className);
    this.controls = new Controls(this.config);

    this.container;
    this.video;
    this.config;
    this.controls;

    this.getControls();
  }

  private getContainer(className: string): HTMLElement {
    let container: HTMLElement = document.querySelector(className);

    container.classList.add(this.config.classes.container);

    return container;
  }

  private getVideo(className: string): HTMLVideoElement {
    let selector: string = className + ' video';
    let video: HTMLVideoElement = document.querySelector(selector);

    video.classList.add(this.config.classes.video);

    return video;
  }

  private getControls() {
    let attributes: Object = {
      class: this.config.classes.controls
    };
    let controls: Utils = new Utils('div', attributes);

    controls.appendChild(this.controls.playButton.getElement);

    this.container.appendChild(controls.getElement);
  }
}