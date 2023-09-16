export const IN_APPS = ['kakaotalk', 'line'] as const;

export type InApp = (typeof IN_APPS)[number];

export type Where = InApp | InApp[] | 'all';

export const AGENT_MAP: Record<InApp, RegExp> = {
  kakaotalk: /kakaotalk/i,
  line: /line/i,
};

type HrefMap = Record<InApp, (to: string) => string>;
export const HREF_MAP: HrefMap = {
  kakaotalk: (to) => `kakaotalk://web/openExternal?url=${to}`,
  line: (to) => {
    if (to[to.length - 1] === '?') return `${to}?openExternalBrowser=1`;
    return `${to}&openExternalBrowser=1`;
  },
};
