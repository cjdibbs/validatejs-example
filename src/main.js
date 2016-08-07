import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validation') // Load Validation Interface
    .plugin('aurelia-validatejs') // Load ValidateJs Implmentation
    .feature('bootstrap-validation'); // Load Render

  aurelia.start().then(() => aurelia.setRoot());
}
