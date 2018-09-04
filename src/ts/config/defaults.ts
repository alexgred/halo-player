import IConfig from '../interfaces/IConfig';

/**
 * @description Config object of default value.
 */
const defaults: IConfig = {
  classes: {
    container: 'halo__container',
    video: 'halo__video',
    playButton: 'halo__play-button halo__icon-play',
    controls: 'halo__controls',
    controlsPlay: 'halo__control halo__control-play halo__icon-play',
    controlsMute: 'halo__control halo__control-mute halo__icon-volume-medium',
    controlsFullScreen: 'halo__control halo__control-fullscreen halo__icon-expand',
    controlsIconPlay: 'halo__icon-play',
    controlsIconPause: 'halo__icon-pause',
    controlsIconUnmuted: 'halo__icon-volume-medium',
    controlsIconMuted: 'halo__icon-volume-mute',
    controlHide: 'halo__control_hide',
    controlShow: 'halo__control_show',
  }
};

export default defaults;