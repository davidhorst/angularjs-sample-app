export const shellState = {
  name: 'shell',
  abstract: true,
  url: '',
  data: { requiresAuth: true },
  views: {
    '': {
      component: 'shell'
    },
    'sidenav@shell': {
      component: 'sideNav'
    },
    'topnav@shell': {
      component: 'topNav'
    }
  }
};
