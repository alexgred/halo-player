// import { Utils } from './Utils';
import Config from './interfaces/Config';

export default class Ui {
  private readonly config: Config;
  private container: HTMLElement;
  private video: HTMLVideoElement;

  constructor(className: string, config: Config) {
    this.config = config;
    this.video = this.getVideo(className);
    this.container = this.getContainer(className);

    this.container;
    this.video;
    this.config;
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
}