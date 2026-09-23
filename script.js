// BCI/ICF-henkinen kaksikielinen kysymys- ja lausepankki
const COACHING_DATA = {
  fi: {
    siteUrl: "https://fiaskonina.ai/fi/",
    author: "Tehnyt: Nina Santaniemi",
    title: "Miltä sinusta tuntuu tänään?",
    subtitle: "Pieni inhimillinen pysähdys työn, teknologian ja arjen keskellä.",
    newQuote: "Arvo toinen näkökulma",
    resetState: "← Valitse toinen tila",
    footerMotto: "Muutos voitetaan ihmisten kanssa",
    states: [
      {
        id: "overwhelmed",
        icon: "🌪️",
        name: "Kuormittunut tai kiireinen",
        quotes: [
          "Mihin yhteen ainoaan asiaan voit aidosti vaikuttaa juuri nyt – ja mistä muusta voit päästää irti?",
          "Jos katsoisit tilannettasi viisaan, rauhallisen ystävän silmin, mitä jättäisit tänään suosiolla tekemättä?",
          "Mitä voisit tehdä tänään tästä olosta huolimatta, jos tekisit vain 20 % normaalista vaatimustasostasi?",
          "Kiire on usein tunne, ei fakta. Mikä osa tästä kuormasta vaatii huomiotasi juuri tällä minuutilla?",
          "Mitä kehosi tai mielesi yrittää viestiä tällä kireydellä? Mitä tarvitsisit eniten juuri nyt?",
          "Riittävä on usein erinomaista parempi. Mikä tekee tästä päivästä tarpeeksi hyvän?",
          "Jos valitsisit tänään vain yhden asian, jonka maaliin saaminen keventää oloa, mikä se olisi?",
          "Hengitä kerran rauhassa syvään ulos. Maailma odottaa kyllä pienen hetken.",
          "Mistä voisit kiittää itseäsi jo nyt, vaikka keskeneräisyyttä on vielä paljon?"
        ]
      },
      {
        id: "stuck",
        icon: "🧱",
        name: "Jumissa tai epävarma",
        quotes: [
          "Mikä on pienin mahdollinen konkreettinen mikroaskel, jolla saat asiat nyt liikahtamaan?",
          "Kun olet aiemmin ollut vastaavassa umpisolmussa, mitkä omat vahvuutesi auttoivat sinut eteenpäin?",
          "Mitä tekisit seuraavaksi, jos tietäisit etukäteen, että lopputulos on joka tapauksessa riittävän hyvä?",
          "Mitä neuvoisit kollegalle, joka kertoisi olevansa täsmälleen samassa tilanteessa kuin sinä nyt?",
          "Epävarmuus kertoo vain siitä, että teet jotain uutta tai merkityksellistä. Mitä tämä tilanne opettaa?",
          "Kenen näkökulmaa, kokemusta tai sparrausta voisit tänään pyytää tilanteen selkeyttämiseen?",
          "Mitä tapahtuisi, jos kokeilisit yhtä vaihtoehtoa pienenä kokeiluna ilman lopullista sitoutumista?",
          "Jos mikään vaihtoehto ei ole täydellinen, mikä niistä vie sinua edes askeleen oikeaan suuntaan?",
          "Sinun ei tarvitse tietää koko polkua perille asti – vain seuraavat viisi metriä riittävät."
        ]
      },
      {
        id: "inspired",
        icon: "🚀",
        name: "Innostunut tai saanut ison projektin maaliin",
        quotes: [
          "Mitkä omat oivalluksesi, tekosi ja taitosi johtivat tähän hyvään lopputulokseen?",
          "Miten aiot pysähtyä ja juhlistaa tätä edistystä ennen kuin kiirehdit suoraan seuraavaan haasteeseen?",
          "Mitä uutta ja arvokasta olet oppinut itsestäsi ja vahvuuksistasi tämän matkan aikana?",
          "Minkä asian tekeminen tuntuu tämän innostuksen valossa tänään kaikkein merkityksellisimmältä?",
          "Miten voisit tallentaa tämän onnistumisen tunteen mieleesi niin, että se kantaa myös harmaampina päivinä?",
          "Kenen kanssa voisit jakaa tämän ilon ja kiittää heitä yhteisestä matkasta?",
          "Mitä sellaista teit toisin kuin aiemmin, mikä osoittautui ratkaisevan hyväksi oivallukseksi?",
          "Nauti tästä hetkestä. Olet tehnyt aidosti arvokasta ja hyvää työtä.",
          "Miten voit vaalia tätä virtausta niin, että se ruokkii sinua eikä polta voimavaroja loppuun?"
        ]
      },
      {
        id: "tired",
        icon: "🌿",
        name: "Väsynyt tai pohtiva",
        quotes: [
          "Mitä kaikkein lempeintä ja myötätuntoisinta voisit tehdä itsellesi tänään työpäivän aikana?",
          "Mitä voisit tehdä silti – vaikka vain yhden rauhallisen asian – ilman vaatimusta täydellisyydestä?",
          "Mikä asia työpäivässäsi antaisi sinulle tänään energiaa sen sijaan, että se vain kuluttaisi sitä?",
          "Jos sallit itsellesi tänään matalammat kierrokset, mikä on ainoa asia, joka oikeasti ansaitsee huomiosi?",
          "Lepo ei ole palkinto valmiista työstä, vaan edellytys sille. Missä kohdassa päivää pidät oikean tauon?",
          "Mistä sellaisesta oletuksesta tai vaatimuksesta voisit tänään luopua, joka painaa hartioitasi turhaan?",
          "Väsymys on viesti huolenpidon tarpeesta. Miten voit suojata omaa tilaasi loppupäivän ajan?",
          "Kaikkien päivien ei tarvitse olla tulipalojen sammuttamista tai suuria harppauksia. Riittää, että olet läsnä.",
          "Mistä asiasta arjessasi voit olla hiljaa kiitollinen juuri tällä hetkellä?"
        ]
      },
      {
        id: "crossroads",
        icon: "⚖️",
        name: "Kahden vaiheilla",
        quotes: [
          "Jos valitsisit sen vaihtoehdon, joka tuo sinulle eniten sisäistä rauhaa, minkä valitsisit?",
          "Mille sanot todellisuudessa 'kyllä', jos sanot tälle asialle 'ei'?",
          "Mitä tekisit, jos et pelkäisi kenenkään pettymystä tai arvostelua?",
          "Kumpi vaihtoehdoista on linjassa pidemmän aikavälin arvojesi ja tavoitteidesi kanssa?",
          "Mikä on pahinta mitä voi tapahtua, jos teet 'väärän' valinnan – ja miten selviäisit siitä?",
          "Mitä intuitiosi tai ensitunteesi yritti kertoa sinulle ennen kuin järki alkoi ylianalysoida?",
          "Voitko päättää vain seuraavasta askeleesta sen sijaan, että lukitsisit loppuelämäsi suunnan?",
          "Rajojen vetäminen ei ole itsekkyyttä, vaan vastuullisuutta omasta jaksamisestasi.",
          "Mikä päätös tuntuu keventävältä ja avaralta, mikä taas ahtaalta ja puristavalta?"
        ]
      },
      {
        id: "clarity",
        icon: "🎯",
        name: "Rauhallinen ja selkeyttä etsivä",
        quotes: [
          "Jos tekisit tänään vain yhden merkityksellisen asian valmiiksi asti, mikä se olisi?",
          "Miten voit suojata tämän rauhallisen tilan ulkoisilta häiriöiltä ja ilmoitusten tulvalta?",
          "Mitä tarvitset ympärillesi juuri nyt, jotta keskittyminen ja työn imu pysyvät yllä?",
          "Mikä on se työn osa, joka tuntuu sinusta kaikkein luontevimmalta ja vaivattomimmalta tehdä tänään?",
          "Mihin suuntaat tarkkaavaisuutesi seuraavan tunnin ajaksi ilman moniajoa?",
          "Miten voit tehdä tästä työpäivästä itsellesi paitsi tehokkaan, myös miellyttävän ja tasapainoisen?",
          "Hiljainen ja tasainen eteneminen vie usein pidemmälle kuin suuret puristukset.",
          "Mistä turhasta tehtävälistan kohdasta voit tietoisesti luopua, jotta fokus säilyy kirkkaana?",
          "Luota omaan osaamiseesi ja rytmiisi. Kaikki etenee juuri sopivassa tahdissa."
        ]
      }
    ]
  },
  en: {
    siteUrl: "https://fiaskonina.ai/",
    author: "Created by Nina Santaniemi",
    title: "How do you feel today?",
    subtitle: "A gentle human pause amidst work, technology, and AI.",
    newQuote: "Another perspective",
    resetState: "← Change mood",
    footerMotto: "The Human Side of AI Change",
    states: [
      {
        id: "overwhelmed",
        icon: "🌪️",
        name: "Overwhelmed or Rushed",
        quotes: [
          "What is the single thing within your real control right now—and what can you gently let go of?",
          "If you looked at your day through the eyes of a calm, wise friend, what would you leave undone?",
          "What could you still accomplish today despite this feeling, if you only aimed for 20% of your usual expectations?",
          "Urgency is often an emotion, not a fact. Which part of this workload truly requires you this very minute?",
          "What are your mind and body signaling through this tension? What do you need most right now?",
          "Good enough is frequently better than perfect. What would make today feel truly sufficient?",
          "If you could pick just one small task to complete that lifts the weight off your shoulders, what would it be?",
          "Take one slow, deep breath out. The world can wait a moment.",
          "What can you appreciate yourself for right now, even while so much remains unfinished?"
        ]
      },
      {
        id: "stuck",
        icon: "🧱",
        name: "Stuck or Uncertain",
        quotes: [
          "What is the smallest possible concrete micro-step that creates a bit of forward movement?",
          "When you navigated a similar deadlock before, which personal strengths carried you through?",
          "What would do next if you knew in advance that the outcome would be good enough either way?",
          "What advice would you give a trusted colleague facing this exact same situation?",
          "Uncertainty simply shows you are engaging with something meaningful. What is this moment teaching you?",
          "Whose perspective, expertise, or sounding board could you borrow today to gain clarity?",
          "What would happen if you tested just one path as a safe, low-stakes experiment without full commitment?",
          "If no option is perfect, which one moves you at least half a step in the right direction?",
          "You don't need to see the entire road ahead—just the next five meters are plenty."
        ]
      },
      {
        id: "inspired",
        icon: "🚀",
        name: "Inspired or Big Project Delivered",
        quotes: [
          "Which insights, conscious choices, and personal skills brought you to this great milestone?",
          "How will you pause and celebrate this progress before jumping straight into the next challenge?",
          "What valuable lessons have you uncovered about yourself and your capabilities during this process?",
          "In light of this inspiration, what task feels most meaningful and impactful to tackle today?",
          "How can you anchor this sense of accomplishment so it carries you through quieter or heavier days?",
          "Who could you share this moment with and thank for being part of the journey?",
          "What did you do differently this time that proved to be a pivotal decision?",
          "Enjoy this moment. You have done genuinely thoughtful and solid work.",
          "How can you nurture this flow so it sustains you, rather than drains your reserves?"
        ]
      },
      {
        id: "tired",
        icon: "🌿",
        name: "Low Energy or Contemplative",
        quotes: [
          "What is the kindest, most supportive gesture you can offer yourself during work today?",
          "What could you still do—even just one calm, quiet thing—without demanding perfection?",
          "What part of your workday gives you energy today rather than draining it?",
          "If you grant yourself permission to operate at lower RPMs today, what alone truly deserves your attention?",
          "Rest is not a prize for finished work; it is the prerequisite. Where will you place a genuine pause today?",
          "Which expectation or assumption weighing on your shoulders could you consciously lay down?",
          "Tiredness is a reminder to protect your space. How can you guard your energy for the rest of the day?",
          "Not every day requires putting out fires or taking huge leaps. It is enough simply to be present.",
          "What is one quiet detail in your day you feel genuinely thankful for right now?"
        ]
      },
      {
        id: "crossroads",
        icon: "⚖️",
        name: "At a Crossroads",
        quotes: [
          "If you selected the path that brings you the deepest inner peace, which one would it be?",
          "What are you truly saying 'yes' to by choosing to say 'no' to this request?",
          "What choice would you make if you weren't concerned with disappointing or pleasing others?",
          "Which option aligns best with your longer-term values and where you actually want to go?",
          "What is the worst-case scenario if this turns out to be the 'wrong' call—and how would you navigate it?",
          "What did your gut or first instinct tell you before analytical overthinking took over?",
          "Can you decide just on the very next step, rather than trying to lock in the destination forever?",
          "Setting boundaries is never selfish; it is taking ownership of your sustainable capacity.",
          "Which decision feels expansive and light, and which one feels narrow and constricting?"
        ]
      },
      {
        id: "clarity",
        icon: "🎯",
        name: "Calm & Seeking Clarity",
        quotes: [
          "If you saw just one meaningful task through to completion today, which one would matter most?",
          "How can you safeguard this peaceful state from outside distractions and notification noise?",
          "What environment or setup do you need around you right now to protect your focus and flow?",
          "Which part of your work feels most natural and effortless to sink into today?",
          "Where will you direct your undivided attention for the next hour, completely single-tasking?",
          "How can you shape this workday so it is not only productive, but also grounded and balanced?",
          "Quiet, consistent progress often carries you further than intense, exhausting pushes.",
          "Which low-value item on your to-do list can you consciously drop to keep your headspace clear?",
          "Trust your rhythm and capability. Everything is unfolding at just the right pace."
        ]
      }
    ]
  }
};

// Tilanhallinta
let currentLang = 'fi';
let currentStateId = null;
let currentQuote = null;

// DOM-elementit
const currentDateEl = document.getElementById('currentDate');
const langFiBtn = document.getElementById('langFi');
const langEnBtn = document.getElementById('langEn');
const brandLogoLink = document.getElementById('brandLogoLink');
const footerSiteLink = document.getElementById('footerSiteLink');
const footerAuthor = document.getElementById('footerAuthor');
const mainTitleEl = document.getElementById('mainTitle');
const mainSubtitleEl = document.getElementById('mainSubtitle');
const stateButtonsContainer = document.getElementById('stateButtonsContainer');
const selectionView = document.getElementById('selectionView');
const promptView = document.getElementById('promptView');
const selectedStateBadge = document.getElementById('selectedStateBadge');
const quoteTextEl = document.getElementById('quoteText');
const btnNewQuote = document.getElementById('btnNewQuote');
const btnResetState = document.getElementById('btnResetState');
const txtNewQuote = document.getElementById('txtNewQuote');
const txtResetState = document.getElementById('txtResetState');
const footerMotto = document.getElementById('footerMotto');

// 1. Kielen tunnistus
function initLanguage() {
  const savedLang = localStorage.getItem('fiasko_tab_lang');
  if (savedLang && (savedLang === 'fi' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || 'fi').toLowerCase();
    currentLang = browserLang.startsWith('fi') ? 'fi' : 'en';
  }
  updateLanguageUI();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('fiasko_tab_lang', lang);
  updateLanguageUI();
  renderDate();
  renderStateButtons();
  if (currentStateId) {
    displayStateQuote(currentStateId, false);
  }
}

function updateLanguageUI() {
  langFiBtn.classList.toggle('active', currentLang === 'fi');
  langEnBtn.classList.toggle('active', currentLang === 'en');
  
  const strings = COACHING_DATA[currentLang];
  
  brandLogoLink.href = strings.siteUrl;
  footerSiteLink.href = strings.siteUrl;

  footerAuthor.textContent = strings.author;
  mainTitleEl.textContent = strings.title;
  mainSubtitleEl.textContent = strings.subtitle;
  txtNewQuote.textContent = strings.newQuote;
  txtResetState.textContent = strings.resetState;
  footerMotto.textContent = strings.footerMotto;
}

// 2. Päivämäärä
function renderDate() {
  const now = new Date();
  const locale = currentLang === 'fi' ? 'fi-FI' : 'en-US';
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formatted = now.toLocaleDateString(locale, options);
  currentDateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

// 3. Tilapainikkeiden luominen ilman innerHTML:ää (turvallinen DOM)
function renderStateButtons() {
  while (stateButtonsContainer.firstChild) {
    stateButtonsContainer.removeChild(stateButtonsContainer.firstChild);
  }
  const states = COACHING_DATA[currentLang].states;

  states.forEach(state => {
    const btn = document.createElement('button');
    btn.className = 'state-btn';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'state-icon';
    iconSpan.textContent = state.icon;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = state.name;

    btn.appendChild(iconSpan);
    btn.appendChild(nameSpan);

    btn.addEventListener('click', () => {
      displayStateQuote(state.id, true);
    });
    stateButtonsContainer.appendChild(btn);
  });
}

// 4. Kysymyksen arvonta ja näyttäminen ilman innerHTML:ää
function displayStateQuote(stateId, pickNewRandom = true) {
  currentStateId = stateId;
  const states = COACHING_DATA[currentLang].states;
  const stateObj = states.find(s => s.id === stateId);
  if (!stateObj) return;

  if (pickNewRandom || !currentQuote) {
    const pool = stateObj.quotes;
    let nextQuote = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1 && nextQuote === currentQuote) {
      const filtered = pool.filter(q => q !== currentQuote);
      nextQuote = filtered[Math.floor(Math.random() * filtered.length)];
    }
    currentQuote = nextQuote;
    localStorage.setItem('fiasko_current_quote', currentQuote);
  }

  while (selectedStateBadge.firstChild) {
    selectedStateBadge.removeChild(selectedStateBadge.firstChild);
  }
  const badgeIcon = document.createElement('span');
  badgeIcon.textContent = stateObj.icon;
  const badgeText = document.createElement('span');
  badgeText.textContent = stateObj.name;
  selectedStateBadge.appendChild(badgeIcon);
  selectedStateBadge.appendChild(badgeText);

  quoteTextEl.textContent = `”${currentQuote}”`;

  localStorage.setItem('fiasko_state_id', stateId);

  selectionView.classList.remove('active');
  promptView.classList.add('active');
}

// 5. Paluu valintanäkymään
function resetState() {
  currentStateId = null;
  currentQuote = null;
  localStorage.removeItem('fiasko_state_id');
  localStorage.removeItem('fiasko_current_quote');

  promptView.classList.remove('active');
  selectionView.classList.add('active');
}

// 6. Kuuntelijat
langFiBtn.addEventListener('click', () => setLanguage('fi'));
langEnBtn.addEventListener('click', () => setLanguage('en'));

btnNewQuote.addEventListener('click', () => {
  if (currentStateId) {
    displayStateQuote(currentStateId, true);
  }
});

btnResetState.addEventListener('click', resetState);

// 7. Alustus
function init() {
  initLanguage();
  renderDate();
  renderStateButtons();

  const savedState = localStorage.getItem('fiasko_state_id');
  const savedQuote = localStorage.getItem('fiasko_current_quote');

  if (savedState) {
    currentStateId = savedState;
    currentQuote = savedQuote;
    displayStateQuote(savedState, false);
  } else {
    selectionView.classList.add('active');
  }
}

init();