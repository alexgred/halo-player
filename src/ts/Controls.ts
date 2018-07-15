import Utils from './utils/Utils';
import Config from './interfaces/Config';

export default class Controls {
  private readonly config: Config;
  public playButton: Utils;
  public controlsPlay: Utils;
  public controlsMute: Utils;
  public controlsFullScreen: Utils;

  constructor(config: Config) {
    this.config = config;
    this.playButton = this.createPlayButton();
    this.controlsPlay = this.createControlsPlay();
    this.controlsMute = this.createControlsMute();
    this.controlsFullScreen = this.createControlsFullScreen();
  }

  private createPlayButton(): Utils {
    const attributes: Object = {
      class: this.config.classes.playButton
    };
    const playButton: Utils = new Utils('div', attributes);

    return playButton;
  }

  private createControlsPlay(): Utils {
    const attributes: Object = {
      class: this.config.classes.controlsPlay
    };
    const controlsPlay: Utils = new Utils('div', attributes);

    return controlsPlay;
  }

  private createControlsMute(): Utils {
    const attributes: Object = {
      class: this.config.classes.controlsMute
    };
    const controlsMute: Utils = new Utils('div', attributes);

    return controlsMute;
  }

  private createControlsFullScreen(): Utils {
    const attributes: Object = {
      class: this.config.classes.controlsFullScreen
    };
    const controlsFullScreen: Utils = new Utils('div', attributes);

    return controlsFullScreen;
  }
}
