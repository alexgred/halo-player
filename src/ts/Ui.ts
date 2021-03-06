import Utils from './utils/Utils';
import Controls from './Controls';
import IConfig from './interfaces/IConfig';

export default class Ui {
  private readonly config: IConfig;
  private container: HTMLElement;
  private video: HTMLVideoElement;
  private controls: Controls;

  constructor(className: string, config: IConfig) {
    this.config = config;
    this.video = this.getVideo(className);
    this.container = this.getContainer(className);
    this.controls = new Controls(this.config, this.video);

    this.container;
    this.video;
    this.config;
    this.controls;

    this.getPlayButton();
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

    controls.appendChild(this.controls.controlsPlay.getElement);
    controls.appendChild(this.controls.controlsMute.getElement);
    controls.appendChild(this.controls.controlsFullScreen.getElement);

    this.container.appendChild(controls.getElement);
  }

  private getPlayButton() {
    this.container.appendChild(this.controls.playButton.getElement);
  }
}