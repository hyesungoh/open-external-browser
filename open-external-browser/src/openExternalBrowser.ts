import { getUA } from './agent';
import { AGENT_MAP, HREF_MAP, IN_APPS, type InApp, type Where } from './constants';

interface Props {
  /**
   * @description Decide in what environment to open it
   * @example 'all' - Open in all environments
   * @example ['kakao', 'line'] - Open in ['kakao', 'line']
   * @example 'kakao' - Open in 'kakao'
   */
  where: Where;
  /**
   * @description URL to open
   * @default location.href
   * @example 'https://github.com'
   */
  to?: string;
  /**
   * @description Callback function when the in-app browser is opened
   * @param where - The environment where the in-app browser is opened
   * @returns `void`
   */
  onOpen?: (where: InApp) => void;
}

/**
 * @description Open the URL in the environment specified by where
 * @note Do not use it in server-side
 * @example openExternalBrowser({ where: 'all', to: 'https://github.com' })
 * @example openExternalBrowser({ where: ['kakao', 'line'] })
 * @example openExternalBrowser({ where: 'kakao' })
 * @example openExternalBrowser({ where: 'kakao', onOpen: (where) => console.log(where) })
 */
export const openExternalBrowser = ({ where, to, onOpen }: Props) => {
  const ua = getUA();
  const isAll = where === 'all';
  const isWhereArray = Array.isArray(where);
  const toUrl = to || location.href;

  if (isAll) {
    return IN_APPS.forEach((inApp) => {
      if (ua.match(AGENT_MAP[inApp])) {
        onOpen?.(inApp);
        location.href = HREF_MAP[inApp](toUrl);
      }
    });
  }

  if (isWhereArray) {
    return where.forEach((inApp) => {
      if (ua.match(AGENT_MAP[inApp])) {
        onOpen?.(inApp);
        location.href = HREF_MAP[inApp](toUrl);
      }
    });
  }

  if (ua.match(AGENT_MAP[where])) {
    onOpen?.(where);
    location.href = HREF_MAP[where](toUrl);
  }
};
