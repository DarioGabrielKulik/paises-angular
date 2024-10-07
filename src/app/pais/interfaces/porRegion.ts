export interface porRegion {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
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
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2018'?: number;
  '2017'?: number;
  '2019'?: number;
  '2016'?: number;
  '2011'?: number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Nno;
  bre: Nno;
  ces: Nno;
  cym: Nno;
  deu: Nno;
  est: Nno;
  fin: Nno;
  fra: Nno;
  hrv: Nno;
  hun: Nno;
  ita: Nno;
  jpn?: Nno;
  kor: Nno;
  nld: Nno;
  per: Nno;
  pol: Nno;
  por: Nno;
  rus: Nno;
  slk: Nno;
  spa: Nno;
  srp: Nno;
  swe: Nno;
  tur: Nno;
  urd: Nno;
  zho: Nno;
}

interface Languages {
  nno?: string;
  nob?: string;
  smi?: string;
  ell?: string;
  swe?: string;
  fra?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  hrv?: string;
  isl?: string;
  deu?: string;
  ltz?: string;
  hun?: string;
  nld?: string;
  lit?: string;
  slk?: string;
  ron?: string;
  eng?: string;
  nrf?: string;
  bel?: string;
  rus?: string;
  lav?: string;
  cat?: string;
  dan?: string;
  mkd?: string;
  mlt?: string;
  ces?: string;
  nfr?: string;
  sqi?: string;
  srp?: string;
  nor?: string;
  cnr?: string;
  fao?: string;
  ukr?: string;
  glv?: string;
  est?: string;
  bul?: string;
  pol?: string;
  fin?: string;
  lat?: string;
  de?: string;
  tur?: string;
  por?: string;
  bos?: string;
  spa?: string;
  eus?: string;
  glc?: string;
  slv?: string;
  gle?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  NOK?: NOK;
  EUR?: NOK;
  CHF?: NOK;
  ISK?: NOK;
  HUF?: NOK;
  MDL?: NOK;
  GBP?: NOK;
  JEP?: NOK;
  BYN?: NOK;
  GIP?: NOK;
  DKK?: NOK;
  MKD?: NOK;
  CZK?: NOK;
  GGP?: NOK;
  FOK?: NOK;
  ALL?: NOK;
  RSD?: NOK;
  UAH?: NOK;
  IMP?: NOK;
  RON?: NOK;
  BGN?: NOK;
  PLN?: NOK;
  SEK?: NOK;
  RUB?: NOK;
  BAM?: NOK;
}

interface NOK {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  nno?: Nno;
  nob?: Nno;
  smi?: Nno;
  ell?: Nno;
  swe?: Nno;
  fra?: Nno;
  gsw?: Nno;
  ita?: Nno;
  roh?: Nno;
  hrv?: Nno;
  isl?: Nno;
  deu?: Nno;
  ltz?: Nno;
  hun?: Nno;
  nld?: Nno;
  lit?: Nno;
  slk?: Nno;
  ron?: Nno;
  eng?: Nno;
  nrf?: Nno;
  bel?: Nno;
  rus?: Nno;
  lav?: Nno;
  cat?: Nno;
  dan?: Nno;
  mkd?: Nno;
  mlt?: Nno;
  ces?: Nno;
  nfr?: Nno;
  sqi?: Nno;
  srp?: Nno;
  nor?: Nno;
  cnr?: Nno;
  fao?: Nno;
  ukr?: Nno;
  glv?: Nno;
  est?: Nno;
  bul?: Nno;
  pol?: Nno;
  fin?: Nno;
  lat?: Nno;
  bar?: Nno;
  tur?: Nno;
  por?: Nno;
  bos?: Nno;
  spa?: Nno;
  slv?: Nno;
  gle?: Nno;
}

interface Nno {
  official: string;
  common: string;
}