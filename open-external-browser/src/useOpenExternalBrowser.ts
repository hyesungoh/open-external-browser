import { useEffect } from 'react';

import { openExternalBrowser } from './openExternalBrowser';

type Props = Parameters<typeof openExternalBrowser>[0];

/**
 * @description Open the URL in the environment specified by where
 * @note run in effect
 * @example useOpenExternalBrowser({ where: 'all', to: 'https://github.com' })
 * @example useOpenExternalBrowser({ where: ['kakao', 'line'] })
 * @example useOpenExternalBrowser({ where: 'kakao' })
 * @example useOpenExternalBrowser({ where: 'kakao', onOpen: (where) => console.log(where) })
 * @example useOpenExternalBrowser({ where: 'kakao', to: 'https://github.com', onOpen: (where) => console.log(where) })
 */
export function useOpenExternalBrowser({ where, to, onOpen }: Props) {
  useEffect(() => {
    openExternalBrowser({ where, to, onOpen });
  }, [where, to, onOpen]);
}
