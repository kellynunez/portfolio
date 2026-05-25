declare module '*.css';
declare module '@/styles/globals.css';
declare module 'src/styles/globals.css';
declare module '../styles/globals.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

interface Window {
  gtag?: (...args: Array<string | number | Record<string, unknown>>) => void;
}
