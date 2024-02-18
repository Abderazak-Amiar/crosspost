import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const sfPro_bold = localFont({
  src: '../../public/fonts/SF-Pro-Display/sf-pro-display_bold.woff2',
  display: 'swap',
});
export const sfPro_semibold = localFont({
  src: '../../public/fonts/SF-Pro-Display/sf-pro-display_semibold.woff2',
  display: 'swap',
});
export const sfPro_regular = localFont({
  src: '../../public/fonts/SF-Pro-Display/sf-pro-display_regular.woff2',
  display: 'swap',
});
export const sfPro_text_bold = localFont({
  src: '../../public/fonts/SF-Pro-Text/sf-pro-text_bold.woff2',
  display: 'swap',
});
export const sfPro_text_semibold = localFont({
  src: '../../public/fonts/SF-Pro-Text/sf-pro-text_bold.woff2',
  display: 'swap',
});
export const poppins = Poppins({
  weight: '600',
  style: ['normal'],
  subsets: ['latin'],
});
