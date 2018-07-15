import Utils from './utils/Utils';
import Config from './interfaces/Config';

export default class Controls {
  private readonly config: Config;
  public playButton: Utils;

  constructor(config: Config) {
    this.config = config;
    this.playButton = this.createPlayButton();
  }

  private createPlayButton(): Utils {
    let attributes: Object = {
      class: this.config.classes.playButton
    };
    const playButton: Utils = new Utils('div', attributes);

    return playButton;
  }
}
