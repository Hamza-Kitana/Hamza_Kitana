export type Locale = 'en' | 'ar';

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export const loc = (en: string, ar: string): LocalizedString => ({ en, ar });
export const locEn = (en: string): LocalizedString => ({ en, ar: en });
export const locList = (en: string[], ar: string[]): LocalizedList => ({ en, ar });
export const locListEn = (en: string[]): LocalizedList => ({ en, ar: en });

export const pick = (value: LocalizedString, locale: Locale): string => value[locale];
export const pickList = (value: LocalizedList, locale: Locale): string[] => value[locale];
