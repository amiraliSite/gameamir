import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lang } from '../types';
import { STR, Strings } from '../data/i18n';

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Strings;
}

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fa');

  useEffect(() => {
    document.documentElement.dir = STR[lang].dir;
    document.documentElement.lang = STR[lang].htmlLang;
  }, [lang]);

  const value: LangContextValue = { lang, setLang, t: STR[lang] };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within a LangProvider');
  return ctx;
}
