/* Copyright (C) Mintz, Emy - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Made By Mintz (for my bb Emy)
 */
import { KlasaClient, Language, LanguageOptions, LanguageStore, util } from 'klasa';

export default class extends Language {
  constructor(client: KlasaClient, store: LanguageStore, file: string[], directory: string, options?: LanguageOptions) {
    super(client, store, file, directory, options);
    this.language = {
      DEFAULT: (key) => `${key} has not been localized for nl-NL yet.`,
      FLAG: '🇳🇱',
      LANG: 'Nederlands',
      SPECIFIER: 'nl-NL',
      DEFAULT_LANGUAGE: 'Default Language',
      PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) =>
        `The prefix${
          Array.isArray(prefix)
            ? `es for this guild are: ${prefix.map((pre) => `\`${pre}\``).join(', ')}`
            : ` in this guild is set to: \`${prefix}\``
        }`,
      SETTING_GATEWAY_EXPECTS_GUILD: 'De parameter <Guild> verwacht een gilde of een gildeobject.',
      SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `De waarde ${data} voor de sleutel ${key} bestaat niet!`,
      SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `De waarde ${data} voor de sleutel ${key} bestaat al!`,
      SETTING_GATEWAY_SPECIFY_VALUE: 'Je moet een specifieke waarde toevoegen of filteren',
      SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `De sleutel ${key} is geen Array.`,
      SETTING_GATEWAY_KEY_NOEXT: (key) => `De sleutel ${key} bestaat niet in dit schema.`,
      SETTING_GATEWAY_INVALID_TYPE: 'Het type parameter moet toegevoegd worden of worden verwijderd.',
      SETTING_GATEWAY_INVALID_FILTERED_VALUE: (piece, value) => `${piece.key} accepteert deze waarde niet : ${value}`,
      RESOLVER_MULTI_TOO_FEW: (name, min = 1) =>
        `Provided too few ${name}s. At least ${min} ${min === 1 ? 'is' : 'are'} required.`,
      RESOLVER_INVALID_BOOL: (name) => `${name} moet waar of niet waar zijn.`,
      RESOLVER_INVALID_CHANNEL: (name) => `${name} moet een kanaal tag hebben of a gevalideerde kanaal id.`,
      RESOLVER_INVALID_CUSTOM: (name, type) => `${name} moet valideerd zijn ${type}.`,
      RESOLVER_INVALID_DATE: (name) => `${name} deze mmoet een echte datum zijn.`,
      RESOLVER_INVALID_DURATION: (name) => `${name} moet een geldige duur string.`,
      RESOLVER_INVALID_EMOJI: (name) => `${name} moet een custom emoji tag of een gevalideerde emoji id hebben.`,
      RESOLVER_INVALID_FLOAT: (name) => `${name} moet een geldig nummer bevatten.`,
      RESOLVER_INVALID_GUILD: (name) => `${name} moet een geldige gilde bevatten.`,
      RESOLVER_INVALID_INT: (name) => `${name} .moet een geldige indringer hebben.`,
      RESOLVER_INVALID_LITERAL: (name) => `Deze optie komt niet overeen met deze possibility: ${name}`,
      RESOLVER_INVALID_MEMBER: (name) => `${name} moet een @ zijn of een geldige gebruiker bevatten.`,
      RESOLVER_INVALID_MESSAGE: (name) => `${name} moet een geldige message id bevatten.`,
      RESOLVER_INVALID_PIECE: (name, piece) => `${name} moet een geldige naam zijn ${piece}`,
      RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} moet deze regex patroon bevatten \`${pattern}\`.`,
      RESOLVER_INVALID_ROLE: (name) => `${name} moet een rol zijn of een rol id`,
      RESOLVER_INVALID_STRING: (name) => `${name} moet valideerd zijn.`,
      RESOLVER_INVALID_TIME: (name) => `${name} deze mmoet een echte datum zijn.`,
      RESOLVER_INVALID_URL: (name) => `${name} moet een geldige url bevatten.`,
      RESOLVER_INVALID_USER: (name) => `${name} moet een @ zijn of een geldige gebruiker id`,
      RESOLVER_STRING_SUFFIX: ' characters',
      RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} moet precies ${min}${suffix} zijn`,
      RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} moet tussen de ${min} en ${max}${suffix} zijn.`,
      RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} moet groter zijn dan ${min}${suffix}.`,
      RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} moet kleiner zijn dan ${max}${suffix}.`,
      REACTIONHANDLER_PROMPT: 'Naar welke pagina zou je graag willen verspringen?',
      COMMANDMESSAGE_MISSING: 'Ik mis een of meer benodigde inputs',
      COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is een benodigde argument`,
      COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `ik mis deze benodigde possible: (${possibles})`,
      COMMANDMESSAGE_NOMATCH: (possibles) => `Je opties komen niet overeen met de possibilities: (${possibles})`,
      MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time, abortOptions) =>
        `${tag} | **${error}** | je hebt **${time}** seconden om te reageren om deze prompt met een geldige reden. Type **${abortOptions.join(
          '**, **',
        )}** om deze opdracht te stoppen.`,
      MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time, cancelOptions) =>
        `${tag} | **${name}** herhaalt argument | je hebt **${time}** seconden om te reageren om deze prompt met een geldige reden. Type **${cancelOptions.join(
          '**, **',
        )}** om deze opdracht te stoppen.`,
      MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
      INHIBITOR_COOLDOWN: (remaining) =>
        `Je moet deze commando gebruiken je kunt deze opnieuw gebruiken binnen ${remaining} second${
          remaining === 1 ? '' : 's'
        }.`,
      INHIBITOR_DISABLED_GUILD: 'Deze comando is uitgeschakelt door de admin van deze gilde.',
      INHIBITOR_DISABLED_GLOBAL: 'Dit comando is geheel uitgeschakelt door de bot eigenaar.',
      INHIBITOR_MISSING_BOT_PERMS: (missing) => `ontoereikend permissie, ik mis: **${missing}**`,
      INHIBITOR_NSFW: 'je kunt dit comando allen gebruiken in een NFSW kanaal.',
      INHIBITOR_PERMISSIONS: 'Je hebt geen rechten om dit comando te gebruiken',
      INHIBITOR_REQUIRED_SETTINGS: (settings) =>
        `De gilde ontbreekt **${settings.join(', ')}** guild setting${
          settings.length !== 1 ? 's' : ''
        } en deze comando kan niet uitgevoert worden.`,
      INHIBITOR_RUNIN: (types) => `Dit comando is alleen te geburiken in ${types} kanalen.`,
      INHIBITOR_RUNIN_NONE: (name) => `Dit ${name} commando is niet optimaliseerd in dit kanaal.`,
      COMMAND_BLACKLIST_DESCRIPTION: 'Blacklists of un-blacklists gebruikers en of gilde van deze bot.',
      COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) =>
        [
          usersAdded.length ? `**Users Added**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
          usersRemoved.length ? `**Users Removed**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
          guildsAdded.length ? `**Guilds Added**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
          guildsRemoved.length ? `**Guilds Removed**\n${util.codeBlock('', guildsRemoved.join(', '))}` : '',
        ]
          .filter((val) => val !== '')
          .join('\n'),
      COMMAND_EVAL_DESCRIPTION: 'Evaluates arbitrary Javascript. Reserved for bot owner.',
      COMMAND_EVAL_EXTENDEDHELP: [
        'The eval command evaluates code as-in, any error thrown from it will be handled.',
        'It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.',
        'The --silent flag will make it output nothing.',
        "The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
        'The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword.',
        'The --showHidden flag will enable the showHidden option in util.inspect.',
        "If the output is too large, it'll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission.",
      ].join('\n'),
      COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
      COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
      COMMAND_EVAL_SENDFILE: (time, type) =>
        `Output was te lang... heb de log hier heen gestuurd file.\n**Type**:${type}\n${time}`,
      COMMAND_EVAL_SENDCONSOLE: (time, type) =>
        `Output was te lang... heb de log hier heen gestuurd.\n**Type**:${type}\n${time}`,
      COMMAND_UNLOAD: (type, name) => `✅ uitgeladen ${type}: ${name}`,
      COMMAND_UNLOAD_DESCRIPTION: 'uitgeladen het klasa stuk.',
      COMMAND_UNLOAD_WARN:
        'Je wilt dit comando vast niet runnen aangezien er geen comando is om dit terug te brengen naar vorige instellingen',
      COMMAND_TRANSFER_ERROR: '❌ dit type file is al getransfeerd of is nooit gebruikt.',
      COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ succesvol getransfeerd ${type}: ${name}.`,
      COMMAND_TRANSFER_FAILED: (type, name) =>
        `transfer naar ${type}: ${name} de client heeft gefaald please check het console.`,
      COMMAND_TRANSFER_DESCRIPTION: 'Transfer naar de core naar het respectieve folder.',
      COMMAND_RELOAD: (type, name, time) => `✅ geherlaad ${type}: ${name}. (Took: ${time})`,
      COMMAND_RELOAD_FAILED: (type, name) => `❌ gefaalt te herloaden ${type}: ${name}. Please check de Console.`,
      COMMAND_RELOAD_ALL: (type, time) => `✅ alles gereloaded ${type}. (Took: ${time})`,
      COMMAND_RELOAD_EVERYTHING: (time) => `✅ alles is gereload. (Took: ${time})`,
      COMMAND_RELOAD_DESCRIPTION: 'Reloads een klasa stuk, of meerder stukken in de klasa store.',
      COMMAND_REBOOT: 'herstarten...',
      COMMAND_REBOOT_DESCRIPTION: 'herstart de bot.',
      COMMAND_LOAD: (time, type, name) => `✅ succesvol geladen ${type}: ${name}. (Took: ${time})`,
      COMMAND_LOAD_FAIL:
        'Deze file bestaat niet, of er is een error opgetreden met het laden van je file. please check de Console',
      COMMAND_LOAD_ERROR: (type, name, error) =>
        `❌ gefaalt te laden ${type}: ${name}. reden:${util.codeBlock('js', error)}`,
      COMMAND_LOAD_DESCRIPTION: 'Laad een stuk van je bot.',
      COMMAND_PING: 'Ping?',
      COMMAND_PING_DESCRIPTION: 'Voert een connectie test uit naar Discord.',
      COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
      COMMAND_INVITE: (repo) => [
        `om deze ${this.client.user.username} toe tevoegen naar je gilde:`,
        `<${this.client.invite}>`,
        util.codeBlock(
          '',
          [
            'De bovenstaande link wordt gegenereerd met de vereiste minimale machtigingen om elke opdracht te gebruiken.',
            'Ik weet dat niet alle rechten voor elk gilde kloppen, dus wees niet bang om alle vakjes uit te schakelen',
            'Als je een opdracht probeert te gebruiken die meer machtigingen vereist dan de bot krijgt, zal dit je laten weten.',
          ].join(' '),
        ),
        `Dien een probleem in op ${repo} als je enige bugs hebt gevonden.`,
      ],
      COMMAND_INVITE_DESCRIPTION: 'Toont de uitnodigingslink van de bot om deze voor je gilde uit te nodigen.',
      COMMAND_INFO_DESCRIPTION: 'Biedt enige informatie over deze bot.',
      COMMAND_HELP_DESCRIPTION: 'Help weergeven voor een opdracht.',
      COMMAND_HELP_NO_EXTENDED: 'Geen uitgebreide hulp beschikbaar.',
      COMMAND_HELP_DM: `📥 | De lijst met opdrachten waartoe u toegang hebt, is naar uw DM's verzonden.`,
      COMMAND_HELP_NODM: `❌ | Je hebt DM's uitgeschakeld, ik kon je de opdrachten in DM's niet sturen.`,
      COMMAND_HELP_USAGE: (usage) => `Usage :: ${usage}`,
      COMMAND_HELP_EXTENDED: 'Extended Help ::',
      COMMAND_ENABLE: (type, name) => `+ Succesvol geladen en aan gezet ${type}: ${name}`,
      COMMAND_ENABLE_DESCRIPTION: `Je hebt DM's uitgeschakeld, ik kon je de opdrachten in DM's niet sturen.`,
      COMMAND_DISABLE: (type, name) => `+ Successfully disabled ${type}: ${name}`,
      COMMAND_DISABLE_DESCRIPTION:
        'Schakelt een opdracht / inhibitor / monitor / finalizer / gebeurtenis opnieuw in of tijdelijk uit. Standaardstatus hersteld bij opnieuw opstarten.',
      COMMAND_DISABLE_WARN:
        'U wilt dit waarschijnlijk niet uitschakelen, omdat u geen enkele opdracht kunt uitvoeren om het opnieuw in te schakelen',
      COMMAND_CONF_NOKEY: 'U moet een sleutel opgeven',
      COMMAND_CONF_NOVALUE: 'U moet een waarde opgeven',
      COMMAND_CONF_GUARDED: (name) => `${util.toTitleCase(name)} is mogelijk niet uitgeschakeld.`,
      COMMAND_CONF_UPDATED: (key, response) => `De sleutel is bijgewerkt **${key}**: \`${response}\``,
      COMMAND_CONF_KEY_NOT_ARRAY:
        "Deze sleutel is niet van het type array. Gebruik in plaats hiervan de actie 'reset '.",
      COMMAND_CONF_GET_NOEXT: (key) => `Deze sleutel **${key}** bestaat niet.`,
      COMMAND_CONF_GET: (key, value) => `De waarde voor deze sleutel **${key}** is: \`${value}\``,
      COMMAND_CONF_RESET: (key, response) => `De sleutel **${key}** is gereset naar: \`${response}\``,
      COMMAND_CONF_NOCHANGE: (key) => `De waarde voor **${key}** was al deze waarde.`,
      COMMAND_CONF_SERVER_DESCRIPTION: 'Definieer instellingen per gilde.',
      COMMAND_CONF_SERVER: (key, list) => `**Guild Settings${key}**\n${list}`,
      COMMAND_CONF_USER_DESCRIPTION: 'Definieer instellingen per gebruiker.',
      COMMAND_CONF_USER: (key, list) => `**User Settings${key}**\n${list}`,
      COMMAND_STATS_DESCRIPTION: 'Provides some details about the bot and stats.',
      MESSAGE_PROMPT_TIMEOUT: 'The prompt has timed out.',
      TEXT_PROMPT_ABORT_OPTIONS: ['abort', 'stop', 'cancel'],

      // Moderation Category
      CHANNEL_LOCKED: 'Kanaal gesloten',
      CHANNEL_UNLOCKED: 'Kanaal geopened',

      // Chat Bot Info Category
      STATISTICS: 'Statistieken',
      MEMORY: 'Geheugen',
      UPTIME: 'Uptime',
      USERS: 'Gebruikers',
      GUILDS: 'Gilden',
      KLASA_VERSION: 'Klasa Version',
      NODEJS_VERSION: 'Node.js Version',
      DISCORDJS_VERSION: 'Discord.js Version',
      DEVELOPER: 'Developer',
      SOURCECODE: 'Source code',
      CLICK_HERE: 'Klik hier',

      // Fun Category
      THEMSELVES: 'zichzelf',
      CUDDLING: 'knuffelt',
      HUGGING: 'knuffelt',
      KISSING: 'kust',
      PATTING: 'aait',
      SLAPPING: 'slaat',
      EMOTE_TITLE: (sender, activity, receiver, suffix) => `**${sender}** ${activity} **${receiver}** ${suffix}`,

      // Image Category
      TITLE_KIDOL: (group, idol) => `**${idol}** from **${group}**`,
      NO_INFORMATION: `N/A`,
      SOURCE_SEARCH: `Bron zoeken`,
      SIMILARITY: `gelijkenis`,
      SOURCE: `Bron`,
      PART: `Onderdeel`,
      YEAR: `Jaar`,
      ESTIMATED_TIMESTAMP: `Geschatte tijd`,

      // Information Category
      QUESTION: `Vraag`,
      ANSWER: `Antwoord`,
      SCORE: `Score`,
      STATUS: `Status`,
      START_DATE: `Publicatiedatum`,
      END_DATE: `Einddatum`,
      GENRES: `Genres`,
      NAME: `Naam`,
      ROLE: `Rol`,
      DESCRIPTION: `Descriptie`,
      ABOUT: `Over`,
      TWEETED: `getweet`,
      FACT: `Feit`,
      DEFINITION: `Definitie`,
      EXAMPLE: `Voorbeeld`,
      ARTIST: `Artiest`,
      TAGS: `Tags`,

      // Voice Category
      LOOPED: `Looped`,
      UNLOOPED: `Unlooped`,
      LOOPED_DESCRIPTION: `ik speel dit nummer over en over tot dat je dood gaat!`,
      UNLOOPED_DESCRIPTION: `ik stop met het nummer over en over te laten spelen`,
      NOW_PLAYING: `Wordt afgespeeld`,
      LENGTH: `Lengte`,
      PAUSED: `Gepauseerd`,
      UNPAUSED: `hervatten`,
      UPLOADED_BY: `geupload door`,
      CHOOSE_NUMBER: `Kies een nummer!`,
      PLAY: `Play`,
      ADDED_TRACK: (track) => `**${track}** toegevoegd aan de wachtrij!`,
      ADDED_PLAYLIST: (playlist) => `playlist **${playlist}** toegevoegd aan de wachtrij!`,
      QUEUE: `Wachtrij`,
      SKIP: `Overslaan`,
      SKIPPING_TRACK: `Overgeslagen naar volgend nummer`,
      STOP: `Stop`,
      STOPPING: `De muziek stoopen en het kanaal verlaten!`,
      VOLUME: `Volume`,
      CURRENT_VOLUME: (volume) => `volume is: **${volume}%**`,
      SETTING_VOLUME: (volume) => `volume naar: **${volume}%**`,
      VOLUME_RESTRICTION: `Volume is beperkt. Je kunt alleen tussen 1 en 200 kiezen!`,

      // Generic
      FOOTER_REQUESTED_BY: 'Aangevraagd door',
      FOOTER_PROVIDED_BY: 'voorzien door',

      // Errors
      ERROR: `Error`,
      NO_DATA: `Ik heb geen Date terug gekregen van de API! Probeer later nog eens.`,
      REQUEST_FAILED: `Er is een fout met het versturen van de request naar de API! Probeer later nog eens.`,
      NO_CUSTOM_EMOJI_DETECTED: 'geen gecustomizde emoji gedetecteerd!',
      NO_VALID_URL: `Ik kan je invoer niet ontleden naar de URL!`,
      NO_SOURCE: `Ik kan niks vinden over de bron!  `,
      NO_ANIME_FOUND: (anime) => `Ik heb deze *${anime}* niet gevonden op de Anilijst.`,
      NOT_IN_VC: `je bent niet in een voice kanaal!`,
      NO_MUSIC_RUNNING: `There's no music playing right now!`,
      LAVALINK_NO_DATA: `ik heb geen data ontvangen van de Muziek server! Probeer later nog eens`,
      SELECTION_NAN: `Je terug koppeling in niet geldig`,
      SELECTION_INVALID: `Er is een Fout met het selecteren van deze optie`,
      NO_MATCHES: 'Geen overeen komsten gevond on youtube!',
      LOAD_FAILED: `Het nummer laden heeft gefaalt!`,
      UNKNOWN_ERROR:
        'Er is een onbekende fout opgetreden! Als deze Fout vaker blijft voorkomen dan neem contact op met mijn Master!',
      NOT_SAME_CHANNEL: 'Je moet in dezelfde voice kanaal zitten als mij!',
      NO_UD_FOUND: 'The urban dictionary has nothing to say about your search term!',

      // Category Admin command descriptions
      // Sub category Moderation
      KICK_DESCRIPTION: 'ban gebruiker van de server.',
      LOCK_DESCRIPTION: 'Ik sluit het kanaal voor de mensen met de default rol.',

      // Category General command descriptions
      // Sub category Fun
      CUDDLE_DESCRIPTION: 'Knuffelt mensen (met een kawai anime gif).',
      HUG_DESCRIPTION: 'Knuffelt mensen (met een Kawai anime gif).',
      KISS_DESCRIPTION: 'kust mensen (met een kawai anime gif).',
      OWOIFY_DESCRIPTION: 'OwOify allyes UwU',
      PAT_DESCRIPTION: 'aai mensen (met een kawai anime gif).',
      SLAP_DESCRIPTION: 'Sla mensen (met een kawai anime gif).',

      // Sub category Image'
      ANIMEME_DESCRIPTION: 'Willekeurige animeme.',
      BOOBS_DESCRIPTION: 'Anime boobs (NSFW kanaal).',
      DANKMEME_DESCRIPTION: 'Willekeurige dank meme.',
      EMOJI_DESCRIPTION: 'toon een custom emoji in full size',
      FOXGIRL_DESCRIPTION: 'toon een kawai fox girl (NSFW kanaal).',
      GASM_DESCRIPTION: 'Gasm Emojis (NSFW channel only).',
      KIDOL_DESCRIPTION: 'toon een idool van een random K-Pop groep.',
      NEKO_DESCRIPTION: 'toon een kawai en lewd kat girl (NSFW kanaal).',
      PUSSY_DESCRIPTION: 'Anime pussy (NSFW channel only).',
      SAUCE_DESCRIPTION: 'ik probeer de bron te zoeken van de anime, manga of hentai link.',

      // Sub category Information
      EIGHTBALL_DESCRIPTION: 'Krijg wijze antwoorden voor ja en nee vragen.',
      ANIME_DESCRIPTION: 'Krijg specifieke informatie over deze anime.',
      CHUCKNORRIS_DESCRIPTION: 'Verkrijg een Chuck Norris grapje.',
      DONALD_DESCRIPTION: 'Krijg inteligewnte quotes van de POTUS.',
      FACT_DESCRIPTION: 'Krijg random feiten',
      LMGTFY_DESCRIPTION: 'soms is het zoeken op internet moeilijk.',
      URBANDICTIONARY_DESCRIPTION: 'verkrijg een definite van het urban dictionary.',
      USERINFO_DESCRIPTION: 'verkrijg informatie over een discord gebruiker.',
      NUMBER_DESCRIPTION: 'Cnoverteert de 6 magische cijfers in een vole degeneratie.',

      // Sub category Voice
      LOOP_DESCRIPTION: 'Aan of uit van het herhaalde nummer.',
      NOWPLAYING_DESCRIPTION: 'Laat informatie zien over het nummer wat nu afspeeld.',
      PAUSE_DESCRIPTION: 'Pauzeer / hervat het nummer',
      PLAY_DESCRIPTION: 'Speel een nummer af van youtube.',
      QUEUE_DESCRIPTION: 'Laat de wachtrij zien van deze sessie.',
      RESUME_DESCRIPTION: 'Hervat het nummer.',
      SKIP_DESCRIPTION: 'Sla dit nummer over.',
      STOP_DESCRIPTION: 'Stop de huidige sessie en verwijder de wachtrij',
      VOLUME_DESCRIPTION: 'verander het volume (Limit 1-200 %)',
    };
  }

  async init() {
    await super.init();
  }
}
