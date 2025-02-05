class z extends Error {
  constructor(t) {
    super(`Couldn't find a stream: ${t ?? "not found"}`), this.name = "NotFoundError";
  }
}
function Qu(e) {
  const t = [];
  return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
    type: "source",
    id: e.id,
    rank: e.rank,
    name: e.name,
    mediaTypes: t
  };
}
function Zu(e) {
  return {
    type: "embed",
    id: e.id,
    rank: e.rank,
    name: e.name
  };
}
function mc(e) {
  return e.sources.sort((t, r) => r.rank - t.rank).map(Qu);
}
function pc(e) {
  return e.embeds.sort((t, r) => r.rank - t.rank).map(Zu);
}
function Ec(e, t) {
  const r = e.sources.find((n) => n.id === t);
  if (r)
    return Qu(r);
  const a = e.embeds.find((n) => n.id === t);
  return a ? Zu(a) : null;
}
function rs(e, t) {
  let r = (t == null ? void 0 : t.baseUrl) ?? "", a = e;
  r.length > 0 && !r.endsWith("/") && (r += "/"), a.startsWith("/") && (a = a.slice(1));
  const n = r + a;
  if (!n.startsWith("http://") && !n.startsWith("https://") && !n.startsWith("data:"))
    throw new Error(`Invald URL -- URL doesn't start with a http scheme: '${n}'`);
  const s = new URL(n);
  return Object.entries((t == null ? void 0 : t.query) ?? {}).forEach(([i, o]) => {
    s.searchParams.set(i, o);
  }), s.toString();
}
function Us(e) {
  const t = (a, n) => e(a, {
    headers: (n == null ? void 0 : n.headers) ?? {},
    method: (n == null ? void 0 : n.method) ?? "GET",
    query: (n == null ? void 0 : n.query) ?? {},
    baseUrl: (n == null ? void 0 : n.baseUrl) ?? "",
    readHeaders: (n == null ? void 0 : n.readHeaders) ?? [],
    body: n == null ? void 0 : n.body,
    credentials: n == null ? void 0 : n.credentials
  }), r = async (a, n) => (await t(a, n)).body;
  return r.full = t, r;
}
const ae = {
  // CORS are set to allow any origin
  CORS_ALLOWED: "cors-allowed",
  // the stream is locked on IP, so only works if
  // request maker is same as player (not compatible with proxies)
  IP_LOCKED: "ip-locked",
  // The source/embed is blocking cloudflare ip's
  // This flag is not compatible with a proxy hosted on cloudflare
  CF_BLOCKED: "cf-blocked",
  // Streams and sources with this flag wont be proxied
  // And will be exclusive to the extension
  PROXY_BLOCKED: "proxy-blocked"
}, Kb = {
  // browser with CORS restrictions
  BROWSER: "browser",
  // browser, but no CORS restrictions through a browser extension
  BROWSER_EXTENSION: "browser-extension",
  // native app, so no restrictions in what can be played
  NATIVE: "native",
  // any target, no target restrictions
  ANY: "any"
}, bc = {
  browser: {
    requires: [ae.CORS_ALLOWED],
    disallowed: []
  },
  "browser-extension": {
    requires: [],
    disallowed: []
  },
  native: {
    requires: [],
    disallowed: []
  },
  any: {
    requires: [],
    disallowed: []
  }
};
function Ju(e, t, r) {
  const a = bc[e];
  return t || a.disallowed.push(ae.IP_LOCKED), r && a.disallowed.push(ae.PROXY_BLOCKED), a;
}
function _r(e, t) {
  return !(!e.requires.every((n) => t.includes(n)) || e.disallowed.some((n) => t.includes(n)));
}
var Ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Tc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
const xc = {
  aa: {
    name: "Afar",
    nativeName: "Afaraf"
  },
  ab: {
    name: "Abkhaz",
    nativeName: "аҧсуа бызшәа"
  },
  ae: {
    name: "Avestan",
    nativeName: "avesta"
  },
  af: {
    name: "Afrikaans",
    nativeName: "Afrikaans"
  },
  ak: {
    name: "Akan",
    nativeName: "Akan"
  },
  am: {
    name: "Amharic",
    nativeName: "አማርኛ"
  },
  an: {
    name: "Aragonese",
    nativeName: "aragonés"
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية"
  },
  as: {
    name: "Assamese",
    nativeName: "অসমীয়া"
  },
  av: {
    name: "Avaric",
    nativeName: "авар мацӀ"
  },
  ay: {
    name: "Aymara",
    nativeName: "aymar aru"
  },
  az: {
    name: "Azerbaijani",
    nativeName: "azərbaycan dili"
  },
  ba: {
    name: "Bashkir",
    nativeName: "башҡорт теле"
  },
  be: {
    name: "Belarusian",
    nativeName: "беларуская мова"
  },
  bg: {
    name: "Bulgarian",
    nativeName: "български език"
  },
  bi: {
    name: "Bislama",
    nativeName: "Bislama"
  },
  bm: {
    name: "Bambara",
    nativeName: "bamanankan"
  },
  bn: {
    name: "Bengali",
    nativeName: "বাংলা"
  },
  bo: {
    name: "Tibetan",
    nativeName: "བོད་ཡིག"
  },
  br: {
    name: "Breton",
    nativeName: "brezhoneg"
  },
  bs: {
    name: "Bosnian",
    nativeName: "bosanski jezik"
  },
  ca: {
    name: "Catalan",
    nativeName: "Català"
  },
  ce: {
    name: "Chechen",
    nativeName: "нохчийн мотт"
  },
  ch: {
    name: "Chamorro",
    nativeName: "Chamoru"
  },
  co: {
    name: "Corsican",
    nativeName: "corsu"
  },
  cr: {
    name: "Cree",
    nativeName: "ᓀᐦᐃᔭᐍᐏᐣ"
  },
  cs: {
    name: "Czech",
    nativeName: "čeština"
  },
  cu: {
    name: "Old Church Slavonic",
    nativeName: "ѩзыкъ словѣньскъ"
  },
  cv: {
    name: "Chuvash",
    nativeName: "чӑваш чӗлхи"
  },
  cy: {
    name: "Welsh",
    nativeName: "Cymraeg"
  },
  da: {
    name: "Danish",
    nativeName: "Dansk"
  },
  de: {
    name: "German",
    nativeName: "Deutsch"
  },
  dv: {
    name: "Divehi",
    nativeName: "ދިވެހި"
  },
  dz: {
    name: "Dzongkha",
    nativeName: "རྫོང་ཁ"
  },
  ee: {
    name: "Ewe",
    nativeName: "Eʋegbe"
  },
  el: {
    name: "Greek",
    nativeName: "Ελληνικά"
  },
  en: {
    name: "English",
    nativeName: "English"
  },
  eo: {
    name: "Esperanto",
    nativeName: "Esperanto"
  },
  es: {
    name: "Spanish",
    nativeName: "Español"
  },
  et: {
    name: "Estonian",
    nativeName: "eesti"
  },
  eu: {
    name: "Basque",
    nativeName: "euskara"
  },
  fa: {
    name: "Persian",
    nativeName: "فارسی"
  },
  ff: {
    name: "Fula",
    nativeName: "Fulfulde"
  },
  fi: {
    name: "Finnish",
    nativeName: "suomi"
  },
  fj: {
    name: "Fijian",
    nativeName: "vosa Vakaviti"
  },
  fo: {
    name: "Faroese",
    nativeName: "Føroyskt"
  },
  fr: {
    name: "French",
    nativeName: "Français"
  },
  fy: {
    name: "Western Frisian",
    nativeName: "Frysk"
  },
  ga: {
    name: "Irish",
    nativeName: "Gaeilge"
  },
  gd: {
    name: "Scottish Gaelic",
    nativeName: "Gàidhlig"
  },
  gl: {
    name: "Galician",
    nativeName: "galego"
  },
  gn: {
    name: "Guaraní",
    nativeName: "Avañe'ẽ"
  },
  gu: {
    name: "Gujarati",
    nativeName: "ગુજરાતી"
  },
  gv: {
    name: "Manx",
    nativeName: "Gaelg"
  },
  ha: {
    name: "Hausa",
    nativeName: "هَوُسَ"
  },
  he: {
    name: "Hebrew",
    nativeName: "עברית"
  },
  hi: {
    name: "Hindi",
    nativeName: "हिन्दी"
  },
  ho: {
    name: "Hiri Motu",
    nativeName: "Hiri Motu"
  },
  hr: {
    name: "Croatian",
    nativeName: "Hrvatski"
  },
  ht: {
    name: "Haitian",
    nativeName: "Kreyòl ayisyen"
  },
  hu: {
    name: "Hungarian",
    nativeName: "magyar"
  },
  hy: {
    name: "Armenian",
    nativeName: "Հայերեն"
  },
  hz: {
    name: "Herero",
    nativeName: "Otjiherero"
  },
  ia: {
    name: "Interlingua",
    nativeName: "Interlingua"
  },
  id: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia"
  },
  ie: {
    name: "Interlingue",
    nativeName: "Interlingue"
  },
  ig: {
    name: "Igbo",
    nativeName: "Asụsụ Igbo"
  },
  ii: {
    name: "Nuosu",
    nativeName: "ꆈꌠ꒿ Nuosuhxop"
  },
  ik: {
    name: "Inupiaq",
    nativeName: "Iñupiaq"
  },
  io: {
    name: "Ido",
    nativeName: "Ido"
  },
  is: {
    name: "Icelandic",
    nativeName: "Íslenska"
  },
  it: {
    name: "Italian",
    nativeName: "Italiano"
  },
  iu: {
    name: "Inuktitut",
    nativeName: "ᐃᓄᒃᑎᑐᑦ"
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語"
  },
  jv: {
    name: "Javanese",
    nativeName: "basa Jawa"
  },
  ka: {
    name: "Georgian",
    nativeName: "ქართული"
  },
  kg: {
    name: "Kongo",
    nativeName: "Kikongo"
  },
  ki: {
    name: "Kikuyu",
    nativeName: "Gĩkũyũ"
  },
  kj: {
    name: "Kwanyama",
    nativeName: "Kuanyama"
  },
  kk: {
    name: "Kazakh",
    nativeName: "қазақ тілі"
  },
  kl: {
    name: "Kalaallisut",
    nativeName: "kalaallisut"
  },
  km: {
    name: "Khmer",
    nativeName: "ខេមរភាសា"
  },
  kn: {
    name: "Kannada",
    nativeName: "ಕನ್ನಡ"
  },
  ko: {
    name: "Korean",
    nativeName: "한국어"
  },
  kr: {
    name: "Kanuri",
    nativeName: "Kanuri"
  },
  ks: {
    name: "Kashmiri",
    nativeName: "कश्मीरी"
  },
  ku: {
    name: "Kurdish",
    nativeName: "Kurdî"
  },
  kv: {
    name: "Komi",
    nativeName: "коми кыв"
  },
  kw: {
    name: "Cornish",
    nativeName: "Kernewek"
  },
  ky: {
    name: "Kyrgyz",
    nativeName: "Кыргызча"
  },
  la: {
    name: "Latin",
    nativeName: "latine"
  },
  lb: {
    name: "Luxembourgish",
    nativeName: "Lëtzebuergesch"
  },
  lg: {
    name: "Ganda",
    nativeName: "Luganda"
  },
  li: {
    name: "Limburgish",
    nativeName: "Limburgs"
  },
  ln: {
    name: "Lingala",
    nativeName: "Lingála"
  },
  lo: {
    name: "Lao",
    nativeName: "ພາສາລາວ"
  },
  lt: {
    name: "Lithuanian",
    nativeName: "lietuvių kalba"
  },
  lu: {
    name: "Luba-Katanga",
    nativeName: "Kiluba"
  },
  lv: {
    name: "Latvian",
    nativeName: "latviešu valoda"
  },
  mg: {
    name: "Malagasy",
    nativeName: "fiteny malagasy"
  },
  mh: {
    name: "Marshallese",
    nativeName: "Kajin M̧ajeļ"
  },
  mi: {
    name: "Māori",
    nativeName: "te reo Māori"
  },
  mk: {
    name: "Macedonian",
    nativeName: "македонски јазик"
  },
  ml: {
    name: "Malayalam",
    nativeName: "മലയാളം"
  },
  mn: {
    name: "Mongolian",
    nativeName: "Монгол хэл"
  },
  mr: {
    name: "Marathi",
    nativeName: "मराठी"
  },
  ms: {
    name: "Malay",
    nativeName: "Bahasa Melayu"
  },
  mt: {
    name: "Maltese",
    nativeName: "Malti"
  },
  my: {
    name: "Burmese",
    nativeName: "ဗမာစာ"
  },
  na: {
    name: "Nauru",
    nativeName: "Dorerin Naoero"
  },
  nb: {
    name: "Norwegian Bokmål",
    nativeName: "Norsk bokmål"
  },
  nd: {
    name: "Northern Ndebele",
    nativeName: "isiNdebele"
  },
  ne: {
    name: "Nepali",
    nativeName: "नेपाली"
  },
  ng: {
    name: "Ndonga",
    nativeName: "Owambo"
  },
  nl: {
    name: "Dutch",
    nativeName: "Nederlands"
  },
  nn: {
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk"
  },
  no: {
    name: "Norwegian",
    nativeName: "Norsk"
  },
  nr: {
    name: "Southern Ndebele",
    nativeName: "isiNdebele"
  },
  nv: {
    name: "Navajo",
    nativeName: "Diné bizaad"
  },
  ny: {
    name: "Chichewa",
    nativeName: "chiCheŵa"
  },
  oc: {
    name: "Occitan",
    nativeName: "occitan"
  },
  oj: {
    name: "Ojibwe",
    nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ"
  },
  om: {
    name: "Oromo",
    nativeName: "Afaan Oromoo"
  },
  or: {
    name: "Oriya",
    nativeName: "ଓଡ଼ିଆ"
  },
  os: {
    name: "Ossetian",
    nativeName: "ирон æвзаг"
  },
  pa: {
    name: "Panjabi",
    nativeName: "ਪੰਜਾਬੀ"
  },
  pi: {
    name: "Pāli",
    nativeName: "पाऴि"
  },
  pl: {
    name: "Polish",
    nativeName: "Polski"
  },
  ps: {
    name: "Pashto",
    nativeName: "پښتو"
  },
  pt: {
    name: "Portuguese",
    nativeName: "Português"
  },
  qu: {
    name: "Quechua",
    nativeName: "Runa Simi"
  },
  rm: {
    name: "Romansh",
    nativeName: "rumantsch grischun"
  },
  rn: {
    name: "Kirundi",
    nativeName: "Ikirundi"
  },
  ro: {
    name: "Romanian",
    nativeName: "Română"
  },
  ru: {
    name: "Russian",
    nativeName: "Русский"
  },
  rw: {
    name: "Kinyarwanda",
    nativeName: "Ikinyarwanda"
  },
  sa: {
    name: "Sanskrit",
    nativeName: "संस्कृतम्"
  },
  sc: {
    name: "Sardinian",
    nativeName: "sardu"
  },
  sd: {
    name: "Sindhi",
    nativeName: "सिन्धी"
  },
  se: {
    name: "Northern Sami",
    nativeName: "Davvisámegiella"
  },
  sg: {
    name: "Sango",
    nativeName: "yângâ tî sängö"
  },
  si: {
    name: "Sinhala",
    nativeName: "සිංහල"
  },
  sk: {
    name: "Slovak",
    nativeName: "slovenčina"
  },
  sl: {
    name: "Slovenian",
    nativeName: "slovenščina"
  },
  sm: {
    name: "Samoan",
    nativeName: "gagana fa'a Samoa"
  },
  sn: {
    name: "Shona",
    nativeName: "chiShona"
  },
  so: {
    name: "Somali",
    nativeName: "Soomaaliga"
  },
  sq: {
    name: "Albanian",
    nativeName: "Shqip"
  },
  sr: {
    name: "Serbian",
    nativeName: "српски језик"
  },
  ss: {
    name: "Swati",
    nativeName: "SiSwati"
  },
  st: {
    name: "Southern Sotho",
    nativeName: "Sesotho"
  },
  su: {
    name: "Sundanese",
    nativeName: "Basa Sunda"
  },
  sv: {
    name: "Swedish",
    nativeName: "Svenska"
  },
  sw: {
    name: "Swahili",
    nativeName: "Kiswahili"
  },
  ta: {
    name: "Tamil",
    nativeName: "தமிழ்"
  },
  te: {
    name: "Telugu",
    nativeName: "తెలుగు"
  },
  tg: {
    name: "Tajik",
    nativeName: "тоҷикӣ"
  },
  th: {
    name: "Thai",
    nativeName: "ไทย"
  },
  ti: {
    name: "Tigrinya",
    nativeName: "ትግርኛ"
  },
  tk: {
    name: "Turkmen",
    nativeName: "Türkmençe"
  },
  tl: {
    name: "Tagalog",
    nativeName: "Wikang Tagalog"
  },
  tn: {
    name: "Tswana",
    nativeName: "Setswana"
  },
  to: {
    name: "Tonga",
    nativeName: "faka Tonga"
  },
  tr: {
    name: "Turkish",
    nativeName: "Türkçe"
  },
  ts: {
    name: "Tsonga",
    nativeName: "Xitsonga"
  },
  tt: {
    name: "Tatar",
    nativeName: "татар теле"
  },
  tw: {
    name: "Twi",
    nativeName: "Twi"
  },
  ty: {
    name: "Tahitian",
    nativeName: "Reo Tahiti"
  },
  ug: {
    name: "Uyghur",
    nativeName: "ئۇيغۇرچە‎"
  },
  uk: {
    name: "Ukrainian",
    nativeName: "Українська"
  },
  ur: {
    name: "Urdu",
    nativeName: "اردو"
  },
  uz: {
    name: "Uzbek",
    nativeName: "Ўзбек"
  },
  ve: {
    name: "Venda",
    nativeName: "Tshivenḓa"
  },
  vi: {
    name: "Vietnamese",
    nativeName: "Tiếng Việt"
  },
  vo: {
    name: "Volapük",
    nativeName: "Volapük"
  },
  wa: {
    name: "Walloon",
    nativeName: "walon"
  },
  wo: {
    name: "Wolof",
    nativeName: "Wollof"
  },
  xh: {
    name: "Xhosa",
    nativeName: "isiXhosa"
  },
  yi: {
    name: "Yiddish",
    nativeName: "ייִדיש"
  },
  yo: {
    name: "Yoruba",
    nativeName: "Yorùbá"
  },
  za: {
    name: "Zhuang",
    nativeName: "Saɯ cueŋƅ"
  },
  zh: {
    name: "Chinese",
    nativeName: "中文"
  },
  zu: {
    name: "Zulu",
    nativeName: "isiZulu"
  }
};
var gc = xc;
const pr = gc, e0 = {}, ra = {}, t0 = [], r0 = [], a0 = [];
for (const e in pr) {
  const { name: t, nativeName: r } = pr[e];
  e0[e] = ra[t.toLowerCase()] = ra[r.toLowerCase()] = { code: e, name: t, nativeName: r }, t0.push(e), r0.push(t), a0.push(r);
}
var Ac = class zr {
  static getLanguages(t = []) {
    return t.map(
      (r) => zr.validate(r) ? Object.assign({}, e0[r]) : { code: r, name: "", nativeName: "" }
    );
  }
  static getName(t) {
    return zr.validate(t) ? pr[t].name : "";
  }
  static getAllNames() {
    return r0.slice();
  }
  static getNativeName(t) {
    return zr.validate(t) ? pr[t].nativeName : "";
  }
  static getAllNativeNames() {
    return a0.slice();
  }
  static getCode(t) {
    return t = t.toLowerCase(), ra.hasOwnProperty(t) ? ra[t].code : "";
  }
  static getAllCodes() {
    return t0.slice();
  }
  static validate(t) {
    return pr.hasOwnProperty(t);
  }
};
const n0 = /* @__PURE__ */ Ut(Ac), Cc = {
  srt: "srt",
  vtt: "vtt"
};
function Ht(e) {
  const r = Object.keys(Cc).find((a) => e.endsWith(`.${a}`));
  return r || null;
}
function lt(e) {
  const t = n0.getCode(e);
  return t.length === 0 ? null : t;
}
function _c(e) {
  return e ? n0.validate(e) : !1;
}
function _a(e) {
  const t = {};
  return e.filter((r) => t[r.language] ? !1 : (t[r.language] = !0, !0));
}
async function aa(e, t, r) {
  try {
    const [a, n, s] = atob(r).split(".").map((d, c) => c === 0 ? d : Number(d) || null);
    if (!a) return e;
    const i = await t.proxiedFetcher(
      `https://rest.opensubtitles.org/search/${n && s ? `episode-${s}/` : ""}imdbid-${a.slice(2)}${n && s ? `/season-${n}` : ""}`,
      {
        headers: {
          "X-User-Agent": "VLSub 0.10.2"
        }
      }
    ), o = [];
    for (const d of i) {
      const c = d.SubDownloadLink.replace(".gz", "").replace("download/", "download/subencoding-utf8/"), l = lt(d.LanguageName);
      !c || !l || o.push({
        id: c,
        opensubtitles: !0,
        url: c,
        type: d.SubFormat || "srt",
        hasCorsRestrictions: !1,
        language: l
      });
    }
    return [...e, ..._a(o)];
  } catch {
    return e;
  }
}
function na(e) {
  return !!(!e.flags.includes(ae.CORS_ALLOWED) || e.headers && Object.keys(e.headers).length > 0);
}
function sa(e) {
  const t = e.headers && Object.keys(e.headers).length > 0 ? e.headers : void 0, r = {
    ...e.type === "hls" && { depth: e.proxyDepth ?? 0 }
  }, a = {
    headers: t,
    options: r
  };
  return e.type === "hls" && (a.type = "hls", a.url = e.playlist, e.playlist = `https://proxy.nsbx.ru/proxy?${new URLSearchParams({ payload: Buffer.from(JSON.stringify(a)).toString("base64url") })}`), e.type === "file" && (a.type = "mp4", Object.entries(e.qualities).forEach((n) => {
    a.url = n[1].url, n[1].url = `https://proxy.nsbx.ru/proxy?${new URLSearchParams({ payload: Buffer.from(JSON.stringify(a)).toString("base64url") })}`;
  })), e.headers = {}, e.flags = [ae.CORS_ALLOWED], e;
}
function Ie(e) {
  const t = [];
  return e.scrapeMovie && t.push("movie"), e.scrapeShow && t.push("show"), {
    ...e,
    type: "source",
    disabled: e.disabled ?? !1,
    externalSource: e.externalSource ?? !1,
    mediaTypes: t
  };
}
function ge(e) {
  return {
    ...e,
    type: "embed",
    disabled: e.disabled ?? !1,
    mediaTypes: void 0
  };
}
const Sc = [
  {
    id: "delta",
    rank: 699
  },
  {
    id: "alpha",
    rank: 695
  }
];
function yc(e) {
  return ge({
    id: e.id,
    name: e.id.charAt(0).toUpperCase() + e.id.slice(1),
    rank: e.rank,
    disabled: !1,
    async scrape(t) {
      const [r, a] = t.url.split("|"), n = await t.fetcher.full("/search", {
        query: {
          query: r,
          provider: e.id
        },
        credentials: "include",
        baseUrl: a
      });
      if (n.statusCode === 429) throw new Error("Rate limited");
      if (n.statusCode !== 200) throw new z("Failed to search");
      t.progress(50);
      const s = await t.fetcher("/provider", {
        query: {
          resourceId: n.body.url,
          provider: e.id
        },
        credentials: "include",
        baseUrl: a
      });
      return t.progress(100), s;
    }
  });
}
const [s0, i0] = Sc.map(yc), Nt = "https://embed.warezcdn.link", ka = "https://warezcdn.link/player", Nc = "https://workerproxy.warezcdn.workers.dev";
function Ic(e) {
  let t = atob(e);
  t = t.trim(), t = t.split("").reverse().join("");
  let r = t.slice(-5);
  return r = r.split("").reverse().join(""), t = t.slice(0, -5), `${t}${r}`;
}
async function u0(e) {
  var i;
  const r = (i = (await e.proxiedFetcher("/player.php", {
    baseUrl: ka,
    headers: {
      Referer: `${ka}/getEmbed.php?${new URLSearchParams({
        id: e.url,
        sv: "warezcdn"
      })}`
    },
    query: {
      id: e.url
    }
  })).match(/let allowanceKey = "(.*?)";/)) == null ? void 0 : i[1];
  if (!r) throw new z("Failed to get allowanceKey");
  const a = await e.proxiedFetcher("/functions.php", {
    baseUrl: ka,
    method: "POST",
    body: new URLSearchParams({
      getVideo: e.url,
      key: r
    })
  }), n = JSON.parse(a);
  if (!n.id) throw new z("can't get stream id");
  const s = Ic(n.id);
  if (!s) throw new z("can't get file id");
  return s;
}
const vc = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
async function Dc(e, t) {
  for (const r of vc) {
    const a = `https://cloclo${r}.cloud.mail.ru/weblink/view/${t}`;
    if ((await e.proxiedFetcher.full(a, {
      method: "GET",
      headers: {
        Range: "bytes=0-1"
      }
    })).statusCode === 206) return a;
  }
  return null;
}
const as = ge({
  id: "warezcdnembedmp4",
  // WarezCDN is both a source and an embed host
  name: "WarezCDN MP4",
  // method no longer works
  rank: 82,
  disabled: !0,
  async scrape(e) {
    const t = await u0(e);
    if (!t) throw new z("can't get file id");
    const r = await Dc(e, t);
    if (!r) throw new z("can't get stream id");
    return {
      stream: [
        {
          id: "primary",
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: `${Nc}/?${new URLSearchParams({
                url: r
              })}`
            }
          },
          type: "file",
          flags: [ae.CORS_ALLOWED]
        }
      ]
    };
  }
}), Bn = "https://api.whvx.net";
async function Hs(e) {
  var n;
  const t = {
    title: e.media.title,
    releaseYear: e.media.releaseYear,
    tmdbId: e.media.tmdbId,
    imdbId: e.media.imdbId,
    type: e.media.type,
    ...e.media.type === "show" && {
      season: e.media.season.number.toString(),
      episode: e.media.episode.number.toString()
    }
  }, r = await e.fetcher("/status", { baseUrl: Bn });
  if (((n = r.providers) == null ? void 0 : n.length) === 0) throw new z("No providers available");
  return {
    embeds: r.providers.map((s) => ({
      embedId: s,
      url: JSON.stringify(t)
    }))
  };
}
const Oc = Ie({
  id: "whvx",
  name: "VidBinge",
  rank: 270,
  disabled: !0,
  externalSource: !0,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Hs,
  scrapeShow: Hs
}), Rc = [
  {
    id: "nova",
    rank: 720
  },
  {
    id: "astra",
    rank: 710
  },
  {
    id: "orion",
    rank: 700
  }
], Xs = {
  Origin: "https://www.vidbinge.com",
  Referer: "https://www.vidbinge.com"
};
function wc(e) {
  return ge({
    id: e.id,
    name: e.id.charAt(0).toUpperCase() + e.id.slice(1),
    rank: e.rank,
    disabled: e.disabled,
    async scrape(t) {
      let r = 50;
      const a = setInterval(() => {
        r < 100 && (r += 1, t.progress(r));
      }, 100);
      try {
        const n = await t.fetcher.full(
          `${Bn}/search?query=${encodeURIComponent(t.url)}&provider=${e.id}`,
          { headers: Xs }
        );
        if (n.statusCode === 429)
          throw new Error("Rate limited");
        if (n.statusCode !== 200)
          throw new z("Failed to search");
        const s = await t.fetcher(
          `${Bn}/source?resourceId=${encodeURIComponent(n.body.url)}&provider=${e.id}`,
          { headers: Xs }
        );
        return clearInterval(a), t.progress(100), s;
      } catch {
        throw clearInterval(a), t.progress(100), new z("Failed to search");
      }
    }
  });
}
const [o0, c0, d0] = Rc.map(wc), l0 = [
  as.id,
  s0.id,
  i0.id,
  o0.id,
  c0.id,
  d0.id
];
function ia(e) {
  return e ? e.type === "hls" ? !!e.playlist : e.type === "file" ? Object.values(e.qualities).filter((r) => r.url.length > 0).length !== 0 : !1 : !1;
}
async function Pn(e, t, r) {
  if (l0.includes(r)) return e;
  if (e.type === "hls") {
    if (e.playlist.startsWith("data:")) return e;
    const a = await t.proxiedFetcher.full(e.playlist, {
      method: "GET",
      headers: {
        ...e.preferredHeaders,
        ...e.headers
      }
    });
    return a.statusCode < 200 || a.statusCode >= 400 ? null : e;
  }
  if (e.type === "file") {
    const a = await Promise.all(
      Object.values(e.qualities).map(
        (s) => t.proxiedFetcher.full(s.url, {
          method: "GET",
          headers: {
            ...e.preferredHeaders,
            ...e.headers,
            Range: "bytes=0-1"
          }
        })
      )
    ), n = e.qualities;
    return Object.keys(e.qualities).forEach((s, i) => {
      (a[i].statusCode < 200 || a[i].statusCode >= 400) && delete n[s];
    }), Object.keys(n).length === 0 ? null : { ...e, qualities: n };
  }
  return null;
}
async function f0(e, t, r) {
  return l0.includes(r) ? e : (await Promise.all(e.map((a) => Pn(a, t, r)))).filter(
    (a) => a !== null
  );
}
async function Lc(e, t) {
  const r = e.sources.find((s) => t.id === s.id);
  if (!r) throw new Error("Source with ID not found");
  if (t.media.type === "movie" && !r.scrapeMovie) throw new Error("Source is not compatible with movies");
  if (t.media.type === "show" && !r.scrapeShow) throw new Error("Source is not compatible with shows");
  const a = {
    fetcher: t.fetcher,
    proxiedFetcher: t.proxiedFetcher,
    progress(s) {
      var i, o;
      (o = (i = t.events) == null ? void 0 : i.update) == null || o.call(i, {
        id: r.id,
        percentage: s,
        status: "pending"
      });
    }
  };
  let n = null;
  if (t.media.type === "movie" && r.scrapeMovie ? n = await r.scrapeMovie({
    ...a,
    media: t.media
  }) : t.media.type === "show" && r.scrapeShow && (n = await r.scrapeShow({
    ...a,
    media: t.media
  })), n != null && n.stream && (n.stream = n.stream.filter((s) => ia(s)).filter((s) => _r(t.features, s.flags)), n.stream = n.stream.map(
    (s) => na(s) && t.proxyStreams ? sa(s) : s
  )), !n) throw new Error("output is null");
  if (n.embeds = n.embeds.filter((s) => {
    const i = e.embeds.find((o) => o.id === s.embedId);
    return !(!i || i.disabled);
  }), !t.disableOpensubtitles)
    for (const s of n.embeds)
      s.url = `${s.url}${btoa("MEDIA=")}${btoa(
        `${t.media.imdbId}${t.media.type === "show" ? `.${t.media.season.number}.${t.media.episode.number}` : ""}`
      )}`;
  if ((!n.stream || n.stream.length === 0) && n.embeds.length === 0)
    throw new z("No streams found");
  if (n.stream && n.stream.length > 0 && n.embeds.length === 0) {
    const s = await f0(n.stream, t, r.id);
    if (s.length === 0) throw new z("No playable streams found");
    if (!t.disableOpensubtitles)
      for (const i of s)
        i.captions = await aa(
          i.captions,
          t,
          btoa(
            `${t.media.imdbId}${t.media.type === "show" ? `.${t.media.season.number}.${t.media.episode.number}` : ""}`
          )
        );
    n.stream = s;
  }
  return n;
}
async function Bc(e, t) {
  const r = e.embeds.find((o) => t.id === o.id);
  if (!r) throw new Error("Embed with ID not found");
  let a = t.url, n;
  t.url.includes(btoa("MEDIA=")) && ([a, n] = a.split(btoa("MEDIA=")));
  const s = await r.scrape({
    fetcher: t.fetcher,
    proxiedFetcher: t.proxiedFetcher,
    url: a,
    progress(o) {
      var d, c;
      (c = (d = t.events) == null ? void 0 : d.update) == null || c.call(d, {
        id: r.id,
        percentage: o,
        status: "pending"
      });
    }
  });
  if (s.stream = s.stream.filter((o) => ia(o)).filter((o) => _r(t.features, o.flags)), s.stream.length === 0) throw new z("No streams found");
  s.stream = s.stream.map(
    (o) => na(o) && t.proxyStreams ? sa(o) : o
  );
  const i = await f0(s.stream, t, r.id);
  if (i.length === 0) throw new z("No playable streams found");
  if (n && !t.disableOpensubtitles)
    for (const o of i)
      o.captions = await aa(o.captions, t, n);
  return s.stream = i, s;
}
function qs(e, t) {
  const r = [...t];
  return r.sort((a, n) => {
    const s = e.indexOf(a.id), i = e.indexOf(n.id);
    return s >= 0 && i >= 0 ? s - i : i >= 0 ? 1 : s >= 0 ? -1 : n.rank - a.rank;
  }), r;
}
async function Pc(e, t) {
  var o, d, c, l, b, m, f, E, A, p, C, h, _, v;
  const r = qs(t.sourceOrder ?? [], e.sources).filter((w) => t.media.type === "movie" ? !!w.scrapeMovie : t.media.type === "show" ? !!w.scrapeShow : !1), a = qs(t.embedOrder ?? [], e.embeds), n = a.map((w) => w.id);
  let s = "";
  const i = {
    fetcher: t.fetcher,
    proxiedFetcher: t.proxiedFetcher,
    progress(w) {
      var L, M;
      (M = (L = t.events) == null ? void 0 : L.update) == null || M.call(L, {
        id: s,
        percentage: w,
        status: "pending"
      });
    }
  };
  (d = (o = t.events) == null ? void 0 : o.init) == null || d.call(o, {
    sourceIds: r.map((w) => w.id)
  });
  for (const w of r) {
    (l = (c = t.events) == null ? void 0 : c.start) == null || l.call(c, w.id), s = w.id;
    let L = null;
    try {
      if (t.media.type === "movie" && w.scrapeMovie ? L = await w.scrapeMovie({
        ...i,
        media: t.media
      }) : t.media.type === "show" && w.scrapeShow && (L = await w.scrapeShow({
        ...i,
        media: t.media
      })), L && (L.stream = (L.stream ?? []).filter(ia).filter((F) => _r(t.features, F.flags)), L.stream = L.stream.map(
        (F) => na(F) && t.proxyStreams ? sa(F) : F
      )), !L || !((b = L.stream) != null && b.length) && !L.embeds.length)
        throw new z("No streams found");
    } catch (F) {
      const K = {
        id: w.id,
        percentage: 100,
        status: F instanceof z ? "notfound" : "failure",
        reason: F instanceof z ? F.message : void 0,
        error: F instanceof z ? void 0 : F
      };
      (f = (m = t.events) == null ? void 0 : m.update) == null || f.call(m, K);
      continue;
    }
    if (!L) throw new Error("Invalid media type");
    if ((E = L.stream) != null && E[0]) {
      const F = await Pn(L.stream[0], t, w.id);
      if (!F) throw new z("No streams found");
      return t.disableOpensubtitles || (F.captions = await aa(
        F.captions,
        t,
        btoa(
          `${t.media.imdbId}${t.media.type === "show" ? `.${t.media.season.number}.${t.media.episode.number}` : ""}`
        )
      )), {
        sourceId: w.id,
        stream: F
      };
    }
    const M = L.embeds.filter((F) => {
      const K = e.embeds.find((P) => P.id === F.embedId);
      return K && !K.disabled;
    }).sort((F, K) => n.indexOf(F.embedId) - n.indexOf(K.embedId));
    M.length > 0 && ((p = (A = t.events) == null ? void 0 : A.discoverEmbeds) == null || p.call(A, {
      embeds: M.map((F, K) => ({
        id: [w.id, K].join("-"),
        embedScraperId: F.embedId
      })),
      sourceId: w.id
    }));
    for (const [F, K] of M.entries()) {
      const P = a.find((W) => W.id === K.embedId);
      if (!P) throw new Error("Invalid embed returned");
      const U = [w.id, F].join("-");
      (h = (C = t.events) == null ? void 0 : C.start) == null || h.call(C, U), s = U;
      let H;
      try {
        if (H = await P.scrape({
          ...i,
          url: K.url
        }), H.stream = H.stream.filter(ia).filter((re) => _r(t.features, re.flags)), H.stream = H.stream.map(
          (re) => na(re) && t.proxyStreams ? sa(re) : re
        ), H.stream.length === 0)
          throw new z("No streams found");
        const W = await Pn(H.stream[0], t, K.embedId);
        if (!W) throw new z("No streams found");
        t.disableOpensubtitles || (W.captions = await aa(
          W.captions,
          t,
          btoa(
            `${t.media.imdbId}${t.media.type === "show" ? `.${t.media.season.number}.${t.media.episode.number}` : ""}`
          )
        )), H.stream = [W];
      } catch (W) {
        const re = {
          id: U,
          percentage: 100,
          status: W instanceof z ? "notfound" : "failure",
          reason: W instanceof z ? W.message : void 0,
          error: W instanceof z ? void 0 : W
        };
        (v = (_ = t.events) == null ? void 0 : _.update) == null || v.call(_, re);
        continue;
      }
      return {
        sourceId: w.id,
        embedId: P.id,
        stream: H.stream[0]
      };
    }
  }
  return null;
}
function h0(e) {
  const t = {
    embeds: e.embeds,
    sources: e.sources
  }, r = {
    features: e.features,
    fetcher: Us(e.fetcher),
    proxiedFetcher: Us(e.proxiedFetcher ?? e.fetcher),
    proxyStreams: e.proxyStreams
  };
  return {
    runAll(a) {
      return Pc(t, {
        ...r,
        ...a
      });
    },
    runSourceScraper(a) {
      return Lc(t, {
        ...r,
        ...a
      });
    },
    runEmbedScraper(a) {
      return Bc(t, {
        ...r,
        ...a
      });
    },
    getMetadata(a) {
      return Ec(t, a);
    },
    listSources() {
      return mc(t);
    },
    listEmbeds() {
      return pc(t);
    }
  };
}
let Fc = (e) => crypto.getRandomValues(new Uint8Array(e)), kc = (e, t, r) => {
  let a = (2 << Math.log(e.length - 1) / Math.LN2) - 1, n = -~(1.6 * a * t / e.length);
  return (s = t) => {
    let i = "";
    for (; ; ) {
      let o = r(n), d = n | 0;
      for (; d--; )
        if (i += e[o[d] & a] || "", i.length === s) return i;
    }
  };
}, m0 = (e, t = 21) => kc(e, t, Fc);
const Mc = m0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 10), Hr = "https://d000d.com", Fn = ge({
  id: "dood",
  name: "dood",
  rank: 173,
  async scrape(e) {
    var c, l;
    let t = e.url;
    e.url.includes("primewire") && (t = (await e.proxiedFetcher.full(e.url)).finalUrl);
    const r = t.split("/d/")[1] || t.split("/e/")[1], a = await e.proxiedFetcher(`/e/${r}`, {
      method: "GET",
      baseUrl: Hr
    }), n = (c = a.match(/\?token=([^&]+)&expiry=/)) == null ? void 0 : c[1], s = (l = a.match(/\$\.get\('\/pass_md5([^']+)/)) == null ? void 0 : l[1], i = a.match(/thumbnails:\s\{\s*vtt:\s'([^']*)'/), d = `${await e.proxiedFetcher(`/pass_md5${s}`, {
      headers: {
        Referer: `${Hr}/e/${r}`
      },
      method: "GET",
      baseUrl: Hr
    })}${Mc()}?token=${n}&expiry=${Date.now()}`;
    if (!d.startsWith("http")) throw new Error("Invalid URL");
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [],
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: d
            }
          },
          headers: {
            Referer: Hr
          },
          ...i ? {
            thumbnailTrack: {
              type: "vtt",
              url: `https:${i[1]}`
            }
          } : {}
        }
      ]
    };
  }
});
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
var ft = Sr.unpack = Sr.detect = void 0;
function Uc(e) {
  return e.replace(" ", "").startsWith("eval(function(p,a,c,k,e,");
}
Sr.detect = Uc;
function Hc(e) {
  let { payload: t, symtab: r, radix: a, count: n } = o(e);
  if (n != r.length)
    throw Error("Malformed p.a.c.k.e.r. symtab.");
  let s;
  try {
    s = new Xc(a);
  } catch {
    throw Error("Unknown p.a.c.k.e.r. encoding.");
  }
  function i(c) {
    const l = c;
    let b;
    return a == 1 ? b = r[parseInt(l)] : b = r[s.unbase(l)], b || l;
  }
  return e = t.replace(/\b\w+\b/g, i), e;
  function o(c) {
    const l = [
      /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\), *(\d+), *(.*)\)\)/,
      /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\)/
    ];
    for (const b of l) {
      const m = b.exec(c);
      if (m) {
        let f = m;
        f[2] == "[]";
        try {
          return {
            payload: f[1],
            symtab: f[4].split("|"),
            radix: parseInt(f[2]),
            count: parseInt(f[3])
          };
        } catch {
          throw Error("Corrupted p.a.c.k.e.r. data.");
        }
      }
    }
    throw Error("Could not make sense of p.a.c.k.e.r data (unexpected code structure)");
  }
  function d(c) {
    return c;
  }
}
ft = Sr.unpack = Hc;
class Xc {
  constructor(t) {
    if (this.ALPHABET = {
      62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      95: "' !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'"
    }, this.dictionary = {}, this.base = t, 36 < t && t < 62 && (this.ALPHABET[t] = this.ALPHABET[t] || this.ALPHABET[62].substr(0, t)), 2 <= t && t <= 36)
      this.unbase = (r) => parseInt(r, t);
    else {
      try {
        [...this.ALPHABET[t]].forEach((r, a) => {
          this.dictionary[r] = a;
        });
      } catch {
        throw Error("Unsupported base encoding.");
      }
      this.unbase = this._dictunbaser;
    }
  }
  _dictunbaser(t) {
    let r = 0;
    return [...t].reverse().forEach((a, n) => {
      r = r + Math.pow(this.base, n) * this.dictionary[a];
    }), r;
  }
}
const qc = /eval\((.*)\)/g, Yc = /file:"(.*?)"/g, $c = /\{file:"([^"]+)",kind:"thumbnails"\}/g, Vc = ge({
  id: "dropload",
  name: "Dropload",
  rank: 120,
  scrape: async (e) => {
    const t = await e.proxiedFetcher.full(e.url, {
      headers: {
        referer: e.url
      }
    }), r = new URL(t.finalUrl), n = t.body.match(qc);
    if (!n) throw new Error("Failed to find eval code");
    const s = ft(n[1]), i = Yc.exec(s), o = $c.exec(s);
    if (!(i != null && i[1])) throw new Error("Failed to find file");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: i[1],
          flags: [ae.IP_LOCKED, ae.CORS_ALLOWED],
          captions: [],
          ...o ? {
            thumbnailTrack: {
              type: "vtt",
              url: r.origin + o[1]
            }
          } : {}
        }
      ]
    };
  }
}), Wc = "https://www.febbox.com";
function p0(e) {
  const [t, r, a, n] = e.slice(1).split("/"), s = a ? parseInt(a, 10) : void 0, i = n ? parseInt(n, 10) : void 0;
  return {
    type: t,
    id: r,
    season: s,
    episode: i
  };
}
async function Ys(e, t, r) {
  var s;
  const a = {
    share_key: t,
    pwd: ""
  };
  return r && (a.parent_id = r.toString(), a.page = "1"), ((s = (await e.proxiedFetcher("/file/file_share_list", {
    headers: {
      "accept-language": "en"
      // without this header, the request is marked as a webscraper
    },
    baseUrl: Wc,
    query: a
  })).data) == null ? void 0 : s.file_list) ?? [];
}
function $s(e) {
  return e.ext === "mp4" || e.ext === "mkv";
}
async function Gc(e, t, r, a, n) {
  const s = await Ys(e, t);
  if (r === "show") {
    const i = s.find((b) => b.is_dir ? b.file_name.toLowerCase() === `season ${a}` : !1);
    if (!i) return [];
    const o = await Ys(e, t, i.fid), d = (a == null ? void 0 : a.toString()) ?? "0", c = (n == null ? void 0 : n.toString()) ?? "0", l = new RegExp(`[Ss]0*${d}[Ee]0*${c}`);
    return o.filter((b) => !(b.is_dir || !b.file_name.match(l))).filter($s);
  }
  return s.filter((i) => !i.is_dir).filter($s);
}
const jc = atob("d0VpcGhUbiE="), E0 = atob("MTIzZDZjZWRmNjI2ZHk1NDIzM2FhMXc2"), Vs = [
  atob("aHR0cHM6Ly9zaG93Ym94LnNoZWd1Lm5ldC9hcGkvYXBpX2NsaWVudC9pbmRleC8="),
  atob("aHR0cHM6Ly9tYnBhcGkuc2hlZ3UubmV0L2FwaS9hcGlfY2xpZW50L2luZGV4Lw==")
], Ws = atob("bW92aWVib3g="), Kc = atob("Y29tLnRkby5zaG93Ym94"), Gs = [atob("bWJwaW1hZ2VzLmNodWF4aW4uY29t"), atob("aW1hZ2VzLnNoZWd1Lm5ldA==")], zc = "https://www.showbox.media";
var b0 = { exports: {} };
function Qc(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ma = { exports: {} };
const Zc = {}, Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zc
}, Symbol.toStringTag, { value: "Module" })), ed = /* @__PURE__ */ Tc(Jc);
var js;
function _e() {
  return js || (js = 1, function(e, t) {
    (function(r, a) {
      e.exports = a();
    })(Ee, function() {
      var r = r || function(a, n) {
        var s;
        if (typeof window < "u" && window.crypto && (s = window.crypto), typeof self < "u" && self.crypto && (s = self.crypto), typeof globalThis < "u" && globalThis.crypto && (s = globalThis.crypto), !s && typeof window < "u" && window.msCrypto && (s = window.msCrypto), !s && typeof Ee < "u" && Ee.crypto && (s = Ee.crypto), !s && typeof Qc == "function")
          try {
            s = ed;
          } catch {
          }
        var i = function() {
          if (s) {
            if (typeof s.getRandomValues == "function")
              try {
                return s.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof s.randomBytes == "function")
              try {
                return s.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, o = Object.create || /* @__PURE__ */ function() {
          function h() {
          }
          return function(_) {
            var v;
            return h.prototype = _, v = new h(), h.prototype = null, v;
          };
        }(), d = {}, c = d.lib = {}, l = c.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(h) {
              var _ = o(this);
              return h && _.mixIn(h), (!_.hasOwnProperty("init") || this.init === _.init) && (_.init = function() {
                _.$super.init.apply(this, arguments);
              }), _.init.prototype = _, _.$super = this, _;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var h = this.extend();
              return h.init.apply(h, arguments), h;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(h) {
              for (var _ in h)
                h.hasOwnProperty(_) && (this[_] = h[_]);
              h.hasOwnProperty("toString") && (this.toString = h.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), b = c.WordArray = l.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(h, _) {
            h = this.words = h || [], _ != n ? this.sigBytes = _ : this.sigBytes = h.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(h) {
            return (h || f).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(h) {
            var _ = this.words, v = h.words, w = this.sigBytes, L = h.sigBytes;
            if (this.clamp(), w % 4)
              for (var M = 0; M < L; M++) {
                var F = v[M >>> 2] >>> 24 - M % 4 * 8 & 255;
                _[w + M >>> 2] |= F << 24 - (w + M) % 4 * 8;
              }
            else
              for (var K = 0; K < L; K += 4)
                _[w + K >>> 2] = v[K >>> 2];
            return this.sigBytes += L, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var h = this.words, _ = this.sigBytes;
            h[_ >>> 2] &= 4294967295 << 32 - _ % 4 * 8, h.length = a.ceil(_ / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var h = l.clone.call(this);
            return h.words = this.words.slice(0), h;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(h) {
            for (var _ = [], v = 0; v < h; v += 4)
              _.push(i());
            return new b.init(_, h);
          }
        }), m = d.enc = {}, f = m.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(h) {
            for (var _ = h.words, v = h.sigBytes, w = [], L = 0; L < v; L++) {
              var M = _[L >>> 2] >>> 24 - L % 4 * 8 & 255;
              w.push((M >>> 4).toString(16)), w.push((M & 15).toString(16));
            }
            return w.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(h) {
            for (var _ = h.length, v = [], w = 0; w < _; w += 2)
              v[w >>> 3] |= parseInt(h.substr(w, 2), 16) << 24 - w % 8 * 4;
            return new b.init(v, _ / 2);
          }
        }, E = m.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(h) {
            for (var _ = h.words, v = h.sigBytes, w = [], L = 0; L < v; L++) {
              var M = _[L >>> 2] >>> 24 - L % 4 * 8 & 255;
              w.push(String.fromCharCode(M));
            }
            return w.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(h) {
            for (var _ = h.length, v = [], w = 0; w < _; w++)
              v[w >>> 2] |= (h.charCodeAt(w) & 255) << 24 - w % 4 * 8;
            return new b.init(v, _);
          }
        }, A = m.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(h) {
            try {
              return decodeURIComponent(escape(E.stringify(h)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(h) {
            return E.parse(unescape(encodeURIComponent(h)));
          }
        }, p = c.BufferedBlockAlgorithm = l.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new b.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(h) {
            typeof h == "string" && (h = A.parse(h)), this._data.concat(h), this._nDataBytes += h.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(h) {
            var _, v = this._data, w = v.words, L = v.sigBytes, M = this.blockSize, F = M * 4, K = L / F;
            h ? K = a.ceil(K) : K = a.max((K | 0) - this._minBufferSize, 0);
            var P = K * M, U = a.min(P * 4, L);
            if (P) {
              for (var H = 0; H < P; H += M)
                this._doProcessBlock(w, H);
              _ = w.splice(0, P), v.sigBytes -= U;
            }
            return new b.init(_, U);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var h = l.clone.call(this);
            return h._data = this._data.clone(), h;
          },
          _minBufferSize: 0
        });
        c.Hasher = p.extend({
          /**
           * Configuration options.
           */
          cfg: l.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(h) {
            this.cfg = this.cfg.extend(h), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            p.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(h) {
            return this._append(h), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(h) {
            h && this._append(h);
            var _ = this._doFinalize();
            return _;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(h) {
            return function(_, v) {
              return new h.init(v).finalize(_);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(h) {
            return function(_, v) {
              return new C.HMAC.init(h, v).finalize(_);
            };
          }
        });
        var C = d.algo = {};
        return d;
      }(Math);
      return r;
    });
  }(Ma)), Ma.exports;
}
var Ua = { exports: {} }, Ks;
function Sa() {
  return Ks || (Ks = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function(a) {
        var n = r, s = n.lib, i = s.Base, o = s.WordArray, d = n.x64 = {};
        d.Word = i.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(c, l) {
            this.high = c, this.low = l;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), d.WordArray = i.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(c, l) {
            c = this.words = c || [], l != a ? this.sigBytes = l : this.sigBytes = c.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var c = this.words, l = c.length, b = [], m = 0; m < l; m++) {
              var f = c[m];
              b.push(f.high), b.push(f.low);
            }
            return o.create(b, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var c = i.clone.call(this), l = c.words = this.words.slice(0), b = l.length, m = 0; m < b; m++)
              l[m] = l[m].clone();
            return c;
          }
        });
      }(), r;
    });
  }(Ua)), Ua.exports;
}
var Ha = { exports: {} }, zs;
function td() {
  return zs || (zs = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var a = r, n = a.lib, s = n.WordArray, i = s.init, o = s.init = function(d) {
            if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), (d instanceof Int8Array || typeof Uint8ClampedArray < "u" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) && (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength)), d instanceof Uint8Array) {
              for (var c = d.byteLength, l = [], b = 0; b < c; b++)
                l[b >>> 2] |= d[b] << 24 - b % 4 * 8;
              i.call(this, l, c);
            } else
              i.apply(this, arguments);
          };
          o.prototype = s;
        }
      }(), r.lib.WordArray;
    });
  }(Ha)), Ha.exports;
}
var Xa = { exports: {} }, Qs;
function rd() {
  return Qs || (Qs = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = a.enc;
        i.Utf16 = i.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(d) {
            for (var c = d.words, l = d.sigBytes, b = [], m = 0; m < l; m += 2) {
              var f = c[m >>> 2] >>> 16 - m % 4 * 8 & 65535;
              b.push(String.fromCharCode(f));
            }
            return b.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(d) {
            for (var c = d.length, l = [], b = 0; b < c; b++)
              l[b >>> 1] |= d.charCodeAt(b) << 16 - b % 2 * 16;
            return s.create(l, c * 2);
          }
        }, i.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(d) {
            for (var c = d.words, l = d.sigBytes, b = [], m = 0; m < l; m += 2) {
              var f = o(c[m >>> 2] >>> 16 - m % 4 * 8 & 65535);
              b.push(String.fromCharCode(f));
            }
            return b.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(d) {
            for (var c = d.length, l = [], b = 0; b < c; b++)
              l[b >>> 1] |= o(d.charCodeAt(b) << 16 - b % 2 * 16);
            return s.create(l, c * 2);
          }
        };
        function o(d) {
          return d << 8 & 4278255360 | d >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Xa)), Xa.exports;
}
var qa = { exports: {} }, Zs;
function Ot() {
  return Zs || (Zs = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = a.enc;
        i.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(d) {
            var c = d.words, l = d.sigBytes, b = this._map;
            d.clamp();
            for (var m = [], f = 0; f < l; f += 3)
              for (var E = c[f >>> 2] >>> 24 - f % 4 * 8 & 255, A = c[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, p = c[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, C = E << 16 | A << 8 | p, h = 0; h < 4 && f + h * 0.75 < l; h++)
                m.push(b.charAt(C >>> 6 * (3 - h) & 63));
            var _ = b.charAt(64);
            if (_)
              for (; m.length % 4; )
                m.push(_);
            return m.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(d) {
            var c = d.length, l = this._map, b = this._reverseMap;
            if (!b) {
              b = this._reverseMap = [];
              for (var m = 0; m < l.length; m++)
                b[l.charCodeAt(m)] = m;
            }
            var f = l.charAt(64);
            if (f) {
              var E = d.indexOf(f);
              E !== -1 && (c = E);
            }
            return o(d, c, b);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function o(d, c, l) {
          for (var b = [], m = 0, f = 0; f < c; f++)
            if (f % 4) {
              var E = l[d.charCodeAt(f - 1)] << f % 4 * 2, A = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, p = E | A;
              b[m >>> 2] |= p << 24 - m % 4 * 8, m++;
            }
          return s.create(b, m);
        }
      }(), r.enc.Base64;
    });
  }(qa)), qa.exports;
}
var Ya = { exports: {} }, Js;
function ad() {
  return Js || (Js = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = a.enc;
        i.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(d, c) {
            c === void 0 && (c = !0);
            var l = d.words, b = d.sigBytes, m = c ? this._safe_map : this._map;
            d.clamp();
            for (var f = [], E = 0; E < b; E += 3)
              for (var A = l[E >>> 2] >>> 24 - E % 4 * 8 & 255, p = l[E + 1 >>> 2] >>> 24 - (E + 1) % 4 * 8 & 255, C = l[E + 2 >>> 2] >>> 24 - (E + 2) % 4 * 8 & 255, h = A << 16 | p << 8 | C, _ = 0; _ < 4 && E + _ * 0.75 < b; _++)
                f.push(m.charAt(h >>> 6 * (3 - _) & 63));
            var v = m.charAt(64);
            if (v)
              for (; f.length % 4; )
                f.push(v);
            return f.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(d, c) {
            c === void 0 && (c = !0);
            var l = d.length, b = c ? this._safe_map : this._map, m = this._reverseMap;
            if (!m) {
              m = this._reverseMap = [];
              for (var f = 0; f < b.length; f++)
                m[b.charCodeAt(f)] = f;
            }
            var E = b.charAt(64);
            if (E) {
              var A = d.indexOf(E);
              A !== -1 && (l = A);
            }
            return o(d, l, m);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function o(d, c, l) {
          for (var b = [], m = 0, f = 0; f < c; f++)
            if (f % 4) {
              var E = l[d.charCodeAt(f - 1)] << f % 4 * 2, A = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, p = E | A;
              b[m >>> 2] |= p << 24 - m % 4 * 8, m++;
            }
          return s.create(b, m);
        }
      }(), r.enc.Base64url;
    });
  }(Ya)), Ya.exports;
}
var $a = { exports: {} }, ei;
function Xt() {
  return ei || (ei = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function(a) {
        var n = r, s = n.lib, i = s.WordArray, o = s.Hasher, d = n.algo, c = [];
        (function() {
          for (var A = 0; A < 64; A++)
            c[A] = a.abs(a.sin(A + 1)) * 4294967296 | 0;
        })();
        var l = d.MD5 = o.extend({
          _doReset: function() {
            this._hash = new i.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(A, p) {
            for (var C = 0; C < 16; C++) {
              var h = p + C, _ = A[h];
              A[h] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            var v = this._hash.words, w = A[p + 0], L = A[p + 1], M = A[p + 2], F = A[p + 3], K = A[p + 4], P = A[p + 5], U = A[p + 6], H = A[p + 7], W = A[p + 8], re = A[p + 9], oe = A[p + 10], de = A[p + 11], Ae = A[p + 12], be = A[p + 13], Se = A[p + 14], Y = A[p + 15], x = v[0], g = v[1], N = v[2], T = v[3];
            x = b(x, g, N, T, w, 7, c[0]), T = b(T, x, g, N, L, 12, c[1]), N = b(N, T, x, g, M, 17, c[2]), g = b(g, N, T, x, F, 22, c[3]), x = b(x, g, N, T, K, 7, c[4]), T = b(T, x, g, N, P, 12, c[5]), N = b(N, T, x, g, U, 17, c[6]), g = b(g, N, T, x, H, 22, c[7]), x = b(x, g, N, T, W, 7, c[8]), T = b(T, x, g, N, re, 12, c[9]), N = b(N, T, x, g, oe, 17, c[10]), g = b(g, N, T, x, de, 22, c[11]), x = b(x, g, N, T, Ae, 7, c[12]), T = b(T, x, g, N, be, 12, c[13]), N = b(N, T, x, g, Se, 17, c[14]), g = b(g, N, T, x, Y, 22, c[15]), x = m(x, g, N, T, L, 5, c[16]), T = m(T, x, g, N, U, 9, c[17]), N = m(N, T, x, g, de, 14, c[18]), g = m(g, N, T, x, w, 20, c[19]), x = m(x, g, N, T, P, 5, c[20]), T = m(T, x, g, N, oe, 9, c[21]), N = m(N, T, x, g, Y, 14, c[22]), g = m(g, N, T, x, K, 20, c[23]), x = m(x, g, N, T, re, 5, c[24]), T = m(T, x, g, N, Se, 9, c[25]), N = m(N, T, x, g, F, 14, c[26]), g = m(g, N, T, x, W, 20, c[27]), x = m(x, g, N, T, be, 5, c[28]), T = m(T, x, g, N, M, 9, c[29]), N = m(N, T, x, g, H, 14, c[30]), g = m(g, N, T, x, Ae, 20, c[31]), x = f(x, g, N, T, P, 4, c[32]), T = f(T, x, g, N, W, 11, c[33]), N = f(N, T, x, g, de, 16, c[34]), g = f(g, N, T, x, Se, 23, c[35]), x = f(x, g, N, T, L, 4, c[36]), T = f(T, x, g, N, K, 11, c[37]), N = f(N, T, x, g, H, 16, c[38]), g = f(g, N, T, x, oe, 23, c[39]), x = f(x, g, N, T, be, 4, c[40]), T = f(T, x, g, N, w, 11, c[41]), N = f(N, T, x, g, F, 16, c[42]), g = f(g, N, T, x, U, 23, c[43]), x = f(x, g, N, T, re, 4, c[44]), T = f(T, x, g, N, Ae, 11, c[45]), N = f(N, T, x, g, Y, 16, c[46]), g = f(g, N, T, x, M, 23, c[47]), x = E(x, g, N, T, w, 6, c[48]), T = E(T, x, g, N, H, 10, c[49]), N = E(N, T, x, g, Se, 15, c[50]), g = E(g, N, T, x, P, 21, c[51]), x = E(x, g, N, T, Ae, 6, c[52]), T = E(T, x, g, N, F, 10, c[53]), N = E(N, T, x, g, oe, 15, c[54]), g = E(g, N, T, x, L, 21, c[55]), x = E(x, g, N, T, W, 6, c[56]), T = E(T, x, g, N, Y, 10, c[57]), N = E(N, T, x, g, U, 15, c[58]), g = E(g, N, T, x, be, 21, c[59]), x = E(x, g, N, T, K, 6, c[60]), T = E(T, x, g, N, de, 10, c[61]), N = E(N, T, x, g, M, 15, c[62]), g = E(g, N, T, x, re, 21, c[63]), v[0] = v[0] + x | 0, v[1] = v[1] + g | 0, v[2] = v[2] + N | 0, v[3] = v[3] + T | 0;
          },
          _doFinalize: function() {
            var A = this._data, p = A.words, C = this._nDataBytes * 8, h = A.sigBytes * 8;
            p[h >>> 5] |= 128 << 24 - h % 32;
            var _ = a.floor(C / 4294967296), v = C;
            p[(h + 64 >>> 9 << 4) + 15] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, p[(h + 64 >>> 9 << 4) + 14] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, A.sigBytes = (p.length + 1) * 4, this._process();
            for (var w = this._hash, L = w.words, M = 0; M < 4; M++) {
              var F = L[M];
              L[M] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var A = o.clone.call(this);
            return A._hash = this._hash.clone(), A;
          }
        });
        function b(A, p, C, h, _, v, w) {
          var L = A + (p & C | ~p & h) + _ + w;
          return (L << v | L >>> 32 - v) + p;
        }
        function m(A, p, C, h, _, v, w) {
          var L = A + (p & h | C & ~h) + _ + w;
          return (L << v | L >>> 32 - v) + p;
        }
        function f(A, p, C, h, _, v, w) {
          var L = A + (p ^ C ^ h) + _ + w;
          return (L << v | L >>> 32 - v) + p;
        }
        function E(A, p, C, h, _, v, w) {
          var L = A + (C ^ (p | ~h)) + _ + w;
          return (L << v | L >>> 32 - v) + p;
        }
        n.MD5 = o._createHelper(l), n.HmacMD5 = o._createHmacHelper(l);
      }(Math), r.MD5;
    });
  }($a)), $a.exports;
}
var Va = { exports: {} }, ti;
function T0() {
  return ti || (ti = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = n.Hasher, o = a.algo, d = [], c = o.SHA1 = i.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(l, b) {
            for (var m = this._hash.words, f = m[0], E = m[1], A = m[2], p = m[3], C = m[4], h = 0; h < 80; h++) {
              if (h < 16)
                d[h] = l[b + h] | 0;
              else {
                var _ = d[h - 3] ^ d[h - 8] ^ d[h - 14] ^ d[h - 16];
                d[h] = _ << 1 | _ >>> 31;
              }
              var v = (f << 5 | f >>> 27) + C + d[h];
              h < 20 ? v += (E & A | ~E & p) + 1518500249 : h < 40 ? v += (E ^ A ^ p) + 1859775393 : h < 60 ? v += (E & A | E & p | A & p) - 1894007588 : v += (E ^ A ^ p) - 899497514, C = p, p = A, A = E << 30 | E >>> 2, E = f, f = v;
            }
            m[0] = m[0] + f | 0, m[1] = m[1] + E | 0, m[2] = m[2] + A | 0, m[3] = m[3] + p | 0, m[4] = m[4] + C | 0;
          },
          _doFinalize: function() {
            var l = this._data, b = l.words, m = this._nDataBytes * 8, f = l.sigBytes * 8;
            return b[f >>> 5] |= 128 << 24 - f % 32, b[(f + 64 >>> 9 << 4) + 14] = Math.floor(m / 4294967296), b[(f + 64 >>> 9 << 4) + 15] = m, l.sigBytes = b.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var l = i.clone.call(this);
            return l._hash = this._hash.clone(), l;
          }
        });
        a.SHA1 = i._createHelper(c), a.HmacSHA1 = i._createHmacHelper(c);
      }(), r.SHA1;
    });
  }(Va)), Va.exports;
}
var Wa = { exports: {} }, ri;
function ns() {
  return ri || (ri = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      return function(a) {
        var n = r, s = n.lib, i = s.WordArray, o = s.Hasher, d = n.algo, c = [], l = [];
        (function() {
          function f(C) {
            for (var h = a.sqrt(C), _ = 2; _ <= h; _++)
              if (!(C % _))
                return !1;
            return !0;
          }
          function E(C) {
            return (C - (C | 0)) * 4294967296 | 0;
          }
          for (var A = 2, p = 0; p < 64; )
            f(A) && (p < 8 && (c[p] = E(a.pow(A, 1 / 2))), l[p] = E(a.pow(A, 1 / 3)), p++), A++;
        })();
        var b = [], m = d.SHA256 = o.extend({
          _doReset: function() {
            this._hash = new i.init(c.slice(0));
          },
          _doProcessBlock: function(f, E) {
            for (var A = this._hash.words, p = A[0], C = A[1], h = A[2], _ = A[3], v = A[4], w = A[5], L = A[6], M = A[7], F = 0; F < 64; F++) {
              if (F < 16)
                b[F] = f[E + F] | 0;
              else {
                var K = b[F - 15], P = (K << 25 | K >>> 7) ^ (K << 14 | K >>> 18) ^ K >>> 3, U = b[F - 2], H = (U << 15 | U >>> 17) ^ (U << 13 | U >>> 19) ^ U >>> 10;
                b[F] = P + b[F - 7] + H + b[F - 16];
              }
              var W = v & w ^ ~v & L, re = p & C ^ p & h ^ C & h, oe = (p << 30 | p >>> 2) ^ (p << 19 | p >>> 13) ^ (p << 10 | p >>> 22), de = (v << 26 | v >>> 6) ^ (v << 21 | v >>> 11) ^ (v << 7 | v >>> 25), Ae = M + de + W + l[F] + b[F], be = oe + re;
              M = L, L = w, w = v, v = _ + Ae | 0, _ = h, h = C, C = p, p = Ae + be | 0;
            }
            A[0] = A[0] + p | 0, A[1] = A[1] + C | 0, A[2] = A[2] + h | 0, A[3] = A[3] + _ | 0, A[4] = A[4] + v | 0, A[5] = A[5] + w | 0, A[6] = A[6] + L | 0, A[7] = A[7] + M | 0;
          },
          _doFinalize: function() {
            var f = this._data, E = f.words, A = this._nDataBytes * 8, p = f.sigBytes * 8;
            return E[p >>> 5] |= 128 << 24 - p % 32, E[(p + 64 >>> 9 << 4) + 14] = a.floor(A / 4294967296), E[(p + 64 >>> 9 << 4) + 15] = A, f.sigBytes = E.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = o.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        n.SHA256 = o._createHelper(m), n.HmacSHA256 = o._createHmacHelper(m);
      }(Math), r.SHA256;
    });
  }(Wa)), Wa.exports;
}
var Ga = { exports: {} }, ai;
function nd() {
  return ai || (ai = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), ns());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = a.algo, o = i.SHA256, d = i.SHA224 = o.extend({
          _doReset: function() {
            this._hash = new s.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var c = o._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        a.SHA224 = o._createHelper(d), a.HmacSHA224 = o._createHmacHelper(d);
      }(), r.SHA224;
    });
  }(Ga)), Ga.exports;
}
var ja = { exports: {} }, ni;
function x0() {
  return ni || (ni = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Sa());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.Hasher, i = a.x64, o = i.Word, d = i.WordArray, c = a.algo;
        function l() {
          return o.create.apply(o, arguments);
        }
        var b = [
          l(1116352408, 3609767458),
          l(1899447441, 602891725),
          l(3049323471, 3964484399),
          l(3921009573, 2173295548),
          l(961987163, 4081628472),
          l(1508970993, 3053834265),
          l(2453635748, 2937671579),
          l(2870763221, 3664609560),
          l(3624381080, 2734883394),
          l(310598401, 1164996542),
          l(607225278, 1323610764),
          l(1426881987, 3590304994),
          l(1925078388, 4068182383),
          l(2162078206, 991336113),
          l(2614888103, 633803317),
          l(3248222580, 3479774868),
          l(3835390401, 2666613458),
          l(4022224774, 944711139),
          l(264347078, 2341262773),
          l(604807628, 2007800933),
          l(770255983, 1495990901),
          l(1249150122, 1856431235),
          l(1555081692, 3175218132),
          l(1996064986, 2198950837),
          l(2554220882, 3999719339),
          l(2821834349, 766784016),
          l(2952996808, 2566594879),
          l(3210313671, 3203337956),
          l(3336571891, 1034457026),
          l(3584528711, 2466948901),
          l(113926993, 3758326383),
          l(338241895, 168717936),
          l(666307205, 1188179964),
          l(773529912, 1546045734),
          l(1294757372, 1522805485),
          l(1396182291, 2643833823),
          l(1695183700, 2343527390),
          l(1986661051, 1014477480),
          l(2177026350, 1206759142),
          l(2456956037, 344077627),
          l(2730485921, 1290863460),
          l(2820302411, 3158454273),
          l(3259730800, 3505952657),
          l(3345764771, 106217008),
          l(3516065817, 3606008344),
          l(3600352804, 1432725776),
          l(4094571909, 1467031594),
          l(275423344, 851169720),
          l(430227734, 3100823752),
          l(506948616, 1363258195),
          l(659060556, 3750685593),
          l(883997877, 3785050280),
          l(958139571, 3318307427),
          l(1322822218, 3812723403),
          l(1537002063, 2003034995),
          l(1747873779, 3602036899),
          l(1955562222, 1575990012),
          l(2024104815, 1125592928),
          l(2227730452, 2716904306),
          l(2361852424, 442776044),
          l(2428436474, 593698344),
          l(2756734187, 3733110249),
          l(3204031479, 2999351573),
          l(3329325298, 3815920427),
          l(3391569614, 3928383900),
          l(3515267271, 566280711),
          l(3940187606, 3454069534),
          l(4118630271, 4000239992),
          l(116418474, 1914138554),
          l(174292421, 2731055270),
          l(289380356, 3203993006),
          l(460393269, 320620315),
          l(685471733, 587496836),
          l(852142971, 1086792851),
          l(1017036298, 365543100),
          l(1126000580, 2618297676),
          l(1288033470, 3409855158),
          l(1501505948, 4234509866),
          l(1607167915, 987167468),
          l(1816402316, 1246189591)
        ], m = [];
        (function() {
          for (var E = 0; E < 80; E++)
            m[E] = l();
        })();
        var f = c.SHA512 = s.extend({
          _doReset: function() {
            this._hash = new d.init([
              new o.init(1779033703, 4089235720),
              new o.init(3144134277, 2227873595),
              new o.init(1013904242, 4271175723),
              new o.init(2773480762, 1595750129),
              new o.init(1359893119, 2917565137),
              new o.init(2600822924, 725511199),
              new o.init(528734635, 4215389547),
              new o.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(E, A) {
            for (var p = this._hash.words, C = p[0], h = p[1], _ = p[2], v = p[3], w = p[4], L = p[5], M = p[6], F = p[7], K = C.high, P = C.low, U = h.high, H = h.low, W = _.high, re = _.low, oe = v.high, de = v.low, Ae = w.high, be = w.low, Se = L.high, Y = L.low, x = M.high, g = M.low, N = F.high, T = F.low, S = K, I = P, D = U, B = H, $ = W, V = re, Z = oe, J = de, te = Ae, X = be, ue = Se, he = Y, se = x, ce = g, ee = N, me = T, Te = 0; Te < 80; Te++) {
              var Ne, pe, Re = m[Te];
              if (Te < 16)
                pe = Re.high = E[A + Te * 2] | 0, Ne = Re.low = E[A + Te * 2 + 1] | 0;
              else {
                var Le = m[Te - 15], Ce = Le.high, De = Le.low, Fe = (Ce >>> 1 | De << 31) ^ (Ce >>> 8 | De << 24) ^ Ce >>> 7, Ve = (De >>> 1 | Ce << 31) ^ (De >>> 8 | Ce << 24) ^ (De >>> 7 | Ce << 25), We = m[Te - 2], Me = We.high, st = We.low, ir = (Me >>> 19 | st << 13) ^ (Me << 3 | st >>> 29) ^ Me >>> 6, we = (st >>> 19 | Me << 13) ^ (st << 3 | Me >>> 29) ^ (st >>> 6 | Me << 26), Je = m[Te - 7], Vt = Je.high, it = Je.low, ht = m[Te - 16], Wt = ht.high, rt = ht.low;
                Ne = Ve + it, pe = Fe + Vt + (Ne >>> 0 < Ve >>> 0 ? 1 : 0), Ne = Ne + we, pe = pe + ir + (Ne >>> 0 < we >>> 0 ? 1 : 0), Ne = Ne + rt, pe = pe + Wt + (Ne >>> 0 < rt >>> 0 ? 1 : 0), Re.high = pe, Re.low = Ne;
              }
              var mt = te & ue ^ ~te & se, pt = X & he ^ ~X & ce, Mr = S & D ^ S & $ ^ D & $, Fa = I & B ^ I & V ^ B & V, ur = (S >>> 28 | I << 4) ^ (S << 30 | I >>> 2) ^ (S << 25 | I >>> 7), or = (I >>> 28 | S << 4) ^ (I << 30 | S >>> 2) ^ (I << 25 | S >>> 7), Gt = (te >>> 14 | X << 18) ^ (te >>> 18 | X << 14) ^ (te << 23 | X >>> 9), Ur = (X >>> 14 | te << 18) ^ (X >>> 18 | te << 14) ^ (X << 23 | te >>> 9), gt = b[Te], cr = gt.high, At = gt.low, Qe = me + Ur, Ct = ee + Gt + (Qe >>> 0 < me >>> 0 ? 1 : 0), Qe = Qe + pt, Ct = Ct + mt + (Qe >>> 0 < pt >>> 0 ? 1 : 0), Qe = Qe + At, Ct = Ct + cr + (Qe >>> 0 < At >>> 0 ? 1 : 0), Qe = Qe + Ne, Ct = Ct + pe + (Qe >>> 0 < Ne >>> 0 ? 1 : 0), Ms = or + Fa, hc = ur + Mr + (Ms >>> 0 < or >>> 0 ? 1 : 0);
              ee = se, me = ce, se = ue, ce = he, ue = te, he = X, X = J + Qe | 0, te = Z + Ct + (X >>> 0 < J >>> 0 ? 1 : 0) | 0, Z = $, J = V, $ = D, V = B, D = S, B = I, I = Qe + Ms | 0, S = Ct + hc + (I >>> 0 < Qe >>> 0 ? 1 : 0) | 0;
            }
            P = C.low = P + I, C.high = K + S + (P >>> 0 < I >>> 0 ? 1 : 0), H = h.low = H + B, h.high = U + D + (H >>> 0 < B >>> 0 ? 1 : 0), re = _.low = re + V, _.high = W + $ + (re >>> 0 < V >>> 0 ? 1 : 0), de = v.low = de + J, v.high = oe + Z + (de >>> 0 < J >>> 0 ? 1 : 0), be = w.low = be + X, w.high = Ae + te + (be >>> 0 < X >>> 0 ? 1 : 0), Y = L.low = Y + he, L.high = Se + ue + (Y >>> 0 < he >>> 0 ? 1 : 0), g = M.low = g + ce, M.high = x + se + (g >>> 0 < ce >>> 0 ? 1 : 0), T = F.low = T + me, F.high = N + ee + (T >>> 0 < me >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var E = this._data, A = E.words, p = this._nDataBytes * 8, C = E.sigBytes * 8;
            A[C >>> 5] |= 128 << 24 - C % 32, A[(C + 128 >>> 10 << 5) + 30] = Math.floor(p / 4294967296), A[(C + 128 >>> 10 << 5) + 31] = p, E.sigBytes = A.length * 4, this._process();
            var h = this._hash.toX32();
            return h;
          },
          clone: function() {
            var E = s.clone.call(this);
            return E._hash = this._hash.clone(), E;
          },
          blockSize: 1024 / 32
        });
        a.SHA512 = s._createHelper(f), a.HmacSHA512 = s._createHmacHelper(f);
      }(), r.SHA512;
    });
  }(ja)), ja.exports;
}
var Ka = { exports: {} }, si;
function sd() {
  return si || (si = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Sa(), x0());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.x64, s = n.Word, i = n.WordArray, o = a.algo, d = o.SHA512, c = o.SHA384 = d.extend({
          _doReset: function() {
            this._hash = new i.init([
              new s.init(3418070365, 3238371032),
              new s.init(1654270250, 914150663),
              new s.init(2438529370, 812702999),
              new s.init(355462360, 4144912697),
              new s.init(1731405415, 4290775857),
              new s.init(2394180231, 1750603025),
              new s.init(3675008525, 1694076839),
              new s.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var l = d._doFinalize.call(this);
            return l.sigBytes -= 16, l;
          }
        });
        a.SHA384 = d._createHelper(c), a.HmacSHA384 = d._createHmacHelper(c);
      }(), r.SHA384;
    });
  }(Ka)), Ka.exports;
}
var za = { exports: {} }, ii;
function id() {
  return ii || (ii = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Sa());
    })(Ee, function(r) {
      return function(a) {
        var n = r, s = n.lib, i = s.WordArray, o = s.Hasher, d = n.x64, c = d.Word, l = n.algo, b = [], m = [], f = [];
        (function() {
          for (var p = 1, C = 0, h = 0; h < 24; h++) {
            b[p + 5 * C] = (h + 1) * (h + 2) / 2 % 64;
            var _ = C % 5, v = (2 * p + 3 * C) % 5;
            p = _, C = v;
          }
          for (var p = 0; p < 5; p++)
            for (var C = 0; C < 5; C++)
              m[p + 5 * C] = C + (2 * p + 3 * C) % 5 * 5;
          for (var w = 1, L = 0; L < 24; L++) {
            for (var M = 0, F = 0, K = 0; K < 7; K++) {
              if (w & 1) {
                var P = (1 << K) - 1;
                P < 32 ? F ^= 1 << P : M ^= 1 << P - 32;
              }
              w & 128 ? w = w << 1 ^ 113 : w <<= 1;
            }
            f[L] = c.create(M, F);
          }
        })();
        var E = [];
        (function() {
          for (var p = 0; p < 25; p++)
            E[p] = c.create();
        })();
        var A = l.SHA3 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: o.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var p = this._state = [], C = 0; C < 25; C++)
              p[C] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(p, C) {
            for (var h = this._state, _ = this.blockSize / 2, v = 0; v < _; v++) {
              var w = p[C + 2 * v], L = p[C + 2 * v + 1];
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, L = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360;
              var M = h[v];
              M.high ^= L, M.low ^= w;
            }
            for (var F = 0; F < 24; F++) {
              for (var K = 0; K < 5; K++) {
                for (var P = 0, U = 0, H = 0; H < 5; H++) {
                  var M = h[K + 5 * H];
                  P ^= M.high, U ^= M.low;
                }
                var W = E[K];
                W.high = P, W.low = U;
              }
              for (var K = 0; K < 5; K++)
                for (var re = E[(K + 4) % 5], oe = E[(K + 1) % 5], de = oe.high, Ae = oe.low, P = re.high ^ (de << 1 | Ae >>> 31), U = re.low ^ (Ae << 1 | de >>> 31), H = 0; H < 5; H++) {
                  var M = h[K + 5 * H];
                  M.high ^= P, M.low ^= U;
                }
              for (var be = 1; be < 25; be++) {
                var P, U, M = h[be], Se = M.high, Y = M.low, x = b[be];
                x < 32 ? (P = Se << x | Y >>> 32 - x, U = Y << x | Se >>> 32 - x) : (P = Y << x - 32 | Se >>> 64 - x, U = Se << x - 32 | Y >>> 64 - x);
                var g = E[m[be]];
                g.high = P, g.low = U;
              }
              var N = E[0], T = h[0];
              N.high = T.high, N.low = T.low;
              for (var K = 0; K < 5; K++)
                for (var H = 0; H < 5; H++) {
                  var be = K + 5 * H, M = h[be], S = E[be], I = E[(K + 1) % 5 + 5 * H], D = E[(K + 2) % 5 + 5 * H];
                  M.high = S.high ^ ~I.high & D.high, M.low = S.low ^ ~I.low & D.low;
                }
              var M = h[0], B = f[F];
              M.high ^= B.high, M.low ^= B.low;
            }
          },
          _doFinalize: function() {
            var p = this._data, C = p.words;
            this._nDataBytes * 8;
            var h = p.sigBytes * 8, _ = this.blockSize * 32;
            C[h >>> 5] |= 1 << 24 - h % 32, C[(a.ceil((h + 1) / _) * _ >>> 5) - 1] |= 128, p.sigBytes = C.length * 4, this._process();
            for (var v = this._state, w = this.cfg.outputLength / 8, L = w / 8, M = [], F = 0; F < L; F++) {
              var K = v[F], P = K.high, U = K.low;
              P = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360, U = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360, M.push(U), M.push(P);
            }
            return new i.init(M, w);
          },
          clone: function() {
            for (var p = o.clone.call(this), C = p._state = this._state.slice(0), h = 0; h < 25; h++)
              C[h] = C[h].clone();
            return p;
          }
        });
        n.SHA3 = o._createHelper(A), n.HmacSHA3 = o._createHmacHelper(A);
      }(Math), r.SHA3;
    });
  }(za)), za.exports;
}
var Qa = { exports: {} }, ui;
function ud() {
  return ui || (ui = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(a) {
        var n = r, s = n.lib, i = s.WordArray, o = s.Hasher, d = n.algo, c = i.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), l = i.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), b = i.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), m = i.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), f = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), E = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), A = d.RIPEMD160 = o.extend({
          _doReset: function() {
            this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(L, M) {
            for (var F = 0; F < 16; F++) {
              var K = M + F, P = L[K];
              L[K] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360;
            }
            var U = this._hash.words, H = f.words, W = E.words, re = c.words, oe = l.words, de = b.words, Ae = m.words, be, Se, Y, x, g, N, T, S, I, D;
            N = be = U[0], T = Se = U[1], S = Y = U[2], I = x = U[3], D = g = U[4];
            for (var B, F = 0; F < 80; F += 1)
              B = be + L[M + re[F]] | 0, F < 16 ? B += p(Se, Y, x) + H[0] : F < 32 ? B += C(Se, Y, x) + H[1] : F < 48 ? B += h(Se, Y, x) + H[2] : F < 64 ? B += _(Se, Y, x) + H[3] : B += v(Se, Y, x) + H[4], B = B | 0, B = w(B, de[F]), B = B + g | 0, be = g, g = x, x = w(Y, 10), Y = Se, Se = B, B = N + L[M + oe[F]] | 0, F < 16 ? B += v(T, S, I) + W[0] : F < 32 ? B += _(T, S, I) + W[1] : F < 48 ? B += h(T, S, I) + W[2] : F < 64 ? B += C(T, S, I) + W[3] : B += p(T, S, I) + W[4], B = B | 0, B = w(B, Ae[F]), B = B + D | 0, N = D, D = I, I = w(S, 10), S = T, T = B;
            B = U[1] + Y + I | 0, U[1] = U[2] + x + D | 0, U[2] = U[3] + g + N | 0, U[3] = U[4] + be + T | 0, U[4] = U[0] + Se + S | 0, U[0] = B;
          },
          _doFinalize: function() {
            var L = this._data, M = L.words, F = this._nDataBytes * 8, K = L.sigBytes * 8;
            M[K >>> 5] |= 128 << 24 - K % 32, M[(K + 64 >>> 9 << 4) + 14] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, L.sigBytes = (M.length + 1) * 4, this._process();
            for (var P = this._hash, U = P.words, H = 0; H < 5; H++) {
              var W = U[H];
              U[H] = (W << 8 | W >>> 24) & 16711935 | (W << 24 | W >>> 8) & 4278255360;
            }
            return P;
          },
          clone: function() {
            var L = o.clone.call(this);
            return L._hash = this._hash.clone(), L;
          }
        });
        function p(L, M, F) {
          return L ^ M ^ F;
        }
        function C(L, M, F) {
          return L & M | ~L & F;
        }
        function h(L, M, F) {
          return (L | ~M) ^ F;
        }
        function _(L, M, F) {
          return L & F | M & ~F;
        }
        function v(L, M, F) {
          return L ^ (M | ~F);
        }
        function w(L, M) {
          return L << M | L >>> 32 - M;
        }
        n.RIPEMD160 = o._createHelper(A), n.HmacRIPEMD160 = o._createHmacHelper(A);
      }(), r.RIPEMD160;
    });
  }(Qa)), Qa.exports;
}
var Za = { exports: {} }, oi;
function ss() {
  return oi || (oi = 1, function(e, t) {
    (function(r, a) {
      e.exports = a(_e());
    })(Ee, function(r) {
      (function() {
        var a = r, n = a.lib, s = n.Base, i = a.enc, o = i.Utf8, d = a.algo;
        d.HMAC = s.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(c, l) {
            c = this._hasher = new c.init(), typeof l == "string" && (l = o.parse(l));
            var b = c.blockSize, m = b * 4;
            l.sigBytes > m && (l = c.finalize(l)), l.clamp();
            for (var f = this._oKey = l.clone(), E = this._iKey = l.clone(), A = f.words, p = E.words, C = 0; C < b; C++)
              A[C] ^= 1549556828, p[C] ^= 909522486;
            f.sigBytes = E.sigBytes = m, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var c = this._hasher;
            c.reset(), c.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(c) {
            return this._hasher.update(c), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(c) {
            var l = this._hasher, b = l.finalize(c);
            l.reset();
            var m = l.finalize(this._oKey.clone().concat(b));
            return m;
          }
        });
      })();
    });
  }(Za)), Za.exports;
}
var Ja = { exports: {} }, ci;
function od() {
  return ci || (ci = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), ns(), ss());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.Base, i = n.WordArray, o = a.algo, d = o.SHA256, c = o.HMAC, l = o.PBKDF2 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: d,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(b) {
            this.cfg = this.cfg.extend(b);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(b, m) {
            for (var f = this.cfg, E = c.create(f.hasher, b), A = i.create(), p = i.create([1]), C = A.words, h = p.words, _ = f.keySize, v = f.iterations; C.length < _; ) {
              var w = E.update(m).finalize(p);
              E.reset();
              for (var L = w.words, M = L.length, F = w, K = 1; K < v; K++) {
                F = E.finalize(F), E.reset();
                for (var P = F.words, U = 0; U < M; U++)
                  L[U] ^= P[U];
              }
              A.concat(w), h[0]++;
            }
            return A.sigBytes = _ * 4, A;
          }
        });
        a.PBKDF2 = function(b, m, f) {
          return l.create(f).compute(b, m);
        };
      }(), r.PBKDF2;
    });
  }(Ja)), Ja.exports;
}
var en = { exports: {} }, di;
function Rt() {
  return di || (di = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), T0(), ss());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.Base, i = n.WordArray, o = a.algo, d = o.MD5, c = o.EvpKDF = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: s.extend({
            keySize: 128 / 32,
            hasher: d,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(l, b) {
            for (var m, f = this.cfg, E = f.hasher.create(), A = i.create(), p = A.words, C = f.keySize, h = f.iterations; p.length < C; ) {
              m && E.update(m), m = E.update(l).finalize(b), E.reset();
              for (var _ = 1; _ < h; _++)
                m = E.finalize(m), E.reset();
              A.concat(m);
            }
            return A.sigBytes = C * 4, A;
          }
        });
        a.EvpKDF = function(l, b, m) {
          return c.create(m).compute(l, b);
        };
      }(), r.EvpKDF;
    });
  }(en)), en.exports;
}
var tn = { exports: {} }, li;
function qe() {
  return li || (li = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Rt());
    })(Ee, function(r) {
      r.lib.Cipher || function(a) {
        var n = r, s = n.lib, i = s.Base, o = s.WordArray, d = s.BufferedBlockAlgorithm, c = n.enc;
        c.Utf8;
        var l = c.Base64, b = n.algo, m = b.EvpKDF, f = s.Cipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: i.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(P, U) {
            return this.create(this._ENC_XFORM_MODE, P, U);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(P, U) {
            return this.create(this._DEC_XFORM_MODE, P, U);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(P, U, H) {
            this.cfg = this.cfg.extend(H), this._xformMode = P, this._key = U, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            d.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(P) {
            return this._append(P), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(P) {
            P && this._append(P);
            var U = this._doFinalize();
            return U;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function P(U) {
              return typeof U == "string" ? K : L;
            }
            return function(U) {
              return {
                encrypt: function(H, W, re) {
                  return P(W).encrypt(U, H, W, re);
                },
                decrypt: function(H, W, re) {
                  return P(W).decrypt(U, H, W, re);
                }
              };
            };
          }()
        });
        s.StreamCipher = f.extend({
          _doFinalize: function() {
            var P = this._process(!0);
            return P;
          },
          blockSize: 1
        });
        var E = n.mode = {}, A = s.BlockCipherMode = i.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(P, U) {
            return this.Encryptor.create(P, U);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(P, U) {
            return this.Decryptor.create(P, U);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(P, U) {
            this._cipher = P, this._iv = U;
          }
        }), p = E.CBC = function() {
          var P = A.extend();
          P.Encryptor = P.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(H, W) {
              var re = this._cipher, oe = re.blockSize;
              U.call(this, H, W, oe), re.encryptBlock(H, W), this._prevBlock = H.slice(W, W + oe);
            }
          }), P.Decryptor = P.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(H, W) {
              var re = this._cipher, oe = re.blockSize, de = H.slice(W, W + oe);
              re.decryptBlock(H, W), U.call(this, H, W, oe), this._prevBlock = de;
            }
          });
          function U(H, W, re) {
            var oe, de = this._iv;
            de ? (oe = de, this._iv = a) : oe = this._prevBlock;
            for (var Ae = 0; Ae < re; Ae++)
              H[W + Ae] ^= oe[Ae];
          }
          return P;
        }(), C = n.pad = {}, h = C.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(P, U) {
            for (var H = U * 4, W = H - P.sigBytes % H, re = W << 24 | W << 16 | W << 8 | W, oe = [], de = 0; de < W; de += 4)
              oe.push(re);
            var Ae = o.create(oe, W);
            P.concat(Ae);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(P) {
            var U = P.words[P.sigBytes - 1 >>> 2] & 255;
            P.sigBytes -= U;
          }
        };
        s.BlockCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: f.cfg.extend({
            mode: p,
            padding: h
          }),
          reset: function() {
            var P;
            f.reset.call(this);
            var U = this.cfg, H = U.iv, W = U.mode;
            this._xformMode == this._ENC_XFORM_MODE ? P = W.createEncryptor : (P = W.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == P ? this._mode.init(this, H && H.words) : (this._mode = P.call(W, this, H && H.words), this._mode.__creator = P);
          },
          _doProcessBlock: function(P, U) {
            this._mode.processBlock(P, U);
          },
          _doFinalize: function() {
            var P, U = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (U.pad(this._data, this.blockSize), P = this._process(!0)) : (P = this._process(!0), U.unpad(P)), P;
          },
          blockSize: 128 / 32
        });
        var _ = s.CipherParams = i.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(P) {
            this.mixIn(P);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(P) {
            return (P || this.formatter).stringify(this);
          }
        }), v = n.format = {}, w = v.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(P) {
            var U, H = P.ciphertext, W = P.salt;
            return W ? U = o.create([1398893684, 1701076831]).concat(W).concat(H) : U = H, U.toString(l);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(P) {
            var U, H = l.parse(P), W = H.words;
            return W[0] == 1398893684 && W[1] == 1701076831 && (U = o.create(W.slice(2, 4)), W.splice(0, 4), H.sigBytes -= 16), _.create({ ciphertext: H, salt: U });
          }
        }, L = s.SerializableCipher = i.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: i.extend({
            format: w
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(P, U, H, W) {
            W = this.cfg.extend(W);
            var re = P.createEncryptor(H, W), oe = re.finalize(U), de = re.cfg;
            return _.create({
              ciphertext: oe,
              key: H,
              iv: de.iv,
              algorithm: P,
              mode: de.mode,
              padding: de.padding,
              blockSize: P.blockSize,
              formatter: W.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(P, U, H, W) {
            W = this.cfg.extend(W), U = this._parse(U, W.format);
            var re = P.createDecryptor(H, W).finalize(U.ciphertext);
            return re;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(P, U) {
            return typeof P == "string" ? U.parse(P, this) : P;
          }
        }), M = n.kdf = {}, F = M.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(P, U, H, W, re) {
            if (W || (W = o.random(64 / 8)), re)
              var oe = m.create({ keySize: U + H, hasher: re }).compute(P, W);
            else
              var oe = m.create({ keySize: U + H }).compute(P, W);
            var de = o.create(oe.words.slice(U), H * 4);
            return oe.sigBytes = U * 4, _.create({ key: oe, iv: de, salt: W });
          }
        }, K = s.PasswordBasedCipher = L.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: L.cfg.extend({
            kdf: F
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(P, U, H, W) {
            W = this.cfg.extend(W);
            var re = W.kdf.execute(H, P.keySize, P.ivSize, W.salt, W.hasher);
            W.iv = re.iv;
            var oe = L.encrypt.call(this, P, U, re.key, W);
            return oe.mixIn(re), oe;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(P, U, H, W) {
            W = this.cfg.extend(W), U = this._parse(U, W.format);
            var re = W.kdf.execute(H, P.keySize, P.ivSize, U.salt, W.hasher);
            W.iv = re.iv;
            var oe = L.decrypt.call(this, P, U, re.key, W);
            return oe;
          }
        });
      }();
    });
  }(tn)), tn.exports;
}
var rn = { exports: {} }, fi;
function cd() {
  return fi || (fi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.mode.CFB = function() {
        var a = r.lib.BlockCipherMode.extend();
        a.Encryptor = a.extend({
          processBlock: function(s, i) {
            var o = this._cipher, d = o.blockSize;
            n.call(this, s, i, d, o), this._prevBlock = s.slice(i, i + d);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(s, i) {
            var o = this._cipher, d = o.blockSize, c = s.slice(i, i + d);
            n.call(this, s, i, d, o), this._prevBlock = c;
          }
        });
        function n(s, i, o, d) {
          var c, l = this._iv;
          l ? (c = l.slice(0), this._iv = void 0) : c = this._prevBlock, d.encryptBlock(c, 0);
          for (var b = 0; b < o; b++)
            s[i + b] ^= c[b];
        }
        return a;
      }(), r.mode.CFB;
    });
  }(rn)), rn.exports;
}
var an = { exports: {} }, hi;
function dd() {
  return hi || (hi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.mode.CTR = function() {
        var a = r.lib.BlockCipherMode.extend(), n = a.Encryptor = a.extend({
          processBlock: function(s, i) {
            var o = this._cipher, d = o.blockSize, c = this._iv, l = this._counter;
            c && (l = this._counter = c.slice(0), this._iv = void 0);
            var b = l.slice(0);
            o.encryptBlock(b, 0), l[d - 1] = l[d - 1] + 1 | 0;
            for (var m = 0; m < d; m++)
              s[i + m] ^= b[m];
          }
        });
        return a.Decryptor = n, a;
      }(), r.mode.CTR;
    });
  }(an)), an.exports;
}
var nn = { exports: {} }, mi;
function ld() {
  return mi || (mi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var a = r.lib.BlockCipherMode.extend();
        function n(o) {
          if ((o >> 24 & 255) === 255) {
            var d = o >> 16 & 255, c = o >> 8 & 255, l = o & 255;
            d === 255 ? (d = 0, c === 255 ? (c = 0, l === 255 ? l = 0 : ++l) : ++c) : ++d, o = 0, o += d << 16, o += c << 8, o += l;
          } else
            o += 1 << 24;
          return o;
        }
        function s(o) {
          return (o[0] = n(o[0])) === 0 && (o[1] = n(o[1])), o;
        }
        var i = a.Encryptor = a.extend({
          processBlock: function(o, d) {
            var c = this._cipher, l = c.blockSize, b = this._iv, m = this._counter;
            b && (m = this._counter = b.slice(0), this._iv = void 0), s(m);
            var f = m.slice(0);
            c.encryptBlock(f, 0);
            for (var E = 0; E < l; E++)
              o[d + E] ^= f[E];
          }
        });
        return a.Decryptor = i, a;
      }(), r.mode.CTRGladman;
    });
  }(nn)), nn.exports;
}
var sn = { exports: {} }, pi;
function fd() {
  return pi || (pi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.mode.OFB = function() {
        var a = r.lib.BlockCipherMode.extend(), n = a.Encryptor = a.extend({
          processBlock: function(s, i) {
            var o = this._cipher, d = o.blockSize, c = this._iv, l = this._keystream;
            c && (l = this._keystream = c.slice(0), this._iv = void 0), o.encryptBlock(l, 0);
            for (var b = 0; b < d; b++)
              s[i + b] ^= l[b];
          }
        });
        return a.Decryptor = n, a;
      }(), r.mode.OFB;
    });
  }(sn)), sn.exports;
}
var un = { exports: {} }, Ei;
function hd() {
  return Ei || (Ei = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.mode.ECB = function() {
        var a = r.lib.BlockCipherMode.extend();
        return a.Encryptor = a.extend({
          processBlock: function(n, s) {
            this._cipher.encryptBlock(n, s);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(n, s) {
            this._cipher.decryptBlock(n, s);
          }
        }), a;
      }(), r.mode.ECB;
    });
  }(un)), un.exports;
}
var on = { exports: {} }, bi;
function md() {
  return bi || (bi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(a, n) {
          var s = a.sigBytes, i = n * 4, o = i - s % i, d = s + o - 1;
          a.clamp(), a.words[d >>> 2] |= o << 24 - d % 4 * 8, a.sigBytes += o;
        },
        unpad: function(a) {
          var n = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= n;
        }
      }, r.pad.Ansix923;
    });
  }(on)), on.exports;
}
var cn = { exports: {} }, Ti;
function pd() {
  return Ti || (Ti = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.pad.Iso10126 = {
        pad: function(a, n) {
          var s = n * 4, i = s - a.sigBytes % s;
          a.concat(r.lib.WordArray.random(i - 1)).concat(r.lib.WordArray.create([i << 24], 1));
        },
        unpad: function(a) {
          var n = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= n;
        }
      }, r.pad.Iso10126;
    });
  }(cn)), cn.exports;
}
var dn = { exports: {} }, xi;
function Ed() {
  return xi || (xi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.pad.Iso97971 = {
        pad: function(a, n) {
          a.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(a, n);
        },
        unpad: function(a) {
          r.pad.ZeroPadding.unpad(a), a.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(dn)), dn.exports;
}
var ln = { exports: {} }, gi;
function bd() {
  return gi || (gi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(a, n) {
          var s = n * 4;
          a.clamp(), a.sigBytes += s - (a.sigBytes % s || s);
        },
        unpad: function(a) {
          for (var n = a.words, s = a.sigBytes - 1, s = a.sigBytes - 1; s >= 0; s--)
            if (n[s >>> 2] >>> 24 - s % 4 * 8 & 255) {
              a.sigBytes = s + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(ln)), ln.exports;
}
var fn = { exports: {} }, Ai;
function Td() {
  return Ai || (Ai = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(fn)), fn.exports;
}
var hn = { exports: {} }, Ci;
function xd() {
  return Ci || (Ci = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), qe());
    })(Ee, function(r) {
      return function(a) {
        var n = r, s = n.lib, i = s.CipherParams, o = n.enc, d = o.Hex, c = n.format;
        c.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(l) {
            return l.ciphertext.toString(d);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(l) {
            var b = d.parse(l);
            return i.create({ ciphertext: b });
          }
        };
      }(), r.format.Hex;
    });
  }(hn)), hn.exports;
}
var mn = { exports: {} }, _i;
function gd() {
  return _i || (_i = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.BlockCipher, i = a.algo, o = [], d = [], c = [], l = [], b = [], m = [], f = [], E = [], A = [], p = [];
        (function() {
          for (var _ = [], v = 0; v < 256; v++)
            v < 128 ? _[v] = v << 1 : _[v] = v << 1 ^ 283;
          for (var w = 0, L = 0, v = 0; v < 256; v++) {
            var M = L ^ L << 1 ^ L << 2 ^ L << 3 ^ L << 4;
            M = M >>> 8 ^ M & 255 ^ 99, o[w] = M, d[M] = w;
            var F = _[w], K = _[F], P = _[K], U = _[M] * 257 ^ M * 16843008;
            c[w] = U << 24 | U >>> 8, l[w] = U << 16 | U >>> 16, b[w] = U << 8 | U >>> 24, m[w] = U;
            var U = P * 16843009 ^ K * 65537 ^ F * 257 ^ w * 16843008;
            f[M] = U << 24 | U >>> 8, E[M] = U << 16 | U >>> 16, A[M] = U << 8 | U >>> 24, p[M] = U, w ? (w = F ^ _[_[_[P ^ F]]], L ^= _[_[L]]) : w = L = 1;
          }
        })();
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], h = i.AES = s.extend({
          _doReset: function() {
            var _;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var v = this._keyPriorReset = this._key, w = v.words, L = v.sigBytes / 4, M = this._nRounds = L + 6, F = (M + 1) * 4, K = this._keySchedule = [], P = 0; P < F; P++)
                P < L ? K[P] = w[P] : (_ = K[P - 1], P % L ? L > 6 && P % L == 4 && (_ = o[_ >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[_ & 255]) : (_ = _ << 8 | _ >>> 24, _ = o[_ >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[_ & 255], _ ^= C[P / L | 0] << 24), K[P] = K[P - L] ^ _);
              for (var U = this._invKeySchedule = [], H = 0; H < F; H++) {
                var P = F - H;
                if (H % 4)
                  var _ = K[P];
                else
                  var _ = K[P - 4];
                H < 4 || P <= 4 ? U[H] = _ : U[H] = f[o[_ >>> 24]] ^ E[o[_ >>> 16 & 255]] ^ A[o[_ >>> 8 & 255]] ^ p[o[_ & 255]];
              }
            }
          },
          encryptBlock: function(_, v) {
            this._doCryptBlock(_, v, this._keySchedule, c, l, b, m, o);
          },
          decryptBlock: function(_, v) {
            var w = _[v + 1];
            _[v + 1] = _[v + 3], _[v + 3] = w, this._doCryptBlock(_, v, this._invKeySchedule, f, E, A, p, d);
            var w = _[v + 1];
            _[v + 1] = _[v + 3], _[v + 3] = w;
          },
          _doCryptBlock: function(_, v, w, L, M, F, K, P) {
            for (var U = this._nRounds, H = _[v] ^ w[0], W = _[v + 1] ^ w[1], re = _[v + 2] ^ w[2], oe = _[v + 3] ^ w[3], de = 4, Ae = 1; Ae < U; Ae++) {
              var be = L[H >>> 24] ^ M[W >>> 16 & 255] ^ F[re >>> 8 & 255] ^ K[oe & 255] ^ w[de++], Se = L[W >>> 24] ^ M[re >>> 16 & 255] ^ F[oe >>> 8 & 255] ^ K[H & 255] ^ w[de++], Y = L[re >>> 24] ^ M[oe >>> 16 & 255] ^ F[H >>> 8 & 255] ^ K[W & 255] ^ w[de++], x = L[oe >>> 24] ^ M[H >>> 16 & 255] ^ F[W >>> 8 & 255] ^ K[re & 255] ^ w[de++];
              H = be, W = Se, re = Y, oe = x;
            }
            var be = (P[H >>> 24] << 24 | P[W >>> 16 & 255] << 16 | P[re >>> 8 & 255] << 8 | P[oe & 255]) ^ w[de++], Se = (P[W >>> 24] << 24 | P[re >>> 16 & 255] << 16 | P[oe >>> 8 & 255] << 8 | P[H & 255]) ^ w[de++], Y = (P[re >>> 24] << 24 | P[oe >>> 16 & 255] << 16 | P[H >>> 8 & 255] << 8 | P[W & 255]) ^ w[de++], x = (P[oe >>> 24] << 24 | P[H >>> 16 & 255] << 16 | P[W >>> 8 & 255] << 8 | P[re & 255]) ^ w[de++];
            _[v] = be, _[v + 1] = Se, _[v + 2] = Y, _[v + 3] = x;
          },
          keySize: 256 / 32
        });
        a.AES = s._createHelper(h);
      }(), r.AES;
    });
  }(mn)), mn.exports;
}
var pn = { exports: {} }, Si;
function Ad() {
  return Si || (Si = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.WordArray, i = n.BlockCipher, o = a.algo, d = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], c = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], b = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], m = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], f = o.DES = i.extend({
          _doReset: function() {
            for (var C = this._key, h = C.words, _ = [], v = 0; v < 56; v++) {
              var w = d[v] - 1;
              _[v] = h[w >>> 5] >>> 31 - w % 32 & 1;
            }
            for (var L = this._subKeys = [], M = 0; M < 16; M++) {
              for (var F = L[M] = [], K = l[M], v = 0; v < 24; v++)
                F[v / 6 | 0] |= _[(c[v] - 1 + K) % 28] << 31 - v % 6, F[4 + (v / 6 | 0)] |= _[28 + (c[v + 24] - 1 + K) % 28] << 31 - v % 6;
              F[0] = F[0] << 1 | F[0] >>> 31;
              for (var v = 1; v < 7; v++)
                F[v] = F[v] >>> (v - 1) * 4 + 3;
              F[7] = F[7] << 5 | F[7] >>> 27;
            }
            for (var P = this._invSubKeys = [], v = 0; v < 16; v++)
              P[v] = L[15 - v];
          },
          encryptBlock: function(C, h) {
            this._doCryptBlock(C, h, this._subKeys);
          },
          decryptBlock: function(C, h) {
            this._doCryptBlock(C, h, this._invSubKeys);
          },
          _doCryptBlock: function(C, h, _) {
            this._lBlock = C[h], this._rBlock = C[h + 1], E.call(this, 4, 252645135), E.call(this, 16, 65535), A.call(this, 2, 858993459), A.call(this, 8, 16711935), E.call(this, 1, 1431655765);
            for (var v = 0; v < 16; v++) {
              for (var w = _[v], L = this._lBlock, M = this._rBlock, F = 0, K = 0; K < 8; K++)
                F |= b[K][((M ^ w[K]) & m[K]) >>> 0];
              this._lBlock = M, this._rBlock = L ^ F;
            }
            var P = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = P, E.call(this, 1, 1431655765), A.call(this, 8, 16711935), A.call(this, 2, 858993459), E.call(this, 16, 65535), E.call(this, 4, 252645135), C[h] = this._lBlock, C[h + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function E(C, h) {
          var _ = (this._lBlock >>> C ^ this._rBlock) & h;
          this._rBlock ^= _, this._lBlock ^= _ << C;
        }
        function A(C, h) {
          var _ = (this._rBlock >>> C ^ this._lBlock) & h;
          this._lBlock ^= _, this._rBlock ^= _ << C;
        }
        a.DES = i._createHelper(f);
        var p = o.TripleDES = i.extend({
          _doReset: function() {
            var C = this._key, h = C.words;
            if (h.length !== 2 && h.length !== 4 && h.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var _ = h.slice(0, 2), v = h.length < 4 ? h.slice(0, 2) : h.slice(2, 4), w = h.length < 6 ? h.slice(0, 2) : h.slice(4, 6);
            this._des1 = f.createEncryptor(s.create(_)), this._des2 = f.createEncryptor(s.create(v)), this._des3 = f.createEncryptor(s.create(w));
          },
          encryptBlock: function(C, h) {
            this._des1.encryptBlock(C, h), this._des2.decryptBlock(C, h), this._des3.encryptBlock(C, h);
          },
          decryptBlock: function(C, h) {
            this._des3.decryptBlock(C, h), this._des2.encryptBlock(C, h), this._des1.decryptBlock(C, h);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        a.TripleDES = i._createHelper(p);
      }(), r.TripleDES;
    });
  }(pn)), pn.exports;
}
var En = { exports: {} }, yi;
function Cd() {
  return yi || (yi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.StreamCipher, i = a.algo, o = i.RC4 = s.extend({
          _doReset: function() {
            for (var l = this._key, b = l.words, m = l.sigBytes, f = this._S = [], E = 0; E < 256; E++)
              f[E] = E;
            for (var E = 0, A = 0; E < 256; E++) {
              var p = E % m, C = b[p >>> 2] >>> 24 - p % 4 * 8 & 255;
              A = (A + f[E] + C) % 256;
              var h = f[E];
              f[E] = f[A], f[A] = h;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(l, b) {
            l[b] ^= d.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function d() {
          for (var l = this._S, b = this._i, m = this._j, f = 0, E = 0; E < 4; E++) {
            b = (b + 1) % 256, m = (m + l[b]) % 256;
            var A = l[b];
            l[b] = l[m], l[m] = A, f |= l[(l[b] + l[m]) % 256] << 24 - E * 8;
          }
          return this._i = b, this._j = m, f;
        }
        a.RC4 = s._createHelper(o);
        var c = i.RC4Drop = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: o.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            o._doReset.call(this);
            for (var l = this.cfg.drop; l > 0; l--)
              d.call(this);
          }
        });
        a.RC4Drop = s._createHelper(c);
      }(), r.RC4;
    });
  }(En)), En.exports;
}
var bn = { exports: {} }, Ni;
function _d() {
  return Ni || (Ni = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.StreamCipher, i = a.algo, o = [], d = [], c = [], l = i.Rabbit = s.extend({
          _doReset: function() {
            for (var m = this._key.words, f = this.cfg.iv, E = 0; E < 4; E++)
              m[E] = (m[E] << 8 | m[E] >>> 24) & 16711935 | (m[E] << 24 | m[E] >>> 8) & 4278255360;
            var A = this._X = [
              m[0],
              m[3] << 16 | m[2] >>> 16,
              m[1],
              m[0] << 16 | m[3] >>> 16,
              m[2],
              m[1] << 16 | m[0] >>> 16,
              m[3],
              m[2] << 16 | m[1] >>> 16
            ], p = this._C = [
              m[2] << 16 | m[2] >>> 16,
              m[0] & 4294901760 | m[1] & 65535,
              m[3] << 16 | m[3] >>> 16,
              m[1] & 4294901760 | m[2] & 65535,
              m[0] << 16 | m[0] >>> 16,
              m[2] & 4294901760 | m[3] & 65535,
              m[1] << 16 | m[1] >>> 16,
              m[3] & 4294901760 | m[0] & 65535
            ];
            this._b = 0;
            for (var E = 0; E < 4; E++)
              b.call(this);
            for (var E = 0; E < 8; E++)
              p[E] ^= A[E + 4 & 7];
            if (f) {
              var C = f.words, h = C[0], _ = C[1], v = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, w = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, L = v >>> 16 | w & 4294901760, M = w << 16 | v & 65535;
              p[0] ^= v, p[1] ^= L, p[2] ^= w, p[3] ^= M, p[4] ^= v, p[5] ^= L, p[6] ^= w, p[7] ^= M;
              for (var E = 0; E < 4; E++)
                b.call(this);
            }
          },
          _doProcessBlock: function(m, f) {
            var E = this._X;
            b.call(this), o[0] = E[0] ^ E[5] >>> 16 ^ E[3] << 16, o[1] = E[2] ^ E[7] >>> 16 ^ E[5] << 16, o[2] = E[4] ^ E[1] >>> 16 ^ E[7] << 16, o[3] = E[6] ^ E[3] >>> 16 ^ E[1] << 16;
            for (var A = 0; A < 4; A++)
              o[A] = (o[A] << 8 | o[A] >>> 24) & 16711935 | (o[A] << 24 | o[A] >>> 8) & 4278255360, m[f + A] ^= o[A];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function b() {
          for (var m = this._X, f = this._C, E = 0; E < 8; E++)
            d[E] = f[E];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var E = 0; E < 8; E++) {
            var A = m[E] + f[E], p = A & 65535, C = A >>> 16, h = ((p * p >>> 17) + p * C >>> 15) + C * C, _ = ((A & 4294901760) * A | 0) + ((A & 65535) * A | 0);
            c[E] = h ^ _;
          }
          m[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, m[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, m[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, m[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, m[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, m[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, m[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, m[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        a.Rabbit = s._createHelper(l);
      }(), r.Rabbit;
    });
  }(bn)), bn.exports;
}
var Tn = { exports: {} }, Ii;
function Sd() {
  return Ii || (Ii = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.StreamCipher, i = a.algo, o = [], d = [], c = [], l = i.RabbitLegacy = s.extend({
          _doReset: function() {
            var m = this._key.words, f = this.cfg.iv, E = this._X = [
              m[0],
              m[3] << 16 | m[2] >>> 16,
              m[1],
              m[0] << 16 | m[3] >>> 16,
              m[2],
              m[1] << 16 | m[0] >>> 16,
              m[3],
              m[2] << 16 | m[1] >>> 16
            ], A = this._C = [
              m[2] << 16 | m[2] >>> 16,
              m[0] & 4294901760 | m[1] & 65535,
              m[3] << 16 | m[3] >>> 16,
              m[1] & 4294901760 | m[2] & 65535,
              m[0] << 16 | m[0] >>> 16,
              m[2] & 4294901760 | m[3] & 65535,
              m[1] << 16 | m[1] >>> 16,
              m[3] & 4294901760 | m[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              b.call(this);
            for (var p = 0; p < 8; p++)
              A[p] ^= E[p + 4 & 7];
            if (f) {
              var C = f.words, h = C[0], _ = C[1], v = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, w = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, L = v >>> 16 | w & 4294901760, M = w << 16 | v & 65535;
              A[0] ^= v, A[1] ^= L, A[2] ^= w, A[3] ^= M, A[4] ^= v, A[5] ^= L, A[6] ^= w, A[7] ^= M;
              for (var p = 0; p < 4; p++)
                b.call(this);
            }
          },
          _doProcessBlock: function(m, f) {
            var E = this._X;
            b.call(this), o[0] = E[0] ^ E[5] >>> 16 ^ E[3] << 16, o[1] = E[2] ^ E[7] >>> 16 ^ E[5] << 16, o[2] = E[4] ^ E[1] >>> 16 ^ E[7] << 16, o[3] = E[6] ^ E[3] >>> 16 ^ E[1] << 16;
            for (var A = 0; A < 4; A++)
              o[A] = (o[A] << 8 | o[A] >>> 24) & 16711935 | (o[A] << 24 | o[A] >>> 8) & 4278255360, m[f + A] ^= o[A];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function b() {
          for (var m = this._X, f = this._C, E = 0; E < 8; E++)
            d[E] = f[E];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var E = 0; E < 8; E++) {
            var A = m[E] + f[E], p = A & 65535, C = A >>> 16, h = ((p * p >>> 17) + p * C >>> 15) + C * C, _ = ((A & 4294901760) * A | 0) + ((A & 65535) * A | 0);
            c[E] = h ^ _;
          }
          m[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, m[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, m[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, m[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, m[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, m[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, m[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, m[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        a.RabbitLegacy = s._createHelper(l);
      }(), r.RabbitLegacy;
    });
  }(Tn)), Tn.exports;
}
var xn = { exports: {} }, vi;
function yd() {
  return vi || (vi = 1, function(e, t) {
    (function(r, a, n) {
      e.exports = a(_e(), Ot(), Xt(), Rt(), qe());
    })(Ee, function(r) {
      return function() {
        var a = r, n = a.lib, s = n.BlockCipher, i = a.algo;
        const o = 16, d = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], c = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var l = {
          pbox: [],
          sbox: []
        };
        function b(p, C) {
          let h = C >> 24 & 255, _ = C >> 16 & 255, v = C >> 8 & 255, w = C & 255, L = p.sbox[0][h] + p.sbox[1][_];
          return L = L ^ p.sbox[2][v], L = L + p.sbox[3][w], L;
        }
        function m(p, C, h) {
          let _ = C, v = h, w;
          for (let L = 0; L < o; ++L)
            _ = _ ^ p.pbox[L], v = b(p, _) ^ v, w = _, _ = v, v = w;
          return w = _, _ = v, v = w, v = v ^ p.pbox[o], _ = _ ^ p.pbox[o + 1], { left: _, right: v };
        }
        function f(p, C, h) {
          let _ = C, v = h, w;
          for (let L = o + 1; L > 1; --L)
            _ = _ ^ p.pbox[L], v = b(p, _) ^ v, w = _, _ = v, v = w;
          return w = _, _ = v, v = w, v = v ^ p.pbox[1], _ = _ ^ p.pbox[0], { left: _, right: v };
        }
        function E(p, C, h) {
          for (let M = 0; M < 4; M++) {
            p.sbox[M] = [];
            for (let F = 0; F < 256; F++)
              p.sbox[M][F] = c[M][F];
          }
          let _ = 0;
          for (let M = 0; M < o + 2; M++)
            p.pbox[M] = d[M] ^ C[_], _++, _ >= h && (_ = 0);
          let v = 0, w = 0, L = 0;
          for (let M = 0; M < o + 2; M += 2)
            L = m(p, v, w), v = L.left, w = L.right, p.pbox[M] = v, p.pbox[M + 1] = w;
          for (let M = 0; M < 4; M++)
            for (let F = 0; F < 256; F += 2)
              L = m(p, v, w), v = L.left, w = L.right, p.sbox[M][F] = v, p.sbox[M][F + 1] = w;
          return !0;
        }
        var A = i.Blowfish = s.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var p = this._keyPriorReset = this._key, C = p.words, h = p.sigBytes / 4;
              E(l, C, h);
            }
          },
          encryptBlock: function(p, C) {
            var h = m(l, p[C], p[C + 1]);
            p[C] = h.left, p[C + 1] = h.right;
          },
          decryptBlock: function(p, C) {
            var h = f(l, p[C], p[C + 1]);
            p[C] = h.left, p[C + 1] = h.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        a.Blowfish = s._createHelper(A);
      }(), r.Blowfish;
    });
  }(xn)), xn.exports;
}
(function(e, t) {
  (function(r, a, n) {
    e.exports = a(_e(), Sa(), td(), rd(), Ot(), ad(), Xt(), T0(), ns(), nd(), x0(), sd(), id(), ud(), ss(), od(), Rt(), qe(), cd(), dd(), ld(), fd(), hd(), md(), pd(), Ed(), bd(), Td(), xd(), gd(), Ad(), Cd(), _d(), Sd(), yd());
  })(Ee, function(r) {
    return r;
  });
})(b0);
var Nd = b0.exports;
const vt = /* @__PURE__ */ Ut(Nd);
function Id(e) {
  return vt.TripleDES.encrypt(e, vt.enc.Utf8.parse(E0), {
    iv: vt.enc.Utf8.parse(jc)
  }).toString();
}
function vd(e, t, r) {
  return e ? vt.MD5(vt.MD5(t).toString() + r + e).toString() : null;
}
const Dd = m0("1234567890abcdef"), Od = () => Math.floor(Date.now() / 1e3 + 60 * 60 * 12), is = async (e, t, r = !1) => {
  const a = {
    childmode: "0",
    app_version: "11.5",
    appid: Kc,
    lang: "en",
    expired_date: `${Od()}`,
    platform: "android",
    channel: "Website"
  }, n = Id(
    JSON.stringify({
      ...a,
      ...t
    })
  ), s = vt.MD5(Ws).toString(), i = vd(n, Ws, E0), o = JSON.stringify({
    app_key: s,
    verify: i,
    encrypt_data: n
  }), d = btoa(o), c = new URLSearchParams();
  c.append("data", d), c.append("appid", "27"), c.append("platform", "android"), c.append("version", "129"), c.append("medium", "Website"), c.append("token", Dd(32));
  const l = r ? Vs[1] : Vs[0], b = await e.proxiedFetcher(l, {
    method: "POST",
    headers: {
      Platform: "android",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "okhttp/3.2.0"
    },
    body: c
  });
  return JSON.parse(b);
};
async function g0(e, t, r, a, n, s) {
  const o = {
    fid: r,
    uid: "",
    module: a === "movie" ? "Movie_srt_list_v2" : "TV_srt_list_v2",
    mid: a === "movie" ? t : void 0,
    tid: a !== "movie" ? t : void 0,
    episode: n == null ? void 0 : n.toString(),
    season: s == null ? void 0 : s.toString()
  }, c = (await is(e, o)).data.list;
  let l = [];
  return c.forEach((b) => {
    const m = b.subtitles.sort((p, C) => C.order - p.order)[0];
    if (!m) return;
    const f = m.file_path.replace(Gs[0], Gs[1]).replace(/\s/g, "+").replace(/[()]/g, (p) => `%${p.charCodeAt(0).toString(16)}`), E = Ht(f);
    !E || !_c(m.lang) || l.push({
      id: f,
      language: m.lang,
      hasCorsRestrictions: !0,
      type: E,
      url: f
    });
  }), l = _a(l), l;
}
function Rd(e) {
  return new URL(e).pathname.split("/")[2];
}
const wd = ge({
  id: "febbox-hls",
  name: "Febbox (HLS)",
  rank: 160,
  disabled: !0,
  async scrape(e) {
    var c;
    const { type: t, id: r, season: a, episode: n } = p0(e.url), s = await e.proxiedFetcher("/index/share_link", {
      baseUrl: zc,
      query: {
        id: r,
        type: t === "movie" ? "1" : "2"
      }
    });
    if (!((c = s == null ? void 0 : s.data) != null && c.link)) throw new Error("No embed url found");
    e.progress(30);
    const i = Rd(s.data.link), d = (await Gc(e, i, t, a, n))[0];
    if (!d) throw new Error("No playable mp4 stream found");
    return e.progress(70), {
      stream: [
        {
          id: "primary",
          type: "hls",
          flags: [],
          captions: await g0(e, r, d.fid, t, a, n),
          playlist: `https://www.febbox.com/hls/main/${d.oss_fid}.m3u8`
        }
      ]
    };
  }
}), A0 = ["360", "480", "720", "1080", "4k"];
function Ld(e) {
  const t = e.real_quality.replace("p", "").toLowerCase();
  return A0.includes(t) ? {
    real_quality: t,
    path: e.path,
    fid: e.fid
  } : null;
}
async function Bd(e, t) {
  var s;
  const r = (await is(e, t)).data, a = r.list.map((i) => Ld(i)).filter((i) => !!i), n = {};
  return A0.forEach((i) => {
    const o = a.find((d) => d.real_quality === i && d.path);
    o && (n[i] = {
      type: "mp4",
      url: o.path
    });
  }), {
    qualities: n,
    fid: (s = r.list[0]) == null ? void 0 : s.fid
  };
}
const C0 = ge({
  id: "febbox-mp4",
  name: "Febbox (MP4)",
  rank: 190,
  async scrape(e) {
    const { type: t, id: r, season: a, episode: n } = p0(e.url);
    let s = null;
    if (t === "movie" ? s = {
      uid: "",
      module: "Movie_downloadurl_v3",
      mid: r,
      oss: "1",
      group: ""
    } : t === "show" && (s = {
      uid: "",
      module: "TV_downloadurl_v3",
      tid: r,
      season: a,
      episode: n,
      oss: "1",
      group: ""
    }), !s) throw Error("Incorrect type");
    const { qualities: i, fid: o } = await Bd(e, s);
    if (o === void 0) throw new Error("No streamable file found");
    return e.progress(70), {
      stream: [
        {
          id: "primary",
          captions: await g0(e, r, o, t, n, a),
          qualities: i,
          type: "file",
          flags: [ae.CORS_ALLOWED]
        }
      ]
    };
  }
}), Pd = /file: ?"(http.*?)"/, Fd = /\{file:\s"([^"]+)",\skind:\s"thumbnails"\}/g, kd = ge({
  id: "filelions",
  name: "filelions",
  rank: 115,
  async scrape(e) {
    const t = await e.proxiedFetcher.full(e.url, {
      headers: {
        referer: e.url
      }
    }), r = t.body, a = new URL(t.finalUrl), n = r.match(Pd) ?? [], s = Fd.exec(r), i = n[1];
    if (!i) throw new Error("Stream url not found");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: i,
          flags: [ae.IP_LOCKED, ae.CORS_ALLOWED],
          captions: [],
          ...s ? {
            thumbnailTrack: {
              type: "vtt",
              url: a.origin + s[1]
            }
          } : {}
        }
      ]
    };
  }
}), Di = "https://mixdrop.ag", Md = /(eval\(function\(p,a,c,k,e,d\){.*{}\)\))/, Ud = /MDCore\.wurl="(.*?)";/, yr = ge({
  id: "mixdrop",
  name: "MixDrop",
  rank: 198,
  async scrape(e) {
    let t = e.url;
    e.url.includes("primewire") && (t = (await e.fetcher.full(e.url)).finalUrl);
    const r = new URL(t).pathname.split("/")[2], n = (await e.proxiedFetcher(`/e/${r}`, {
      baseUrl: Di
    })).match(Md);
    if (!n)
      throw new Error("failed to find packed mixdrop JavaScript");
    const i = ft(n[1]).match(Ud);
    if (!i)
      throw new Error("failed to find packed mixdrop source link");
    const o = i[1];
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [ae.IP_LOCKED],
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: o.startsWith("http") ? o : `https:${o}`,
              // URLs don't always start with the protocol
              headers: {
                // MixDrop requires this header on all streams
                Referer: Di
              }
            }
          }
        }
      ]
    };
  }
}), _0 = ge({
  id: "mp4upload",
  name: "mp4upload",
  rank: 170,
  async scrape(e) {
    const t = await e.proxiedFetcher(e.url), r = new RegExp('(?<=player\\.src\\()\\s*{\\s*type:\\s*"[^"]+",\\s*src:\\s*"([^"]+)"\\s*}\\s*(?=\\);)', "s"), n = (t.match(r) ?? [])[1];
    if (!n) throw new Error("Stream url not found in embed code");
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [ae.CORS_ALLOWED],
          captions: [],
          qualities: {
            1080: {
              type: "mp4",
              url: n
            }
          }
        }
      ]
    };
  }
}), Hd = /eval\(function\(h,u,n,t,e,r\).*?\("(.*?)",\d*?,"(.*?)",(\d*?),(\d*?),\d*?\)\)/, Xd = /file:"(.*?)"/;
function qd(e, t, r, a) {
  const n = t[a];
  return e.split(n).filter((o) => o).map((o) => {
    const d = o.split("").reduceRight((c, l, b) => c + t.indexOf(l) * a ** (o.length - 1 - b), 0);
    return String.fromCharCode(d - r);
  }).join("");
}
const S0 = ge({
  id: "streambucket",
  name: "StreamBucket",
  rank: 196,
  // TODO - Disabled until ctx.fetcher and ctx.proxiedFetcher don't trigger bot detection
  disabled: !0,
  async scrape(e) {
    const r = await (await fetch(e.url)).text();
    if (r.includes("captcha-checkbox"))
      throw new Error("StreamBucket got captchaed");
    let a = r.match(Hd);
    if (!a)
      throw new Error("Failed to find StreamBucket hunter JavaScript");
    const n = a[1], s = a[2], i = Number(a[3]), o = Number(a[4]);
    if (Number.isNaN(i))
      throw new Error("StreamBucket hunter JavaScript charCodeOffset is not a valid number");
    if (Number.isNaN(o))
      throw new Error("StreamBucket hunter JavaScript delimiterOffset is not a valid number");
    if (a = qd(n, s, i, o).match(Xd), !a)
      throw new Error("Failed to find StreamBucket HLS link");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: a[1],
          flags: [ae.CORS_ALLOWED],
          captions: []
        }
      ]
    };
  }
}), us = {
  xml: !1,
  decodeEntities: !0
}, Oi = {
  _useHtmlParser2: !0,
  xmlMode: !0
};
function kn(e) {
  return e != null && e.xml ? typeof e.xml == "boolean" ? Oi : { ...Oi, ...e.xml } : e ?? void 0;
}
var ve;
(function(e) {
  e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
})(ve || (ve = {}));
function Yd(e) {
  return e.type === ve.Tag || e.type === ve.Script || e.type === ve.Style;
}
const $d = ve.Root, Vd = ve.Text, Wd = ve.Directive, Gd = ve.Comment, jd = ve.Script, Kd = ve.Style, zd = ve.Tag, Qd = ve.CDATA, Zd = ve.Doctype;
class y0 {
  constructor() {
    this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(t) {
    this.parent = t;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(t) {
    this.prev = t;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(t) {
    this.next = t;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(t = !1) {
    return ua(this, t);
  }
}
class os extends y0 {
  /**
   * @param data The content of the data node
   */
  constructor(t) {
    super(), this.data = t;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(t) {
    this.data = t;
  }
}
class Nr extends os {
  constructor() {
    super(...arguments), this.type = ve.Text;
  }
  get nodeType() {
    return 3;
  }
}
class cs extends os {
  constructor() {
    super(...arguments), this.type = ve.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class ds extends os {
  constructor(t, r) {
    super(r), this.name = t, this.type = ve.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class ls extends y0 {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(t) {
    super(), this.children = t;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var t;
    return (t = this.children[0]) !== null && t !== void 0 ? t : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(t) {
    this.children = t;
  }
}
class N0 extends ls {
  constructor() {
    super(...arguments), this.type = ve.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
class kt extends ls {
  constructor() {
    super(...arguments), this.type = ve.Root;
  }
  get nodeType() {
    return 9;
  }
}
class fs extends ls {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(t, r, a = [], n = t === "script" ? ve.Script : t === "style" ? ve.Style : ve.Tag) {
    super(a), this.name = t, this.attribs = r, this.type = n;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(t) {
    this.name = t;
  }
  get attributes() {
    return Object.keys(this.attribs).map((t) => {
      var r, a;
      return {
        name: t,
        value: this.attribs[t],
        namespace: (r = this["x-attribsNamespace"]) === null || r === void 0 ? void 0 : r[t],
        prefix: (a = this["x-attribsPrefix"]) === null || a === void 0 ? void 0 : a[t]
      };
    });
  }
}
function fe(e) {
  return Yd(e);
}
function ya(e) {
  return e.type === ve.CDATA;
}
function ct(e) {
  return e.type === ve.Text;
}
function Na(e) {
  return e.type === ve.Comment;
}
function Mn(e) {
  return e.type === ve.Directive;
}
function qt(e) {
  return e.type === ve.Root;
}
function ke(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
function ua(e, t = !1) {
  let r;
  if (ct(e))
    r = new Nr(e.data);
  else if (Na(e))
    r = new cs(e.data);
  else if (fe(e)) {
    const a = t ? gn(e.children) : [], n = new fs(e.name, { ...e.attribs }, a);
    a.forEach((s) => s.parent = n), e.namespace != null && (n.namespace = e.namespace), e["x-attribsNamespace"] && (n["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (n["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), r = n;
  } else if (ya(e)) {
    const a = t ? gn(e.children) : [], n = new N0(a);
    a.forEach((s) => s.parent = n), r = n;
  } else if (qt(e)) {
    const a = t ? gn(e.children) : [], n = new kt(a);
    a.forEach((s) => s.parent = n), e["x-mode"] && (n["x-mode"] = e["x-mode"]), r = n;
  } else if (Mn(e)) {
    const a = new ds(e.name, e.data);
    e["x-name"] != null && (a["x-name"] = e["x-name"], a["x-publicId"] = e["x-publicId"], a["x-systemId"] = e["x-systemId"]), r = a;
  } else
    throw new Error(`Not implemented yet: ${e.type}`);
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
function gn(e) {
  const t = e.map((r) => ua(r, !0));
  for (let r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
const Ri = {
  withStartIndices: !1,
  withEndIndices: !1,
  xmlMode: !1
};
class Jd {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(t, r, a) {
    this.dom = [], this.root = new kt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof r == "function" && (a = r, r = Ri), typeof t == "object" && (r = t, t = void 0), this.callback = t ?? null, this.options = r ?? Ri, this.elementCB = a ?? null;
  }
  onparserinit(t) {
    this.parser = t;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [], this.root = new kt(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
  }
  onerror(t) {
    this.handleCallback(t);
  }
  onclosetag() {
    this.lastNode = null;
    const t = this.tagStack.pop();
    this.options.withEndIndices && (t.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(t);
  }
  onopentag(t, r) {
    const a = this.options.xmlMode ? ve.Tag : void 0, n = new fs(t, r, void 0, a);
    this.addNode(n), this.tagStack.push(n);
  }
  ontext(t) {
    const { lastNode: r } = this;
    if (r && r.type === ve.Text)
      r.data += t, this.options.withEndIndices && (r.endIndex = this.parser.endIndex);
    else {
      const a = new Nr(t);
      this.addNode(a), this.lastNode = a;
    }
  }
  oncomment(t) {
    if (this.lastNode && this.lastNode.type === ve.Comment) {
      this.lastNode.data += t;
      return;
    }
    const r = new cs(t);
    this.addNode(r), this.lastNode = r;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const t = new Nr(""), r = new N0([t]);
    this.addNode(r), t.parent = r, this.lastNode = t;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(t, r) {
    const a = new ds(t, r);
    this.addNode(a);
  }
  handleCallback(t) {
    if (typeof this.callback == "function")
      this.callback(t, this.dom);
    else if (t)
      throw t;
  }
  addNode(t) {
    const r = this.tagStack[this.tagStack.length - 1], a = r.children[r.children.length - 1];
    this.options.withStartIndices && (t.startIndex = this.parser.startIndex), this.options.withEndIndices && (t.endIndex = this.parser.endIndex), r.children.push(t), a && (t.prev = a, a.next = t), t.parent = r, this.lastNode = null;
  }
}
const hs = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), I0 = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var An;
const el = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Un = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (An = String.fromCodePoint) !== null && An !== void 0 ? An : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function v0(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = el.get(e)) !== null && t !== void 0 ? t : e;
}
var Xe;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Xe || (Xe = {}));
const tl = 32;
var at;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(at || (at = {}));
function Hn(e) {
  return e >= Xe.ZERO && e <= Xe.NINE;
}
function rl(e) {
  return e >= Xe.UPPER_A && e <= Xe.UPPER_F || e >= Xe.LOWER_A && e <= Xe.LOWER_F;
}
function al(e) {
  return e >= Xe.UPPER_A && e <= Xe.UPPER_Z || e >= Xe.LOWER_A && e <= Xe.LOWER_Z || Hn(e);
}
function nl(e) {
  return e === Xe.EQUALS || al(e);
}
var He;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(He || (He = {}));
var Tt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Tt || (Tt = {}));
class D0 {
  constructor(t, r, a) {
    this.decodeTree = t, this.emitCodePoint = r, this.errors = a, this.state = He.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Tt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = He.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, r) {
    switch (this.state) {
      case He.EntityStart:
        return t.charCodeAt(r) === Xe.NUM ? (this.state = He.NumericStart, this.consumed += 1, this.stateNumericStart(t, r + 1)) : (this.state = He.NamedEntity, this.stateNamedEntity(t, r));
      case He.NumericStart:
        return this.stateNumericStart(t, r);
      case He.NumericDecimal:
        return this.stateNumericDecimal(t, r);
      case He.NumericHex:
        return this.stateNumericHex(t, r);
      case He.NamedEntity:
        return this.stateNamedEntity(t, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, r) {
    return r >= t.length ? -1 : (t.charCodeAt(r) | tl) === Xe.LOWER_X ? (this.state = He.NumericHex, this.consumed += 1, this.stateNumericHex(t, r + 1)) : (this.state = He.NumericDecimal, this.stateNumericDecimal(t, r));
  }
  addToNumericResult(t, r, a, n) {
    if (r !== a) {
      const s = a - r;
      this.result = this.result * Math.pow(n, s) + parseInt(t.substr(r, s), n), this.consumed += s;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, r) {
    const a = r;
    for (; r < t.length; ) {
      const n = t.charCodeAt(r);
      if (Hn(n) || rl(n))
        r += 1;
      else
        return this.addToNumericResult(t, a, r, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(t, a, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, r) {
    const a = r;
    for (; r < t.length; ) {
      const n = t.charCodeAt(r);
      if (Hn(n))
        r += 1;
      else
        return this.addToNumericResult(t, a, r, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(t, a, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, r) {
    var a;
    if (this.consumed <= r)
      return (a = this.errors) === null || a === void 0 || a.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === Xe.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Tt.Strict)
      return 0;
    return this.emitCodePoint(v0(this.result), this.consumed), this.errors && (t !== Xe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, r) {
    const { decodeTree: a } = this;
    let n = a[this.treeIndex], s = (n & at.VALUE_LENGTH) >> 14;
    for (; r < t.length; r++, this.excess++) {
      const i = t.charCodeAt(r);
      if (this.treeIndex = R0(a, n, this.treeIndex + Math.max(1, s), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Tt.Attribute && // We shouldn't have consumed any characters after the entity,
        (s === 0 || // And there should be no invalid characters.
        nl(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = a[this.treeIndex], s = (n & at.VALUE_LENGTH) >> 14, s !== 0) {
        if (i === Xe.SEMI)
          return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
        this.decodeMode !== Tt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: r, decodeTree: a } = this, n = (a[r] & at.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, n, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, r, a) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(r === 1 ? n[t] & ~at.VALUE_LENGTH : n[t + 1], a), r === 3 && this.emitCodePoint(n[t + 2], a), a;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case He.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Tt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case He.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case He.NumericHex:
        return this.emitNumericEntity(0, 3);
      case He.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case He.EntityStart:
        return 0;
    }
  }
}
function O0(e) {
  let t = "";
  const r = new D0(e, (a) => t += Un(a));
  return function(n, s) {
    let i = 0, o = 0;
    for (; (o = n.indexOf("&", o)) >= 0; ) {
      t += n.slice(i, o), r.startEntity(s);
      const c = r.write(
        n,
        // Skip the "&"
        o + 1
      );
      if (c < 0) {
        i = o + r.end();
        break;
      }
      i = o + c, o = c === 0 ? i + 1 : i;
    }
    const d = t + n.slice(i);
    return t = "", d;
  };
}
function R0(e, t, r, a) {
  const n = (t & at.BRANCH_LENGTH) >> 7, s = t & at.JUMP_TABLE;
  if (n === 0)
    return s !== 0 && a === s ? r : -1;
  if (s) {
    const d = a - s;
    return d < 0 || d >= n ? -1 : e[r + d] - 1;
  }
  let i = r, o = i + n - 1;
  for (; i <= o; ) {
    const d = i + o >>> 1, c = e[d];
    if (c < a)
      i = d + 1;
    else if (c > a)
      o = d - 1;
    else
      return e[d + n];
  }
  return -1;
}
O0(hs);
O0(I0);
const wi = /["&'<>$\x80-\uFFFF]/g, sl = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]), il = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (e, t) => e.codePointAt(t) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (e, t) => (e.charCodeAt(t) & 64512) === 55296 ? (e.charCodeAt(t) - 55296) * 1024 + e.charCodeAt(t + 1) - 56320 + 65536 : e.charCodeAt(t)
  )
);
function w0(e) {
  let t = "", r = 0, a;
  for (; (a = wi.exec(e)) !== null; ) {
    const n = a.index, s = e.charCodeAt(n), i = sl.get(s);
    i !== void 0 ? (t += e.substring(r, n) + i, r = n + 1) : (t += `${e.substring(r, n)}&#x${il(e, n).toString(16)};`, r = wi.lastIndex += +((s & 64512) === 55296));
  }
  return t + e.substr(r);
}
function L0(e, t) {
  return function(a) {
    let n, s = 0, i = "";
    for (; n = e.exec(a); )
      s !== n.index && (i += a.substring(s, n.index)), i += t.get(n[0].charCodeAt(0)), s = n.index + 1;
    return i + a.substring(s);
  };
}
const B0 = L0(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
])), P0 = L0(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
])), ul = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((e) => [e.toLowerCase(), e])), ol = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((e) => [e.toLowerCase(), e])), cl = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function dl(e) {
  return e.replace(/"/g, "&quot;");
}
function ll(e, t) {
  var r;
  if (!e)
    return;
  const a = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? dl : t.xmlMode || t.encodeEntities !== "utf8" ? w0 : B0;
  return Object.keys(e).map((n) => {
    var s, i;
    const o = (s = e[n]) !== null && s !== void 0 ? s : "";
    return t.xmlMode === "foreign" && (n = (i = ol.get(n)) !== null && i !== void 0 ? i : n), !t.emptyAttrs && !t.xmlMode && o === "" ? n : `${n}="${a(o)}"`;
  }).join(" ");
}
const Li = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Ia(e, t = {}) {
  const r = "length" in e ? e : [e];
  let a = "";
  for (let n = 0; n < r.length; n++)
    a += fl(r[n], t);
  return a;
}
function fl(e, t) {
  switch (e.type) {
    case $d:
      return Ia(e.children, t);
    case Zd:
    case Wd:
      return El(e);
    case Gd:
      return xl(e);
    case Qd:
      return Tl(e);
    case jd:
    case Kd:
    case zd:
      return pl(e, t);
    case Vd:
      return bl(e, t);
  }
}
const hl = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), ml = /* @__PURE__ */ new Set(["svg", "math"]);
function pl(e, t) {
  var r;
  t.xmlMode === "foreign" && (e.name = (r = ul.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && hl.has(e.parent.name) && (t = { ...t, xmlMode: !1 })), !t.xmlMode && ml.has(e.name) && (t = { ...t, xmlMode: "foreign" });
  let a = `<${e.name}`;
  const n = ll(e.attribs, t);
  return n && (a += ` ${n}`), e.children.length === 0 && (t.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    t.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    t.selfClosingTags && Li.has(e.name)
  )) ? (t.xmlMode || (a += " "), a += "/>") : (a += ">", e.children.length > 0 && (a += Ia(e.children, t)), (t.xmlMode || !Li.has(e.name)) && (a += `</${e.name}>`)), a;
}
function El(e) {
  return `<${e.data}>`;
}
function bl(e, t) {
  var r;
  let a = e.data || "";
  return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && cl.has(e.parent.name)) && (a = t.xmlMode || t.encodeEntities !== "utf8" ? w0(a) : P0(a)), a;
}
function Tl(e) {
  return `<![CDATA[${e.children[0].data}]]>`;
}
function xl(e) {
  return `<!--${e.data}-->`;
}
function F0(e, t) {
  return Ia(e, t);
}
function gl(e, t) {
  return ke(e) ? e.children.map((r) => F0(r, t)).join("") : "";
}
function Qr(e) {
  return Array.isArray(e) ? e.map(Qr).join("") : fe(e) ? e.name === "br" ? `
` : Qr(e.children) : ya(e) ? Qr(e.children) : ct(e) ? e.data : "";
}
function Jt(e) {
  return Array.isArray(e) ? e.map(Jt).join("") : ke(e) && !Na(e) ? Jt(e.children) : ct(e) ? e.data : "";
}
function oa(e) {
  return Array.isArray(e) ? e.map(oa).join("") : ke(e) && (e.type === ve.Tag || ya(e)) ? oa(e.children) : ct(e) ? e.data : "";
}
function va(e) {
  return ke(e) ? e.children : [];
}
function k0(e) {
  return e.parent || null;
}
function M0(e) {
  const t = k0(e);
  if (t != null)
    return va(t);
  const r = [e];
  let { prev: a, next: n } = e;
  for (; a != null; )
    r.unshift(a), { prev: a } = a;
  for (; n != null; )
    r.push(n), { next: n } = n;
  return r;
}
function Al(e, t) {
  var r;
  return (r = e.attribs) === null || r === void 0 ? void 0 : r[t];
}
function Cl(e, t) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null;
}
function _l(e) {
  return e.name;
}
function ms(e) {
  let { next: t } = e;
  for (; t !== null && !fe(t); )
    ({ next: t } = t);
  return t;
}
function ps(e) {
  let { prev: t } = e;
  for (; t !== null && !fe(t); )
    ({ prev: t } = t);
  return t;
}
function Yt(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    const t = e.parent.children, r = t.lastIndexOf(e);
    r >= 0 && t.splice(r, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
function Sl(e, t) {
  const r = t.prev = e.prev;
  r && (r.next = t);
  const a = t.next = e.next;
  a && (a.prev = t);
  const n = t.parent = e.parent;
  if (n) {
    const s = n.children;
    s[s.lastIndexOf(e)] = t, e.parent = null;
  }
}
function yl(e, t) {
  if (Yt(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    const r = e.children[e.children.length - 2];
    r.next = t, t.prev = r;
  } else
    t.prev = null;
}
function Nl(e, t) {
  Yt(t);
  const { parent: r } = e, a = e.next;
  if (t.next = a, t.prev = e, e.next = t, t.parent = r, a) {
    if (a.prev = t, r) {
      const n = r.children;
      n.splice(n.lastIndexOf(a), 0, t);
    }
  } else r && r.children.push(t);
}
function Il(e, t) {
  if (Yt(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    const r = e.children[1];
    r.prev = t, t.next = r;
  } else
    t.next = null;
}
function vl(e, t) {
  Yt(t);
  const { parent: r } = e;
  if (r) {
    const a = r.children;
    a.splice(a.indexOf(e), 0, t);
  }
  e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t;
}
function wr(e, t, r = !0, a = 1 / 0) {
  return Es(e, Array.isArray(t) ? t : [t], r, a);
}
function Es(e, t, r, a) {
  const n = [], s = [Array.isArray(t) ? t : [t]], i = [0];
  for (; ; ) {
    if (i[0] >= s[0].length) {
      if (i.length === 1)
        return n;
      s.shift(), i.shift();
      continue;
    }
    const o = s[0][i[0]++];
    if (e(o) && (n.push(o), --a <= 0))
      return n;
    r && ke(o) && o.children.length > 0 && (i.unshift(0), s.unshift(o.children));
  }
}
function Dl(e, t) {
  return t.find(e);
}
function bs(e, t, r = !0) {
  const a = Array.isArray(t) ? t : [t];
  for (let n = 0; n < a.length; n++) {
    const s = a[n];
    if (fe(s) && e(s))
      return s;
    if (r && ke(s) && s.children.length > 0) {
      const i = bs(e, s.children, !0);
      if (i)
        return i;
    }
  }
  return null;
}
function U0(e, t) {
  return (Array.isArray(t) ? t : [t]).some((r) => fe(r) && e(r) || ke(r) && U0(e, r.children));
}
function Ol(e, t) {
  const r = [], a = [Array.isArray(t) ? t : [t]], n = [0];
  for (; ; ) {
    if (n[0] >= a[0].length) {
      if (a.length === 1)
        return r;
      a.shift(), n.shift();
      continue;
    }
    const s = a[0][n[0]++];
    fe(s) && e(s) && r.push(s), ke(s) && s.children.length > 0 && (n.unshift(0), a.unshift(s.children));
  }
}
const ca = {
  tag_name(e) {
    return typeof e == "function" ? (t) => fe(t) && e(t.name) : e === "*" ? fe : (t) => fe(t) && t.name === e;
  },
  tag_type(e) {
    return typeof e == "function" ? (t) => e(t.type) : (t) => t.type === e;
  },
  tag_contains(e) {
    return typeof e == "function" ? (t) => ct(t) && e(t.data) : (t) => ct(t) && t.data === e;
  }
};
function Ts(e, t) {
  return typeof t == "function" ? (r) => fe(r) && t(r.attribs[e]) : (r) => fe(r) && r.attribs[e] === t;
}
function Rl(e, t) {
  return (r) => e(r) || t(r);
}
function H0(e) {
  const t = Object.keys(e).map((r) => {
    const a = e[r];
    return Object.prototype.hasOwnProperty.call(ca, r) ? ca[r](a) : Ts(r, a);
  });
  return t.length === 0 ? null : t.reduce(Rl);
}
function wl(e, t) {
  const r = H0(e);
  return r ? r(t) : !0;
}
function Ll(e, t, r, a = 1 / 0) {
  const n = H0(e);
  return n ? wr(n, t, r, a) : [];
}
function Bl(e, t, r = !0) {
  return Array.isArray(t) || (t = [t]), bs(Ts("id", e), t, r);
}
function rr(e, t, r = !0, a = 1 / 0) {
  return wr(ca.tag_name(e), t, r, a);
}
function Pl(e, t, r = !0, a = 1 / 0) {
  return wr(Ts("class", e), t, r, a);
}
function Fl(e, t, r = !0, a = 1 / 0) {
  return wr(ca.tag_type(e), t, r, a);
}
function kl(e) {
  let t = e.length;
  for (; --t >= 0; ) {
    const r = e[t];
    if (t > 0 && e.lastIndexOf(r, t - 1) >= 0) {
      e.splice(t, 1);
      continue;
    }
    for (let a = r.parent; a; a = a.parent)
      if (e.includes(a)) {
        e.splice(t, 1);
        break;
      }
  }
  return e;
}
var tt;
(function(e) {
  e[e.DISCONNECTED = 1] = "DISCONNECTED", e[e.PRECEDING = 2] = "PRECEDING", e[e.FOLLOWING = 4] = "FOLLOWING", e[e.CONTAINS = 8] = "CONTAINS", e[e.CONTAINED_BY = 16] = "CONTAINED_BY";
})(tt || (tt = {}));
function X0(e, t) {
  const r = [], a = [];
  if (e === t)
    return 0;
  let n = ke(e) ? e : e.parent;
  for (; n; )
    r.unshift(n), n = n.parent;
  for (n = ke(t) ? t : t.parent; n; )
    a.unshift(n), n = n.parent;
  const s = Math.min(r.length, a.length);
  let i = 0;
  for (; i < s && r[i] === a[i]; )
    i++;
  if (i === 0)
    return tt.DISCONNECTED;
  const o = r[i - 1], d = o.children, c = r[i], l = a[i];
  return d.indexOf(c) > d.indexOf(l) ? o === t ? tt.FOLLOWING | tt.CONTAINED_BY : tt.FOLLOWING : o === e ? tt.PRECEDING | tt.CONTAINS : tt.PRECEDING;
}
function ar(e) {
  return e = e.filter((t, r, a) => !a.includes(t, r + 1)), e.sort((t, r) => {
    const a = X0(t, r);
    return a & tt.PRECEDING ? -1 : a & tt.FOLLOWING ? 1 : 0;
  }), e;
}
function Ml(e) {
  const t = da(Yl, e);
  return t ? t.name === "feed" ? Ul(t) : Hl(t) : null;
}
function Ul(e) {
  var t;
  const r = e.children, a = {
    type: "atom",
    items: rr("entry", r).map((i) => {
      var o;
      const { children: d } = i, c = { media: q0(d) };
      Ke(c, "id", "id", d), Ke(c, "title", "title", d);
      const l = (o = da("link", d)) === null || o === void 0 ? void 0 : o.attribs.href;
      l && (c.link = l);
      const b = It("summary", d) || It("content", d);
      b && (c.description = b);
      const m = It("updated", d);
      return m && (c.pubDate = new Date(m)), c;
    })
  };
  Ke(a, "id", "id", r), Ke(a, "title", "title", r);
  const n = (t = da("link", r)) === null || t === void 0 ? void 0 : t.attribs.href;
  n && (a.link = n), Ke(a, "description", "subtitle", r);
  const s = It("updated", r);
  return s && (a.updated = new Date(s)), Ke(a, "author", "email", r, !0), a;
}
function Hl(e) {
  var t, r;
  const a = (r = (t = da("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [], n = {
    type: e.name.substr(0, 3),
    id: "",
    items: rr("item", e.children).map((i) => {
      const { children: o } = i, d = { media: q0(o) };
      Ke(d, "id", "guid", o), Ke(d, "title", "title", o), Ke(d, "link", "link", o), Ke(d, "description", "description", o);
      const c = It("pubDate", o) || It("dc:date", o);
      return c && (d.pubDate = new Date(c)), d;
    })
  };
  Ke(n, "title", "title", a), Ke(n, "link", "link", a), Ke(n, "description", "description", a);
  const s = It("lastBuildDate", a);
  return s && (n.updated = new Date(s)), Ke(n, "author", "managingEditor", a, !0), n;
}
const Xl = ["url", "type", "lang"], ql = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function q0(e) {
  return rr("media:content", e).map((t) => {
    const { attribs: r } = t, a = {
      medium: r.medium,
      isDefault: !!r.isDefault
    };
    for (const n of Xl)
      r[n] && (a[n] = r[n]);
    for (const n of ql)
      r[n] && (a[n] = parseInt(r[n], 10));
    return r.expression && (a.expression = r.expression), a;
  });
}
function da(e, t) {
  return rr(e, t, !0, 1)[0];
}
function It(e, t, r = !1) {
  return Jt(rr(e, t, r, 1)).trim();
}
function Ke(e, t, r, a, n = !1) {
  const s = It(r, a, n);
  s && (e[t] = s);
}
function Yl(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get DocumentPosition() {
    return tt;
  },
  append: Nl,
  appendChild: yl,
  compareDocumentPosition: X0,
  existsOne: U0,
  filter: wr,
  find: Es,
  findAll: Ol,
  findOne: bs,
  findOneChild: Dl,
  getAttributeValue: Al,
  getChildren: va,
  getElementById: Bl,
  getElements: Ll,
  getElementsByClassName: Pl,
  getElementsByTagName: rr,
  getElementsByTagType: Fl,
  getFeed: Ml,
  getInnerHTML: gl,
  getName: _l,
  getOuterHTML: F0,
  getParent: k0,
  getSiblings: M0,
  getText: Qr,
  hasAttrib: Cl,
  hasChildren: ke,
  innerText: oa,
  isCDATA: ya,
  isComment: Na,
  isDocument: qt,
  isTag: fe,
  isText: ct,
  nextElementSibling: ms,
  prepend: vl,
  prependChild: Il,
  prevElementSibling: ps,
  removeElement: Yt,
  removeSubsets: kl,
  replaceElement: Sl,
  testElement: wl,
  textContent: Jt,
  uniqueSort: ar
}, Symbol.toStringTag, { value: "Module" }));
function Y0(e, t, r) {
  return e ? e(t ?? e._root.children, null, void 0, r).toString() : "";
}
function $l(e, t) {
  return typeof e == "object" && e != null && !("length" in e) && !("type" in e);
}
function Vl(e, t) {
  const r = $l(e) ? (t = e, void 0) : e, a = {
    ...us,
    ...this === null || this === void 0 ? void 0 : this._options,
    ...kn(t ?? {})
  };
  return Y0(this, r, a);
}
function Wl(e) {
  const t = { ...this._options, xmlMode: !0 };
  return Y0(this, e, t);
}
function Ir(e) {
  const t = e || (this ? this.root() : []);
  let r = "";
  for (let a = 0; a < t.length; a++)
    r += Jt(t[a]);
  return r;
}
function Gl(e, t, r = typeof t == "boolean" ? t : !1) {
  if (!e || typeof e != "string")
    return null;
  typeof t == "boolean" && (r = t);
  const a = this.load(e, us, !1);
  return r || a("script").remove(), a.root()[0].children.slice();
}
function jl() {
  return this(this._root);
}
function $0(e, t) {
  if (t === e)
    return !1;
  let r = t;
  for (; r && r !== r.parent; )
    if (r = r.parent, r === e)
      return !0;
  return !1;
}
function Kl(e, t) {
  if (!Bi(e) || !Bi(t))
    return;
  let r = e.length;
  const a = +t.length;
  for (let n = 0; n < a; n++)
    e[r++] = t[n];
  return e.length = r, e;
}
function Bi(e) {
  if (Array.isArray(e))
    return !0;
  if (typeof e != "object" || !Object.prototype.hasOwnProperty.call(e, "length") || typeof e.length != "number" || e.length < 0)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (!(t in e))
      return !1;
  return !0;
}
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contains: $0,
  html: Vl,
  merge: Kl,
  parseHTML: Gl,
  root: jl,
  text: Ir,
  xml: Wl
}, Symbol.toStringTag, { value: "Module" }));
function dt(e) {
  return e.cheerio != null;
}
function Ql(e) {
  return e.replace(/[_.-](\w|$)/g, (t, r) => r.toUpperCase());
}
function Zl(e) {
  return e.replace(/[A-Z]/g, "-$&").toLowerCase();
}
function Pe(e, t) {
  const r = e.length;
  for (let a = 0; a < r; a++)
    t(e[a], a);
  return e;
}
function Xn(e) {
  const t = "length" in e ? Array.prototype.map.call(e, (a) => ua(a, !0)) : [ua(e, !0)], r = new kt(t);
  return t.forEach((a) => {
    a.parent = r;
  }), t;
}
var Pt;
(function(e) {
  e[e.LowerA = 97] = "LowerA", e[e.LowerZ = 122] = "LowerZ", e[e.UpperA = 65] = "UpperA", e[e.UpperZ = 90] = "UpperZ", e[e.Exclamation = 33] = "Exclamation";
})(Pt || (Pt = {}));
function qn(e) {
  const t = e.indexOf("<");
  if (t < 0 || t > e.length - 3)
    return !1;
  const r = e.charCodeAt(t + 1);
  return (r >= Pt.LowerA && r <= Pt.LowerZ || r >= Pt.UpperA && r <= Pt.UpperZ || r === Pt.Exclamation) && e.includes(">", t + 2);
}
const zt = Object.prototype.hasOwnProperty, vr = /\s+/, Cn = "data-", Pi = {
  null: null,
  true: !0,
  false: !1
}, xs = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Jl = /^{[^]*}$|^\[[^]*]$/;
function la(e, t, r) {
  var a;
  if (!(!e || !fe(e))) {
    if ((a = e.attribs) !== null && a !== void 0 || (e.attribs = {}), !t)
      return e.attribs;
    if (zt.call(e.attribs, t))
      return !r && xs.test(t) ? t : e.attribs[t];
    if (e.name === "option" && t === "value")
      return Ir(e.children);
    if (e.name === "input" && (e.attribs.type === "radio" || e.attribs.type === "checkbox") && t === "value")
      return "on";
  }
}
function Qt(e, t, r) {
  r === null ? V0(e, t) : e.attribs[t] = `${r}`;
}
function ef(e, t) {
  if (typeof e == "object" || t !== void 0) {
    if (typeof t == "function") {
      if (typeof e != "string")
        throw new Error("Bad combination of arguments.");
      return Pe(this, (r, a) => {
        fe(r) && Qt(r, e, t.call(r, a, r.attribs[e]));
      });
    }
    return Pe(this, (r) => {
      fe(r) && (typeof e == "object" ? Object.keys(e).forEach((a) => {
        const n = e[a];
        Qt(r, a, n);
      }) : Qt(r, e, t));
    });
  }
  return arguments.length > 1 ? this : la(this[0], e, this.options.xmlMode);
}
function Fi(e, t, r) {
  return t in e ? (
    // @ts-expect-error TS doesn't like us accessing the value directly here.
    e[t]
  ) : !r && xs.test(t) ? la(e, t, !1) !== void 0 : la(e, t, r);
}
function _n(e, t, r, a) {
  t in e ? e[t] = r : Qt(e, t, !a && xs.test(t) ? r ? "" : null : `${r}`);
}
function tf(e, t) {
  var r;
  if (typeof e == "string" && t === void 0) {
    const a = this[0];
    if (!a || !fe(a))
      return;
    switch (e) {
      case "style": {
        const n = this.css(), s = Object.keys(n);
        return s.forEach((i, o) => {
          n[o] = i;
        }), n.length = s.length, n;
      }
      case "tagName":
      case "nodeName":
        return a.name.toUpperCase();
      case "href":
      case "src": {
        const n = (r = a.attribs) === null || r === void 0 ? void 0 : r[e];
        return typeof URL < "u" && (e === "href" && (a.tagName === "a" || a.name === "link") || e === "src" && (a.tagName === "img" || a.tagName === "iframe" || a.tagName === "audio" || a.tagName === "video" || a.tagName === "source")) && n !== void 0 && this.options.baseURI ? new URL(n, this.options.baseURI).href : n;
      }
      case "innerText":
        return oa(a);
      case "textContent":
        return Jt(a);
      case "outerHTML":
        return this.clone().wrap("<container />").parent().html();
      case "innerHTML":
        return this.html();
      default:
        return Fi(a, e, this.options.xmlMode);
    }
  }
  if (typeof e == "object" || t !== void 0) {
    if (typeof t == "function") {
      if (typeof e == "object")
        throw new Error("Bad combination of arguments.");
      return Pe(this, (a, n) => {
        fe(a) && _n(a, e, t.call(a, n, Fi(a, e, this.options.xmlMode)), this.options.xmlMode);
      });
    }
    return Pe(this, (a) => {
      fe(a) && (typeof e == "object" ? Object.keys(e).forEach((n) => {
        const s = e[n];
        _n(a, n, s, this.options.xmlMode);
      }) : _n(a, e, t, this.options.xmlMode));
    });
  }
}
function ki(e, t, r) {
  var a;
  const n = e;
  (a = n.data) !== null && a !== void 0 || (n.data = {}), typeof t == "object" ? Object.assign(n.data, t) : typeof t == "string" && r !== void 0 && (n.data[t] = r);
}
function Mi(e, t) {
  let r, a, n;
  t == null ? (r = Object.keys(e.attribs).filter((s) => s.startsWith(Cn)), a = r.map((s) => Ql(s.slice(Cn.length)))) : (r = [Cn + Zl(t)], a = [t]);
  for (let s = 0; s < r.length; ++s) {
    const i = r[s], o = a[s];
    if (zt.call(e.attribs, i) && !zt.call(e.data, o)) {
      if (n = e.attribs[i], zt.call(Pi, n))
        n = Pi[n];
      else if (n === String(Number(n)))
        n = Number(n);
      else if (Jl.test(n))
        try {
          n = JSON.parse(n);
        } catch {
        }
      e.data[o] = n;
    }
  }
  return t == null ? e.data : n;
}
function rf(e, t) {
  var r;
  const a = this[0];
  if (!a || !fe(a))
    return;
  const n = a;
  return (r = n.data) !== null && r !== void 0 || (n.data = {}), e ? typeof e == "object" || t !== void 0 ? (Pe(this, (s) => {
    fe(s) && (typeof e == "object" ? ki(s, e) : ki(s, e, t));
  }), this) : zt.call(n.data, e) ? n.data[e] : Mi(n, e) : Mi(n);
}
function af(e) {
  const t = arguments.length === 0, r = this[0];
  if (!r || !fe(r))
    return t ? void 0 : this;
  switch (r.name) {
    case "textarea":
      return this.text(e);
    case "select": {
      const a = this.find("option:selected");
      if (!t) {
        if (this.attr("multiple") == null && typeof e == "object")
          return this;
        this.find("option").removeAttr("selected");
        const n = typeof e != "object" ? [e] : e;
        for (let s = 0; s < n.length; s++)
          this.find(`option[value="${n[s]}"]`).attr("selected", "");
        return this;
      }
      return this.attr("multiple") ? a.toArray().map((n) => Ir(n.children)) : a.attr("value");
    }
    case "input":
    case "option":
      return t ? this.attr("value") : this.attr("value", e);
  }
}
function V0(e, t) {
  !e.attribs || !zt.call(e.attribs, t) || delete e.attribs[t];
}
function fa(e) {
  return e ? e.trim().split(vr) : [];
}
function nf(e) {
  const t = fa(e);
  for (let r = 0; r < t.length; r++)
    Pe(this, (a) => {
      fe(a) && V0(a, t[r]);
    });
  return this;
}
function sf(e) {
  return this.toArray().some((t) => {
    const r = fe(t) && t.attribs.class;
    let a = -1;
    if (r && e.length)
      for (; (a = r.indexOf(e, a + 1)) > -1; ) {
        const n = a + e.length;
        if ((a === 0 || vr.test(r[a - 1])) && (n === r.length || vr.test(r[n])))
          return !0;
      }
    return !1;
  });
}
function W0(e) {
  if (typeof e == "function")
    return Pe(this, (a, n) => {
      if (fe(a)) {
        const s = a.attribs.class || "";
        W0.call([a], e.call(a, n, s));
      }
    });
  if (!e || typeof e != "string")
    return this;
  const t = e.split(vr), r = this.length;
  for (let a = 0; a < r; a++) {
    const n = this[a];
    if (!fe(n))
      continue;
    const s = la(n, "class", !1);
    if (!s)
      Qt(n, "class", t.join(" ").trim());
    else {
      let i = ` ${s} `;
      for (let o = 0; o < t.length; o++) {
        const d = `${t[o]} `;
        i.includes(` ${d}`) || (i += d);
      }
      Qt(n, "class", i.trim());
    }
  }
  return this;
}
function G0(e) {
  if (typeof e == "function")
    return Pe(this, (n, s) => {
      fe(n) && G0.call([n], e.call(n, s, n.attribs.class || ""));
    });
  const t = fa(e), r = t.length, a = arguments.length === 0;
  return Pe(this, (n) => {
    if (fe(n))
      if (a)
        n.attribs.class = "";
      else {
        const s = fa(n.attribs.class);
        let i = !1;
        for (let o = 0; o < r; o++) {
          const d = s.indexOf(t[o]);
          d >= 0 && (s.splice(d, 1), i = !0, o--);
        }
        i && (n.attribs.class = s.join(" "));
      }
  });
}
function j0(e, t) {
  if (typeof e == "function")
    return Pe(this, (i, o) => {
      fe(i) && j0.call([i], e.call(i, o, i.attribs.class || "", t), t);
    });
  if (!e || typeof e != "string")
    return this;
  const r = e.split(vr), a = r.length, n = typeof t == "boolean" ? t ? 1 : -1 : 0, s = this.length;
  for (let i = 0; i < s; i++) {
    const o = this[i];
    if (!fe(o))
      continue;
    const d = fa(o.attribs.class);
    for (let c = 0; c < a; c++) {
      const l = d.indexOf(r[c]);
      n >= 0 && l < 0 ? d.push(r[c]) : n <= 0 && l >= 0 && d.splice(l, 1);
    }
    o.attribs.class = d.join(" ");
  }
  return this;
}
const uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addClass: W0,
  attr: ef,
  data: rf,
  hasClass: sf,
  prop: tf,
  removeAttr: nf,
  removeClass: G0,
  toggleClass: j0,
  val: af
}, Symbol.toStringTag, { value: "Module" }));
var le;
(function(e) {
  e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator";
})(le || (le = {}));
var Ue;
(function(e) {
  e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start";
})(Ue || (Ue = {}));
const Ui = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, of = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, cf = /* @__PURE__ */ new Map([
  [126, Ue.Element],
  [94, Ue.Start],
  [36, Ue.End],
  [42, Ue.Any],
  [33, Ue.Not],
  [124, Ue.Hyphen]
]), df = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function Er(e) {
  switch (e.type) {
    case le.Adjacent:
    case le.Child:
    case le.Descendant:
    case le.Parent:
    case le.Sibling:
    case le.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const lf = /* @__PURE__ */ new Set(["contains", "icontains"]);
function ff(e, t, r) {
  const a = parseInt(t, 16) - 65536;
  return a !== a || r ? t : a < 0 ? (
    // BMP codepoint
    String.fromCharCode(a + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
  );
}
function dr(e) {
  return e.replace(of, ff);
}
function Sn(e) {
  return e === 39 || e === 34;
}
function Hi(e) {
  return e === 32 || e === 9 || e === 10 || e === 12 || e === 13;
}
function Oa(e) {
  const t = [], r = K0(t, `${e}`, 0);
  if (r < e.length)
    throw new Error(`Unmatched selector: ${e.slice(r)}`);
  return t;
}
function K0(e, t, r) {
  let a = [];
  function n(m) {
    const f = t.slice(r + m).match(Ui);
    if (!f)
      throw new Error(`Expected name, found ${t.slice(r)}`);
    const [E] = f;
    return r += m + E.length, dr(E);
  }
  function s(m) {
    for (r += m; r < t.length && Hi(t.charCodeAt(r)); )
      r++;
  }
  function i() {
    r += 1;
    const m = r;
    let f = 1;
    for (; f > 0 && r < t.length; r++)
      t.charCodeAt(r) === 40 && !o(r) ? f++ : t.charCodeAt(r) === 41 && !o(r) && f--;
    if (f)
      throw new Error("Parenthesis not matched");
    return dr(t.slice(m, r - 1));
  }
  function o(m) {
    let f = 0;
    for (; t.charCodeAt(--m) === 92; )
      f++;
    return (f & 1) === 1;
  }
  function d() {
    if (a.length > 0 && Er(a[a.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function c(m) {
    if (a.length > 0 && a[a.length - 1].type === le.Descendant) {
      a[a.length - 1].type = m;
      return;
    }
    d(), a.push({ type: m });
  }
  function l(m, f) {
    a.push({
      type: le.Attribute,
      name: m,
      action: f,
      value: n(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function b() {
    if (a.length && a[a.length - 1].type === le.Descendant && a.pop(), a.length === 0)
      throw new Error("Empty sub-selector");
    e.push(a);
  }
  if (s(0), t.length === r)
    return r;
  e: for (; r < t.length; ) {
    const m = t.charCodeAt(r);
    switch (m) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (a.length === 0 || a[0].type !== le.Descendant) && (d(), a.push({ type: le.Descendant })), s(1);
        break;
      }
      case 62: {
        c(le.Child), s(1);
        break;
      }
      case 60: {
        c(le.Parent), s(1);
        break;
      }
      case 126: {
        c(le.Sibling), s(1);
        break;
      }
      case 43: {
        c(le.Adjacent), s(1);
        break;
      }
      case 46: {
        l("class", Ue.Element);
        break;
      }
      case 35: {
        l("id", Ue.Equals);
        break;
      }
      case 91: {
        s(1);
        let f, E = null;
        t.charCodeAt(r) === 124 ? f = n(1) : t.startsWith("*|", r) ? (E = "*", f = n(2)) : (f = n(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (E = f, f = n(1))), s(0);
        let A = Ue.Exists;
        const p = cf.get(t.charCodeAt(r));
        if (p) {
          if (A = p, t.charCodeAt(r + 1) !== 61)
            throw new Error("Expected `=`");
          s(2);
        } else t.charCodeAt(r) === 61 && (A = Ue.Equals, s(1));
        let C = "", h = null;
        if (A !== "exists") {
          if (Sn(t.charCodeAt(r))) {
            const w = t.charCodeAt(r);
            let L = r + 1;
            for (; L < t.length && (t.charCodeAt(L) !== w || o(L)); )
              L += 1;
            if (t.charCodeAt(L) !== w)
              throw new Error("Attribute value didn't end");
            C = dr(t.slice(r + 1, L)), r = L + 1;
          } else {
            const w = r;
            for (; r < t.length && (!Hi(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || o(r)); )
              r += 1;
            C = dr(t.slice(w, r));
          }
          s(0);
          const v = t.charCodeAt(r) | 32;
          v === 115 ? (h = !1, s(1)) : v === 105 && (h = !0, s(1));
        }
        if (t.charCodeAt(r) !== 93)
          throw new Error("Attribute selector didn't terminate");
        r += 1;
        const _ = {
          type: le.Attribute,
          name: f,
          action: A,
          value: C,
          namespace: E,
          ignoreCase: h
        };
        a.push(_);
        break;
      }
      case 58: {
        if (t.charCodeAt(r + 1) === 58) {
          a.push({
            type: le.PseudoElement,
            name: n(2).toLowerCase(),
            data: t.charCodeAt(r) === 40 ? i() : null
          });
          continue;
        }
        const f = n(1).toLowerCase();
        let E = null;
        if (t.charCodeAt(r) === 40)
          if (df.has(f)) {
            if (Sn(t.charCodeAt(r + 1)))
              throw new Error(`Pseudo-selector ${f} cannot be quoted`);
            if (E = [], r = K0(E, t, r + 1), t.charCodeAt(r) !== 41)
              throw new Error(`Missing closing parenthesis in :${f} (${t})`);
            r += 1;
          } else {
            if (E = i(), lf.has(f)) {
              const A = E.charCodeAt(0);
              A === E.charCodeAt(E.length - 1) && Sn(A) && (E = E.slice(1, -1));
            }
            E = dr(E);
          }
        a.push({ type: le.Pseudo, name: f, data: E });
        break;
      }
      case 44: {
        b(), a = [], s(1);
        break;
      }
      default: {
        if (t.startsWith("/*", r)) {
          const A = t.indexOf("*/", r + 2);
          if (A < 0)
            throw new Error("Comment was not terminated");
          r = A + 2, a.length === 0 && s(0);
          break;
        }
        let f = null, E;
        if (m === 42)
          r += 1, E = "*";
        else if (m === 124) {
          if (E = "", t.charCodeAt(r + 1) === 124) {
            c(le.ColumnCombinator), s(2);
            break;
          }
        } else if (Ui.test(t.slice(r)))
          E = n(0);
        else
          break e;
        t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (f = E, t.charCodeAt(r + 1) === 42 ? (E = "*", r += 2) : E = n(1)), a.push(E === "*" ? { type: le.Universal, namespace: f } : { type: le.Tag, name: E, namespace: f });
      }
    }
  }
  return b(), r;
}
var ha = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
};
const xe = /* @__PURE__ */ Ut(ha), z0 = /* @__PURE__ */ new Map([
  [le.Universal, 50],
  [le.Tag, 30],
  [le.Attribute, 1],
  [le.Pseudo, 0]
]);
function gs(e) {
  return !z0.has(e.type);
}
const hf = /* @__PURE__ */ new Map([
  [Ue.Exists, 10],
  [Ue.Equals, 8],
  [Ue.Not, 7],
  [Ue.Start, 6],
  [Ue.End, 6],
  [Ue.Any, 5]
]);
function mf(e) {
  const t = e.map(Q0);
  for (let r = 1; r < e.length; r++) {
    const a = t[r];
    if (!(a < 0))
      for (let n = r - 1; n >= 0 && a < t[n]; n--) {
        const s = e[n + 1];
        e[n + 1] = e[n], e[n] = s, t[n + 1] = t[n], t[n] = a;
      }
  }
}
function Q0(e) {
  var t, r;
  let a = (t = z0.get(e.type)) !== null && t !== void 0 ? t : -1;
  return e.type === le.Attribute ? (a = (r = hf.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === Ue.Equals && e.name === "id" && (a = 9), e.ignoreCase && (a >>= 1)) : e.type === le.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? a = 0 : Array.isArray(e.data) ? (a = Math.min(...e.data.map((n) => Math.min(...n.map(Q0)))), a < 0 && (a = 0)) : a = 2 : a = 3), a;
}
const pf = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Xi(e) {
  return e.replace(pf, "\\$&");
}
const Ef = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function Lt(e, t) {
  return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && Ef.has(e.name);
}
const bf = {
  equals(e, t, r) {
    const { adapter: a } = r, { name: n } = t;
    let { value: s } = t;
    return Lt(t, r) ? (s = s.toLowerCase(), (i) => {
      const o = a.getAttributeValue(i, n);
      return o != null && o.length === s.length && o.toLowerCase() === s && e(i);
    }) : (i) => a.getAttributeValue(i, n) === s && e(i);
  },
  hyphen(e, t, r) {
    const { adapter: a } = r, { name: n } = t;
    let { value: s } = t;
    const i = s.length;
    return Lt(t, r) ? (s = s.toLowerCase(), function(d) {
      const c = a.getAttributeValue(d, n);
      return c != null && (c.length === i || c.charAt(i) === "-") && c.substr(0, i).toLowerCase() === s && e(d);
    }) : function(d) {
      const c = a.getAttributeValue(d, n);
      return c != null && (c.length === i || c.charAt(i) === "-") && c.substr(0, i) === s && e(d);
    };
  },
  element(e, t, r) {
    const { adapter: a } = r, { name: n, value: s } = t;
    if (/\s/.test(s))
      return xe.falseFunc;
    const i = new RegExp(`(?:^|\\s)${Xi(s)}(?:$|\\s)`, Lt(t, r) ? "i" : "");
    return function(d) {
      const c = a.getAttributeValue(d, n);
      return c != null && c.length >= s.length && i.test(c) && e(d);
    };
  },
  exists(e, { name: t }, { adapter: r }) {
    return (a) => r.hasAttrib(a, t) && e(a);
  },
  start(e, t, r) {
    const { adapter: a } = r, { name: n } = t;
    let { value: s } = t;
    const i = s.length;
    return i === 0 ? xe.falseFunc : Lt(t, r) ? (s = s.toLowerCase(), (o) => {
      const d = a.getAttributeValue(o, n);
      return d != null && d.length >= i && d.substr(0, i).toLowerCase() === s && e(o);
    }) : (o) => {
      var d;
      return !!(!((d = a.getAttributeValue(o, n)) === null || d === void 0) && d.startsWith(s)) && e(o);
    };
  },
  end(e, t, r) {
    const { adapter: a } = r, { name: n } = t;
    let { value: s } = t;
    const i = -s.length;
    return i === 0 ? xe.falseFunc : Lt(t, r) ? (s = s.toLowerCase(), (o) => {
      var d;
      return ((d = a.getAttributeValue(o, n)) === null || d === void 0 ? void 0 : d.substr(i).toLowerCase()) === s && e(o);
    }) : (o) => {
      var d;
      return !!(!((d = a.getAttributeValue(o, n)) === null || d === void 0) && d.endsWith(s)) && e(o);
    };
  },
  any(e, t, r) {
    const { adapter: a } = r, { name: n, value: s } = t;
    if (s === "")
      return xe.falseFunc;
    if (Lt(t, r)) {
      const i = new RegExp(Xi(s), "i");
      return function(d) {
        const c = a.getAttributeValue(d, n);
        return c != null && c.length >= s.length && i.test(c) && e(d);
      };
    }
    return (i) => {
      var o;
      return !!(!((o = a.getAttributeValue(i, n)) === null || o === void 0) && o.includes(s)) && e(i);
    };
  },
  not(e, t, r) {
    const { adapter: a } = r, { name: n } = t;
    let { value: s } = t;
    return s === "" ? (i) => !!a.getAttributeValue(i, n) && e(i) : Lt(t, r) ? (s = s.toLowerCase(), (i) => {
      const o = a.getAttributeValue(i, n);
      return (o == null || o.length !== s.length || o.toLowerCase() !== s) && e(i);
    }) : (i) => a.getAttributeValue(i, n) !== s && e(i);
  }
}, Tf = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), qi = 48, xf = 57;
function gf(e) {
  if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0];
  if (e === "odd")
    return [2, 1];
  let t = 0, r = 0, a = s(), n = i();
  if (t < e.length && e.charAt(t) === "n" && (t++, r = a * (n ?? 1), o(), t < e.length ? (a = s(), o(), n = i()) : a = n = 0), n === null || t < e.length)
    throw new Error(`n-th rule couldn't be parsed ('${e}')`);
  return [r, a * n];
  function s() {
    return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1);
  }
  function i() {
    const d = t;
    let c = 0;
    for (; t < e.length && e.charCodeAt(t) >= qi && e.charCodeAt(t) <= xf; )
      c = c * 10 + (e.charCodeAt(t) - qi), t++;
    return t === d ? null : c;
  }
  function o() {
    for (; t < e.length && Tf.has(e.charCodeAt(t)); )
      t++;
  }
}
function Af(e) {
  const t = e[0], r = e[1] - 1;
  if (r < 0 && t <= 0)
    return xe.falseFunc;
  if (t === -1)
    return (s) => s <= r;
  if (t === 0)
    return (s) => s === r;
  if (t === 1)
    return r < 0 ? xe.trueFunc : (s) => s >= r;
  const a = Math.abs(t), n = (r % a + a) % a;
  return t > 1 ? (s) => s >= r && s % a === n : (s) => s <= r && s % a === n;
}
function Xr(e) {
  return Af(gf(e));
}
function qr(e, t) {
  return (r) => {
    const a = t.getParent(r);
    return a != null && t.isTag(a) && e(r);
  };
}
const Yn = {
  contains(e, t, { adapter: r }) {
    return function(n) {
      return e(n) && r.getText(n).includes(t);
    };
  },
  icontains(e, t, { adapter: r }) {
    const a = t.toLowerCase();
    return function(s) {
      return e(s) && r.getText(s).toLowerCase().includes(a);
    };
  },
  // Location specific methods
  "nth-child"(e, t, { adapter: r, equals: a }) {
    const n = Xr(t);
    return n === xe.falseFunc ? xe.falseFunc : n === xe.trueFunc ? qr(e, r) : function(i) {
      const o = r.getSiblings(i);
      let d = 0;
      for (let c = 0; c < o.length && !a(i, o[c]); c++)
        r.isTag(o[c]) && d++;
      return n(d) && e(i);
    };
  },
  "nth-last-child"(e, t, { adapter: r, equals: a }) {
    const n = Xr(t);
    return n === xe.falseFunc ? xe.falseFunc : n === xe.trueFunc ? qr(e, r) : function(i) {
      const o = r.getSiblings(i);
      let d = 0;
      for (let c = o.length - 1; c >= 0 && !a(i, o[c]); c--)
        r.isTag(o[c]) && d++;
      return n(d) && e(i);
    };
  },
  "nth-of-type"(e, t, { adapter: r, equals: a }) {
    const n = Xr(t);
    return n === xe.falseFunc ? xe.falseFunc : n === xe.trueFunc ? qr(e, r) : function(i) {
      const o = r.getSiblings(i);
      let d = 0;
      for (let c = 0; c < o.length; c++) {
        const l = o[c];
        if (a(i, l))
          break;
        r.isTag(l) && r.getName(l) === r.getName(i) && d++;
      }
      return n(d) && e(i);
    };
  },
  "nth-last-of-type"(e, t, { adapter: r, equals: a }) {
    const n = Xr(t);
    return n === xe.falseFunc ? xe.falseFunc : n === xe.trueFunc ? qr(e, r) : function(i) {
      const o = r.getSiblings(i);
      let d = 0;
      for (let c = o.length - 1; c >= 0; c--) {
        const l = o[c];
        if (a(i, l))
          break;
        r.isTag(l) && r.getName(l) === r.getName(i) && d++;
      }
      return n(d) && e(i);
    };
  },
  // TODO determine the actual root element
  root(e, t, { adapter: r }) {
    return (a) => {
      const n = r.getParent(a);
      return (n == null || !r.isTag(n)) && e(a);
    };
  },
  scope(e, t, r, a) {
    const { equals: n } = r;
    return !a || a.length === 0 ? Yn.root(e, t, r) : a.length === 1 ? (s) => n(a[0], s) && e(s) : (s) => a.includes(s) && e(s);
  },
  hover: yn("isHovered"),
  visited: yn("isVisited"),
  active: yn("isActive")
};
function yn(e) {
  return function(r, a, { adapter: n }) {
    const s = n[e];
    return typeof s != "function" ? xe.falseFunc : function(o) {
      return s(o) && r(o);
    };
  };
}
const Yi = {
  empty(e, { adapter: t }) {
    return !t.getChildren(e).some((r) => (
      // FIXME: `getText` call is potentially expensive.
      t.isTag(r) || t.getText(r) !== ""
    ));
  },
  "first-child"(e, { adapter: t, equals: r }) {
    if (t.prevElementSibling)
      return t.prevElementSibling(e) == null;
    const a = t.getSiblings(e).find((n) => t.isTag(n));
    return a != null && r(e, a);
  },
  "last-child"(e, { adapter: t, equals: r }) {
    const a = t.getSiblings(e);
    for (let n = a.length - 1; n >= 0; n--) {
      if (r(e, a[n]))
        return !0;
      if (t.isTag(a[n]))
        break;
    }
    return !1;
  },
  "first-of-type"(e, { adapter: t, equals: r }) {
    const a = t.getSiblings(e), n = t.getName(e);
    for (let s = 0; s < a.length; s++) {
      const i = a[s];
      if (r(e, i))
        return !0;
      if (t.isTag(i) && t.getName(i) === n)
        break;
    }
    return !1;
  },
  "last-of-type"(e, { adapter: t, equals: r }) {
    const a = t.getSiblings(e), n = t.getName(e);
    for (let s = a.length - 1; s >= 0; s--) {
      const i = a[s];
      if (r(e, i))
        return !0;
      if (t.isTag(i) && t.getName(i) === n)
        break;
    }
    return !1;
  },
  "only-of-type"(e, { adapter: t, equals: r }) {
    const a = t.getName(e);
    return t.getSiblings(e).every((n) => r(e, n) || !t.isTag(n) || t.getName(n) !== a);
  },
  "only-child"(e, { adapter: t, equals: r }) {
    return t.getSiblings(e).every((a) => r(e, a) || !t.isTag(a));
  }
};
function $i(e, t, r, a) {
  if (r === null) {
    if (e.length > a)
      throw new Error(`Pseudo-class :${t} requires an argument`);
  } else if (e.length === a)
    throw new Error(`Pseudo-class :${t} doesn't have any arguments`);
}
const Cf = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
}, Z0 = {};
function _f(e, t) {
  return e === xe.falseFunc ? xe.falseFunc : (r) => t.isTag(r) && e(r);
}
function J0(e, t) {
  const r = t.getSiblings(e);
  if (r.length <= 1)
    return [];
  const a = r.indexOf(e);
  return a < 0 || a === r.length - 1 ? [] : r.slice(a + 1).filter(t.isTag);
}
function $n(e) {
  return {
    xmlMode: !!e.xmlMode,
    lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
    lowerCaseTags: !!e.lowerCaseTags,
    quirksMode: !!e.quirksMode,
    cacheResults: !!e.cacheResults,
    pseudos: e.pseudos,
    adapter: e.adapter,
    equals: e.equals
  };
}
const Nn = (e, t, r, a, n) => {
  const s = n(t, $n(r), a);
  return s === xe.trueFunc ? e : s === xe.falseFunc ? xe.falseFunc : (i) => s(i) && e(i);
}, In = {
  is: Nn,
  /**
   * `:matches` and `:where` are aliases for `:is`.
   */
  matches: Nn,
  where: Nn,
  not(e, t, r, a, n) {
    const s = n(t, $n(r), a);
    return s === xe.falseFunc ? e : s === xe.trueFunc ? xe.falseFunc : (i) => !s(i) && e(i);
  },
  has(e, t, r, a, n) {
    const { adapter: s } = r, i = $n(r);
    i.relativeSelector = !0;
    const o = t.some((l) => l.some(gs)) ? (
      // Used as a placeholder. Will be replaced with the actual element.
      [Z0]
    ) : void 0, d = n(t, i, o);
    if (d === xe.falseFunc)
      return xe.falseFunc;
    const c = _f(d, s);
    if (o && d !== xe.trueFunc) {
      const { shouldTestNextSiblings: l = !1 } = d;
      return (b) => {
        if (!e(b))
          return !1;
        o[0] = b;
        const m = s.getChildren(b), f = l ? [...m, ...J0(b, s)] : m;
        return s.existsOne(c, f);
      };
    }
    return (l) => e(l) && s.existsOne(c, s.getChildren(l));
  }
};
function Sf(e, t, r, a, n) {
  var s;
  const { name: i, data: o } = t;
  if (Array.isArray(o)) {
    if (!(i in In))
      throw new Error(`Unknown pseudo-class :${i}(${o})`);
    return In[i](e, o, r, a, n);
  }
  const d = (s = r.pseudos) === null || s === void 0 ? void 0 : s[i], c = typeof d == "string" ? d : Cf[i];
  if (typeof c == "string") {
    if (o != null)
      throw new Error(`Pseudo ${i} doesn't have any arguments`);
    const l = Oa(c);
    return In.is(e, l, r, a, n);
  }
  if (typeof d == "function")
    return $i(d, i, o, 1), (l) => d(l, o) && e(l);
  if (i in Yn)
    return Yn[i](e, o, r, a);
  if (i in Yi) {
    const l = Yi[i];
    return $i(l, i, o, 2), (b) => l(b, r, o) && e(b);
  }
  throw new Error(`Unknown pseudo-class :${i}`);
}
function vn(e, t) {
  const r = t.getParent(e);
  return r && t.isTag(r) ? r : null;
}
function yf(e, t, r, a, n) {
  const { adapter: s, equals: i } = r;
  switch (t.type) {
    case le.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case le.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case le.Attribute: {
      if (t.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), bf[t.action](e, t, r);
    }
    case le.Pseudo:
      return Sf(e, t, r, a, n);
    case le.Tag: {
      if (t.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      let { name: o } = t;
      return (!r.xmlMode || r.lowerCaseTags) && (o = o.toLowerCase()), function(c) {
        return s.getName(c) === o && e(c);
      };
    }
    case le.Descendant: {
      if (r.cacheResults === !1 || typeof WeakSet > "u")
        return function(c) {
          let l = c;
          for (; l = vn(l, s); )
            if (e(l))
              return !0;
          return !1;
        };
      const o = /* @__PURE__ */ new WeakSet();
      return function(c) {
        let l = c;
        for (; l = vn(l, s); )
          if (!o.has(l)) {
            if (s.isTag(l) && e(l))
              return !0;
            o.add(l);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(d) {
        let c = d;
        do
          if (e(c))
            return !0;
        while (c = vn(c, s));
        return !1;
      };
    case le.Parent:
      return function(d) {
        return s.getChildren(d).some((c) => s.isTag(c) && e(c));
      };
    case le.Child:
      return function(d) {
        const c = s.getParent(d);
        return c != null && s.isTag(c) && e(c);
      };
    case le.Sibling:
      return function(d) {
        const c = s.getSiblings(d);
        for (let l = 0; l < c.length; l++) {
          const b = c[l];
          if (i(d, b))
            break;
          if (s.isTag(b) && e(b))
            return !0;
        }
        return !1;
      };
    case le.Adjacent:
      return s.prevElementSibling ? function(d) {
        const c = s.prevElementSibling(d);
        return c != null && e(c);
      } : function(d) {
        const c = s.getSiblings(d);
        let l;
        for (let b = 0; b < c.length; b++) {
          const m = c[b];
          if (i(d, m))
            break;
          s.isTag(m) && (l = m);
        }
        return !!l && e(l);
      };
    case le.Universal: {
      if (t.namespace != null && t.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return e;
    }
  }
}
function eo(e) {
  return e.type === le.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some((t) => t.some(eo)));
}
const Nf = { type: le.Descendant }, If = {
  type: "_flexibleDescendant"
}, vf = {
  type: le.Pseudo,
  name: "scope",
  data: null
};
function Df(e, { adapter: t }, r) {
  const a = !!(r != null && r.every((n) => {
    const s = t.isTag(n) && t.getParent(n);
    return n === Z0 || s && t.isTag(s);
  }));
  for (const n of e) {
    if (!(n.length > 0 && gs(n[0]) && n[0].type !== le.Descendant)) if (a && !n.some(eo))
      n.unshift(Nf);
    else
      continue;
    n.unshift(vf);
  }
}
function to(e, t, r) {
  var a;
  e.forEach(mf), r = (a = t.context) !== null && a !== void 0 ? a : r;
  const n = Array.isArray(r), s = r && (Array.isArray(r) ? r : [r]);
  if (t.relativeSelector !== !1)
    Df(e, t, s);
  else if (e.some((d) => d.length > 0 && gs(d[0])))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  let i = !1;
  const o = e.map((d) => {
    if (d.length >= 2) {
      const [c, l] = d;
      c.type !== le.Pseudo || c.name !== "scope" || (n && l.type === le.Descendant ? d[1] = If : (l.type === le.Adjacent || l.type === le.Sibling) && (i = !0));
    }
    return Of(d, t, s);
  }).reduce(Rf, xe.falseFunc);
  return o.shouldTestNextSiblings = i, o;
}
function Of(e, t, r) {
  var a;
  return e.reduce((n, s) => n === xe.falseFunc ? xe.falseFunc : yf(n, s, t, r, to), (a = t.rootFunc) !== null && a !== void 0 ? a : xe.trueFunc);
}
function Rf(e, t) {
  return t === xe.falseFunc || e === xe.trueFunc ? e : e === xe.falseFunc || t === xe.trueFunc ? t : function(a) {
    return e(a) || t(a);
  };
}
const ro = (e, t) => e === t, wf = {
  adapter: Da,
  equals: ro
};
function Lf(e) {
  var t, r, a, n;
  const s = e ?? wf;
  return (t = s.adapter) !== null && t !== void 0 || (s.adapter = Da), (r = s.equals) !== null && r !== void 0 || (s.equals = (n = (a = s.adapter) === null || a === void 0 ? void 0 : a.equals) !== null && n !== void 0 ? n : ro), s;
}
function Bf(e) {
  return function(r, a, n) {
    const s = Lf(a);
    return e(r, s, n);
  };
}
const As = Bf(to);
function ao(e, t, r = !1) {
  return r && (e = Pf(e, t)), Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e);
}
function Pf(e, t) {
  const r = Array.isArray(e) ? e.slice(0) : [e], a = r.length;
  for (let n = 0; n < a; n++) {
    const s = J0(r[n], t);
    r.push(...s);
  }
  return r;
}
const Ff = /* @__PURE__ */ new Set([
  "first",
  "last",
  "eq",
  "gt",
  "nth",
  "lt",
  "even",
  "odd"
]);
function ma(e) {
  return e.type !== "pseudo" ? !1 : Ff.has(e.name) ? !0 : e.name === "not" && Array.isArray(e.data) ? e.data.some((t) => t.some(ma)) : !1;
}
function kf(e, t, r) {
  const a = t != null ? parseInt(t, 10) : NaN;
  switch (e) {
    case "first":
      return 1;
    case "nth":
    case "eq":
      return isFinite(a) ? a >= 0 ? a + 1 : 1 / 0 : 0;
    case "lt":
      return isFinite(a) ? a >= 0 ? Math.min(a, r) : 1 / 0 : 0;
    case "gt":
      return isFinite(a) ? 1 / 0 : 0;
    case "odd":
      return 2 * r;
    case "even":
      return 2 * r - 1;
    case "last":
    case "not":
      return 1 / 0;
  }
}
function Mf(e) {
  for (; e.parent; )
    e = e.parent;
  return e;
}
function Cs(e) {
  const t = [], r = [];
  for (const a of e)
    a.some(ma) ? t.push(a) : r.push(a);
  return [r, t];
}
const Uf = {
  type: le.Universal,
  namespace: null
}, Hf = {
  type: le.Pseudo,
  name: "scope",
  data: null
};
function no(e, t, r = {}) {
  return so([e], t, r);
}
function so(e, t, r = {}) {
  if (typeof t == "function")
    return e.some(t);
  const [a, n] = Cs(Oa(t));
  return a.length > 0 && e.some(As(a, r)) || n.some((s) => oo(s, e, r).length > 0);
}
function Xf(e, t, r, a) {
  const n = typeof r == "string" ? parseInt(r, 10) : NaN;
  switch (e) {
    case "first":
    case "lt":
      return t;
    case "last":
      return t.length > 0 ? [t[t.length - 1]] : t;
    case "nth":
    case "eq":
      return isFinite(n) && Math.abs(n) < t.length ? [n < 0 ? t[t.length + n] : t[n]] : [];
    case "gt":
      return isFinite(n) ? t.slice(n + 1) : [];
    case "even":
      return t.filter((s, i) => i % 2 === 0);
    case "odd":
      return t.filter((s, i) => i % 2 === 1);
    case "not": {
      const s = new Set(uo(r, t, a));
      return t.filter((i) => !s.has(i));
    }
  }
}
function io(e, t, r = {}) {
  return uo(Oa(e), t, r);
}
function uo(e, t, r) {
  if (t.length === 0)
    return [];
  const [a, n] = Cs(e);
  let s;
  if (a.length) {
    const i = Wn(t, a, r);
    if (n.length === 0)
      return i;
    i.length && (s = new Set(i));
  }
  for (let i = 0; i < n.length && (s == null ? void 0 : s.size) !== t.length; i++) {
    const o = n[i];
    if ((s ? t.filter((l) => fe(l) && !s.has(l)) : t).length === 0)
      break;
    const c = oo(o, t, r);
    if (c.length)
      if (s)
        c.forEach((l) => s.add(l));
      else {
        if (i === n.length - 1)
          return c;
        s = new Set(c);
      }
  }
  return typeof s < "u" ? s.size === t.length ? t : (
    // Filter elements to preserve order
    t.filter((i) => s.has(i))
  ) : [];
}
function oo(e, t, r) {
  var a;
  if (e.some(Er)) {
    const n = (a = r.root) !== null && a !== void 0 ? a : Mf(t[0]), s = { ...r, context: t, relativeSelector: !1 };
    return e.push(Hf), pa(n, e, s, !0, t.length);
  }
  return pa(t, e, r, !1, t.length);
}
function qf(e, t, r = {}, a = 1 / 0) {
  if (typeof e == "function")
    return co(t, e);
  const [n, s] = Cs(Oa(e)), i = s.map((o) => pa(t, o, r, !0, a));
  return n.length && i.push(Vn(t, n, r, a)), i.length === 0 ? [] : i.length === 1 ? i[0] : ar(i.reduce((o, d) => [...o, ...d]));
}
function pa(e, t, r, a, n) {
  const s = t.findIndex(ma), i = t.slice(0, s), o = t[s], d = t.length - 1 === s ? n : 1 / 0, c = kf(o.name, o.data, d);
  if (c === 0)
    return [];
  const b = (i.length === 0 && !Array.isArray(e) ? va(e).filter(fe) : i.length === 0 ? (Array.isArray(e) ? e : [e]).filter(fe) : a || i.some(Er) ? Vn(e, [i], r, c) : Wn(e, [i], r)).slice(0, c);
  let m = Xf(o.name, b, o.data, r);
  if (m.length === 0 || t.length === s + 1)
    return m;
  const f = t.slice(s + 1), E = f.some(Er);
  if (E) {
    if (Er(f[0])) {
      const { type: A } = f[0];
      (A === le.Sibling || A === le.Adjacent) && (m = ao(m, Da, !0)), f.unshift(Uf);
    }
    r = {
      ...r,
      // Avoid absolutizing the selector
      relativeSelector: !1,
      /*
       * Add a custom root func, to make sure traversals don't match elements
       * that aren't a part of the considered tree.
       */
      rootFunc: (A) => m.includes(A)
    };
  } else r.rootFunc && r.rootFunc !== ha.trueFunc && (r = { ...r, rootFunc: ha.trueFunc });
  return f.some(ma) ? pa(m, f, r, !1, n) : E ? (
    // Query existing elements to resolve traversal.
    Vn(m, [f], r, n)
  ) : (
    // If we don't have any more traversals, simply filter elements.
    Wn(m, [f], r)
  );
}
function Vn(e, t, r, a) {
  const n = As(t, r, e);
  return co(e, n, a);
}
function co(e, t, r = 1 / 0) {
  const a = ao(e, Da, t.shouldTestNextSiblings);
  return Es((n) => fe(n) && t(n), a, !0, r);
}
function Wn(e, t, r) {
  const a = (Array.isArray(e) ? e : [e]).filter(fe);
  if (a.length === 0)
    return a;
  const n = As(t, r);
  return n === ha.trueFunc ? a : a.filter(n);
}
const Yf = /^\s*[~+]/;
function $f(e) {
  var t;
  if (!e)
    return this._make([]);
  const r = this.toArray();
  if (typeof e != "string") {
    const s = dt(e) ? e.toArray() : [e];
    return this._make(s.filter((i) => r.some((o) => $0(o, i))));
  }
  const a = Yf.test(e) ? r : this.children().toArray(), n = {
    context: r,
    root: (t = this._root) === null || t === void 0 ? void 0 : t[0],
    // Pass options that are recognized by `cheerio-select`
    xmlMode: this.options.xmlMode,
    lowerCaseTags: this.options.lowerCaseTags,
    lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
    pseudos: this.options.pseudos,
    quirksMode: this.options.quirksMode
  };
  return this._make(qf(e, a, n));
}
function _s(e) {
  return function(t, ...r) {
    return function(a) {
      var n;
      let s = e(t, this);
      return a && (s = Ns(s, a, this.options.xmlMode, (n = this._root) === null || n === void 0 ? void 0 : n[0])), this._make(
        // Post processing is only necessary if there is more than one element.
        this.length > 1 && s.length > 1 ? r.reduce((i, o) => o(i), s) : s
      );
    };
  };
}
const Lr = _s((e, t) => {
  const r = [];
  for (let a = 0; a < t.length; a++) {
    const n = e(t[a]);
    r.push(n);
  }
  return new Array().concat(...r);
}), Ss = _s((e, t) => {
  const r = [];
  for (let a = 0; a < t.length; a++) {
    const n = e(t[a]);
    n !== null && r.push(n);
  }
  return r;
});
function ys(e, ...t) {
  let r = null;
  const a = _s((n, s) => {
    const i = [];
    return Pe(s, (o) => {
      for (let d; (d = n(o)) && !(r != null && r(d, i.length)); o = d)
        i.push(d);
    }), i;
  })(e, ...t);
  return function(n, s) {
    r = typeof n == "string" ? (o) => no(o, n, this.options) : n ? Br(n) : null;
    const i = a.call(this, s);
    return r = null, i;
  };
}
function nr(e) {
  return Array.from(new Set(e));
}
const Vf = Ss(({ parent: e }) => e && !qt(e) ? e : null, nr), Wf = Lr((e) => {
  const t = [];
  for (; e.parent && !qt(e.parent); )
    t.push(e.parent), e = e.parent;
  return t;
}, ar, (e) => e.reverse()), Gf = ys(({ parent: e }) => e && !qt(e) ? e : null, ar, (e) => e.reverse());
function jf(e) {
  var t;
  const r = [];
  if (!e)
    return this._make(r);
  const a = {
    xmlMode: this.options.xmlMode,
    root: (t = this._root) === null || t === void 0 ? void 0 : t[0]
  }, n = typeof e == "string" ? (s) => no(s, e, a) : Br(e);
  return Pe(this, (s) => {
    for (; s && fe(s); ) {
      if (n(s, 0)) {
        r.includes(s) || r.push(s);
        break;
      }
      s = s.parent;
    }
  }), this._make(r);
}
const Kf = Ss((e) => ms(e)), zf = Lr((e) => {
  const t = [];
  for (; e.next; )
    e = e.next, fe(e) && t.push(e);
  return t;
}, nr), Qf = ys((e) => ms(e), nr), Zf = Ss((e) => ps(e)), Jf = Lr((e) => {
  const t = [];
  for (; e.prev; )
    e = e.prev, fe(e) && t.push(e);
  return t;
}, nr), eh = ys((e) => ps(e), nr), th = Lr((e) => M0(e).filter((t) => fe(t) && t !== e), ar), rh = Lr((e) => va(e).filter(fe), nr);
function ah() {
  const e = this.toArray().reduce((t, r) => ke(r) ? t.concat(r.children) : t, []);
  return this._make(e);
}
function nh(e) {
  let t = 0;
  const r = this.length;
  for (; t < r && e.call(this[t], t, this[t]) !== !1; )
    ++t;
  return this;
}
function sh(e) {
  let t = [];
  for (let r = 0; r < this.length; r++) {
    const a = this[r], n = e.call(a, r, a);
    n != null && (t = t.concat(n));
  }
  return this._make(t);
}
function Br(e) {
  return typeof e == "function" ? (t, r) => e.call(t, r, t) : dt(e) ? (t) => Array.prototype.includes.call(e, t) : function(t) {
    return e === t;
  };
}
function ih(e) {
  var t;
  return this._make(Ns(this.toArray(), e, this.options.xmlMode, (t = this._root) === null || t === void 0 ? void 0 : t[0]));
}
function Ns(e, t, r, a) {
  return typeof t == "string" ? io(t, e, { xmlMode: r, root: a }) : e.filter(Br(t));
}
function uh(e) {
  const t = this.toArray();
  return typeof e == "string" ? so(t.filter(fe), e, this.options) : e ? t.some(Br(e)) : !1;
}
function oh(e) {
  let t = this.toArray();
  if (typeof e == "string") {
    const r = new Set(io(e, t, this.options));
    t = t.filter((a) => !r.has(a));
  } else {
    const r = Br(e);
    t = t.filter((a, n) => !r(a, n));
  }
  return this._make(t);
}
function ch(e) {
  return this.filter(typeof e == "string" ? (
    // Using the `:has` selector here short-circuits searches.
    `:has(${e})`
  ) : (t, r) => this._make(r).find(e).length > 0);
}
function dh() {
  return this.length > 1 ? this._make(this[0]) : this;
}
function lh() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function fh(e) {
  var t;
  return e = +e, e === 0 && this.length <= 1 ? this : (e < 0 && (e = this.length + e), this._make((t = this[e]) !== null && t !== void 0 ? t : []));
}
function hh(e) {
  return e == null ? this.toArray() : this[e < 0 ? this.length + e : e];
}
function mh() {
  return Array.prototype.slice.call(this);
}
function ph(e) {
  let t, r;
  return e == null ? (t = this.parent().children(), r = this[0]) : typeof e == "string" ? (t = this._make(e), r = this[0]) : (t = this, r = dt(e) ? e[0] : e), Array.prototype.indexOf.call(t, r);
}
function Eh(e, t) {
  return this._make(Array.prototype.slice.call(this, e, t));
}
function bh() {
  var e;
  return (e = this.prevObject) !== null && e !== void 0 ? e : this._make([]);
}
function Th(e, t) {
  const r = this._make(e, t), a = ar([...this.get(), ...r.get()]);
  return this._make(a);
}
function xh(e) {
  return this.prevObject ? this.add(e ? this.prevObject.filter(e) : this.prevObject) : this;
}
const gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: Th,
  addBack: xh,
  children: rh,
  closest: jf,
  contents: ah,
  each: nh,
  end: bh,
  eq: fh,
  filter: ih,
  filterArray: Ns,
  find: $f,
  first: dh,
  get: hh,
  has: ch,
  index: ph,
  is: uh,
  last: lh,
  map: sh,
  next: Kf,
  nextAll: zf,
  nextUntil: Qf,
  not: oh,
  parent: Vf,
  parents: Wf,
  parentsUntil: Gf,
  prev: Zf,
  prevAll: Jf,
  prevUntil: eh,
  siblings: th,
  slice: Eh,
  toArray: mh
}, Symbol.toStringTag, { value: "Module" }));
function Ah(e) {
  return function(r, a, n, s) {
    if (typeof Buffer < "u" && Buffer.isBuffer(r) && (r = r.toString()), typeof r == "string")
      return e(r, a, n, s);
    const i = r;
    if (!Array.isArray(i) && qt(i))
      return i;
    const o = new kt([]);
    return Mt(i, o), o;
  };
}
function Mt(e, t) {
  const r = Array.isArray(e) ? e : [e];
  t ? t.children = r : t = null;
  for (let a = 0; a < r.length; a++) {
    const n = r[a];
    n.parent && n.parent.children !== r && Yt(n), t ? (n.prev = r[a - 1] || null, n.next = r[a + 1] || null) : n.prev = n.next = null, n.parent = t;
  }
  return t;
}
function Ch(e, t) {
  return e == null ? [] : dt(e) ? t ? Xn(e.get()) : e.get() : Array.isArray(e) ? e.reduce((r, a) => r.concat(this._makeDomArray(a, t)), []) : typeof e == "string" ? this._parse(e, this.options, !1, null).children : t ? Xn([e]) : [e];
}
function lo(e) {
  return function(...t) {
    const r = this.length - 1;
    return Pe(this, (a, n) => {
      if (!ke(a))
        return;
      const s = typeof t[0] == "function" ? t[0].call(a, n, this._render(a.children)) : t, i = this._makeDomArray(s, n < r);
      e(i, a.children, a);
    });
  };
}
function wt(e, t, r, a, n) {
  var s, i;
  const o = [
    t,
    r,
    ...a
  ], d = t === 0 ? null : e[t - 1], c = t + r >= e.length ? null : e[t + r];
  for (let l = 0; l < a.length; ++l) {
    const b = a[l], m = b.parent;
    if (m) {
      const E = m.children.indexOf(b);
      E > -1 && (m.children.splice(E, 1), n === m && t > E && o[0]--);
    }
    b.parent = n, b.prev && (b.prev.next = (s = b.next) !== null && s !== void 0 ? s : null), b.next && (b.next.prev = (i = b.prev) !== null && i !== void 0 ? i : null), b.prev = l === 0 ? d : a[l - 1], b.next = l === a.length - 1 ? c : a[l + 1];
  }
  return d && (d.next = a[0]), c && (c.prev = a[a.length - 1]), e.splice(...o);
}
function _h(e) {
  return (dt(e) ? e : this._make(e)).append(this), this;
}
function Sh(e) {
  return (dt(e) ? e : this._make(e)).prepend(this), this;
}
const yh = lo((e, t, r) => {
  wt(t, t.length, 0, e, r);
}), Nh = lo((e, t, r) => {
  wt(t, 0, 0, e, r);
});
function fo(e) {
  return function(t) {
    const r = this.length - 1, a = this.parents().last();
    for (let n = 0; n < this.length; n++) {
      const s = this[n], i = typeof t == "function" ? t.call(s, n, s) : typeof t == "string" && !qn(t) ? a.find(t).clone() : t, [o] = this._makeDomArray(i, n < r);
      if (!o || !ke(o))
        continue;
      let d = o, c = 0;
      for (; c < d.children.length; ) {
        const l = d.children[c];
        fe(l) ? (d = l, c = 0) : c++;
      }
      e(s, d, [o]);
    }
    return this;
  };
}
const Ih = fo((e, t, r) => {
  const { parent: a } = e;
  if (!a)
    return;
  const n = a.children, s = n.indexOf(e);
  Mt([e], t), wt(n, s, 0, r, a);
}), vh = fo((e, t, r) => {
  ke(e) && (Mt(e.children, t), Mt(r, e));
});
function Dh(e) {
  return this.parent(e).not("body").each((t, r) => {
    this._make(r).replaceWith(r.children);
  }), this;
}
function Oh(e) {
  const t = this[0];
  if (t) {
    const r = this._make(typeof e == "function" ? e.call(t, 0, t) : e).insertBefore(t);
    let a;
    for (let s = 0; s < r.length; s++)
      r[s].type === "tag" && (a = r[s]);
    let n = 0;
    for (; a && n < a.children.length; ) {
      const s = a.children[n];
      s.type === "tag" ? (a = s, n = 0) : n++;
    }
    a && this._make(a).append(this);
  }
  return this;
}
function Rh(...e) {
  const t = this.length - 1;
  return Pe(this, (r, a) => {
    const { parent: n } = r;
    if (!ke(r) || !n)
      return;
    const s = n.children, i = s.indexOf(r);
    if (i < 0)
      return;
    const o = typeof e[0] == "function" ? e[0].call(r, a, this._render(r.children)) : e, d = this._makeDomArray(o, a < t);
    wt(s, i + 1, 0, d, n);
  });
}
function wh(e) {
  typeof e == "string" && (e = this._make(e)), this.remove();
  const t = [];
  return this._makeDomArray(e).forEach((r) => {
    const a = this.clone().toArray(), { parent: n } = r;
    if (!n)
      return;
    const s = n.children, i = s.indexOf(r);
    i < 0 || (wt(s, i + 1, 0, a, n), t.push(...a));
  }), this._make(t);
}
function Lh(...e) {
  const t = this.length - 1;
  return Pe(this, (r, a) => {
    const { parent: n } = r;
    if (!ke(r) || !n)
      return;
    const s = n.children, i = s.indexOf(r);
    if (i < 0)
      return;
    const o = typeof e[0] == "function" ? e[0].call(r, a, this._render(r.children)) : e, d = this._makeDomArray(o, a < t);
    wt(s, i, 0, d, n);
  });
}
function Bh(e) {
  const t = this._make(e);
  this.remove();
  const r = [];
  return Pe(t, (a) => {
    const n = this.clone().toArray(), { parent: s } = a;
    if (!s)
      return;
    const i = s.children, o = i.indexOf(a);
    o < 0 || (wt(i, o, 0, n, s), r.push(...n));
  }), this._make(r);
}
function Ph(e) {
  const t = e ? this.filter(e) : this;
  return Pe(t, (r) => {
    Yt(r), r.prev = r.next = r.parent = null;
  }), this;
}
function Fh(e) {
  return Pe(this, (t, r) => {
    const { parent: a } = t;
    if (!a)
      return;
    const n = a.children, s = typeof e == "function" ? e.call(t, r, t) : e, i = this._makeDomArray(s);
    Mt(i, null);
    const o = n.indexOf(t);
    wt(n, o, 1, i, a), i.includes(t) || (t.parent = t.prev = t.next = null);
  });
}
function kh() {
  return Pe(this, (e) => {
    ke(e) && (e.children.forEach((t) => {
      t.next = t.prev = t.parent = null;
    }), e.children.length = 0);
  });
}
function Mh(e) {
  if (e === void 0) {
    const t = this[0];
    return !t || !ke(t) ? null : this._render(t.children);
  }
  return Pe(this, (t) => {
    if (!ke(t))
      return;
    t.children.forEach((a) => {
      a.next = a.prev = a.parent = null;
    });
    const r = dt(e) ? e.toArray() : this._parse(`${e}`, this.options, !1, t).children;
    Mt(r, t);
  });
}
function Uh() {
  return this._render(this);
}
function Hh(e) {
  return e === void 0 ? Ir(this) : typeof e == "function" ? Pe(this, (t, r) => this._make(t).text(e.call(t, r, Ir([t])))) : Pe(this, (t) => {
    if (!ke(t))
      return;
    t.children.forEach((a) => {
      a.next = a.prev = a.parent = null;
    });
    const r = new Nr(`${e}`);
    Mt(r, t);
  });
}
function Xh() {
  return this._make(Xn(this.get()));
}
const qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _makeDomArray: Ch,
  after: Rh,
  append: yh,
  appendTo: _h,
  before: Lh,
  clone: Xh,
  empty: kh,
  html: Mh,
  insertAfter: wh,
  insertBefore: Bh,
  prepend: Nh,
  prependTo: Sh,
  remove: Ph,
  replaceWith: Fh,
  text: Hh,
  toString: Uh,
  unwrap: Dh,
  wrap: Ih,
  wrapAll: Oh,
  wrapInner: vh
}, Symbol.toStringTag, { value: "Module" }));
function Yh(e, t) {
  if (e != null && t != null || // When `prop` is a "plain" object
  typeof e == "object" && !Array.isArray(e))
    return Pe(this, (r, a) => {
      fe(r) && ho(r, e, t, a);
    });
  if (this.length !== 0)
    return mo(this[0], e);
}
function ho(e, t, r, a) {
  if (typeof t == "string") {
    const n = mo(e), s = typeof r == "function" ? r.call(e, a, n[t]) : r;
    s === "" ? delete n[t] : s != null && (n[t] = s), e.attribs.style = $h(n);
  } else typeof t == "object" && Object.keys(t).forEach((n, s) => {
    ho(e, n, t[n], s);
  });
}
function mo(e, t) {
  if (!e || !fe(e))
    return;
  const r = Vh(e.attribs.style);
  if (typeof t == "string")
    return r[t];
  if (Array.isArray(t)) {
    const a = {};
    return t.forEach((n) => {
      r[n] != null && (a[n] = r[n]);
    }), a;
  }
  return r;
}
function $h(e) {
  return Object.keys(e).reduce((t, r) => `${t}${t ? " " : ""}${r}: ${e[r]};`, "");
}
function Vh(e) {
  if (e = (e || "").trim(), !e)
    return {};
  const t = {};
  let r;
  for (const a of e.split(";")) {
    const n = a.indexOf(":");
    if (n < 1 || n === a.length - 1) {
      const s = a.trimEnd();
      s.length > 0 && r !== void 0 && (t[r] += `;${s}`);
    } else
      r = a.slice(0, n).trim(), t[r] = a.slice(n + 1).trim();
  }
  return t;
}
const Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Yh
}, Symbol.toStringTag, { value: "Module" })), Vi = "input,select,textarea,keygen", Gh = /%20/g, Wi = /\r?\n/g;
function jh() {
  return this.serializeArray().map((r) => `${encodeURIComponent(r.name)}=${encodeURIComponent(r.value)}`).join("&").replace(Gh, "+");
}
function Kh() {
  return this.map((e, t) => {
    const r = this._make(t);
    return fe(t) && t.name === "form" ? r.find(Vi).toArray() : r.filter(Vi).toArray();
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
  ).map((e, t) => {
    var r;
    const a = this._make(t), n = a.attr("name"), s = (r = a.val()) !== null && r !== void 0 ? r : "";
    return Array.isArray(s) ? s.map((i) => (
      /*
       * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
       * These can occur inside of `<textarea>'s`
       */
      { name: n, value: i.replace(Wi, `\r
`) }
    )) : { name: n, value: s.replace(Wi, `\r
`) };
  }).toArray();
}
const zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  serialize: jh,
  serializeArray: Kh
}, Symbol.toStringTag, { value: "Module" }));
class Pr {
  /**
   * Instance of cheerio. Methods are specified in the modules. Usage of this
   * constructor is not recommended. Please use `$.load` instead.
   *
   * @private
   * @param elements - The new selection.
   * @param root - Sets the root node.
   * @param options - Options for the instance.
   */
  constructor(t, r, a) {
    if (this.length = 0, this.options = a, this._root = r, t) {
      for (let n = 0; n < t.length; n++)
        this[n] = t[n];
      this.length = t.length;
    }
  }
}
Pr.prototype.cheerio = "[cheerio object]";
Pr.prototype.splice = Array.prototype.splice;
Pr.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(Pr.prototype, uf, gh, qh, Wh, zh);
function Qh(e, t) {
  return function r(a, n, s = !0) {
    if (a == null)
      throw new Error("cheerio.load() expects a string");
    const i = { ...us, ...kn(n) }, o = e(a, i, s, null);
    class d extends Pr {
      _make(b, m) {
        const f = c(b, m);
        return f.prevObject = this, f;
      }
      _parse(b, m, f, E) {
        return e(b, m, f, E);
      }
      _render(b) {
        return t(b, this.options);
      }
    }
    function c(l, b, m = o, f) {
      if (l && dt(l))
        return l;
      const E = {
        ...i,
        ...kn(f)
      }, A = typeof m == "string" ? [e(m, E, !1, null)] : "length" in m ? m : [m], p = dt(A) ? A : new d(A, null, E);
      if (p._root = p, !l)
        return new d(void 0, p, E);
      const C = typeof l == "string" && qn(l) ? (
        // $(<html>)
        e(l, E, !1, null).children
      ) : Zh(l) ? (
        // $(dom)
        [l]
      ) : Array.isArray(l) ? (
        // $([dom])
        l
      ) : void 0, h = new d(C, p, E);
      if (C)
        return h;
      if (typeof l != "string")
        throw new Error("Unexpected type of selector");
      let _ = l;
      const v = b ? typeof b == "string" ? qn(b) ? (
        // $('li', '<ul>...</ul>')
        new d([e(b, E, !1, null)], p, E)
      ) : (
        // $('li', 'ul')
        (_ = `${b} ${_}`, p)
      ) : dt(b) ? (
        // $('li', $)
        b
      ) : (
        // $('li', node), $('li', [nodes])
        new d(Array.isArray(b) ? b : [b], p, E)
      ) : (
        // If we don't have a context, maybe we have a root, from loading
        p
      );
      return v ? v.find(_) : h;
    }
    return Object.assign(c, zl, {
      load: r,
      // `_root` and `_options` are used in static methods.
      _root: o,
      _options: i,
      // Add `fn` for plugins
      fn: d.prototype,
      // Add the prototype here to maintain `instanceof` behavior.
      prototype: d.prototype
    }), c;
  };
}
function Zh(e) {
  return !!e.name || e.type === "root" || e.type === "text" || e.type === "comment";
}
const Jh = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), Be = "�";
var y;
(function(e) {
  e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(y || (y = {}));
const Ge = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function po(e) {
  return e >= 55296 && e <= 57343;
}
function e1(e) {
  return e >= 56320 && e <= 57343;
}
function t1(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function Eo(e) {
  return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function bo(e) {
  return e >= 64976 && e <= 65007 || Jh.has(e);
}
var q;
(function(e) {
  e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(q || (q = {}));
const r1 = 65536;
class a1 {
  constructor(t) {
    this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = r1, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(t, r) {
    const { line: a, col: n, offset: s } = this, i = n + r, o = s + r;
    return {
      code: t,
      startLine: a,
      endLine: a,
      startCol: i,
      endCol: i,
      startOffset: o,
      endOffset: o
    };
  }
  _err(t) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t, 0)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(t) {
    if (this.pos !== this.html.length - 1) {
      const r = this.html.charCodeAt(this.pos + 1);
      if (e1(r))
        return this.pos++, this._addGap(), t1(t, r);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, y.EOF;
    return this._err(q.surrogateInInputStream), t;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(t, r) {
    this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = !1, this.lastChunkWritten = r;
  }
  insertHtmlAtCurrentPos(t) {
    this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(t, r) {
    if (this.pos + t.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (r)
      return this.html.startsWith(t, this.pos);
    for (let a = 0; a < t.length; a++)
      if ((this.html.charCodeAt(this.pos + a) | 32) !== t.charCodeAt(a))
        return !1;
    return !0;
  }
  peek(t) {
    const r = this.pos + t;
    if (r >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, y.EOF;
    const a = this.html.charCodeAt(r);
    return a === y.CARRIAGE_RETURN ? y.LINE_FEED : a;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, y.EOF;
    let t = this.html.charCodeAt(this.pos);
    return t === y.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, y.LINE_FEED) : t === y.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, po(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === y.LINE_FEED || t === y.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
  }
  _checkForProblematicCharacters(t) {
    Eo(t) ? this._err(q.controlCharacterInInputStream) : bo(t) && this._err(q.noncharacterInInputStream);
  }
  retreat(t) {
    for (this.pos -= t; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var ye;
(function(e) {
  e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(ye || (ye = {}));
function To(e, t) {
  for (let r = e.attrs.length - 1; r >= 0; r--)
    if (e.attrs[r].name === t)
      return e.attrs[r].value;
  return null;
}
var j;
(function(e) {
  e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(j || (j = {}));
var Ft;
(function(e) {
  e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(Ft || (Ft = {}));
var Ze;
(function(e) {
  e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Ze || (Ze = {}));
var k;
(function(e) {
  e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(k || (k = {}));
var u;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(u || (u = {}));
const n1 = /* @__PURE__ */ new Map([
  [k.A, u.A],
  [k.ADDRESS, u.ADDRESS],
  [k.ANNOTATION_XML, u.ANNOTATION_XML],
  [k.APPLET, u.APPLET],
  [k.AREA, u.AREA],
  [k.ARTICLE, u.ARTICLE],
  [k.ASIDE, u.ASIDE],
  [k.B, u.B],
  [k.BASE, u.BASE],
  [k.BASEFONT, u.BASEFONT],
  [k.BGSOUND, u.BGSOUND],
  [k.BIG, u.BIG],
  [k.BLOCKQUOTE, u.BLOCKQUOTE],
  [k.BODY, u.BODY],
  [k.BR, u.BR],
  [k.BUTTON, u.BUTTON],
  [k.CAPTION, u.CAPTION],
  [k.CENTER, u.CENTER],
  [k.CODE, u.CODE],
  [k.COL, u.COL],
  [k.COLGROUP, u.COLGROUP],
  [k.DD, u.DD],
  [k.DESC, u.DESC],
  [k.DETAILS, u.DETAILS],
  [k.DIALOG, u.DIALOG],
  [k.DIR, u.DIR],
  [k.DIV, u.DIV],
  [k.DL, u.DL],
  [k.DT, u.DT],
  [k.EM, u.EM],
  [k.EMBED, u.EMBED],
  [k.FIELDSET, u.FIELDSET],
  [k.FIGCAPTION, u.FIGCAPTION],
  [k.FIGURE, u.FIGURE],
  [k.FONT, u.FONT],
  [k.FOOTER, u.FOOTER],
  [k.FOREIGN_OBJECT, u.FOREIGN_OBJECT],
  [k.FORM, u.FORM],
  [k.FRAME, u.FRAME],
  [k.FRAMESET, u.FRAMESET],
  [k.H1, u.H1],
  [k.H2, u.H2],
  [k.H3, u.H3],
  [k.H4, u.H4],
  [k.H5, u.H5],
  [k.H6, u.H6],
  [k.HEAD, u.HEAD],
  [k.HEADER, u.HEADER],
  [k.HGROUP, u.HGROUP],
  [k.HR, u.HR],
  [k.HTML, u.HTML],
  [k.I, u.I],
  [k.IMG, u.IMG],
  [k.IMAGE, u.IMAGE],
  [k.INPUT, u.INPUT],
  [k.IFRAME, u.IFRAME],
  [k.KEYGEN, u.KEYGEN],
  [k.LABEL, u.LABEL],
  [k.LI, u.LI],
  [k.LINK, u.LINK],
  [k.LISTING, u.LISTING],
  [k.MAIN, u.MAIN],
  [k.MALIGNMARK, u.MALIGNMARK],
  [k.MARQUEE, u.MARQUEE],
  [k.MATH, u.MATH],
  [k.MENU, u.MENU],
  [k.META, u.META],
  [k.MGLYPH, u.MGLYPH],
  [k.MI, u.MI],
  [k.MO, u.MO],
  [k.MN, u.MN],
  [k.MS, u.MS],
  [k.MTEXT, u.MTEXT],
  [k.NAV, u.NAV],
  [k.NOBR, u.NOBR],
  [k.NOFRAMES, u.NOFRAMES],
  [k.NOEMBED, u.NOEMBED],
  [k.NOSCRIPT, u.NOSCRIPT],
  [k.OBJECT, u.OBJECT],
  [k.OL, u.OL],
  [k.OPTGROUP, u.OPTGROUP],
  [k.OPTION, u.OPTION],
  [k.P, u.P],
  [k.PARAM, u.PARAM],
  [k.PLAINTEXT, u.PLAINTEXT],
  [k.PRE, u.PRE],
  [k.RB, u.RB],
  [k.RP, u.RP],
  [k.RT, u.RT],
  [k.RTC, u.RTC],
  [k.RUBY, u.RUBY],
  [k.S, u.S],
  [k.SCRIPT, u.SCRIPT],
  [k.SEARCH, u.SEARCH],
  [k.SECTION, u.SECTION],
  [k.SELECT, u.SELECT],
  [k.SOURCE, u.SOURCE],
  [k.SMALL, u.SMALL],
  [k.SPAN, u.SPAN],
  [k.STRIKE, u.STRIKE],
  [k.STRONG, u.STRONG],
  [k.STYLE, u.STYLE],
  [k.SUB, u.SUB],
  [k.SUMMARY, u.SUMMARY],
  [k.SUP, u.SUP],
  [k.TABLE, u.TABLE],
  [k.TBODY, u.TBODY],
  [k.TEMPLATE, u.TEMPLATE],
  [k.TEXTAREA, u.TEXTAREA],
  [k.TFOOT, u.TFOOT],
  [k.TD, u.TD],
  [k.TH, u.TH],
  [k.THEAD, u.THEAD],
  [k.TITLE, u.TITLE],
  [k.TR, u.TR],
  [k.TRACK, u.TRACK],
  [k.TT, u.TT],
  [k.U, u.U],
  [k.UL, u.UL],
  [k.SVG, u.SVG],
  [k.VAR, u.VAR],
  [k.WBR, u.WBR],
  [k.XMP, u.XMP]
]);
function Ra(e) {
  var t;
  return (t = n1.get(e)) !== null && t !== void 0 ? t : u.UNKNOWN;
}
const Q = u, s1 = {
  [j.HTML]: /* @__PURE__ */ new Set([
    Q.ADDRESS,
    Q.APPLET,
    Q.AREA,
    Q.ARTICLE,
    Q.ASIDE,
    Q.BASE,
    Q.BASEFONT,
    Q.BGSOUND,
    Q.BLOCKQUOTE,
    Q.BODY,
    Q.BR,
    Q.BUTTON,
    Q.CAPTION,
    Q.CENTER,
    Q.COL,
    Q.COLGROUP,
    Q.DD,
    Q.DETAILS,
    Q.DIR,
    Q.DIV,
    Q.DL,
    Q.DT,
    Q.EMBED,
    Q.FIELDSET,
    Q.FIGCAPTION,
    Q.FIGURE,
    Q.FOOTER,
    Q.FORM,
    Q.FRAME,
    Q.FRAMESET,
    Q.H1,
    Q.H2,
    Q.H3,
    Q.H4,
    Q.H5,
    Q.H6,
    Q.HEAD,
    Q.HEADER,
    Q.HGROUP,
    Q.HR,
    Q.HTML,
    Q.IFRAME,
    Q.IMG,
    Q.INPUT,
    Q.LI,
    Q.LINK,
    Q.LISTING,
    Q.MAIN,
    Q.MARQUEE,
    Q.MENU,
    Q.META,
    Q.NAV,
    Q.NOEMBED,
    Q.NOFRAMES,
    Q.NOSCRIPT,
    Q.OBJECT,
    Q.OL,
    Q.P,
    Q.PARAM,
    Q.PLAINTEXT,
    Q.PRE,
    Q.SCRIPT,
    Q.SECTION,
    Q.SELECT,
    Q.SOURCE,
    Q.STYLE,
    Q.SUMMARY,
    Q.TABLE,
    Q.TBODY,
    Q.TD,
    Q.TEMPLATE,
    Q.TEXTAREA,
    Q.TFOOT,
    Q.TH,
    Q.THEAD,
    Q.TITLE,
    Q.TR,
    Q.TRACK,
    Q.UL,
    Q.WBR,
    Q.XMP
  ]),
  [j.MATHML]: /* @__PURE__ */ new Set([Q.MI, Q.MO, Q.MN, Q.MS, Q.MTEXT, Q.ANNOTATION_XML]),
  [j.SVG]: /* @__PURE__ */ new Set([Q.TITLE, Q.FOREIGN_OBJECT, Q.DESC]),
  [j.XLINK]: /* @__PURE__ */ new Set(),
  [j.XML]: /* @__PURE__ */ new Set(),
  [j.XMLNS]: /* @__PURE__ */ new Set()
}, Gn = /* @__PURE__ */ new Set([Q.H1, Q.H2, Q.H3, Q.H4, Q.H5, Q.H6]), i1 = /* @__PURE__ */ new Set([
  k.STYLE,
  k.SCRIPT,
  k.XMP,
  k.IFRAME,
  k.NOEMBED,
  k.NOFRAMES,
  k.PLAINTEXT
]);
function u1(e, t) {
  return i1.has(e) || t && e === k.NOSCRIPT;
}
var O;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(O || (O = {}));
const ze = {
  DATA: O.DATA,
  RCDATA: O.RCDATA,
  RAWTEXT: O.RAWTEXT,
  SCRIPT_DATA: O.SCRIPT_DATA,
  PLAINTEXT: O.PLAINTEXT,
  CDATA_SECTION: O.CDATA_SECTION
};
function o1(e) {
  return e >= y.DIGIT_0 && e <= y.DIGIT_9;
}
function mr(e) {
  return e >= y.LATIN_CAPITAL_A && e <= y.LATIN_CAPITAL_Z;
}
function c1(e) {
  return e >= y.LATIN_SMALL_A && e <= y.LATIN_SMALL_Z;
}
function St(e) {
  return c1(e) || mr(e);
}
function Gi(e) {
  return St(e) || o1(e);
}
function Yr(e) {
  return e + 32;
}
function xo(e) {
  return e === y.SPACE || e === y.LINE_FEED || e === y.TABULATION || e === y.FORM_FEED;
}
function ji(e) {
  return xo(e) || e === y.SOLIDUS || e === y.GREATER_THAN_SIGN;
}
function d1(e) {
  return e === y.NULL ? q.nullCharacterReference : e > 1114111 ? q.characterReferenceOutsideUnicodeRange : po(e) ? q.surrogateCharacterReference : bo(e) ? q.noncharacterCharacterReference : Eo(e) || e === y.CARRIAGE_RETURN ? q.controlCharacterReference : null;
}
let l1 = class {
  constructor(t, r) {
    this.options = t, this.handler = r, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = O.DATA, this.returnState = O.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new a1(r), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new D0(hs, (a, n) => {
      this.preprocessor.pos = this.entityStartPos + n - 1, this._flushCodePointConsumedAsCharacterReference(a);
    }, r.onParseError ? {
      missingSemicolonAfterCharacterReference: () => {
        this._err(q.missingSemicolonAfterCharacterReference, 1);
      },
      absenceOfDigitsInNumericCharacterReference: (a) => {
        this._err(q.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + a);
      },
      validateNumericCharacterReference: (a) => {
        const n = d1(a);
        n && this._err(n, 1);
      }
    } : void 0);
  }
  //Errors
  _err(t, r = 0) {
    var a, n;
    (n = (a = this.handler).onParseError) === null || n === void 0 || n.call(a, this.preprocessor.getError(t, r));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(t) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - t,
      startOffset: this.preprocessor.offset - t,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const t = this._consume();
        this._ensureHibernation() || this._callState(t);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(t) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || t == null || t());
  }
  write(t, r, a) {
    this.active = !0, this.preprocessor.write(t, r), this._runParsingLoop(), this.paused || a == null || a();
  }
  insertHtmlAtCurrentPos(t) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _advanceBy(t) {
    this.consumedAfterSnapshot += t;
    for (let r = 0; r < t; r++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(t, r) {
    return this.preprocessor.startsWith(t, r) ? (this._advanceBy(t.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: ye.START_TAG,
      tagName: "",
      tagID: u.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: ye.END_TAG,
      tagName: "",
      tagID: u.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(t) {
    this.currentToken = {
      type: ye.COMMENT,
      data: "",
      location: this.getCurrentLocation(t)
    };
  }
  _createDoctypeToken(t) {
    this.currentToken = {
      type: ye.DOCTYPE,
      name: t,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(t, r) {
    this.currentCharacterToken = {
      type: t,
      chars: r,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(t) {
    this.currentAttr = {
      name: t,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var t, r;
    const a = this.currentToken;
    if (To(a, this.currentAttr.name) === null) {
      if (a.attrs.push(this.currentAttr), a.location && this.currentLocation) {
        const n = (t = (r = a.location).attrs) !== null && t !== void 0 ? t : r.attrs = /* @__PURE__ */ Object.create(null);
        n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(q.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(t) {
    this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const t = this.currentToken;
    this.prepareToken(t), t.tagID = Ra(t.tagName), t.type === ye.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(q.endTagWithAttributes), t.selfClosing && this._err(q.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(t) {
    this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(t) {
    this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(t) {
    if (this.currentCharacterToken) {
      switch (t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type) {
        case ye.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case ye.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case ye.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const t = this.getCurrentLocation(0);
    t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({ type: ye.EOF, location: t }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: The specification uses only one type of character token (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(t, r) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type === t) {
        this.currentCharacterToken.chars += r;
        return;
      } else
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
    this._createCharacterToken(t, r);
  }
  _emitCodePoint(t) {
    const r = xo(t) ? ye.WHITESPACE_CHARACTER : t === y.NULL ? ye.NULL_CHARACTER : ye.CHARACTER;
    this._appendCharToCurrentCharacterToken(r, String.fromCodePoint(t));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(t) {
    this._appendCharToCurrentCharacterToken(ye.CHARACTER, t);
  }
  // Character reference helpers
  _startCharacterReference() {
    this.returnState = this.state, this.state = O.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? Tt.Attribute : Tt.Legacy);
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === O.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === O.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === O.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(t) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(t) {
    switch (this.state) {
      case O.DATA: {
        this._stateData(t);
        break;
      }
      case O.RCDATA: {
        this._stateRcdata(t);
        break;
      }
      case O.RAWTEXT: {
        this._stateRawtext(t);
        break;
      }
      case O.SCRIPT_DATA: {
        this._stateScriptData(t);
        break;
      }
      case O.PLAINTEXT: {
        this._statePlaintext(t);
        break;
      }
      case O.TAG_OPEN: {
        this._stateTagOpen(t);
        break;
      }
      case O.END_TAG_OPEN: {
        this._stateEndTagOpen(t);
        break;
      }
      case O.TAG_NAME: {
        this._stateTagName(t);
        break;
      }
      case O.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(t);
        break;
      }
      case O.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(t);
        break;
      }
      case O.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(t);
        break;
      }
      case O.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(t);
        break;
      }
      case O.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(t);
        break;
      }
      case O.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(t);
        break;
      }
      case O.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(t);
        break;
      }
      case O.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(t);
        break;
      }
      case O.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(t);
        break;
      }
      case O.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(t);
        break;
      }
      case O.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(t);
        break;
      }
      case O.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(t);
        break;
      }
      case O.ATTRIBUTE_NAME: {
        this._stateAttributeName(t);
        break;
      }
      case O.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(t);
        break;
      }
      case O.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(t);
        break;
      }
      case O.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(t);
        break;
      }
      case O.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(t);
        break;
      }
      case O.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(t);
        break;
      }
      case O.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(t);
        break;
      }
      case O.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(t);
        break;
      }
      case O.BOGUS_COMMENT: {
        this._stateBogusComment(t);
        break;
      }
      case O.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(t);
        break;
      }
      case O.COMMENT_START: {
        this._stateCommentStart(t);
        break;
      }
      case O.COMMENT_START_DASH: {
        this._stateCommentStartDash(t);
        break;
      }
      case O.COMMENT: {
        this._stateComment(t);
        break;
      }
      case O.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(t);
        break;
      }
      case O.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(t);
        break;
      }
      case O.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(t);
        break;
      }
      case O.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(t);
        break;
      }
      case O.COMMENT_END_DASH: {
        this._stateCommentEndDash(t);
        break;
      }
      case O.COMMENT_END: {
        this._stateCommentEnd(t);
        break;
      }
      case O.COMMENT_END_BANG: {
        this._stateCommentEndBang(t);
        break;
      }
      case O.DOCTYPE: {
        this._stateDoctype(t);
        break;
      }
      case O.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(t);
        break;
      }
      case O.DOCTYPE_NAME: {
        this._stateDoctypeName(t);
        break;
      }
      case O.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(t);
        break;
      }
      case O.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(t);
        break;
      }
      case O.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(t);
        break;
      }
      case O.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(t);
        break;
      }
      case O.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(t);
        break;
      }
      case O.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(t);
        break;
      }
      case O.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
        break;
      }
      case O.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(t);
        break;
      }
      case O.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(t);
        break;
      }
      case O.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(t);
        break;
      }
      case O.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(t);
        break;
      }
      case O.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(t);
        break;
      }
      case O.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(t);
        break;
      }
      case O.CDATA_SECTION: {
        this._stateCdataSection(t);
        break;
      }
      case O.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(t);
        break;
      }
      case O.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(t);
        break;
      }
      case O.CHARACTER_REFERENCE: {
        this._stateCharacterReference();
        break;
      }
      case O.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(t);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(t) {
    switch (t) {
      case y.LESS_THAN_SIGN: {
        this.state = O.TAG_OPEN;
        break;
      }
      case y.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitCodePoint(t);
        break;
      }
      case y.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(t) {
    switch (t) {
      case y.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(t) {
    switch (t) {
      case y.LESS_THAN_SIGN: {
        this.state = O.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(t) {
    switch (t) {
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(t) {
    switch (t) {
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(t) {
    if (St(t))
      this._createStartTagToken(), this.state = O.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case y.EXCLAMATION_MARK: {
          this.state = O.MARKUP_DECLARATION_OPEN;
          break;
        }
        case y.SOLIDUS: {
          this.state = O.END_TAG_OPEN;
          break;
        }
        case y.QUESTION_MARK: {
          this._err(q.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = O.BOGUS_COMMENT, this._stateBogusComment(t);
          break;
        }
        case y.EOF: {
          this._err(q.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(q.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = O.DATA, this._stateData(t);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(t) {
    if (St(t))
      this._createEndTagToken(), this.state = O.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case y.GREATER_THAN_SIGN: {
          this._err(q.missingEndTagName), this.state = O.DATA;
          break;
        }
        case y.EOF: {
          this._err(q.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(q.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = O.BOGUS_COMMENT, this._stateBogusComment(t);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case y.SOLIDUS: {
        this.state = O.SELF_CLOSING_START_TAG;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.tagName += Be;
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        r.tagName += String.fromCodePoint(mr(t) ? Yr(t) : t);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(t) {
    t === y.SOLIDUS ? this.state = O.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = O.RCDATA, this._stateRcdata(t));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(t) {
    St(t) ? (this.state = O.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = O.RCDATA, this._stateRcdata(t));
  }
  handleSpecialEndTag(t) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const r = this.currentToken;
    switch (r.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = O.BEFORE_ATTRIBUTE_NAME, !1;
      case y.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = O.SELF_CLOSING_START_TAG, !1;
      case y.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = O.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = O.RCDATA, this._stateRcdata(t));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(t) {
    t === y.SOLIDUS ? this.state = O.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = O.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(t) {
    St(t) ? (this.state = O.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = O.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = O.RAWTEXT, this._stateRawtext(t));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(t) {
    switch (t) {
      case y.SOLIDUS: {
        this.state = O.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case y.EXCLAMATION_MARK: {
        this.state = O.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = O.SCRIPT_DATA, this._stateScriptData(t);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(t) {
    St(t) ? (this.state = O.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = O.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = O.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(t) {
    t === y.HYPHEN_MINUS ? (this.state = O.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = O.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(t) {
    t === y.HYPHEN_MINUS ? (this.state = O.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = O.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.state = O.SCRIPT_DATA_ESCAPED, this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = O.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.state = O.SCRIPT_DATA_ESCAPED, this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = O.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(t) {
    t === y.SOLIDUS ? this.state = O.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : St(t) ? (this._emitChars("<"), this.state = O.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = O.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(t) {
    St(t) ? (this.state = O.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = O.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = O.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(t) {
    if (this.preprocessor.startsWith(Ge.SCRIPT, !1) && ji(this.preprocessor.peek(Ge.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let r = 0; r < Ge.SCRIPT.length; r++)
        this._emitCodePoint(this._consume());
      this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else this._ensureHibernation() || (this.state = O.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case y.LESS_THAN_SIGN: {
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(Be);
        break;
      }
      case y.EOF: {
        this._err(q.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(t) {
    t === y.SOLIDUS ? (this.state = O.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(t) {
    if (this.preprocessor.startsWith(Ge.SCRIPT, !1) && ji(this.preprocessor.peek(Ge.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let r = 0; r < Ge.SCRIPT.length; r++)
        this._emitCodePoint(this._consume());
      this.state = O.SCRIPT_DATA_ESCAPED;
    } else this._ensureHibernation() || (this.state = O.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.SOLIDUS:
      case y.GREATER_THAN_SIGN:
      case y.EOF: {
        this.state = O.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case y.EQUALS_SIGN: {
        this._err(q.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = O.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = O.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
      case y.SOLIDUS:
      case y.GREATER_THAN_SIGN:
      case y.EOF: {
        this._leaveAttrName(), this.state = O.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case y.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = O.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case y.QUOTATION_MARK:
      case y.APOSTROPHE:
      case y.LESS_THAN_SIGN: {
        this._err(q.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.currentAttr.name += Be;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(mr(t) ? Yr(t) : t);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.SOLIDUS: {
        this.state = O.SELF_CLOSING_START_TAG;
        break;
      }
      case y.EQUALS_SIGN: {
        this.state = O.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = O.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.QUOTATION_MARK: {
        this.state = O.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        this.state = O.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.missingAttributeValue), this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = O.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(t) {
    switch (t) {
      case y.QUOTATION_MARK: {
        this.state = O.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case y.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.currentAttr.value += Be;
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(t) {
    switch (t) {
      case y.APOSTROPHE: {
        this.state = O.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case y.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.currentAttr.value += Be;
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this._leaveAttrValue(), this.state = O.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case y.AMPERSAND: {
        this._startCharacterReference();
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), this.currentAttr.value += Be;
        break;
      }
      case y.QUOTATION_MARK:
      case y.APOSTROPHE:
      case y.LESS_THAN_SIGN:
      case y.EQUALS_SIGN:
      case y.GRAVE_ACCENT: {
        this._err(q.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this._leaveAttrValue(), this.state = O.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case y.SOLIDUS: {
        this._leaveAttrValue(), this.state = O.SELF_CLOSING_START_TAG;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingWhitespaceBetweenAttributes), this.state = O.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(t) {
    switch (t) {
      case y.GREATER_THAN_SIGN: {
        const r = this.currentToken;
        r.selfClosing = !0, this.state = O.DATA, this.emitCurrentTagToken();
        break;
      }
      case y.EOF: {
        this._err(q.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.unexpectedSolidusInTag), this.state = O.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(t) {
    const r = this.currentToken;
    switch (t) {
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentComment(r);
        break;
      }
      case y.EOF: {
        this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.data += Be;
        break;
      }
      default:
        r.data += String.fromCodePoint(t);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(t) {
    this._consumeSequenceIfMatch(Ge.DASH_DASH, !0) ? (this._createCommentToken(Ge.DASH_DASH.length + 1), this.state = O.COMMENT_START) : this._consumeSequenceIfMatch(Ge.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(Ge.DOCTYPE.length + 1), this.state = O.DOCTYPE) : this._consumeSequenceIfMatch(Ge.CDATA_START, !0) ? this.inForeignNode ? this.state = O.CDATA_SECTION : (this._err(q.cdataInHtmlContent), this._createCommentToken(Ge.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = O.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(q.incorrectlyOpenedComment), this._createCommentToken(2), this.state = O.BOGUS_COMMENT, this._stateBogusComment(t));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(t) {
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.COMMENT_START_DASH;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptClosingOfEmptyComment), this.state = O.DATA;
        const r = this.currentToken;
        this.emitCurrentComment(r);
        break;
      }
      default:
        this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(t) {
    const r = this.currentToken;
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.COMMENT_END;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptClosingOfEmptyComment), this.state = O.DATA, this.emitCurrentComment(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInComment), this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      default:
        r.data += "-", this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(t) {
    const r = this.currentToken;
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.COMMENT_END_DASH;
        break;
      }
      case y.LESS_THAN_SIGN: {
        r.data += "<", this.state = O.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.data += Be;
        break;
      }
      case y.EOF: {
        this._err(q.eofInComment), this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      default:
        r.data += String.fromCodePoint(t);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(t) {
    const r = this.currentToken;
    switch (t) {
      case y.EXCLAMATION_MARK: {
        r.data += "!", this.state = O.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case y.LESS_THAN_SIGN: {
        r.data += "<";
        break;
      }
      default:
        this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(t) {
    t === y.HYPHEN_MINUS ? this.state = O.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = O.COMMENT, this._stateComment(t));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(t) {
    t === y.HYPHEN_MINUS ? this.state = O.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = O.COMMENT_END_DASH, this._stateCommentEndDash(t));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(t) {
    t !== y.GREATER_THAN_SIGN && t !== y.EOF && this._err(q.nestedComment), this.state = O.COMMENT_END, this._stateCommentEnd(t);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(t) {
    const r = this.currentToken;
    switch (t) {
      case y.HYPHEN_MINUS: {
        this.state = O.COMMENT_END;
        break;
      }
      case y.EOF: {
        this._err(q.eofInComment), this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      default:
        r.data += "-", this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(t) {
    const r = this.currentToken;
    switch (t) {
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentComment(r);
        break;
      }
      case y.EXCLAMATION_MARK: {
        this.state = O.COMMENT_END_BANG;
        break;
      }
      case y.HYPHEN_MINUS: {
        r.data += "-";
        break;
      }
      case y.EOF: {
        this._err(q.eofInComment), this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      default:
        r.data += "--", this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(t) {
    const r = this.currentToken;
    switch (t) {
      case y.HYPHEN_MINUS: {
        r.data += "--!", this.state = O.COMMENT_END_DASH;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.incorrectlyClosedComment), this.state = O.DATA, this.emitCurrentComment(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInComment), this.emitCurrentComment(r), this._emitEOFToken();
        break;
      }
      default:
        r.data += "--!", this.state = O.COMMENT, this._stateComment(t);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(t) {
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.BEFORE_DOCTYPE_NAME;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), this._createDoctypeToken(null);
        const r = this.currentToken;
        r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingWhitespaceBeforeDoctypeName), this.state = O.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(t) {
    if (mr(t))
      this._createDoctypeToken(String.fromCharCode(Yr(t))), this.state = O.DOCTYPE_NAME;
    else
      switch (t) {
        case y.SPACE:
        case y.LINE_FEED:
        case y.TABULATION:
        case y.FORM_FEED:
          break;
        case y.NULL: {
          this._err(q.unexpectedNullCharacter), this._createDoctypeToken(Be), this.state = O.DOCTYPE_NAME;
          break;
        }
        case y.GREATER_THAN_SIGN: {
          this._err(q.missingDoctypeName), this._createDoctypeToken(null);
          const r = this.currentToken;
          r.forceQuirks = !0, this.emitCurrentDoctype(r), this.state = O.DATA;
          break;
        }
        case y.EOF: {
          this._err(q.eofInDoctype), this._createDoctypeToken(null);
          const r = this.currentToken;
          r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)), this.state = O.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.AFTER_DOCTYPE_NAME;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.name += Be;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        r.name += String.fromCodePoint(mr(t) ? Yr(t) : t);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(Ge.PUBLIC, !1) ? this.state = O.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(Ge.SYSTEM, !1) ? this.state = O.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(q.invalidCharacterSequenceAfterDoctypeName), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case y.QUOTATION_MARK: {
        this._err(q.missingWhitespaceAfterDoctypePublicKeyword), r.publicId = "", this.state = O.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        this._err(q.missingWhitespaceAfterDoctypePublicKeyword), r.publicId = "", this.state = O.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.missingDoctypePublicIdentifier), r.forceQuirks = !0, this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypePublicIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.QUOTATION_MARK: {
        r.publicId = "", this.state = O.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        r.publicId = "", this.state = O.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.missingDoctypePublicIdentifier), r.forceQuirks = !0, this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypePublicIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(t) {
    const r = this.currentToken;
    switch (t) {
      case y.QUOTATION_MARK: {
        this.state = O.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.publicId += Be;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptDoctypePublicIdentifier), r.forceQuirks = !0, this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        r.publicId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(t) {
    const r = this.currentToken;
    switch (t) {
      case y.APOSTROPHE: {
        this.state = O.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.publicId += Be;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptDoctypePublicIdentifier), r.forceQuirks = !0, this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        r.publicId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.QUOTATION_MARK: {
        this._err(q.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        this._err(q.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.QUOTATION_MARK: {
        r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED: {
        this.state = O.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case y.QUOTATION_MARK: {
        this._err(q.missingWhitespaceAfterDoctypeSystemKeyword), r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        this._err(q.missingWhitespaceAfterDoctypeSystemKeyword), r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.missingDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.QUOTATION_MARK: {
        r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case y.APOSTROPHE: {
        r.systemId = "", this.state = O.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.missingDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.DATA, this.emitCurrentDoctype(r);
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.missingQuoteBeforeDoctypeSystemIdentifier), r.forceQuirks = !0, this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(t) {
    const r = this.currentToken;
    switch (t) {
      case y.QUOTATION_MARK: {
        this.state = O.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.systemId += Be;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptDoctypeSystemIdentifier), r.forceQuirks = !0, this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        r.systemId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(t) {
    const r = this.currentToken;
    switch (t) {
      case y.APOSTROPHE: {
        this.state = O.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter), r.systemId += Be;
        break;
      }
      case y.GREATER_THAN_SIGN: {
        this._err(q.abruptDoctypeSystemIdentifier), r.forceQuirks = !0, this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        r.systemId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(t) {
    const r = this.currentToken;
    switch (t) {
      case y.SPACE:
      case y.LINE_FEED:
      case y.TABULATION:
      case y.FORM_FEED:
        break;
      case y.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.EOF: {
        this._err(q.eofInDoctype), r.forceQuirks = !0, this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
      default:
        this._err(q.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = O.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(t) {
    const r = this.currentToken;
    switch (t) {
      case y.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(r), this.state = O.DATA;
        break;
      }
      case y.NULL: {
        this._err(q.unexpectedNullCharacter);
        break;
      }
      case y.EOF: {
        this.emitCurrentDoctype(r), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(t) {
    switch (t) {
      case y.RIGHT_SQUARE_BRACKET: {
        this.state = O.CDATA_SECTION_BRACKET;
        break;
      }
      case y.EOF: {
        this._err(q.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(t) {
    t === y.RIGHT_SQUARE_BRACKET ? this.state = O.CDATA_SECTION_END : (this._emitChars("]"), this.state = O.CDATA_SECTION, this._stateCdataSection(t));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(t) {
    switch (t) {
      case y.GREATER_THAN_SIGN: {
        this.state = O.DATA;
        break;
      }
      case y.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = O.CDATA_SECTION, this._stateCdataSection(t);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference() {
    let t = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
    if (t < 0)
      if (this.preprocessor.lastChunkWritten)
        t = this.entityDecoder.end();
      else {
        this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
        return;
      }
    t === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(y.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Gi(this.preprocessor.peek(1)) ? O.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(t) {
    Gi(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === y.SEMICOLON && this._err(q.unknownNamedCharacterReference), this.state = this.returnState, this._callState(t));
  }
};
const go = /* @__PURE__ */ new Set([u.DD, u.DT, u.LI, u.OPTGROUP, u.OPTION, u.P, u.RB, u.RP, u.RT, u.RTC]), Ki = /* @__PURE__ */ new Set([
  ...go,
  u.CAPTION,
  u.COLGROUP,
  u.TBODY,
  u.TD,
  u.TFOOT,
  u.TH,
  u.THEAD,
  u.TR
]), Ea = /* @__PURE__ */ new Set([
  u.APPLET,
  u.CAPTION,
  u.HTML,
  u.MARQUEE,
  u.OBJECT,
  u.TABLE,
  u.TD,
  u.TEMPLATE,
  u.TH
]), f1 = /* @__PURE__ */ new Set([...Ea, u.OL, u.UL]), h1 = /* @__PURE__ */ new Set([...Ea, u.BUTTON]), zi = /* @__PURE__ */ new Set([u.ANNOTATION_XML, u.MI, u.MN, u.MO, u.MS, u.MTEXT]), Qi = /* @__PURE__ */ new Set([u.DESC, u.FOREIGN_OBJECT, u.TITLE]), m1 = /* @__PURE__ */ new Set([u.TR, u.TEMPLATE, u.HTML]), p1 = /* @__PURE__ */ new Set([u.TBODY, u.TFOOT, u.THEAD, u.TEMPLATE, u.HTML]), E1 = /* @__PURE__ */ new Set([u.TABLE, u.TEMPLATE, u.HTML]), b1 = /* @__PURE__ */ new Set([u.TD, u.TH]);
class T1 {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(t, r, a) {
    this.treeAdapter = r, this.handler = a, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = u.UNKNOWN, this.current = t;
  }
  //Index of element
  _indexOf(t) {
    return this.items.lastIndexOf(t, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === u.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === j.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(t, r) {
    this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = r, this.currentTagId = r, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, r, !0);
  }
  pop() {
    const t = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !0);
  }
  replace(t, r) {
    const a = this._indexOf(t);
    this.items[a] = r, a === this.stackTop && (this.current = r);
  }
  insertAfter(t, r, a) {
    const n = this._indexOf(t) + 1;
    this.items.splice(n, 0, r), this.tagIDs.splice(n, 0, a), this.stackTop++, n === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, n === this.stackTop);
  }
  popUntilTagNamePopped(t) {
    let r = this.stackTop + 1;
    do
      r = this.tagIDs.lastIndexOf(t, r - 1);
    while (r > 0 && this.treeAdapter.getNamespaceURI(this.items[r]) !== j.HTML);
    this.shortenToLength(r < 0 ? 0 : r);
  }
  shortenToLength(t) {
    for (; this.stackTop >= t; ) {
      const r = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(r, this.stackTop < t);
    }
  }
  popUntilElementPopped(t) {
    const r = this._indexOf(t);
    this.shortenToLength(r < 0 ? 0 : r);
  }
  popUntilPopped(t, r) {
    const a = this._indexOfTagNames(t, r);
    this.shortenToLength(a < 0 ? 0 : a);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(Gn, j.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(b1, j.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(t, r) {
    for (let a = this.stackTop; a >= 0; a--)
      if (t.has(this.tagIDs[a]) && this.treeAdapter.getNamespaceURI(this.items[a]) === r)
        return a;
    return -1;
  }
  clearBackTo(t, r) {
    const a = this._indexOfTagNames(t, r);
    this.shortenToLength(a + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(E1, j.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(p1, j.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(m1, j.HTML);
  }
  remove(t) {
    const r = this._indexOf(t);
    r >= 0 && (r === this.stackTop ? this.pop() : (this.items.splice(r, 1), this.tagIDs.splice(r, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === u.BODY ? this.items[1] : null;
  }
  contains(t) {
    return this._indexOf(t) > -1;
  }
  getCommonAncestor(t) {
    const r = this._indexOf(t) - 1;
    return r >= 0 ? this.items[r] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === u.HTML;
  }
  //Element in scope
  hasInDynamicScope(t, r) {
    for (let a = this.stackTop; a >= 0; a--) {
      const n = this.tagIDs[a];
      switch (this.treeAdapter.getNamespaceURI(this.items[a])) {
        case j.HTML: {
          if (n === t)
            return !0;
          if (r.has(n))
            return !1;
          break;
        }
        case j.SVG: {
          if (Qi.has(n))
            return !1;
          break;
        }
        case j.MATHML: {
          if (zi.has(n))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInScope(t) {
    return this.hasInDynamicScope(t, Ea);
  }
  hasInListItemScope(t) {
    return this.hasInDynamicScope(t, f1);
  }
  hasInButtonScope(t) {
    return this.hasInDynamicScope(t, h1);
  }
  hasNumberedHeaderInScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t];
      switch (this.treeAdapter.getNamespaceURI(this.items[t])) {
        case j.HTML: {
          if (Gn.has(r))
            return !0;
          if (Ea.has(r))
            return !1;
          break;
        }
        case j.SVG: {
          if (Qi.has(r))
            return !1;
          break;
        }
        case j.MATHML: {
          if (zi.has(r))
            return !1;
          break;
        }
      }
    }
    return !0;
  }
  hasInTableScope(t) {
    for (let r = this.stackTop; r >= 0; r--)
      if (this.treeAdapter.getNamespaceURI(this.items[r]) === j.HTML)
        switch (this.tagIDs[r]) {
          case t:
            return !0;
          case u.TABLE:
          case u.HTML:
            return !1;
        }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let t = this.stackTop; t >= 0; t--)
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === j.HTML)
        switch (this.tagIDs[t]) {
          case u.TBODY:
          case u.THEAD:
          case u.TFOOT:
            return !0;
          case u.TABLE:
          case u.HTML:
            return !1;
        }
    return !0;
  }
  hasInSelectScope(t) {
    for (let r = this.stackTop; r >= 0; r--)
      if (this.treeAdapter.getNamespaceURI(this.items[r]) === j.HTML)
        switch (this.tagIDs[r]) {
          case t:
            return !0;
          case u.OPTION:
          case u.OPTGROUP:
            break;
          default:
            return !1;
        }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; go.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; Ki.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(t) {
    for (; this.currentTagId !== t && Ki.has(this.currentTagId); )
      this.pop();
  }
}
const Dn = 3;
var ut;
(function(e) {
  e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(ut || (ut = {}));
const Zi = { type: ut.Marker };
class x1 {
  constructor(t) {
    this.treeAdapter = t, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(t, r) {
    const a = [], n = r.length, s = this.treeAdapter.getTagName(t), i = this.treeAdapter.getNamespaceURI(t);
    for (let o = 0; o < this.entries.length; o++) {
      const d = this.entries[o];
      if (d.type === ut.Marker)
        break;
      const { element: c } = d;
      if (this.treeAdapter.getTagName(c) === s && this.treeAdapter.getNamespaceURI(c) === i) {
        const l = this.treeAdapter.getAttrList(c);
        l.length === n && a.push({ idx: o, attrs: l });
      }
    }
    return a;
  }
  _ensureNoahArkCondition(t) {
    if (this.entries.length < Dn)
      return;
    const r = this.treeAdapter.getAttrList(t), a = this._getNoahArkConditionCandidates(t, r);
    if (a.length < Dn)
      return;
    const n = new Map(r.map((i) => [i.name, i.value]));
    let s = 0;
    for (let i = 0; i < a.length; i++) {
      const o = a[i];
      o.attrs.every((d) => n.get(d.name) === d.value) && (s += 1, s >= Dn && this.entries.splice(o.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(Zi);
  }
  pushElement(t, r) {
    this._ensureNoahArkCondition(t), this.entries.unshift({
      type: ut.Element,
      element: t,
      token: r
    });
  }
  insertElementAfterBookmark(t, r) {
    const a = this.entries.indexOf(this.bookmark);
    this.entries.splice(a, 0, {
      type: ut.Element,
      element: t,
      token: r
    });
  }
  removeEntry(t) {
    const r = this.entries.indexOf(t);
    r >= 0 && this.entries.splice(r, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const t = this.entries.indexOf(Zi);
    t >= 0 ? this.entries.splice(0, t + 1) : this.entries.length = 0;
  }
  //Search
  getElementEntryInScopeWithTagName(t) {
    const r = this.entries.find((a) => a.type === ut.Marker || this.treeAdapter.getTagName(a.element) === t);
    return r && r.type === ut.Element ? r : null;
  }
  getElementEntry(t) {
    return this.entries.find((r) => r.type === ut.Element && r.element === t);
  }
}
const bt = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: Ze.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(e, t, r) {
    return {
      nodeName: e,
      tagName: e,
      attrs: r,
      namespaceURI: t,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(e) {
    return {
      nodeName: "#comment",
      data: e,
      parentNode: null
    };
  },
  createTextNode(e) {
    return {
      nodeName: "#text",
      value: e,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(e, t) {
    e.childNodes.push(t), t.parentNode = e;
  },
  insertBefore(e, t, r) {
    const a = e.childNodes.indexOf(r);
    e.childNodes.splice(a, 0, t), t.parentNode = e;
  },
  setTemplateContent(e, t) {
    e.content = t;
  },
  getTemplateContent(e) {
    return e.content;
  },
  setDocumentType(e, t, r, a) {
    const n = e.childNodes.find((s) => s.nodeName === "#documentType");
    if (n)
      n.name = t, n.publicId = r, n.systemId = a;
    else {
      const s = {
        nodeName: "#documentType",
        name: t,
        publicId: r,
        systemId: a,
        parentNode: null
      };
      bt.appendChild(e, s);
    }
  },
  setDocumentMode(e, t) {
    e.mode = t;
  },
  getDocumentMode(e) {
    return e.mode;
  },
  detachNode(e) {
    if (e.parentNode) {
      const t = e.parentNode.childNodes.indexOf(e);
      e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
    }
  },
  insertText(e, t) {
    if (e.childNodes.length > 0) {
      const r = e.childNodes[e.childNodes.length - 1];
      if (bt.isTextNode(r)) {
        r.value += t;
        return;
      }
    }
    bt.appendChild(e, bt.createTextNode(t));
  },
  insertTextBefore(e, t, r) {
    const a = e.childNodes[e.childNodes.indexOf(r) - 1];
    a && bt.isTextNode(a) ? a.value += t : bt.insertBefore(e, bt.createTextNode(t), r);
  },
  adoptAttributes(e, t) {
    const r = new Set(e.attrs.map((a) => a.name));
    for (let a = 0; a < t.length; a++)
      r.has(t[a].name) || e.attrs.push(t[a]);
  },
  //Tree traversing
  getFirstChild(e) {
    return e.childNodes[0];
  },
  getChildNodes(e) {
    return e.childNodes;
  },
  getParentNode(e) {
    return e.parentNode;
  },
  getAttrList(e) {
    return e.attrs;
  },
  //Node data
  getTagName(e) {
    return e.tagName;
  },
  getNamespaceURI(e) {
    return e.namespaceURI;
  },
  getTextNodeContent(e) {
    return e.value;
  },
  getCommentNodeContent(e) {
    return e.data;
  },
  getDocumentTypeNodeName(e) {
    return e.name;
  },
  getDocumentTypeNodePublicId(e) {
    return e.publicId;
  },
  getDocumentTypeNodeSystemId(e) {
    return e.systemId;
  },
  //Node types
  isTextNode(e) {
    return e.nodeName === "#text";
  },
  isCommentNode(e) {
    return e.nodeName === "#comment";
  },
  isDocumentTypeNode(e) {
    return e.nodeName === "#documentType";
  },
  isElementNode(e) {
    return Object.prototype.hasOwnProperty.call(e, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = t;
  },
  getNodeSourceCodeLocation(e) {
    return e.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
  }
}, Ao = "html", g1 = "about:legacy-compat", A1 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Co = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], C1 = [
  ...Co,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], _1 = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), _o = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], S1 = [
  ..._o,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function Ji(e, t) {
  return t.some((r) => e.startsWith(r));
}
function y1(e) {
  return e.name === Ao && e.publicId === null && (e.systemId === null || e.systemId === g1);
}
function N1(e) {
  if (e.name !== Ao)
    return Ze.QUIRKS;
  const { systemId: t } = e;
  if (t && t.toLowerCase() === A1)
    return Ze.QUIRKS;
  let { publicId: r } = e;
  if (r !== null) {
    if (r = r.toLowerCase(), _1.has(r))
      return Ze.QUIRKS;
    let a = t === null ? C1 : Co;
    if (Ji(r, a))
      return Ze.QUIRKS;
    if (a = t === null ? _o : S1, Ji(r, a))
      return Ze.LIMITED_QUIRKS;
  }
  return Ze.NO_QUIRKS;
}
const eu = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, I1 = "definitionurl", v1 = "definitionURL", D1 = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((e) => [e.toLowerCase(), e])), O1 = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: j.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: j.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: j.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: j.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: j.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: j.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: j.XLINK }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: j.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: j.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: j.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: j.XMLNS }]
]), R1 = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((e) => [e.toLowerCase(), e])), w1 = /* @__PURE__ */ new Set([
  u.B,
  u.BIG,
  u.BLOCKQUOTE,
  u.BODY,
  u.BR,
  u.CENTER,
  u.CODE,
  u.DD,
  u.DIV,
  u.DL,
  u.DT,
  u.EM,
  u.EMBED,
  u.H1,
  u.H2,
  u.H3,
  u.H4,
  u.H5,
  u.H6,
  u.HEAD,
  u.HR,
  u.I,
  u.IMG,
  u.LI,
  u.LISTING,
  u.MENU,
  u.META,
  u.NOBR,
  u.OL,
  u.P,
  u.PRE,
  u.RUBY,
  u.S,
  u.SMALL,
  u.SPAN,
  u.STRONG,
  u.STRIKE,
  u.SUB,
  u.SUP,
  u.TABLE,
  u.TT,
  u.U,
  u.UL,
  u.VAR
]);
function L1(e) {
  const t = e.tagID;
  return t === u.FONT && e.attrs.some(({ name: a }) => a === Ft.COLOR || a === Ft.SIZE || a === Ft.FACE) || w1.has(t);
}
function So(e) {
  for (let t = 0; t < e.attrs.length; t++)
    if (e.attrs[t].name === I1) {
      e.attrs[t].name = v1;
      break;
    }
}
function yo(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const r = D1.get(e.attrs[t].name);
    r != null && (e.attrs[t].name = r);
  }
}
function Is(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const r = O1.get(e.attrs[t].name);
    r && (e.attrs[t].prefix = r.prefix, e.attrs[t].name = r.name, e.attrs[t].namespace = r.namespace);
  }
}
function B1(e) {
  const t = R1.get(e.tagName);
  t != null && (e.tagName = t, e.tagID = Ra(e.tagName));
}
function P1(e, t) {
  return t === j.MATHML && (e === u.MI || e === u.MO || e === u.MN || e === u.MS || e === u.MTEXT);
}
function F1(e, t, r) {
  if (t === j.MATHML && e === u.ANNOTATION_XML) {
    for (let a = 0; a < r.length; a++)
      if (r[a].name === Ft.ENCODING) {
        const n = r[a].value.toLowerCase();
        return n === eu.TEXT_HTML || n === eu.APPLICATION_XML;
      }
  }
  return t === j.SVG && (e === u.FOREIGN_OBJECT || e === u.DESC || e === u.TITLE);
}
function k1(e, t, r, a) {
  return (!a || a === j.HTML) && F1(e, t, r) || (!a || a === j.MATHML) && P1(e, t);
}
const M1 = "hidden", U1 = 8, H1 = 3;
var R;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(R || (R = {}));
const X1 = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, No = /* @__PURE__ */ new Set([u.TABLE, u.TBODY, u.TFOOT, u.THEAD, u.TR]), tu = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: bt,
  onParseError: null
};
let Io = class {
  constructor(t, r, a = null, n = null) {
    this.fragmentContext = a, this.scriptHandler = n, this.currentToken = null, this.stopped = !1, this.insertionMode = R.INITIAL, this.originalInsertionMode = R.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
      ...tu,
      ...t
    }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = r ?? this.treeAdapter.createDocument(), this.tokenizer = new l1(this.options, this), this.activeFormattingElements = new x1(this.treeAdapter), this.fragmentContextID = a ? Ra(this.treeAdapter.getTagName(a)) : u.UNKNOWN, this._setContextModes(a ?? this.document, this.fragmentContextID), this.openElements = new T1(this.document, this.treeAdapter, this);
  }
  // API
  static parse(t, r) {
    const a = new this(r);
    return a.tokenizer.write(t, !0), a.document;
  }
  static getFragmentParser(t, r) {
    const a = {
      ...tu,
      ...r
    };
    t ?? (t = a.treeAdapter.createElement(k.TEMPLATE, j.HTML, []));
    const n = a.treeAdapter.createElement("documentmock", j.HTML, []), s = new this(a, n, t);
    return s.fragmentContextID === u.TEMPLATE && s.tmplInsertionModeStack.unshift(R.IN_TEMPLATE), s._initTokenizerForFragmentParsing(), s._insertFakeRootElement(), s._resetInsertionMode(), s._findFormInFragmentContext(), s;
  }
  getFragment() {
    const t = this.treeAdapter.getFirstChild(this.document), r = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(t, r), r;
  }
  //Errors
  /** @internal */
  _err(t, r, a) {
    var n;
    if (!this.onParseError)
      return;
    const s = (n = t.location) !== null && n !== void 0 ? n : X1, i = {
      code: r,
      startLine: s.startLine,
      startCol: s.startCol,
      startOffset: s.startOffset,
      endLine: a ? s.startLine : s.endLine,
      endCol: a ? s.startCol : s.endCol,
      endOffset: a ? s.startOffset : s.endOffset
    };
    this.onParseError(i);
  }
  //Stack events
  /** @internal */
  onItemPush(t, r, a) {
    var n, s;
    (s = (n = this.treeAdapter).onItemPush) === null || s === void 0 || s.call(n, t), a && this.openElements.stackTop > 0 && this._setContextModes(t, r);
  }
  /** @internal */
  onItemPop(t, r) {
    var a, n;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (n = (a = this.treeAdapter).onItemPop) === null || n === void 0 || n.call(a, t, this.openElements.current), r) {
      let s, i;
      this.openElements.stackTop === 0 && this.fragmentContext ? (s = this.fragmentContext, i = this.fragmentContextID) : { current: s, currentTagId: i } = this.openElements, this._setContextModes(s, i);
    }
  }
  _setContextModes(t, r) {
    const a = t === this.document || this.treeAdapter.getNamespaceURI(t) === j.HTML;
    this.currentNotInHTML = !a, this.tokenizer.inForeignNode = !a && !this._isIntegrationPoint(r, t);
  }
  /** @protected */
  _switchToTextParsing(t, r) {
    this._insertElement(t, j.HTML), this.tokenizer.state = r, this.originalInsertionMode = this.insertionMode, this.insertionMode = R.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = R.TEXT, this.originalInsertionMode = R.IN_BODY, this.tokenizer.state = ze.PLAINTEXT;
  }
  //Fragment parsing
  /** @protected */
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  /** @protected */
  _findFormInFragmentContext() {
    let t = this.fragmentContext;
    for (; t; ) {
      if (this.treeAdapter.getTagName(t) === k.FORM) {
        this.formElement = t;
        break;
      }
      t = this.treeAdapter.getParentNode(t);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== j.HTML))
      switch (this.fragmentContextID) {
        case u.TITLE:
        case u.TEXTAREA: {
          this.tokenizer.state = ze.RCDATA;
          break;
        }
        case u.STYLE:
        case u.XMP:
        case u.IFRAME:
        case u.NOEMBED:
        case u.NOFRAMES:
        case u.NOSCRIPT: {
          this.tokenizer.state = ze.RAWTEXT;
          break;
        }
        case u.SCRIPT: {
          this.tokenizer.state = ze.SCRIPT_DATA;
          break;
        }
        case u.PLAINTEXT: {
          this.tokenizer.state = ze.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  /** @protected */
  _setDocumentType(t) {
    const r = t.name || "", a = t.publicId || "", n = t.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, r, a, n), t.location) {
      const i = this.treeAdapter.getChildNodes(this.document).find((o) => this.treeAdapter.isDocumentTypeNode(o));
      i && this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
    }
  }
  /** @protected */
  _attachElementToTree(t, r) {
    if (this.options.sourceCodeLocationInfo) {
      const a = r && {
        ...r,
        startTag: r
      };
      this.treeAdapter.setNodeSourceCodeLocation(t, a);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(t);
    else {
      const a = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(a, t);
    }
  }
  /**
   * For self-closing tags. Add an element to the tree, but skip adding it
   * to the stack.
   */
  /** @protected */
  _appendElement(t, r) {
    const a = this.treeAdapter.createElement(t.tagName, r, t.attrs);
    this._attachElementToTree(a, t.location);
  }
  /** @protected */
  _insertElement(t, r) {
    const a = this.treeAdapter.createElement(t.tagName, r, t.attrs);
    this._attachElementToTree(a, t.location), this.openElements.push(a, t.tagID);
  }
  /** @protected */
  _insertFakeElement(t, r) {
    const a = this.treeAdapter.createElement(t, j.HTML, []);
    this._attachElementToTree(a, null), this.openElements.push(a, r);
  }
  /** @protected */
  _insertTemplate(t) {
    const r = this.treeAdapter.createElement(t.tagName, j.HTML, t.attrs), a = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(r, a), this._attachElementToTree(r, t.location), this.openElements.push(r, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, null);
  }
  /** @protected */
  _insertFakeRootElement() {
    const t = this.treeAdapter.createElement(k.HTML, j.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, u.HTML);
  }
  /** @protected */
  _appendCommentNode(t, r) {
    const a = this.treeAdapter.createCommentNode(t.data);
    this.treeAdapter.appendChild(r, a), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(a, t.location);
  }
  /** @protected */
  _insertCharacters(t) {
    let r, a;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: r, beforeElement: a } = this._findFosterParentingLocation(), a ? this.treeAdapter.insertTextBefore(r, t.chars, a) : this.treeAdapter.insertText(r, t.chars)) : (r = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(r, t.chars)), !t.location)
      return;
    const n = this.treeAdapter.getChildNodes(r), s = a ? n.lastIndexOf(a) : n.length, i = n[s - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
      const { endLine: d, endCol: c, endOffset: l } = t.location;
      this.treeAdapter.updateNodeSourceCodeLocation(i, { endLine: d, endCol: c, endOffset: l });
    } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, t.location);
  }
  /** @protected */
  _adoptNodes(t, r) {
    for (let a = this.treeAdapter.getFirstChild(t); a; a = this.treeAdapter.getFirstChild(t))
      this.treeAdapter.detachNode(a), this.treeAdapter.appendChild(r, a);
  }
  /** @protected */
  _setEndLocation(t, r) {
    if (this.treeAdapter.getNodeSourceCodeLocation(t) && r.location) {
      const a = r.location, n = this.treeAdapter.getTagName(t), s = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        r.type === ye.END_TAG && n === r.tagName ? {
          endTag: { ...a },
          endLine: a.endLine,
          endCol: a.endCol,
          endOffset: a.endOffset
        } : {
          endLine: a.startLine,
          endCol: a.startCol,
          endOffset: a.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(t, s);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(t) {
    if (!this.currentNotInHTML)
      return !1;
    let r, a;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (r = this.fragmentContext, a = this.fragmentContextID) : { current: r, currentTagId: a } = this.openElements, t.tagID === u.SVG && this.treeAdapter.getTagName(r) === k.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(r) === j.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (t.tagID === u.MGLYPH || t.tagID === u.MALIGNMARK) && !this._isIntegrationPoint(a, r, j.HTML)
    );
  }
  /** @protected */
  _processToken(t) {
    switch (t.type) {
      case ye.CHARACTER: {
        this.onCharacter(t);
        break;
      }
      case ye.NULL_CHARACTER: {
        this.onNullCharacter(t);
        break;
      }
      case ye.COMMENT: {
        this.onComment(t);
        break;
      }
      case ye.DOCTYPE: {
        this.onDoctype(t);
        break;
      }
      case ye.START_TAG: {
        this._processStartTag(t);
        break;
      }
      case ye.END_TAG: {
        this.onEndTag(t);
        break;
      }
      case ye.EOF: {
        this.onEof(t);
        break;
      }
      case ye.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(t);
        break;
      }
    }
  }
  //Integration points
  /** @protected */
  _isIntegrationPoint(t, r, a) {
    const n = this.treeAdapter.getNamespaceURI(r), s = this.treeAdapter.getAttrList(r);
    return k1(t, n, s, a);
  }
  //Active formatting elements reconstruction
  /** @protected */
  _reconstructActiveFormattingElements() {
    const t = this.activeFormattingElements.entries.length;
    if (t) {
      const r = this.activeFormattingElements.entries.findIndex((n) => n.type === ut.Marker || this.openElements.contains(n.element)), a = r < 0 ? t - 1 : r - 1;
      for (let n = a; n >= 0; n--) {
        const s = this.activeFormattingElements.entries[n];
        this._insertElement(s.token, this.treeAdapter.getNamespaceURI(s.element)), s.element = this.openElements.current;
      }
    }
  }
  //Close elements
  /** @protected */
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = R.IN_ROW;
  }
  /** @protected */
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(u.P), this.openElements.popUntilTagNamePopped(u.P);
  }
  //Insertion modes
  /** @protected */
  _resetInsertionMode() {
    for (let t = this.openElements.stackTop; t >= 0; t--)
      switch (t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]) {
        case u.TR: {
          this.insertionMode = R.IN_ROW;
          return;
        }
        case u.TBODY:
        case u.THEAD:
        case u.TFOOT: {
          this.insertionMode = R.IN_TABLE_BODY;
          return;
        }
        case u.CAPTION: {
          this.insertionMode = R.IN_CAPTION;
          return;
        }
        case u.COLGROUP: {
          this.insertionMode = R.IN_COLUMN_GROUP;
          return;
        }
        case u.TABLE: {
          this.insertionMode = R.IN_TABLE;
          return;
        }
        case u.BODY: {
          this.insertionMode = R.IN_BODY;
          return;
        }
        case u.FRAMESET: {
          this.insertionMode = R.IN_FRAMESET;
          return;
        }
        case u.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case u.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case u.HTML: {
          this.insertionMode = this.headElement ? R.AFTER_HEAD : R.BEFORE_HEAD;
          return;
        }
        case u.TD:
        case u.TH: {
          if (t > 0) {
            this.insertionMode = R.IN_CELL;
            return;
          }
          break;
        }
        case u.HEAD: {
          if (t > 0) {
            this.insertionMode = R.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = R.IN_BODY;
  }
  /** @protected */
  _resetInsertionModeForSelect(t) {
    if (t > 0)
      for (let r = t - 1; r > 0; r--) {
        const a = this.openElements.tagIDs[r];
        if (a === u.TEMPLATE)
          break;
        if (a === u.TABLE) {
          this.insertionMode = R.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = R.IN_SELECT;
  }
  //Foster parenting
  /** @protected */
  _isElementCausesFosterParenting(t) {
    return No.has(t);
  }
  /** @protected */
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  /** @protected */
  _findFosterParentingLocation() {
    for (let t = this.openElements.stackTop; t >= 0; t--) {
      const r = this.openElements.items[t];
      switch (this.openElements.tagIDs[t]) {
        case u.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(r) === j.HTML)
            return { parent: this.treeAdapter.getTemplateContent(r), beforeElement: null };
          break;
        }
        case u.TABLE: {
          const a = this.treeAdapter.getParentNode(r);
          return a ? { parent: a, beforeElement: r } : { parent: this.openElements.items[t - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  /** @protected */
  _fosterParentElement(t) {
    const r = this._findFosterParentingLocation();
    r.beforeElement ? this.treeAdapter.insertBefore(r.parent, t, r.beforeElement) : this.treeAdapter.appendChild(r.parent, t);
  }
  //Special elements
  /** @protected */
  _isSpecialElement(t, r) {
    const a = this.treeAdapter.getNamespaceURI(t);
    return s1[a].has(r);
  }
  /** @internal */
  onCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      b2(this, t);
      return;
    }
    switch (this.insertionMode) {
      case R.INITIAL: {
        lr(this, t);
        break;
      }
      case R.BEFORE_HTML: {
        br(this, t);
        break;
      }
      case R.BEFORE_HEAD: {
        Tr(this, t);
        break;
      }
      case R.IN_HEAD: {
        xr(this, t);
        break;
      }
      case R.IN_HEAD_NO_SCRIPT: {
        gr(this, t);
        break;
      }
      case R.AFTER_HEAD: {
        Ar(this, t);
        break;
      }
      case R.IN_BODY:
      case R.IN_CAPTION:
      case R.IN_CELL:
      case R.IN_TEMPLATE: {
        Do(this, t);
        break;
      }
      case R.TEXT:
      case R.IN_SELECT:
      case R.IN_SELECT_IN_TABLE: {
        this._insertCharacters(t);
        break;
      }
      case R.IN_TABLE:
      case R.IN_TABLE_BODY:
      case R.IN_ROW: {
        On(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        Po(this, t);
        break;
      }
      case R.IN_COLUMN_GROUP: {
        ba(this, t);
        break;
      }
      case R.AFTER_BODY: {
        Ta(this, t);
        break;
      }
      case R.AFTER_AFTER_BODY: {
        Zr(this, t);
        break;
      }
    }
  }
  /** @internal */
  onNullCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      E2(this, t);
      return;
    }
    switch (this.insertionMode) {
      case R.INITIAL: {
        lr(this, t);
        break;
      }
      case R.BEFORE_HTML: {
        br(this, t);
        break;
      }
      case R.BEFORE_HEAD: {
        Tr(this, t);
        break;
      }
      case R.IN_HEAD: {
        xr(this, t);
        break;
      }
      case R.IN_HEAD_NO_SCRIPT: {
        gr(this, t);
        break;
      }
      case R.AFTER_HEAD: {
        Ar(this, t);
        break;
      }
      case R.TEXT: {
        this._insertCharacters(t);
        break;
      }
      case R.IN_TABLE:
      case R.IN_TABLE_BODY:
      case R.IN_ROW: {
        On(this, t);
        break;
      }
      case R.IN_COLUMN_GROUP: {
        ba(this, t);
        break;
      }
      case R.AFTER_BODY: {
        Ta(this, t);
        break;
      }
      case R.AFTER_AFTER_BODY: {
        Zr(this, t);
        break;
      }
    }
  }
  /** @internal */
  onComment(t) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      jn(this, t);
      return;
    }
    switch (this.insertionMode) {
      case R.INITIAL:
      case R.BEFORE_HTML:
      case R.BEFORE_HEAD:
      case R.IN_HEAD:
      case R.IN_HEAD_NO_SCRIPT:
      case R.AFTER_HEAD:
      case R.IN_BODY:
      case R.IN_TABLE:
      case R.IN_CAPTION:
      case R.IN_COLUMN_GROUP:
      case R.IN_TABLE_BODY:
      case R.IN_ROW:
      case R.IN_CELL:
      case R.IN_SELECT:
      case R.IN_SELECT_IN_TABLE:
      case R.IN_TEMPLATE:
      case R.IN_FRAMESET:
      case R.AFTER_FRAMESET: {
        jn(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        fr(this, t);
        break;
      }
      case R.AFTER_BODY: {
        j1(this, t);
        break;
      }
      case R.AFTER_AFTER_BODY:
      case R.AFTER_AFTER_FRAMESET: {
        K1(this, t);
        break;
      }
    }
  }
  /** @internal */
  onDoctype(t) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case R.INITIAL: {
        z1(this, t);
        break;
      }
      case R.BEFORE_HEAD:
      case R.IN_HEAD:
      case R.IN_HEAD_NO_SCRIPT:
      case R.AFTER_HEAD: {
        this._err(t, q.misplacedDoctype);
        break;
      }
      case R.IN_TABLE_TEXT: {
        fr(this, t);
        break;
      }
    }
  }
  /** @internal */
  onStartTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, q.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   * @protected
   */
  _processStartTag(t) {
    this.shouldProcessStartTagTokenInForeignContent(t) ? T2(this, t) : this._startTagOutsideForeignContent(t);
  }
  /** @protected */
  _startTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case R.INITIAL: {
        lr(this, t);
        break;
      }
      case R.BEFORE_HTML: {
        Q1(this, t);
        break;
      }
      case R.BEFORE_HEAD: {
        J1(this, t);
        break;
      }
      case R.IN_HEAD: {
        nt(this, t);
        break;
      }
      case R.IN_HEAD_NO_SCRIPT: {
        rm(this, t);
        break;
      }
      case R.AFTER_HEAD: {
        nm(this, t);
        break;
      }
      case R.IN_BODY: {
        $e(this, t);
        break;
      }
      case R.IN_TABLE: {
        er(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        fr(this, t);
        break;
      }
      case R.IN_CAPTION: {
        e2(this, t);
        break;
      }
      case R.IN_COLUMN_GROUP: {
        Os(this, t);
        break;
      }
      case R.IN_TABLE_BODY: {
        Ba(this, t);
        break;
      }
      case R.IN_ROW: {
        Pa(this, t);
        break;
      }
      case R.IN_CELL: {
        a2(this, t);
        break;
      }
      case R.IN_SELECT: {
        Mo(this, t);
        break;
      }
      case R.IN_SELECT_IN_TABLE: {
        s2(this, t);
        break;
      }
      case R.IN_TEMPLATE: {
        u2(this, t);
        break;
      }
      case R.AFTER_BODY: {
        c2(this, t);
        break;
      }
      case R.IN_FRAMESET: {
        d2(this, t);
        break;
      }
      case R.AFTER_FRAMESET: {
        f2(this, t);
        break;
      }
      case R.AFTER_AFTER_BODY: {
        m2(this, t);
        break;
      }
      case R.AFTER_AFTER_FRAMESET: {
        p2(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEndTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this.currentNotInHTML ? x2(this, t) : this._endTagOutsideForeignContent(t);
  }
  /** @protected */
  _endTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case R.INITIAL: {
        lr(this, t);
        break;
      }
      case R.BEFORE_HTML: {
        Z1(this, t);
        break;
      }
      case R.BEFORE_HEAD: {
        em(this, t);
        break;
      }
      case R.IN_HEAD: {
        tm(this, t);
        break;
      }
      case R.IN_HEAD_NO_SCRIPT: {
        am(this, t);
        break;
      }
      case R.AFTER_HEAD: {
        sm(this, t);
        break;
      }
      case R.IN_BODY: {
        La(this, t);
        break;
      }
      case R.TEXT: {
        $m(this, t);
        break;
      }
      case R.IN_TABLE: {
        Dr(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        fr(this, t);
        break;
      }
      case R.IN_CAPTION: {
        t2(this, t);
        break;
      }
      case R.IN_COLUMN_GROUP: {
        r2(this, t);
        break;
      }
      case R.IN_TABLE_BODY: {
        Kn(this, t);
        break;
      }
      case R.IN_ROW: {
        ko(this, t);
        break;
      }
      case R.IN_CELL: {
        n2(this, t);
        break;
      }
      case R.IN_SELECT: {
        Uo(this, t);
        break;
      }
      case R.IN_SELECT_IN_TABLE: {
        i2(this, t);
        break;
      }
      case R.IN_TEMPLATE: {
        o2(this, t);
        break;
      }
      case R.AFTER_BODY: {
        Xo(this, t);
        break;
      }
      case R.IN_FRAMESET: {
        l2(this, t);
        break;
      }
      case R.AFTER_FRAMESET: {
        h2(this, t);
        break;
      }
      case R.AFTER_AFTER_BODY: {
        Zr(this, t);
        break;
      }
    }
  }
  /** @internal */
  onEof(t) {
    switch (this.insertionMode) {
      case R.INITIAL: {
        lr(this, t);
        break;
      }
      case R.BEFORE_HTML: {
        br(this, t);
        break;
      }
      case R.BEFORE_HEAD: {
        Tr(this, t);
        break;
      }
      case R.IN_HEAD: {
        xr(this, t);
        break;
      }
      case R.IN_HEAD_NO_SCRIPT: {
        gr(this, t);
        break;
      }
      case R.AFTER_HEAD: {
        Ar(this, t);
        break;
      }
      case R.IN_BODY:
      case R.IN_TABLE:
      case R.IN_CAPTION:
      case R.IN_COLUMN_GROUP:
      case R.IN_TABLE_BODY:
      case R.IN_ROW:
      case R.IN_CELL:
      case R.IN_SELECT:
      case R.IN_SELECT_IN_TABLE: {
        Lo(this, t);
        break;
      }
      case R.TEXT: {
        Vm(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        fr(this, t);
        break;
      }
      case R.IN_TEMPLATE: {
        Ho(this, t);
        break;
      }
      case R.AFTER_BODY:
      case R.IN_FRAMESET:
      case R.AFTER_FRAMESET:
      case R.AFTER_AFTER_BODY:
      case R.AFTER_AFTER_FRAMESET: {
        Ds(this, t);
        break;
      }
    }
  }
  /** @internal */
  onWhitespaceCharacter(t) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.chars.charCodeAt(0) === y.LINE_FEED)) {
      if (t.chars.length === 1)
        return;
      t.chars = t.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(t);
      return;
    }
    switch (this.insertionMode) {
      case R.IN_HEAD:
      case R.IN_HEAD_NO_SCRIPT:
      case R.AFTER_HEAD:
      case R.TEXT:
      case R.IN_COLUMN_GROUP:
      case R.IN_SELECT:
      case R.IN_SELECT_IN_TABLE:
      case R.IN_FRAMESET:
      case R.AFTER_FRAMESET: {
        this._insertCharacters(t);
        break;
      }
      case R.IN_BODY:
      case R.IN_CAPTION:
      case R.IN_CELL:
      case R.IN_TEMPLATE:
      case R.AFTER_BODY:
      case R.AFTER_AFTER_BODY:
      case R.AFTER_AFTER_FRAMESET: {
        vo(this, t);
        break;
      }
      case R.IN_TABLE:
      case R.IN_TABLE_BODY:
      case R.IN_ROW: {
        On(this, t);
        break;
      }
      case R.IN_TABLE_TEXT: {
        Bo(this, t);
        break;
      }
    }
  }
};
function q1(e, t) {
  let r = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
  return r ? e.openElements.contains(r.element) ? e.openElements.hasInScope(t.tagID) || (r = null) : (e.activeFormattingElements.removeEntry(r), r = null) : wo(e, t), r;
}
function Y1(e, t) {
  let r = null, a = e.openElements.stackTop;
  for (; a >= 0; a--) {
    const n = e.openElements.items[a];
    if (n === t.element)
      break;
    e._isSpecialElement(n, e.openElements.tagIDs[a]) && (r = n);
  }
  return r || (e.openElements.shortenToLength(a < 0 ? 0 : a), e.activeFormattingElements.removeEntry(t)), r;
}
function $1(e, t, r) {
  let a = t, n = e.openElements.getCommonAncestor(t);
  for (let s = 0, i = n; i !== r; s++, i = n) {
    n = e.openElements.getCommonAncestor(i);
    const o = e.activeFormattingElements.getElementEntry(i), d = o && s >= H1;
    !o || d ? (d && e.activeFormattingElements.removeEntry(o), e.openElements.remove(i)) : (i = V1(e, o), a === t && (e.activeFormattingElements.bookmark = o), e.treeAdapter.detachNode(a), e.treeAdapter.appendChild(i, a), a = i);
  }
  return a;
}
function V1(e, t) {
  const r = e.treeAdapter.getNamespaceURI(t.element), a = e.treeAdapter.createElement(t.token.tagName, r, t.token.attrs);
  return e.openElements.replace(t.element, a), t.element = a, a;
}
function W1(e, t, r) {
  const a = e.treeAdapter.getTagName(t), n = Ra(a);
  if (e._isElementCausesFosterParenting(n))
    e._fosterParentElement(r);
  else {
    const s = e.treeAdapter.getNamespaceURI(t);
    n === u.TEMPLATE && s === j.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, r);
  }
}
function G1(e, t, r) {
  const a = e.treeAdapter.getNamespaceURI(r.element), { token: n } = r, s = e.treeAdapter.createElement(n.tagName, a, n.attrs);
  e._adoptNodes(t, s), e.treeAdapter.appendChild(t, s), e.activeFormattingElements.insertElementAfterBookmark(s, n), e.activeFormattingElements.removeEntry(r), e.openElements.remove(r.element), e.openElements.insertAfter(t, s, n.tagID);
}
function vs(e, t) {
  for (let r = 0; r < U1; r++) {
    const a = q1(e, t);
    if (!a)
      break;
    const n = Y1(e, a);
    if (!n)
      break;
    e.activeFormattingElements.bookmark = a;
    const s = $1(e, n, a.element), i = e.openElements.getCommonAncestor(a.element);
    e.treeAdapter.detachNode(s), i && W1(e, i, s), G1(e, n, a);
  }
}
function jn(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function j1(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function K1(e, t) {
  e._appendCommentNode(t, e.document);
}
function Ds(e, t) {
  if (e.stopped = !0, t.location) {
    const r = e.fragmentContext ? 0 : 2;
    for (let a = e.openElements.stackTop; a >= r; a--)
      e._setEndLocation(e.openElements.items[a], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const a = e.openElements.items[0], n = e.treeAdapter.getNodeSourceCodeLocation(a);
      if (n && !n.endTag && (e._setEndLocation(a, t), e.openElements.stackTop >= 1)) {
        const s = e.openElements.items[1], i = e.treeAdapter.getNodeSourceCodeLocation(s);
        i && !i.endTag && e._setEndLocation(s, t);
      }
    }
  }
}
function z1(e, t) {
  e._setDocumentType(t);
  const r = t.forceQuirks ? Ze.QUIRKS : N1(t);
  y1(t) || e._err(t, q.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, r), e.insertionMode = R.BEFORE_HTML;
}
function lr(e, t) {
  e._err(t, q.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Ze.QUIRKS), e.insertionMode = R.BEFORE_HTML, e._processToken(t);
}
function Q1(e, t) {
  t.tagID === u.HTML ? (e._insertElement(t, j.HTML), e.insertionMode = R.BEFORE_HEAD) : br(e, t);
}
function Z1(e, t) {
  const r = t.tagID;
  (r === u.HTML || r === u.HEAD || r === u.BODY || r === u.BR) && br(e, t);
}
function br(e, t) {
  e._insertFakeRootElement(), e.insertionMode = R.BEFORE_HEAD, e._processToken(t);
}
function J1(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.HEAD: {
      e._insertElement(t, j.HTML), e.headElement = e.openElements.current, e.insertionMode = R.IN_HEAD;
      break;
    }
    default:
      Tr(e, t);
  }
}
function em(e, t) {
  const r = t.tagID;
  r === u.HEAD || r === u.BODY || r === u.HTML || r === u.BR ? Tr(e, t) : e._err(t, q.endTagWithoutMatchingOpenElement);
}
function Tr(e, t) {
  e._insertFakeElement(k.HEAD, u.HEAD), e.headElement = e.openElements.current, e.insertionMode = R.IN_HEAD, e._processToken(t);
}
function nt(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META: {
      e._appendElement(t, j.HTML), t.ackSelfClosing = !0;
      break;
    }
    case u.TITLE: {
      e._switchToTextParsing(t, ze.RCDATA);
      break;
    }
    case u.NOSCRIPT: {
      e.options.scriptingEnabled ? e._switchToTextParsing(t, ze.RAWTEXT) : (e._insertElement(t, j.HTML), e.insertionMode = R.IN_HEAD_NO_SCRIPT);
      break;
    }
    case u.NOFRAMES:
    case u.STYLE: {
      e._switchToTextParsing(t, ze.RAWTEXT);
      break;
    }
    case u.SCRIPT: {
      e._switchToTextParsing(t, ze.SCRIPT_DATA);
      break;
    }
    case u.TEMPLATE: {
      e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = R.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(R.IN_TEMPLATE);
      break;
    }
    case u.HEAD: {
      e._err(t, q.misplacedStartTagForHeadElement);
      break;
    }
    default:
      xr(e, t);
  }
}
function tm(e, t) {
  switch (t.tagID) {
    case u.HEAD: {
      e.openElements.pop(), e.insertionMode = R.AFTER_HEAD;
      break;
    }
    case u.BODY:
    case u.BR:
    case u.HTML: {
      xr(e, t);
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
    default:
      e._err(t, q.endTagWithoutMatchingOpenElement);
  }
}
function $t(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== u.TEMPLATE && e._err(t, q.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(u.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, q.endTagWithoutMatchingOpenElement);
}
function xr(e, t) {
  e.openElements.pop(), e.insertionMode = R.AFTER_HEAD, e._processToken(t);
}
function rm(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.BASEFONT:
    case u.BGSOUND:
    case u.HEAD:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.STYLE: {
      nt(e, t);
      break;
    }
    case u.NOSCRIPT: {
      e._err(t, q.nestedNoscriptInHead);
      break;
    }
    default:
      gr(e, t);
  }
}
function am(e, t) {
  switch (t.tagID) {
    case u.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = R.IN_HEAD;
      break;
    }
    case u.BR: {
      gr(e, t);
      break;
    }
    default:
      e._err(t, q.endTagWithoutMatchingOpenElement);
  }
}
function gr(e, t) {
  const r = t.type === ye.EOF ? q.openElementsLeftAfterEof : q.disallowedContentInNoscriptInHead;
  e._err(t, r), e.openElements.pop(), e.insertionMode = R.IN_HEAD, e._processToken(t);
}
function nm(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.BODY: {
      e._insertElement(t, j.HTML), e.framesetOk = !1, e.insertionMode = R.IN_BODY;
      break;
    }
    case u.FRAMESET: {
      e._insertElement(t, j.HTML), e.insertionMode = R.IN_FRAMESET;
      break;
    }
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.SCRIPT:
    case u.STYLE:
    case u.TEMPLATE:
    case u.TITLE: {
      e._err(t, q.abandonedHeadElementChild), e.openElements.push(e.headElement, u.HEAD), nt(e, t), e.openElements.remove(e.headElement);
      break;
    }
    case u.HEAD: {
      e._err(t, q.misplacedStartTagForHeadElement);
      break;
    }
    default:
      Ar(e, t);
  }
}
function sm(e, t) {
  switch (t.tagID) {
    case u.BODY:
    case u.HTML:
    case u.BR: {
      Ar(e, t);
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
    default:
      e._err(t, q.endTagWithoutMatchingOpenElement);
  }
}
function Ar(e, t) {
  e._insertFakeElement(k.BODY, u.BODY), e.insertionMode = R.IN_BODY, wa(e, t);
}
function wa(e, t) {
  switch (t.type) {
    case ye.CHARACTER: {
      Do(e, t);
      break;
    }
    case ye.WHITESPACE_CHARACTER: {
      vo(e, t);
      break;
    }
    case ye.COMMENT: {
      jn(e, t);
      break;
    }
    case ye.START_TAG: {
      $e(e, t);
      break;
    }
    case ye.END_TAG: {
      La(e, t);
      break;
    }
    case ye.EOF: {
      Lo(e, t);
      break;
    }
  }
}
function vo(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Do(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function im(e, t) {
  e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function um(e, t) {
  const r = e.openElements.tryPeekProperlyNestedBodyElement();
  r && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(r, t.attrs));
}
function om(e, t) {
  const r = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk && r && (e.treeAdapter.detachNode(r), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_FRAMESET);
}
function cm(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML);
}
function dm(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), Gn.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, j.HTML);
}
function lm(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function fm(e, t) {
  const r = e.openElements.tmplCount > 0;
  (!e.formElement || r) && (e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML), r || (e.formElement = e.openElements.current));
}
function hm(e, t) {
  e.framesetOk = !1;
  const r = t.tagID;
  for (let a = e.openElements.stackTop; a >= 0; a--) {
    const n = e.openElements.tagIDs[a];
    if (r === u.LI && n === u.LI || (r === u.DD || r === u.DT) && (n === u.DD || n === u.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n);
      break;
    }
    if (n !== u.ADDRESS && n !== u.DIV && n !== u.P && e._isSpecialElement(e.openElements.items[a], n))
      break;
  }
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML);
}
function mm(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML), e.tokenizer.state = ze.PLAINTEXT;
}
function pm(e, t) {
  e.openElements.hasInScope(u.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML), e.framesetOk = !1;
}
function Em(e, t) {
  const r = e.activeFormattingElements.getElementEntryInScopeWithTagName(k.A);
  r && (vs(e, t), e.openElements.remove(r.element), e.activeFormattingElements.removeEntry(r)), e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function bm(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Tm(e, t) {
  e._reconstructActiveFormattingElements(), e.openElements.hasInScope(u.NOBR) && (vs(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, j.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function xm(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function gm(e, t) {
  e.treeAdapter.getDocumentMode(e.document) !== Ze.QUIRKS && e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._insertElement(t, j.HTML), e.framesetOk = !1, e.insertionMode = R.IN_TABLE;
}
function Oo(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, j.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Ro(e) {
  const t = To(e, Ft.TYPE);
  return t != null && t.toLowerCase() === M1;
}
function Am(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, j.HTML), Ro(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Cm(e, t) {
  e._appendElement(t, j.HTML), t.ackSelfClosing = !0;
}
function _m(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._appendElement(t, j.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Sm(e, t) {
  t.tagName = k.IMG, t.tagID = u.IMG, Oo(e, t);
}
function ym(e, t) {
  e._insertElement(t, j.HTML), e.skipNextNewLine = !0, e.tokenizer.state = ze.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = R.TEXT;
}
function Nm(e, t) {
  e.openElements.hasInButtonScope(u.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, ze.RAWTEXT);
}
function Im(e, t) {
  e.framesetOk = !1, e._switchToTextParsing(t, ze.RAWTEXT);
}
function ru(e, t) {
  e._switchToTextParsing(t, ze.RAWTEXT);
}
function vm(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === R.IN_TABLE || e.insertionMode === R.IN_CAPTION || e.insertionMode === R.IN_TABLE_BODY || e.insertionMode === R.IN_ROW || e.insertionMode === R.IN_CELL ? R.IN_SELECT_IN_TABLE : R.IN_SELECT;
}
function Dm(e, t) {
  e.openElements.currentTagId === u.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML);
}
function Om(e, t) {
  e.openElements.hasInScope(u.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, j.HTML);
}
function Rm(e, t) {
  e.openElements.hasInScope(u.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(u.RTC), e._insertElement(t, j.HTML);
}
function wm(e, t) {
  e._reconstructActiveFormattingElements(), So(t), Is(t), t.selfClosing ? e._appendElement(t, j.MATHML) : e._insertElement(t, j.MATHML), t.ackSelfClosing = !0;
}
function Lm(e, t) {
  e._reconstructActiveFormattingElements(), yo(t), Is(t), t.selfClosing ? e._appendElement(t, j.SVG) : e._insertElement(t, j.SVG), t.ackSelfClosing = !0;
}
function au(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, j.HTML);
}
function $e(e, t) {
  switch (t.tagID) {
    case u.I:
    case u.S:
    case u.B:
    case u.U:
    case u.EM:
    case u.TT:
    case u.BIG:
    case u.CODE:
    case u.FONT:
    case u.SMALL:
    case u.STRIKE:
    case u.STRONG: {
      bm(e, t);
      break;
    }
    case u.A: {
      Em(e, t);
      break;
    }
    case u.H1:
    case u.H2:
    case u.H3:
    case u.H4:
    case u.H5:
    case u.H6: {
      dm(e, t);
      break;
    }
    case u.P:
    case u.DL:
    case u.OL:
    case u.UL:
    case u.DIV:
    case u.DIR:
    case u.NAV:
    case u.MAIN:
    case u.MENU:
    case u.ASIDE:
    case u.CENTER:
    case u.FIGURE:
    case u.FOOTER:
    case u.HEADER:
    case u.HGROUP:
    case u.DIALOG:
    case u.DETAILS:
    case u.ADDRESS:
    case u.ARTICLE:
    case u.SEARCH:
    case u.SECTION:
    case u.SUMMARY:
    case u.FIELDSET:
    case u.BLOCKQUOTE:
    case u.FIGCAPTION: {
      cm(e, t);
      break;
    }
    case u.LI:
    case u.DD:
    case u.DT: {
      hm(e, t);
      break;
    }
    case u.BR:
    case u.IMG:
    case u.WBR:
    case u.AREA:
    case u.EMBED:
    case u.KEYGEN: {
      Oo(e, t);
      break;
    }
    case u.HR: {
      _m(e, t);
      break;
    }
    case u.RB:
    case u.RTC: {
      Om(e, t);
      break;
    }
    case u.RT:
    case u.RP: {
      Rm(e, t);
      break;
    }
    case u.PRE:
    case u.LISTING: {
      lm(e, t);
      break;
    }
    case u.XMP: {
      Nm(e, t);
      break;
    }
    case u.SVG: {
      Lm(e, t);
      break;
    }
    case u.HTML: {
      im(e, t);
      break;
    }
    case u.BASE:
    case u.LINK:
    case u.META:
    case u.STYLE:
    case u.TITLE:
    case u.SCRIPT:
    case u.BGSOUND:
    case u.BASEFONT:
    case u.TEMPLATE: {
      nt(e, t);
      break;
    }
    case u.BODY: {
      um(e, t);
      break;
    }
    case u.FORM: {
      fm(e, t);
      break;
    }
    case u.NOBR: {
      Tm(e, t);
      break;
    }
    case u.MATH: {
      wm(e, t);
      break;
    }
    case u.TABLE: {
      gm(e, t);
      break;
    }
    case u.INPUT: {
      Am(e, t);
      break;
    }
    case u.PARAM:
    case u.TRACK:
    case u.SOURCE: {
      Cm(e, t);
      break;
    }
    case u.IMAGE: {
      Sm(e, t);
      break;
    }
    case u.BUTTON: {
      pm(e, t);
      break;
    }
    case u.APPLET:
    case u.OBJECT:
    case u.MARQUEE: {
      xm(e, t);
      break;
    }
    case u.IFRAME: {
      Im(e, t);
      break;
    }
    case u.SELECT: {
      vm(e, t);
      break;
    }
    case u.OPTION:
    case u.OPTGROUP: {
      Dm(e, t);
      break;
    }
    case u.NOEMBED:
    case u.NOFRAMES: {
      ru(e, t);
      break;
    }
    case u.FRAMESET: {
      om(e, t);
      break;
    }
    case u.TEXTAREA: {
      ym(e, t);
      break;
    }
    case u.NOSCRIPT: {
      e.options.scriptingEnabled ? ru(e, t) : au(e, t);
      break;
    }
    case u.PLAINTEXT: {
      mm(e, t);
      break;
    }
    case u.COL:
    case u.TH:
    case u.TD:
    case u.TR:
    case u.HEAD:
    case u.FRAME:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.CAPTION:
    case u.COLGROUP:
      break;
    default:
      au(e, t);
  }
}
function Bm(e, t) {
  if (e.openElements.hasInScope(u.BODY) && (e.insertionMode = R.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
    const r = e.openElements.tryPeekProperlyNestedBodyElement();
    r && e._setEndLocation(r, t);
  }
}
function Pm(e, t) {
  e.openElements.hasInScope(u.BODY) && (e.insertionMode = R.AFTER_BODY, Xo(e, t));
}
function Fm(e, t) {
  const r = t.tagID;
  e.openElements.hasInScope(r) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(r));
}
function km(e) {
  const t = e.openElements.tmplCount > 0, { formElement: r } = e;
  t || (e.formElement = null), (r || t) && e.openElements.hasInScope(u.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(u.FORM) : r && e.openElements.remove(r));
}
function Mm(e) {
  e.openElements.hasInButtonScope(u.P) || e._insertFakeElement(k.P, u.P), e._closePElement();
}
function Um(e) {
  e.openElements.hasInListItemScope(u.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(u.LI), e.openElements.popUntilTagNamePopped(u.LI));
}
function Hm(e, t) {
  const r = t.tagID;
  e.openElements.hasInScope(r) && (e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r));
}
function Xm(e) {
  e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function qm(e, t) {
  const r = t.tagID;
  e.openElements.hasInScope(r) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(r), e.activeFormattingElements.clearToLastMarker());
}
function Ym(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(k.BR, u.BR), e.openElements.pop(), e.framesetOk = !1;
}
function wo(e, t) {
  const r = t.tagName, a = t.tagID;
  for (let n = e.openElements.stackTop; n > 0; n--) {
    const s = e.openElements.items[n], i = e.openElements.tagIDs[n];
    if (a === i && (a !== u.UNKNOWN || e.treeAdapter.getTagName(s) === r)) {
      e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.stackTop >= n && e.openElements.shortenToLength(n);
      break;
    }
    if (e._isSpecialElement(s, i))
      break;
  }
}
function La(e, t) {
  switch (t.tagID) {
    case u.A:
    case u.B:
    case u.I:
    case u.S:
    case u.U:
    case u.EM:
    case u.TT:
    case u.BIG:
    case u.CODE:
    case u.FONT:
    case u.NOBR:
    case u.SMALL:
    case u.STRIKE:
    case u.STRONG: {
      vs(e, t);
      break;
    }
    case u.P: {
      Mm(e);
      break;
    }
    case u.DL:
    case u.UL:
    case u.OL:
    case u.DIR:
    case u.DIV:
    case u.NAV:
    case u.PRE:
    case u.MAIN:
    case u.MENU:
    case u.ASIDE:
    case u.BUTTON:
    case u.CENTER:
    case u.FIGURE:
    case u.FOOTER:
    case u.HEADER:
    case u.HGROUP:
    case u.DIALOG:
    case u.ADDRESS:
    case u.ARTICLE:
    case u.DETAILS:
    case u.SEARCH:
    case u.SECTION:
    case u.SUMMARY:
    case u.LISTING:
    case u.FIELDSET:
    case u.BLOCKQUOTE:
    case u.FIGCAPTION: {
      Fm(e, t);
      break;
    }
    case u.LI: {
      Um(e);
      break;
    }
    case u.DD:
    case u.DT: {
      Hm(e, t);
      break;
    }
    case u.H1:
    case u.H2:
    case u.H3:
    case u.H4:
    case u.H5:
    case u.H6: {
      Xm(e);
      break;
    }
    case u.BR: {
      Ym(e);
      break;
    }
    case u.BODY: {
      Bm(e, t);
      break;
    }
    case u.HTML: {
      Pm(e, t);
      break;
    }
    case u.FORM: {
      km(e);
      break;
    }
    case u.APPLET:
    case u.OBJECT:
    case u.MARQUEE: {
      qm(e, t);
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
    default:
      wo(e, t);
  }
}
function Lo(e, t) {
  e.tmplInsertionModeStack.length > 0 ? Ho(e, t) : Ds(e, t);
}
function $m(e, t) {
  var r;
  t.tagID === u.SCRIPT && ((r = e.scriptHandler) === null || r === void 0 || r.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function Vm(e, t) {
  e._err(t, q.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function On(e, t) {
  if (No.has(e.openElements.currentTagId))
    switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = R.IN_TABLE_TEXT, t.type) {
      case ye.CHARACTER: {
        Po(e, t);
        break;
      }
      case ye.WHITESPACE_CHARACTER: {
        Bo(e, t);
        break;
      }
    }
  else
    Fr(e, t);
}
function Wm(e, t) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_CAPTION;
}
function Gm(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_COLUMN_GROUP;
}
function jm(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(k.COLGROUP, u.COLGROUP), e.insertionMode = R.IN_COLUMN_GROUP, Os(e, t);
}
function Km(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_TABLE_BODY;
}
function zm(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(k.TBODY, u.TBODY), e.insertionMode = R.IN_TABLE_BODY, Ba(e, t);
}
function Qm(e, t) {
  e.openElements.hasInTableScope(u.TABLE) && (e.openElements.popUntilTagNamePopped(u.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function Zm(e, t) {
  Ro(t) ? e._appendElement(t, j.HTML) : Fr(e, t), t.ackSelfClosing = !0;
}
function Jm(e, t) {
  !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, j.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function er(e, t) {
  switch (t.tagID) {
    case u.TD:
    case u.TH:
    case u.TR: {
      zm(e, t);
      break;
    }
    case u.STYLE:
    case u.SCRIPT:
    case u.TEMPLATE: {
      nt(e, t);
      break;
    }
    case u.COL: {
      jm(e, t);
      break;
    }
    case u.FORM: {
      Jm(e, t);
      break;
    }
    case u.TABLE: {
      Qm(e, t);
      break;
    }
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      Km(e, t);
      break;
    }
    case u.INPUT: {
      Zm(e, t);
      break;
    }
    case u.CAPTION: {
      Wm(e, t);
      break;
    }
    case u.COLGROUP: {
      Gm(e, t);
      break;
    }
    default:
      Fr(e, t);
  }
}
function Dr(e, t) {
  switch (t.tagID) {
    case u.TABLE: {
      e.openElements.hasInTableScope(u.TABLE) && (e.openElements.popUntilTagNamePopped(u.TABLE), e._resetInsertionMode());
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TBODY:
    case u.TD:
    case u.TFOOT:
    case u.TH:
    case u.THEAD:
    case u.TR:
      break;
    default:
      Fr(e, t);
  }
}
function Fr(e, t) {
  const r = e.fosterParentingEnabled;
  e.fosterParentingEnabled = !0, wa(e, t), e.fosterParentingEnabled = r;
}
function Bo(e, t) {
  e.pendingCharacterTokens.push(t);
}
function Po(e, t) {
  e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function fr(e, t) {
  let r = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; r < e.pendingCharacterTokens.length; r++)
      Fr(e, e.pendingCharacterTokens[r]);
  else
    for (; r < e.pendingCharacterTokens.length; r++)
      e._insertCharacters(e.pendingCharacterTokens[r]);
  e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
const Fo = /* @__PURE__ */ new Set([u.CAPTION, u.COL, u.COLGROUP, u.TBODY, u.TD, u.TFOOT, u.TH, u.THEAD, u.TR]);
function e2(e, t) {
  const r = t.tagID;
  Fo.has(r) ? e.openElements.hasInTableScope(u.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = R.IN_TABLE, er(e, t)) : $e(e, t);
}
function t2(e, t) {
  const r = t.tagID;
  switch (r) {
    case u.CAPTION:
    case u.TABLE: {
      e.openElements.hasInTableScope(u.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = R.IN_TABLE, r === u.TABLE && Dr(e, t));
      break;
    }
    case u.BODY:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TBODY:
    case u.TD:
    case u.TFOOT:
    case u.TH:
    case u.THEAD:
    case u.TR:
      break;
    default:
      La(e, t);
  }
}
function Os(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.COL: {
      e._appendElement(t, j.HTML), t.ackSelfClosing = !0;
      break;
    }
    case u.TEMPLATE: {
      nt(e, t);
      break;
    }
    default:
      ba(e, t);
  }
}
function r2(e, t) {
  switch (t.tagID) {
    case u.COLGROUP: {
      e.openElements.currentTagId === u.COLGROUP && (e.openElements.pop(), e.insertionMode = R.IN_TABLE);
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
    case u.COL:
      break;
    default:
      ba(e, t);
  }
}
function ba(e, t) {
  e.openElements.currentTagId === u.COLGROUP && (e.openElements.pop(), e.insertionMode = R.IN_TABLE, e._processToken(t));
}
function Ba(e, t) {
  switch (t.tagID) {
    case u.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_ROW;
      break;
    }
    case u.TH:
    case u.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(k.TR, u.TR), e.insertionMode = R.IN_ROW, Pa(e, t);
      break;
    }
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE, er(e, t));
      break;
    }
    default:
      er(e, t);
  }
}
function Kn(e, t) {
  const r = t.tagID;
  switch (t.tagID) {
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      e.openElements.hasInTableScope(r) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE);
      break;
    }
    case u.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE, Dr(e, t));
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TD:
    case u.TH:
    case u.TR:
      break;
    default:
      Dr(e, t);
  }
}
function Pa(e, t) {
  switch (t.tagID) {
    case u.TH:
    case u.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(t, j.HTML), e.insertionMode = R.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.TR: {
      e.openElements.hasInTableScope(u.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE_BODY, Ba(e, t));
      break;
    }
    default:
      er(e, t);
  }
}
function ko(e, t) {
  switch (t.tagID) {
    case u.TR: {
      e.openElements.hasInTableScope(u.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE_BODY);
      break;
    }
    case u.TABLE: {
      e.openElements.hasInTableScope(u.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE_BODY, Kn(e, t));
      break;
    }
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(u.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = R.IN_TABLE_BODY, Kn(e, t));
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
    case u.TD:
    case u.TH:
      break;
    default:
      Dr(e, t);
  }
}
function a2(e, t) {
  const r = t.tagID;
  Fo.has(r) ? (e.openElements.hasInTableScope(u.TD) || e.openElements.hasInTableScope(u.TH)) && (e._closeTableCell(), Pa(e, t)) : $e(e, t);
}
function n2(e, t) {
  const r = t.tagID;
  switch (r) {
    case u.TD:
    case u.TH: {
      e.openElements.hasInTableScope(r) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(r), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = R.IN_ROW);
      break;
    }
    case u.TABLE:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD:
    case u.TR: {
      e.openElements.hasInTableScope(r) && (e._closeTableCell(), ko(e, t));
      break;
    }
    case u.BODY:
    case u.CAPTION:
    case u.COL:
    case u.COLGROUP:
    case u.HTML:
      break;
    default:
      La(e, t);
  }
}
function Mo(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.OPTION: {
      e.openElements.currentTagId === u.OPTION && e.openElements.pop(), e._insertElement(t, j.HTML);
      break;
    }
    case u.OPTGROUP: {
      e.openElements.currentTagId === u.OPTION && e.openElements.pop(), e.openElements.currentTagId === u.OPTGROUP && e.openElements.pop(), e._insertElement(t, j.HTML);
      break;
    }
    case u.HR: {
      e.openElements.currentTagId === u.OPTION && e.openElements.pop(), e.openElements.currentTagId === u.OPTGROUP && e.openElements.pop(), e._appendElement(t, j.HTML), t.ackSelfClosing = !0;
      break;
    }
    case u.INPUT:
    case u.KEYGEN:
    case u.TEXTAREA:
    case u.SELECT: {
      e.openElements.hasInSelectScope(u.SELECT) && (e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), t.tagID !== u.SELECT && e._processStartTag(t));
      break;
    }
    case u.SCRIPT:
    case u.TEMPLATE: {
      nt(e, t);
      break;
    }
  }
}
function Uo(e, t) {
  switch (t.tagID) {
    case u.OPTGROUP: {
      e.openElements.stackTop > 0 && e.openElements.currentTagId === u.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === u.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === u.OPTGROUP && e.openElements.pop();
      break;
    }
    case u.OPTION: {
      e.openElements.currentTagId === u.OPTION && e.openElements.pop();
      break;
    }
    case u.SELECT: {
      e.openElements.hasInSelectScope(u.SELECT) && (e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode());
      break;
    }
    case u.TEMPLATE: {
      $t(e, t);
      break;
    }
  }
}
function s2(e, t) {
  const r = t.tagID;
  r === u.CAPTION || r === u.TABLE || r === u.TBODY || r === u.TFOOT || r === u.THEAD || r === u.TR || r === u.TD || r === u.TH ? (e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Mo(e, t);
}
function i2(e, t) {
  const r = t.tagID;
  r === u.CAPTION || r === u.TABLE || r === u.TBODY || r === u.TFOOT || r === u.THEAD || r === u.TR || r === u.TD || r === u.TH ? e.openElements.hasInTableScope(r) && (e.openElements.popUntilTagNamePopped(u.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Uo(e, t);
}
function u2(e, t) {
  switch (t.tagID) {
    case u.BASE:
    case u.BASEFONT:
    case u.BGSOUND:
    case u.LINK:
    case u.META:
    case u.NOFRAMES:
    case u.SCRIPT:
    case u.STYLE:
    case u.TEMPLATE:
    case u.TITLE: {
      nt(e, t);
      break;
    }
    case u.CAPTION:
    case u.COLGROUP:
    case u.TBODY:
    case u.TFOOT:
    case u.THEAD: {
      e.tmplInsertionModeStack[0] = R.IN_TABLE, e.insertionMode = R.IN_TABLE, er(e, t);
      break;
    }
    case u.COL: {
      e.tmplInsertionModeStack[0] = R.IN_COLUMN_GROUP, e.insertionMode = R.IN_COLUMN_GROUP, Os(e, t);
      break;
    }
    case u.TR: {
      e.tmplInsertionModeStack[0] = R.IN_TABLE_BODY, e.insertionMode = R.IN_TABLE_BODY, Ba(e, t);
      break;
    }
    case u.TD:
    case u.TH: {
      e.tmplInsertionModeStack[0] = R.IN_ROW, e.insertionMode = R.IN_ROW, Pa(e, t);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = R.IN_BODY, e.insertionMode = R.IN_BODY, $e(e, t);
  }
}
function o2(e, t) {
  t.tagID === u.TEMPLATE && $t(e, t);
}
function Ho(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(u.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : Ds(e, t);
}
function c2(e, t) {
  t.tagID === u.HTML ? $e(e, t) : Ta(e, t);
}
function Xo(e, t) {
  var r;
  if (t.tagID === u.HTML) {
    if (e.fragmentContext || (e.insertionMode = R.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === u.HTML) {
      e._setEndLocation(e.openElements.items[0], t);
      const a = e.openElements.items[1];
      a && !(!((r = e.treeAdapter.getNodeSourceCodeLocation(a)) === null || r === void 0) && r.endTag) && e._setEndLocation(a, t);
    }
  } else
    Ta(e, t);
}
function Ta(e, t) {
  e.insertionMode = R.IN_BODY, wa(e, t);
}
function d2(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.FRAMESET: {
      e._insertElement(t, j.HTML);
      break;
    }
    case u.FRAME: {
      e._appendElement(t, j.HTML), t.ackSelfClosing = !0;
      break;
    }
    case u.NOFRAMES: {
      nt(e, t);
      break;
    }
  }
}
function l2(e, t) {
  t.tagID === u.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== u.FRAMESET && (e.insertionMode = R.AFTER_FRAMESET));
}
function f2(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.NOFRAMES: {
      nt(e, t);
      break;
    }
  }
}
function h2(e, t) {
  t.tagID === u.HTML && (e.insertionMode = R.AFTER_AFTER_FRAMESET);
}
function m2(e, t) {
  t.tagID === u.HTML ? $e(e, t) : Zr(e, t);
}
function Zr(e, t) {
  e.insertionMode = R.IN_BODY, wa(e, t);
}
function p2(e, t) {
  switch (t.tagID) {
    case u.HTML: {
      $e(e, t);
      break;
    }
    case u.NOFRAMES: {
      nt(e, t);
      break;
    }
  }
}
function E2(e, t) {
  t.chars = Be, e._insertCharacters(t);
}
function b2(e, t) {
  e._insertCharacters(t), e.framesetOk = !1;
}
function qo(e) {
  for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== j.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
    e.openElements.pop();
}
function T2(e, t) {
  if (L1(t))
    qo(e), e._startTagOutsideForeignContent(t);
  else {
    const r = e._getAdjustedCurrentElement(), a = e.treeAdapter.getNamespaceURI(r);
    a === j.MATHML ? So(t) : a === j.SVG && (B1(t), yo(t)), Is(t), t.selfClosing ? e._appendElement(t, a) : e._insertElement(t, a), t.ackSelfClosing = !0;
  }
}
function x2(e, t) {
  if (t.tagID === u.P || t.tagID === u.BR) {
    qo(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let r = e.openElements.stackTop; r > 0; r--) {
    const a = e.openElements.items[r];
    if (e.treeAdapter.getNamespaceURI(a) === j.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    const n = e.treeAdapter.getTagName(a);
    if (n.toLowerCase() === t.tagName) {
      t.tagName = n, e.openElements.shortenToLength(r);
      break;
    }
  }
}
const g2 = /* @__PURE__ */ new Set([
  k.AREA,
  k.BASE,
  k.BASEFONT,
  k.BGSOUND,
  k.BR,
  k.COL,
  k.EMBED,
  k.FRAME,
  k.HR,
  k.IMG,
  k.INPUT,
  k.KEYGEN,
  k.LINK,
  k.META,
  k.PARAM,
  k.SOURCE,
  k.TRACK,
  k.WBR
]);
function A2(e, t) {
  return t.treeAdapter.isElementNode(e) && t.treeAdapter.getNamespaceURI(e) === j.HTML && g2.has(t.treeAdapter.getTagName(e));
}
const C2 = { treeAdapter: bt, scriptingEnabled: !0 };
function _2(e, t) {
  const r = { ...C2, ...t };
  return Yo(e, r);
}
function S2(e, t) {
  let r = "";
  const a = t.treeAdapter.isElementNode(e) && t.treeAdapter.getTagName(e) === k.TEMPLATE && t.treeAdapter.getNamespaceURI(e) === j.HTML ? t.treeAdapter.getTemplateContent(e) : e, n = t.treeAdapter.getChildNodes(a);
  if (n)
    for (const s of n)
      r += Yo(s, t);
  return r;
}
function Yo(e, t) {
  return t.treeAdapter.isElementNode(e) ? y2(e, t) : t.treeAdapter.isTextNode(e) ? I2(e, t) : t.treeAdapter.isCommentNode(e) ? v2(e, t) : t.treeAdapter.isDocumentTypeNode(e) ? D2(e, t) : "";
}
function y2(e, t) {
  const r = t.treeAdapter.getTagName(e);
  return `<${r}${N2(e, t)}>${A2(e, t) ? "" : `${S2(e, t)}</${r}>`}`;
}
function N2(e, { treeAdapter: t }) {
  let r = "";
  for (const a of t.getAttrList(e)) {
    if (r += " ", a.namespace)
      switch (a.namespace) {
        case j.XML: {
          r += `xml:${a.name}`;
          break;
        }
        case j.XMLNS: {
          a.name !== "xmlns" && (r += "xmlns:"), r += a.name;
          break;
        }
        case j.XLINK: {
          r += `xlink:${a.name}`;
          break;
        }
        default:
          r += `${a.prefix}:${a.name}`;
      }
    else
      r += a.name;
    r += `="${B0(a.value)}"`;
  }
  return r;
}
function I2(e, t) {
  const { treeAdapter: r } = t, a = r.getTextNodeContent(e), n = r.getParentNode(e), s = n && r.isElementNode(n) && r.getTagName(n);
  return s && r.getNamespaceURI(n) === j.HTML && u1(s, t.scriptingEnabled) ? a : P0(a);
}
function v2(e, { treeAdapter: t }) {
  return `<!--${t.getCommentNodeContent(e)}-->`;
}
function D2(e, { treeAdapter: t }) {
  return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
}
function O2(e, t) {
  return Io.parse(e, t);
}
function R2(e, t, r) {
  typeof e == "string" && (r = t, t = e, e = null);
  const a = Io.getFragmentParser(e, r);
  return a.tokenizer.write(t, !0), a.getFragment();
}
function nu(e) {
  const t = e.includes('"') ? "'" : '"';
  return t + e + t;
}
function w2(e, t, r) {
  let a = "!DOCTYPE ";
  return e && (a += e), t ? a += ` PUBLIC ${nu(t)}` : r && (a += " SYSTEM"), r && (a += ` ${nu(r)}`), a;
}
const yt = {
  // Re-exports from domhandler
  isCommentNode: Na,
  isElementNode: fe,
  isTextNode: ct,
  //Node construction
  createDocument() {
    const e = new kt([]);
    return e["x-mode"] = Ze.NO_QUIRKS, e;
  },
  createDocumentFragment() {
    return new kt([]);
  },
  createElement(e, t, r) {
    const a = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
    for (let o = 0; o < r.length; o++) {
      const d = r[o].name;
      a[d] = r[o].value, n[d] = r[o].namespace, s[d] = r[o].prefix;
    }
    const i = new fs(e, a, []);
    return i.namespace = t, i["x-attribsNamespace"] = n, i["x-attribsPrefix"] = s, i;
  },
  createCommentNode(e) {
    return new cs(e);
  },
  createTextNode(e) {
    return new Nr(e);
  },
  //Tree mutation
  appendChild(e, t) {
    const r = e.children[e.children.length - 1];
    r && (r.next = t, t.prev = r), e.children.push(t), t.parent = e;
  },
  insertBefore(e, t, r) {
    const a = e.children.indexOf(r), { prev: n } = r;
    n && (n.next = t, t.prev = n), r.prev = t, t.next = r, e.children.splice(a, 0, t), t.parent = e;
  },
  setTemplateContent(e, t) {
    yt.appendChild(e, t);
  },
  getTemplateContent(e) {
    return e.children[0];
  },
  setDocumentType(e, t, r, a) {
    const n = w2(t, r, a);
    let s = e.children.find((i) => Mn(i) && i.name === "!doctype");
    s ? s.data = n ?? null : (s = new ds("!doctype", n), yt.appendChild(e, s)), s["x-name"] = t, s["x-publicId"] = r, s["x-systemId"] = a;
  },
  setDocumentMode(e, t) {
    e["x-mode"] = t;
  },
  getDocumentMode(e) {
    return e["x-mode"];
  },
  detachNode(e) {
    if (e.parent) {
      const t = e.parent.children.indexOf(e), { prev: r, next: a } = e;
      e.prev = null, e.next = null, r && (r.next = a), a && (a.prev = r), e.parent.children.splice(t, 1), e.parent = null;
    }
  },
  insertText(e, t) {
    const r = e.children[e.children.length - 1];
    r && ct(r) ? r.data += t : yt.appendChild(e, yt.createTextNode(t));
  },
  insertTextBefore(e, t, r) {
    const a = e.children[e.children.indexOf(r) - 1];
    a && ct(a) ? a.data += t : yt.insertBefore(e, yt.createTextNode(t), r);
  },
  adoptAttributes(e, t) {
    for (let r = 0; r < t.length; r++) {
      const a = t[r].name;
      e.attribs[a] === void 0 && (e.attribs[a] = t[r].value, e["x-attribsNamespace"][a] = t[r].namespace, e["x-attribsPrefix"][a] = t[r].prefix);
    }
  },
  //Tree traversing
  getFirstChild(e) {
    return e.children[0];
  },
  getChildNodes(e) {
    return e.children;
  },
  getParentNode(e) {
    return e.parent;
  },
  getAttrList(e) {
    return e.attributes;
  },
  //Node data
  getTagName(e) {
    return e.name;
  },
  getNamespaceURI(e) {
    return e.namespace;
  },
  getTextNodeContent(e) {
    return e.data;
  },
  getCommentNodeContent(e) {
    return e.data;
  },
  getDocumentTypeNodeName(e) {
    var t;
    return (t = e["x-name"]) !== null && t !== void 0 ? t : "";
  },
  getDocumentTypeNodePublicId(e) {
    var t;
    return (t = e["x-publicId"]) !== null && t !== void 0 ? t : "";
  },
  getDocumentTypeNodeSystemId(e) {
    var t;
    return (t = e["x-systemId"]) !== null && t !== void 0 ? t : "";
  },
  //Node types
  isDocumentTypeNode(e) {
    return Mn(e) && e.name === "!doctype";
  },
  // Source code location
  setNodeSourceCodeLocation(e, t) {
    t && (e.startIndex = t.startOffset, e.endIndex = t.endOffset), e.sourceCodeLocation = t;
  },
  getNodeSourceCodeLocation(e) {
    return e.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(e, t) {
    t.endOffset != null && (e.endIndex = t.endOffset), e.sourceCodeLocation = {
      ...e.sourceCodeLocation,
      ...t
    };
  }
};
function L2(e, t, r, a) {
  const n = {
    scriptingEnabled: typeof t.scriptingEnabled == "boolean" ? t.scriptingEnabled : !0,
    treeAdapter: yt,
    sourceCodeLocationInfo: t.sourceCodeLocationInfo
  };
  return r ? O2(e, n) : R2(a, e, n);
}
const B2 = { treeAdapter: yt };
function P2(e) {
  const t = "length" in e ? e : [e];
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    qt(n) && Array.prototype.splice.call(t, a, 1, ...n.children);
  }
  let r = "";
  for (let a = 0; a < t.length; a += 1) {
    const n = t[a];
    r += _2(n, B2);
  }
  return r;
}
var ne;
(function(e) {
  e[e.Tab = 9] = "Tab", e[e.NewLine = 10] = "NewLine", e[e.FormFeed = 12] = "FormFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.Number = 35] = "Number", e[e.Amp = 38] = "Amp", e[e.SingleQuote = 39] = "SingleQuote", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Dash = 45] = "Dash", e[e.Slash = 47] = "Slash", e[e.Zero = 48] = "Zero", e[e.Nine = 57] = "Nine", e[e.Semi = 59] = "Semi", e[e.Lt = 60] = "Lt", e[e.Eq = 61] = "Eq", e[e.Gt = 62] = "Gt", e[e.Questionmark = 63] = "Questionmark", e[e.UpperA = 65] = "UpperA", e[e.LowerA = 97] = "LowerA", e[e.UpperF = 70] = "UpperF", e[e.LowerF = 102] = "LowerF", e[e.UpperZ = 90] = "UpperZ", e[e.LowerZ = 122] = "LowerZ", e[e.LowerX = 120] = "LowerX", e[e.OpeningSquareBracket = 91] = "OpeningSquareBracket";
})(ne || (ne = {}));
var G;
(function(e) {
  e[e.Text = 1] = "Text", e[e.BeforeTagName = 2] = "BeforeTagName", e[e.InTagName = 3] = "InTagName", e[e.InSelfClosingTag = 4] = "InSelfClosingTag", e[e.BeforeClosingTagName = 5] = "BeforeClosingTagName", e[e.InClosingTagName = 6] = "InClosingTagName", e[e.AfterClosingTagName = 7] = "AfterClosingTagName", e[e.BeforeAttributeName = 8] = "BeforeAttributeName", e[e.InAttributeName = 9] = "InAttributeName", e[e.AfterAttributeName = 10] = "AfterAttributeName", e[e.BeforeAttributeValue = 11] = "BeforeAttributeValue", e[e.InAttributeValueDq = 12] = "InAttributeValueDq", e[e.InAttributeValueSq = 13] = "InAttributeValueSq", e[e.InAttributeValueNq = 14] = "InAttributeValueNq", e[e.BeforeDeclaration = 15] = "BeforeDeclaration", e[e.InDeclaration = 16] = "InDeclaration", e[e.InProcessingInstruction = 17] = "InProcessingInstruction", e[e.BeforeComment = 18] = "BeforeComment", e[e.CDATASequence = 19] = "CDATASequence", e[e.InSpecialComment = 20] = "InSpecialComment", e[e.InCommentLike = 21] = "InCommentLike", e[e.BeforeSpecialS = 22] = "BeforeSpecialS", e[e.SpecialStartSequence = 23] = "SpecialStartSequence", e[e.InSpecialTag = 24] = "InSpecialTag", e[e.BeforeEntity = 25] = "BeforeEntity", e[e.BeforeNumericEntity = 26] = "BeforeNumericEntity", e[e.InNamedEntity = 27] = "InNamedEntity", e[e.InNumericEntity = 28] = "InNumericEntity", e[e.InHexEntity = 29] = "InHexEntity";
})(G || (G = {}));
function Et(e) {
  return e === ne.Space || e === ne.NewLine || e === ne.Tab || e === ne.FormFeed || e === ne.CarriageReturn;
}
function $r(e) {
  return e === ne.Slash || e === ne.Gt || Et(e);
}
function su(e) {
  return e >= ne.Zero && e <= ne.Nine;
}
function F2(e) {
  return e >= ne.LowerA && e <= ne.LowerZ || e >= ne.UpperA && e <= ne.UpperZ;
}
function k2(e) {
  return e >= ne.UpperA && e <= ne.UpperF || e >= ne.LowerA && e <= ne.LowerF;
}
var ot;
(function(e) {
  e[e.NoValue = 0] = "NoValue", e[e.Unquoted = 1] = "Unquoted", e[e.Single = 2] = "Single", e[e.Double = 3] = "Double";
})(ot || (ot = {}));
const je = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  // `</title`
};
class M2 {
  constructor({ xmlMode: t = !1, decodeEntities: r = !0 }, a) {
    this.cbs = a, this.state = G.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = G.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = t, this.decodeEntities = r, this.entityTrie = t ? I0 : hs;
  }
  reset() {
    this.state = G.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = G.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
  }
  write(t) {
    this.offset += this.buffer.length, this.buffer = t, this.parse();
  }
  end() {
    this.running && this.finish();
  }
  pause() {
    this.running = !1;
  }
  resume() {
    this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
  }
  /**
   * The current index within all of the written data.
   */
  getIndex() {
    return this.index;
  }
  /**
   * The start of the current section.
   */
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(t) {
    t === ne.Lt || !this.decodeEntities && this.fastForwardTo(ne.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = G.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && t === ne.Amp && (this.state = G.BeforeEntity);
  }
  stateSpecialStartSequence(t) {
    const r = this.sequenceIndex === this.currentSequence.length;
    if (!(r ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      $r(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.isSpecial = !1;
    else if (!r) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = G.InTagName, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === ne.Gt || Et(t)) {
        const r = this.index - this.currentSequence.length;
        if (this.sectionStart < r) {
          const a = this.index;
          this.index = r, this.cbs.ontext(this.sectionStart, r), this.index = a;
        }
        this.isSpecial = !1, this.sectionStart = r + 2, this.stateInClosingTagName(t);
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === je.TitleEnd ? this.decodeEntities && t === ne.Amp && (this.state = G.BeforeEntity) : this.fastForwardTo(ne.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === ne.Lt);
  }
  stateCDATASequence(t) {
    t === je.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === je.Cdata.length && (this.state = G.InCommentLike, this.currentSequence = je.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = G.InDeclaration, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length + this.offset; )
      if (this.buffer.charCodeAt(this.index - this.offset) === t)
        return !0;
    return this.index = this.buffer.length + this.offset - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === je.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = G.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(t) {
    return this.xmlMode ? !$r(t) : F2(t);
  }
  startSpecial(t, r) {
    this.isSpecial = !0, this.currentSequence = t, this.sequenceIndex = r, this.state = G.SpecialStartSequence;
  }
  stateBeforeTagName(t) {
    if (t === ne.ExclamationMark)
      this.state = G.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (t === ne.Questionmark)
      this.state = G.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(t)) {
      const r = t | 32;
      this.sectionStart = this.index, !this.xmlMode && r === je.TitleEnd[2] ? this.startSpecial(je.TitleEnd, 3) : this.state = !this.xmlMode && r === je.ScriptEnd[2] ? G.BeforeSpecialS : G.InTagName;
    } else t === ne.Slash ? this.state = G.BeforeClosingTagName : (this.state = G.Text, this.stateText(t));
  }
  stateInTagName(t) {
    $r(t) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(t));
  }
  stateBeforeClosingTagName(t) {
    Et(t) || (t === ne.Gt ? this.state = G.Text : (this.state = this.isTagStartChar(t) ? G.InClosingTagName : G.InSpecialComment, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === ne.Gt || Et(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = G.AfterClosingTagName, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    (t === ne.Gt || this.fastForwardTo(ne.Gt)) && (this.state = G.Text, this.baseState = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeAttributeName(t) {
    t === ne.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = G.InSpecialTag, this.sequenceIndex = 0) : this.state = G.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : t === ne.Slash ? this.state = G.InSelfClosingTag : Et(t) || (this.state = G.InAttributeName, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === ne.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = G.Text, this.baseState = G.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : Et(t) || (this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(t));
  }
  stateInAttributeName(t) {
    (t === ne.Eq || $r(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = G.AfterAttributeName, this.stateAfterAttributeName(t));
  }
  stateAfterAttributeName(t) {
    t === ne.Eq ? this.state = G.BeforeAttributeValue : t === ne.Slash || t === ne.Gt ? (this.cbs.onattribend(ot.NoValue, this.index), this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(t)) : Et(t) || (this.cbs.onattribend(ot.NoValue, this.index), this.state = G.InAttributeName, this.sectionStart = this.index);
  }
  stateBeforeAttributeValue(t) {
    t === ne.DoubleQuote ? (this.state = G.InAttributeValueDq, this.sectionStart = this.index + 1) : t === ne.SingleQuote ? (this.state = G.InAttributeValueSq, this.sectionStart = this.index + 1) : Et(t) || (this.sectionStart = this.index, this.state = G.InAttributeValueNq, this.stateInAttributeValueNoQuotes(t));
  }
  handleInAttributeValue(t, r) {
    t === r || !this.decodeEntities && this.fastForwardTo(r) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(r === ne.DoubleQuote ? ot.Double : ot.Single, this.index), this.state = G.BeforeAttributeName) : this.decodeEntities && t === ne.Amp && (this.baseState = this.state, this.state = G.BeforeEntity);
  }
  stateInAttributeValueDoubleQuotes(t) {
    this.handleInAttributeValue(t, ne.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(t) {
    this.handleInAttributeValue(t, ne.SingleQuote);
  }
  stateInAttributeValueNoQuotes(t) {
    Et(t) || t === ne.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(ot.Unquoted, this.index), this.state = G.BeforeAttributeName, this.stateBeforeAttributeName(t)) : this.decodeEntities && t === ne.Amp && (this.baseState = this.state, this.state = G.BeforeEntity);
  }
  stateBeforeDeclaration(t) {
    t === ne.OpeningSquareBracket ? (this.state = G.CDATASequence, this.sequenceIndex = 0) : this.state = t === ne.Dash ? G.BeforeComment : G.InDeclaration;
  }
  stateInDeclaration(t) {
    (t === ne.Gt || this.fastForwardTo(ne.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === ne.Gt || this.fastForwardTo(ne.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === ne.Dash ? (this.state = G.InCommentLike, this.currentSequence = je.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = G.InDeclaration;
  }
  stateInSpecialComment(t) {
    (t === ne.Gt || this.fastForwardTo(ne.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = G.Text, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    const r = t | 32;
    r === je.ScriptEnd[3] ? this.startSpecial(je.ScriptEnd, 4) : r === je.StyleEnd[3] ? this.startSpecial(je.StyleEnd, 4) : (this.state = G.InTagName, this.stateInTagName(t));
  }
  stateBeforeEntity(t) {
    this.entityExcess = 1, this.entityResult = 0, t === ne.Number ? this.state = G.BeforeNumericEntity : t === ne.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = G.InNamedEntity, this.stateInNamedEntity(t));
  }
  stateInNamedEntity(t) {
    if (this.entityExcess += 1, this.trieIndex = R0(this.entityTrie, this.trieCurrent, this.trieIndex + 1, t), this.trieIndex < 0) {
      this.emitNamedEntity(), this.index--;
      return;
    }
    this.trieCurrent = this.entityTrie[this.trieIndex];
    const r = this.trieCurrent & at.VALUE_LENGTH;
    if (r) {
      const a = (r >> 14) - 1;
      if (!this.allowLegacyEntity() && t !== ne.Semi)
        this.trieIndex += a;
      else {
        const n = this.index - this.entityExcess + 1;
        n > this.sectionStart && this.emitPartial(this.sectionStart, n), this.entityResult = this.trieIndex, this.trieIndex += a, this.entityExcess = 0, this.sectionStart = this.index + 1, a === 0 && this.emitNamedEntity();
      }
    }
  }
  emitNamedEntity() {
    if (this.state = this.baseState, this.entityResult === 0)
      return;
    switch ((this.entityTrie[this.entityResult] & at.VALUE_LENGTH) >> 14) {
      case 1: {
        this.emitCodePoint(this.entityTrie[this.entityResult] & ~at.VALUE_LENGTH);
        break;
      }
      case 2: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        break;
      }
      case 3:
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
    }
  }
  stateBeforeNumericEntity(t) {
    (t | 32) === ne.LowerX ? (this.entityExcess++, this.state = G.InHexEntity) : (this.state = G.InNumericEntity, this.stateInNumericEntity(t));
  }
  emitNumericEntity(t) {
    const r = this.index - this.entityExcess - 1;
    r + 2 + +(this.state === G.InHexEntity) !== this.index && (r > this.sectionStart && this.emitPartial(this.sectionStart, r), this.sectionStart = this.index + Number(t), this.emitCodePoint(v0(this.entityResult))), this.state = this.baseState;
  }
  stateInNumericEntity(t) {
    t === ne.Semi ? this.emitNumericEntity(!0) : su(t) ? (this.entityResult = this.entityResult * 10 + (t - ne.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
  }
  stateInHexEntity(t) {
    t === ne.Semi ? this.emitNumericEntity(!0) : su(t) ? (this.entityResult = this.entityResult * 16 + (t - ne.Zero), this.entityExcess++) : k2(t) ? (this.entityResult = this.entityResult * 16 + ((t | 32) - ne.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
  }
  allowLegacyEntity() {
    return !this.xmlMode && (this.baseState === G.Text || this.baseState === G.InSpecialTag);
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.running && this.sectionStart !== this.index && (this.state === G.Text || this.state === G.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === G.InAttributeValueDq || this.state === G.InAttributeValueSq || this.state === G.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    for (; this.shouldContinue(); ) {
      const t = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case G.Text: {
          this.stateText(t);
          break;
        }
        case G.SpecialStartSequence: {
          this.stateSpecialStartSequence(t);
          break;
        }
        case G.InSpecialTag: {
          this.stateInSpecialTag(t);
          break;
        }
        case G.CDATASequence: {
          this.stateCDATASequence(t);
          break;
        }
        case G.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(t);
          break;
        }
        case G.InAttributeName: {
          this.stateInAttributeName(t);
          break;
        }
        case G.InCommentLike: {
          this.stateInCommentLike(t);
          break;
        }
        case G.InSpecialComment: {
          this.stateInSpecialComment(t);
          break;
        }
        case G.BeforeAttributeName: {
          this.stateBeforeAttributeName(t);
          break;
        }
        case G.InTagName: {
          this.stateInTagName(t);
          break;
        }
        case G.InClosingTagName: {
          this.stateInClosingTagName(t);
          break;
        }
        case G.BeforeTagName: {
          this.stateBeforeTagName(t);
          break;
        }
        case G.AfterAttributeName: {
          this.stateAfterAttributeName(t);
          break;
        }
        case G.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(t);
          break;
        }
        case G.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(t);
          break;
        }
        case G.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(t);
          break;
        }
        case G.AfterClosingTagName: {
          this.stateAfterClosingTagName(t);
          break;
        }
        case G.BeforeSpecialS: {
          this.stateBeforeSpecialS(t);
          break;
        }
        case G.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(t);
          break;
        }
        case G.InSelfClosingTag: {
          this.stateInSelfClosingTag(t);
          break;
        }
        case G.InDeclaration: {
          this.stateInDeclaration(t);
          break;
        }
        case G.BeforeDeclaration: {
          this.stateBeforeDeclaration(t);
          break;
        }
        case G.BeforeComment: {
          this.stateBeforeComment(t);
          break;
        }
        case G.InProcessingInstruction: {
          this.stateInProcessingInstruction(t);
          break;
        }
        case G.InNamedEntity: {
          this.stateInNamedEntity(t);
          break;
        }
        case G.BeforeEntity: {
          this.stateBeforeEntity(t);
          break;
        }
        case G.InHexEntity: {
          this.stateInHexEntity(t);
          break;
        }
        case G.InNumericEntity: {
          this.stateInNumericEntity(t);
          break;
        }
        default:
          this.stateBeforeNumericEntity(t);
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    this.state === G.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length + this.offset;
    this.state === G.InCommentLike ? this.currentSequence === je.CdataEnd ? this.cbs.oncdata(this.sectionStart, t, 0) : this.cbs.oncomment(this.sectionStart, t, 0) : this.state === G.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === G.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === G.InTagName || this.state === G.BeforeAttributeName || this.state === G.BeforeAttributeValue || this.state === G.AfterAttributeName || this.state === G.InAttributeName || this.state === G.InAttributeValueSq || this.state === G.InAttributeValueDq || this.state === G.InAttributeValueNq || this.state === G.InClosingTagName || this.cbs.ontext(this.sectionStart, t);
  }
  emitPartial(t, r) {
    this.baseState !== G.Text && this.baseState !== G.InSpecialTag ? this.cbs.onattribdata(t, r) : this.cbs.ontext(t, r);
  }
  emitCodePoint(t) {
    this.baseState !== G.Text && this.baseState !== G.InSpecialTag ? this.cbs.onattribentity(t) : this.cbs.ontextentity(t);
  }
}
const jt = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), Oe = /* @__PURE__ */ new Set(["p"]), iu = /* @__PURE__ */ new Set(["thead", "tbody"]), uu = /* @__PURE__ */ new Set(["dd", "dt"]), ou = /* @__PURE__ */ new Set(["rt", "rp"]), U2 = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", Oe],
  ["h1", Oe],
  ["h2", Oe],
  ["h3", Oe],
  ["h4", Oe],
  ["h5", Oe],
  ["h6", Oe],
  ["select", jt],
  ["input", jt],
  ["output", jt],
  ["button", jt],
  ["datalist", jt],
  ["textarea", jt],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", uu],
  ["dt", uu],
  ["address", Oe],
  ["article", Oe],
  ["aside", Oe],
  ["blockquote", Oe],
  ["details", Oe],
  ["div", Oe],
  ["dl", Oe],
  ["fieldset", Oe],
  ["figcaption", Oe],
  ["figure", Oe],
  ["footer", Oe],
  ["form", Oe],
  ["header", Oe],
  ["hr", Oe],
  ["main", Oe],
  ["nav", Oe],
  ["ol", Oe],
  ["pre", Oe],
  ["section", Oe],
  ["table", Oe],
  ["ul", Oe],
  ["rt", ou],
  ["rp", ou],
  ["tbody", iu],
  ["tfoot", iu]
]), H2 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), cu = /* @__PURE__ */ new Set(["math", "svg"]), du = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), X2 = /\s|\//;
class q2 {
  constructor(t, r = {}) {
    var a, n, s, i, o;
    this.options = r, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = t ?? {}, this.lowerCaseTagNames = (a = r.lowerCaseTags) !== null && a !== void 0 ? a : !r.xmlMode, this.lowerCaseAttributeNames = (n = r.lowerCaseAttributeNames) !== null && n !== void 0 ? n : !r.xmlMode, this.tokenizer = new ((s = r.Tokenizer) !== null && s !== void 0 ? s : M2)(this.options, this), (o = (i = this.cbs).onparserinit) === null || o === void 0 || o.call(i, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(t, r) {
    var a, n;
    const s = this.getSlice(t, r);
    this.endIndex = r - 1, (n = (a = this.cbs).ontext) === null || n === void 0 || n.call(a, s), this.startIndex = r;
  }
  /** @internal */
  ontextentity(t) {
    var r, a;
    const n = this.tokenizer.getSectionStart();
    this.endIndex = n - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, Un(t)), this.startIndex = n;
  }
  isVoidElement(t) {
    return !this.options.xmlMode && H2.has(t);
  }
  /** @internal */
  onopentagname(t, r) {
    this.endIndex = r;
    let a = this.getSlice(t, r);
    this.lowerCaseTagNames && (a = a.toLowerCase()), this.emitOpenTag(a);
  }
  emitOpenTag(t) {
    var r, a, n, s;
    this.openTagStart = this.startIndex, this.tagname = t;
    const i = !this.options.xmlMode && U2.get(t);
    if (i)
      for (; this.stack.length > 0 && i.has(this.stack[this.stack.length - 1]); ) {
        const o = this.stack.pop();
        (a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, o, !0);
      }
    this.isVoidElement(t) || (this.stack.push(t), cu.has(t) ? this.foreignContext.push(!0) : du.has(t) && this.foreignContext.push(!1)), (s = (n = this.cbs).onopentagname) === null || s === void 0 || s.call(n, t), this.cbs.onopentag && (this.attribs = {});
  }
  endOpenTag(t) {
    var r, a;
    this.startIndex = this.openTagStart, this.attribs && ((a = (r = this.cbs).onopentag) === null || a === void 0 || a.call(r, this.tagname, this.attribs, t), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
  }
  /** @internal */
  onopentagend(t) {
    this.endIndex = t, this.endOpenTag(!1), this.startIndex = t + 1;
  }
  /** @internal */
  onclosetag(t, r) {
    var a, n, s, i, o, d;
    this.endIndex = r;
    let c = this.getSlice(t, r);
    if (this.lowerCaseTagNames && (c = c.toLowerCase()), (cu.has(c) || du.has(c)) && this.foreignContext.pop(), this.isVoidElement(c))
      !this.options.xmlMode && c === "br" && ((n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, "br"), (i = (s = this.cbs).onopentag) === null || i === void 0 || i.call(s, "br", {}, !0), (d = (o = this.cbs).onclosetag) === null || d === void 0 || d.call(o, "br", !1));
    else {
      const l = this.stack.lastIndexOf(c);
      if (l !== -1)
        if (this.cbs.onclosetag) {
          let b = this.stack.length - l;
          for (; b--; )
            this.cbs.onclosetag(this.stack.pop(), b !== 0);
        } else
          this.stack.length = l;
      else !this.options.xmlMode && c === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    }
    this.startIndex = r + 1;
  }
  /** @internal */
  onselfclosingtag(t) {
    this.endIndex = t, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = t + 1) : this.onopentagend(t);
  }
  closeCurrentTag(t) {
    var r, a;
    const n = this.tagname;
    this.endOpenTag(t), this.stack[this.stack.length - 1] === n && ((a = (r = this.cbs).onclosetag) === null || a === void 0 || a.call(r, n, !t), this.stack.pop());
  }
  /** @internal */
  onattribname(t, r) {
    this.startIndex = t;
    const a = this.getSlice(t, r);
    this.attribname = this.lowerCaseAttributeNames ? a.toLowerCase() : a;
  }
  /** @internal */
  onattribdata(t, r) {
    this.attribvalue += this.getSlice(t, r);
  }
  /** @internal */
  onattribentity(t) {
    this.attribvalue += Un(t);
  }
  /** @internal */
  onattribend(t, r) {
    var a, n;
    this.endIndex = r, (n = (a = this.cbs).onattribute) === null || n === void 0 || n.call(a, this.attribname, this.attribvalue, t === ot.Double ? '"' : t === ot.Single ? "'" : t === ot.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
  }
  getInstructionName(t) {
    const r = t.search(X2);
    let a = r < 0 ? t : t.substr(0, r);
    return this.lowerCaseTagNames && (a = a.toLowerCase()), a;
  }
  /** @internal */
  ondeclaration(t, r) {
    this.endIndex = r;
    const a = this.getSlice(t, r);
    if (this.cbs.onprocessinginstruction) {
      const n = this.getInstructionName(a);
      this.cbs.onprocessinginstruction(`!${n}`, `!${a}`);
    }
    this.startIndex = r + 1;
  }
  /** @internal */
  onprocessinginstruction(t, r) {
    this.endIndex = r;
    const a = this.getSlice(t, r);
    if (this.cbs.onprocessinginstruction) {
      const n = this.getInstructionName(a);
      this.cbs.onprocessinginstruction(`?${n}`, `?${a}`);
    }
    this.startIndex = r + 1;
  }
  /** @internal */
  oncomment(t, r, a) {
    var n, s, i, o;
    this.endIndex = r, (s = (n = this.cbs).oncomment) === null || s === void 0 || s.call(n, this.getSlice(t, r - a)), (o = (i = this.cbs).oncommentend) === null || o === void 0 || o.call(i), this.startIndex = r + 1;
  }
  /** @internal */
  oncdata(t, r, a) {
    var n, s, i, o, d, c, l, b, m, f;
    this.endIndex = r;
    const E = this.getSlice(t, r - a);
    this.options.xmlMode || this.options.recognizeCDATA ? ((s = (n = this.cbs).oncdatastart) === null || s === void 0 || s.call(n), (o = (i = this.cbs).ontext) === null || o === void 0 || o.call(i, E), (c = (d = this.cbs).oncdataend) === null || c === void 0 || c.call(d)) : ((b = (l = this.cbs).oncomment) === null || b === void 0 || b.call(l, `[CDATA[${E}]]`), (f = (m = this.cbs).oncommentend) === null || f === void 0 || f.call(m)), this.startIndex = r + 1;
  }
  /** @internal */
  onend() {
    var t, r;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let a = this.stack.length; a > 0; this.cbs.onclosetag(this.stack[--a], !0))
        ;
    }
    (r = (t = this.cbs).onend) === null || r === void 0 || r.call(t);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var t, r, a, n;
    (r = (t = this.cbs).onreset) === null || r === void 0 || r.call(t), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (a = this.cbs).onparserinit) === null || n === void 0 || n.call(a, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(t) {
    this.reset(), this.end(t);
  }
  getSlice(t, r) {
    for (; t - this.bufferOffset >= this.buffers[0].length; )
      this.shiftBuffer();
    let a = this.buffers[0].slice(t - this.bufferOffset, r - this.bufferOffset);
    for (; r - this.bufferOffset > this.buffers[0].length; )
      this.shiftBuffer(), a += this.buffers[0].slice(0, r - this.bufferOffset);
    return a;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(t) {
    var r, a;
    if (this.ended) {
      (a = (r = this.cbs).onerror) === null || a === void 0 || a.call(r, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(t), this.tokenizer.running && (this.tokenizer.write(t), this.writeIndex++);
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(t) {
    var r, a;
    if (this.ended) {
      (a = (r = this.cbs).onerror) === null || a === void 0 || a.call(r, new Error(".end() after done!"));
      return;
    }
    t && this.write(t), this.ended = !0, this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    this.ended && this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(t) {
    this.write(t);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(t) {
    this.end(t);
  }
}
function Y2(e, t) {
  const r = new Jd(void 0, t);
  return new q2(r, t).end(e), r.root;
}
const $2 = Ah((e, t, r, a) => t.xmlMode || t._useHtmlParser2 ? Y2(e, t) : L2(e, t, r, a)), ie = Qh($2, (e, t) => t.xmlMode || t._useHtmlParser2 ? Ia(e, t) : P2(e));
ie([]);
var V2 = Ot();
const W2 = /* @__PURE__ */ Ut(V2);
var $o = { exports: {} };
(function(e, t) {
  (function(r, a) {
    e.exports = a(_e());
  })(Ee, function(r) {
    return r.enc.Utf8;
  });
})($o);
var G2 = $o.exports;
const j2 = /* @__PURE__ */ Ut(G2);
var K2 = typeof self == "object" ? self.FormData : window.FormData;
const Rs = /* @__PURE__ */ Ut(K2);
async function z2(e, t, r) {
  const a = W2.stringify(j2.parse(t)).replace(/=/g, "."), n = await e.proxiedFetcher("https://www.google.com/recaptcha/api.js", {
    query: {
      render: r
    }
  }), s = n.substring(
    n.indexOf("/releases/") + 10,
    n.indexOf("/recaptcha__en.js")
  ), i = await e.proxiedFetcher(
    "https://www.google.com/recaptcha/api2/anchor?cb=1&hl=en&size=invisible&cb=flicklax",
    {
      query: {
        k: r,
        co: a,
        v: s
      }
    }
  ), o = ie(i)("#recaptcha-token").attr("value");
  if (!o) throw new Error("Unable to find cToken");
  const c = (await e.proxiedFetcher("https://www.google.com/recaptcha/api2/reload", {
    query: {
      v: s,
      reason: "q",
      k: r,
      c: o,
      sa: "",
      co: t
    },
    headers: { referer: "https://www.google.com/recaptcha/api2/" },
    method: "POST"
  })).match('rresp","(.+?)"');
  return c ? c[1] : null;
}
const Vo = ge({
  id: "streamsb",
  name: "StreamSB",
  rank: 150,
  async scrape(e) {
    const t = e.url.replace(".html", "").replace("embed-", "").replace("e/", "").replace("d/", ""), r = new URL(t), a = await e.proxiedFetcher(`${r.origin}/d${r.pathname}`);
    e.progress(20);
    const n = ie(a), s = [];
    n("[onclick^=download_video]").each((d, c) => {
      const l = n(c), b = l.attr("onclick"), f = /download_video\('(.+?)','(.+?)','(.+?)'\)/.exec(b ?? "");
      if (!f) return;
      const E = l.find("span").text(), p = /(.+?) \((.+?)\)/.exec(E ?? "");
      p && s.push({
        parameters: [f[1], f[2], f[3]],
        quality: {
          label: p[1].trim(),
          size: p[2]
        }
      });
    }), e.progress(40);
    let i = await Promise.all(
      s.map(async (d) => {
        const c = {
          op: "download_orig",
          id: d.parameters[0],
          mode: d.parameters[1],
          hash: d.parameters[2]
        }, l = await e.proxiedFetcher("/dl", {
          query: c,
          baseUrl: r.origin
        }), m = ie(l)(".g-recaptcha").attr("data-sitekey");
        if (!m) throw new Error("Unable to get captcha key");
        const f = await z2(e, r.origin, m);
        if (!f) throw new Error("Unable to get captcha token");
        const E = new Rs();
        E.append("op", "download_orig"), E.append("id", d.parameters[0]), E.append("mode", d.parameters[1]), E.append("hash", d.parameters[2]), E.append("g-recaptcha-response", f);
        const A = await e.proxiedFetcher("/dl", {
          method: "POST",
          baseUrl: r.origin,
          body: E,
          query: c
        }), p = ie(A)(".btn.btn-light.btn-lg").attr("href");
        return {
          quality: d.quality.label,
          url: p
        };
      })
    );
    i = i.filter((d) => !!d.url), e.progress(80);
    const o = i.reduce(
      (d, c) => (d[c.quality] = {
        type: "mp4",
        url: c.url
      }, d),
      {}
    );
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [ae.CORS_ALLOWED],
          qualities: o,
          captions: []
        }
      ]
    };
  }
}), Q2 = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/, Z2 = /file:"(https:\/\/[^"]+)"/, J2 = ge({
  id: "streamwish",
  name: "Streamwish",
  rank: 216,
  async scrape(e) {
    const r = (await e.proxiedFetcher(e.url)).match(Q2);
    if (!r) throw new Error("Packed not found");
    const n = ft(r[1]).match(Z2);
    if (!n) throw new Error("Stream not found");
    return {
      stream: [
        {
          type: "hls",
          id: "primary",
          playlist: n[1],
          flags: [ae.CORS_ALLOWED],
          captions: []
        }
      ]
    };
  }
});
function ep(e) {
  return String.fromCharCode(parseInt(e, 16));
}
function tp(e, t) {
  var a;
  return (((a = e.match(/../g)) == null ? void 0 : a.map(ep).join("")) || "").split("").map((n, s) => String.fromCharCode(n.charCodeAt(0) ^ t.charCodeAt(s % t.length))).join("");
}
const rp = ge({
  id: "turbovid",
  name: "Turbovid",
  rank: 122,
  async scrape(e) {
    var d, c;
    const t = new URL(e.url).origin, r = await e.proxiedFetcher(e.url);
    e.progress(30);
    const a = (d = r.match(/const\s+apkey\s*=\s*"(.*?)";/)) == null ? void 0 : d[1], n = (c = r.match(/const\s+xxid\s*=\s*"(.*?)";/)) == null ? void 0 : c[1];
    if (!a || !n) throw new Error("Failed to get required values");
    const s = JSON.parse(
      await e.proxiedFetcher("/api/cucked/juice_key", {
        baseUrl: t,
        headers: {
          referer: e.url
        }
      })
    ).juice;
    if (!s) throw new Error("Failed to fetch the key");
    e.progress(60);
    const i = JSON.parse(
      await e.proxiedFetcher("/api/cucked/the_juice/", {
        baseUrl: t,
        query: {
          [a]: n
        },
        headers: {
          referer: e.url
        }
      })
    ).data;
    if (!i) throw new Error("Failed to fetch required data");
    return e.progress(90), {
      stream: [
        {
          type: "hls",
          id: "primary",
          playlist: tp(i, s),
          headers: {
            referer: `${t}/`,
            origin: t
          },
          flags: [],
          captions: []
        }
      ]
    };
  }
}), ap = "https://rabbitstream.net", np = "https://rabbitstream.net/", { AES: sp, enc: ip } = vt;
function up(e) {
  try {
    return JSON.parse(e), !0;
  } catch {
    return !1;
  }
}
function op(e) {
  const t = e.lastIndexOf("switch"), r = e.indexOf("partKeyStartPosition"), a = e.slice(t, r), n = [], s = a.matchAll(/:[a-zA-Z0-9]+=([a-zA-Z0-9]+),[a-zA-Z0-9]+=([a-zA-Z0-9]+);/g);
  for (const i of s) {
    const o = [];
    for (const d of [i[1], i[2]]) {
      const c = new RegExp(`${d}=0x([a-zA-Z0-9]+)`, "g"), l = [...e.matchAll(c)], b = l[l.length - 1];
      if (!b) return null;
      const m = parseInt(b[1], 16);
      o.push(m);
    }
    n.push([o[0], o[1]]);
  }
  return n;
}
const xt = ge({
  id: "upcloud",
  name: "UpCloud",
  rank: 200,
  disabled: !0,
  async scrape(e) {
    const t = new URL(e.url.replace("embed-5", "embed-4")), r = t.pathname.split("/"), a = r[r.length - 1], n = await e.proxiedFetcher(`${t.origin}/ajax/embed-4/getSources?id=${a}`, {
      headers: {
        Referer: t.origin,
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    let s = null;
    if (!up(n.sources)) {
      const o = await e.proxiedFetcher("https://rabbitstream.net/js/player/prod/e4-player.min.js", {
        query: {
          // browser side caching on this endpoint is quite extreme. Add version query paramter to circumvent any caching
          v: Date.now().toString()
        }
      }), d = op(o);
      if (!d) throw new Error("Key extraction failed");
      let c = "", l = n.sources, b = 0;
      d.forEach(([E, A]) => {
        const p = E + b, C = p + A;
        c += n.sources.slice(p, C), l = l.replace(n.sources.substring(p, C), ""), b += A;
      });
      const m = sp.decrypt(l, c).toString(ip.Utf8), f = JSON.parse(m)[0];
      if (!f) throw new Error("No stream found");
      s = f;
    }
    if (!s) throw new Error("upcloud source not found");
    const i = [];
    return n.tracks.forEach((o) => {
      if (o.kind !== "captions") return;
      const d = Ht(o.file);
      if (!d) return;
      const c = lt(o.label.split(" ")[0]);
      c && i.push({
        id: o.file,
        language: c,
        hasCorsRestrictions: !1,
        type: d,
        url: o.file
      });
    }), {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: s.file,
          flags: [ae.CORS_ALLOWED],
          captions: i,
          preferredHeaders: {
            Referer: np,
            Origin: ap
          }
        }
      ]
    };
  }
}), cp = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/, dp = /sources:\[{file:"(.*?)"/, xa = ge({
  id: "upstream",
  name: "UpStream",
  rank: 199,
  async scrape(e) {
    const r = (await e.proxiedFetcher(e.url)).match(cp);
    if (r) {
      const n = ft(r[1]).match(dp);
      if (n)
        return {
          stream: [
            {
              id: "primary",
              type: "hls",
              playlist: n[1],
              flags: [ae.CORS_ALLOWED],
              captions: []
            }
          ]
        };
    }
    throw new Error("upstream source not found");
  }
}), Jr = "https://vidsrc.me", zn = "https://vidsrc.stream", lp = /file:"(.*?)"/, fp = /var pass_path = "(.*set_pass\.php.*)";/;
function Wo(e) {
  const t = e.replace(/\/@#@\/[^=/]+==/g, "");
  return t.match(/\/@#@\/[^=/]+==/) ? Wo(t) : t;
}
const Go = ge({
  id: "vidsrcembed",
  // VidSrc is both a source and an embed host
  name: "VidSrc",
  rank: 197,
  async scrape(e) {
    var s, i, o;
    const t = await e.proxiedFetcher(e.url, {
      headers: {
        referer: e.url
      }
    });
    let r = (i = (s = t.match(lp)) == null ? void 0 : s[1]) == null ? void 0 : i.slice(2);
    if (!r) throw new Error("Unable to find HLS playlist");
    r = Wo(r);
    const a = atob(r);
    if (!a.includes(".m3u8")) throw new Error("Unable to find HLS playlist");
    let n = (o = t.match(fp)) == null ? void 0 : o[1];
    return n && (n.startsWith("//") && (n = `https:${n}`), await e.proxiedFetcher(n, {
      headers: {
        referer: e.url
      }
    })), {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: a,
          headers: {
            Referer: zn,
            Origin: zn
          },
          flags: [],
          captions: []
        }
      ]
    };
  }
}), hp = /eval\((.*)\)/g, mp = /file:"(.*?)"/g, pp = /\{file:"([^"]+)",kind:"thumbnails"\}/g, Ep = ge({
  id: "vtube",
  name: "vTube",
  rank: 145,
  scrape: async (e) => {
    const t = await e.proxiedFetcher.full(e.url, {
      headers: {
        referer: e.url
      }
    }), r = t.body, n = ie(r)("script").text().match(hp);
    if (!n) throw new Error("Failed to find eval code");
    const s = ft(n == null ? void 0 : n.toString()), i = mp.exec(s), o = pp.exec(s);
    if (!(i != null && i[1])) throw new Error("Failed to find file");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: i[1],
          flags: [ae.CORS_ALLOWED],
          captions: [],
          ...o ? {
            thumbnailTrack: {
              type: "vtt",
              url: new URL(t.finalUrl).origin + o[1]
            }
          } : {}
        }
      ]
    };
  }
}), bp = "https://autoembed.cc/";
async function lu(e) {
  const r = (await e.proxiedFetcher("/embed/player.php", {
    baseUrl: bp,
    query: {
      id: e.media.tmdbId,
      ...e.media.type === "show" && {
        s: e.media.season.number.toString(),
        e: e.media.episode.number.toString()
      }
    }
  })).match(/"file": (\[.*?\])/s);
  if (!r[1]) throw new z("No data found");
  const a = JSON.parse(r[1].replace(/,\s*\]$/, "]")), n = [];
  for (const s of a) {
    const i = s.file;
    i && n.push({ embedId: `autoembed-${s.title.toLowerCase().trim()}`, url: i });
  }
  return {
    embeds: n
  };
}
const Tp = Ie({
  id: "autoembed",
  name: "Autoembed",
  rank: 90,
  disabled: !1,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: lu,
  scrapeShow: lu
});
async function fu(e) {
  const t = await e.proxiedFetcher(
    `https://bombthe.irish/embed/${e.media.type === "movie" ? `movie/${e.media.tmdbId}` : `tv/${e.media.tmdbId}/${e.media.season.number}/${e.media.episode.number}`}`
  ), r = ie(t), a = [];
  return r("#dropdownMenu a").each((n, s) => {
    const i = new URL(r(s).data("url")).searchParams.get("url");
    i && a.push({ embedId: r(s).text().toLowerCase(), url: atob(i) });
  }), { embeds: a };
}
const xp = Ie({
  id: "bombtheirish",
  name: "bombthe.irish",
  rank: 100,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: fu,
  scrapeShow: fu
});
function hu(e) {
  let t = e.trim().toLowerCase();
  return t !== "the movie" && t.endsWith("the movie") && (t = t.replace("the movie", "")), t !== "the series" && t.endsWith("the series") && (t = t.replace("the series", "")), t.replace(/['":]/g, "").replace(/[^a-zA-Z0-9]+/g, "_");
}
function ws(e, t) {
  return hu(e) === hu(t);
}
function Ye(e, t, r) {
  const a = r === void 0 ? !0 : e.releaseYear === r;
  return ws(e.title, t) && a;
}
const gp = "https://catflix.su";
async function mu(e) {
  var o;
  const t = await e.proxiedFetcher("/", {
    baseUrl: gp,
    query: {
      s: e.media.title
    }
  });
  e.progress(40);
  const r = ie(t), a = [];
  r("li").each((d, c) => {
    const l = r(c).find("h2").first().text().trim(), b = Number(r(c).find(".text-xs > span").eq(1).text().trim()) || void 0, m = r(c).find("a").attr("href");
    !l || !m || a.push({ title: l, year: b, url: m });
  });
  let n = (o = a.find((d) => d && Ye(e.media, d.title, d.year))) == null ? void 0 : o.url;
  if (!n) throw new z("No watchable item found");
  if (e.progress(60), e.media.type === "show") {
    const d = n.match(/\/series\/([^/]+)\/?/);
    if (!d) throw new Error("Failed to parse watch page url");
    n = n.replace(
      `/series/${d[1]}`,
      `/episode/${d[1]}-${e.media.season.number}x${e.media.episode.number}`
    );
  }
  const s = ie(await e.proxiedFetcher(n));
  e.progress(80);
  const i = s("iframe").first().attr("src");
  if (!i) throw new Error("Failed to find embed url");
  return e.progress(90), {
    embeds: [
      {
        embedId: "turbovid",
        url: i
      }
    ]
  };
}
const Ap = Ie({
  id: "catflix",
  name: "Catflix",
  rank: 170,
  disabled: !0,
  flags: [],
  scrapeMovie: mu,
  scrapeShow: mu
});
var Ls = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Ls.parse = _p;
Ls.serialize = Sp;
var Cp = Object.prototype.toString, Vr = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function _p(e, t) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  for (var r = {}, a = t || {}, n = a.decode || yp, s = 0; s < e.length; ) {
    var i = e.indexOf("=", s);
    if (i === -1)
      break;
    var o = e.indexOf(";", s);
    if (o === -1)
      o = e.length;
    else if (o < i) {
      s = e.lastIndexOf(";", i - 1) + 1;
      continue;
    }
    var d = e.slice(s, i).trim();
    if (r[d] === void 0) {
      var c = e.slice(i + 1, o).trim();
      c.charCodeAt(0) === 34 && (c = c.slice(1, -1)), r[d] = vp(c, n);
    }
    s = o + 1;
  }
  return r;
}
function Sp(e, t, r) {
  var a = r || {}, n = a.encode || Np;
  if (typeof n != "function")
    throw new TypeError("option encode is invalid");
  if (!Vr.test(e))
    throw new TypeError("argument name is invalid");
  var s = n(t);
  if (s && !Vr.test(s))
    throw new TypeError("argument val is invalid");
  var i = e + "=" + s;
  if (a.maxAge != null) {
    var o = a.maxAge - 0;
    if (isNaN(o) || !isFinite(o))
      throw new TypeError("option maxAge is invalid");
    i += "; Max-Age=" + Math.floor(o);
  }
  if (a.domain) {
    if (!Vr.test(a.domain))
      throw new TypeError("option domain is invalid");
    i += "; Domain=" + a.domain;
  }
  if (a.path) {
    if (!Vr.test(a.path))
      throw new TypeError("option path is invalid");
    i += "; Path=" + a.path;
  }
  if (a.expires) {
    var d = a.expires;
    if (!Ip(d) || isNaN(d.valueOf()))
      throw new TypeError("option expires is invalid");
    i += "; Expires=" + d.toUTCString();
  }
  if (a.httpOnly && (i += "; HttpOnly"), a.secure && (i += "; Secure"), a.partitioned && (i += "; Partitioned"), a.priority) {
    var c = typeof a.priority == "string" ? a.priority.toLowerCase() : a.priority;
    switch (c) {
      case "low":
        i += "; Priority=Low";
        break;
      case "medium":
        i += "; Priority=Medium";
        break;
      case "high":
        i += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (a.sameSite) {
    var l = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
    switch (l) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return i;
}
function yp(e) {
  return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
}
function Np(e) {
  return encodeURIComponent(e);
}
function Ip(e) {
  return Cp.call(e) === "[object Date]" || e instanceof Date;
}
function vp(e, t) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
var kr = { exports: {} }, ga = {
  decodeValues: !0,
  map: !1,
  silent: !1
};
function Qn(e) {
  return typeof e == "string" && !!e.trim();
}
function Zn(e, t) {
  var r = e.split(";").filter(Qn), a = r.shift(), n = Dp(a), s = n.name, i = n.value;
  t = t ? Object.assign({}, ga, t) : ga;
  try {
    i = t.decodeValues ? decodeURIComponent(i) : i;
  } catch (d) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + i + "'. Set options.decodeValues to false to disable this feature.",
      d
    );
  }
  var o = {
    name: s,
    value: i
  };
  return r.forEach(function(d) {
    var c = d.split("="), l = c.shift().trimLeft().toLowerCase(), b = c.join("=");
    l === "expires" ? o.expires = new Date(b) : l === "max-age" ? o.maxAge = parseInt(b, 10) : l === "secure" ? o.secure = !0 : l === "httponly" ? o.httpOnly = !0 : l === "samesite" ? o.sameSite = b : l === "partitioned" ? o.partitioned = !0 : o[l] = b;
  }), o;
}
function Dp(e) {
  var t = "", r = "", a = e.split("=");
  return a.length > 1 ? (t = a.shift(), r = a.join("=")) : r = e, { name: t, value: r };
}
function jo(e, t) {
  if (t = t ? Object.assign({}, ga, t) : ga, !e)
    return t.map ? {} : [];
  if (e.headers)
    if (typeof e.headers.getSetCookie == "function")
      e = e.headers.getSetCookie();
    else if (e.headers["set-cookie"])
      e = e.headers["set-cookie"];
    else {
      var r = e.headers[Object.keys(e.headers).find(function(n) {
        return n.toLowerCase() === "set-cookie";
      })];
      !r && e.headers.cookie && !t.silent && console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      ), e = r;
    }
  if (Array.isArray(e) || (e = [e]), t.map) {
    var a = {};
    return e.filter(Qn).reduce(function(n, s) {
      var i = Zn(s, t);
      return n[i.name] = i, n;
    }, a);
  } else
    return e.filter(Qn).map(function(n) {
      return Zn(n, t);
    });
}
function Op(e) {
  if (Array.isArray(e))
    return e;
  if (typeof e != "string")
    return [];
  var t = [], r = 0, a, n, s, i, o;
  function d() {
    for (; r < e.length && /\s/.test(e.charAt(r)); )
      r += 1;
    return r < e.length;
  }
  function c() {
    return n = e.charAt(r), n !== "=" && n !== ";" && n !== ",";
  }
  for (; r < e.length; ) {
    for (a = r, o = !1; d(); )
      if (n = e.charAt(r), n === ",") {
        for (s = r, r += 1, d(), i = r; r < e.length && c(); )
          r += 1;
        r < e.length && e.charAt(r) === "=" ? (o = !0, r = i, t.push(e.substring(a, s)), a = r) : r = s + 1;
      } else
        r += 1;
    (!o || r >= e.length) && t.push(e.substring(a, e.length));
  }
  return t;
}
kr.exports = jo;
kr.exports.parse = jo;
kr.exports.parseString = Zn;
kr.exports.splitCookiesString = Op;
var Rp = kr.exports;
const pu = /* @__PURE__ */ Ut(Rp);
function Dt(e) {
  return Object.entries(e).map(([t, r]) => Ls.serialize(t, r)).join("; ");
}
function Or(e) {
  const t = pu.splitCookiesString(e);
  return pu.parse(t, {
    map: !0
  });
}
const ea = "https://ee3.me", wp = "_sf_", Lp = "defonotscraping";
async function Bp(e, t, r) {
  const a = await r.proxiedFetcher.full("/login", {
    baseUrl: ea,
    method: "POST",
    body: new URLSearchParams({ user: e, pass: t, action: "login" }),
    readHeaders: ["Set-Cookie"]
  }), n = JSON.parse(a.body);
  return Or(
    // It retruns a cookie even when the login failed
    // I have the backup cookie here just in case
    n.status === 1 ? a.headers.get("Set-Cookie") ?? "" : "PHPSESSID=mk2p73c77qc28o5i5120843ruu;"
  ).PHPSESSID.value;
}
function Pp(e) {
  const t = [], r = ie(e);
  return r("div").each((a, n) => {
    const s = r(n).find(".title").text().trim(), i = parseInt(r(n).find(".details span").first().text().trim(), 10), o = r(n).find(".control-buttons").attr("data-id");
    s && i && o && t.push({ title: s, year: i, id: o });
  }), t;
}
async function Fp(e) {
  var l, b;
  const t = await Bp(wp, Lp, e);
  if (!t) throw new Error("Login failed");
  const a = (l = Pp(
    await e.proxiedFetcher("/get", {
      baseUrl: ea,
      method: "POST",
      body: new URLSearchParams({ query: e.media.title, action: "search" }),
      headers: {
        cookie: Dt({ PHPSESSID: t })
      }
    })
  ).find((m) => m && Ye(e.media, m.title, m.year))) == null ? void 0 : l.id;
  if (!a) throw new z("No watchable item found");
  const n = JSON.parse(
    await e.proxiedFetcher("/get", {
      baseUrl: ea,
      method: "POST",
      body: new URLSearchParams({ id: a, action: "get_movie_info" }),
      headers: {
        cookie: Dt({ PHPSESSID: t })
      }
    })
  );
  if (!n.message.video) throw new Error("Failed to get the stream");
  const s = JSON.parse(
    await e.proxiedFetcher("/renew", {
      baseUrl: ea,
      method: "POST",
      headers: {
        cookie: Dt({ PHPSESSID: t })
      }
    })
  );
  if (!s.k) throw new Error("Failed to get the key");
  const i = n.message.server === "1" ? "https://vid.ee3.me/vid/" : "https://vault.rips.cc/video/", o = s.k, d = `${i}${n.message.video}?${new URLSearchParams({ k: o })}`, c = [];
  return ((b = n.message.subs) == null ? void 0 : b.toLowerCase()) === "yes" && n.message.imdbID && c.push({
    id: `https://rips.cc/subs/${n.message.imdbID}.vtt`,
    url: `https://rips.cc/subs/${n.message.imdbID}.vtt`,
    type: "vtt",
    hasCorsRestrictions: !1,
    language: "en"
  }), {
    embeds: [],
    stream: [
      {
        id: "primary",
        type: "file",
        flags: [ae.CORS_ALLOWED],
        captions: c,
        qualities: {
          // should be unknown, but all the videos are 720p
          720: {
            type: "mp4",
            url: d
          }
        }
      }
    ]
  };
}
const kp = Ie({
  id: "ee3",
  name: "EE3",
  rank: 150,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Fp
}), tr = ge({
  id: "vidcloud",
  name: "VidCloud",
  rank: 201,
  disabled: !0,
  async scrape(e) {
    return {
      stream: (await xt.scrape(e)).stream.map((r) => ({
        ...r,
        flags: []
      }))
    };
  }
}), Zt = "https://flixhq.to";
async function Wr(e, t) {
  return (await e.proxiedFetcher(`/ajax/sources/${t}`, {
    baseUrl: Zt
  })).link;
}
async function Mp(e, t, r) {
  const a = r.split("-"), n = a[a.length - 1], s = await e.proxiedFetcher(`/ajax/movie/episodes/${n}`, {
    baseUrl: Zt
  }), i = ie(s);
  return i(".nav-item > a").toArray().map((d) => {
    const c = i(d), l = c.attr("title"), b = c.attr("data-linkid");
    if (!l || !b) throw new Error("invalid sources");
    return {
      embed: l,
      episodeId: b
    };
  });
}
async function Up(e, t, r) {
  var E, A;
  const a = r.split("-"), n = a[a.length - 1], s = await e.proxiedFetcher(`/ajax/season/list/${n}`, {
    baseUrl: Zt
  }), i = ie(s), o = (E = i(".dropdown-item").toArray().find((p) => i(p).text() === `Season ${t.season.number}`)) == null ? void 0 : E.attribs["data-id"];
  if (!o) throw new z("season not found");
  const d = await e.proxiedFetcher(`/ajax/season/episodes/${o}`, {
    baseUrl: Zt
  }), c = ie(d), l = (A = c(".nav-item > a").toArray().map((p) => ({
    id: c(p).attr("data-id"),
    title: c(p).attr("title")
  })).find((p) => {
    var C;
    return (C = p.title) == null ? void 0 : C.startsWith(`Eps ${t.episode.number}`);
  })) == null ? void 0 : A.id;
  if (!l) throw new z("episode not found");
  const b = await e.proxiedFetcher(`/ajax/episode/servers/${l}`, {
    baseUrl: Zt
  }), m = ie(b);
  return m(".nav-item > a").toArray().map((p) => {
    const C = m(p), h = C.attr("title"), _ = C.attr("data-id");
    if (!h || !_) throw new Error("invalid sources");
    return {
      embed: h,
      episodeId: _
    };
  });
}
async function Eu(e, t) {
  const r = await e.proxiedFetcher(`/search/${t.title.replaceAll(/[^a-z0-9A-Z]/g, "-")}`, {
    baseUrl: Zt
  }), a = ie(r), s = a(".film_list-wrap > div.flw-item").toArray().map((i) => {
    var m;
    const o = a(i), d = (m = o.find("div.film-poster > a").attr("href")) == null ? void 0 : m.slice(1), c = o.find("div.film-detail > h2 > a").attr("title"), l = o.find("div.film-detail > div.fd-infor > span:nth-child(1)").text(), b = l.includes("SS") ? l.split("SS")[1] : "0";
    return !d || !c || !l ? null : {
      id: d,
      title: c,
      year: parseInt(l, 10),
      seasons: parseInt(b, 10)
    };
  }).find((i) => i ? t.type === "movie" ? Ye(t, i.title, i.year) : ws(t.title, i.title) && t.season.number < i.seasons + 1 : !1);
  return s ? s.id : null;
}
const Hp = Ie({
  id: "flixhq",
  name: "FlixHQ",
  rank: 230,
  flags: [ae.CORS_ALLOWED],
  disabled: !0,
  async scrapeMovie(e) {
    const t = await Eu(e, e.media);
    if (!t) throw new z("no search results match");
    const r = await Mp(e, e.media, t), a = [];
    for (const n of r)
      n.embed.toLowerCase() === "upcloud" ? a.push({
        embedId: xt.id,
        url: await Wr(e, n.episodeId)
      }) : n.embed.toLowerCase() === "vidcloud" && a.push({
        embedId: tr.id,
        url: await Wr(e, n.episodeId)
      });
    return {
      embeds: a
    };
  },
  async scrapeShow(e) {
    const t = await Eu(e, e.media);
    if (!t) throw new z("no search results match");
    const r = await Up(e, e.media, t), a = [];
    for (const n of r)
      n.embed.toLowerCase() === "server upcloud" ? a.push({
        embedId: xt.id,
        url: await Wr(e, n.episodeId)
      }) : n.embed.toLowerCase() === "server vidcloud" && a.push({
        embedId: tr.id,
        url: await Wr(e, n.episodeId)
      });
    return {
      embeds: a
    };
  }
});
function Bs(e) {
  switch (e.toLowerCase().replace("p", "")) {
    case "360":
      return "360";
    case "480":
      return "480";
    case "720":
      return "720";
    case "1080":
      return "1080";
    case "2160":
      return "4k";
    case "4k":
      return "4k";
    default:
      return "unknown";
  }
}
const Gr = "https://fsharetv.co";
async function Xp(e) {
  var l, b;
  const t = await e.proxiedFetcher("/search", {
    baseUrl: Gr,
    query: {
      q: e.media.title
    }
  }), r = ie(t), a = [];
  r(".movie-item").each((m, f) => {
    var C;
    const [, E, A] = ((C = r(f).find("b").text()) == null ? void 0 : C.match(/^(.*?)\s*(?:\(?\s*(\d{4})(?:\s*-\s*\d{0,4})?\s*\)?)?\s*$/)) || [], p = r(f).find("a").attr("href");
    !E || !p || a.push({ title: E, year: Number(A) ?? void 0, url: p });
  });
  const n = (l = a.find((m) => m && Ye(e.media, m.title, m.year))) == null ? void 0 : l.url;
  if (!n) throw new z("No watchable item found");
  const i = (b = (await e.proxiedFetcher(n.replace("/movie", "/w"), { baseUrl: Gr })).match(/Movie\.setSource\('([^']*)'/)) == null ? void 0 : b[1];
  if (!i) throw new Error("File ID not found");
  const o = await e.proxiedFetcher(
    `/api/file/${i}/source`,
    {
      baseUrl: Gr,
      query: {
        type: "watch"
      }
    }
  );
  if (!o.data.file.sources.length) throw new Error("No sources found");
  const d = new URL((await e.proxiedFetcher.full(o.data.file.sources[0].src, { baseUrl: Gr })).finalUrl).origin, c = o.data.file.sources.reduce(
    (m, f) => {
      const E = typeof f.quality == "number" ? f.quality.toString() : f.quality, A = Bs(E);
      return m[A] = {
        type: "mp4",
        url: `${d}${f.src.replace("/api", "")}`
      }, m;
    },
    {}
  );
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        type: "file",
        flags: [],
        headers: {
          referer: "https://fsharetv.co"
        },
        qualities: c,
        captions: []
      }
    ]
  };
}
const qp = Ie({
  id: "fsharetv",
  name: "FshareTV",
  rank: 220,
  flags: [],
  scrapeMovie: Xp
}), Yp = /'hls': ?'(http.*?)',/, $p = /previewThumbnails:\s{.*src:\["([^"]+)"]/, Jn = ge({
  id: "voe",
  name: "voe.sx",
  rank: 180,
  async scrape(e) {
    const t = await e.proxiedFetcher.full(e.url), r = t.body, a = r.match(Yp) ?? [], n = r.match($p), s = a[1];
    if (!s) throw new Error("Stream url not found in embed code");
    return {
      stream: [
        {
          type: "hls",
          id: "primary",
          playlist: s,
          flags: [ae.CORS_ALLOWED, ae.IP_LOCKED],
          captions: [],
          headers: {
            Referer: "https://voe.sx"
          },
          ...n ? {
            thumbnailTrack: {
              type: "vtt",
              url: new URL(t.finalUrl).origin + n[1]
            }
          } : {}
        }
      ]
    };
  }
});
async function et(e, t, r) {
  const a = ie(t)(`a[title*=${r} i]`), n = (a == null ? void 0 : a.attr("data-id")) ?? (a == null ? void 0 : a.attr("data-linkid"));
  if (!n) return;
  const s = await e.proxiedFetcher(`/ajax/sources/${n}`, {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    baseUrl: Bt
  });
  if (!(!s.link || s.type !== "iframe"))
    return s;
}
const Bt = "https://gomovies.sx", Vp = Ie({
  id: "gomovies",
  name: "GOmovies",
  rank: 50,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  async scrapeShow(e) {
    var U;
    const t = await e.proxiedFetcher(`/search/${e.media.title.replaceAll(/[^a-z0-9A-Z]/g, "-")}`, {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      baseUrl: Bt
    }), r = ie(t), s = r("div.film-detail").toArray().map((H) => {
      var de, Ae;
      const W = (de = r(H).find("h2.film-name a")) == null ? void 0 : de.text(), re = (Ae = r(H).find("span.fdi-item:first")) == null ? void 0 : Ae.text(), oe = r(H).find("h2.film-name a").attr("href");
      return { name: W, year: re, path: oe };
    }).find((H) => H.name === e.media.title);
    if (!(s != null && s.path)) throw new z("Media not found");
    let i = (U = s.path.split("-").pop()) == null ? void 0 : U.replace("/", "");
    const o = await e.proxiedFetcher(`/ajax/v2/tv/seasons/${i}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      baseUrl: Bt
    }), c = ie(o)(".ss-item").toArray().map((H) => ({
      number: ie(H).text().replace("Season ", ""),
      dataId: H.attribs["data-id"]
    })), l = e.media.season.number, b = c.find((H) => +H.number === l);
    if (!b) throw new z("Season not found");
    const m = await e.proxiedFetcher(`/ajax/v2/season/episodes/${b.dataId}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      baseUrl: Bt
    }), f = ie(m), A = f(".eps-item").toArray().map((H) => ({
      dataId: H.attribs["data-id"],
      number: f(H).find("strong").text().replace("Eps", "").replace(":", "").trim()
    })), p = e.media.episode.number, C = A.find((H) => H.number ? +H.number === p : !1);
    if (!(C != null && C.dataId)) throw new z("Episode not found");
    i = C.dataId;
    const h = await e.proxiedFetcher(`ajax/v2/episode/servers/${i}`, {
      baseUrl: Bt,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }), _ = await et(e, h, "upcloud"), v = await et(e, h, "vidcloud"), w = await et(e, h, "voe"), L = await et(e, h, "doodstream"), M = await et(e, h, "upstream"), F = await et(e, h, "mixdrop"), P = [
      {
        embedId: xt.id,
        url: _ == null ? void 0 : _.link
      },
      {
        embedId: tr.id,
        url: v == null ? void 0 : v.link
      },
      {
        embedId: Jn.id,
        url: w == null ? void 0 : w.link
      },
      {
        embedId: Fn.id,
        url: L == null ? void 0 : L.link
      },
      {
        embedId: xa.id,
        url: M == null ? void 0 : M.link
      },
      {
        embedId: yr.id,
        url: F == null ? void 0 : F.link
      }
    ].filter((H) => H.url).map((H) => ({
      embedId: H.embedId,
      url: H.url
    }));
    if (P.length === 0) throw new Error("No valid embeds found.");
    return {
      embeds: P
    };
  },
  async scrapeMovie(e) {
    var p;
    const t = await e.proxiedFetcher(`/search/${e.media.title.replaceAll(/[^a-z0-9A-Z]/g, "-")}`, {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      baseUrl: Bt
    }), r = ie(t), s = r("div.film-detail").toArray().map((C) => {
      var w, L;
      const h = (w = r(C).find("h2.film-name a")) == null ? void 0 : w.text(), _ = (L = r(C).find("span.fdi-item:first")) == null ? void 0 : L.text(), v = r(C).find("h2.film-name a").attr("href");
      return { name: h, year: _, path: v };
    }).find(
      (C) => C.name === e.media.title && C.year === e.media.releaseYear.toString()
    );
    if (!(s != null && s.path)) throw new z("Media not found");
    const i = (p = s.path.split("-").pop()) == null ? void 0 : p.replace("/", ""), o = await e.proxiedFetcher(`ajax/movie/episodes/${i}`, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      baseUrl: Bt
    }), d = await et(e, o, "upcloud"), c = await et(e, o, "vidcloud"), l = await et(e, o, "voe"), b = await et(e, o, "doodstream"), m = await et(e, o, "upstream"), f = await et(e, o, "mixdrop"), A = [
      {
        embedId: xt.id,
        url: d == null ? void 0 : d.link
      },
      {
        embedId: tr.id,
        url: c == null ? void 0 : c.link
      },
      {
        embedId: Jn.id,
        url: l == null ? void 0 : l.link
      },
      {
        embedId: Fn.id,
        url: b == null ? void 0 : b.link
      },
      {
        embedId: xa.id,
        url: m == null ? void 0 : m.link
      },
      {
        embedId: yr.id,
        url: f == null ? void 0 : f.link
      }
    ].filter((C) => C.url).map((C) => ({
      embedId: C.embedId,
      url: C.url
    }));
    if (A.length === 0) throw new Error("No valid embeds found.");
    return {
      embeds: A
    };
  }
});
async function bu(e) {
  let t = [];
  for (const r of e) {
    let a = "";
    if (r.name.includes("Рус"))
      a = "ru";
    else if (r.name.includes("Укр"))
      a = "uk";
    else if (r.name.includes("Eng"))
      a = "en";
    else
      continue;
    t.push({
      id: r.url,
      url: r.url,
      language: a,
      type: "vtt",
      hasCorsRestrictions: !1
    });
  }
  return t = _a(t), t;
}
const Tu = "https://api.insertunit.ws/", Wp = Ie({
  id: "insertunit",
  name: "Insertunit",
  rank: 110,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  async scrapeShow(e) {
    const t = await e.fetcher(`/embed/imdb/${e.media.imdbId}`, {
      baseUrl: Tu
    });
    e.progress(30);
    const a = /seasons:(.*)/.exec(t);
    if (a === null || a[1] === null)
      throw new z("No result found");
    e.progress(60);
    const s = JSON.parse(a[1]).find(
      (d) => d.season === e.media.season.number && !d.blocked
    ), i = s == null ? void 0 : s.episodes.find(
      (d) => d.episode.includes(e.media.episode.number.toString())
    );
    if (!(i != null && i.hls)) throw new z("No result found");
    let o = [];
    return i.cc != null && (o = await bu(i.cc)), e.progress(95), {
      embeds: [],
      stream: [
        {
          id: "primary",
          playlist: i.hls,
          type: "hls",
          flags: [ae.CORS_ALLOWED],
          captions: o
        }
      ]
    };
  },
  async scrapeMovie(e) {
    const t = await e.fetcher(`/embed/imdb/${e.media.imdbId}`, {
      baseUrl: Tu
    });
    e.progress(35);
    const a = /hls: "([^"]*)/.exec(t);
    if (a === null || a[1] === null)
      throw new z("No result found");
    e.progress(75);
    const s = /cc: (.*)/.exec(t);
    let i = [];
    if (s != null && s[1] != null) {
      const o = JSON.parse(s[1]);
      i = await bu(o);
    }
    return e.progress(90), {
      embeds: [],
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: a[1],
          flags: [ae.CORS_ALLOWED],
          captions: i
        }
      ]
    };
  }
}), Aa = "https://kissasian.sh", Gp = [
  {
    type: _0.id,
    id: "mp"
  },
  {
    type: Vo.id,
    id: "sb"
  }
];
async function xu(e, t) {
  let r = await Promise.all(
    Gp.map(async (a) => {
      if (!t.url) throw new z("Episode not found");
      const n = await e.proxiedFetcher(`${t.url}&s=${a.id}`, {
        baseUrl: Aa,
        headers: {
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua": '"Not)A;Brand";v="24", "Chromium";v="116"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"macOS"',
          "sec-fetch-dest": "document",
          "sec-fetch-mode": "navigate",
          "sec-fetch-site": "cross-site",
          "sec-fetch-user": "?1",
          "upgrade-insecure-requests": "1",
          cookie: "__rd=; ASP.NET_SessionId=jwnl2kmlw5h4mfdaxvpk30q0; k_token=OKbJDFNx3rUtaw7iAA6UxMKSJb79lgZ2X2rVC9aupJhycYQKVSLaW1y2B4K%2f%2fo3i6BuzhXgfkJGmKlKH6LpNlKPPpZUk31n9DapfMdJgjlLExgrPS3jpSKwGnNUI%2bOpNpZu9%2fFnkLZRxvVKCa8APMxrck1tYkKXWqfyJJh8%2b7hQTI1wfAOU%2fLEouHhtQGL%2fReTzElw2LQ0XSL1pjs%2fkWW3rM3of2je7Oo13I%2f7olLFuiJUVWyNbn%2fYKSgNrm%2bQ3p"
        }
      }), i = ie(n)("#my_video_1").attr("src");
      if (!i) throw new Error("Embed not found");
      return {
        embedId: a.id,
        url: i
      };
    })
  );
  return r = r.filter((a) => !!a.url), r;
}
function gu(e) {
  return e(".episodeSub").toArray().map((r) => {
    var s;
    const a = (s = e(r).find(".episodeSub a").text().split("Episode")[1]) == null ? void 0 : s.trim(), n = e(r).find(".episodeSub a").attr("href");
    return { number: a, url: n };
  }).filter((r) => !!r.url);
}
async function Au(e, t, r) {
  const a = new Rs();
  a.append("keyword", `${t} ${r ?? ""}`.trim()), a.append("type", "Drama");
  const n = await e.proxiedFetcher("/Search/SearchSuggest", {
    baseUrl: Aa,
    method: "POST",
    body: a
  }), s = ie(n);
  return Array.from(s("a")).map((i) => ({
    name: s(i).text(),
    url: i.attribs.href
  }));
}
const jp = Ie({
  id: "kissasian",
  name: "KissAsian",
  rank: 40,
  flags: [ae.CORS_ALLOWED],
  disabled: !0,
  async scrapeShow(e) {
    const t = e.media.season.number, r = e.media.episode.number, a = await Au(e, e.media.title, t), n = a.find((l) => {
      var b;
      return ((b = l.name) == null ? void 0 : b.toLowerCase()) === e.media.title.toLowerCase();
    }) ?? a[0];
    if (!n) throw new z("Drama not found");
    e.progress(30);
    const s = await e.proxiedFetcher(n.url, {
      baseUrl: Aa
    }), i = ie(s), d = (await gu(i)).find((l) => l.number === `${r}`);
    if (!(d != null && d.url)) throw new z("Episode not found");
    return e.progress(70), {
      embeds: await xu(e, d)
    };
  },
  async scrapeMovie(e) {
    const t = await Au(e, e.media.title, void 0), r = t.find((d) => {
      var c;
      return ((c = d.name) == null ? void 0 : c.toLowerCase()) === e.media.title.toLowerCase();
    }) ?? t[0];
    if (!r) throw new z("Drama not found");
    e.progress(30);
    const a = await e.proxiedFetcher(r.url, {
      baseUrl: Aa
    }), n = ie(a), i = gu(n)[0];
    if (!(i != null && i.url)) throw new z("Episode not found");
    return e.progress(70), {
      embeds: await xu(e, i)
    };
  }
});
async function Kp(e, t, r) {
  let a = "";
  return r.type === "show" ? a = "/v1/episodes/view" : r.type === "movie" && (a = "/v1/movies/view"), await e.fetcher(a, {
    baseUrl: Rr,
    query: { expand: "streams,subtitles", id: t }
  });
}
async function zp(e, t, r) {
  const a = await Kp(e, t, r), n = a.streams, s = ["auto", "1080p", "1080", "720p", "720", "480p", "480", "240p", "240", "360p", "360", "144", "144p"];
  let i = null;
  for (const d of s)
    n[d] && !i && (i = n[d]);
  let o = [];
  for (const d of a.subtitles) {
    const c = lt(d.language);
    c && o.push({
      id: d.url,
      type: "vtt",
      url: `${Rr}${d.url}`,
      hasCorsRestrictions: !1,
      language: c
    });
  }
  return o = _a(o), {
    playlist: i,
    captions: o
  };
}
const Rr = "https://lmscript.xyz";
async function Qp(e, t) {
  if (t.type === "show")
    return (await e.fetcher("/v1/shows", {
      baseUrl: Rr,
      query: { "filters[q]": t.title }
    })).items.find((s) => Ye(t, s.title, Number(s.year)));
  if (t.type === "movie")
    return (await e.fetcher("/v1/movies", {
      baseUrl: Rr,
      query: { "filters[q]": t.title }
    })).items.find((s) => Ye(t, s.title, Number(s.year)));
}
async function Zp(e, t, r) {
  var s;
  let a = null;
  if (t.type === "movie")
    a = r.id_movie;
  else if (t.type === "show") {
    const o = (s = (await e.fetcher("/v1/shows", {
      baseUrl: Rr,
      query: { expand: "episodes", id: r.id_show }
    })).episodes) == null ? void 0 : s.find((d) => Number(d.season) === Number(t.season.number) && Number(d.episode) === Number(t.episode.number));
    o && (a = o.id);
  }
  if (a === null) throw new z("Not found");
  return await zp(e, a, t);
}
async function Cu(e) {
  const t = await Qp(e, e.media);
  if (!t) throw new z("Media not found");
  e.progress(30);
  const r = await Zp(e, e.media, t);
  if (!r.playlist) throw new z("No video found");
  return e.progress(60), {
    embeds: [],
    stream: [
      {
        id: "primary",
        playlist: r.playlist,
        type: "hls",
        flags: [ae.IP_LOCKED],
        captions: r.captions
      }
    ]
  };
}
const Jp = Ie({
  id: "lookmovie",
  name: "LookMovie",
  disabled: !0,
  rank: 60,
  flags: [ae.IP_LOCKED],
  scrapeShow: Cu,
  scrapeMovie: Cu
}), _u = "https://mp4hydra.org/";
async function Su(e) {
  var o;
  const t = await e.proxiedFetcher("/search", {
    baseUrl: _u,
    query: {
      q: e.media.title
    }
  });
  e.progress(40);
  const r = ie(t), a = [];
  r(".search-details").each((d, c) => {
    var f;
    const [, l, b] = r(c).find("a").first().text().trim().match(/^(.*?)\s*(?:\(?\s*(\d{4})(?:\s*-\s*\d{0,4})?\s*\)?)?\s*$/) || [], m = (f = r(c).find("a").attr("href")) == null ? void 0 : f.split("/")[4];
    !l || !m || a.push({ title: l, year: b ? parseInt(b, 10) : void 0, url: m });
  });
  const n = (o = a.find((d) => d && Ye(e.media, d.title, d.year))) == null ? void 0 : o.url;
  if (!n) throw new z("No watchable item found");
  e.progress(60);
  const s = await e.proxiedFetcher("/info2?v=8", {
    method: "POST",
    body: new URLSearchParams({ z: JSON.stringify([{ s: n, t: "movie" }]) }),
    baseUrl: _u
  });
  if (!s.playlist[0].src || !s.servers) throw new z("No watchable item found");
  e.progress(80);
  const i = [];
  return [
    s.servers[s.servers.auto],
    ...Object.values(s.servers).filter((d) => d !== s.servers[s.servers.auto] && d !== s.servers.auto)
  ].forEach(
    (d, c) => i.push({ embedId: `mp4hydra-${c + 1}`, url: `${d}${s.playlist[0].src}|${s.playlist[0].label}` })
  ), e.progress(90), {
    embeds: i
  };
}
const eE = Ie({
  id: "mp4hydra",
  name: "Mp4Hydra",
  rank: 35,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Su,
  scrapeShow: Su
});
async function yu(e) {
  var n;
  const t = {
    title: e.media.title,
    releaseYear: e.media.releaseYear,
    tmdbId: e.media.tmdbId,
    imdbId: e.media.imdbId,
    type: e.media.type,
    ...e.media.type === "show" && {
      season: e.media.season.number.toString(),
      episode: e.media.episode.number.toString()
    }
  }, r = await e.fetcher("https://api.nsbx.ru/status");
  if (((n = r.providers) == null ? void 0 : n.length) === 0) throw new z("No providers available");
  if (!r.endpoint) throw new Error("No endpoint returned");
  return {
    embeds: r.providers.map((s) => ({
      embedId: s,
      url: `${JSON.stringify(t)}|${r.endpoint}`
    }))
  };
}
const tE = Ie({
  id: "nsbx",
  name: "NSBX",
  rank: 290,
  flags: [ae.CORS_ALLOWED],
  disabled: !0,
  externalSource: !0,
  scrapeMovie: yu,
  scrapeShow: yu
}), Nu = async (e) => {
  var t;
  try {
    const r = await e.fetcher.full("https://red-star.ningai.workers.dev/scrape/showbox", {
      query: {
        type: e.media.type,
        title: e.media.title,
        releaseYear: e.media.releaseYear.toString(),
        tmdbId: e.media.tmdbId,
        imdbId: e.media.imdbId ?? "",
        ...e.media.type === "show" && {
          episodeNumber: e.media.episode.number.toString(),
          episodeTmdbId: e.media.episode.tmdbId,
          seasonNumber: e.media.season.number.toString(),
          seasonTmdbId: e.media.season.tmdbId
        }
      }
    });
    if (r.statusCode === 200 && ((t = r.body.stream) != null && t.length))
      return { stream: r.body.stream, embeds: [] };
    throw r.statusCode === 404 ? new z("No watchable item found") : new Error(r.body.message ?? "An error has occurred!");
  } catch (r) {
    throw r instanceof z ? new z(r.message) : new Error(r.message ?? "An error has occurred!");
  }
}, rE = Ie({
  id: "redstar",
  name: "redStar",
  disabled: !0,
  externalSource: !0,
  rank: 280,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Nu,
  scrapeShow: Nu
}), Iu = atob("aHR0cHM6Ly9mc2IuOG1ldDNkdGpmcmNxY2hjb25xcGtsd3hzeGIyb2N1bWMuc3RyZWFt"), vu = "https://remotestre.am", jr = "https://remotestre.am/", aE = Ie({
  id: "remotestream",
  name: "Remote Stream",
  disabled: !0,
  rank: 30,
  flags: [ae.CORS_ALLOWED],
  async scrapeShow(e) {
    var s;
    const t = e.media.season.number, r = e.media.episode.number, a = `${Iu}/Shows/${e.media.tmdbId}/${t}/${r}/${r}.m3u8`;
    if (e.progress(30), !((s = (await e.proxiedFetcher.full(a, {
      method: "GET",
      readHeaders: ["content-type"],
      headers: {
        Referer: jr
      }
    })).headers.get("content-type")) != null && s.toLowerCase().includes("application/x-mpegurl")))
      throw new z("No watchable item found");
    return e.progress(90), {
      embeds: [],
      stream: [
        {
          id: "primary",
          captions: [],
          playlist: a,
          type: "hls",
          flags: [ae.CORS_ALLOWED],
          preferredHeaders: {
            Referer: jr,
            Origin: vu
          }
        }
      ]
    };
  },
  async scrapeMovie(e) {
    var a;
    const t = `${Iu}/Movies/${e.media.tmdbId}/${e.media.tmdbId}.m3u8`;
    if (e.progress(30), !((a = (await e.proxiedFetcher.full(t, {
      method: "GET",
      readHeaders: ["content-type"],
      headers: {
        Referer: jr
      }
    })).headers.get("content-type")) != null && a.toLowerCase().includes("application/x-mpegurl")))
      throw new z("No watchable item found");
    return e.progress(90), {
      embeds: [],
      stream: [
        {
          id: "primary",
          captions: [],
          playlist: t,
          type: "hls",
          flags: [ae.CORS_ALLOWED],
          preferredHeaders: {
            Referer: jr,
            Origin: vu
          }
        }
      ]
    };
  }
});
async function Du(e) {
  const t = {
    module: "Search4",
    page: "1",
    type: "all",
    keyword: e.media.title,
    pagelimit: "20"
  }, r = (await is(e, t, !0)).data.list;
  e.progress(50);
  const a = r.find(
    (o) => ws(o.title, e.media.title) && o.year === Number(e.media.releaseYear)
  );
  if (!a) throw new z("No entry found");
  const n = a.id, s = e.media.type === "show" ? e.media.season.number : "", i = e.media.type === "show" ? e.media.episode.number : "";
  return {
    embeds: [
      {
        embedId: C0.id,
        url: `/${e.media.type}/${n}/${s}/${i}`
      }
    ]
  };
}
const nE = Ie({
  id: "showbox",
  name: "Showbox",
  rank: 250,
  disabled: !0,
  flags: [ae.CORS_ALLOWED, ae.CF_BLOCKED],
  scrapeShow: Du,
  scrapeMovie: Du
}), sE = "https://theyallsayflix.su/";
async function Ou(e) {
  const t = await e.proxiedFetcher.full("/api/v1/search", {
    query: {
      type: e.media.type,
      tmdb_id: e.media.tmdbId,
      ...e.media.type === "show" && {
        season: e.media.season.number.toString(),
        episode: e.media.episode.number.toString()
      }
    },
    baseUrl: sE
  }), r = t.body;
  if (t.statusCode !== 200 || !r.streams[0].play_url) throw new z("No watchable item found");
  const a = [];
  if (r.subtitles)
    for (const n of r.subtitles) {
      const s = lt(n.label);
      s && a.push({
        id: n.url,
        url: n.url,
        type: "vtt",
        hasCorsRestrictions: !1,
        language: s
      });
    }
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        playlist: r.streams[0].play_url,
        type: "hls",
        flags: [ae.CORS_ALLOWED],
        captions: a
      }
    ]
  };
}
const iE = Ie({
  id: "tasf",
  name: "theyallsayflix.su",
  rank: 225,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Ou,
  scrapeShow: Ou
}), Ru = "https://tugaflix.best/";
function wu(e) {
  const t = [], r = ie(e);
  return r(".items .poster").each((a, n) => {
    var c;
    const s = r(n).find("a"), i = s.attr("href"), [, o, d] = ((c = s.attr("title")) == null ? void 0 : c.match(/^(.*?)\s*(?:\((\d{4})\))?\s*$/)) || [];
    !o || !i || t.push({ title: o, year: d ? parseInt(d, 10) : void 0, url: i });
  }), t;
}
const uE = Ie({
  id: "tugaflix",
  name: "Tugaflix",
  rank: 70,
  flags: [ae.IP_LOCKED],
  scrapeMovie: async (e) => {
    var i;
    const t = wu(
      await e.proxiedFetcher("/filmes/", {
        baseUrl: Ru,
        query: {
          s: e.media.title
        }
      })
    );
    if (t.length === 0) throw new z("No watchable item found");
    const r = (i = t.find((o) => o && Ye(e.media, o.title, o.year))) == null ? void 0 : i.url;
    if (!r) throw new z("No watchable item found");
    const a = await e.proxiedFetcher(r, {
      method: "POST",
      body: new URLSearchParams({ play: "" })
    }), n = ie(a), s = [];
    for (const o of n(".play a")) {
      const d = n(o).attr("href");
      if (!d) continue;
      const c = await e.proxiedFetcher.full(
        d.startsWith("https://") ? d : `https://${d}`
      ), l = ie(c.body)('a:contains("Download Filme")').attr("href");
      l && (l.includes("streamtape") ? s.push({
        embedId: "streamtape",
        url: l
      }) : l.includes("dood") && s.push({
        embedId: "dood",
        url: l
      }));
    }
    return {
      embeds: s
    };
  },
  scrapeShow: async (e) => {
    var l;
    const t = wu(
      await e.proxiedFetcher("/series/", {
        baseUrl: Ru,
        query: {
          s: e.media.title
        }
      })
    );
    if (t.length === 0) throw new z("No watchable item found");
    const r = (l = t.find((b) => b && Ye(e.media, b.title, b.year))) == null ? void 0 : l.url;
    if (!r) throw new z("No watchable item found");
    const a = e.media.season.number < 10 ? `0${e.media.season.number}` : e.media.season.number.toString(), n = e.media.episode.number < 10 ? `0${e.media.episode.number}` : e.media.episode.number.toString(), s = await e.proxiedFetcher(r, {
      method: "POST",
      body: new URLSearchParams({ [`S${a}E${n}`]: "" })
    }), i = ie(s)('iframe[name="player"]').attr("src");
    if (!i) throw new Error("Failed to find iframe");
    const o = await e.proxiedFetcher(i.startsWith("https:") ? i : `https:${i}`, {
      method: "POST",
      body: new URLSearchParams({ submit: "" })
    }), d = [], c = ie(o)('a:contains("Download Episodio")').attr("href");
    return c != null && c.includes("streamtape") ? d.push({
      embedId: "streamtape",
      url: c
    }) : c != null && c.includes("dood") && d.push({
      embedId: "dood",
      url: c
    }), {
      embeds: d
    };
  }
});
function oE(e, t) {
  let r = "";
  const a = t.length;
  for (let n = 0; n < e.length; n += 2) {
    const s = parseInt(e.substr(n, 2), 16), i = t.charCodeAt(n / 2 % a);
    r += String.fromCharCode(s ^ i);
  }
  return r;
}
async function Ko(e, t) {
  const r = [];
  let a = await e.proxiedFetcher(t, {
    baseUrl: Jr
  }), n = ie(a);
  const s = n(".server[data-hash]").toArray().map((i) => n(i).attr("data-hash")).filter((i) => i !== void 0);
  for (const i of s) {
    a = await e.proxiedFetcher(`/rcp/${i}`, {
      baseUrl: zn,
      headers: {
        referer: Jr
      }
    }), n = ie(a);
    const o = n("#hidden").attr("data-h"), d = n("body").attr("data-i");
    if (!o || !d)
      throw new Error("Failed to find encoded iframe src");
    let c = oE(o, d);
    c.startsWith("//") && (c = `https:${c}`);
    const { finalUrl: l } = await e.proxiedFetcher.full(c, {
      method: "HEAD",
      headers: {
        referer: Jr
      }
    }), b = {
      embedId: "",
      url: l
    };
    switch (new URL(l).host) {
      case "vidsrc.stream":
        b.embedId = Go.id;
        break;
      case "streambucket.net":
        b.embedId = S0.id;
        break;
      case "2embed.cc":
      case "www.2embed.cc":
        break;
      case "player-cdn.com":
        break;
      default:
        throw new Error(`Failed to find VidSrc embed source for ${l}`);
    }
    b.embedId !== "" && r.push(b);
  }
  return r;
}
async function cE(e) {
  return Ko(e, `/embed/${e.media.tmdbId}`);
}
async function dE(e) {
  const t = await e.proxiedFetcher(`/embed/${e.media.tmdbId}`, {
    baseUrl: Jr
  }), a = ie(t)(`.ep[data-s="${e.media.season.number}"][data-e="${e.media.episode.number}"]`).first();
  if (a.length === 0)
    throw new Error("failed to find episode element");
  const n = a.attr("data-iframe");
  if (!n)
    throw new Error("failed to find episode starting URL");
  return Ko(e, n);
}
async function lE(e) {
  return {
    embeds: await cE(e)
  };
}
async function fE(e) {
  return {
    embeds: await dE(e)
  };
}
const hE = Ie({
  id: "vidsrc",
  name: "VidSrc",
  rank: 130,
  disabled: !0,
  flags: [],
  scrapeMovie: lE,
  scrapeShow: fE
});
async function Lu(e) {
  const r = [...(await e.proxiedFetcher(
    `https://vidsrc.su/embed/${e.media.type === "movie" ? `movie/${e.media.tmdbId}` : `tv/${e.media.tmdbId}/${e.media.season.number}/${e.media.episode.number}`}`
  )).matchAll(/label: 'Server (1|2|3|5|7|8|10|11)', url: '(https.*)'/g)].sort((a, n) => {
    const s = {
      7: 10,
      11: 20,
      10: 30,
      1: 40,
      3: 50,
      2: 60,
      5: 70,
      8: 80
    };
    return s[n[1]] - s[a[1]];
  }).map((a) => a[2]);
  if (!r[0]) throw new z("No flixhq playlist found");
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        playlist: r[0],
        type: "hls",
        flags: [ae.CORS_ALLOWED],
        captions: []
      }
    ]
  };
}
const mE = Ie({
  id: "vidsrcsu",
  name: "vidsrc.su (FlixHQ)",
  rank: 229,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Lu,
  scrapeShow: Lu
});
async function pE(e, t) {
  const r = e.media.type === "movie" ? "list" : "servers", a = await e.proxiedFetcher(`/ajax/episode/${r}/${t}`, {
    baseUrl: sr
  }), n = ie(a);
  return n(".nav-item a").toArray().map((s) => {
    const i = e.media.type === "movie" ? "data-linkid" : "data-id", o = n(s), d = o.attr("title"), c = o.attr(i);
    if (!d || !c)
      throw new Error("invalid sources");
    return {
      embed: d,
      episodeId: c
    };
  });
}
async function EE(e, t) {
  const r = await e.proxiedFetcher(`/ajax/sources/${t}`, {
    baseUrl: sr
  });
  return r.type !== "iframe" ? null : r.link;
}
async function bE(e, t, r) {
  const a = await e.proxiedFetcher(`/ajax/season/list/${r}`, {
    baseUrl: sr
  }), n = ie(a), i = n(".dropdown-menu a").toArray().map((o) => {
    var b;
    const d = n(o), c = d.attr("data-id"), l = (b = d.html()) == null ? void 0 : b.split(" ")[1];
    if (!c || !l || Number.isNaN(Number(l)))
      throw new Error("invalid season");
    return {
      id: c,
      season: Number(l)
    };
  }).find((o) => o.season === t.season.number);
  return i ? i.id : null;
}
async function TE(e, t, r) {
  const a = /Eps (\d*):/, n = await e.proxiedFetcher(`/ajax/season/episodes/${r}`, {
    baseUrl: sr
  }), s = ie(n), o = s(".eps-item").toArray().map((d) => {
    const c = s(d), l = c.attr("data-id"), b = c.attr("title");
    if (!l || !b)
      throw new Error("invalid episode");
    const m = b.match(a);
    if (!m || Number.isNaN(Number(m[1])))
      throw new Error("invalid episode");
    return {
      id: l,
      episode: Number(m[1])
    };
  }).find((d) => d.episode === t.episode.number);
  return o ? o.id : null;
}
const sr = "https://zoechip.cc";
async function xE(e, t) {
  const r = await EE(e, t.episodeId);
  if (r) {
    const a = {
      embedId: "",
      url: r
    };
    switch (new URL(r).host) {
      case "rabbitstream.net":
        a.embedId = xt.id;
        break;
      case "upstream.to":
        a.embedId = xa.id;
        break;
      case "mixdrop.co":
        a.embedId = yr.id;
        break;
      default:
        return null;
    }
    return a;
  }
}
async function zo(e, t) {
  const r = await pE(e, t), a = [];
  for (const n of r) {
    const s = await xE(e, n);
    if (s) {
      const i = a.find((o) => o.embedId === xt.id);
      s.embedId === xt.id && i && (s.embedId = tr.id), a.push(s);
    }
  }
  return {
    embeds: a
  };
}
async function Qo(e, t) {
  const r = t.title.toLocaleLowerCase().replace(/ /g, "-"), a = await e.proxiedFetcher(`/search/${r}`, {
    baseUrl: sr
  }), n = ie(a);
  return n(".film_list-wrap .flw-item .film-detail").toArray().map((s) => {
    const i = n(s), o = i.find(".film-name a"), d = i.find(".fd-infor"), c = o.attr("title"), l = o.attr("href"), b = d.find(".fdi-type").html();
    let m = d.find(".fdi-item").html();
    const f = l == null ? void 0 : l.split("-").pop();
    if (!c || !l || !b)
      return null;
    if (!m || Number.isNaN(Number(m)))
      if (b === "TV")
        m = "0";
      else
        return null;
    return f ? {
      title: c,
      year: Number(m),
      id: f,
      type: b,
      href: l
    } : null;
  });
}
async function gE(e, t) {
  const a = (await Qo(e, t)).find((n) => n && n.type === "Movie" && Ye(t, n.title, n.year));
  return a ? a.id : null;
}
async function AE(e, t) {
  const r = /<\/strong><\/span> (\d.*)-\d.*-\d.*/, n = (await Qo(e, t)).filter((s) => s && s.type === "TV" && Ye(t, s.title));
  for (const s of n) {
    if (!s)
      continue;
    const o = (await e.proxiedFetcher(s.href, {
      baseUrl: sr
    })).match(r);
    if (o) {
      const d = Number(o[1]);
      if (!Number.isNaN(d) && Ye(t, s.title, d))
        return s.id;
    }
  }
  return null;
}
async function CE(e) {
  const t = await gE(e, e.media);
  if (!t)
    throw new z("no search results match");
  return zo(e, t);
}
async function _E(e) {
  const t = await AE(e, e.media);
  if (!t)
    throw new z("no search results match");
  const r = await bE(e, e.media, t);
  if (!r)
    throw new z("no season found");
  const a = await TE(e, e.media, r);
  if (!a)
    throw new z("no episode found");
  return zo(e, a);
}
const SE = Ie({
  id: "zoechip",
  name: "ZoeChip",
  rank: 240,
  flags: [ae.CORS_ALLOWED],
  disabled: !0,
  scrapeMovie: CE,
  scrapeShow: _E
}), yE = [
  {
    id: "autoembed-english",
    rank: 10
  },
  {
    id: "autoembed-hindi",
    rank: 9,
    disabled: !0
  },
  {
    id: "autoembed-tamil",
    rank: 8,
    disabled: !0
  },
  {
    id: "autoembed-telugu",
    rank: 7,
    disabled: !0
  },
  {
    id: "autoembed-bengali",
    rank: 6,
    disabled: !0
  }
];
function NE(e) {
  return ge({
    id: e.id,
    name: e.id.split("-").map((t) => t[0].toUpperCase() + t.slice(1)).join(" "),
    disabled: e.disabled,
    rank: e.rank,
    async scrape(t) {
      return {
        stream: [
          {
            id: "primary",
            type: "hls",
            playlist: t.url,
            flags: [ae.CORS_ALLOWED],
            captions: []
          }
        ]
      };
    }
  });
}
const [
  IE,
  vE,
  DE,
  OE,
  RE
] = yE.map(NE), wE = /eval\((.*)\)/g, LE = /https?:\/\/.*\.mp4/, BE = ge({
  id: "bflix",
  name: "bFlix",
  disabled: !0,
  rank: 113,
  scrape: async (e) => {
    const r = (await e.proxiedFetcher(e.url)).match(wE);
    if (!r) throw new Error("Failed to find eval code");
    const n = ft(r[0]).match(LE);
    if (!(n != null && n[0])) throw new Error("Failed to find file");
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [],
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: n[0]
            }
          },
          headers: {
            Referer: "https://bflix.gs/"
          }
        }
      ]
    };
  }
}), PE = "https://ridomovies.tv/", Zo = ge({
  id: "closeload",
  name: "CloseLoad",
  rank: 106,
  async scrape(e) {
    var l;
    const t = new URL(e.url).origin, r = await e.proxiedFetcher(e.url, {
      headers: { referer: PE }
    }), a = ie(r), n = a("track").map((b, m) => {
      const f = a(m), E = `${t}${f.attr("src")}`, A = f.attr("label") ?? "", p = lt(A), C = Ht(E);
      return !p || !C ? null : {
        id: E,
        language: p,
        hasCorsRestrictions: !0,
        type: C,
        url: E
      };
    }).get().filter((b) => b !== null), s = a("script").filter((b, m) => {
      var E;
      const f = a(m);
      return (f.attr("type") === "text/javascript" && ((E = f.html()) == null ? void 0 : E.includes("p,a,c,k,e,d"))) ?? !1;
    }).html();
    if (!s) throw new Error("Couldn't find eval code");
    const i = ft(s), d = (l = /var\s+(\w+)\s*=\s*"([^"]+)";/g.exec(i)) == null ? void 0 : l[2];
    if (!d) throw new z("Unable to find source url");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: atob(d),
          captions: n,
          flags: [ae.IP_LOCKED],
          headers: {
            Referer: "https://closeload.top/",
            Origin: "https://closeload.top"
          }
        }
      ]
    };
  }
}), FE = /eval\((.*)\)/g, kE = /file:"(.*?)"/g, Jo = ge({
  id: "filemoon",
  name: "Filemoon",
  rank: 300,
  scrape: async (e) => {
    const t = await e.proxiedFetcher(e.url, {
      headers: {
        referer: e.url
      }
    }), a = ie(t)("script").text().match(FE);
    if (!a) throw new Error("Failed to find eval code");
    const n = ft(a[0]), s = kE.exec(n);
    if (!(s != null && s[1])) throw new Error("Failed to find file");
    const o = new URL(e.url).searchParams.get("sub.info"), d = [];
    if (o) {
      const c = await e.proxiedFetcher(o);
      for (const l of c) {
        const b = lt(l.label), m = Ht(l.file);
        !b || !m || d.push({
          id: l.file,
          url: l.file,
          type: m,
          language: b,
          hasCorsRestrictions: !1
        });
      }
    }
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: s[1],
          flags: [ae.IP_LOCKED],
          captions: d
        }
      ]
    };
  }
}), ME = ge({
  id: "filemoon-mp4",
  name: "Filemoon MP4",
  rank: 400,
  scrape: async (e) => {
    const t = await Jo.scrape(e);
    if (!t.stream) throw new z("Failed to find result");
    if (t.stream[0].type !== "hls") throw new z("Failed to find hls stream");
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          qualities: {
            unknown: {
              type: "mp4",
              url: t.stream[0].playlist.replace(/\/hls2\//, "/download/").replace(/\.m3u8/, ".mp4")
            }
          },
          flags: [ae.IP_LOCKED],
          captions: t.stream[0].captions
        }
      ]
    };
  }
}), UE = ge({
  id: "hydrax",
  name: "Hydrax",
  rank: 250,
  disabled: !0,
  async scrape(e) {
    const t = await e.proxiedFetcher(e.url), r = t.match(/PLAYER\(atob\("(.*?)"/);
    if (!(r != null && r[1])) throw new Error("No Data Found");
    e.progress(50);
    const a = t.match(/({"pieceLength.+?})/);
    let n = {};
    a != null && a[1] && (n = JSON.parse(a[1]));
    const s = JSON.parse(atob(r[1]));
    if (!s.id || !s.domain) throw new Error("Required values missing");
    const i = new URL((await e.proxiedFetcher.full(`https://${s.domain}`)).finalUrl).hostname;
    return e.progress(100), {
      stream: [
        {
          id: "primary",
          type: "file",
          qualities: {
            ...(n == null ? void 0 : n.fullHd) && {
              1080: {
                type: "mp4",
                url: `https://${i}/whw${s.id}`
              }
            },
            ...(n == null ? void 0 : n.hd) && {
              720: {
                type: "mp4",
                url: `https://${i}/www${s.id}`
              }
            },
            ...(n == null ? void 0 : n.mHd) && {
              480: {
                type: "mp4",
                url: `https://${i}/${s.id}`
              }
            },
            360: {
              type: "mp4",
              url: `https://${i}/${s.id}`
            }
          },
          headers: {
            Referer: e.url.replace(new URL(e.url).hostname, "abysscdn.com")
          },
          captions: [],
          flags: []
        }
      ]
    };
  }
}), HE = [
  {
    id: "mp4hydra-1",
    name: "Server 1",
    rank: 36
  },
  {
    id: "mp4hydra-2",
    name: "Server 2",
    rank: 35
  }
];
function XE(e) {
  return ge({
    id: e.id,
    name: e.name,
    disabled: e.disabled,
    rank: e.rank,
    async scrape(t) {
      const [r, a] = t.url.split("|");
      return {
        stream: [
          {
            id: "primary",
            type: "file",
            qualities: {
              [Bs(a || "")]: { url: r, type: "mp4" }
            },
            flags: [ae.CORS_ALLOWED],
            captions: []
          }
        ]
      };
    }
  });
}
const [qE, YE] = HE.map(XE), { AES: $E, MD5: Bu } = vt;
function VE(e, t) {
  return $E.encrypt(e, t).toString().replace("U2FsdGVkX1", "").replace(/\//g, "|a").replace(/\+/g, "|b").replace(/\\=/g, "|c").replace(/\|/g, "-z");
}
function WE(e, t) {
  let r = "";
  for (let a = 0; a < e.length; a++) {
    let n = e[a];
    if (n.match(/[a-z]/i)) {
      const s = e.charCodeAt(a);
      s >= 65 && s <= 90 ? n = String.fromCharCode((s - 65 + t) % 26 + 65) : s >= 97 && s <= 122 && (n = String.fromCharCode((s - 97 + t) % 26 + 97));
    }
    r += n;
  }
  return r;
}
function GE(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += e[r].charCodeAt(0).toString(16);
  return t;
}
function jE(e, t, r) {
  const a = GE(
    WE(VE(`Win32|${e}|${t}|${r}`, Bu("plhq@@@2022").toString()), 22)
  );
  return `${a}|${Bu(`${a}plhq@@@22`).toString()}`;
}
const Pu = "https://api-post-iframe-rd.playm4u.xyz/api/playiframe", KE = ge({
  id: "playm4u-nm",
  name: "PlayM4U",
  rank: 240,
  scrape: async (e) => {
    var d, c;
    const r = ie(await e.proxiedFetcher(e.url))(`script:contains("${Pu}")`).text();
    if (!r) throw new Error("Failed to get script");
    e.progress(50);
    const a = "https://ww2.m4ufree.tv", n = (d = r.match(/var\s?idfile\s?=\s?"(.*)";/im)) == null ? void 0 : d[1], s = (c = r.match(/var\s?iduser\s?=\s?"(.*)";/im)) == null ? void 0 : c[1];
    if (!n || !s) throw new Error("Failed to get ids");
    const i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+", o = await e.proxiedFetcher(Pu, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        namekey: "playm4u03",
        token: Array.from({ length: 100 }, () => i.charAt(Math.floor(Math.random() * i.length))).join(
          ""
        ),
        referrer: a,
        data: jE(s, n, a)
      })
    });
    if (!o.data || o.type !== "url-m3u8") throw new Error("Failed to get the stream");
    return e.progress(100), {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: o.data,
          captions: [],
          flags: []
        }
      ]
    };
  }
}), zE = "https://ridomovies.tv/", ec = ge({
  id: "ridoo",
  name: "Ridoo",
  rank: 105,
  async scrape(e) {
    var n;
    const t = await e.proxiedFetcher(e.url, {
      headers: {
        referer: zE
      }
    }), a = (n = /file:"([^"]+)"/g.exec(t)) == null ? void 0 : n[1];
    if (!a) throw new z("Unable to find source url");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: a,
          captions: [],
          flags: [ae.CORS_ALLOWED]
        }
      ]
    };
  }
});
function QE(e) {
  const t = ["U0ZML2RVN0IvRGx4", "MGNhL0JWb0kvTlM5", "Ym94LzJTSS9aU0Zj", "SGJ0L1dGakIvN0dX", "eE52L1QwOC96N0Yz"];
  let r = e.slice(2);
  for (let a = 4; a > -1; a--)
    r = r.replace(`//${t[a]}`, "");
  return atob(r);
}
const Ps = ge({
  id: "smashystream-f",
  name: "SmashyStream (F)",
  rank: 71,
  async scrape(e) {
    var n, s;
    const t = await e.proxiedFetcher(e.url, {
      headers: {
        Referer: e.url
      }
    });
    if (!t.sourceUrls[0]) throw new z("No watchable item found");
    const r = QE(t.sourceUrls[0]);
    if (!r.includes(".m3u8")) throw new Error("Failed to decode");
    const a = ((s = (n = t.subtitles) == null ? void 0 : n.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/g)) == null ? void 0 : s.map((i) => {
      const o = i.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/);
      if (o) {
        const [, d, c] = o;
        if (d && c) {
          const l = lt(d.replace(/ - .*/, "")), b = Ht(c);
          return !l || !b ? null : {
            id: c,
            url: c.replace(",", ""),
            language: l,
            type: b,
            hasCorsRestrictions: !1
          };
        }
      }
      return null;
    }).filter((i) => i !== null)) ?? [];
    return {
      stream: [
        {
          id: "primary",
          playlist: r,
          type: "hls",
          flags: [ae.CORS_ALLOWED],
          captions: a
        }
      ]
    };
  }
}), tc = ge({
  // the scraping logic for all smashystream embeds is the same
  // all the embeds can be added in the same way
  id: "smashystream-o",
  name: "SmashyStream (O)",
  rank: 70,
  async scrape(e) {
    return {
      stream: (await Ps.scrape(e)).stream
    };
  }
}), ZE = ge({
  id: "streamtape",
  name: "Streamtape",
  rank: 160,
  async scrape(e) {
    var i;
    const r = (await e.proxiedFetcher(e.url)).match(/robotlink'\).innerHTML = (.*)'/);
    if (!r) throw new Error("No match found");
    const [a, n] = ((i = r == null ? void 0 : r[1]) == null ? void 0 : i.split("+ ('")) ?? [];
    if (!a || !n) throw new Error("No match found");
    const s = `https:${a == null ? void 0 : a.replace(/'/g, "").trim()}${n == null ? void 0 : n.substring(3).trim()}`;
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [ae.CORS_ALLOWED, ae.IP_LOCKED],
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: s
            }
          },
          headers: {
            Referer: "https://streamtape.com"
          }
        }
      ]
    };
  }
}), JE = /(eval\(function\(p,a,c,k,e,d\).*\)\)\))/, eb = /src:"(https:\/\/[^"]+)"/, tb = ge({
  id: "streamvid",
  name: "Streamvid",
  rank: 215,
  async scrape(e) {
    const r = (await e.proxiedFetcher(e.url)).match(JE);
    if (!r) throw new Error("streamvid packed not found");
    const n = ft(r[1]).match(eb);
    if (!n) throw new Error("streamvid link not found");
    return {
      stream: [
        {
          type: "hls",
          id: "primary",
          playlist: n[1],
          flags: [ae.CORS_ALLOWED],
          captions: []
        }
      ]
    };
  }
}), rb = "WXrUARXb1aDLaZjI", ab = (e) => {
  const t = e.replace(/_/g, "/").replace(/-/g, "+"), r = atob(t), a = new Uint8Array(r.length);
  for (let n = 0; n < a.length; n += 1)
    a[n] = r.charCodeAt(n);
  return a;
}, es = (e, t) => {
  const r = Array.from(Array(256).keys());
  let a = 0;
  for (let i = 0; i < 256; i += 1) {
    a = (a + r[i] + e.charCodeAt(i % e.length)) % 256;
    const o = r[i];
    r[i] = r[a], r[a] = o;
  }
  a = 0;
  let n = 0, s = "";
  for (let i = 0; i < t.length; i += 1) {
    a = (a + 1) % 256, n = (n + r[a]) % 256;
    const o = r[a];
    r[a] = r[n], r[n] = o, typeof t[i] == "string" ? s += String.fromCharCode(t[i].charCodeAt(0) ^ r[(r[a] + r[n]) % 256]) : typeof t[i] == "number" && (s += String.fromCharCode(t[i] ^ r[(r[a] + r[n]) % 256]));
  }
  return s;
}, nb = (e) => {
  const t = ab(e), r = es(rb, t);
  return decodeURIComponent(decodeURIComponent(r));
}, rc = "https://vidplay.online", sb = async (e) => {
  var s;
  const t = await e.proxiedFetcher("https://github.com/Ciarands/vidsrc-keys/blob/main/keys.json"), r = /"rawLines":\s*\[([\s\S]*?)\]/, a = (s = t.match(r)) == null ? void 0 : s[1];
  if (!a) throw new Error("No keys found");
  return JSON.parse(`${a.substring(1).replace(/\\"/g, '"')}]`);
}, ib = async (e) => {
  const r = new URL(e.url).pathname.replace("/e/", ""), a = await sb(e), n = es(a[0], r), s = es(a[1], n);
  return btoa(s).replace("/", "_");
}, ub = async (e) => {
  var s;
  const t = await ib(e), a = (s = (await e.proxiedFetcher("/futoken", {
    baseUrl: rc,
    headers: {
      referer: e.url
    }
  })).match(/var\s+k\s*=\s*'([^']+)'/)) == null ? void 0 : s[1];
  if (!a) throw new Error("No fuKey found");
  const n = [];
  for (let i = 0; i < t.length; i += 1)
    n.push(a.charCodeAt(i % a.length) + t.charCodeAt(i));
  return `${a},${n.join(",")}`;
}, ob = async (e) => {
  const t = await ub(e);
  return rs(`/mediainfo/${t}`, {
    baseUrl: rc,
    query: {
      ...Object.fromEntries(new URL(e.url).searchParams.entries()),
      autostart: "true"
    }
  });
}, cb = ge({
  id: "vidplay",
  name: "VidPlay",
  rank: 401,
  scrape: async (e) => {
    const t = await ob(e), r = await e.proxiedFetcher(t, {
      headers: {
        referer: e.url
      }
    });
    if (typeof r.result == "number") throw new Error("File not found");
    const a = r.result.sources[0].file, n = r.result.tracks.find((c) => c.kind === "thumbnails");
    let s;
    n && (s = {
      type: "vtt",
      url: n.file
    });
    const i = new URL(e.url), o = i.searchParams.get("sub.info"), d = [];
    if (o) {
      const c = await e.proxiedFetcher(o);
      for (const l of c) {
        const b = lt(l.label), m = Ht(l.file);
        !b || !m || d.push({
          id: l.file,
          url: l.file,
          type: m,
          language: b,
          hasCorsRestrictions: !1
        });
      }
    }
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          playlist: a,
          flags: [ae.PROXY_BLOCKED],
          headers: {
            Referer: i.origin,
            Origin: i.origin
          },
          captions: d,
          thumbnailTrack: s
        }
      ]
    };
  }
});
async function db(e, t) {
  var s;
  const r = await e.proxiedFetcher("https://cloud.mail.ru/public/uaRH/2PYWcJRpH"), n = (s = /"videowl_view":\{"count":"(\d+)","url":"([^"]+)"\}/g.exec(r)) == null ? void 0 : s[2];
  if (!n) throw new z("Failed to get videoOwlUrl");
  return `${n}/0p/${btoa(t)}.m3u8?${new URLSearchParams({
    double_encode: "1"
  })}`;
}
const ac = ge({
  id: "warezcdnembedhls",
  // WarezCDN is both a source and an embed host
  name: "WarezCDN HLS",
  // method no longer works
  disabled: !0,
  rank: 83,
  async scrape(e) {
    const t = await u0(e);
    if (!t) throw new z("can't get file id");
    const r = await db(e, t);
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          flags: [ae.IP_LOCKED],
          captions: [],
          playlist: r
        }
      ]
    };
  }
}), nc = ge({
  id: "warezplayer",
  name: "warezPLAYER",
  rank: 85,
  async scrape(e) {
    const t = new URL(e.url), r = t.pathname.split("/")[2], a = await e.proxiedFetcher("/player/index.php", {
      baseUrl: t.origin,
      query: {
        data: r,
        do: "getVideo"
      },
      method: "POST",
      body: new URLSearchParams({
        hash: r
      }),
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }), n = JSON.parse(a);
    if (!n.videoSource) throw new Error("Playlist not found");
    return {
      stream: [
        {
          id: "primary",
          type: "hls",
          flags: [],
          captions: [],
          playlist: n.videoSource,
          headers: {
            // without this it returns "security error"
            Accept: "*/*"
          }
        }
      ]
    };
  }
}), lb = ge({
  id: "wootly",
  name: "wootly",
  rank: 172,
  async scrape(e) {
    var A, p;
    const t = "https://www.wootly.ch", r = await e.proxiedFetcher.full(e.url, {
      method: "GET",
      readHeaders: ["Set-Cookie"]
    }), n = Or(r.headers.get("Set-Cookie") || "").wootsses.value;
    let s = ie(r.body);
    const i = s("iframe").attr("src") ?? "", o = await e.proxiedFetcher.full(i, {
      method: "GET",
      readHeaders: ["Set-Cookie"],
      headers: {
        cookie: Dt({ wootsses: n })
      }
    }), c = Or(o.headers.get("Set-Cookie") || "").wooz.value, l = await e.proxiedFetcher(i, {
      method: "POST",
      body: new URLSearchParams({ qdf: "1" }),
      headers: {
        cookie: Dt({ wooz: c }),
        Referer: i
      }
    });
    s = ie(l);
    const b = s("script").html() ?? "", m = (A = b.match(/tk=([^;]+)/)) == null ? void 0 : A[0].replace(/tk=|["\s]/g, ""), f = (p = b.match(/vd=([^,]+)/)) == null ? void 0 : p[0].replace(/vd=|["\s]/g, "");
    if (!m || !f) throw new Error("wootly source not found");
    const E = await e.proxiedFetcher("/grabd", {
      baseUrl: t,
      query: { t: m, id: f },
      method: "GET",
      headers: {
        cookie: Dt({ wooz: c, wootsses: n })
      }
    });
    if (!E) throw new Error("wootly source not found");
    return {
      stream: [
        {
          id: "primary",
          type: "file",
          flags: [ae.IP_LOCKED],
          captions: [],
          qualities: {
            unknown: {
              type: "mp4",
              url: E
            }
          }
        }
      ]
    };
  }
}), Fs = "https://www.goojara.to", Rn = "https://ww1.goojara.to";
async function fb(e, t) {
  const r = await e.fetcher.full(`/${t}`, {
    baseUrl: Rn,
    headers: {
      Referer: Fs,
      cookie: ""
    },
    readHeaders: ["Set-Cookie"],
    method: "GET"
  }), a = Or(r.headers.get("Set-Cookie") || ""), n = r.body.split("_3chk('")[1].split("'")[0], s = r.body.split("_3chk('")[1].split("'")[2];
  let i = "", o = "";
  a && a.aGooz && n && s && (i = a.aGooz.value, o = Dt({
    aGooz: i,
    [n]: s
  }));
  const d = ie(r.body), c = d("a").map((m, f) => d(f).attr("href")).get().filter((m) => m && m.includes(`${Rn}/go.php`)), l = await Promise.all(
    c.map(
      (m) => e.fetcher.full(m, {
        headers: {
          cookie: o,
          Referer: Rn
        },
        method: "GET"
      }).catch(() => null)
      // Handle errors gracefully
    )
  ), b = [];
  for (const m of l)
    if (m) {
      const f = ["wootly", "upstream", "mixdrop", "dood"].find((E) => m.finalUrl.includes(E));
      f && b.push({ embedId: f, url: m.finalUrl });
    }
  return b;
}
let Ca;
const sc = {
  cookie: "aGooz=t9pmkdtef1b3lg3pmo1u2re816; bd9aa48e=0d7b89e8c79844e9df07a2; _b414=2151C6B12E2A88379AFF2C0DD65AC8298DEC2BF4; 9d287aaa=8f32ad589e1c4288fe152f",
  Referer: "https://www.goojara.to/"
};
async function hb(e, t) {
  Ca = await e.fetcher("/xhrr.php", {
    baseUrl: Fs,
    headers: sc,
    method: "POST",
    body: new URLSearchParams({ q: t.title })
  });
  const r = ie(Ca), a = [];
  return r(".mfeed > li").each((s, i) => {
    var f;
    const o = r(i).find("strong").text(), d = r(i).text().match(/\((\d{4})\)/), c = r(i).find("div").attr("class"), l = c === "it" ? "show" : c === "im" ? "movie" : "", b = d ? d[1] : "", m = (f = r(i).find("a").attr("href")) == null ? void 0 : f.split("/")[3];
    if (!m) throw new z("Not found");
    t.type === l && a.push({ title: o, year: b, slug: m, type: l });
  }), a.find((s) => Ye(t, s.title, Number(s.year)));
}
async function mb(e, t, r) {
  let a = null;
  if (t.type === "movie")
    a = r.slug;
  else if (t.type === "show") {
    Ca = await e.fetcher(`/${r.slug}`, {
      baseUrl: Fs,
      headers: sc,
      method: "GET",
      query: { s: t.season.number.toString() }
    });
    let s = "";
    const i = ie(Ca);
    i(".seho").each((o, d) => {
      const c = i(d).find(".seep .sea").text().trim();
      if (parseInt(c, 10) === t.episode.number) {
        const l = i(d).find(".snfo h1 a").attr("href"), b = l == null ? void 0 : l.match(/\/([a-zA-Z0-9]+)$/);
        if (b && b[1])
          return s = b[1], !1;
      }
    }), a = s;
  }
  if (a === null) throw new z("Not found");
  return await fb(e, a);
}
async function Fu(e) {
  const t = await hb(e, e.media);
  if (!t) throw new z("Media not found");
  e.progress(30);
  const r = await mb(e, e.media, t);
  if ((r == null ? void 0 : r.length) === 0) throw new z("No embeds found");
  return e.progress(60), {
    embeds: r
  };
}
const pb = Ie({
  id: "goojara",
  name: "Goojara",
  rank: 180,
  flags: [],
  disabled: !0,
  scrapeShow: Fu,
  scrapeMovie: Fu
});
function Eb() {
  const e = () => Math.floor(Math.random() * 16).toString(16), t = (r) => Array.from({ length: r }, e).join("");
  return `${t(8)}-${t(4)}-${t(4)}-${t(4)}-${t(
    12
  )}`;
}
function bb(e) {
  if (!e || typeof e == "boolean") return [];
  const t = e.split(","), r = [];
  return t.forEach((a) => {
    const n = a.match(/\[([^\]]+)\](https?:\/\/\S+?)(?=,\[|$)/);
    if (n) {
      const s = Ht(n[2]), i = lt(n[1]);
      if (!s || !i) return;
      r.push({
        id: n[2],
        language: i,
        hasCorsRestrictions: !1,
        type: s,
        url: n[2]
      });
    }
  }), r;
}
function Tb(e) {
  if (!e) throw new z("No video links found");
  const t = e.split(","), r = {};
  return t.forEach((a) => {
    const n = a.match(/\[([^]+)](https?:\/\/[^\s,]+\.mp4)/);
    if (n) {
      const s = n[1], i = n[2], o = s.match(/(\d+p)/), d = o ? o[1] : "Unknown", c = Bs(d);
      r[c] = { type: "mp4", url: i };
    }
  }), r;
}
function xb(e) {
  const t = /^(.*?),.*?(\d{4})/, r = e.match(t);
  if (r) {
    const a = r[1], n = r[2];
    return { title: a.trim(), year: n ? parseInt(n, 10) : null };
  }
  return null;
}
const ic = "https://hdrezka.ag/", ks = {
  "X-Hdrezka-Android-App": "1",
  "X-Hdrezka-Android-App-Version": "2.2.0"
};
async function gb(e) {
  var i;
  const t = /<a href="([^"]+)"><span class="enty">([^<]+)<\/span> \(([^)]+)\)/g, r = /\/(\d+)-[^/]+\.html$/, a = await e.proxiedFetcher("/engine/ajax/search.php", {
    baseUrl: ic,
    headers: ks,
    query: { q: e.media.title }
  }), n = [];
  for (const o of a.matchAll(t)) {
    const d = o[1], c = o[3], l = xb(c);
    if (l !== null) {
      const b = ((i = d.match(r)) == null ? void 0 : i[1]) || null;
      n.push({ id: b ?? "", year: l.year ?? 0, type: e.media.type, url: d });
    }
  }
  return n.filter((o) => o.type === e.media.type && o.year === e.media.releaseYear)[0] || null;
}
async function Ab(e, t, r) {
  const a = new URLSearchParams();
  a.append("id", e), a.append("translator_id", t), r.media.type === "show" && (a.append("season", r.media.season.number.toString()), a.append("episode", r.media.episode.number.toString())), r.media.type === "movie" && (a.append("is_camprip", "0"), a.append("is_ads", "0"), a.append("is_director", "0")), a.append("favs", Eb()), a.append("action", r.media.type === "show" ? "get_stream" : "get_movie");
  const n = await r.proxiedFetcher("/ajax/get_cdn_series/", {
    baseUrl: ic,
    method: "POST",
    body: a,
    headers: ks
  });
  return JSON.parse(n);
}
async function Cb(e, t, r) {
  const a = await r.proxiedFetcher(e, {
    headers: ks
  });
  if (a.includes('data-translator_id="238"')) return "238";
  const n = r.media.type === "movie" ? "initCDNMoviesEvents" : "initCDNSeriesEvents", s = new RegExp(`sof\\.tv\\.${n}\\(${t}, ([^,]+)`, "i"), i = a.match(s);
  return i ? i[1] : null;
}
const ku = async (e) => {
  const t = await gb(e);
  if (!t || !t.id) throw new z("No result found");
  const r = await Cb(t.url, t.id, e);
  if (!r) throw new z("No translator id found");
  const { url: a, subtitle: n } = await Ab(t.id, r, e), s = Tb(a), i = bb(n);
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        type: "file",
        flags: [ae.CORS_ALLOWED, ae.IP_LOCKED],
        captions: i,
        qualities: s
      }
    ]
  };
}, _b = Ie({
  id: "hdrezka",
  name: "HDRezka",
  rank: 190,
  flags: [ae.CORS_ALLOWED, ae.IP_LOCKED],
  scrapeShow: ku,
  scrapeMovie: ku
});
let Kt = "https://m4ufree.se";
const Mu = async (e) => {
  var f, E, A, p;
  const t = await e.proxiedFetcher.full(Kt);
  Kt = new URL(t.finalUrl).origin;
  const r = e.media.title.replace(/'/g, "").replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'| |"|&|#|\[|\]|~|$|_/g, "-").replace(/-+-/g, "-").replace(/^-+|-+$/g, "").replace(/Ă¢â‚¬â€œ/g, ""), a = ie(
    await e.proxiedFetcher(`/search/${r}.html`, {
      baseUrl: Kt,
      query: {
        type: e.media.type === "movie" ? "movie" : "tvs"
      }
    })
  ), n = [];
  a(".item").each((C, h) => {
    var L;
    const [, _, v] = ((L = a(h).find(".imagecover a").attr("title")) == null ? void 0 : L.match(/^(.*?)\s*(?:\(?\s*(\d{4})(?:\s*-\s*\d{0,4})?\s*\)?)?\s*$/)) || [], w = a(h).find("a").attr("href");
    !_ || !w || n.push({ title: _, year: v ? parseInt(v, 10) : void 0, url: w });
  });
  const s = (f = n.find((C) => C && Ye(e.media, C.title, C.year))) == null ? void 0 : f.url;
  if (!s) throw new z("No watchable item found");
  e.progress(25);
  const i = await e.proxiedFetcher.full(s, {
    baseUrl: Kt,
    readHeaders: ["Set-Cookie"]
  });
  e.progress(50);
  let o = ie(i.body);
  const d = (A = (E = o('script:contains("_token:")').html()) == null ? void 0 : E.match(/_token:\s?'(.*)'/m)) == null ? void 0 : A[1];
  if (!d) throw new Error("Failed to find csrfToken");
  const c = Or(i.headers.get("Set-Cookie") ?? "").laravel_session;
  if (!(c != null && c.value)) throw new Error("Failed to find cookie");
  const l = Dt({ [c.name]: c.value });
  if (e.media.type === "show") {
    const C = e.media.season.number < 10 ? `0${e.media.season.number}` : e.media.season.number.toString(), h = e.media.episode.number < 10 ? `0${e.media.episode.number}` : e.media.episode.number.toString(), _ = o(`button:contains("S${C}-E${h}")`).attr("idepisode");
    if (!_) throw new Error("Failed to find episodeToken");
    o = ie(
      await e.proxiedFetcher("/ajaxtv", {
        baseUrl: Kt,
        method: "POST",
        body: new URLSearchParams({
          idepisode: _,
          _token: d
        }),
        headers: {
          cookie: l
        }
      })
    );
  }
  e.progress(75);
  const b = [], m = o("div.row.justify-content-md-center div.le-server").map((C, h) => {
    const _ = o(h).find("span").text().toLowerCase().replace("#", ""), v = o(h).find("span").attr("data");
    return !v || !_ ? null : { name: _, data: v };
  }).get();
  for (const C of m) {
    let h;
    if (C.name === "m")
      h = "playm4u-m";
    else if (C.name === "nm") h = "playm4u-nm";
    else if (C.name === "h") h = "hydrax";
    else continue;
    const v = (p = ie(
      await e.proxiedFetcher("/ajax", {
        baseUrl: Kt,
        method: "POST",
        body: new URLSearchParams({
          m4u: C.data,
          _token: d
        }),
        headers: {
          cookie: l
        }
      })
    )("iframe").attr("src")) == null ? void 0 : p.trim();
    v && (e.progress(100), b.push({ embedId: h, url: v }));
  }
  return {
    embeds: b
  };
}, Sb = Ie({
  id: "m4ufree",
  name: "M4UFree",
  rank: 200,
  disabled: !0,
  flags: [],
  scrapeMovie: Mu,
  scrapeShow: Mu
}), hr = "https://rar.to", yb = "https://rar.to/", Uu = async (e) => {
  const t = await e.proxiedFetcher("/ajax/posts", {
    baseUrl: hr,
    query: {
      q: e.media.title
    }
  }), a = JSON.parse(t).data.find((l) => {
    if (!l || e.media.type === "movie" && l.type !== "Movie" || e.media.type === "show" && l.type !== "Show") return !1;
    const [, b, m] = l.name.match(/^(.*?)\s*(?:\(?\s*(\d{4})(?:\s*-\s*\d{0,4})?\s*\)?)?\s*$/) || [];
    return Ye(e.media, b, Number(m));
  });
  if (!a) throw new z("No watchable item found");
  let n = a.url;
  e.media.type === "show" && (n = `${a.url}/season/${e.media.season.number}/episode/${e.media.episode.number}`);
  const s = await e.proxiedFetcher(n, {
    baseUrl: hr
  }), o = ie(s)("a[data-embed]").attr("data-embed");
  if (!o) throw new z("No embed found.");
  const c = (await e.proxiedFetcher("/ajax/embed", {
    method: "POST",
    baseUrl: hr,
    body: new URLSearchParams({ id: o })
  })).match(/"file":"([^"]+)"/);
  if (!(c != null && c[1])) throw new z("No stream found.");
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        captions: [],
        playlist: hr + c[1],
        type: "hls",
        headers: {
          Origin: hr,
          Referer: yb
        },
        flags: []
      }
    ]
  };
}, Nb = Ie({
  id: "nepu",
  name: "Nepu",
  disabled: !0,
  rank: 210,
  flags: [],
  scrapeMovie: Uu,
  scrapeShow: Uu
}), Ib = "https://w1.nites.is";
async function Hu(e) {
  var c;
  const t = await e.proxiedFetcher("/wp-admin/admin-ajax.php", {
    baseUrl: Ib,
    method: "POST",
    body: new URLSearchParams({
      action: "ajax_pagination",
      query_vars: "mixed",
      search: e.media.title
    })
  }), r = ie(t), a = [];
  r("li").each((l, b) => {
    const m = r(b).find(".entry-title").first().text().trim(), f = parseInt(r(b).find(".year").first().text().trim(), 10), E = r(b).find(".lnk-blk").attr("href");
    !m || !f || !E || a.push({ title: m, year: f, url: E });
  });
  let n = (c = a.find((l) => l && Ye(e.media, l.title, l.year))) == null ? void 0 : c.url;
  if (!n) throw new z("No watchable item found");
  if (e.media.type === "show") {
    const l = n.match(/\/series\/([^/]+)\/?/);
    if (!l) throw new Error("Failed to parse watch page url");
    n = n.replace(
      `/series/${l[1]}`,
      `/episode/${l[1]}-${e.media.season.number}x${e.media.episode.number}`
    );
  }
  const i = ie(await e.proxiedFetcher(n))('ul.bx-lst li a:contains("- Bflix")').closest("aside").next("div.video-options").find("iframe").attr("data-lazy-src");
  if (!i) throw new Error("Failed to find embed url");
  const d = ie(await e.proxiedFetcher(i))("iframe").attr("src");
  if (!d) throw new Error("Failed to find embed url");
  return {
    embeds: [
      {
        embedId: "bflix",
        url: d
      }
    ]
  };
}
const vb = Ie({
  id: "nites",
  name: "Nites",
  disabled: !0,
  rank: 80,
  flags: [],
  scrapeMovie: Hu,
  scrapeShow: Hu
}), Cr = "https://www.primewire.tf", Db = atob("bHpRUHNYU0tjRw=="), Ob = [
  608135816,
  2242054355,
  320440878,
  57701188,
  2752067618,
  698298832,
  137296536,
  3964562569,
  1160258022,
  953160567,
  3193202383,
  887688300,
  3232508343,
  3380367581,
  1065670069,
  3041331479,
  2450970073,
  2306472731
], Rb = [
  3509652390,
  2564797868,
  805139163,
  3491422135,
  3101798381,
  1780907670,
  3128725573,
  4046225305,
  614570311,
  3012652279,
  134345442,
  2240740374,
  1667834072,
  1901547113,
  2757295779,
  4103290238,
  227898511,
  1921955416,
  1904987480,
  2182433518,
  2069144605,
  3260701109,
  2620446009,
  720527379,
  3318853667,
  677414384,
  3393288472,
  3101374703,
  2390351024,
  1614419982,
  1822297739,
  2954791486,
  3608508353,
  3174124327,
  2024746970,
  1432378464,
  3864339955,
  2857741204,
  1464375394,
  1676153920,
  1439316330,
  715854006,
  3033291828,
  289532110,
  2706671279,
  2087905683,
  3018724369,
  1668267050,
  732546397,
  1947742710,
  3462151702,
  2609353502,
  2950085171,
  1814351708,
  2050118529,
  680887927,
  999245976,
  1800124847,
  3300911131,
  1713906067,
  1641548236,
  4213287313,
  1216130144,
  1575780402,
  4018429277,
  3917837745,
  3693486850,
  3949271944,
  596196993,
  3549867205,
  258830323,
  2213823033,
  772490370,
  2760122372,
  1774776394,
  2652871518,
  566650946,
  4142492826,
  1728879713,
  2882767088,
  1783734482,
  3629395816,
  2517608232,
  2874225571,
  1861159788,
  326777828,
  3124490320,
  2130389656,
  2716951837,
  967770486,
  1724537150,
  2185432712,
  2364442137,
  1164943284,
  2105845187,
  998989502,
  3765401048,
  2244026483,
  1075463327,
  1455516326,
  1322494562,
  910128902,
  469688178,
  1117454909,
  936433444,
  3490320968,
  3675253459,
  1240580251,
  122909385,
  2157517691,
  634681816,
  4142456567,
  3825094682,
  3061402683,
  2540495037,
  79693498,
  3249098678,
  1084186820,
  1583128258,
  426386531,
  1761308591,
  1047286709,
  322548459,
  995290223,
  1845252383,
  2603652396,
  3431023940,
  2942221577,
  3202600964,
  3727903485,
  1712269319,
  422464435,
  3234572375,
  1170764815,
  3523960633,
  3117677531,
  1434042557,
  442511882,
  3600875718,
  1076654713,
  1738483198,
  4213154764,
  2393238008,
  3677496056,
  1014306527,
  4251020053,
  793779912,
  2902807211,
  842905082,
  4246964064,
  1395751752,
  1040244610,
  2656851899,
  3396308128,
  445077038,
  3742853595,
  3577915638,
  679411651,
  2892444358,
  2354009459,
  1767581616,
  3150600392,
  3791627101,
  3102740896,
  284835224,
  4246832056,
  1258075500,
  768725851,
  2589189241,
  3069724005,
  3532540348,
  1274779536,
  3789419226,
  2764799539,
  1660621633,
  3471099624,
  4011903706,
  913787905,
  3497959166,
  737222580,
  2514213453,
  2928710040,
  3937242737,
  1804850592,
  3499020752,
  2949064160,
  2386320175,
  2390070455,
  2415321851,
  4061277028,
  2290661394,
  2416832540,
  1336762016,
  1754252060,
  3520065937,
  3014181293,
  791618072,
  3188594551,
  3933548030,
  2332172193,
  3852520463,
  3043980520,
  413987798,
  3465142937,
  3030929376,
  4245938359,
  2093235073,
  3534596313,
  375366246,
  2157278981,
  2479649556,
  555357303,
  3870105701,
  2008414854,
  3344188149,
  4221384143,
  3956125452,
  2067696032,
  3594591187,
  2921233993,
  2428461,
  544322398,
  577241275,
  1471733935,
  610547355,
  4027169054,
  1432588573,
  1507829418,
  2025931657,
  3646575487,
  545086370,
  48609733,
  2200306550,
  1653985193,
  298326376,
  1316178497,
  3007786442,
  2064951626,
  458293330,
  2589141269,
  3591329599,
  3164325604,
  727753846,
  2179363840,
  146436021,
  1461446943,
  4069977195,
  705550613,
  3059967265,
  3887724982,
  4281599278,
  3313849956,
  1404054877,
  2845806497,
  146425753,
  1854211946
], wb = [
  1266315497,
  3048417604,
  3681880366,
  3289982499,
  290971e4,
  1235738493,
  2632868024,
  2414719590,
  3970600049,
  1771706367,
  1449415276,
  3266420449,
  422970021,
  1963543593,
  2690192192,
  3826793022,
  1062508698,
  1531092325,
  1804592342,
  2583117782,
  2714934279,
  4024971509,
  1294809318,
  4028980673,
  1289560198,
  2221992742,
  1669523910,
  35572830,
  157838143,
  1052438473,
  1016535060,
  1802137761,
  1753167236,
  1386275462,
  3080475397,
  2857371447,
  1040679964,
  2145300060,
  2390574316,
  1461121720,
  2956646967,
  4031777805,
  4028374788,
  33600511,
  2920084762,
  1018524850,
  629373528,
  3691585981,
  3515945977,
  2091462646,
  2486323059,
  586499841,
  988145025,
  935516892,
  3367335476,
  2599673255,
  2839830854,
  265290510,
  3972581182,
  2759138881,
  3795373465,
  1005194799,
  847297441,
  406762289,
  1314163512,
  1332590856,
  1866599683,
  4127851711,
  750260880,
  613907577,
  1450815602,
  3165620655,
  3734664991,
  3650291728,
  3012275730,
  3704569646,
  1427272223,
  778793252,
  1343938022,
  2676280711,
  2052605720,
  1946737175,
  3164576444,
  3914038668,
  3967478842,
  3682934266,
  1661551462,
  3294938066,
  4011595847,
  840292616,
  3712170807,
  616741398,
  312560963,
  711312465,
  1351876610,
  322626781,
  1910503582,
  271666773,
  2175563734,
  1594956187,
  70604529,
  3617834859,
  1007753275,
  1495573769,
  4069517037,
  2549218298,
  2663038764,
  504708206,
  2263041392,
  3941167025,
  2249088522,
  1514023603,
  1998579484,
  1312622330,
  694541497,
  2582060303,
  2151582166,
  1382467621,
  776784248,
  2618340202,
  3323268794,
  2497899128,
  2784771155,
  503983604,
  4076293799,
  907881277,
  423175695,
  432175456,
  1378068232,
  4145222326,
  3954048622,
  3938656102,
  3820766613,
  2793130115,
  2977904593,
  26017576,
  3274890735,
  3194772133,
  1700274565,
  1756076034,
  4006520079,
  3677328699,
  720338349,
  1533947780,
  354530856,
  688349552,
  3973924725,
  1637815568,
  332179504,
  3949051286,
  53804574,
  2852348879,
  3044236432,
  1282449977,
  3583942155,
  3416972820,
  4006381244,
  1617046695,
  2628476075,
  3002303598,
  1686838959,
  431878346,
  2686675385,
  1700445008,
  1080580658,
  1009431731,
  832498133,
  3223435511,
  2605976345,
  2271191193,
  2516031870,
  1648197032,
  4164389018,
  2548247927,
  300782431,
  375919233,
  238389289,
  3353747414,
  2531188641,
  2019080857,
  1475708069,
  455242339,
  2609103871,
  448939670,
  3451063019,
  1395535956,
  2413381860,
  1841049896,
  1491858159,
  885456874,
  4264095073,
  4001119347,
  1565136089,
  3898914787,
  1108368660,
  540939232,
  1173283510,
  2745871338,
  3681308437,
  4207628240,
  3343053890,
  4016749493,
  1699691293,
  1103962373,
  3625875870,
  2256883143,
  3830138730,
  1031889488,
  3479347698,
  1535977030,
  4236805024,
  3251091107,
  2132092099,
  1774941330,
  1199868427,
  1452454533,
  157007616,
  2904115357,
  342012276,
  595725824,
  1480756522,
  206960106,
  497939518,
  591360097,
  863170706,
  2375253569,
  3596610801,
  1814182875,
  2094937945,
  3421402208,
  1082520231,
  3463918190,
  2785509508,
  435703966,
  3908032597,
  1641649973,
  2842273706,
  3305899714,
  1510255612,
  2148256476,
  2655287854,
  3276092548,
  4258621189,
  236887753,
  3681803219,
  274041037,
  1734335097,
  3815195456,
  3317970021,
  1899903192,
  1026095262,
  4050517792,
  356393447,
  2410691914,
  3873677099,
  3682840055
], Lb = [
  3913112168,
  2491498743,
  4132185628,
  2489919796,
  1091903735,
  1979897079,
  3170134830,
  3567386728,
  3557303409,
  857797738,
  1136121015,
  1342202287,
  507115054,
  2535736646,
  337727348,
  3213592640,
  1301675037,
  2528481711,
  1895095763,
  1721773893,
  3216771564,
  62756741,
  2142006736,
  835421444,
  2531993523,
  1442658625,
  3659876326,
  2882144922,
  676362277,
  1392781812,
  170690266,
  3921047035,
  1759253602,
  3611846912,
  1745797284,
  664899054,
  1329594018,
  3901205900,
  3045908486,
  2062866102,
  2865634940,
  3543621612,
  3464012697,
  1080764994,
  553557557,
  3656615353,
  3996768171,
  991055499,
  499776247,
  1265440854,
  648242737,
  3940784050,
  980351604,
  3713745714,
  1749149687,
  3396870395,
  4211799374,
  3640570775,
  1161844396,
  3125318951,
  1431517754,
  545492359,
  4268468663,
  3499529547,
  1437099964,
  2702547544,
  3433638243,
  2581715763,
  2787789398,
  1060185593,
  1593081372,
  2418618748,
  4260947970,
  69676912,
  2159744348,
  86519011,
  2512459080,
  3838209314,
  1220612927,
  3339683548,
  133810670,
  1090789135,
  1078426020,
  1569222167,
  845107691,
  3583754449,
  4072456591,
  1091646820,
  628848692,
  1613405280,
  3757631651,
  526609435,
  236106946,
  48312990,
  2942717905,
  3402727701,
  1797494240,
  859738849,
  992217954,
  4005476642,
  2243076622,
  3870952857,
  3732016268,
  765654824,
  3490871365,
  2511836413,
  1685915746,
  3888969200,
  1414112111,
  2273134842,
  3281911079,
  4080962846,
  172450625,
  2569994100,
  980381355,
  4109958455,
  2819808352,
  2716589560,
  2568741196,
  3681446669,
  3329971472,
  1835478071,
  660984891,
  3704678404,
  4045999559,
  3422617507,
  3040415634,
  1762651403,
  1719377915,
  3470491036,
  2693910283,
  3642056355,
  3138596744,
  1364962596,
  2073328063,
  1983633131,
  926494387,
  3423689081,
  2150032023,
  4096667949,
  1749200295,
  3328846651,
  309677260,
  2016342300,
  1779581495,
  3079819751,
  111262694,
  1274766160,
  443224088,
  298511866,
  1025883608,
  3806446537,
  1145181785,
  168956806,
  3641502830,
  3584813610,
  1689216846,
  3666258015,
  3200248200,
  1692713982,
  2646376535,
  4042768518,
  1618508792,
  1610833997,
  3523052358,
  4130873264,
  2001055236,
  3610705100,
  2202168115,
  4028541809,
  2961195399,
  1006657119,
  2006996926,
  3186142756,
  1430667929,
  3210227297,
  1314452623,
  4074634658,
  4101304120,
  2273951170,
  1399257539,
  3367210612,
  3027628629,
  1190975929,
  2062231137,
  2333990788,
  2221543033,
  2438960610,
  1181637006,
  548689776,
  2362791313,
  3372408396,
  3104550113,
  3145860560,
  296247880,
  1970579870,
  3078560182,
  3769228297,
  1714227617,
  3291629107,
  3898220290,
  166772364,
  1251581989,
  493813264,
  448347421,
  195405023,
  2709975567,
  677966185,
  3703036547,
  1463355134,
  2715995803,
  1338867538,
  1343315457,
  2802222074,
  2684532164,
  233230375,
  2599980071,
  2000651841,
  3277868038,
  1638401717,
  4028070440,
  3237316320,
  6314154,
  819756386,
  300326615,
  590932579,
  1405279636,
  3267499572,
  3150704214,
  2428286686,
  3959192993,
  3461946742,
  1862657033,
  1266418056,
  963775037,
  2089974820,
  2263052895,
  1917689273,
  448879540,
  3550394620,
  3981727096,
  150775221,
  3627908307,
  1303187396,
  508620638,
  2975983352,
  2726630617,
  1817252668,
  1876281319,
  1457606340,
  908771278,
  3720792119,
  3617206836,
  2455994898,
  1729034894,
  1080033504
], Bb = [
  976866871,
  3556439503,
  2881648439,
  1522871579,
  1555064734,
  1336096578,
  3548522304,
  2579274686,
  3574697629,
  3205460757,
  3593280638,
  3338716283,
  3079412587,
  564236357,
  2993598910,
  1781952180,
  1464380207,
  3163844217,
  3332601554,
  1699332808,
  1393555694,
  1183702653,
  3581086237,
  1288719814,
  691649499,
  2847557200,
  2895455976,
  3193889540,
  2717570544,
  1781354906,
  1676643554,
  2592534050,
  3230253752,
  1126444790,
  2770207658,
  2633158820,
  2210423226,
  2615765581,
  2414155088,
  3127139286,
  673620729,
  2805611233,
  1269405062,
  4015350505,
  3341807571,
  4149409754,
  1057255273,
  2012875353,
  2162469141,
  2276492801,
  2601117357,
  993977747,
  3918593370,
  2654263191,
  753973209,
  36408145,
  2530585658,
  25011837,
  3520020182,
  2088578344,
  530523599,
  2918365339,
  1524020338,
  1518925132,
  3760827505,
  3759777254,
  1202760957,
  3985898139,
  3906192525,
  674977740,
  4174734889,
  2031300136,
  2019492241,
  3983892565,
  4153806404,
  3822280332,
  352677332,
  2297720250,
  60907813,
  90501309,
  3286998549,
  1016092578,
  2535922412,
  2839152426,
  457141659,
  509813237,
  4120667899,
  652014361,
  1966332200,
  2975202805,
  55981186,
  2327461051,
  676427537,
  3255491064,
  2882294119,
  3433927263,
  1307055953,
  942726286,
  933058658,
  2468411793,
  3933900994,
  4215176142,
  1361170020,
  2001714738,
  2830558078,
  3274259782,
  1222529897,
  1679025792,
  2729314320,
  3714953764,
  1770335741,
  151462246,
  3013232138,
  1682292957,
  1483529935,
  471910574,
  1539241949,
  458788160,
  3436315007,
  1807016891,
  3718408830,
  978976581,
  1043663428,
  3165965781,
  1927990952,
  4200891579,
  2372276910,
  3208408903,
  3533431907,
  1412390302,
  2931980059,
  4132332400,
  1947078029,
  3881505623,
  4168226417,
  2941484381,
  1077988104,
  1320477388,
  886195818,
  18198404,
  3786409e3,
  2509781533,
  112762804,
  3463356488,
  1866414978,
  891333506,
  18488651,
  661792760,
  1628790961,
  3885187036,
  3141171499,
  876946877,
  2693282273,
  1372485963,
  791857591,
  2686433993,
  3759982718,
  3167212022,
  3472953795,
  2716379847,
  445679433,
  3561995674,
  3504004811,
  3574258232,
  54117162,
  3331405415,
  2381918588,
  3769707343,
  4154350007,
  1140177722,
  4074052095,
  668550556,
  3214352940,
  367459370,
  261225585,
  2610173221,
  4209349473,
  3468074219,
  3265815641,
  314222801,
  3066103646,
  3808782860,
  282218597,
  3406013506,
  3773591054,
  379116347,
  1285071038,
  846784868,
  2669647154,
  3771962079,
  3550491691,
  2305946142,
  453669953,
  1268987020,
  3317592352,
  3279303384,
  3744833421,
  2610507566,
  3859509063,
  266596637,
  3847019092,
  517658769,
  3462560207,
  3443424879,
  370717030,
  4247526661,
  2224018117,
  4143653529,
  4112773975,
  2788324899,
  2477274417,
  1456262402,
  2901442914,
  1517677493,
  1846949527,
  2295493580,
  3734397586,
  2176403920,
  1280348187,
  1908823572,
  3871786941,
  846861322,
  1172426758,
  3287448474,
  3383383037,
  1655181056,
  3139813346,
  901632758,
  1897031941,
  2986607138,
  3066810236,
  3447102507,
  1393639104,
  373351379,
  950779232,
  625454576,
  3124240540,
  4148612726,
  2007998917,
  544563296,
  2244738638,
  2330496472,
  2058025392,
  1291430526,
  424198748,
  50039436,
  29584100,
  3605783033,
  2429876329,
  2791104160,
  1057563949,
  3255363231,
  3075367218,
  3463963227,
  1469046755,
  985887462
];
class Pb {
  constructor(t) {
    this.sBox0 = Rb.slice(), this.sBox1 = wb.slice(), this.sBox2 = Lb.slice(), this.sBox3 = Bb.slice(), this.pArray = Ob.slice(), this.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.iv = "abc12345", this.generateSubkeys(t);
  }
  encrypt(t) {
    const r = this.utf8Decode(t);
    let a = "";
    const n = 8, s = "\0", i = Math.ceil(t.length / n);
    for (let o = 0; o < i; o++) {
      let d = r.substr(n * o, n);
      d.length < n && (d += s.repeat(n - d.length));
      let [c, l] = this.split64by32(d);
      [c, l] = this.encipher(c, l), a += this.num2block32(c) + this.num2block32(l);
    }
    return a;
  }
  decrypt(t) {
    const r = Math.ceil(t.length / 8);
    let a = "";
    for (let n = 0; n < r; n++) {
      const s = t.substr(8 * n, 8);
      if (s.length < 8)
        throw new Error("Invalid block size");
      const [i, o] = this.split64by32(s), [d, c] = this.decipher(i, o);
      a += this.num2block32(d) + this.num2block32(c);
    }
    return this.utf8Encode(a);
  }
  substitute(t) {
    const r = t >>> 24, a = t << 8 >>> 24, n = t << 16 >>> 24, s = t << 24 >>> 24;
    let i = this.addMod32(this.sBox0[r], this.sBox1[a]);
    return i = this.xor(i, this.sBox2[n]), i = this.addMod32(i, this.sBox3[s]), i;
  }
  /* eslint-disable */
  encipher(t, r) {
    for (var a, n = 0; n < 16; n++)
      a = t = this.xor(t, this.pArray[n]), t = r = this.xor(this.substitute(t), r), r = a;
    return a = t, t = r, r = a, r = this.xor(r, this.pArray[16]), [t = this.xor(t, this.pArray[17]), r];
  }
  /* eslint-enable */
  decipher(t, r) {
    let a, n = t, s = r;
    a = this.xor(n, this.pArray[17]), n = this.xor(s, this.pArray[16]), s = a;
    for (let i = 15; i >= 0; i--)
      a = n, n = s, s = a, s = this.xor(this.substitute(n), s), n = this.xor(n, this.pArray[i]);
    return [n, s];
  }
  generateSubkeys(t) {
    let r, a = 0, n = 0;
    for (let i = 0; i < 18; i++) {
      r = 0;
      for (let o = 0; o < 4; o++)
        r = this.fixNegative(r << 8 | t.charCodeAt(a)), a = (a + 1) % t.length;
      this.pArray[n] = this.xor(this.pArray[n], r), n++;
    }
    let s = [0, 0];
    for (let i = 0; i < 18; i += 2)
      s = this.encipher(s[0], s[1]), this.pArray[i] = s[0], this.pArray[i + 1] = s[1];
    for (let i = 0; i < 256; i += 2)
      s = this.encipher(s[0], s[1]), this.sBox0[i] = s[0], this.sBox0[i + 1] = s[1];
    for (let i = 0; i < 256; i += 2)
      s = this.encipher(s[0], s[1]), this.sBox1[i] = s[0], this.sBox1[i + 1] = s[1];
    for (let i = 0; i < 256; i += 2)
      s = this.encipher(s[0], s[1]), this.sBox2[i] = s[0], this.sBox2[i + 1] = s[1];
    for (let i = 0; i < 256; i += 2)
      s = this.encipher(s[0], s[1]), this.sBox3[i] = s[0], this.sBox3[i + 1] = s[1];
  }
  block32toNum(t) {
    return this.fixNegative(
      t.charCodeAt(0) << 24 | t.charCodeAt(1) << 16 | t.charCodeAt(2) << 8 | t.charCodeAt(3)
    );
  }
  num2block32(t) {
    return String.fromCharCode(t >>> 24) + String.fromCharCode(t << 8 >>> 24) + String.fromCharCode(t << 16 >>> 24) + String.fromCharCode(t << 24 >>> 24);
  }
  xor(t, r) {
    return this.fixNegative(t ^ r);
  }
  addMod32(t, r) {
    return this.fixNegative(t + r | 0);
  }
  fixNegative(t) {
    return t >>> 0;
  }
  split64by32(t) {
    const r = t.substring(0, 4), a = t.substring(4, 8);
    return [this.block32toNum(r), this.block32toNum(a)];
  }
  utf8Decode(t) {
    let r = "";
    for (let a = 0; a < t.length; a++) {
      const n = t.charCodeAt(a);
      if (n < 128)
        r += String.fromCharCode(n);
      else if (n > 127 && n < 2048) {
        const s = n >> 6 | 192, i = 63 & n | 128;
        r += String.fromCharCode(s, i);
      } else {
        const s = n >> 12 | 224, i = n >> 6 & 63 | 128, o = 63 & n | 128;
        r += String.fromCharCode(s, i, o);
      }
    }
    return r;
  }
  utf8Encode(t) {
    let r = "", a;
    for (let n = 0; n < t.length; n++)
      if (a = t.charCodeAt(n), a < 128)
        r += String.fromCharCode(a);
      else if (a > 191 && a < 224) {
        const s = t.charCodeAt(n + 1);
        r += String.fromCharCode((31 & a) << 6 | 63 & s), n += 1;
      } else {
        const s = t.charCodeAt(n + 1), i = t.charCodeAt(n + 2);
        r += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | 63 & i), n += 2;
      }
    return r;
  }
  base64(t) {
    let r, a, n, s, i, o, d = "", c = 0;
    const l = t.replace(/[^A-Za-z0-9\\+\\/=]/g, "");
    for (; c < l.length; )
      r = this.keyStr.indexOf(l.charAt(c++)) << 2 | (s = this.keyStr.indexOf(l.charAt(c++))) >> 4, a = (15 & s) << 4 | (i = this.keyStr.indexOf(l.charAt(c++))) >> 2, n = (3 & i) << 6 | (o = this.keyStr.indexOf(l.charAt(c++))), d += String.fromCharCode(r), i !== 64 && (d += String.fromCharCode(a)), o !== 64 && (d += String.fromCharCode(n));
    return d;
  }
}
function Fb(e) {
  const t = e.slice(-10), r = e.slice(0, -10), a = new Pb(t), n = a.decrypt(a.base64(r)).match(/.{1,5}/g);
  if (n)
    return n;
  throw new Error("No links found");
}
async function Xu(e, t) {
  return (await e.proxiedFetcher("/api/v1/show/", {
    baseUrl: Cr,
    query: {
      key: Db,
      imdb_id: t
    }
  })).id;
}
async function qu(e) {
  const t = ie(e), r = t("#user-data").attr("v");
  if (!r) throw new z("No user data found");
  const a = Fb(r), n = [];
  if (!a) throw new z("No links found");
  for (const s in a)
    if (s.includes(s)) {
      const o = t(`.propper-link[link_version='${s}']`).parent().parent().parent().find(".version-host").text().trim();
      let d;
      switch (o) {
        case "mixdrop.co":
          d = "mixdrop";
          break;
        case "voe.sx":
          d = "voe";
          break;
        case "upstream.to":
          d = "upstream";
          break;
        case "streamvid.net":
          d = "streamvid";
          break;
        case "dood.watch":
          d = "dood";
          break;
        case "dropload.io":
          d = "dropload";
          break;
        case "filelions.to":
          d = "filelions";
          break;
        case "vtube.to":
          d = "vtube";
          break;
        default:
          d = null;
      }
      if (!d) continue;
      n.push({
        url: `${Cr}/links/go/${a[s]}`,
        embedId: d
      });
    }
  return n;
}
const kb = Ie({
  id: "primewire",
  name: "Primewire",
  rank: 10,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  async scrapeMovie(e) {
    if (!e.media.imdbId) throw new Error("No imdbId provided");
    const t = await Xu(e, e.media.imdbId), r = await e.proxiedFetcher(`movie/${t}`, {
      baseUrl: Cr
    });
    return {
      embeds: await qu(r)
    };
  },
  async scrapeShow(e) {
    var o;
    if (!e.media.imdbId) throw new Error("No imdbId provided");
    const t = await Xu(e, e.media.imdbId), r = await e.proxiedFetcher(`tv/${t}`, {
      baseUrl: Cr
    }), n = (o = ie(r)(`.show_season[data-id='${e.media.season.number}'] > div > a`).toArray().find((d) => d.attribs.href.includes(`-episode-${e.media.episode.number}`))) == null ? void 0 : o.attribs.href;
    if (!n) throw new z("No episode links found");
    const s = await e.proxiedFetcher(n, {
      baseUrl: Cr
    });
    return {
      embeds: await qu(s)
    };
  }
}), uc = "https://ridomovies.tv", Yu = `${uc}/core/api`, $u = async (e) => {
  const a = (await e.proxiedFetcher("/search", {
    baseUrl: Yu,
    query: {
      q: e.media.title
    }
  })).data.items.map((c) => {
    const l = c.title, b = c.contentable.releaseYear, m = c.fullSlug;
    return { name: l, year: b, fullSlug: m };
  }).find((c) => c.name === e.media.title && c.year === e.media.releaseYear.toString());
  if (!(a != null && a.fullSlug)) throw new z("No watchable item found");
  let n = `/${a.fullSlug}/videos`;
  if (e.media.type === "show") {
    const c = await e.proxiedFetcher(`/${a.fullSlug}`, {
      baseUrl: uc
    }), l = `season-${e.media.season.number}/episode-${e.media.episode.number}`, b = new RegExp(
      `\\\\"id\\\\":\\\\"(\\d+)\\\\"(?=.*?\\\\\\"fullSlug\\\\\\":\\\\\\"[^"]*${l}[^"]*\\\\\\")`,
      "g"
    ), f = [...c.matchAll(b)].map((A) => A[1]);
    if (f.length === 0) throw new z("No watchable item found");
    n = `/episodes/${f.at(-1)}/videos`;
  }
  const s = await e.proxiedFetcher(n, {
    baseUrl: Yu
  }), o = ie(s.data[0].url)("iframe").attr("data-src");
  if (!o) throw new z("No watchable item found");
  const d = [];
  return o.includes("closeload") && d.push({
    embedId: Zo.id,
    url: o
  }), o.includes("ridoo") && d.push({
    embedId: ec.id,
    url: o
  }), {
    embeds: d
  };
}, Mb = Ie({
  id: "ridomovies",
  name: "RidoMovies",
  rank: 120,
  flags: [],
  scrapeMovie: $u,
  scrapeShow: $u
}), Vu = async (e) => {
  const t = e.media.type === "movie" ? `?tmdb=${e.media.tmdbId}` : `?tmdb=${e.media.tmdbId}&season=${e.media.season.number}&episode=${e.media.episode.number}`;
  return {
    embeds: [
      {
        embedId: Ps.id,
        url: `https://embed.smashystream.com/videofeee.php${t}`
      },
      {
        embedId: tc.id,
        url: `https://embed.smashystream.com/shortmoviec.php${t}`
      }
    ]
  };
}, Ub = Ie({
  id: "smashystream",
  name: "SmashyStream",
  rank: 20,
  disabled: !0,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Vu,
  scrapeShow: Vu
});
var oc = { exports: {} };
/*! For license information please see hls-parser.min.js.LICENSE.txt */
(function(e, t) {
  (function(r, a) {
    e.exports = a();
  })(self, () => (() => {
    var r = { 377: function(s, i, o) {
      function d(Y, x) {
        return function(g) {
          if (Array.isArray(g)) return g;
        }(Y) || function(g, N) {
          var T = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
          if (T != null) {
            var S, I, D, B, $ = [], V = !0, Z = !1;
            try {
              if (D = (T = T.call(g)).next, N === 0) {
                if (Object(T) !== T) return;
                V = !1;
              } else for (; !(V = (S = D.call(T)).done) && ($.push(S.value), $.length !== N); V = !0) ;
            } catch (J) {
              Z = !0, I = J;
            } finally {
              try {
                if (!V && T.return != null && (B = T.return(), Object(B) !== B)) return;
              } finally {
                if (Z) throw I;
              }
            }
            return $;
          }
        }(Y, x) || l(Y, x) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function c(Y, x) {
        var g = typeof Symbol < "u" && Y[Symbol.iterator] || Y["@@iterator"];
        if (!g) {
          if (Array.isArray(Y) || (g = l(Y)) || x) {
            g && (Y = g);
            var N = 0, T = function() {
            };
            return { s: T, n: function() {
              return N >= Y.length ? { done: !0 } : { done: !1, value: Y[N++] };
            }, e: function(B) {
              throw B;
            }, f: T };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var S, I = !0, D = !1;
        return { s: function() {
          g = g.call(Y);
        }, n: function() {
          var B = g.next();
          return I = B.done, B;
        }, e: function(B) {
          D = !0, S = B;
        }, f: function() {
          try {
            I || g.return == null || g.return();
          } finally {
            if (D) throw S;
          }
        } };
      }
      function l(Y, x) {
        if (Y) {
          if (typeof Y == "string") return b(Y, x);
          var g = {}.toString.call(Y).slice(8, -1);
          return g === "Object" && Y.constructor && (g = Y.constructor.name), g === "Map" || g === "Set" ? Array.from(Y) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? b(Y, x) : void 0;
        }
      }
      function b(Y, x) {
        (x == null || x > Y.length) && (x = Y.length);
        for (var g = 0, N = Array(x); g < x; g++) N[g] = Y[g];
        return N;
      }
      var m, f = this && this.__createBinding || (Object.create ? function(Y, x, g, N) {
        N === void 0 && (N = g);
        var T = Object.getOwnPropertyDescriptor(x, g);
        T && !("get" in T ? !x.__esModule : T.writable || T.configurable) || (T = { enumerable: !0, get: function() {
          return x[g];
        } }), Object.defineProperty(Y, N, T);
      } : function(Y, x, g, N) {
        N === void 0 && (N = g), Y[N] = x[g];
      }), E = this && this.__setModuleDefault || (Object.create ? function(Y, x) {
        Object.defineProperty(Y, "default", { enumerable: !0, value: x });
      } : function(Y, x) {
        Y.default = x;
      }), A = this && this.__importStar || (m = function(Y) {
        return m = Object.getOwnPropertyNames || function(x) {
          var g = [];
          for (var N in x) Object.prototype.hasOwnProperty.call(x, N) && (g[g.length] = N);
          return g;
        }, m(Y);
      }, function(Y) {
        if (Y && Y.__esModule) return Y;
        var x = {};
        if (Y != null) for (var g = m(Y), N = 0; N < g.length; N++) g[N] !== "default" && f(x, Y, g[N]);
        return E(x, Y), x;
      });
      Object.defineProperty(i, "__esModule", { value: !0 });
      var p = A(o(203)), C = o(31);
      function h(Y) {
        return p.trim(Y, '"');
      }
      function _(Y) {
        var x = p.splitAt(Y, ",");
        return { duration: p.toNumber(x[0]), title: decodeURIComponent(escape(x[1])) };
      }
      function v(Y) {
        var x = p.splitAt(Y, "@");
        return { length: p.toNumber(x[0]), offset: x[1] ? p.toNumber(x[1]) : -1 };
      }
      function w(Y) {
        var x = p.splitAt(Y, "x");
        return { width: p.toNumber(x[0]), height: p.toNumber(x[1]) };
      }
      function L(Y) {
        var x = "ALLOWED-CPC: Each entry must consit of KEYFORMAT and Content Protection Configuration", g = Y.split(",");
        g.length === 0 && p.INVALIDPLAYLIST(x);
        var N, T = [], S = c(g);
        try {
          for (S.s(); !(N = S.n()).done; ) {
            var I = N.value, D = d(p.splitAt(I, ":"), 2), B = D[0], $ = D[1];
            B && $ ? T.push({ format: B, cpcList: $.split("/") }) : p.INVALIDPLAYLIST(x);
          }
        } catch (V) {
          S.e(V);
        } finally {
          S.f();
        }
        return T;
      }
      function M(Y) {
        return Y.startsWith('"') ? h(Y) : Y.startsWith("0x") || Y.startsWith("0X") ? p.hexToByteSequence(Y) : p.toNumber(Y);
      }
      function F(Y, x) {
        x.IV && Y.compatibleVersion < 2 && (Y.compatibleVersion = 2), (x.KEYFORMAT || x.KEYFORMATVERSIONS) && Y.compatibleVersion < 5 && (Y.compatibleVersion = 5);
      }
      function K(Y) {
        var x, g, N, T = {}, S = c(p.splitByCommaWithPreservingQuotes(Y));
        try {
          for (S.s(); !(x = S.n()).done; ) {
            var I = x.value, D = d(p.splitAt(I, "="), 2), B = D[0], $ = D[1], V = h($);
            switch (B) {
              case "URI":
                T[B] = V;
                break;
              case "START-DATE":
              case "END-DATE":
                T[B] = new Date(V);
                break;
              case "IV":
                T[B] = (g = V, N = void 0, (N = p.hexToByteSequence(g)).length !== 16 && p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), N);
                break;
              case "BYTERANGE":
                T[B] = v(V);
                break;
              case "RESOLUTION":
                T[B] = w(V);
                break;
              case "ALLOWED-CPC":
                T[B] = L(V);
                break;
              case "END-ON-NEXT":
              case "DEFAULT":
              case "AUTOSELECT":
              case "FORCED":
              case "PRECISE":
              case "CAN-BLOCK-RELOAD":
              case "INDEPENDENT":
              case "GAP":
                T[B] = V === "YES";
                break;
              case "DURATION":
              case "PLANNED-DURATION":
              case "BANDWIDTH":
              case "AVERAGE-BANDWIDTH":
              case "FRAME-RATE":
              case "TIME-OFFSET":
              case "CAN-SKIP-UNTIL":
              case "HOLD-BACK":
              case "PART-HOLD-BACK":
              case "PART-TARGET":
              case "BYTERANGE-START":
              case "BYTERANGE-LENGTH":
              case "LAST-MSN":
              case "LAST-PART":
              case "SKIPPED-SEGMENTS":
              case "SCORE":
              case "PROGRAM-ID":
                T[B] = p.toNumber(V);
                break;
              default:
                B.startsWith("SCTE35-") ? T[B] = p.hexToByteSequence(V) : B.startsWith("X-") ? T[B] = M($) : (B === "VIDEO-RANGE" && V !== "SDR" && V !== "HLG" && V !== "PQ" && p.INVALIDPLAYLIST('VIDEO-RANGE: unknown value "'.concat(V, '"')), T[B] = V);
            }
          }
        } catch (Z) {
          S.e(Z);
        } finally {
          S.f();
        }
        return T;
      }
      function P() {
        p.INVALIDPLAYLIST("The file contains both media and master playlist tags.");
      }
      function U(Y, x, g) {
        var N, T = (N = x.attributes, new C.Rendition({ type: N.TYPE, uri: N.URI, groupId: N["GROUP-ID"], language: N.LANGUAGE, assocLanguage: N["ASSOC-LANGUAGE"], name: N.NAME, isDefault: N.DEFAULT, autoselect: N.AUTOSELECT, forced: N.FORCED, instreamId: N["INSTREAM-ID"], characteristics: N.CHARACTERISTICS, channels: N.CHANNELS })), S = Y[p.camelify(g)], I = function(D, B) {
          var $, V = !1, Z = c(D);
          try {
            for (Z.s(); !($ = Z.n()).done; ) {
              var J = $.value;
              if (J.name === B.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
              J.isDefault && (V = !0);
            }
          } catch (te) {
            Z.e(te);
          } finally {
            Z.f();
          }
          return V && B.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : "";
        }(S, T);
        I && p.INVALIDPLAYLIST(I), S.push(T), T.isDefault && (Y.currentRenditions[p.camelify(g)] = S.length - 1);
      }
      function H(Y, x, g, N, T) {
        var S, I = new C.Variant({ uri: g, bandwidth: x.BANDWIDTH, averageBandwidth: x["AVERAGE-BANDWIDTH"], score: x.SCORE, codecs: x.CODECS, resolution: x.RESOLUTION, frameRate: x["FRAME-RATE"], hdcpLevel: x["HDCP-LEVEL"], allowedCpc: x["ALLOWED-CPC"], videoRange: x["VIDEO-RANGE"], stableVariantId: x["STABLE-VARIANT-ID"], programId: x["PROGRAM-ID"] }), D = c(Y);
        try {
          for (D.s(); !(S = D.n()).done; ) {
            var B = S.value;
            if (B.name === "EXT-X-MEDIA") {
              var $ = B.attributes, V = $.TYPE;
              if (V && $["GROUP-ID"] || p.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), x[V] === $["GROUP-ID"] && (U(I, B, V), V === "CLOSED-CAPTIONS")) {
                var Z, J = c(I.closedCaptions);
                try {
                  for (J.s(); !(Z = J.n()).done; ) {
                    var te = Z.value.instreamId;
                    if (te && te.startsWith("SERVICE") && T.compatibleVersion < 7) {
                      T.compatibleVersion = 7;
                      break;
                    }
                  }
                } catch (X) {
                  J.e(X);
                } finally {
                  J.f();
                }
              }
            }
          }
        } catch (X) {
          D.e(X);
        } finally {
          D.f();
        }
        return function(X, ue, he) {
          for (var se = function() {
            var me = ee[ce];
            me === "CLOSED-CAPTIONS" && X[me] === "NONE" ? (he.isClosedCaptionsNone = !0, ue.closedCaptions = []) : X[me] && !ue[p.camelify(me)].some(function(Te) {
              return Te.groupId === X[me];
            }) && p.INVALIDPLAYLIST("".concat(me, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(me, "."));
          }, ce = 0, ee = ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"]; ce < ee.length; ce++) se();
        }(x, I, T), I.isIFrameOnly = N, I;
      }
      function W(Y, x, g, N, T, S, I) {
        for (var D = new C.Segment({ uri: x, mediaSequenceNumber: T, discontinuitySequence: S }), B = !1, $ = !1, V = g; V <= N; V++) {
          var Z = Se(Y[V]), J = Z.name, te = Z.value, X = Z.attributes;
          if (J === "EXTINF") !Number.isInteger(te.duration) && I.compatibleVersion < 3 && (I.compatibleVersion = 3), Math.round(te.duration) > I.targetDuration && p.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), D.duration = te.duration, D.title = te.title;
          else if (J === "EXT-X-BYTERANGE") I.compatibleVersion < 4 && (I.compatibleVersion = 4), D.byterange = te;
          else if (J === "EXT-X-DISCONTINUITY") D.parts.length > 0 && p.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), D.discontinuity = !0;
          else if (J === "EXT-X-GAP") I.compatibleVersion < 8 && (I.compatibleVersion = 8), D.gap = !0;
          else if (J === "EXT-X-KEY") D.parts.length > 0 && p.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), F(I, X), D.key = new C.Key({ method: X.METHOD, uri: X.URI, iv: X.IV, format: X.KEYFORMAT, formatVersion: X.KEYFORMATVERSIONS });
          else if (J === "EXT-X-MAP") D.parts.length > 0 && p.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), I.compatibleVersion < 5 && (I.compatibleVersion = 5), I.hasMap = !0, D.map = new C.MediaInitializationSection({ uri: X.URI, byterange: X.BYTERANGE });
          else if (J === "EXT-X-PROGRAM-DATE-TIME") D.programDateTime = te;
          else if (J === "EXT-X-DATERANGE") {
            for (var ue = {}, he = 0, se = Object.keys(X); he < se.length; he++) {
              var ce = se[he];
              (ce.startsWith("SCTE35-") || ce.startsWith("X-")) && (ue[ce] = X[ce]);
            }
            D.dateRange = new C.DateRange({ id: X.ID, classId: X.CLASS, start: X["START-DATE"], end: X["END-DATE"], duration: X.DURATION, plannedDuration: X["PLANNED-DURATION"], endOnNext: X["END-ON-NEXT"], attributes: ue });
          } else if (J === "EXT-X-CUE-OUT") D.markers.push(new C.SpliceInfo({ type: "OUT", duration: X && X.DURATION || te }));
          else if (J === "EXT-X-CUE-IN") D.markers.push(new C.SpliceInfo({ type: "IN" }));
          else if (J === "EXT-X-CUE-OUT-CONT" || J === "EXT-X-CUE" || J === "EXT-OATCLS-SCTE35" || J === "EXT-X-ASSET" || J === "EXT-X-SCTE35") D.markers.push(new C.SpliceInfo({ type: "RAW", tagName: J, value: te }));
          else if (J !== "EXT-X-PRELOAD-HINT" || X.TYPE) if (J === "EXT-X-PRELOAD-HINT" && X.TYPE === "PART" && $) p.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
          else if (J !== "EXT-X-PART" && J !== "EXT-X-PRELOAD-HINT" || X.URI) {
            if (J === "EXT-X-PRELOAD-HINT" && X.TYPE === "MAP") B && p.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), B = !0, I.hasMap = !0, D.map = new C.MediaInitializationSection({ hint: !0, uri: X.URI, byterange: { length: X["BYTERANGE-LENGTH"], offset: X["BYTERANGE-START"] || 0 } });
            else if (J === "EXT-X-PART" || J === "EXT-X-PRELOAD-HINT" && X.TYPE === "PART") {
              J !== "EXT-X-PART" || X.DURATION || p.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), J === "EXT-X-PRELOAD-HINT" && ($ = !0);
              var ee = new C.PartialSegment({ hint: J === "EXT-X-PRELOAD-HINT", uri: X.URI, byterange: J === "EXT-X-PART" ? X.BYTERANGE : { length: X["BYTERANGE-LENGTH"], offset: X["BYTERANGE-START"] || 0 }, duration: X.DURATION, independent: X.INDEPENDENT, gap: X.GAP });
              D.gap && !ee.gap && p.INVALIDPLAYLIST("Partial segments must have GAP=YES if they are in a gap (EXT-X-GAP)"), D.parts.push(ee);
            }
          } else p.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
          else p.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory");
        }
        return D;
      }
      function re(Y, x, g, N, T, S, I) {
        for (var D = new C.PrefetchSegment({ uri: x, mediaSequenceNumber: T, discontinuitySequence: S }), B = g; B <= N; B++) {
          var $ = Y[B], V = $.name, Z = $.attributes;
          V === "EXTINF" ? p.INVALIDPLAYLIST("A prefetch segment must not be advertised with an EXTINF tag.") : V === "EXT-X-DISCONTINUITY" ? p.INVALIDPLAYLIST("A prefetch segment must not be advertised with an EXT-X-DISCONTINUITY tag.") : V === "EXT-X-PREFETCH-DISCONTINUITY" ? D.discontinuity = !0 : V === "EXT-X-KEY" ? (F(I, Z), D.key = new C.Key({ method: Z.METHOD, uri: Z.URI, iv: Z.IV, format: Z.KEYFORMAT, formatVersion: Z.KEYFORMATVERSIONS })) : V === "EXT-X-MAP" && p.INVALIDPLAYLIST("Prefetch segments must not be advertised with an EXT-X-MAP tag.");
        }
        return D;
      }
      function oe(Y, x) {
        var g, N = new C.MediaPlaylist(), T = -1, S = 0, I = !1, D = !1, B = 0, $ = null, V = null, Z = !1, J = c(Y.entries());
        try {
          for (J.s(); !(g = J.n()).done; ) {
            var te = d(g.value, 2), X = te[0], ue = te[1], he = Se(ue), se = he.name, ce = he.value, ee = he.attributes;
            if (he.category !== "Segment") {
              if (se === "EXT-X-VERSION") N.version === void 0 ? N.version = ce : p.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
              else if (se === "EXT-X-TARGETDURATION") N.targetDuration = x.targetDuration = ce;
              else if (se === "EXT-X-MEDIA-SEQUENCE") N.segments.length > 0 && p.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), N.mediaSequenceBase = S = ce;
              else if (se === "EXT-X-DISCONTINUITY-SEQUENCE") N.segments.length > 0 && p.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), I && p.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), N.discontinuitySequenceBase = B = ce;
              else if (se === "EXT-X-ENDLIST") N.endlist = !0;
              else if (se === "EXT-X-PLAYLIST-TYPE") N.playlistType = ce;
              else if (se === "EXT-X-I-FRAMES-ONLY") x.compatibleVersion < 4 && (x.compatibleVersion = 4), N.isIFrame = !0;
              else if (se === "EXT-X-INDEPENDENT-SEGMENTS") N.independentSegments && p.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), N.independentSegments = !0;
              else if (se === "EXT-X-START") N.start && p.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), typeof ee["TIME-OFFSET"] != "number" && p.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), N.start = { offset: ee["TIME-OFFSET"], precise: ee.PRECISE || !1 };
              else if (se === "EXT-X-SERVER-CONTROL") ee["CAN-BLOCK-RELOAD"] || p.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), N.lowLatencyCompatibility = { canBlockReload: ee["CAN-BLOCK-RELOAD"], canSkipUntil: ee["CAN-SKIP-UNTIL"], holdBack: ee["HOLD-BACK"], partHoldBack: ee["PART-HOLD-BACK"] };
              else if (se === "EXT-X-PART-INF") ee["PART-TARGET"] || p.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), N.partTargetDuration = ee["PART-TARGET"];
              else if (se === "EXT-X-RENDITION-REPORT") ee.URI || p.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), ee.URI.search(/^[a-z]+:/) === 0 && p.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), N.renditionReports.push(new C.RenditionReport({ uri: ee.URI, lastMSN: ee["LAST-MSN"], lastPart: ee["LAST-PART"] }));
              else if (se === "EXT-X-SKIP") ee["SKIPPED-SEGMENTS"] || p.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), x.compatibleVersion < 9 && (x.compatibleVersion = 9), N.skip = ee["SKIPPED-SEGMENTS"], S += N.skip;
              else if (se === "EXT-X-PREFETCH") {
                var me = re(Y, ce, T === -1 ? X : T, X - 1, S++, B, x);
                me && (me.discontinuity && (me.discontinuitySequence++, B = me.discontinuitySequence), me.key ? $ = me.key : me.key = $, N.prefetchSegments.push(me)), D = !0, T = -1;
              } else if (typeof ue == "string") {
                T === -1 && p.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), N.targetDuration || p.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED"), D && p.INVALIDPLAYLIST("These segments must appear after all complete segments.");
                var Te = W(Y, ue, T, X - 1, S++, B, x);
                if (Te) {
                  var Ne = d(de(N, Te, B, $, V), 3);
                  B = Ne[0], $ = Ne[1], V = Ne[2], !Z && Te.parts.length > 0 && (Z = !0);
                }
                T = -1;
              }
            } else T === -1 && (T = X), se === "EXT-X-DISCONTINUITY" && (I = !0);
          }
        } catch (Ce) {
          J.e(Ce);
        } finally {
          J.f();
        }
        if (T !== -1) {
          var pe = W(Y, "", T, Y.length - 1, S++, B, x);
          if (pe) {
            var Re, Le = pe.parts;
            !(Le.length > 0) || N.endlist || (Re = Le.at(-1)) !== null && Re !== void 0 && Re.hint || p.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), de(N, pe, $, V), !Z && pe.parts.length > 0 && (Z = !0);
          }
        }
        return function(Ce) {
          for (var De = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), Ve = !1, We = !1, Me = Ce.length - 1; Me >= 0; Me--) {
            var st = Ce[Me], ir = st.programDateTime, we = st.dateRange;
            if (ir && (We = !0), we && we.start) {
              Ve = !0, we.endOnNext && (we.end || we.duration) && p.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
              var Je = we.start.getTime(), Vt = we.duration || 0;
              we.end && we.duration && Je + 1e3 * Vt !== we.end.getTime() && p.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), we.endOnNext && (we.end = De.get(we.classId)), De.set(we.classId, we.start);
              var it = we.end ? we.end.getTime() : we.start.getTime() + 1e3 * (we.duration || 0), ht = Fe.get(we.classId);
              if (ht) {
                var Wt, rt = c(ht);
                try {
                  for (rt.s(); !(Wt = rt.n()).done; ) {
                    var mt = Wt.value;
                    (mt.start <= Je && mt.end > Je || mt.start >= Je && mt.start < it) && p.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap");
                  }
                } catch (pt) {
                  rt.e(pt);
                } finally {
                  rt.f();
                }
                ht.push({ start: Je, end: it });
              } else we.classId && Fe.set(we.classId, [{ start: Je, end: it }]);
            }
          }
          Ve && !We && p.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.");
        }(N.segments), N.lowLatencyCompatibility && function(Ce, De) {
          var Fe = Ce.lowLatencyCompatibility, Ve = Ce.targetDuration, We = Ce.partTargetDuration, Me = Ce.segments, st = Ce.renditionReports, ir = Fe.canSkipUntil, we = Fe.holdBack, Je = Fe.partHoldBack;
          if (ir < 6 * Ve && p.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), we < 3 * Ve && p.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), De) {
            We === void 0 && p.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), Je === void 0 && p.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), Je < We && p.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
            var Vt, it = c(Me.entries());
            try {
              for (it.s(); !(Vt = it.n()).done; ) {
                var ht = d(Vt.value, 2), Wt = ht[0], rt = ht[1].parts;
                rt.length > 0 && Wt < Me.length - 3 && p.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                var mt, pt = c(rt.entries());
                try {
                  for (pt.s(); !(mt = pt.n()).done; ) {
                    var Mr = d(mt.value, 2), Fa = Mr[0], ur = Mr[1].duration;
                    ur !== void 0 && (ur > We && p.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), Fa < rt.length - 1 && ur < 0.85 * We && p.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"));
                  }
                } catch (At) {
                  pt.e(At);
                } finally {
                  pt.f();
                }
              }
            } catch (At) {
              it.e(At);
            } finally {
              it.f();
            }
          }
          var or, Gt = c(st);
          try {
            for (Gt.s(); !(or = Gt.n()).done; ) {
              var Ur, gt = or.value, cr = Me.at(-1);
              (Ur = gt.lastMSN) !== null && Ur !== void 0 || (gt.lastMSN = cr.mediaSequenceNumber), (gt.lastPart === null || gt.lastPart === void 0) && cr.parts.length > 0 && (gt.lastPart = cr.parts.length - 1);
            }
          } catch (At) {
            Gt.e(At);
          } finally {
            Gt.f();
          }
        }(N, Z), N;
      }
      function de(Y, x, g, N, T) {
        var S = x.discontinuity, I = x.key, D = x.map, B = x.byterange, $ = x.uri;
        if (S && (x.discontinuitySequence = g + 1), I || (x.key = N), D || (x.map = T), B && B.offset === -1) {
          var V = Y.segments;
          if (V.length > 0) {
            var Z = V.at(-1);
            Z.byterange && Z.uri === $ ? B.offset = Z.byterange.offset + Z.byterange.length : p.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource");
          } else p.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file");
        }
        return Y.segments.push(x), [x.discontinuitySequence, x.key, x.map];
      }
      function Ae(Y, x) {
        var g = function($) {
          var V = $.indexOf(":");
          return V === -1 ? [$.slice(1).trim(), null] : [$.slice(1, V).trim(), $.slice(V + 1).trim()];
        }(Y), N = d(g, 2), T = N[0], S = N[1], I = function($) {
          switch ($) {
            case "EXTM3U":
            case "EXT-X-VERSION":
              return "Basic";
            case "EXTINF":
            case "EXT-X-BYTERANGE":
            case "EXT-X-DISCONTINUITY":
            case "EXT-X-PREFETCH-DISCONTINUITY":
            case "EXT-X-KEY":
            case "EXT-X-MAP":
            case "EXT-X-PROGRAM-DATE-TIME":
            case "EXT-X-DATERANGE":
            case "EXT-X-CUE-OUT":
            case "EXT-X-CUE-IN":
            case "EXT-X-CUE-OUT-CONT":
            case "EXT-X-CUE":
            case "EXT-OATCLS-SCTE35":
            case "EXT-X-ASSET":
            case "EXT-X-SCTE35":
            case "EXT-X-PART":
            case "EXT-X-PRELOAD-HINT":
            case "EXT-X-GAP":
              return "Segment";
            case "EXT-X-TARGETDURATION":
            case "EXT-X-MEDIA-SEQUENCE":
            case "EXT-X-DISCONTINUITY-SEQUENCE":
            case "EXT-X-ENDLIST":
            case "EXT-X-PLAYLIST-TYPE":
            case "EXT-X-I-FRAMES-ONLY":
            case "EXT-X-SERVER-CONTROL":
            case "EXT-X-PART-INF":
            case "EXT-X-PREFETCH":
            case "EXT-X-RENDITION-REPORT":
            case "EXT-X-SKIP":
              return "MediaPlaylist";
            case "EXT-X-MEDIA":
            case "EXT-X-STREAM-INF":
            case "EXT-X-I-FRAME-STREAM-INF":
            case "EXT-X-SESSION-DATA":
            case "EXT-X-SESSION-KEY":
              return "MasterPlaylist";
            case "EXT-X-INDEPENDENT-SEGMENTS":
            case "EXT-X-START":
              return "MediaorMasterPlaylist";
            default:
              return "Unknown";
          }
        }(T);
        if (function($, V) {
          if ($ === "Segment" || $ === "MediaPlaylist") return V.isMasterPlaylist === void 0 ? void (V.isMasterPlaylist = !1) : void (V.isMasterPlaylist && P());
          if ($ === "MasterPlaylist") {
            if (V.isMasterPlaylist === void 0) return void (V.isMasterPlaylist = !0);
            V.isMasterPlaylist === !1 && P();
          }
        }(I, x), I === "Unknown") return null;
        I === "MediaPlaylist" && T !== "EXT-X-RENDITION-REPORT" && T !== "EXT-X-PREFETCH" && (x.hash[T] && p.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), x.hash[T] = !0);
        var D = function($, V) {
          switch ($) {
            case "EXTM3U":
            case "EXT-X-DISCONTINUITY":
            case "EXT-X-ENDLIST":
            case "EXT-X-I-FRAMES-ONLY":
            case "EXT-X-INDEPENDENT-SEGMENTS":
            case "EXT-X-CUE-IN":
            case "EXT-X-GAP":
              return [null, null];
            case "EXT-X-VERSION":
            case "EXT-X-TARGETDURATION":
            case "EXT-X-MEDIA-SEQUENCE":
            case "EXT-X-DISCONTINUITY-SEQUENCE":
              return [p.toNumber(V), null];
            case "EXT-X-CUE-OUT":
              return Number.isNaN(Number(V)) ? [null, K(V)] : [p.toNumber(V), null];
            case "EXT-X-KEY":
            case "EXT-X-MAP":
            case "EXT-X-DATERANGE":
            case "EXT-X-MEDIA":
            case "EXT-X-STREAM-INF":
            case "EXT-X-I-FRAME-STREAM-INF":
            case "EXT-X-SESSION-DATA":
            case "EXT-X-SESSION-KEY":
            case "EXT-X-START":
            case "EXT-X-SERVER-CONTROL":
            case "EXT-X-PART-INF":
            case "EXT-X-PART":
            case "EXT-X-PRELOAD-HINT":
            case "EXT-X-RENDITION-REPORT":
            case "EXT-X-SKIP":
              return [null, K(V)];
            case "EXTINF":
              return [_(V), null];
            case "EXT-X-BYTERANGE":
              return [v(V), null];
            case "EXT-X-PROGRAM-DATE-TIME":
              return [new Date(V), null];
            default:
              return [V, null];
          }
        }(T, S), B = d(D, 2);
        return { name: T, category: I, value: B[0], attributes: B[1] };
      }
      function be(Y, x) {
        var g;
        return x.isMasterPlaylist ? g = function(N, T) {
          var S, I = new C.MasterPlaylist(), D = !1, B = c(N.entries());
          try {
            var $ = function() {
              var X = d(S.value, 2), ue = X[0], he = Se(X[1]), se = he.name, ce = he.value, ee = he.attributes;
              if (se === "EXT-X-VERSION") I.version = ce;
              else if (se === "EXT-X-STREAM-INF") {
                var me = N[ue + 1];
                (typeof me != "string" || me.startsWith("#EXT")) && p.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                var Te = H(N, ee, me, !1, T);
                Te && (typeof Te.score == "number" && (D = !0, Te.score < 0 && p.INVALIDPLAYLIST("SCORE attribute on EXT-X-STREAM-INF must be positive decimal-floating-point number.")), I.variants.push(Te));
              } else if (se === "EXT-X-I-FRAME-STREAM-INF") {
                var Ne = H(N, ee, ee.URI, !0, T);
                Ne && I.variants.push(Ne);
              } else if (se === "EXT-X-SESSION-DATA") {
                var pe = new C.SessionData({ id: ee["DATA-ID"], value: ee.VALUE, uri: ee.URI, language: ee.LANGUAGE });
                I.sessionDataList.some(function(Le) {
                  return Le.id === pe.id && Le.language === pe.language;
                }) && p.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), I.sessionDataList.push(pe);
              } else if (se === "EXT-X-SESSION-KEY") {
                ee.METHOD === "NONE" && p.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                var Re = new C.Key({ method: ee.METHOD, uri: ee.URI, iv: ee.IV, format: ee.KEYFORMAT, formatVersion: ee.KEYFORMATVERSIONS });
                I.sessionKeyList.some(function(Le) {
                  return function(Ce, De) {
                    if (Ce.method !== De.method || Ce.uri !== De.uri) return !1;
                    if (Ce.iv) {
                      if (!De.iv || Ce.iv.byteLength !== De.iv.byteLength) return !1;
                      for (var Fe = 0; Fe < Ce.iv.byteLength; Fe++) if (Ce.iv[Fe] !== De.iv[Fe]) return !1;
                    } else if (De.iv) return !1;
                    return Ce.format === De.format && Ce.formatVersion === De.formatVersion;
                  }(Le, Re);
                }) && p.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), F(T, ee), I.sessionKeyList.push(Re);
              } else se === "EXT-X-INDEPENDENT-SEGMENTS" ? (I.independentSegments && p.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), I.independentSegments = !0) : se === "EXT-X-START" && (I.start && p.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), typeof ee["TIME-OFFSET"] != "number" && p.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), I.start = { offset: ee["TIME-OFFSET"], precise: ee.PRECISE || !1 });
            };
            for (B.s(); !(S = B.n()).done; ) $();
          } catch (X) {
            B.e(X);
          } finally {
            B.f();
          }
          if (D) {
            var V, Z = c(I.variants);
            try {
              for (Z.s(); !(V = Z.n()).done; ) typeof V.value.score != "number" && p.INVALIDPLAYLIST("If any Variant Stream contains the SCORE attribute, then all Variant Streams in the Master Playlist SHOULD have a SCORE attribute");
            } catch (X) {
              Z.e(X);
            } finally {
              Z.f();
            }
          }
          if (T.isClosedCaptionsNone) {
            var J, te = c(I.variants);
            try {
              for (te.s(); !(J = te.n()).done; ) J.value.closedCaptions.length > 0 && p.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE");
            } catch (X) {
              te.e(X);
            } finally {
              te.f();
            }
          }
          return I;
        }(Y, x) : !(g = oe(Y, x)).isIFrame && x.hasMap && x.compatibleVersion < 6 && (x.compatibleVersion = 6), x.compatibleVersion > 1 && (!g.version || g.version < x.compatibleVersion) && p.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(x.compatibleVersion, " or higher.")), g;
      }
      function Se(Y) {
        return typeof Y == "string" ? {} : Y;
      }
      i.default = function(Y) {
        var x = { version: void 0, isMasterPlaylist: void 0, hasMap: !1, targetDuration: 0, compatibleVersion: 1, isClosedCaptionsNone: !1, hash: {} }, g = be(function(N, T) {
          var S, I = [], D = c(N.split(`
`));
          try {
            for (D.s(); !(S = D.n()).done; ) {
              var B = S.value.trim();
              if (B) if (B.startsWith("#")) {
                if (B.startsWith("#EXT")) {
                  var $ = Ae(B, T);
                  $ && I.push($);
                }
              } else I.push(B);
            }
          } catch (V) {
            D.e(V);
          } finally {
            D.f();
          }
          return I.length !== 0 && I[0].name === "EXTM3U" || p.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), I;
        }(Y, x), x);
        return g.source = Y, g;
      };
    }, 887: function(s, i, o) {
      function d(x) {
        return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
          return typeof g;
        } : function(g) {
          return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
        }, d(x);
      }
      function c(x, g) {
        return function(N) {
          if (Array.isArray(N)) return N;
        }(x) || function(N, T) {
          var S = N == null ? null : typeof Symbol < "u" && N[Symbol.iterator] || N["@@iterator"];
          if (S != null) {
            var I, D, B, $, V = [], Z = !0, J = !1;
            try {
              if (B = (S = S.call(N)).next, T === 0) {
                if (Object(S) !== S) return;
                Z = !1;
              } else for (; !(Z = (I = B.call(S)).done) && (V.push(I.value), V.length !== T); Z = !0) ;
            } catch (te) {
              J = !0, D = te;
            } finally {
              try {
                if (!Z && S.return != null && ($ = S.return(), Object($) !== $)) return;
              } finally {
                if (J) throw D;
              }
            }
            return V;
          }
        }(x, g) || b(x, g) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function l(x, g) {
        var N = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
        if (!N) {
          if (Array.isArray(x) || (N = b(x)) || g) {
            N && (x = N);
            var T = 0, S = function() {
            };
            return { s: S, n: function() {
              return T >= x.length ? { done: !0 } : { done: !1, value: x[T++] };
            }, e: function($) {
              throw $;
            }, f: S };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var I, D = !0, B = !1;
        return { s: function() {
          N = N.call(x);
        }, n: function() {
          var $ = N.next();
          return D = $.done, $;
        }, e: function($) {
          B = !0, I = $;
        }, f: function() {
          try {
            D || N.return == null || N.return();
          } finally {
            if (B) throw I;
          }
        } };
      }
      function b(x, g) {
        if (x) {
          if (typeof x == "string") return m(x, g);
          var N = {}.toString.call(x).slice(8, -1);
          return N === "Object" && x.constructor && (N = x.constructor.name), N === "Map" || N === "Set" ? Array.from(x) : N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N) ? m(x, g) : void 0;
        }
      }
      function m(x, g) {
        (g == null || g > x.length) && (g = x.length);
        for (var N = 0, T = Array(g); N < g; N++) T[N] = x[N];
        return T;
      }
      function f(x, g) {
        for (var N = 0; N < g.length; N++) {
          var T = g[N];
          T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(x, w(T.key), T);
        }
      }
      function E(x, g, N) {
        return g = v(g), function(T, S) {
          if (S && (d(S) == "object" || typeof S == "function")) return S;
          if (S !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return function(I) {
            if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return I;
          }(T);
        }(x, h() ? Reflect.construct(g, [], v(x).constructor) : g.apply(x, N));
      }
      function A(x, g, N, T) {
        var S = p(v(1 & T ? x.prototype : x), g, N);
        return 2 & T && typeof S == "function" ? function(I) {
          return S.apply(N, I);
        } : S;
      }
      function p() {
        return p = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(x, g, N) {
          var T = function(I, D) {
            for (; !{}.hasOwnProperty.call(I, D) && (I = v(I)) !== null; ) ;
            return I;
          }(x, g);
          if (T) {
            var S = Object.getOwnPropertyDescriptor(T, g);
            return S.get ? S.get.call(arguments.length < 3 ? x : N) : S.value;
          }
        }, p.apply(null, arguments);
      }
      function C(x) {
        var g = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return C = function(N) {
          if (N === null || !function(S) {
            try {
              return Function.toString.call(S).indexOf("[native code]") !== -1;
            } catch {
              return typeof S == "function";
            }
          }(N)) return N;
          if (typeof N != "function") throw new TypeError("Super expression must either be null or a function");
          if (g !== void 0) {
            if (g.has(N)) return g.get(N);
            g.set(N, T);
          }
          function T() {
            return function(S, I, D) {
              if (h()) return Reflect.construct.apply(null, arguments);
              var B = [null];
              B.push.apply(B, I);
              var $ = new (S.bind.apply(S, B))();
              return D && _($, D.prototype), $;
            }(N, arguments, v(this).constructor);
          }
          return T.prototype = Object.create(N.prototype, { constructor: { value: T, enumerable: !1, writable: !0, configurable: !0 } }), _(T, N);
        }, C(x);
      }
      function h() {
        try {
          var x = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (h = function() {
          return !!x;
        })();
      }
      function _(x, g) {
        return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, T) {
          return N.__proto__ = T, N;
        }, _(x, g);
      }
      function v(x) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(g) {
          return g.__proto__ || Object.getPrototypeOf(g);
        }, v(x);
      }
      function w(x) {
        var g = function(N, T) {
          if (d(N) != "object" || !N) return N;
          var S = N[Symbol.toPrimitive];
          if (S !== void 0) {
            var I = S.call(N, T);
            if (d(I) != "object") return I;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(N);
        }(x, "string");
        return d(g) == "symbol" ? g : g + "";
      }
      var L, M = this && this.__createBinding || (Object.create ? function(x, g, N, T) {
        T === void 0 && (T = N);
        var S = Object.getOwnPropertyDescriptor(g, N);
        S && !("get" in S ? !g.__esModule : S.writable || S.configurable) || (S = { enumerable: !0, get: function() {
          return g[N];
        } }), Object.defineProperty(x, T, S);
      } : function(x, g, N, T) {
        T === void 0 && (T = N), x[T] = g[N];
      }), F = this && this.__setModuleDefault || (Object.create ? function(x, g) {
        Object.defineProperty(x, "default", { enumerable: !0, value: g });
      } : function(x, g) {
        x.default = g;
      }), K = this && this.__importStar || (L = function(x) {
        return L = Object.getOwnPropertyNames || function(g) {
          var N = [];
          for (var T in g) Object.prototype.hasOwnProperty.call(g, T) && (N[N.length] = T);
          return N;
        }, L(x);
      }, function(x) {
        if (x && x.__esModule) return x;
        var g = {};
        if (x != null) for (var N = L(x), T = 0; T < N.length; T++) N[T] !== "default" && M(g, x, N[T]);
        return F(g, x), g;
      });
      Object.defineProperty(i, "__esModule", { value: !0 });
      var P = K(o(203)), U = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"], H = ["#EXT-X-MEDIA"], W = function(x) {
        function g(I) {
          var D, B, $, V;
          return function(Z, J) {
            if (!(Z instanceof J)) throw new TypeError("Cannot call a class as a function");
          }(this, g), D = E(this, g), B = D, V = void 0, ($ = w($ = "baseUri")) in B ? Object.defineProperty(B, $, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : B[$] = V, D.baseUri = I, D;
        }
        return function(I, D) {
          if (typeof D != "function" && D !== null) throw new TypeError("Super expression must either be null or a function");
          I.prototype = Object.create(D && D.prototype, { constructor: { value: I, writable: !0, configurable: !0 } }), Object.defineProperty(I, "prototype", { writable: !1 }), D && _(I, D);
        }(g, x), N = g, T = [{ key: "push", value: function() {
          for (var I = this, D = arguments.length, B = new Array(D), $ = 0; $ < D; $++) B[$] = arguments[$];
          for (var V = function() {
            var te = J[Z];
            if (!te.startsWith("#")) return A(g, "push", I, 3)([te]), 0;
            if (U.some(function(X) {
              return te.startsWith(X);
            })) return A(g, "push", I, 3)([te]), 0;
            if (I.includes(te)) {
              if (H.some(function(X) {
                return te.startsWith(X);
              })) return 0;
              P.INVALIDPLAYLIST("Redundant item (".concat(te, ")"));
            }
            A(g, "push", I, 3)([te]);
          }, Z = 0, J = B; Z < J.length; Z++) V();
          return this.length;
        } }, { key: "join", value: function() {
          for (var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ",", D = this.length - 1; D >= 0; D--) this[D] || this.splice(D, 1);
          return A(g, "join", this, 3)([I]);
        } }], T && f(N.prototype, T), S && f(N, S), Object.defineProperty(N, "prototype", { writable: !1 }), N;
        var N, T, S;
      }(C(Array));
      function re(x, g) {
        var N = 1e3;
        g && (N = Math.pow(10, g));
        var T = Math.round(x * N) / N;
        return g ? T.toFixed(g) : T;
      }
      function oe(x) {
        var g = ['DATA-ID="'.concat(x.id, '"')];
        return x.language && g.push('LANGUAGE="'.concat(x.language, '"')), x.value ? g.push('VALUE="'.concat(x.value, '"')) : x.uri && g.push('URI="'.concat(x.uri, '"')), "#EXT-X-SESSION-DATA:".concat(g.join(","));
      }
      function de(x, g) {
        var N = g ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY", T = ["METHOD=".concat(x.method)];
        return x.uri && T.push('URI="'.concat(x.uri, '"')), x.iv && (x.iv.byteLength !== 16 && P.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), T.push("IV=".concat(P.byteSequenceToHex(x.iv)))), x.format && T.push('KEYFORMAT="'.concat(x.format, '"')), x.formatVersion && T.push('KEYFORMATVERSIONS="'.concat(x.formatVersion, '"')), "".concat(N, ":").concat(T.join(","));
      }
      function Ae(x, g) {
        var N = g.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF", T = ["BANDWIDTH=".concat(g.bandwidth)];
        if (g.averageBandwidth && T.push("AVERAGE-BANDWIDTH=".concat(g.averageBandwidth)), g.isIFrameOnly && T.push('URI="'.concat(g.uri, '"')), g.codecs && T.push('CODECS="'.concat(g.codecs, '"')), g.resolution && T.push("RESOLUTION=".concat(g.resolution.width, "x").concat(g.resolution.height)), g.frameRate && T.push("FRAME-RATE=".concat(re(g.frameRate, 3))), g.hdcpLevel && T.push("HDCP-LEVEL=".concat(g.hdcpLevel)), g.audio.length > 0) {
          T.push('AUDIO="'.concat(g.audio[0].groupId, '"'));
          var S, I = l(g.audio);
          try {
            for (I.s(); !(S = I.n()).done; ) {
              var D = S.value;
              x.push(be(D));
            }
          } catch (pe) {
            I.e(pe);
          } finally {
            I.f();
          }
        }
        if (g.video.length > 0) {
          T.push('VIDEO="'.concat(g.video[0].groupId, '"'));
          var B, $ = l(g.video);
          try {
            for ($.s(); !(B = $.n()).done; ) {
              var V = B.value;
              x.push(be(V));
            }
          } catch (pe) {
            $.e(pe);
          } finally {
            $.f();
          }
        }
        if (g.subtitles.length > 0) {
          T.push('SUBTITLES="'.concat(g.subtitles[0].groupId, '"'));
          var Z, J = l(g.subtitles);
          try {
            for (J.s(); !(Z = J.n()).done; ) {
              var te = Z.value;
              x.push(be(te));
            }
          } catch (pe) {
            J.e(pe);
          } finally {
            J.f();
          }
        }
        if (P.getOptions().allowClosedCaptionsNone && g.closedCaptions.length === 0) T.push("CLOSED-CAPTIONS=NONE");
        else if (g.closedCaptions.length > 0) {
          T.push('CLOSED-CAPTIONS="'.concat(g.closedCaptions[0].groupId, '"'));
          var X, ue = l(g.closedCaptions);
          try {
            for (ue.s(); !(X = ue.n()).done; ) {
              var he = X.value;
              x.push(be(he));
            }
          } catch (pe) {
            ue.e(pe);
          } finally {
            ue.f();
          }
        }
        if (g.score && T.push("SCORE=".concat(g.score)), g.allowedCpc) {
          var se, ce = [], ee = l(g.allowedCpc);
          try {
            for (ee.s(); !(se = ee.n()).done; ) {
              var me = se.value, Te = me.format, Ne = me.cpcList;
              ce.push("".concat(Te, ":").concat(Ne.join("/")));
            }
          } catch (pe) {
            ee.e(pe);
          } finally {
            ee.f();
          }
          T.push('ALLOWED-CPC="'.concat(ce.join(","), '"'));
        }
        g.videoRange && T.push("VIDEO-RANGE=".concat(g.videoRange)), g.stableVariantId && T.push('STABLE-VARIANT-ID="'.concat(g.stableVariantId, '"')), g.programId && T.push("PROGRAM-ID=".concat(g.programId)), x.push("".concat(N, ":").concat(T.join(","))), g.isIFrameOnly || x.push("".concat(g.uri));
      }
      function be(x) {
        var g = ["TYPE=".concat(x.type), 'GROUP-ID="'.concat(x.groupId, '"'), 'NAME="'.concat(x.name, '"')];
        return x.isDefault !== void 0 && g.push("DEFAULT=".concat(x.isDefault ? "YES" : "NO")), x.autoselect !== void 0 && g.push("AUTOSELECT=".concat(x.autoselect ? "YES" : "NO")), x.forced !== void 0 && g.push("FORCED=".concat(x.forced ? "YES" : "NO")), x.language && g.push('LANGUAGE="'.concat(x.language, '"')), x.assocLanguage && g.push('ASSOC-LANGUAGE="'.concat(x.assocLanguage, '"')), x.instreamId && g.push('INSTREAM-ID="'.concat(x.instreamId, '"')), x.characteristics && g.push('CHARACTERISTICS="'.concat(x.characteristics, '"')), x.channels && g.push('CHANNELS="'.concat(x.channels, '"')), x.uri && g.push('URI="'.concat(x.uri, '"')), "#EXT-X-MEDIA:".concat(g.join(","));
      }
      function Se(x, g, N, T) {
        var S, I, D, B = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 1, $ = !1, V = "";
        if (g.discontinuity && x.push("#EXT-X-DISCONTINUITY"), g.gap && x.push("#EXT-X-GAP"), g.key) {
          var Z = de(g.key);
          Z !== N && (x.push(Z), N = Z);
        }
        if (g.map) {
          var J = function(X) {
            var ue = ['URI="'.concat(X.uri, '"')];
            return X.byterange && ue.push('BYTERANGE="'.concat(Y(X.byterange), '"')), "#EXT-X-MAP:".concat(ue.join(","));
          }(g.map);
          J !== T && (x.push(J), T = J);
        }
        if (g.programDateTime && x.push("#EXT-X-PROGRAM-DATE-TIME:".concat(P.formatDate(g.programDateTime))), g.dateRange && x.push(function(X) {
          var ue = ['ID="'.concat(X.id, '"')];
          X.start && ue.push('START-DATE="'.concat(P.formatDate(X.start), '"')), X.end && ue.push('END-DATE="'.concat(P.formatDate(X.end), '"')), X.duration && ue.push("DURATION=".concat(X.duration)), X.plannedDuration && ue.push("PLANNED-DURATION=".concat(X.plannedDuration)), X.classId && ue.push('CLASS="'.concat(X.classId, '"')), X.endOnNext && ue.push("END-ON-NEXT=YES");
          for (var he = 0, se = Object.keys(X.attributes); he < se.length; he++) {
            var ce = se[he];
            ce.startsWith("X-") ? typeof X.attributes[ce] == "number" ? ue.push("".concat(ce, "=").concat(X.attributes[ce])) : ue.push("".concat(ce, '="').concat(X.attributes[ce], '"')) : ce.startsWith("SCTE35-") && ue.push("".concat(ce, "=").concat(P.byteSequenceToHex(X.attributes[ce])));
          }
          return "#EXT-X-DATERANGE:".concat(ue.join(","));
        }(g.dateRange)), g.markers.length > 0 && (V = function(X, ue) {
          var he, se = "", ce = l(ue);
          try {
            for (ce.s(); !(he = ce.n()).done; ) {
              var ee = he.value;
              if (ee.type === "OUT") se = "OUT", X.push("#EXT-X-CUE-OUT:DURATION=".concat(ee.duration));
              else if (ee.type === "IN") se = "IN", X.push("#EXT-X-CUE-IN");
              else if (ee.type === "RAW") {
                var me = ee.value ? ":".concat(ee.value) : "";
                X.push("#".concat(ee.tagName).concat(me));
              }
            }
          } catch (Te) {
            ce.e(Te);
          } finally {
            ce.f();
          }
          return se;
        }(x, g.markers)), g.parts.length > 0 && ($ = function(X, ue) {
          var he, se = !1, ce = l(ue);
          try {
            for (ce.s(); !(he = ce.n()).done; ) {
              var ee = he.value;
              if (ee.hint) {
                var me = [];
                if (me.push("TYPE=PART", 'URI="'.concat(ee.uri, '"')), ee.byterange) {
                  var Te = ee.byterange, Ne = Te.offset, pe = Te.length;
                  me.push("BYTERANGE-START=".concat(Ne)), pe && me.push("BYTERANGE-LENGTH=".concat(pe));
                }
                X.push("#EXT-X-PRELOAD-HINT:".concat(me.join(","))), se = !0;
              } else {
                var Re = [];
                Re.push("DURATION=".concat(ee.duration), 'URI="'.concat(ee.uri, '"')), ee.byterange && Re.push("BYTERANGE=".concat(Y(ee.byterange))), ee.independent && Re.push("INDEPENDENT=YES"), ee.gap && Re.push("GAP=YES"), X.push("#EXT-X-PART:".concat(Re.join(",")));
              }
            }
          } catch (Le) {
            ce.e(Le);
          } finally {
            ce.f();
          }
          return se;
        }(x, g.parts)), $) return [N, T];
        if (typeof g.duration == "number" && !Number.isNaN(g.duration)) {
          var te = B < 3 ? Math.round(g.duration) : re(g.duration, (S = g.duration, I = S.toString(10), (D = I.indexOf(".")) === -1 ? 0 : I.length - D - 1));
          x.push("#EXTINF:".concat(te, ",").concat(unescape(encodeURIComponent(g.title || ""))));
        }
        return g.byterange && x.push("#EXT-X-BYTERANGE:".concat(Y(g.byterange))), Array.prototype.push.call(x, "".concat(g.uri)), [N, T, V];
      }
      function Y(x) {
        var g = x.offset, N = x.length;
        return "".concat(N, "@").concat(g);
      }
      i.default = function(x, g) {
        P.PARAMCHECK(x), P.ASSERT("Not a playlist", x.type === "playlist");
        var N = new W(x.uri);
        return N.push("#EXTM3U"), x.version && N.push("#EXT-X-VERSION:".concat(x.version)), x.independentSegments && N.push("#EXT-X-INDEPENDENT-SEGMENTS"), x.start && N.push("#EXT-X-START:TIME-OFFSET=".concat(re(x.start.offset)).concat(x.start.precise ? ",PRECISE=YES" : "")), x.isMasterPlaylist ? function(T, S, I) {
          var D, B = l(S.sessionDataList);
          try {
            for (B.s(); !(D = B.n()).done; ) {
              var $ = D.value;
              T.push(oe($));
            }
          } catch (ee) {
            B.e(ee);
          } finally {
            B.f();
          }
          var V, Z = l(S.sessionKeyList);
          try {
            for (Z.s(); !(V = Z.n()).done; ) {
              var J = V.value;
              T.push(de(J, !0));
            }
          } catch (ee) {
            Z.e(ee);
          } finally {
            Z.f();
          }
          var te, X = l(S.variants.entries());
          try {
            for (X.s(); !(te = X.n()).done; ) {
              var ue = c(te.value, 2), he = ue[0], se = ue[1], ce = T.length;
              Ae(T, se), I != null && I.variantProcessor && I.variantProcessor(T, ce, T.length - 1, se, he);
            }
          } catch (ee) {
            X.e(ee);
          } finally {
            X.f();
          }
        }(N, x, g) : function(T, S, I) {
          var D = "", B = "", $ = !1;
          if (S.targetDuration && T.push("#EXT-X-TARGETDURATION:".concat(S.targetDuration)), S.lowLatencyCompatibility) {
            var V = S.lowLatencyCompatibility, Z = V.canBlockReload, J = V.canSkipUntil, te = V.holdBack, X = V.partHoldBack, ue = [];
            ue.push("CAN-BLOCK-RELOAD=".concat(Z ? "YES" : "NO")), J !== void 0 && ue.push("CAN-SKIP-UNTIL=".concat(J)), te !== void 0 && ue.push("HOLD-BACK=".concat(te)), X !== void 0 && ue.push("PART-HOLD-BACK=".concat(X)), T.push("#EXT-X-SERVER-CONTROL:".concat(ue.join(",")));
          }
          S.partTargetDuration && T.push("#EXT-X-PART-INF:PART-TARGET=".concat(S.partTargetDuration)), S.mediaSequenceBase && T.push("#EXT-X-MEDIA-SEQUENCE:".concat(S.mediaSequenceBase)), S.discontinuitySequenceBase && T.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(S.discontinuitySequenceBase)), S.playlistType && T.push("#EXT-X-PLAYLIST-TYPE:".concat(S.playlistType)), S.isIFrame && T.push("#EXT-X-I-FRAMES-ONLY"), S.skip > 0 && T.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(S.skip));
          var he, se = l(S.segments.entries());
          try {
            for (se.s(); !(he = se.n()).done; ) {
              var ce, ee = c(he.value, 2), me = ee[0], Te = ee[1], Ne = T.length, pe = c(Se(T, Te, D, B, S.version), 3);
              D = pe[0], B = pe[1], (ce = pe[2]) === "OUT" ? $ = !0 : ce === "IN" && $ && ($ = !1), I != null && I.segmentProcessor && I.segmentProcessor(T, Ne, T.length - 1, Te, me);
            }
          } catch (Me) {
            se.e(Me);
          } finally {
            se.f();
          }
          S.playlistType === "VOD" && $ && T.push("#EXT-X-CUE-IN"), S.prefetchSegments.length > 2 && P.INVALIDPLAYLIST("The server must deliver no more than two prefetch segments");
          var Re, Le = l(S.prefetchSegments);
          try {
            for (Le.s(); !(Re = Le.n()).done; ) {
              var Ce = Re.value;
              Ce.discontinuity && T.push("#EXT-X-PREFETCH-DISCONTINUITY"), T.push("#EXT-X-PREFETCH:".concat(Ce.uri));
            }
          } catch (Me) {
            Le.e(Me);
          } finally {
            Le.f();
          }
          S.endlist && T.push("#EXT-X-ENDLIST");
          var De, Fe = l(S.renditionReports);
          try {
            for (Fe.s(); !(De = Fe.n()).done; ) {
              var Ve = De.value, We = [];
              We.push('URI="'.concat(Ve.uri, '"'), "LAST-MSN=".concat(Ve.lastMSN)), Ve.lastPart !== void 0 && We.push("LAST-PART=".concat(Ve.lastPart)), T.push("#EXT-X-RENDITION-REPORT:".concat(We.join(",")));
            }
          } catch (Me) {
            Fe.e(Me);
          } finally {
            Fe.f();
          }
        }(N, x, g), N.join(`
`);
      };
    }, 31: function(s, i, o) {
      function d(T) {
        return d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
          return typeof S;
        } : function(S) {
          return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S;
        }, d(T);
      }
      function c(T, S) {
        var I = Object.keys(T);
        if (Object.getOwnPropertySymbols) {
          var D = Object.getOwnPropertySymbols(T);
          S && (D = D.filter(function(B) {
            return Object.getOwnPropertyDescriptor(T, B).enumerable;
          })), I.push.apply(I, D);
        }
        return I;
      }
      function l(T) {
        for (var S = 1; S < arguments.length; S++) {
          var I = arguments[S] != null ? arguments[S] : {};
          S % 2 ? c(Object(I), !0).forEach(function(D) {
            h(T, D, I[D]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(I)) : c(Object(I)).forEach(function(D) {
            Object.defineProperty(T, D, Object.getOwnPropertyDescriptor(I, D));
          });
        }
        return T;
      }
      function b(T, S, I) {
        return S = f(S), function(D, B) {
          if (B && (d(B) == "object" || typeof B == "function")) return B;
          if (B !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return function($) {
            if ($ === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return $;
          }(D);
        }(T, m() ? Reflect.construct(S, I || [], f(T).constructor) : S.apply(T, I));
      }
      function m() {
        try {
          var T = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (m = function() {
          return !!T;
        })();
      }
      function f(T) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(S) {
          return S.__proto__ || Object.getPrototypeOf(S);
        }, f(T);
      }
      function E(T, S) {
        if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function");
        T.prototype = Object.create(S && S.prototype, { constructor: { value: T, writable: !0, configurable: !0 } }), Object.defineProperty(T, "prototype", { writable: !1 }), S && A(T, S);
      }
      function A(T, S) {
        return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, D) {
          return I.__proto__ = D, I;
        }, A(T, S);
      }
      function p(T, S, I) {
        return Object.defineProperty(T, "prototype", { writable: !1 }), T;
      }
      function C(T, S) {
        if (!(T instanceof S)) throw new TypeError("Cannot call a class as a function");
      }
      function h(T, S, I) {
        return (S = _(S)) in T ? Object.defineProperty(T, S, { value: I, enumerable: !0, configurable: !0, writable: !0 }) : T[S] = I, T;
      }
      function _(T) {
        var S = function(I, D) {
          if (d(I) != "object" || !I) return I;
          var B = I[Symbol.toPrimitive];
          if (B !== void 0) {
            var $ = B.call(I, D || "default");
            if (d($) != "object") return $;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (D === "string" ? String : Number)(I);
        }(T, "string");
        return d(S) == "symbol" ? S : S + "";
      }
      var v, w = this && this.__createBinding || (Object.create ? function(T, S, I, D) {
        D === void 0 && (D = I);
        var B = Object.getOwnPropertyDescriptor(S, I);
        B && !("get" in B ? !S.__esModule : B.writable || B.configurable) || (B = { enumerable: !0, get: function() {
          return S[I];
        } }), Object.defineProperty(T, D, B);
      } : function(T, S, I, D) {
        D === void 0 && (D = I), T[D] = S[I];
      }), L = this && this.__setModuleDefault || (Object.create ? function(T, S) {
        Object.defineProperty(T, "default", { enumerable: !0, value: S });
      } : function(T, S) {
        T.default = S;
      }), M = this && this.__importStar || (v = function(T) {
        return v = Object.getOwnPropertyNames || function(S) {
          var I = [];
          for (var D in S) Object.prototype.hasOwnProperty.call(S, D) && (I[I.length] = D);
          return I;
        }, v(T);
      }, function(T) {
        if (T && T.__esModule) return T;
        var S = {};
        if (T != null) for (var I = v(T), D = 0; D < I.length; D++) I[D] !== "default" && w(S, T, I[D]);
        return L(S, T), S;
      });
      Object.defineProperty(i, "__esModule", { value: !0 }), i.RenditionReport = i.PrefetchSegment = i.PartialSegment = i.Segment = i.MediaPlaylist = i.MasterPlaylist = i.Playlist = i.SpliceInfo = i.DateRange = i.MediaInitializationSection = i.Key = i.SessionData = i.Variant = i.Rendition = void 0;
      var F = M(o(203)), K = p(function T(S) {
        var I = S.type, D = S.uri, B = S.groupId, $ = S.language, V = S.assocLanguage, Z = S.name, J = S.isDefault, te = S.autoselect, X = S.forced, ue = S.instreamId, he = S.characteristics, se = S.channels;
        C(this, T), h(this, "type", void 0), h(this, "uri", void 0), h(this, "groupId", void 0), h(this, "language", void 0), h(this, "assocLanguage", void 0), h(this, "name", void 0), h(this, "isDefault", void 0), h(this, "autoselect", void 0), h(this, "forced", void 0), h(this, "instreamId", void 0), h(this, "characteristics", void 0), h(this, "channels", void 0), F.PARAMCHECK(I, B, Z), F.CONDITIONALASSERT([I === "SUBTITLES", D], [I === "CLOSED-CAPTIONS", ue], [I === "CLOSED-CAPTIONS", !D], [X, I === "SUBTITLES"]), this.type = I, this.uri = D, this.groupId = B, this.language = $, this.assocLanguage = V, this.name = Z, this.isDefault = J, this.autoselect = te, this.forced = X, this.instreamId = ue, this.characteristics = he, this.channels = se;
      });
      i.Rendition = K;
      var P = p(function T(S) {
        var I = S.uri, D = S.isIFrameOnly, B = D !== void 0 && D, $ = S.bandwidth, V = S.averageBandwidth, Z = S.score, J = S.codecs, te = S.resolution, X = S.frameRate, ue = S.hdcpLevel, he = S.allowedCpc, se = S.videoRange, ce = S.stableVariantId, ee = S.programId, me = S.audio, Te = me === void 0 ? [] : me, Ne = S.video, pe = Ne === void 0 ? [] : Ne, Re = S.subtitles, Le = Re === void 0 ? [] : Re, Ce = S.closedCaptions, De = Ce === void 0 ? [] : Ce, Fe = S.currentRenditions, Ve = Fe === void 0 ? { audio: 0, video: 0, subtitles: 0, closedCaptions: 0 } : Fe;
        C(this, T), h(this, "uri", void 0), h(this, "isIFrameOnly", void 0), h(this, "bandwidth", void 0), h(this, "averageBandwidth", void 0), h(this, "score", void 0), h(this, "codecs", void 0), h(this, "resolution", void 0), h(this, "frameRate", void 0), h(this, "hdcpLevel", void 0), h(this, "allowedCpc", void 0), h(this, "videoRange", void 0), h(this, "stableVariantId", void 0), h(this, "programId", void 0), h(this, "audio", void 0), h(this, "video", void 0), h(this, "subtitles", void 0), h(this, "closedCaptions", void 0), h(this, "currentRenditions", void 0), F.PARAMCHECK(I, $), this.uri = I, this.isIFrameOnly = B, this.bandwidth = $, this.averageBandwidth = V, this.score = Z, this.codecs = J, this.resolution = te, this.frameRate = X, this.hdcpLevel = ue, this.allowedCpc = he, this.videoRange = se, this.stableVariantId = ce, this.programId = ee, this.audio = Te, this.video = pe, this.subtitles = Le, this.closedCaptions = De, this.currentRenditions = Ve;
      });
      i.Variant = P;
      var U = p(function T(S) {
        var I = S.id, D = S.value, B = S.uri, $ = S.language;
        C(this, T), h(this, "id", void 0), h(this, "value", void 0), h(this, "uri", void 0), h(this, "language", void 0), F.PARAMCHECK(I, D || B), F.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(D && B)), this.id = I, this.value = D, this.uri = B, this.language = $;
      });
      i.SessionData = U;
      var H = p(function T(S) {
        var I = S.method, D = S.uri, B = S.iv, $ = S.format, V = S.formatVersion;
        C(this, T), h(this, "method", void 0), h(this, "uri", void 0), h(this, "iv", void 0), h(this, "format", void 0), h(this, "formatVersion", void 0), F.PARAMCHECK(I), F.CONDITIONALPARAMCHECK([I !== "NONE", D]), F.CONDITIONALASSERT([I === "NONE", !(D || B || $ || V)]), this.method = I, this.uri = D, this.iv = B, this.format = $, this.formatVersion = V;
      });
      i.Key = H;
      var W = p(function T(S) {
        var I = S.hint, D = I !== void 0 && I, B = S.uri, $ = S.mimeType, V = S.byterange;
        C(this, T), h(this, "hint", void 0), h(this, "uri", void 0), h(this, "mimeType", void 0), h(this, "byterange", void 0), F.PARAMCHECK(B), this.hint = D, this.uri = B, this.mimeType = $, this.byterange = V;
      });
      i.MediaInitializationSection = W;
      var re = p(function T(S) {
        var I = S.id, D = S.classId, B = S.start, $ = S.end, V = S.duration, Z = S.plannedDuration, J = S.endOnNext, te = S.attributes, X = te === void 0 ? {} : te;
        C(this, T), h(this, "id", void 0), h(this, "classId", void 0), h(this, "start", void 0), h(this, "end", void 0), h(this, "duration", void 0), h(this, "plannedDuration", void 0), h(this, "endOnNext", void 0), h(this, "attributes", void 0), F.PARAMCHECK(I), F.CONDITIONALPARAMCHECK([J === !0, D]), F.CONDITIONALASSERT([$, B], [$, B <= $], [V, V >= 0], [Z, Z >= 0]), this.id = I, this.classId = D, this.start = B, this.end = $, this.duration = V, this.plannedDuration = Z, this.endOnNext = J, this.attributes = X;
      });
      i.DateRange = re;
      var oe = p(function T(S) {
        var I = S.type, D = S.duration, B = S.tagName, $ = S.value;
        C(this, T), h(this, "type", void 0), h(this, "duration", void 0), h(this, "tagName", void 0), h(this, "value", void 0), F.PARAMCHECK(I), F.CONDITIONALPARAMCHECK([I === "OUT", D]), F.CONDITIONALPARAMCHECK([I === "RAW", B]), this.type = I, this.duration = D, this.tagName = B, this.value = $;
      });
      i.SpliceInfo = oe;
      var de = p(function T(S) {
        C(this, T), h(this, "type", void 0), F.PARAMCHECK(S), this.type = S;
      }), Ae = function(T) {
        function S(I) {
          var D, B = I.isMasterPlaylist, $ = I.uri, V = I.version, Z = I.independentSegments, J = Z !== void 0 && Z, te = I.start, X = I.source;
          return C(this, S), h(D = b(this, S, ["playlist"]), "isMasterPlaylist", void 0), h(D, "uri", void 0), h(D, "version", void 0), h(D, "independentSegments", void 0), h(D, "start", void 0), h(D, "source", void 0), F.PARAMCHECK(B), D.isMasterPlaylist = B, D.uri = $, D.version = V, D.independentSegments = J, D.start = te, D.source = X, D;
        }
        return E(S, T), p(S);
      }(de);
      i.Playlist = Ae;
      var be = function(T) {
        function S() {
          var I, D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          C(this, S), h(I = b(this, S, [l(l({}, D), {}, { isMasterPlaylist: !0 })]), "variants", void 0), h(I, "currentVariant", void 0), h(I, "sessionDataList", void 0), h(I, "sessionKeyList", void 0);
          var B = D.variants, $ = B === void 0 ? [] : B, V = D.currentVariant, Z = D.sessionDataList, J = Z === void 0 ? [] : Z, te = D.sessionKeyList, X = te === void 0 ? [] : te;
          return I.variants = $, I.currentVariant = V, I.sessionDataList = J, I.sessionKeyList = X, I;
        }
        return E(S, T), p(S);
      }(Ae);
      i.MasterPlaylist = be;
      var Se = function(T) {
        function S() {
          var I, D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          C(this, S), h(I = b(this, S, [l(l({}, D), {}, { isMasterPlaylist: !1 })]), "targetDuration", void 0), h(I, "mediaSequenceBase", void 0), h(I, "discontinuitySequenceBase", void 0), h(I, "endlist", void 0), h(I, "playlistType", void 0), h(I, "isIFrame", void 0), h(I, "segments", void 0), h(I, "prefetchSegments", void 0), h(I, "lowLatencyCompatibility", void 0), h(I, "partTargetDuration", void 0), h(I, "renditionReports", void 0), h(I, "skip", void 0), h(I, "hash", void 0);
          var B = D.targetDuration, $ = D.mediaSequenceBase, V = $ === void 0 ? 0 : $, Z = D.discontinuitySequenceBase, J = Z === void 0 ? 0 : Z, te = D.endlist, X = te !== void 0 && te, ue = D.playlistType, he = D.isIFrame, se = D.segments, ce = se === void 0 ? [] : se, ee = D.prefetchSegments, me = ee === void 0 ? [] : ee, Te = D.lowLatencyCompatibility, Ne = D.partTargetDuration, pe = D.renditionReports, Re = pe === void 0 ? [] : pe, Le = D.skip, Ce = Le === void 0 ? 0 : Le, De = D.hash;
          return I.targetDuration = B, I.mediaSequenceBase = V, I.discontinuitySequenceBase = J, I.endlist = X, I.playlistType = ue, I.isIFrame = he, I.segments = ce, I.prefetchSegments = me, I.lowLatencyCompatibility = Te, I.partTargetDuration = Ne, I.renditionReports = Re, I.skip = Ce, I.hash = De, I;
        }
        return E(S, T), p(S);
      }(Ae);
      i.MediaPlaylist = Se;
      var Y = function(T) {
        function S(I) {
          var D, B = I.uri, $ = I.mimeType, V = I.data, Z = I.duration, J = I.title, te = I.byterange, X = I.discontinuity, ue = I.mediaSequenceNumber, he = ue === void 0 ? 0 : ue, se = I.discontinuitySequence, ce = se === void 0 ? 0 : se, ee = I.key, me = I.map, Te = I.programDateTime, Ne = I.dateRange, pe = I.markers, Re = pe === void 0 ? [] : pe, Le = I.parts, Ce = Le === void 0 ? [] : Le, De = I.gap;
          return C(this, S), h(D = b(this, S, ["segment"]), "uri", void 0), h(D, "mimeType", void 0), h(D, "data", void 0), h(D, "duration", void 0), h(D, "title", void 0), h(D, "byterange", void 0), h(D, "discontinuity", void 0), h(D, "mediaSequenceNumber", void 0), h(D, "discontinuitySequence", void 0), h(D, "key", void 0), h(D, "map", void 0), h(D, "programDateTime", void 0), h(D, "dateRange", void 0), h(D, "markers", void 0), h(D, "parts", void 0), h(D, "gap", void 0), D.uri = B, D.mimeType = $, D.data = V, D.duration = Z, D.title = J, D.byterange = te, D.discontinuity = X, D.mediaSequenceNumber = he, D.discontinuitySequence = ce, D.key = ee, D.map = me, D.programDateTime = Te, D.dateRange = Ne, D.markers = Re, D.parts = Ce, D.gap = De, D;
        }
        return E(S, T), p(S);
      }(de);
      i.Segment = Y;
      var x = function(T) {
        function S(I) {
          var D, B = I.hint, $ = B !== void 0 && B, V = I.uri, Z = I.duration, J = I.independent, te = I.byterange, X = I.gap;
          return C(this, S), h(D = b(this, S, ["part"]), "hint", void 0), h(D, "uri", void 0), h(D, "duration", void 0), h(D, "independent", void 0), h(D, "byterange", void 0), h(D, "gap", void 0), F.PARAMCHECK(V), D.hint = $, D.uri = V, D.duration = Z, D.independent = J, D.duration = Z, D.byterange = te, D.gap = X, D;
        }
        return E(S, T), p(S);
      }(de);
      i.PartialSegment = x;
      var g = function(T) {
        function S(I) {
          var D, B = I.uri, $ = I.discontinuity, V = I.mediaSequenceNumber, Z = V === void 0 ? 0 : V, J = I.discontinuitySequence, te = J === void 0 ? 0 : J, X = I.key;
          return C(this, S), h(D = b(this, S, ["prefetch"]), "uri", void 0), h(D, "discontinuity", void 0), h(D, "mediaSequenceNumber", void 0), h(D, "discontinuitySequence", void 0), h(D, "key", void 0), F.PARAMCHECK(B), D.uri = B, D.discontinuity = $, D.mediaSequenceNumber = Z, D.discontinuitySequence = te, D.key = X, D;
        }
        return E(S, T), p(S);
      }(de);
      i.PrefetchSegment = g;
      var N = p(function T(S) {
        var I = S.uri, D = S.lastMSN, B = S.lastPart;
        C(this, T), h(this, "uri", void 0), h(this, "lastMSN", void 0), h(this, "lastPart", void 0), F.PARAMCHECK(I), this.uri = I, this.lastMSN = D, this.lastPart = B;
      });
      i.RenditionReport = N;
    }, 203: (s, i) => {
      function o(f, E) {
        return function(A) {
          if (Array.isArray(A)) return A;
        }(f) || function(A, p) {
          var C = A == null ? null : typeof Symbol < "u" && A[Symbol.iterator] || A["@@iterator"];
          if (C != null) {
            var h, _, v, w, L = [], M = !0, F = !1;
            try {
              if (v = (C = C.call(A)).next, p !== 0) for (; !(M = (h = v.call(C)).done) && (L.push(h.value), L.length !== p); M = !0) ;
            } catch (K) {
              F = !0, _ = K;
            } finally {
              try {
                if (!M && C.return != null && (w = C.return(), Object(w) !== w)) return;
              } finally {
                if (F) throw _;
              }
            }
            return L;
          }
        }(f, E) || c(f, E) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function d(f, E) {
        var A = typeof Symbol < "u" && f[Symbol.iterator] || f["@@iterator"];
        if (!A) {
          if (Array.isArray(f) || (A = c(f)) || E) {
            A && (f = A);
            var p = 0, C = function() {
            };
            return { s: C, n: function() {
              return p >= f.length ? { done: !0 } : { done: !1, value: f[p++] };
            }, e: function(w) {
              throw w;
            }, f: C };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var h, _ = !0, v = !1;
        return { s: function() {
          A = A.call(f);
        }, n: function() {
          var w = A.next();
          return _ = w.done, w;
        }, e: function(w) {
          v = !0, h = w;
        }, f: function() {
          try {
            _ || A.return == null || A.return();
          } finally {
            if (v) throw h;
          }
        } };
      }
      function c(f, E) {
        if (f) {
          if (typeof f == "string") return l(f, E);
          var A = {}.toString.call(f).slice(8, -1);
          return A === "Object" && f.constructor && (A = f.constructor.name), A === "Map" || A === "Set" ? Array.from(f) : A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A) ? l(f, E) : void 0;
        }
      }
      function l(f, E) {
        (E == null || E > f.length) && (E = f.length);
        for (var A = 0, p = Array(E); A < E; A++) p[A] = f[A];
        return p;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), i.THROW = m, i.ASSERT = function(f) {
        for (var E = arguments.length, A = new Array(E > 1 ? E - 1 : 0), p = 1; p < E; p++) A[p - 1] = arguments[p];
        var C, h = d(A.entries());
        try {
          for (h.s(); !(C = h.n()).done; ) {
            var _ = o(C.value, 2), v = _[0];
            _[1] || m(new Error("".concat(f, " : Failed at [").concat(v, "]")));
          }
        } catch (w) {
          h.e(w);
        } finally {
          h.f();
        }
      }, i.CONDITIONALASSERT = function() {
        for (var f = arguments.length, E = new Array(f), A = 0; A < f; A++) E[A] = arguments[A];
        var p, C = d(E.entries());
        try {
          for (C.s(); !(p = C.n()).done; ) {
            var h = o(p.value, 2), _ = h[0], v = o(h[1], 2), w = v[0], L = v[1];
            w && (L || m(new Error("Conditional Assert : Failed at [".concat(_, "]"))));
          }
        } catch (M) {
          C.e(M);
        } finally {
          C.f();
        }
      }, i.PARAMCHECK = function() {
        for (var f = arguments.length, E = new Array(f), A = 0; A < f; A++) E[A] = arguments[A];
        var p, C = d(E.entries());
        try {
          for (C.s(); !(p = C.n()).done; ) {
            var h = o(p.value, 2), _ = h[0];
            h[1] === void 0 && m(new Error("Param Check : Failed at [".concat(_, "]")));
          }
        } catch (v) {
          C.e(v);
        } finally {
          C.f();
        }
      }, i.CONDITIONALPARAMCHECK = function() {
        for (var f = arguments.length, E = new Array(f), A = 0; A < f; A++) E[A] = arguments[A];
        var p, C = d(E.entries());
        try {
          for (C.s(); !(p = C.n()).done; ) {
            var h = o(p.value, 2), _ = h[0], v = o(h[1], 2), w = v[0], L = v[1];
            w && L === void 0 && m(new Error("Conditional Param Check : Failed at [".concat(_, "]")));
          }
        } catch (M) {
          C.e(M);
        } finally {
          C.f();
        }
      }, i.INVALIDPLAYLIST = function(f) {
        m(new Error("Invalid Playlist : ".concat(f)));
      }, i.toNumber = function(f) {
        var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
        if (typeof f == "number") return f;
        var A = E === 10 ? Number.parseFloat(f) : Number.parseInt(f, E);
        return Number.isNaN(A) ? 0 : A;
      }, i.hexToByteSequence = function(f) {
        (f.startsWith("0x") || f.startsWith("0X")) && (f = f.slice(2));
        for (var E = new Uint8Array(f.length / 2), A = 0; A < f.length; A += 2) E[A / 2] = Number.parseInt(f.slice(A, A + 2), 16);
        return E;
      }, i.byteSequenceToHex = function(f) {
        var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f.byteLength;
        A <= E && m(new Error("end must be larger than start : start=".concat(E, ", end=").concat(A)));
        for (var p = [], C = E; C < A; C++) p.push("0".concat((255 & f[C]).toString(16).toUpperCase()).slice(-2));
        return "0x".concat(p.join(""));
      }, i.tryCatch = function(f, E) {
        try {
          return f();
        } catch (A) {
          return E(A);
        }
      }, i.splitAt = function(f, E) {
        for (var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, p = -1, C = 0, h = 0; C < f.length; C++) if (f[C] === E) {
          if (h++ === A) return [f.slice(0, C), f.slice(C + 1)];
          p = C;
        }
        return p !== -1 ? [f.slice(0, p), f.slice(p + 1)] : [f];
      }, i.trim = function(f) {
        var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
        return !f || (f = f.trim(), E === " ") || (f.startsWith(E) && (f = f.slice(1)), f.endsWith(E) && (f = f.slice(0, -1))), f;
      }, i.splitByCommaWithPreservingQuotes = function(f) {
        for (var E = [], A = !0, p = 0, C = [], h = 0; h < f.length; h++) {
          var _ = f[h];
          A && _ === "," ? (E.push(f.slice(p, h).trim()), p = h + 1) : _ !== '"' && _ !== "'" || (A ? (C.push(_), A = !1) : _ === C.at(-1) ? (C.pop(), A = !0) : C.push(_));
        }
        return E.push(f.slice(p).trim()), E;
      }, i.camelify = function(f) {
        var E, A = [], p = !1, C = d(f);
        try {
          for (C.s(); !(E = C.n()).done; ) {
            var h = E.value;
            h !== "-" && h !== "_" ? p ? (A.push(h.toUpperCase()), p = !1) : A.push(h.toLowerCase()) : p = !0;
          }
        } catch (_) {
          C.e(_);
        } finally {
          C.f();
        }
        return A.join("");
      }, i.formatDate = function(f) {
        var E = f.getUTCFullYear(), A = ("0" + (f.getUTCMonth() + 1)).slice(-2), p = ("0" + f.getUTCDate()).slice(-2), C = ("0" + f.getUTCHours()).slice(-2), h = ("0" + f.getUTCMinutes()).slice(-2), _ = ("0" + f.getUTCSeconds()).slice(-2), v = ("00" + f.getUTCMilliseconds()).slice(-3);
        return "".concat(E, "-").concat(A, "-").concat(p, "T").concat(C, ":").concat(h, ":").concat(_, ".").concat(v, "Z");
      }, i.hasOwnProp = function(f, E) {
        return Object.hasOwn(f, E);
      }, i.setOptions = function() {
        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        b = Object.assign(b, f);
      }, i.getOptions = function() {
        return Object.assign({}, b);
      };
      var b = {};
      function m(f) {
        if (b.strictMode) throw f;
        b.silent || console.error(f.message);
      }
    }, 73: function(s, i, o) {
      var d, c = this && this.__createBinding || (Object.create ? function(C, h, _, v) {
        v === void 0 && (v = _);
        var w = Object.getOwnPropertyDescriptor(h, _);
        w && !("get" in w ? !h.__esModule : w.writable || w.configurable) || (w = { enumerable: !0, get: function() {
          return h[_];
        } }), Object.defineProperty(C, v, w);
      } : function(C, h, _, v) {
        v === void 0 && (v = _), C[v] = h[_];
      }), l = this && this.__setModuleDefault || (Object.create ? function(C, h) {
        Object.defineProperty(C, "default", { enumerable: !0, value: h });
      } : function(C, h) {
        C.default = h;
      }), b = this && this.__importStar || (d = function(C) {
        return d = Object.getOwnPropertyNames || function(h) {
          var _ = [];
          for (var v in h) Object.prototype.hasOwnProperty.call(h, v) && (_[_.length] = v);
          return _;
        }, d(C);
      }, function(C) {
        if (C && C.__esModule) return C;
        var h = {};
        if (C != null) for (var _ = d(C), v = 0; v < _.length; v++) _[v] !== "default" && c(h, C, _[v]);
        return l(h, C), h;
      }), m = this && this.__importDefault || function(C) {
        return C && C.__esModule ? C : { default: C };
      };
      Object.defineProperty(i, "__esModule", { value: !0 }), i.setOptions = i.getOptions = i.types = i.stringify = i.parse = void 0;
      const f = o(203);
      Object.defineProperty(i, "getOptions", { enumerable: !0, get: function() {
        return f.getOptions;
      } }), Object.defineProperty(i, "setOptions", { enumerable: !0, get: function() {
        return f.setOptions;
      } });
      const E = m(o(377));
      i.parse = E.default;
      const A = m(o(887));
      i.stringify = A.default;
      const p = b(o(31));
      i.types = p;
    } }, a = {}, n = function s(i) {
      var o = a[i];
      if (o !== void 0) return o.exports;
      var d = a[i] = { exports: {} };
      return r[i].call(d.exports, d, d.exports, s), d.exports;
    }(73);
    return n;
  })());
})(oc);
var Kr = oc.exports;
async function Wu(e, t, r) {
  const a = await e(t, { headers: r }), n = Kr.parse(a);
  return n.isMasterPlaylist && await Promise.all(
    n.variants.map(async (s) => {
      const i = await e(s.uri, { headers: r }), o = Kr.parse(i);
      s.uri = `data:application/vnd.apple.mpegurl;base64,${btoa(Kr.stringify(o))}`;
    })
  ), `data:application/vnd.apple.mpegurl;base64,${btoa(Kr.stringify(n))}`;
}
const _t = "https://soaper.live", Gu = async (e) => {
  var f;
  const t = await e.proxiedFetcher("/search.html", {
    baseUrl: _t,
    query: {
      keyword: e.media.title
    }
  }), r = ie(t), a = [];
  r(".thumbnail").each((E, A) => {
    const p = r(A).find("h5").find("a").first().text().trim(), C = r(A).find(".img-tip").first().text().trim(), h = r(A).find("h5").find("a").first().attr("href");
    !p || !h || a.push({ title: p, year: C ? parseInt(C, 10) : void 0, url: h });
  });
  let n = (f = a.find((E) => E && Ye(e.media, E.title, E.year))) == null ? void 0 : f.url;
  if (!n) throw new z("Content not found");
  if (e.media.type === "show") {
    const E = e.media.season.number, A = e.media.episode.number, p = await e.proxiedFetcher(n, { baseUrl: _t }), C = ie(p), _ = C("h4").filter((v, w) => C(w).text().trim().split(":")[0].trim() === `Season${E}`).parent().find("a").toArray();
    n = C(
      _.find((v) => parseInt(C(v).text().split(".")[0], 10) === A)
    ).attr("href");
  }
  if (!n) throw new z("Content not found");
  const s = await e.proxiedFetcher(n, { baseUrl: _t }), o = ie(s)("#hId").attr("value");
  if (!o) throw new z("Content not found");
  const d = new URLSearchParams();
  d.append("pass", o), d.append("e2", "0"), d.append("server", "0");
  const c = e.media.type === "show" ? "/home/index/getEInfoAjax" : "/home/index/getMInfoAjax", l = await e.proxiedFetcher(c, {
    baseUrl: _t,
    method: "POST",
    body: d,
    headers: {
      referer: `${_t}${n}`
    }
  }), b = JSON.parse(l), m = [];
  for (const E of b.subs) {
    let A = "";
    E.name.includes(".srt") ? A = lt(E.name.split(".srt")[0]) : E.name.includes(":") ? A = E.name.split(":")[0] : A = E.name, A && m.push({
      id: E.path,
      url: `${_t}${E.path}`,
      type: "srt",
      hasCorsRestrictions: !1,
      language: A
    });
  }
  return {
    embeds: [],
    stream: [
      {
        id: "primary",
        playlist: await Wu(e.proxiedFetcher, `${_t}/${b.val}`),
        type: "hls",
        proxyDepth: 2,
        flags: [ae.CORS_ALLOWED],
        captions: m
      },
      ...b.val_bak ? [
        {
          id: "backup",
          playlist: await Wu(e.proxiedFetcher, `${_t}/${b.val_bak}`),
          type: "hls",
          flags: [ae.CORS_ALLOWED],
          proxyDepth: 2,
          captions: m
        }
      ] : []
    ]
  };
}, Hb = Ie({
  id: "soapertv",
  name: "SoaperTV",
  rank: 160,
  flags: [ae.CORS_ALLOWED],
  scrapeMovie: Gu,
  scrapeShow: Gu
}), ta = "https://vidsrc.to", wn = `${ta}/`, ju = async (e) => {
  var c;
  const t = e.media.imdbId ?? e.media.tmdbId, r = e.media.type === "movie" ? `/embed/movie/${t}` : `/embed/tv/${t}/${e.media.season.number}/${e.media.episode.number}`, a = await e.proxiedFetcher(r, {
    baseUrl: ta,
    headers: {
      referer: wn
    }
  }), s = ie(a)("a[data-id]").attr("data-id");
  if (!s) throw new Error("No data-id found");
  const i = await e.proxiedFetcher(`/ajax/embed/episode/${s}/sources`, {
    baseUrl: ta,
    headers: {
      referer: wn
    }
  });
  if (i.status !== 200) throw new Error("No sources found");
  const o = [], d = [];
  for (const l of i.result) {
    const b = await e.proxiedFetcher(`/ajax/embed/source/${l.id}`, {
      baseUrl: ta,
      headers: {
        referer: wn
      }
    }), m = nb(b.result.url);
    d.push({ source: l.title, url: m });
  }
  for (const l of d) {
    if (l.source === "Vidplay") {
      const b = new URL(l.url);
      o.push({
        embedId: "vidplay",
        url: b.toString()
      });
    }
    if (l.source === "Filemoon") {
      const b = new URL(l.url), m = (c = d.find((E) => E.source === "Vidplay" && E.url.includes("sub.info"))) == null ? void 0 : c.url, f = m ? new URL(m).searchParams.get("sub.info") : null;
      f && b.searchParams.set("sub.info", f), o.push(
        {
          embedId: "filemoon",
          url: b.toString()
        },
        {
          embedId: "filemoon-mp4",
          url: b.toString()
        }
      );
    }
  }
  return {
    embeds: o
  };
}, Xb = Ie({
  id: "vidsrcto",
  name: "VidSrcTo",
  disabled: !0,
  scrapeMovie: ju,
  scrapeShow: ju,
  flags: [ae.PROXY_BLOCKED],
  rank: 260
});
async function Ku(e, t, r) {
  var n;
  const a = [];
  for (const s of t.split(",")) {
    await r.proxiedFetcher("/getEmbed.php", {
      baseUrl: Nt,
      headers: {
        Referer: `${Nt}/getEmbed.php?${new URLSearchParams({ id: e, sv: s })}`
      },
      method: "HEAD",
      query: { id: e, sv: s }
    });
    const o = (n = (await r.proxiedFetcher("/getPlay.php", {
      baseUrl: Nt,
      headers: {
        Referer: `${Nt}/getEmbed.php?${new URLSearchParams({ id: e, sv: s })}`
      },
      query: { id: e, sv: s }
    })).match(/window.location.href\s*=\s*"([^"]+)"/)) == null ? void 0 : n[1];
    o && s === "warezcdn" ? a.push(
      { embedId: ac.id, url: o },
      { embedId: as.id, url: o },
      { embedId: nc.id, url: o }
    ) : o && s === "mixdrop" && a.push({ embedId: yr.id, url: o });
  }
  return { embeds: a };
}
const qb = Ie({
  id: "warezcdn",
  name: "WarezCDN",
  rank: 140,
  flags: [],
  scrapeMovie: async (e) => {
    if (!e.media.imdbId) throw new z("This source requires IMDB id.");
    const t = await e.proxiedFetcher(`/filme/${e.media.imdbId}`, {
      baseUrl: Nt
    }), [, r, a] = t.match(/let\s+data\s*=\s*'\[\s*\{\s*"id":"([^"]+)".*?"servers":"([^"]+)"/);
    if (!r || !a) throw new z("Failed to find episode id");
    return Ku(r, a, e);
  },
  scrapeShow: async (e) => {
    var l, b;
    if (!e.media.imdbId) throw new z("This source requires IMDB id.");
    const t = `${Nt}/serie/${e.media.imdbId}/${e.media.season.number}/${e.media.episode.number}`, a = (l = (await e.proxiedFetcher(t)).match(/var\s+cachedSeasons\s*=\s*"([^"]+)"/)) == null ? void 0 : l[1];
    if (!a) throw new z("Failed to find data");
    const n = await e.proxiedFetcher(a, {
      baseUrl: Nt,
      headers: {
        Referer: t,
        "X-Requested-With": "XMLHttpRequest"
      }
    }), s = Object.values(n.seasons).find((m) => m.name === e.media.season.number.toString());
    if (!s) throw new z("Failed to find season id");
    const i = (b = Object.values(s.episodes).find((m) => m.name === e.media.season.number.toString())) == null ? void 0 : b.id;
    if (!i) throw new z("Failed to find episode id");
    const o = await e.proxiedFetcher("/core/ajax.php", {
      baseUrl: Nt,
      headers: {
        Referer: t,
        "X-Requested-With": "XMLHttpRequest"
      },
      query: { audios: i }
    }), [, d, c] = o.replace(/\\"/g, '"').match(/"\[\s*\{\s*"id":"([^"]+)".*?"servers":"([^"]+)"/);
    if (!d || !c) throw new z("Failed to find episode id");
    return Ku(d, c, e);
  }
});
function cc() {
  return [
    Ap,
    Hp,
    aE,
    jp,
    nE,
    Vp,
    SE,
    hE,
    Jp,
    tE,
    Ub,
    Mb,
    Xb,
    Nb,
    pb,
    _b,
    Sb,
    kb,
    qb,
    Wp,
    vb,
    Hb,
    Tp,
    uE,
    kp,
    Oc,
    qp,
    rE,
    xp,
    mE,
    iE,
    eE
  ];
}
function Yb() {
  return [
    xt,
    tr,
    _0,
    Vo,
    xa,
    C0,
    wd,
    yr,
    Go,
    S0,
    Ps,
    tc,
    ec,
    Zo,
    Jo,
    ME,
    s0,
    i0,
    cb,
    lb,
    Fn,
    tb,
    Jn,
    ZE,
    Vc,
    kd,
    Ep,
    ac,
    as,
    nc,
    BE,
    KE,
    UE,
    IE,
    vE,
    DE,
    OE,
    RE,
    rp,
    o0,
    c0,
    d0,
    J2,
    qE,
    YE
  ];
}
function dc() {
  return cc().filter((e) => !e.disabled && !e.externalSource);
}
function ts() {
  return cc().filter((e) => e.externalSource && !e.disabled);
}
function lc() {
  return Yb().filter((e) => !e.disabled);
}
function Ln(e) {
  return new Set(e).size !== e.length;
}
function fc(e, t) {
  const r = t.sources.filter((d) => !(d != null && d.disabled)), a = t.embeds.filter((d) => !(d != null && d.disabled)), n = [...r, ...a], s = Ln(n.map((d) => d.id)), i = Ln(r.map((d) => d.rank)), o = Ln(a.map((d) => d.rank));
  if (s) throw new Error("Duplicate id found in sources/embeds");
  if (i) throw new Error("Duplicate rank found in sources");
  if (o) throw new Error("Duplicate rank found in embeds");
  return {
    sources: r.filter((d) => _r(e, d.flags)),
    embeds: a
  };
}
function Zb(e) {
  var n;
  const t = Ju(
    e.proxyStreams ? "any" : e.target,
    e.consistentIpForRequests ?? !1,
    e.proxyStreams
  ), r = [...dc()];
  e.externalSources === "all" ? r.push(...ts()) : (n = e.externalSources) == null || n.forEach((s) => {
    const i = ts().find((o) => o.id === s);
    i && r.push(i);
  });
  const a = fc(t, {
    embeds: lc(),
    sources: r
  });
  return h0({
    embeds: a.embeds,
    sources: a.sources,
    features: t,
    fetcher: e.fetcher,
    proxiedFetcher: e.proxiedFetcher,
    proxyStreams: e.proxyStreams
  });
}
function Jb() {
  let e = !1, t = null, r = null, a = null;
  const n = [], s = [], i = dc(), o = ts(), d = lc();
  return {
    enableConsistentIpForRequests() {
      return e = !0, this;
    },
    setFetcher(c) {
      return r = c, this;
    },
    setProxiedFetcher(c) {
      return a = c, this;
    },
    setTarget(c) {
      return t = c, this;
    },
    addSource(c) {
      if (typeof c != "string")
        return s.push(c), this;
      const l = [...i, ...o].find((b) => b.id === c);
      if (!l) throw new Error("Source not found");
      return s.push(l), this;
    },
    addEmbed(c) {
      if (typeof c != "string")
        return n.push(c), this;
      const l = d.find((b) => b.id === c);
      if (!l) throw new Error("Embed not found");
      return n.push(l), this;
    },
    addBuiltinProviders() {
      return s.push(...i), n.push(...d), this;
    },
    build() {
      if (!t) throw new Error("Target not set");
      if (!r) throw new Error("Fetcher not set");
      const c = Ju(t, e), l = fc(c, {
        embeds: n,
        sources: s
      });
      return h0({
        fetcher: r,
        proxiedFetcher: a ?? void 0,
        embeds: l.embeds,
        sources: l.sources,
        features: c
      });
    }
  };
}
const $b = () => {
  try {
    return require("react-native"), !0;
  } catch {
    return !1;
  }
};
function Vb(e) {
  return e === void 0 || typeof e == "string" || e instanceof URLSearchParams || e instanceof Rs ? e instanceof URLSearchParams && $b() ? {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: e.toString()
  } : {
    headers: {},
    body: e
  } : {
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(e)
  };
}
function Wb(e, t) {
  const r = new Headers();
  return e.forEach((a) => {
    var d;
    const n = a.toLowerCase(), s = t.headers.get(n), o = ((d = t.extraHeaders) == null ? void 0 : d.get(n)) ?? s;
    o && r.set(n, o);
  }), r;
}
function Gb(e) {
  return async (r, a) => {
    var c;
    const n = rs(r, a), s = Vb(a.body), i = await e(n, {
      method: a.method,
      headers: {
        ...s.headers,
        ...a.headers
      },
      body: s.body,
      credentials: a.credentials
    });
    let o;
    return ((c = i.headers.get("content-type")) == null ? void 0 : c.includes("application/json")) ? o = await i.json() : o = await i.text(), {
      body: o,
      finalUrl: i.extraUrl ?? i.url,
      headers: Wb(a.readHeaders, i),
      statusCode: i.status
    };
  };
}
const zu = {
  cookie: "X-Cookie",
  referer: "X-Referer",
  origin: "X-Origin",
  "user-agent": "X-User-Agent",
  "x-real-ip": "X-X-Real-Ip"
}, jb = {
  "x-set-cookie": "Set-Cookie"
};
function e3(e, t) {
  return async (a, n) => {
    const s = Gb(async (d, c) => {
      const l = await t(d, c);
      return l.extraHeaders = new Headers(), Object.entries(jb).forEach((b) => {
        var f;
        const m = l.headers.get(b[0]);
        m && ((f = l.extraHeaders) == null || f.set(b[1].toLowerCase(), m));
      }), l.extraUrl = l.headers.get("X-Final-Destination") ?? l.url, l;
    }), i = rs(a, n), o = Object.entries(n.headers).map((d) => {
      const c = d[0].toLowerCase();
      return zu[c] ? [zu[c], d[1]] : d;
    });
    return s(e, {
      ...n,
      query: {
        destination: i
      },
      headers: Object.fromEntries(o),
      baseUrl: void 0
    });
  };
}
export {
  z as NotFoundError,
  Jb as buildProviders,
  ae as flags,
  lc as getBuiltinEmbeds,
  ts as getBuiltinExternalSources,
  dc as getBuiltinSources,
  Zb as makeProviders,
  e3 as makeSimpleProxyFetcher,
  Gb as makeStandardFetcher,
  Kb as targets
};
