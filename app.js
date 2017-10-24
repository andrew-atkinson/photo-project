var apos = require('apostrophe')({
  shortName: 'photo-project', title: 'photo-project',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Add custom apostrophe-modules and their respective configuration here!
    'apostrophe-pages': {
      types: [
        {
          name: 'default',
          label: 'Default'
        }, {
          name: 'home',
          label: 'Home'
        }
      ]
    }
  },
  // This configures our default page template
});
