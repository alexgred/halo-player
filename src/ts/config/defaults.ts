import IConfig from '../interfaces/IConfig';

/**
 * @description Config object of default value.
 */
const defaults: IConfig = {
  classes: {
    container: 'halo__container',
    video: 'halo__video',
    playButton: 'halo__play-button',
    controls: 'halo__controls',
    controlsPlay: 'halo__control halo__control-play',
    controlsMute: 'halo__control halo__control-mute',
    controlsFullScreen: 'halo__control halo__control-fullscreen'
  }
};

export default defaults;