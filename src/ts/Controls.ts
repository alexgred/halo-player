import Utils from './utils/Utils';
import IConfig from './interfaces/IConfig';
import IFullScreen from './interfaces/IFullScreen';
import IClasses from './interfaces/IClasses';

export default class Controls {
  private readonly config: IConfig;
  private readonly classes: IClasses;
  private video: IFullScreen;
  public playButton: Utils;
  public controlsPlay: Utils;
  public controlsMute: Utils;
  public controlsFullScreen: Utils;

  constructor(config: IConfig, video: HTMLVideoElement) {
    this.config = config;
    this.classes = config.classes;
    this.video = video;
    this.playButton = this.createContol('div', this.classes.playButton, 'playButton');
    this.controlsPlay = this.createContol('div', this.classes.controlsPlay, 'play');
    this.controlsMute = this.createContol('div', this.classes.controlsMute, 'mute');
    this.controlsFullScreen = this.createContol('div', this.classes.controlsFullScreen, 'fullscreen');

    this.config;
  }

  private createContol(tagName: string, className: string, type: string): Utils {
    const attributes: Object = {
      class: className,
    };
    const control: Utils = new Utils(tagName, attributes);

    this.addControlEvent(control, type);

    return control;
  }

  private addControlEvent(control: Utils, type: string): void {
    let eventListner: EventListenerOrEventListenerObject;

    switch (type) {
      case 'playButton':
        eventListner = () => {
          this.video.play();
          control.changeClasses(this.classes.controlShow, this.classes.controlHide);

          this.controlsPlay.changeClasses(this.classes.controlsIconPlay, this.classes.controlsIconPause);
        };
        break;

      case 'play':
        eventListner = () => {
          
          if (this.video.paused) {
            this.video.play();
            control.changeClasses(this.classes.controlsIconPlay, this.classes.controlsIconPause);
            this.playButton.changeClasses(this.classes.controlShow, this.classes.controlHide);
          }
          else {
            this.video.pause();
            control.changeClasses(this.classes.controlsIconPause, this.classes.controlsIconPlay);
            this.playButton.changeClasses(this.classes.controlHide, this.classes.controlShow);
          }
        };
        break;

      case 'mute':
        eventListner = () => {

          if (this.video.muted) {
            this.video.muted = false;
            control.changeClasses(this.classes.controlsIconMuted, this.classes.controlsIconUnmuted);
          }
          else {
            this.video.muted = true;
            control.changeClasses(this.classes.controlsIconUnmuted, this.classes.controlsIconMuted);
          }
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
