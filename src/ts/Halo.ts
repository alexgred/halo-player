import defaults from './config/defaults';
import Ui from './Ui';

import Config from './interfaces/Config';

class Halo {
  public readonly config: Config;
  private container: Ui;

  constructor(className: string) {
    this.config = defaults;

    this.container = new Ui(className, this.config);

    this.container
  }
}


document.addEventListener('DOMContentLoaded', () => {

  const halo: any = new Halo('.halo-player');

  console.log(halo);
});
