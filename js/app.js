var sunset, sunrise;

String.prototype.captitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

var weatherIcons = {
  "200": {
    "label": "thunderstorm with light rain",
    "icon": "storm-showers"
  },

  "201": {
    "label": "thunderstorm with rain",
    "icon": "storm-showers"
  },

  "202": {
    "label": "thunderstorm with heavy rain",
    "icon": "storm-showers"
  },

  "210": {
    "label": "light thunderstorm",
    "icon": "storm-showers"
  },

  "211": {
    "label": "thunderstorm",
    "icon": "thunderstorm"
  },

  "212": {
    "label": "heavy thunderstorm",
    "icon": "thunderstorm"
  },

  "221": {
    "label": "ragged thunderstorm",
    "icon": "thunderstorm"
  },

  "230": {
    "label": "thunderstorm with light drizzle",
    "icon": "storm-showers"
  },

  "231": {
    "label": "thunderstorm with drizzle",
    "icon": "storm-showers"
  },

  "232": {
    "label": "thunderstorm with heavy drizzle",
    "icon": "storm-showers"
  },

  "300": {
    "label": "light intensity drizzle",
    "icon": "sprinkle"
  },

  "301": {
    "label": "drizzle",
    "icon": "sprinkle"
  },

  "302": {
    "label": "heavy intensity drizzle",
    "icon": "sprinkle"
  },

  "310": {
    "label": "light intensity drizzle rain",
    "icon": "sprinkle"
  },

  "311": {
    "label": "drizzle rain",
    "icon": "sprinkle"
  },

  "312": {
    "label": "heavy intensity drizzle rain",
    "icon": "sprinkle"
  },

  "313": {
    "label": "shower rain and drizzle",
    "icon": "sprinkle"
  },

  "314": {
    "label": "heavy shower rain and drizzle",
    "icon": "sprinkle"
  },

  "321": {
    "label": "shower drizzle",
    "icon": "sprinkle"
  },

  "500": {
    "label": "light rain",
    "icon": "rain"
  },

  "501": {
    "label": "moderate rain",
    "icon": "rain"
  },

  "502": {
    "label": "heavy intensity rain",
    "icon": "rain"
  },

  "503": {
    "label": "very heavy rain",
    "icon": "rain"
  },

  "504": {
    "label": "extreme rain",
    "icon": "rain"
  },

  "511": {
    "label": "freezing rain",
    "icon": "rain-mix"
  },

  "520": {
    "label": "light intensity shower rain",
    "icon": "showers"
  },

  "521": {
    "label": "shower rain",
    "icon": "showers"
  },

  "522": {
    "label": "heavy intensity shower rain",
    "icon": "showers"
  },

  "531": {
    "label": "ragged shower rain",
    "icon": "showers"
  },

  "600": {
    "label": "light snow",
    "icon": "snow"
  },

  "601": {
    "label": "snow",
    "icon": "snow"
  },

  "602": {
    "label": "heavy snow",
    "icon": "snow"
  },

  "611": {
    "label": "sleet",
    "icon": "sleet"
  },

  "612": {
    "label": "shower sleet",
    "icon": "sleet"
  },

  "615": {
    "label": "light rain and snow",
    "icon": "rain-mix"
  },

  "616": {
    "label": "rain and snow",
    "icon": "rain-mix"
  },

  "620": {
    "label": "light shower snow",
    "icon": "rain-mix"
  },

  "621": {
    "label": "shower snow",
    "icon": "rain-mix"
  },

  "622": {
    "label": "heavy shower snow",
    "icon": "rain-mix"
  },

  "701": {
    "label": "mist",
    "icon": "sprinkle"
  },

  "711": {
    "label": "smoke",
    "icon": "smoke"
  },

  "721": {
    "label": "haze",
    "icon": "day-haze"
  },

  "731": {
    "label": "sand, dust whirls",
    "icon": "cloudy-gusts"
  },

  "741": {
    "label": "fog",
    "icon": "fog"
  },

  "751": {
    "label": "sand",
    "icon": "cloudy-gusts"
  },

  "761": {
    "label": "dust",
    "icon": "dust"
  },

  "762": {
    "label": "volcanic ash",
    "icon": "smog"
  },

  "771": {
    "label": "squalls",
    "icon": "day-windy"
  },

  "781": {
    "label": "tornado",
    "icon": "tornado"
  },

  "800": {
    "label": "clear sky",
    "icon": "sunny"
  },

  "801": {
    "label": "few clouds",
    "icon": "cloudy"
  },

  "802": {
    "label": "scattered clouds",
    "icon": "cloudy"
  },

  "803": {
    "label": "broken clouds",
    "icon": "cloudy"
  },

  "804": {
    "label": "overcast clouds",
    "icon": "cloudy"
  },


  "900": {
    "label": "tornado",
    "icon": "tornado"
  },

  "901": {
    "label": "tropical storm",
    "icon": "hurricane"
  },

  "902": {
    "label": "hurricane",
    "icon": "hurricane"
  },

  "903": {
    "label": "cold",
    "icon": "snowflake-cold"
  },

  "904": {
    "label": "hot",
    "icon": "hot"
  },

  "905": {
    "label": "windy",
    "icon": "windy"
  },

  "906": {
    "label": "hail",
    "icon": "hail"
  },

  "951": {
    "label": "calm",
    "icon": "sunny"
  },

  "952": {
    "label": "light breeze",
    "icon": "cloudy-gusts"
  },

  "953": {
    "label": "gentle breeze",
    "icon": "cloudy-gusts"
  },

  "954": {
    "label": "moderate breeze",
    "icon": "cloudy-gusts"
  },

  "955": {
    "label": "fresh breeze",
    "icon": "cloudy-gusts"
  },

  "956": {
    "label": "strong breeze",
    "icon": "cloudy-gusts"
  },

  "957": {
    "label": "high wind, near gale",
    "icon": "cloudy-gusts"
  },

  "958": {
    "label": "gale",
    "icon": "cloudy-gusts"
  },

  "959": {
    "label": "severe gale",
    "icon": "cloudy-gusts"
  },

  "960": {
    "label": "storm",
    "icon": "thunderstorm"
  },

  "961": {
    "label": "violent storm",
    "icon": "thunderstorm"
  },

  "962": {
    "label": "hurricane",
    "icon": "cloudy-gusts"
  }
};

var nimipaivat = {
  "01-01": [
  ],
  "01-02": [
    "Aapeli"
  ],
  "01-03": [
    "Elmeri",
    "Elmo",
    "Elmer"
  ],
  "01-04": [
    "Ruut"
  ],
  "01-05": [
    "Lea",
    "Leea"
  ],
  "01-06": [
    "Harri"
  ],
  "01-07": [
    "Aukusti",
    "Aku",
    "August"
  ],
  "01-08": [
    "Hilppa",
    "Titta"
  ],
  "01-09": [
    "Veijo",
    "Veikko",
    "Veli"
  ],
  "01-10": [
    "Nyyrikki"
  ],
  "01-11": [
    "Kari",
    "Karri"
  ],
  "01-12": [
    "Toini"
  ],
  "01-13": [
    "Nuutti"
  ],
  "01-14": [
    "Sakari",
    "Saku"
  ],
  "01-15": [
    "Solja"
  ],
  "01-16": [
    "Ilmari",
    "Ilmo"
  ],
  "01-17": [
    "Anton",
    "Antto",
    "Anttoni",
    "Toni"
  ],
  "01-18": [
    "Laura"
  ],
  "01-19": [
    "Heikki",
    "Henri",
    "Henrik",
    "Henrikki"
  ],
  "01-20": [
    "Henna",
    "Henni",
    "Henriikka"
  ],
  "01-21": [
    "Aune",
    "Auni",
    "Oona"
  ],
  "01-22": [
    "Visa"
  ],
  "01-23": [
    "Eine",
    "Eini",
    "Enni"
  ],
  "01-24": [
    "Senja"
  ],
  "01-25": [
    "Paavali",
    "Paavo",
    "Paul",
    "Pauli"
  ],
  "01-26": [
    "Joonatan"
  ],
  "01-27": [
    "Viljo"
  ],
  "01-28": [
    "Kaarle",
    "Kaarlo",
    "Kalle",
    "Mies"
  ],
  "01-29": [
    "Valtteri"
  ],
  "01-30": [
    "Irja"
  ],
  "01-31": [
    "Alli"
  ],
  "02-01": [
    "Riitta"
  ],
  "02-02": [
    "Aamu",
    "Jemina",
    "Lumi"
  ],
  "02-03": [
    "Valo"
  ],
  "02-04": [
    "Armi",
    "Ronja"
  ],
  "02-05": [
    "Asser"
  ],
  "02-06": [
    "Tea",
    "Teija",
    "Terhikki",
    "Tiia",
    "Terhi"
  ],
  "02-07": [
    "Rikhard",
    "Riku"
  ],
  "02-08": [
    "Laina"
  ],
  "02-09": [
    "Raija",
    "Raisa"
  ],
  "02-10": [
    "Elina",
    "Ella",
    "Ellen",
    "Elna"
  ],
  "02-11": [
    "Talvikki"
  ],
  "02-12": [
    "Elma",
    "Elmi"
  ],
  "02-13": [
    "Sulho",
    "Sulo"
  ],
  "02-14": [
    "Tino",
    "Valentin",
    "Voitto"
  ],
  "02-15": [
    "Sipi",
    "Sippo"
  ],
  "02-16": [
    "Kai"
  ],
  "02-17": [
    "Karita",
    "Rita",
    "Väinäm",
    "Väinö"
  ],
  "02-18": [
    "Kaino"
  ],
  "02-19": [
    "Eija"
  ],
  "02-20": [
    "Heljä",
    "Hely",
    "Heli",
    "Helinä"
  ],
  "02-21": [
    "Keijo"
  ],
  "02-22": [
    "Hilda",
    "Tuuli",
    "Tuulia",
    "Tuulikki"
  ],
  "02-23": [
    "Aslak"
  ],
  "02-24": [
    "Matias",
    "Matti"
  ],
  "02-25": [
    "Tuija",
    "Tuire"
  ],
  "02-26": [
    "Nestori"
  ],
  "02-27": [
    "Torsti"
  ],
  "02-28": [
    "Onni"
  ],
  "03-01": [
    "Alpo",
    "Alvi",
    "Alpi"
  ],
  "03-02": [
    "Virve",
    "Fanni",
    "Virva"
  ],
  "03-03": [
    "Kauko"
  ],
  "03-04": [
    "Ari",
    "Atro",
    "Arsi"
  ],
  "03-05": [
    "Laila",
    "Leila"
  ],
  "03-06": [
    "Tarmo"
  ],
  "03-07": [
    "Tarja",
    "Taru"
  ],
  "03-08": [
    "Vilppu"
  ],
  "03-09": [
    "Auvo"
  ],
  "03-10": [
    "Aurora",
    "Aura",
    "Auri"
  ],
  "03-11": [
    "Kalervo"
  ],
  "03-12": [
    "Reijo",
    "Reko"
  ],
  "03-13": [
    "Tarvo",
    "Ernesti",
    "Erno"
  ],
  "03-14": [
    "Matilda",
    "Tilda",
    "Mette"
  ],
  "03-15": [
    "Risto"
  ],
  "03-16": [
    "Ilkka"
  ],
  "03-17": [
    "Kerttu",
    "Kerttuli"
  ],
  "03-18": [
    "Edvard",
    "Eetu"
  ],
  "03-19": [
    "Joosef",
    "Jooseppi",
    "Josefiina",
    "Juuso"
  ],
  "03-20": [
    "Aki",
    "Jaakkima",
    "Joakim",
    "Kim"
  ],
  "03-21": [
    "Pentti"
  ],
  "03-22": [
    "Vihtori"
  ],
  "03-23": [
    "Akseli"
  ],
  "03-24": [
    "Gabriel",
    "Kaappo",
    "Kaapro",
    "Kaapo"
  ],
  "03-25": [
    "Aija"
  ],
  "03-26": [
    "Immanuel",
    "Immo",
    "Manne",
    "Manu"
  ],
  "03-27": [
    "Saul",
    "Sauli"
  ],
  "03-28": [
    "Armas"
  ],
  "03-29": [
    "Joonas",
    "Jouni",
    "Joni",
    "Jonni",
    "Jonne"
  ],
  "03-30": [
    "Usko"
  ],
  "03-31": [
    "Irma",
    "Irmeli"
  ],
  "04-01": [
    "Pulmu",
    "Raita"
  ],
  "04-02": [
    "Pellervo"
  ],
  "04-03": [
    "Sampo"
  ],
  "04-04": [
    "Ukko"
  ],
  "04-05": [
    "Ira",
    "Irene",
    "Irina",
    "Iro"
  ],
  "04-06": [
    "Vilho",
    "Vilhelm",
    "Jami",
    "Vili",
    "Ville",
    "Viljami"
  ],
  "04-07": [
    "Ahvo",
    "Allan"
  ],
  "04-08": [
    "Suoma",
    "Suometar"
  ],
  "04-09": [
    "Eelis",
    "Elias",
    "Eljas"
  ],
  "04-10": [
    "Tero"
  ],
  "04-11": [
    "Verna",
    "Minea"
  ],
  "04-12": [
    "Julia",
    "Juliaana",
    "Julius"
  ],
  "04-13": [
    "Tellervo"
  ],
  "04-14": [
    "Taito"
  ],
  "04-15": [
    "Lina",
    "Tuomi"
  ],
  "04-16": [
    "Jalo",
    "Patrik"
  ],
  "04-17": [
    "Otto"
  ],
  "04-18": [
    "Valdemar",
    "Valto"
  ],
  "04-19": [
    "Pälvi",
    "Pilvi"
  ],
  "04-20": [
    "Lauha",
    "Nella"
  ],
  "04-21": [
    "Anselmi",
    "Anssi"
  ],
  "04-22": [
    "Alina"
  ],
  "04-23": [
    "Jori",
    "Jyri",
    "Yrjänä",
    "Jyrki",
    "Yrjä"
  ],
  "04-24": [
    "Albert",
    "Altti",
    "Pertti"
  ],
  "04-25": [
    "Markku",
    "Marko",
    "Markus"
  ],
  "04-26": [
    "Teresa",
    "Terttu"
  ],
  "04-27": [
    "Merja"
  ],
  "04-28": [
    "Ilpo",
    "Ilppo",
    "Tuure"
  ],
  "04-29": [
    "Teijo"
  ],
  "04-30": [
    "Miia",
    "Mira",
    "Mirja",
    "Mirjami",
    "Mirka",
    "Mirkka",
    "Mirva"
  ],
  "05-01": [
    "Valpuri",
    "Vappu"
  ],
  "05-02": [
    "Viivi",
    "Vuokko"
  ],
  "05-03": [
    "Outi"
  ],
  "05-04": [
    "Roosa",
    "Ruusu"
  ],
  "05-05": [
    "Maini",
    "Melina"
  ],
  "05-06": [
    "Ylermi"
  ],
  "05-07": [
    "Helmi",
    "Kastehelmi"
  ],
  "05-08": [
    "Heino"
  ],
  "05-09": [
    "Timo"
  ],
  "05-10": [
    "Aina",
    "Ainikki",
    "Aino"
  ],
  "05-11": [
    "Osmo"
  ],
  "05-12": [
    "Liotta"
  ],
  "05-13": [
    "Floora",
    "Kukka"
  ],
  "05-14": [
    "Tuula"
  ],
  "05-15": [
    "Sinja",
    "Sofia",
    "Sohvi"
  ],
  "05-16": [
    "Ester",
    "Esteri",
    "Essi"
  ],
  "05-17": [
    "Maili",
    "Maisa",
    "Rebekka",
    "Mailis",
    "Maila"
  ],
  "05-18": [
    "Eero",
    "Erkki",
    "Eerika",
    "Eerikki"
  ],
  "05-19": [
    "Amalia",
    "Emilia",
    "Emmi",
    "Milja",
    "Emma",
    "Milka",
    "Milla",
    "Mila"
  ],
  "05-20": [
    "Lilli",
    "Karoliina",
    "Lilja"
  ],
  "05-21": [
    "Konsta",
    "Konstantin",
    "Kosti"
  ],
  "05-22": [
    "Hemmikki",
    "Hemmo"
  ],
  "05-23": [
    "Lyydia",
    "Lyyli"
  ],
  "05-24": [
    "Tuoko",
    "Tuukka"
  ],
  "05-25": [
    "Urpo"
  ],
  "05-26": [
    "Miina",
    "Mimmi",
    "Vilma",
    "Minna",
    "Vilhelmiina"
  ],
  "05-27": [
    "Ritva"
  ],
  "05-28": [
    "Alma"
  ],
  "05-29": [
    "Oiva",
    "Oivi",
    "Olivia"
  ],
  "05-30": [
    "Pasi"
  ],
  "05-31": [
    "Helga",
    "Helka"
  ],
  "06-01": [
    "Nikodemus",
    "Teemu"
  ],
  "06-02": [
    "Venla"
  ],
  "06-03": [
    "Orvokki",
    "Viola"
  ],
  "06-04": [
    "Toivo"
  ],
  "06-05": [
    "Sulevi"
  ],
  "06-06": [
    "Kustaa",
    "Kustavi",
    "Kyästi"
  ],
  "06-07": [
    "Robert",
    "Roope",
    "Suvi"
  ],
  "06-08": [
    "Salomo",
    "Salomon"
  ],
  "06-09": [
    "Ensio"
  ],
  "06-10": [
    "Seppo"
  ],
  "06-11": [
    "Immi",
    "Impi"
  ],
  "06-12": [
    "Esko"
  ],
  "06-13": [
    "Raila",
    "Raili"
  ],
  "06-14": [
    "Kielo"
  ],
  "06-15": [
    "Viena",
    "Vieno"
  ],
  "06-16": [
    "Päivä",
    "Päivi",
    "Päivikki"
  ],
  "06-17": [
    "Urho"
  ],
  "06-18": [
    "Tapio"
  ],
  "06-19": [
    "Siiri"
  ],
  "06-20": [
    "Into"
  ],
  "06-21": [
    "Ahti",
    "Ahto"
  ],
  "06-22": [
    "PaulaLiina",
    "Pauliina"
  ],
  "06-23": [
    "Aadolf",
    "Aatto",
    "Aatu"
  ],
  "06-24": [
    "Jussi",
    "Juha",
    "Juhani",
    "Jukka",
    "Johannes",
    "Juhana",
    "Jani",
    "Janne",
    "Juho"
  ],
  "06-25": [
    "Uuno"
  ],
  "06-26": [
    "Jorm",
    "Jere",
    "Jarno",
    "Jarmo",
    "Jeremias",
    "Jarkko"
  ],
  "06-27": [
    "Elvi",
    "Elviira"
  ],
  "06-28": [
    "Leo"
  ],
  "06-29": [
    "Pekka",
    "Petri",
    "Pekko",
    "Pietari",
    "Petra",
    "Petteri"
  ],
  "06-30": [
    "Päivö",
    "Päiviö"
  ],
  "07-01": [
    "Aaro",
    "Aaron"
  ],
  "07-02": [
    "Meeri",
    "Maaria",
    "Maija",
    "Maiju",
    "Maikki",
    "Mari",
    "Kukka-Maaria",
    "Marika",
    "Maria"
  ],
  "07-03": [
    "Arvo"
  ],
  "07-04": [
    "Ulla",
    "Ulpu"
  ],
  "07-05": [
    "Untamo",
    "Unto"
  ],
  "07-06": [
    "Esa",
    "Esaias"
  ],
  "07-07": [
    "Klaus",
    "Launo"
  ],
  "07-08": [
    "Turkka",
    "Turo"
  ],
  "07-09": [
    "Ilta",
    "Jade",
    "Jasmin"
  ],
  "07-10": [
    "Saima",
    "Saimi"
  ],
  "07-11": [
    "Eleonoora",
    "Elli",
    "Nelli",
    "Noora"
  ],
  "07-12": [
    "Herman",
    "Hermanni",
    "Herkko"
  ],
  "07-13": [
    "Ilari",
    "Joel",
    "Lari"
  ],
  "07-14": [
    "Aliisa"
  ],
  "07-15": [
    "Rauna",
    "Rauni"
  ],
  "07-16": [
    "Reino"
  ],
  "07-17": [
    "Ossi",
    "Ossian"
  ],
  "07-18": [
    "Riikka"
  ],
  "07-19": [
    "Salla",
    "Salli",
    "Sara",
    "Sari",
    "Saara"
  ],
  "07-20": [
    "Maarit",
    "Maaret",
    "Margareeta",
    "Reeta",
    "Marketta",
    "Reetta"
  ],
  "07-21": [
    "Jonna",
    "Jenni",
    "Jenna",
    "Hanne",
    "Hannele",
    "Johanna",
    "Hanna",
    "Joanna"
  ],
  "07-22": [
    "Leena",
    "Leeni",
    "Lenita",
    "Matleena"
  ],
  "07-23": [
    "Oili",
    "Olga"
  ],
  "07-24": [
    "Kiia",
    "Kirsi",
    "Tiina",
    "Kirsti",
    "Kristiina"
  ],
  "07-25": [
    "Jaakko",
    "Jaakob",
    "Jaakoppi"
  ],
  "07-26": [
    "Martta"
  ],
  "07-27": [
    "Heidi"
  ],
  "07-28": [
    "Atso"
  ],
  "07-29": [
    "Olavi",
    "Olli",
    "Uolevi",
    "Uoti"
  ],
  "07-30": [
    "Asta"
  ],
  "07-31": [
    "Elena",
    "Helena"
  ],
  "08-01": [
    "Maire"
  ],
  "08-02": [
    "Kimmo"
  ],
  "08-03": [
    "Linnea",
    "Nea",
    "Vanamo"
  ],
  "08-04": [
    "Veera"
  ],
  "08-05": [
    "Salme",
    "Sanelma"
  ],
  "08-06": [
    "Keimo",
    "Toimi"
  ],
  "08-07": [
    "Lahja"
  ],
  "08-08": [
    "Silva",
    "Sylvi",
    "Sylvia"
  ],
  "08-09": [
    "Eira",
    "Erja"
  ],
  "08-10": [
    "Lauri",
    "Lasse",
    "Lassi"
  ],
  "08-11": [
    "Sanna",
    "Sanni",
    "Susanna",
    "Susanne"
  ],
  "08-12": [
    "Klaara"
  ],
  "08-13": [
    "Jesse"
  ],
  "08-14": [
    "Kanerva",
    "Onerva"
  ],
  "08-15": [
    "Marja",
    "Jaana",
    "Marjatta",
    "Marjo",
    "Marita",
    "Marjut",
    "Marianne",
    "Maritta",
    "Marjaana",
    "Marjukka",
    "Marianna",
    "Jatta"
  ],
  "08-16": [
    "Aulis"
  ],
  "08-17": [
    "Verneri"
  ],
  "08-18": [
    "Leevi"
  ],
  "08-19": [
    "Mauno",
    "Maunu"
  ],
  "08-20": [
    "Sami",
    "Samuli",
    "Samu",
    "Samuel"
  ],
  "08-21": [
    "Soini",
    "Veini"
  ],
  "08-22": [
    "Iivari",
    "Iivo"
  ],
  "08-23": [
    "Signe",
    "Varma"
  ],
  "08-24": [
    "Perttu"
  ],
  "08-25": [
    "Loviisa"
  ],
  "08-26": [
    "Ilma",
    "Ilmatar",
    "Ilmi"
  ],
  "08-27": [
    "Rauli"
  ],
  "08-28": [
    "Tauno"
  ],
  "08-29": [
    "Iina",
    "Iinari",
    "Iines"
  ],
  "08-30": [
    "Eemeli",
    "Eemil"
  ],
  "08-31": [
    "Arvi"
  ],
  "09-01": [
    "Pirkka"
  ],
  "09-02": [
    "Sini",
    "Sinikka"
  ],
  "09-03": [
    "Soili",
    "Soila",
    "Soile"
  ],
  "09-04": [
    "Ansa"
  ],
  "09-05": [
    "Mainio",
    "Roni"
  ],
  "09-06": [
    "Asko"
  ],
  "09-07": [
    "Miro",
    "Arhippa",
    "Arho"
  ],
  "09-08": [
    "Taimi"
  ],
  "09-09": [
    "Eevert",
    "Isto"
  ],
  "09-10": [
    "Kaleva",
    "Kalevi"
  ],
  "09-11": [
    "Ale",
    "Aleksanteri",
    "Ali",
    "Aleksandra"
  ],
  "09-12": [
    "Valma",
    "Vilja"
  ],
  "09-13": [
    "Orvo"
  ],
  "09-14": [
    "Iida"
  ],
  "09-15": [
    "Sirpa"
  ],
  "09-16": [
    "Hilla",
    "Hille",
    "Hellevi",
    "Hillevi"
  ],
  "09-17": [
    "Aila",
    "Aili"
  ],
  "09-18": [
    "Tytti",
    "Tyyne",
    "Tyyni"
  ],
  "09-19": [
    "Reija"
  ],
  "09-20": [
    "Varpu",
    "Vaula"
  ],
  "09-21": [
    "Mervi"
  ],
  "09-22": [
    "Mauri"
  ],
  "09-23": [
    "Mielikki",
    "Minja",
    "Miisa"
  ],
  "09-24": [
    "Alvar",
    "Auno"
  ],
  "09-25": [
    "Kullervo"
  ],
  "09-26": [
    "Kuisma"
  ],
  "09-27": [
    "Vesa"
  ],
  "09-28": [
    "Arja"
  ],
  "09-29": [
    "Miika",
    "Mikaela",
    "Mikael",
    "Miikka",
    "Miska",
    "Mikko"
  ],
  "09-30": [
    "Sirja",
    "Sorja"
  ],
  "10-01": [
    "Raino",
    "Raine",
    "Rainer",
    "Rauno"
  ],
  "10-02": [
    "Valio"
  ],
  "10-03": [
    "Raimo"
  ],
  "10-04": [
    "Saija",
    "Saila"
  ],
  "10-05": [
    "Inka",
    "Inkeri"
  ],
  "10-06": [
    "Minttu",
    "Pinja"
  ],
  "10-07": [
    "Birgitta",
    "Pirita",
    "Piritta",
    "Pirjo",
    "Pirkko"
  ],
  "10-08": [
    "Hilja"
  ],
  "10-09": [
    "Ilona"
  ],
  "10-10": [
    "Aleksi",
    "Aleksis"
  ],
  "10-11": [
    "Ohto",
    "Otso"
  ],
  "10-12": [
    "Aarre",
    "Aarto"
  ],
  "10-13": [
    "Taija",
    "Taina",
    "Tanja"
  ],
  "10-14": [
    "Elsa",
    "Else",
    "Elsi"
  ],
  "10-15": [
    "Helvi",
    "Heta"
  ],
  "10-16": [
    "Sirkka",
    "Sirkku"
  ],
  "10-17": [
    "Saana",
    "Saini"
  ],
  "10-18": [
    "Säde",
    "Satu"
  ],
  "10-19": [
    "Uljas"
  ],
  "10-20": [
    "Kasperi",
    "Kauno"
  ],
  "10-21": [
    "Ursula"
  ],
  "10-22": [
    "Anniina",
    "Anette",
    "Anitta",
    "Anita",
    "Anja"
  ],
  "10-23": [
    "Severi"
  ],
  "10-24": [
    "Asmo",
    "Rasmus"
  ],
  "10-25": [
    "Sointu"
  ],
  "10-26": [
    "Amanda",
    "Manta",
    "Niina"
  ],
  "10-27": [
    "Hellin",
    "Hellä",
    "Helli",
    "Helle"
  ],
  "10-28": [
    "Simo"
  ],
  "10-29": [
    "Alfred",
    "Urmas"
  ],
  "10-30": [
    "Eila"
  ],
  "10-31": [
    "Arto",
    "Arttu",
    "Artturi"
  ],
  "11-01": [
    "Lyly",
    "Pyry"
  ],
  "11-02": [
    "Topi",
    "Topias"
  ],
  "11-03": [
    "Terho"
  ],
  "11-04": [
    "Hertta"
  ],
  "11-05": [
    "Reima"
  ],
  "11-06": [
  ],
  "11-07": [
    "Taisto"
  ],
  "11-08": [
    "Aatos"
  ],
  "11-09": [
    "Teuvo"
  ],
  "11-10": [
    "Martti"
  ],
  "11-11": [
    "Panu"
  ],
  "11-12": [
    "Virpi"
  ],
  "11-13": [
    "Ano",
    "Kristian"
  ],
  "11-14": [
    "Iiris"
  ],
  "11-15": [
    "Janette",
    "Janita",
    "Janika",
    "Janina"
  ],
  "11-16": [
    "Aarne",
    "Aarni",
    "Aarno"
  ],
  "11-17": [
    "Einari",
    "Eino"
  ],
  "11-18": [
    "Jousia",
    "Tenho"
  ],
  "11-19": [
    "Eliisa",
    "Elisa",
    "Elise",
    "Elisabet",
    "Liisi",
    "Liisa"
  ],
  "11-20": [
    "Jalmari",
    "Jari"
  ],
  "11-21": [
    "Hilma"
  ],
  "11-22": [
    "Selja",
    "Silja"
  ],
  "11-23": [
    "Ismo"
  ],
  "11-24": [
    "Sivi",
    "Lemmikki",
    "Lempi"
  ],
  "11-25": [
    "Katriina",
    "Kaarina",
    "Kaija",
    "Kaisa",
    "Katariina",
    "Kati",
    "Kaisu",
    "Katja",
    "Katri",
    "Riina"
  ],
  "11-26": [
    "Sisko"
  ],
  "11-27": [
    "Hilkka"
  ],
  "11-28": [
    "Heini",
    "Kaisla"
  ],
  "11-29": [
    "Aimo"
  ],
  "11-30": [
    "Antero",
    "Antti",
    "Atte"
  ],
  "12-01": [
    "Oskari"
  ],
  "12-02": [
    "Anelma",
    "Unelma"
  ],
  "12-03": [
    "Meri",
    "Vellamo"
  ],
  "12-04": [
    "Aira",
    "Airi"
  ],
  "12-05": [
    "Selma"
  ],
  "12-06": [
    "Niko",
    "Nikolai",
    "Niilo",
    "Niklas"
  ],
  "12-07": [
    "Sampsa"
  ],
  "12-08": [
    "Kylli",
    "Kyllikki"
  ],
  "12-09": [
    "Anna",
    "Anne",
    "Anneli",
    "Anni",
    "Annika",
    "Annikki",
    "Annukka",
    "Anu"
  ],
  "12-10": [
    "Jutta"
  ],
  "12-11": [
    "Daniel",
    "Taneli",
    "Tatu"
  ],
  "12-12": [
    "Tuovi"
  ],
  "12-13": [
    "Seija"
  ],
  "12-14": [
    "Jouko"
  ],
  "12-15": [
    "Heimo"
  ],
  "12-16": [
    "Aada",
    "Auli",
    "Aulikki"
  ],
  "12-17": [
    "Raakel"
  ],
  "12-18": [
    "Aapo",
    "Aappo",
    "Rami"
  ],
  "12-19": [
    "Iiro",
    "Iikka",
    "Isko",
    "Iisakki"
  ],
  "12-20": [
    "Benjamin",
    "Kerkko"
  ],
  "12-21": [
    "Tuomo",
    "Tommi",
    "Tomi",
    "Tuomas"
  ],
  "12-22": [
    "Raafael"
  ],
  "12-23": [
    "Senni"
  ],
  "12-24": [
    "Aatami",
    "Eeva",
    "Eevi",
    "Eveliina"
  ],
  "12-25": [
  ],
  "12-26": [
    "Tahvo",
    "Tapani",
    "Teppo"
  ],
  "12-27": [
    "Hannes",
    "Hannu"
  ],
  "12-28": [
    "Piia"
  ],
  "12-29": [
    "Rauha"
  ],
  "12-30": [
    "Taavi",
    "Daavid",
    "Taavetti"
  ],
  "12-31": [
    "Silvo",
    "Sylvester"
  ]
}

var weekDays = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];

$( document ).ready( function(){
  updateAPI();
});


setInterval(function(){
  updateAPI();
}, 60000);

function getUpdate(url, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function updateCurrent(data){
  var weatherData = JSON.parse(data);
  var today = new Date();
  document.getElementById("location").innerHTML = "Tapaninvainio"
  //document.getElementById("location").innerHTML = weatherData.name;
  document.getElementById("today").innerHTML = today.toLocaleString('fi', { month: "long" }).captitalize() + " " + today.getDate();
  document.getElementById("weekday").innerHTML = weekDays[today.getDay()];
  sunrise = new Date(weatherData.sys.sunrise * 1000);
  sunset = new Date(weatherData.sys.sunset * 1000);
  document.getElementById("temp").innerHTML = getNegPos(weatherData.main.temp) + roundHalf(weatherData.main.temp);
  document.getElementById("humidity").innerHTML = weatherData.main.humidity;
  document.getElementById("weather_description").innerHTML = (weatherData.weather[0].description).captitalize();
  document.getElementById("weather_icon").className = getIcon(weatherData.weather[0].id, true) + " font4";
  document.getElementById("wind_speed").innerHTML = weatherData.wind.speed + " m/s";
  setDirection(weatherData.wind.deg);
  document.getElementById("sunrise").innerHTML = parseTime(weatherData.sys.sunrise);
  document.getElementById("sunset").innerHTML = parseTime(weatherData.sys.sunset);
}

function getNegPos(value){
  if(roundHalf(value) <= 0){
    return "";
  }
  return "+";
}

function getIcon(code, dayFactor){
  var prefix = 'wi wi-';
  var icon = weatherIcons[code].icon;
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    var now = new Date();
    if(dayFactor){
      if(sunrise <= now && now <= sunset){
        icon = 'day-' + icon;
      } else {
        icon = 'night-' + icon;
      }
    } else {
        icon = 'day-' + icon;
    }
  }
  icon = prefix + icon;
  return icon;
}

function setDirection(closestTo){
  var arr = [0, 23, 45, 68, 90, 113, 135, 158, 180, 203, 225, 248, 270, 293, 313, 336]
  var closest = Math.max.apply(null, arr);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] >= closestTo && arr[i] < closest) closest = arr[i];
  }
  document.getElementById("wind_direction").className = "wi wi-wind from-"+closest+"-deg";
}

function updateWeek(data){
  var weatherData = JSON.parse(data).list;
  document.getElementById("temp_min").innerHTML = "Min " + getNegPos(weatherData[0].temp.min) + roundHalf(weatherData[0].temp.min);
  document.getElementById("temp_max").innerHTML = "Max " + getNegPos(weatherData[0].temp.min) + roundHalf(weatherData[0].temp.max);
  for (var i = 0; i < 6; i++) {
    var date = new Date(weatherData[i].dt * 1000);
    document.getElementById("date" + i).innerHTML = weekDays[date.getDay()];
    document.getElementById("date" + i + "_val").innerHTML = getNegPos(weatherData[i].temp.day) + Math.round(weatherData[i].temp.day);
    //document.getElementById("date" + i + "_clock").className = "wi wi-time-" + (date.getHours() % 12 || 12);
    document.getElementById("date" + i + "_icon").className = getIcon(weatherData[i].weather[0].id);
  }
}

function updateAPI(){
  getUpdate("http://api.openweathermap.org/data/2.5/weather?lat=60.257046&lon=24.980288&appid=b20c1615c5aed86d33275ca3ef8e94c4&lang=fi&units=metric",updateCurrent);
  getUpdate("http://api.openweathermap.org/data/2.5/forecast/daily?lat=60.257046&lon=24.980288&appid=b20c1615c5aed86d33275ca3ef8e94c4&lang=fi&units=metric", updateWeek);
  updateNames(new Date());
}

function parseTime(time){
  var date = new Date(time * 1000);
  return addZero(date.getHours()) + ":" + addZero(date.getMinutes());
}

function addZero(number){
  if(number < 10){
    number = "0" + number;
  }
  return number
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = addZero(m);
  s = addZero(s);
  document.getElementById('clock').innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function roundHalf(num) {
  return Math.round(num*2)/2;
}

function updateNames(date){
  var day = date.getDate();
  var month = date.getMonth()+1;
  if(day < 10){
    day = "0" + day;
  }
  if(month < 10){
    month = "0" + month;
  }
  if(day == 29 && month == 2){
    document.getElementById("nameday").innerHTML = "Karkauspäivä!"
  } else {
    if(nimipaivat[month + "-" + day].length == 1) {
        document.getElementById("nameday").innerHTML = "<b>Nimipäiväänsä viettää</b><br>" + nimipaivat[month + "-" + day].join("<br>");
    } else {
      document.getElementById("nameday").innerHTML = "<b>Nimipäiviään viettävät</b><br>" + nimipaivat[month + "-" + day].join("<br>");
    }

  }
}
