/**
 * @description Interface extand HTMLVideoElement. 
 * Added RequestFullscreen method for ms and mox prefix browsers.
 */
export default interface IFullScreen extends HTMLVideoElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
}