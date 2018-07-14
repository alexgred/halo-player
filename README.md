# halo-player
HTML5 player

## Setup
#### HTML5 video
```html
<div class="video">
  <video poster="/path/to/poster.jpg" class="player">
    <source src="/path/to/video.mp4" type="video/mp4">
  </video>
</div>
```
#### JavaScript
```javascript
const halo = new Halo('.video');
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
classes | Object | See [defaults.ts](https://github.com/alexgred/halo-player/blob/master/src/ts/config/defaults.tsm) | Default classes for HTML items. All properties `readonly`.

## Author
Halo player is developed by [@alexgred](https://github.com/alexgred).