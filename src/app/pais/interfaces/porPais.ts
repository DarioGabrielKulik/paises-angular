export interface porPais {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  borders?: string[];
  gini?: Gini;
  fifa?: string;
}

export interface Gini {
  '2017'?: number;
  '2016'?: number;
  '2003'?: number;
  '2018'?: number;
  '2015'?: number;
  '2014'?: number;
  '2019'?: number;
  '2005'?: number;
  '2011'?: number;
  '2013'?: number;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng2;
  fra?: Eng2;
}

export interface Eng2 {
  f: string;
  m: string;
}

export interface Translations {
  ara: Eng;
  bre: Eng;
  ces: Eng;
  cym: Eng;
  deu: Eng;
  est: Eng;
  fin: Eng;
  fra: Eng;
  hrv: Eng;
  hun: Eng;
  ita: Eng;
  jpn: Eng;
  kor: Eng;
  nld: Eng;
  per?: Eng;
  pol: Eng;
  por: Eng;
  rus: Eng;
  slk: Eng;
  spa: Eng;
  srp: Eng;
  swe: Eng;
  tur: Eng;
  urd: Eng;
  zho?: Eng;
}

export interface Languages {
  eng?: string;
  fra?: string;
  nfr?: string;
  sot?: string;
  div?: string;
  ssw?: string;
  rus?: string;
  uzb?: string;
  fas?: string;
  zho?: string;
  ara?: string;
  est?: string;
  ben?: string;
  ber?: string;
  mey?: string;
  spa?: string;
  lit?: string;
  deu?: string;
  por?: string;
  tet?: string;
  kaz?: string;
  zdj?: string;
  ind?: string;
  kir?: string;
  aze?: string;
  nld?: string;
  pap?: string;
  aym?: string;
  grn?: string;
  que?: string;
  de?: string;
  fil?: string;
  crs?: string;
  cat?: string;
  eus?: string;
  glc?: string;
  ces?: string;
  slk?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  GBP?: GBP;
  GGP?: GBP;
  LSL?: GBP;
  ZAR?: GBP;
  MVR?: GBP;
  SZL?: GBP;
  UZS?: GBP;
  IRR?: GBP;
  XOF?: GBP;
  TWD?: GBP;
  EGP?: GBP;
  ILS?: GBP;
  JOD?: GBP;
  EUR?: GBP;
  BDT?: GBP;
  DZD?: GBP;
  MAD?: GBP;
  MRU?: GBP;
  AED?: GBP;
  USD?: GBP;
  XPF?: GBP;
  KZT?: GBP;
  KMF?: GBP;
  IDR?: GBP;
  KGS?: GBP;
  AZN?: GBP;
  LBP?: GBP;
  BOB?: GBP;
  PHP?: GBP;
  MXN?: GBP;
  XCD?: GBP;
  XAF?: GBP;
  BMD?: GBP;
  SCR?: GBP;
  MOP?: GBP;
  CZK?: GBP;
}

export interface GBP {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  eng?: Eng;
  fra?: Eng;
  nfr?: Eng;
  sot?: Eng;
  div?: Eng;
  ssw?: Eng;
  rus?: Eng;
  uzb?: Eng;
  fas?: Eng;
  zho?: Eng;
  ara?: Eng;
  est?: Eng;
  ben?: Eng;
  ber?: Eng;
  mey?: Eng;
  spa?: Eng;
  lit?: Eng;
  deu?: Eng;
  por?: Eng;
  tet?: Eng;
  kaz?: Eng;
  zdj?: Eng;
  ind?: Eng;
  kir?: Eng;
  aze?: Eng;
  nld?: Eng;
  pap?: Eng;
  aym?: Eng;
  grn?: Eng;
  que?: Eng;
  bar?: Eng;
  fil?: Eng;
  crs?: Eng;
  ces?: Eng;
  slk?: Eng;
}

export interface Eng {
  official: string;
  common: string;
}