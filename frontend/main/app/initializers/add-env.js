import env from '../config/environment';

export function initialize(container, application) {
  application.register('env:main', env, { singleton: true, instantiate: false });
  application.inject('component', 'env', 'env:main');
  application.inject('controller', 'env', 'env:main');
}

export default {
  name: 'add-env',
  initialize: initialize
};
