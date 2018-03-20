

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.module.js) if no other state
 * can be matched to the URL.
 */
export const welcomeState = {
  parent: 'shell',
  name: 'welcome',
  url: '/welcome',
  component: 'welcome',
  data: { requiresAuth: true }
};


