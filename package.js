Package.describe({
  name: 'mpowaga:jquery-fileupload',
  version: '9.11.2',
  summary: 'Meteor wrapper package for jQuery File Upload plugin',
  git: 'https://github.com/mpowaga/meteor-jquery-fileupload.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mpowaga:jquery-ui-widget@1.11.4', 'client');
  api.addFiles('jquery.fileupload.js', 'client');
});
