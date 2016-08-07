export class App {
  configureRouter(config, router) {
    config.title = 'aurelia-validate.js';
    config.map([
      { route: ['', 'decorators'], name: 'decorators', moduleId: 'decorators', nav: true, title: 'Decorators' },
      { route: 'fluent', name: 'fluent', moduleId: 'fluent', nav: true, title: 'Fluent' },
      { route: ['master-child'], name: 'Master Child', moduleId: 'master-child', nav: true, title: 'Master Child'}
    ]);
    this.router = router;
  }
}
