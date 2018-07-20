import Utils from './utils/Utils';
import IConfig from './interfaces/IConfig';
import IFullScreen from './interfaces/IFullScreen';

export default class Controls {
  private readonly config: IConfig;
  private video: IFullScreen;
  public playButton: Utils;
  public controlsPlay: Utils;
  public controlsMute: Utils;
  public controlsFullScreen: Utils;

  constructor(config: IConfig, video: HTMLVideoElement) {
    this.config = config;
    this.video = video;
    this.playButton = this.createContol('div', this.config.classes.playButton, 'play');
    this.controlsPlay = this.createContol('div', config.classes.controlsPlay, 'play');
    this.controlsMute = this.createContol('div', this.config.classes.controlsMute, 'mute');
    this.controlsFullScreen = this.createContol('div', this.config.classes.controlsFullScreen, 'fullscreen');
  }

  private createContol(tagName: string, className: string, type: string): Utils {
    const attributes: Object = {
      class: className
    };
    const control: Utils = new Utils(tagName, attributes);

    this.addControlEvent(control, type);

    return control;
  }

  private addControlEvent(control: Utils, type: string): void {
    let eventListner: EventListenerOrEventListenerObject;

    switch (type) {
      case 'play':
        eventListner = () => {
          this.video.play();
        };
        break;

      case 'pause':
        eventListner = () => {
          this.video.pause();
        };
        break;

      case 'mute':
        eventListner = () => {
          this.video.muted = true;
        };
        break;

      case 'unmute':
        eventListner = () => {
          this.video.muted = false;
        };
        break;

      case 'fullscreen':
        eventListner = () => {

          if (this.video.requestFullscreen) {
            this.video.requestFullscreen();
          } 
          else if (this.video.mozRequestFullScreen) {
            this.video.mozRequestFullScreen();
          } 
          else if (this.video.webkitRequestFullscreen) {
            this.video.webkitRequestFullscreen();
          }
          else if (this.video.msRequestFullscreen) {
            this.video.msRequestFullscreen();
          }
        };
        break;
    
      default:
        break;
    }

    control.addListner('click', eventListner);
  }
}
