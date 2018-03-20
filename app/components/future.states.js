// Future State (Placeholder) for the contacts module
export const contactsFutureState = {
  parent: 'shell',
  name: 'contacts.**',
  url: '/contacts',
  lazyLoad(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('./contacts/contacts.module').then((mod) => $ocLazyLoad.load(mod.CONTACTS_MODULE));
  }
};

// Future State (Placeholder) for the prefs module
export const prefsFutureState = {
  parent: 'shell',
  name: 'prefs.**',
  url: '/prefs',
  lazyLoad(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('./prefs/prefs.module').then((mod) => $ocLazyLoad.load(mod.PREFS_MODULE));
  }
};

// Future State (Placeholder) for the mymessages module
export const mymessagesFutureState = {
  parent: 'shell',
  name: 'mymessages.**',
  url: '/mymessages',
  lazyLoad(transition) {
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    return import('./mymessages/mymessages.module').then((mod) => $ocLazyLoad.load(mod.MYMESSAGES_MODULE));
  }
};
