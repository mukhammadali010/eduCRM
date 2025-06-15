import { SheriffConfig } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  modules: {
    'app-root': 'root',
    core: 'core',
    shared: 'shared',
    'features-auth': 'feature',
    'features-dashboard': 'feature',
    'features-profile': 'feature',
    services: 'service',
    utils: 'util',
  },

  depRules: {
    root: 'core,shared',
    core: 'core',
    shared: 'shared,core',
    feature: 'core,shared,service',
    service: 'core,util',
    util: 'util',
    noTag: 'noTag',
  },
};
