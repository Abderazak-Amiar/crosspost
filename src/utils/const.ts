export const menu_items = [
  { icon: 'add', text: 'New post', link: 'newpost' },
  { icon: 'home', text: 'Home', link: 'home' },
  { icon: 'messages', text: 'Messages', link: 'messages' },
  { icon: 'calendar', text: 'Calendar', link: 'calendar' },
  { icon: 'auto_post', text: 'Auto post', link: 'auto_post' },
  { icon: 'analytics', text: 'Analytics', link: 'analytics' },
  { icon: 'profiles', text: 'Profiles', link: 'profiles' },
];
export const BASE_URL = `
  ${
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_STORE_SERVER_URL
      : process.env.NEXT_PUBLIC_STORE_SERVER_URL
  }`;
