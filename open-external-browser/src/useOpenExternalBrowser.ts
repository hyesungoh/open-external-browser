import { useEffect } from 'react';

import { type Where } from './constants';
import { openExternalBrowser } from './openExternalBrowser';

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
}

/**
 * @description Open the URL in the environment specified by where
 * @note run in effect
 * @example useOpenExternalBrowser({ where: 'all', to: 'https://github.com' })
 * @example useOpenExternalBrowser({ where: ['kakao', 'line'] })
 * @example useOpenExternalBrowser({ where: 'kakao' })
 */
export function useOpenExternalBrowser({ where, to }: Props) {
  useEffect(() => {
    openExternalBrowser({ where, to });
  }, [to, where]);
}
