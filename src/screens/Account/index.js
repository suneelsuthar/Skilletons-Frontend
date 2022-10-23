import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Alert,
  Image,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Input, Button } from "./../../components";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false,
      selectedItems: [],
      showCountryList: false,
      showTimeZone: false,
      showTimeformat: false,
      selectedTimeFormat: "12H",
      showDateformat: false,
      selectedDateFormat: "DD:MM:YYYY",
      showCopany: false,
      selectedcompany: "",
      showCopanySize: false,
      selectedcompanySize: "",
      showCopanyRevinue: false,
      selectedcompanyRevinue: "",
      search: "",
      search2: "",
      selectedZone: "",
      items: [
        { name: "Afghanistan", id: "Afghanistan", selected: false },
        { name: "land Islands", id: "land Islands", selected: false },
        { name: "Albania", selected: false },
        { name: "Algeria", selected: false },
        { name: "American Samoa", selected: false },
        { name: "AndorrA", selected: false },
        { name: "Angola", selected: false },
        { name: "Anguilla", selected: false },
        { name: "Antarctica", selected: false },
        { name: "Antigua and Barbuda", selected: false },
        { name: "Argentina", selected: false },
        { name: "Armenia", selected: false },
        { name: "Aruba", selected: false },
        { name: "Australia", selected: false },
        { name: "Austria", selected: false },
        { name: "Azerbaijan", selected: false },
        { name: "Bahamas", selected: false },
        { name: "Bahrain", selected: false },
        { name: "Bangladesh", selected: false },
        { name: "Barbados", selected: false },
        { name: "Belarus", selected: false },
        { name: "Belgium", selected: false },
        { name: "Belize", selected: false },
        { name: "Benin", selected: false },
        { name: "Bermuda", selected: false },
        { name: "Bhutan", selected: false },
        { name: "Bolivia", selected: false },
        { name: "Bosnia and Herzegovina", selected: false },
        { name: "Bosnia and Herzegovina", selected: false },
        { name: "Bouvet Island", selected: false },
        { name: "Brazil", selected: false },
        {
          name: "British Indian Ocean Territory",
          selected: false,
        },
        { name: "Brunei Darussalam", selected: false },
        { name: "Bulgaria", selected: false },
        { name: "Burkina Faso", selected: false },
        { name: "Burundi", selected: false },
        { name: "Cambodia", selected: false },
        { name: "Cameroon", selected: false },
        { name: "Canada", selected: false },
        { name: "Cape Verde", selected: false },
        { name: "Cayman Islands", selected: false },
        { name: "Central African Republic", selected: false },
        { name: "Chad", selected: false },
        { name: "Chile", selected: false },
        { name: "China", selected: false },
        { name: "Christmas Island", selected: false },
        { name: "Cocos (Keeling) Islands", selected: false },
        { name: "Colombia", selected: false },
        { name: "Comoros", selected: false },
        { name: "Congo", selected: false },
        {
          name: "Congo, The Democratic Republic of the",
          selected: false,
        },
        { name: "Cook Islands", selected: false },
        { name: "Costa Rica", selected: false },
        { name: "Cote D Ivoire", selected: false },
        { name: "Croatia", selected: false },
        { name: "Cuba", selected: false },
        { name: "Cyprus", selected: false },
        { name: "Czech Republic", selected: false },
        { name: "Denmark", selected: false },
        { name: "Djibouti", selected: false },
        { name: "Dominica", selected: false },
        { name: "Dominican Republic", selected: false },
        { name: "Ecuador", selected: false },
        { name: "Egypt", selected: false },
        { name: "El Salvador", selected: false },
        { name: "Equatorial Guinea", selected: false },
        { name: "Eritrea", selected: false },
        { name: "Estonia", selected: false },
        { name: "Ethiopia", selected: false },
        {
          name: "Falkland Islands (Malvinas)",
          selected: false,
        },
        { name: "Faroe Islands", selected: false },
        { name: "Fiji", selected: false },
        { name: "Finland", selected: false },
        { name: "France", selected: false },
        { name: "French Guiana", selected: false },
        { name: "French Polynesia", selected: false },
        {
          name: "French Southern Territories",
          selected: false,
        },
        { name: "Gabon", selected: false },
        { name: "Gambia", selected: false },
        { name: "Georgia", selected: false },
        { name: "Germany", selected: false },
        { name: "Ghana", selected: false },
        { name: "Gibraltar", selected: false },
        { name: "Greece", selected: false },
        { name: "Greenland", selected: false },
        { name: "Grenada", selected: false },
        { name: "Guadeloupe", selected: false },
        { name: "Guam", selected: false },
        { name: "Guatemala", selected: false },
        { name: "Guernsey", selected: false },
        { name: "Guinea", selected: false },
        { name: "Guinea-Bissau", selected: false },
        { name: "Guyana", selected: false },
        { name: "Haiti", selected: false },
        {
          name: "Heard Island and Mcdonald Islands",
          selected: false,
        },
        { name: "Holy See (Vatican City State)", selected: false },
        { name: "Honduras", selected: false },
        { name: "Hong Kong", selected: false },
        { name: "Hungary", selected: false },
        { name: "Iceland", selected: false },
        { name: "India", selected: false },
        { name: "Indonesia", selected: false },
        { name: "Iran, Islamic Republic Of", selected: false },
        { name: "Iraq", selected: false },
        { name: "Ireland", selected: false },
        { name: "Isle of Man", selected: false },
        { name: "Israel", selected: false },
        { name: "Italy", selected: false },
        { name: "Jamaica", selected: false },
        { name: "Japan", selected: false },
        { name: "Jersey", selected: false },
        { name: "Jordan", selected: false },
        { name: "Kazakhstan", selected: false },
        { name: "Kenya", selected: false },
        { name: "Kiribati", selected: false },
        { name: "Korea, Democratic People S Republic of", selected: false },
        { name: "Kuwait", selected: false },
        { name: "Kyrgyzstan", selected: false },
        { name: "Lao PeopleS Democratic Republic", selected: false },
        { name: "Latvia", selected: false },
        { name: "Lebanon", selected: false },
        { name: "Lesotho", selected: false },
        { name: "Liberia", selected: false },
        { name: "Libyan Arab Jamahiriya", selected: false },
        { name: "Liechtenstein", selected: false },
        { name: "Lithuania", selected: false },
        { name: "Luxembourg", selected: false },
        { name: "Macao", selected: false },
        { name: "Macedonia, The Former Yugoslav Republic of", selected: false },
        { name: "Madagascar", selected: false },
        { name: "Malawi", selected: false },
        { name: "Malaysia", selected: false },
        { name: "Maldives", selected: false },
        { name: "Mali", selected: false },
        { name: "Malta", selected: false },
        { name: "Marshall Islands", selected: false },
        { name: "Martinique", selected: false },
        { name: "Mauritania", selected: false },
        { name: "Mauritius", selected: false },
        { name: "Mayotte", selected: false },
        { name: "Mexico", selected: false },
        { name: "Micronesia, Federated States of", selected: false },
        { name: "Moldova, Republic of", selected: false },
        { name: "Monaco", selected: false },
        { name: "Mongolia", selected: false },
        { name: "Montenegro", selected: false },
        { name: "Montserrat", selected: false },
        { name: "Morocco", selected: false },
        { name: "Mozambique", selected: false },
        { name: "Myanmar", selected: false },
        { name: "Namibia", selected: false },
        { name: "Nauru", selected: false },
        { name: "Nepal", selected: false },
        { name: "Netherlands", selected: false },
        { name: "Netherlands Antilles", selected: false },
        { name: "New Caledonia", selected: false },
        { name: "New Zealand", selected: false },
        { name: "Nicaragua", selected: false },
        { name: "Niger", selected: false },
        { name: "Nigeria", selected: false },
        { name: "Niue", selected: false },
        { name: "Norfolk Island", selected: false },
        { name: "Northern Mariana Islands", selected: false },
        { name: "Norway", selected: false },
        { name: "Oman", selected: false },
        { name: "Pakistan", selected: false },
        { name: "Palau", selected: false },
        {
          name: "Palestinian Territory, Occupied",
          selected: false,
        },
        { name: "Panama", selected: false },
        { name: "Papua New Guinea", selected: false },
        { name: "Paraguay", selected: false },
        { name: "Peru", selected: false },
        { name: "Philippines", selected: false },
        { name: "Pitcairn", selected: false },
        { name: "Poland", selected: false },
        { name: "Portugal", selected: false },
        { name: "Puerto Rico", selected: false },
        { name: "Qatar", selected: false },
        { name: "Reunion", selected: false },
        { name: "Romania", selected: false },
        { name: "Russian Federation", selected: false },
        { name: "RWANDA", selected: false },
        { name: "Saint Helena", selected: false },
        { name: "Saint Kitts and Nevis", selected: false },
        { name: "Saint Lucia", selected: false },
        { name: "Saint Pierre and Miquelon", selected: false },
        {
          name: "Saint Vincent and the Grenadines",
          selected: false,
        },
        { name: "Samoa", selected: false },
        { name: "San Marino", selected: false },
        { name: "Sao Tome and Principe", selected: false },
        { name: "Saudi Arabia", selected: false },
        { name: "Senegal", selected: false },
        { name: "Serbia", selected: false },
        { name: "Seychelles", selected: false },
        { name: "Sierra Leone", selected: false },
        { name: "Singapore", selected: false },
        { name: "Slovakia", selected: false },
        { name: "Slovenia", selected: false },
        { name: "Solomon Islands", selected: false },
        { name: "Somalia", selected: false },
        { name: "South Africa", selected: false },
        {
          name: "South Georgia and the South Sandwich Islands",
          selected: false,
        },
        { name: "Spain", selected: false },
        { name: "Sri Lanka", selected: false },
        { name: "Sudan", selected: false },
        { name: "Suriname", selected: false },
        { name: "Svalbard and Jan Mayen", selected: false },
        { name: "Swaziland", selected: false },
        { name: "Sweden", selected: false },
        { name: "Switzerland", selected: false },
        { name: "Syrian Arab Republic", selected: false },
        { name: "Taiwan, Province of China", selected: false },
        { name: "Tajikistan", selected: false },
        {
          name: "Tanzania, United Republic of",
          selected: false,
        },
        { name: "Thailand", selected: false },
        { name: "Timor-Leste", selected: false },
        { name: "Togo", selected: false },
        { name: "Tokelau", selected: false },
        { name: "Tonga", selected: false },
        { name: "Trinidad and Tobago", selected: false },
        { name: "Tunisia", selected: false },
        { name: "Turkey", selected: false },
        { name: "Turkmenistan", selected: false },
        { name: "Turks and Caicos Islands", selected: false },
        { name: "Tuvalu", selected: false },
        { name: "Uganda", selected: false },
        { name: "Ukraine", selected: false },
        { name: "United Arab Emirates", selected: false },
        { name: "United Kingdom", selected: false },
        { name: "United States", selected: false },
        {
          name: "United States Minor Outlying Islands",
          selected: false,
        },
        { name: "Uruguay", selected: false },
        { name: "Uzbekistan", selected: false },
        { name: "Vanuatu", selected: false },
        { name: "Venezuela", selected: false },
        { name: "Viet Nam", selected: false },
        { name: "Virgin Islands, British", selected: false },
        { name: "Virgin Islands, U.S.", selected: false },
        { name: "Wallis and Futuna", selected: false },
        { name: "Western Sahara", selected: false },
        { name: "Yemen", selected: false },
        { name: "Zambia", selected: false },
        { name: "Zimbabwe", selected: false },
      ],
      timeZone: [
        "Africa/Abidjan",
        "Africa/Accra",
        "Africa/Addis_Ababa",
        "Africa/Algiers",
        "Africa/Asmara",
        "Africa/Asmera",
        "Africa/Bamako",
        "Africa/Bangui",
        "Africa/Banjul",
        "Africa/Bissau",
        "Africa/Blantyre",
        "Africa/Brazzaville",
        "Africa/Bujumbura",
        "Africa/Cairo",
        "Africa/Casablanca",
        "Africa/Ceuta",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Dar_es_Salaam",
        "Africa/Djibouti",
        "Africa/Douala",
        "Africa/El_Aaiun",
        "Africa/Freetown",
        "Africa/Gaborone",
        "Africa/Harare",
        "Africa/Johannesburg",
        "Africa/Juba",
        "Africa/Kampala",
        "Africa/Khartoum",
        "Africa/Kigali",
        "Africa/Kinshasa",
        "Africa/Lagos",
        "Africa/Libreville",
        "Africa/Lome",
        "Africa/Luanda",
        "Africa/Lubumbashi",
        "Africa/Lusaka",
        "Africa/Malabo",
        "Africa/Maputo",
        "Africa/Maseru",
        "Africa/Mbabane",
        "Africa/Mogadishu",
        "Africa/Monrovia",
        "Africa/Nairobi",
        "Africa/Ndjamena",
        "Africa/Niamey",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Porto-Novo",
        "Africa/Sao_Tome",
        "Africa/Timbuktu",
        "Africa/Tripoli",
        "Africa/Tunis",
        "Africa/Windhoek",
        "America/Adak",
        "America/Anchorage",
        "America/Anguilla",
        "America/Antigua",
        "America/Araguaina",
        "America/Argentina/Buenos_Aires",
        "America/Argentina/Catamarca",
        "America/Argentina/ComodRivadavia",
        "America/Argentina/Cordoba",
        "America/Argentina/Jujuy",
        "America/Argentina/La_Rioja",
        "America/Argentina/Mendoza",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Salta",
        "America/Argentina/San_Juan",
        "America/Argentina/San_Luis",
        "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia",
        "America/Aruba",
        "America/Asuncion",
        "America/Atikokan",
        "America/Atka",
        "America/Bahia",
        "America/Bahia_Banderas",
        "America/Barbados",
        "America/Belem",
        "America/Belize",
        "America/Blanc-Sablon",
        "America/Boa_Vista",
        "America/Bogota",
        "America/Boise",
        "America/Buenos_Aires",
        "America/Cambridge_Bay",
        "America/Campo_Grande",
        "America/Cancun",
        "America/Caracas",
        "America/Catamarca",
        "America/Cayenne",
        "America/Cayman",
        "America/Chicago",
        "America/Chihuahua",
        "America/Coral_Harbour",
        "America/Cordoba",
        "America/Costa_Rica",
        "America/Creston",
        "America/Cuiaba",
        "America/Curacao",
        "America/Danmarkshavn",
        "America/Dawson",
        "America/Dawson_Creek",
        "America/Denver",
        "America/Detroit",
        "America/Dominica",
        "America/Edmonton",
        "America/Eirunepe",
        "America/El_Salvador",
        "America/Ensenada",
        "America/Fort_Nelson",
        "America/Fort_Wayne",
        "America/Fortaleza",
        "America/Glace_Bay",
        "America/Godthab",
        "America/Goose_Bay",
        "America/Grand_Turk",
        "America/Grenada",
        "America/Guadeloupe",
        "America/Guatemala",
        "America/Guayaquil",
        "America/Guyana",
        "America/Halifax",
        "America/Havana",
        "America/Hermosillo",
        "America/Indiana/Indianapolis",
        "America/Indiana/Knox",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Tell_City",
        "America/Indiana/Vevay",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Indianapolis",
        "America/Inuvik",
        "America/Iqaluit",
        "America/Jamaica",
        "America/Jujuy",
        "America/Juneau",
        "America/Kentucky/Louisville",
        "America/Kentucky/Monticello",
        " America/Knox_IN",
        " America/Kralendijk",
        " America/La_Paz",
        " America/Lima",
        " America/Los_Angeles",
        " America/Louisville",
        " America/Lower_Princes",
        " America/Maceio",
        " America/Managua",
        " America/Manaus",
        " America/Marigot",
        " America/Martinique",
        " America/Matamoros",
        " America/Mazatlan",
        " America/Mendoza",
        " America/Menominee",
        " America/Merida",
        " America/Metlakatla",
        " America/Mexico_City",
        " America/Miquelon",
        " America/Moncton",
        " America/Monterrey",
        " America/Montevideo",
        "America/Montreal",
        "America/Montserrat",
        "America/Nassau",
        "America/New_York",
        "America/Nipigon",
        "America/Nome",
        "America/Noronha",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/Ojinaga",
        "America/Panama",
        "America/Pangnirtung",
        "America/Paramaribo",
        "America/Phoenix",
        "America/Port-au-Prince",
        "America/Port_of_Spain",
        "America/Porto_Acre",
        "America/Porto_Velho",
        "America/Puerto_Rico",
        "America/Punta_Arenas",
        "America/Rainy_River",
        "America/Rankin_Inlet",
        "America/Recife",
        "America/Regina",
        "America/Resolute",
        "America/Rio_Branco",
        "America/Rosario",
        "America/Santa_Isabel",
        "America/Santarem",
        "America/Santiago",
        "America/Santo_Domingo",
        "America/Sao_Paulo",
        "America/Scoresbysund",
        "America/Shiprock",
        "America/Sitka",
        "America/St_Barthelemy",
        "America/St_Johns",
        "America/St_Kitts",
        "America/St_Lucia",
        "America/St_Thomas",
        "America/St_Vincent",
        "America/Swift_Current",
        "America/Tegucigalpa",
        "America/Thule",
        "America/Thunder_Bay",
        "America/Tijuana",
        "America/Toronto",
        "America/Tortola",
        "America/Vancouver",
        "America/Virgin",
        "America/Whitehorse",
        "America/Winnipeg",
        "America/Yakutat",
        "America/Yellowknife",
        "Antarctica/Casey",
        "Antarctica/Davis",
        "Antarctica/DumontDUrville",
        "Antarctica/Macquarie",
        "Antarctica/Mawson",
        "Antarctica/McMurdo",
        "Antarctica/Palmer",
        "Antarctica/Rothera",
        "Antarctica/South_Pole",
        "Antarctica/Syowa",
        "Antarctica/Troll",
        "Antarctica/Vostok",
        "Arctic/Longyearbyen",
        "Asia/Aden",
        "Asia/Almaty",
        "Asia/Amman",
        "Asia/Anadyr",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Ashkhabad",
        "Asia/Atyrau",
        "Asia/Baghdad",
        "Asia/Bahrain",
        "Asia/Baku",
        "Asia/Bangkok",
        "Asia/Barnaul",
        "Asia/Beirut",
        "Asia/Bishkek",
        "Asia/Brunei",
        "Asia/Calcutta",
        "Asia/Chita",
        "Asia/Choibalsan",
        "Asia/Chongqing",
        "Asia/Chungking",
        "Asia/Colombo",
        "Asia/Dacca",
        "Asia/Damascus",
        "Asia/Dhaka",
        "Asia/Dili",
        "Asia/Dubai",
        "Asia/Dushanbe",
        "Asia/Famagusta",
        "Asia/Gaza",
        "Asia/Harbin",
        "Asia/Hebron",
        "Asia/Ho_Chi_Minh",
        "Asia/Hong_Kong",
        "Asia/Hovd",
        "Asia/Irkutsk",
        "Asia/Istanbul",
        "Asia/Jakarta",
        "Asia/Jayapura",
        "Asia/Jerusalem",
        "Asia/Kabul",
        "Asia/Kamchatka",
        "Asia/Karachi",
        "Asia/Kashgar",
        "Asia/Kathmandu",
        "Asia/Katmandu",
        "Asia/Khandyga",
        "Asia/Kolkata",
        "Asia/Krasnoyarsk",
        "Asia/Kuala_Lumpur",
        "Asia/Kuching",
        "Asia/Kuwait",
        "Asia/Macao",
        "Asia/Macau",
        "Asia/Magadan",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Muscat",
        "Asia/Nicosia",
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk",
        "Asia/Oral",
        "Asia/Phnom_Penh",
        "Asia/Pontianak",
        "Asia/Pyongyang",
        "Asia/Qatar",
        "Asia/Qyzylorda",
        "Asia/Rangoon",
        "Asia/Riyadh",
        "Asia/Saigon",
        "Asia/Sakhalin",
        "Asia/Samarkand",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Singapore",
        "Asia/Srednekolymsk",
        "Asia/Taipei",
        "Asia/Tashkent",
        "Asia/Tbilisi",
        "Asia/Tehran",
        "Asia/Tel_Aviv",
        "Asia/Thimbu",
        "Asia/Thimphu",
        "Asia/Tokyo",
        "Asia/Tomsk",
        "Asia/Ujung_Pandang",
        "Asia/Ulaanbaatar",
        "Asia/Ulan_Bator",
        "Asia/Urumqi",
        "Asia/Ust-Nera",
        "Asia/Vientiane",
        "Asia/Vladivostok",
        "Asia/Yakutsk",
        "Asia/Yangon",
        "Asia/Yekaterinburg",
        "Asia/Yerevan",
        "Atlantic/Azores",
        "Atlantic/Bermuda",
        "Atlantic/Canary",
        "Atlantic/Cape_Verde",
        "Atlantic/Faeroe",
        "Atlantic/Faroe",
        "Atlantic/Jan_Mayen",
        "Atlantic/Madeira",
        "Atlantic/Reykjavik",
        "Atlantic/South_Georgia",
        "Atlantic/St_Helena",
        "Atlantic/Stanley",
        "Australia/ACT",
        "Australia/Adelaide",
        "Australia/Brisbane",
        "Australia/Broken_Hill",
        "Australia/Canberra",
        "Australia/Currie",
        "Australia/Darwin",
        "Australia/Eucla",
        "Australia/Hobart",
        "Australia/LHI",
        "Australia/Lindeman",
        "Australia/Lord_Howe",
        "Australia/Melbourne",
        "Australia/NSW",
        "Australia/North",
        "Australia/Perth",
        "Australia/Queensland",
        "Australia/South",
        "Australia/Sydney",
        "Australia/Tasmania",
        "Australia/Victoria",
        "Australia/West",
        "Australia/Yancowinna",
        "Brazil/Acre",
        "Brazil/DeNoronha",
        "Brazil/East",
        "Brazil/West",
        "CET",
        "CST6CDT",
        "Canada/Atlantic",
        "Canada/Central",
        "Canada/Eastern",
        "Canada/Mountain",
        "Canada/Newfoundland",
        "Canada/Pacific",
        "Canada/Saskatchewan",
        "Canada/Yukon",
        "Chile/Continental",
        "Chile/EasterIsland",
        "Cuba",
        "EET",
        "EST",
        "EST5EDT",
        "Egypt",
        "Eire",
        "Etc/GMT",
        "Etc/GMT+0",
        "Etc/GMT+1",
        "Etc/GMT+10",
        "Etc/GMT+11",
        "Etc/GMT+12",
        "Etc/GMT+2",
        "Etc/GMT+3",
        "Etc/GMT+4",
        "Etc/GMT+5",
        "Etc/GMT+6",
        "Etc/GMT+7",
        "Etc/GMT+8",
        "Etc/GMT+9",
        "Etc/GMT-0",
        "Etc/GMT-1",
        "Etc/GMT-10",
        "Etc/GMT-11",
        "Etc/GMT-12",
        "Etc/GMT-13",
        "Etc/GMT-14",
        "Etc/GMT-2",
        "Etc/GMT-3",
        "Etc/GMT-4",
        "Etc/GMT-5",
        "Etc/GMT-6",
        "Etc/GMT-7",
        "Etc/GMT-8",
        "Etc/GMT-9",
        "Etc/GMT0",
        "Etc/Greenwich",
        "Etc/UCT",
        "Etc/UTC",
        "Etc/Universal",
        "Etc/Zulu",
        "Europe/Amsterdam",
        "Europe/Andorra",
        "Europe/Astrakhan",
        "Europe/Athens",
        "Europe/Belfast",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Bratislava",
        "Europe/Brussels",
        "Europe/Bucharest",
        "Europe/Budapest",
        "Europe/Busingen",
        "Europe/Chisinau",
        "Europe/Copenhagen",
        "Europe/Dublin",
        "Europe/Gibraltar",
        "Europe/Guernsey",
        "Europe/Helsinki",
        "Europe/Isle_of_Man",
        "Europe/Istanbul",
        "Europe/Jersey",
        "Europe/Kaliningrad",
        "Europe/Kiev",
        "Europe/Kirov",
        "Europe/Lisbon",
        "Europe/Ljubljana",
        "Europe/London",
        "Europe/Luxembourg",
        "Europe/Madrid",
        "Europe/Malta",
        "Europe/Mariehamn",
        "Europe/Minsk",
        "Europe/Monaco",
        "Europe/Moscow",
        "Europe/Nicosia",
        "Europe/Oslo",
        "Europe/Paris",
        "Europe/Podgorica",
        "Europe/Prague",
        "Europe/Riga",
        "Europe/Rome",
        "Europe/Samara",
        "Europe/San_Marino",
        "Europe/Sarajevo",
        "Europe/Saratov",
        "Europe/Simferopol",
        "Europe/Skopje",
        "Europe/Sofia",
        "Europe/Stockholm",
        "Europe/Tallinn",
        "Europe/Tirane",
        "Europe/Tiraspol",
        "Europe/Ulyanovsk",
        "Europe/Uzhgorod",
        "Europe/Vaduz",
        "Europe/Vatican",
        "Europe/Vienna",
        "Europe/Vilnius",
        "Europe/Volgograd",
        "Europe/Warsaw",
        "Europe/Zagreb",
        "Europe/Zaporozhye",
        "Europe/Zurich",
        "GB",
        "GB-Eire",
        "GMT",
        "GMT+0",
        "GMT-0",
        "GMT0",
        "Greenwich",
        "HST",
        "Hongkong",
        "Iceland",
        "Indian/Antananarivo",
        "Indian/Chagos",
        "Indian/Christmas",
        "Indian/Cocos",
        "Indian/Comoro",
        "Indian/Kerguelen",
        "Indian/Mahe",
        "Indian/Maldives",
        "Indian/Mauritius",
        "Indian/Mayotte",
        "Indian/Reunion",
        "Iran",
        "Israel",
        "Jamaica",
        "Japan",
        "Kwajalein",
        "Libya",
        "MET",
        "MST",
        "MST7MDT",
        "Mexico/BajaNorte",
        "Mexico/BajaSur",
        "Mexico/General",
        "NZ",
        "NZ-CHAT",
        "Navajo",
        "PRC",
        "PST8PDT",
        "Pacific/Apia",
        "Pacific/Auckland",
        "Pacific/Bougainville",
        "Pacific/Chatham",
        "Pacific/Chuuk",
        "Pacific/Easter",
        "Pacific/Efate",
        "Pacific/Enderbury",
        "Pacific/Fakaofo",
        "Pacific/Fiji",
        "Pacific/Funafuti",
        "Pacific/Galapagos",
        "Pacific/Gambier",
        "Pacific/Guadalcanal",
        "Pacific/Guam",
        "Pacific/Honolulu",
        "Pacific/Johnston",
        "Pacific/Kiritimati",
        "Pacific/Kosrae",
        "Pacific/Kwajalein",
        "Pacific/Majuro",
        "Pacific/Marquesas",
        "Pacific/Midway",
        "Pacific/Nauru",
        "Pacific/Niue",
        "Pacific/Norfolk",
        "Pacific/Noumea",
        "Pacific/Pago_Pago",
        "Pacific/Palau",
        "Pacific/Pitcairn",
        "Pacific/Pohnpei",
        "Pacific/Ponape",
        "Pacific/Port_Moresby",
        "Pacific/Rarotonga",
        "Pacific/Saipan",
        "Pacific/Samoa",
        "Pacific/Tahiti",
        "Pacific/Tarawa",
        "Pacific/Tongatapu",
        "Pacific/Truk",
        "Pacific/Wake",
        "Pacific/Wallis",
        "Pacific/Yap",
        "Poland",
        "Portugal",
        "ROC",
        "ROK",
        "Singapore",
        "Turkey",
        "UCT",
        "US/Alaska",
        "US/Aleutian",
        "US/Arizona",
        "US/Central",
        "US/East-Indiana",
        "US/Eastern",
        "US/Hawaii",
        "US/Indiana-Starke",
        "US/Michigan",
        "US/Mountain",
        "US/Pacific",
        "US/Pacific-New",
        "US/Samoa",
        "UTC",
        "Universal",
        "W-SU",
        "WET",
        "Zulu",
      ],
      image: null,
    };
  }
  // REACT LIFECYCLE
  componentDidMount = async () => {
    // Get permission for take pic from gallery
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  //<<<<<<<< LOGIC FOR MULTIPLE COUNTRY SELECT >>>>>>
  onSelectedItemsChange = (val, index) => {
    let selectedItems = this.state.items;
    if (selectedItems[index].selected === false) {
      selectedItems[index].selected = true;
    } else {
      selectedItems[index].selected = false;
    }
    this.setState({ items: selectedItems });
  };
  //<<<<<<<<<<<<<< DROP DOWN MENUE >>>>>>>>>>>>>>>>>>
  SelectItem = (val) => {
    this.setState({ visibleModal: false });
    if (val === "logout") this.props.navigation.navigate("StartNetworking");
    if (val === "profile") {
      this.pickImage();
    }
  };
  //<<<<<<<<<<<<<SHOW COUNTRY PICKER >>>>>>>>>>>>>>>>
  ShowCountryPicker = (visible) => {
    this.setState({ showCountryList: visible });
  };
  //<<<<<<<<<<<<<SEARCH COUNTRY>>>>>>>>>>>>>>>>>>>>>>
  filterList(list) {
    return list.filter((listItem) =>
      listItem.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
  }
  //<<<<<<<<<<<<<SEARCH TIME ZONE>>>>>>>>>>>>>>>>>>>>>>
  filsterTimeZone(list) {
    return list.filter((listItem) =>
      listItem.toLowerCase().includes(this.state.search2.toLowerCase())
    );
  }
  //<<<<<<<<<UN-SELECTE COUNTRY FROM LIST>>>>>>>>>>>>>>
  unCheckCountry = (index) => {
    let selectedItems = this.state.items;
    selectedItems[index].selected = false;
    this.setState({ items: selectedItems });
  };
  //<<<<<<<<<<<<<<<< DELTE ACCOUNT>>>>>>>>>>>>>>>>>>>>
  deleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "YES,DELETE", onPress: () => console.log("OK Pressed") },
    ]);
  };
  // <<<<<<<<<<<< PICK IMAGE FROM GALLERY >>>>>>>>>>>>>
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  render() {
    const {
      showCountryList,
      items,
      showTimeZone,
      selectedZone,
      timeZone,
      showTimeformat,
      selectedTimeFormat,
      showDateformat,
      selectedDateFormat,
      image,
      showCopany,
      selectedcompany,
      showCopanySize,
      selectedcompanySize,
      showCopanyRevinue,
      selectedcompanyRevinue,
    } = this.state;

    let company = [
      "--",
      "Accounting",
      "Airlines/Aviation",
      "Alternative Medicine",
      "Animation",
      "Apparel & Fashion",
      "Architecture & Planning",
      "Arts & Crafts",
      "Automotive",
      "Aviation & Aerospace",
      "Banking",
      "Biotechnology",
      "Brodcast Media",
      "Building Material",
      "Business Supplies & Equipment",
      "Capital Markets",
      "Chemicals",
      "Civic & Social Organization",
      "Civil Engineering",
      "Commercial Real Estate",
      "Computer & Network Security",
      "Computer Games",
      "Computer Hardware",
      "Computer Networking",
      "Computer Software",
      "Construction",
      "Consumer Electronics",
      "Consumer Goods",
      "Consumer Services",
      "Cosmetics",
      "Dairy",
      "Defense & Space",
      "Design",
      "Education Management",
      "E-Learning",
      "Electrical & Electronic Manufacturing",
      "Entertainiment",
      "Environmental Services",
      "Events Services",
      "Executive Office",
      "Facilities Services",
      "Farming",
      "Financial Services",
      "Fine Art",
      "Fishery",
      "Food & Bevarages",
      "Food Production",
      "Fundraising",
      "Furniture",
      "Gambling & Casinos",
      "Glass, Ceramics & Concrete",
      "Government Administration",
      "Government Relations",
      "Graphic Design",
      "Health, Wellness & Fitness",
      "Higher Education",
      "Hospital & Health Care",
      "Hospitality",
      "Human Resources",
      "Import & Export",
      "Individual & Famaily Services",
      "Industrial Automation",
      "Information Services",
      "Information Technology & Services",
      "Insurance",
      "International affairs",
      "International Trade & Development",
      "Internet",
      "Investment Banking/Venture",
      "Investment Management",
      "Judiciary",
      "Law Enforcement",
      "Law Practice",
      "Legal Services",
      "Legistics & Supply Chain",
      "Luxury Goods & Jewelry",
      "Machinery",
      "Management Consulting",
      "Maritime",
      "Marketing & Advertising",
      "Market Research",
      "Mechanical or Industrial Engineering",
      "Media Production",
      "Medical Device",
      "Medical Practice",
      "Mental Health Care",
      "Military",
      "Mining & Metals",
      "Motion Pictures & Film",
      "Museums & Institutions",
      "Music",
      "Nanotechnology",
      "Newspapers",
      "Nonprofit Organization Management",
      "Oil & Energy",
      "Online Puplishing",
      "Outsourcing/Offshoring",
      "Package/Freight Delivery",
      "Packaging & Containers",
      "Paper & Forest Products",
      "Performing Arts",
      "Pharmaceuticals",
      "Philanthropy",
      "Photography",
      "Plastics",
      "Political Organzation",
      "Primary/Secondary",
      "Printing",
      "Professional Training",
      "Program Development",
      "Public Policy",
      "Public Relations",
      "Public Safety",
      "Publishing",
      "Railroad Manufacture",
      "Rancing",
      "Real Estate",
      "Recreational Facilities & Services",
      "Religious Institutions",
      "Renewables & Environment",
      "Research",
      "Restaurants",
      "Retail",
      "Security & Investigations",
      "Semiconductors",
      "Shipbuilding",
      "Sporting Goods",
      "Sport",
      "Staffing & Recruiting",
      "Supermarkets",
      "Telecommunications",
      "Textiles",
      "Think Tanks",
      "Tobacco",
      "Tranlation & Localization",
      "Transportation/Trucking/Railroad",
      "Utlities",
      "Venture Capital",
      "Veterinary",
      "Warehousing",
      "Wholesale",
      "Wine & Spirits",
      "Wireless",
      "Writing & Editing",
    ];
    let companySize = [
      "--",
      "1",
      "2-10",
      "11-50",
      "51-200",
      "201-500",
      "501-1000",
      "1001-5000",
      "5001-10000",
      "10001+",
    ];

    let companyRevenue = [
      "--",
      "< $100k",
      "$100k - $500k",
      "$500k - $1M",
      "$1M - $5M",
      "$5M - $10M",
      "$10M - $50M",
      "$50M >",
    ];
    return (
      <View style={styles._container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Entypo name="cross" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles._header_body}>
            <Text style={styles._header_title}>Account</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              this.setState({ visibleModal: !this.state.visibleModal })
            }
          >
            <Feather name="more-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* <<<<<<<<<< MODAL >>>>>>>>>>> */}
        <Modal
          transparent={true}
          visible={this.state.visibleModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ visibleModal: !this.state.visibleModal });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => this.SelectItem("logout")}>
                <Text style={styles._item}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.SelectItem("cache")}>
                <Text style={styles._item}>Clear app cache</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.SelectItem("profile")}>
                <Text style={styles._item}>Change profile image</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.SelectItem("Remove")}>
                <Text style={styles._item}>Remove profile image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* END MODAL */}
        <ImageBackground
          style={styles._layer}
          source={require("../../assets/bg.png")}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.user_img}
              onPress={() => this.pickImage()}
            >
              {image !== null ? (
                <Image source={{ uri: image }} style={styles._avater} />
              ) : (
                <>
                  <MaterialCommunityIcons
                    name="camera-plus"
                    size={24}
                    color="grey"
                  />
                </>
              )}
            </TouchableOpacity>
            {image === null && (
              <Text
                style={{ color: "grey", fontSize: 12, textAlign: "center" }}
              >
                Tap to add photo
              </Text>
            )}
            <Text style={styles._label}>Email</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60 }}
              value="suneelsuther123@gamail.com"
            />

            <TouchableOpacity style={styles._verify_email}>
              <Text style={styles._verfiy_text}>Verify email</Text>
            </TouchableOpacity>

            <Text style={styles._label}>First name</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="Suneel"
            />

            <Text style={styles._label}>Last name</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="Kumar"
            />

            <View style={styles._br} />

            <Text style={styles._label}>Company / Organization</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="iskillers"
            />
            <Text style={styles._label}>Title</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="Mobile app developer"
            />

            <Text style={styles._label}>Twitter handle</Text>
            <Input
              placeholder="mytwitterhandle"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value=""
            />

            <Text style={styles._label}>Website</Text>
            <Input
              placeholder="hello"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="Website URL"
            />

            <Text style={styles._label}>LinkdIn</Text>
            <Input
              placeholder="LinkdIn URL"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value="LinkdIn URL"
            />
            <View style={styles._br} />

            <TouchableOpacity
              onPress={() => this.setState({ showCopany: true })}
            >
              <Text style={styles._label}>Company industry</Text>
              <Text style={styles._selected_val}>
                {selectedcompany === "" ? "Not given" : selectedcompany}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ showCopanySize: true })}
            >
              <Text style={styles._label}>Company size</Text>
              <Text style={styles._selected_val}>
                {selectedcompanySize === "" ? "Not given" : selectedcompanySize}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ showCopanyRevinue: true })}
            >
              <Text style={styles._label}>Company revenue</Text>
              <Text style={styles._selected_val}>Not given</Text>
            </TouchableOpacity>

            <Text style={styles._label}>Countruies we / I operate in</Text>
            <TouchableOpacity
              placeholder="mytwitterhandle"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value=""
              style={styles._disabled_btn}
              onPress={() => this.setState({ showCountryList: true })}
            >
              <Text style={styles._placeholder}>
                Select country / countries
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#3b3b3b"
              />
            </TouchableOpacity>

            <View style={styles._chip_row}>
              {items.map((val, i) => {
                if (val.selected) {
                  return (
                    <View style={styles._chip}>
                      <Text style={styles._chip_text}>{val.name}</Text>
                      <TouchableOpacity onPress={() => this.unCheckCountry(i)}>
                        <Entypo name="cross" size={20} color="#aeaeae" />
                      </TouchableOpacity>
                    </View>
                  );
                }
              })}
            </View>

            <View style={styles._br} />

            <TouchableOpacity
              onPress={() => this.setState({ showTimeformat: true })}
            >
              <Text style={styles._label}>Time format</Text>
              <Text style={styles._selected_val}>{selectedTimeFormat}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ showDateformat: true })}
            >
              <Text style={styles._label}>Date format</Text>
              <Text style={styles._selected_val}>{selectedDateFormat}</Text>
            </TouchableOpacity>
            <Text style={styles._label}>Time Zone</Text>

            <TouchableOpacity
              placeholder="mytwitterhandle"
              style={{ textAlign: "left", height: 60, fontWeight: "normal" }}
              value=""
              style={styles._disabled_btn}
              onPress={() => this.setState({ showTimeZone: true })}
            >
              <Text style={styles._placeholder}>
                {selectedZone === "" ? "Select time zone" : selectedZone}
              </Text>

              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#3b3b3b"
              />
            </TouchableOpacity>
            <View style={styles._br} />

            <TouchableOpacity
              style={styles._delete_row}
              onPress={() => this.deleteAccount()}
            >
              <Text style={styles._delete_text}>Delete account</Text>
            </TouchableOpacity>
            <View style={styles._br} />
            <Text style={styles._developed_by}>5.0.0| env: production</Text>
            <View style={styles._br} />

            <Button title="Save Changes" bg="#2ab069" color="white" />
            {/* COUNTRY LIST */}
            <View style={styles._inner_view}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showCountryList}
                onRequestClose={() => {
                  this.setState({ showCountryList: !showCountryList });
                }}
              >
                <View style={styles._inner_view}>
                  <View style={styles._modal_view}>
                    <View style={styles._search_view}>
                      <AntDesign name="search1" size={24} color="#898989" />
                      <TextInput
                        onChangeText={(search) => this.setState({ search })}
                        style={styles.searchBar}
                      />
                    </View>
                    <ScrollView>
                      {this.filterList(items).map((listItem, index) => (
                        <TouchableOpacity
                          style={styles._list}
                          key={index}
                          onPress={() =>
                            this.onSelectedItemsChange(listItem, index)
                          }
                        >
                          <Text
                            style={[
                              styles._list_text,
                              { color: listItem.selected && "#68c9a2" },
                            ]}
                          >
                            {listItem.name}
                          </Text>

                          {listItem.selected ? (
                            <Entypo name="check" size={20} color="#68c9a2" />
                          ) : null}
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                    <Button
                      title="Confirm"
                      bg="#2ab069"
                      color="white"
                      onPress={() => this.setState({ showCountryList: false })}
                    />
                  </View>
                </View>
              </Modal>
            </View>

            {/* TIME ZONE */}
            <View style={styles._inner_view}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showTimeZone}
                onRequestClose={() => {
                  this.setState({ showTimeZone: !showTimeZone });
                }}
              >
                <View style={styles._inner_view}>
                  <View style={styles._modal_view}>
                    <View style={styles._search_view}>
                      <AntDesign name="search1" size={24} color="#898989" />
                      <TextInput
                        onChangeText={(search2) => this.setState({ search2 })}
                        style={styles.searchBar}
                      />
                    </View>
                    <ScrollView>
                      {this.filsterTimeZone(timeZone).map((listItem, index) => (
                        <TouchableOpacity
                          style={styles._list}
                          key={index}
                          onPress={() =>
                            this.setState({ selectedZone: listItem })
                          }
                        >
                          <Text
                            style={[
                              styles._list_text,
                              {
                                color:
                                  selectedZone === listItem
                                    ? "#68c9a2"
                                    : "black",
                              },
                            ]}
                          >
                            {listItem}
                          </Text>

                          {selectedZone === listItem ? (
                            <Entypo name="check" size={20} color="#68c9a2" />
                          ) : null}
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                    <Button
                      title="Confirm"
                      bg="#2ab069"
                      color="white"
                      onPress={() => this.setState({ showTimeZone: false })}
                    />
                  </View>
                </View>
              </Modal>
            </View>

            {/* TIME FORMAT */}
            <View style={[styles._inner_view]}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showTimeformat}
                onRequestClose={() => {
                  this.setState({ showTimeZone: !showTimeZone });
                }}
              >
                <View
                  style={[
                    styles._inner_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <View style={[styles._smallModal, { width: 250 }]}>
                    <Text style={styles._bold}>Select date format</Text>
                    <TouchableOpacity
                      style={styles._row}
                      onPress={() =>
                        this.setState({
                          selectedTimeFormat: "24H",
                          showTimeformat: false,
                        })
                      }
                    >
                      {selectedTimeFormat === "24H" ? (
                        <MaterialIcons
                          name="radio-button-checked"
                          size={24}
                          color="#b44ea8"
                        />
                      ) : (
                        <MaterialIcons
                          name="radio-button-unchecked"
                          size={24}
                        />
                      )}

                      <Text style={styles._list_value}>24H</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles._row}
                      onPress={() =>
                        this.setState({
                          selectedTimeFormat: "12H",
                          showTimeformat: false,
                        })
                      }
                    >
                      {selectedTimeFormat === "12H" ? (
                        <MaterialIcons
                          name="radio-button-checked"
                          size={24}
                          color="#b44ea8"
                        />
                      ) : (
                        <MaterialIcons
                          name="radio-button-unchecked"
                          size={24}
                        />
                      )}
                      <Text style={styles._list_value}>12H</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>

            {/* DATE FORMAT */}
            <View style={[styles._inner_view]}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showDateformat}
                onRequestClose={() => {
                  this.setState({ showDateformat: !showDateformat });
                }}
              >
                <View
                  style={[
                    styles._inner_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <View style={[styles._smallModal, { width: 250 }]}>
                    <Text style={styles._bold}>Select date format</Text>
                    <TouchableOpacity
                      style={styles._row}
                      onPress={() =>
                        this.setState({
                          selectedDateFormat: "DD:MM:YYYY",
                          showDateformat: false,
                        })
                      }
                    >
                      {selectedDateFormat === "DD:MM:YYYY" ? (
                        <MaterialIcons
                          name="radio-button-checked"
                          size={24}
                          color="#b44ea8"
                        />
                      ) : (
                        <MaterialIcons
                          name="radio-button-unchecked"
                          size={24}
                        />
                      )}

                      <Text style={styles._list_value}>DD:MM:YYYY</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles._row}
                      onPress={() =>
                        this.setState({
                          selectedDateFormat: "MM:DD:YYYY",
                          showDateformat: false,
                        })
                      }
                    >
                      {selectedTimeFormat === "MM:DD:YYYY" ? (
                        <MaterialIcons
                          name="radio-button-checked"
                          size={24}
                          color="#b44ea8"
                        />
                      ) : (
                        <MaterialIcons
                          name="radio-button-unchecked"
                          size={24}
                        />
                      )}
                      <Text style={styles._list_value}>MM:DD:YYYY</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>

            {/* COMPANY INDUSTRY MODAL */}
            <View style={[styles._inner_view]}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showCopany}
                onRequestClose={() => {
                  this.setState({ selectedcompany: !showCopany });
                }}
              >
                <View
                  style={[
                    styles._inner_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <View
                    style={[styles._smallModal, { width: 280, height: 400 }]}
                  >
                    <Text style={styles._bold}>Select company industry</Text>
                    <ScrollView>
                      {company.map((val, index) => {
                        return (
                          <TouchableOpacity
                            style={styles._row}
                            onPress={() =>
                              this.setState({
                                selectedcompany: val,
                                showCopany: false,
                              })
                            }
                          >
                            {selectedcompany === val ? (
                              <MaterialIcons
                                name="radio-button-checked"
                                size={24}
                                color="#b44ea8"
                              />
                            ) : (
                              <MaterialIcons
                                name="radio-button-unchecked"
                                size={24}
                              />
                            )}

                            <Text style={styles._list_value}>{val}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </View>

            {/* COMPANY SIZE */}
            <View style={[styles._inner_view]}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showCopanySize}
                onRequestClose={() => {
                  this.setState({ selectedcompanySize: !showCopanySize });
                }}
              >
                <View
                  style={[
                    styles._inner_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <View
                    style={[styles._smallModal, { width: 280, height: 400 }]}
                  >
                    <Text style={styles._bold}>Select company size</Text>
                    <ScrollView>
                      {companySize.map((val, index) => {
                        return (
                          <TouchableOpacity
                            style={styles._row}
                            onPress={() =>
                              this.setState({
                                selectedcompanySize: val,
                                showCopanySize: false,
                              })
                            }
                            key={index}
                          >
                            {selectedcompanySize === val ? (
                              <MaterialIcons
                                name="radio-button-checked"
                                size={24}
                                color="#b44ea8"
                              />
                            ) : (
                              <MaterialIcons
                                name="radio-button-unchecked"
                                size={24}
                              />
                            )}

                            <Text style={styles._list_value}>{val}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </View>

            {/* COMPANY REVINUE */}
            <View style={[styles._inner_view]}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={showCopanyRevinue}
                onRequestClose={() => {
                  this.setState({ selectedcompanyRevinue: !showCopanyRevinue });
                }}
              >
                <View
                  style={[
                    styles._inner_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                >
                  <View style={[styles._smallModal, { width: 280 }]}>
                    <Text style={styles._bold}>Select company revenue</Text>
                    <ScrollView>
                      {companyRevenue.map((val, index) => {
                        return (
                          <TouchableOpacity
                            style={styles._row}
                            onPress={() =>
                              this.setState({
                                selectedcompanyRevinue: val,
                                showCopanyRevinue: false,
                              })
                            }
                            key={index}
                          >
                            {selectedcompanyRevinue === val ? (
                              <MaterialIcons
                                name="radio-button-checked"
                                size={24}
                                color="#b44ea8"
                              />
                            ) : (
                              <MaterialIcons
                                name="radio-button-unchecked"
                                size={24}
                              />
                            )}

                            <Text style={styles._list_value}>{val}</Text>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _layer: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },

  _header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },

  _header_body: {
    flex: 1,
  },
  _header_title: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
    width: 200,
    alignSelf: "flex-end",
    marginTop: 30,
  },
  _item: {
    fontSize: 16,
    paddingVertical: 5,
  },
  user_img: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: "center",
    elevation: 10,
    margin: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  _avater: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  _verify_email: {
    backgroundColor: "#f5f3f3",
    borderRadius: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    justifyContent: "center",
    padding: 10,
    height: 50,
  },
  _verfiy_text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
  },
  _label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
  },
  _br: { borderBottomWidth: 1.5, borderColor: "#efefef", marginVertical: 10 },
  _disabled_btn: {
    backgroundColor: "#f5f3f3",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 60,
    alignItems: "center",
  },
  _selected_val: {
    color: "grey",
  },
  _placeholder: {
    fontSize: 16,
  },
  _delete_row: {
    marginVertical: 30,
  },
  _delete_text: {
    color: "red",
  },
  _developed_by: {
    textAlign: "center",
    color: "grey",
    fontSize: 12,
    marginVertical: 10,
  },
  _inner_view: {
    flex: 1,
    marginTop: 22,
  },
  _modal_view: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    padding: 10,
  },

  _list: {
    padding: 5,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  searchBar: {
    fontSize: 24,
    margin: 5,
    height: 30,
    flex: 1,
  },
  _search_view: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  _list_text: {
    color: "#959595",
  },
  _chip: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 50,
    marginRight: 5,
    borderColor: "#b3b3b3",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  _chip_row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  _chip_text: {
    color: "#b3b3b3",
  },
  _smallModal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  _bold: {
    fontWeight: "bold",
    paddingVertical: 10,
  },
  _row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  _list_value: {
    fontSize: 16,
    color: "grey",
    marginLeft: 5,
  },
});
