export interface porCapital {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  '2019': number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Grn;
  bre: Grn;
  ces: Grn;
  cym: Grn;
  deu: Grn;
  est: Grn;
  fin: Grn;
  fra: Grn;
  hrv: Grn;
  hun: Grn;
  ita: Grn;
  jpn: Grn;
  kor: Grn;
  nld: Grn;
  per: Grn;
  pol: Grn;
  por: Grn;
  rus: Grn;
  slk: Grn;
  spa: Grn;
  srp: Grn;
  swe: Grn;
  tur: Grn;
  urd: Grn;
  zho: Grn;
}

export interface Languages {
  grn: string;
  spa: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  ARS: ARS;
}

export interface ARS {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  grn: Grn;
  spa: Grn;
}

export interface Grn {
  official: string;
  common: string;
}