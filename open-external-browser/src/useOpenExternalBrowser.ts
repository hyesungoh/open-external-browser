import { useEffect } from 'react';

import { type Where } from './constants';
import { openExternalBrowser } from './openExternalBrowser';

interface Props {
  where: Where;
  to?: string;
}
export function useOpenExternalBrowser({ where, to }: Props) {
  useEffect(() => {
    openExternalBrowser({ where, to });
  }, [to, where]);
}
