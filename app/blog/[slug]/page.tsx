"use client";

import { usePopup } from "../../components/PopupContext";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArticleSchema from "../../components/ArticleSchema";
import { getBlogPost } from "./blogData";

const blogPosts: { [key: string]: any } = {
  "waarom-warming-up-onmisbaar-is": {
    title: "Waarom een goede warming-up onmisbaar is",
    date: "8 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    content: `
      <p class="lead">Geen tijd voor warming-up? Dan heb je ook geen tijd voor resultaten. Die 10 minuten maken het verschil tussen een goede en een geweldige training.</p>

      <br/>

      <h2>Waarom warmen we op?</h2>
      <p>Je lichaam is als een auto in de winter. Spring je er direct in en ga je vol gas, dan loopt de motor niet lekker.</p>

      <p>Een warming-up bereidt je lichaam voor op wat komen gaat. Je verhoogt je lichaamstemperatuur, maakt je spieren soepeler, en activeert je zenuwstelsel.</p>

      <br/>

      <h2>Wat gebeurt er in je lichaam?</h2>

      <p><strong>Betere doorbloeding</strong><br/>
      Je hartslag gaat omhoog en je bloedvaten verwijden. Meer bloed naar je spieren betekent meer zuurstof en voedingsstoffen.</p>

      <p><strong>Soepelere spieren</strong><br/>
      Warme spieren zijn elastischer. Ze kunnen meer kracht leveren en zijn minder vatbaar voor blessures.</p>

      <p><strong>Geactiveerd zenuwstelsel</strong><br/>
      Je reflexen worden scherper. De communicatie tussen hersenen en spieren verbetert.</p>

      <br/>

      <h2>De ideale warming-up</h2>
      <p>Een goede warming-up duurt 10-15 minuten en bestaat uit drie onderdelen:</p>

      <p><strong>1. Algemene opwarming (3-5 min)</strong></p>
      <ul>
        <li>Licht roeien of fietsen</li>
        <li>Touwtje springen</li>
        <li>Joggen op de plaats</li>
      </ul>

      <p><strong>2. Dynamisch stretchen (3-5 min)</strong></p>
      <ul>
        <li>Beenzwaaien</li>
        <li>Armcirkels</li>
        <li>Heup openers</li>
        <li>Lunges met rotatie</li>
      </ul>

      <p><strong>3. Bewegingsvoorbereiding (3-5 min)</strong></p>
      <ul>
        <li>Lichte versies van de oefeningen die je gaat doen</li>
        <li>Opbouwen in intensiteit</li>
      </ul>

      <br/>

      <h2>Veelgemaakte fouten</h2>

      <p><strong>Statisch stretchen</strong><br/>
      Stilstaan en rekken voor je training vermindert juist je kracht en power. Bewaar dit voor na de training.</p>

      <p><strong>Te kort</strong><br/>
      Twee minuten joggen is geen warming-up. Neem de tijd die je lichaam nodig heeft.</p>

      <p><strong>Overslaan bij tijdgebrek</strong><br/>
      Liever 10 minuten warming-up en 20 minuten trainen dan 30 minuten trainen zonder warming-up.</p>

      <br/>

      <h2>Het verschil merk je direct</h2>
      <p>Na een goede warming-up voel je je sterker, beweeglijker en mentaal scherper.</p>

      <p>Je eerste rep voelt niet meer stroef. Je kunt dieper squatten. Je hebt meer energie.</p>

      <p>Probeer het eens: neem een week lang écht de tijd voor je warming-up en merk het verschil.</p>
    `
  },
  "doelen-stellen-die-werken": {
    title: "Doelen stellen die echt werken",
    date: "7 januari 2025",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    content: `
      <p class="lead">Waarom 'afvallen' geen goed doel is. En hoe je wél doelen stelt die je motiveren én resultaat opleveren.</p>

      <br/>

      <h2>Het probleem met vage doelen</h2>
      <p>"Ik wil fitter worden."</p>
      <p>"Ik wil afvallen."</p>
      <p>"Ik wil sterker worden."</p>

      <p>Klinkt bekend? Deze doelen hebben één probleem: ze zijn te vaag om te bereiken.</p>

      <p>Wanneer ben je "fit genoeg"? Hoeveel is "afvallen"? Wat betekent "sterker"?</p>

      <br/>

      <h2>SMART doelen</h2>
      <p>Effectieve doelen zijn SMART:</p>

      <p><strong>Specifiek</strong><br/>
      Niet "sterker worden", maar "10 kilo meer squatten".</p>

      <p><strong>Meetbaar</strong><br/>
      Je moet kunnen meten of je vooruitgang boekt.</p>

      <p><strong>Acceptabel</strong><br/>
      Het doel moet bij jou passen en je motiveren.</p>

      <p><strong>Realistisch</strong><br/>
      Uitdagend maar haalbaar binnen de gestelde tijd.</p>

      <p><strong>Tijdgebonden</strong><br/>
      Een deadline zorgt voor focus en urgentie.</p>

      <br/>

      <h2>Voorbeelden van goede doelen</h2>

      <p><strong>In plaats van "afvallen":</strong><br/>
      "Over 3 maanden pas ik in mijn favoriete broek."</p>

      <p><strong>In plaats van "fitter worden":</strong><br/>
      "Over 8 weken kan ik 5 km hardlopen zonder te stoppen."</p>

      <p><strong>In plaats van "sterker worden":</strong><br/>
      "Over 12 weken deadlift ik 100 kg."</p>

      <br/>

      <h2>Proces vs. resultaat</h2>
      <p>Er zijn twee soorten doelen:</p>

      <p><strong>Resultaatdoelen</strong><br/>
      Wat je wilt bereiken. "Ik wil 5 kg afvallen."</p>

      <p><strong>Procesdoelen</strong><br/>
      Wat je gaat doen. "Ik train 3x per week en eet elke dag groenten."</p>

      <p>Focus op procesdoelen. Je hebt controle over wat je doet, niet over het resultaat. Als je het proces goed doet, volgt het resultaat vanzelf.</p>

      <br/>

      <h2>Schrijf ze op</h2>
      <p>Doelen in je hoofd zijn wensen. Doelen op papier zijn commitments.</p>

      <p>Schrijf je doelen op en hang ze ergens zichtbaar. Deel ze met iemand die je accountable houdt.</p>

      <br/>

      <h2>Vier de kleine overwinningen</h2>
      <p>De weg naar een groot doel bestaat uit kleine stappen.</p>

      <p>Vier elke milestone. Eerste keer 3x per week getraind? Vier het. Eerste pull-up? Vier het.</p>

      <p>Deze kleine overwinningen bouwen momentum en houden je gemotiveerd.</p>

      <br/>

      <h2>Aan de slag</h2>
      <p>Pak nu pen en papier. Schrijf één concreet doel op voor de komende 3 maanden.</p>

      <p>Maak het SMART. Deel het met iemand. En begin vandaag.</p>
    `
  },
  "training-als-stressverlichter": {
    title: "Training als de ultieme stressverlichter",
    date: "6 januari 2025",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
    content: `
      <p class="lead">Gestrest? Ga sporten. De wetenschap is duidelijk: beweging is een van de beste remedies tegen stress die er bestaat.</p>

      <br/>

      <h2>Stress in je lichaam</h2>
      <p>Wanneer je gestrest bent, maakt je lichaam cortisol aan. Dit "stresshormoon" was ooit nuttig – het hielp onze voorouders vluchten voor gevaar.</p>

      <p>Maar in onze moderne wereld is de stress chronisch. Deadlines, files, social media – je lichaam staat constant "aan".</p>

      <p>Het resultaat? Slechte slaap, gewichtstoename, vermoeidheid, en een verminderd immuunsysteem.</p>

      <br/>

      <h2>Wat beweging doet</h2>

      <p><strong>Verlaagt cortisol</strong><br/>
      Beweging helpt je lichaam om overtollig cortisol af te breken. Na een workout is je cortisolniveau lager dan ervoor.</p>

      <p><strong>Maakt endorfines vrij</strong><br/>
      De beroemde "runner's high". Endorfines zijn je lichaamseigen pijnstillers en gelukshormonen.</p>

      <p><strong>Verbetert je slaap</strong><br/>
      Regelmatige beweging verbetert je slaapkwaliteit. Betere slaap betekent minder stress.</p>

      <p><strong>Geeft je controle</strong><br/>
      In een wereld vol onzekerheid is training iets wat jij controleert. Die autonomie vermindert gevoelens van stress.</p>

      <br/>

      <h2>De beste training tegen stress</h2>
      <p>Elke vorm van beweging helpt. Maar sommige trainingen zijn extra effectief:</p>

      <p><strong>Intensieve training</strong><br/>
      Een zware workout dwingt je om in het moment te zijn. Je kunt niet piekeren terwijl je een zware deadlift doet.</p>

      <p><strong>Groepstraining</strong><br/>
      Sociale connectie vermindert stress. Samen trainen combineert beweging met community.</p>

      <p><strong>Buiten bewegen</strong><br/>
      Natuur heeft een kalmerend effect. Een wandeling of run buiten werkt dubbel zo goed.</p>

      <br/>

      <h2>De paradox</h2>
      <p>Wanneer je gestrest bent, is sporten vaak het laatste waar je zin in hebt.</p>

      <p>"Ik ben te moe."<br/>
      "Ik heb geen tijd."<br/>
      "Ik moet eerst dit afmaken."</p>

      <p>Maar juist dan heb je het het hardst nodig.</p>

      <p>De energie die je erin stopt, krijg je dubbel terug. Na een workout voel je je opgeladen, helder en kalmer.</p>

      <br/>

      <h2>Begin klein</h2>
      <p>Je hoeft geen uur te trainen om het effect te voelen.</p>

      <p>Al 20 minuten matige beweging maakt verschil. Een korte wandeling in de pauze. Een paar oefeningen thuis.</p>

      <p>Het gaat om regelmaat, niet om perfectie.</p>

      <br/>

      <h2>Training als medicijn</h2>
      <p>Als je elke dag een pil kon nemen die:</p>
      <ul>
        <li>Stress vermindert</li>
        <li>Je humeur verbetert</li>
        <li>Je energie verhoogt</li>
        <li>Je slaap verbetert</li>
        <li>Geen bijwerkingen heeft</li>
      </ul>

      <p>Zou je hem nemen?</p>

      <p>Die pil bestaat. Het heet beweging.</p>
    `
  },
  "de-kracht-van-goede-voeding": {
    title: "De kracht van goede voeding: brandstof voor je prestaties",
    date: "5 januari 2025",
    category: "Voeding",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    content: `
      <p class="lead">Voeding is de fundering waarop al je trainingsresultaten worden gebouwd. Zonder de juiste brandstof presteert zelfs de beste motor niet optimaal.</p>

      <br/>

      <h2>Voeding als fundament</h2>
      <p>Je kunt trainen tot je erbij neervalt, maar zonder de juiste voeding zul je nooit je volledige potentieel bereiken.</p>

      <p>Voeding levert de bouwstenen voor spieropbouw, de energie voor je workouts, en de nutriënten die je lichaam nodig heeft om te herstellen.</p>

      <p>Zie het als het bouwen van een huis: training is de architect, maar voeding levert de stenen.</p>

      <br/>

      <h2>Pijler 1: Eiwitten</h2>
      <p>Eiwitten zijn de bouwstenen van je spieren. Na elke training ontstaan er kleine scheurtjes in je spiervezels. Eiwitten repareren deze en maken je spieren sterker.</p>

      <p><strong>Hoeveel heb je nodig?</strong><br/>
      Richt op 1.6-2.2 gram eiwit per kilo lichaamsgewicht per dag.</p>

      <p><strong>Goede bronnen:</strong></p>
      <ul>
        <li>Kip, kalkoen en ander gevogelte</li>
        <li>Vis en zeevruchten</li>
        <li>Eieren</li>
        <li>Zuivel (kwark, yoghurt, kaas)</li>
        <li>Peulvruchten en tofu</li>
      </ul>

      <br/>

      <h2>Pijler 2: Koolhydraten</h2>
      <p>Koolhydraten zijn je primaire energiebron tijdens intensieve training. Ze vullen je glycogeenvoorraden aan, waardoor je langer en harder kunt trainen.</p>

      <p><strong>Kies voor complexe koolhydraten:</strong></p>
      <ul>
        <li>Volkoren brood, pasta en rijst</li>
        <li>Aardappelen en zoete aardappelen</li>
        <li>Havermout</li>
        <li>Fruit en groenten</li>
      </ul>

      <br/>

      <h2>Pijler 3: Gezonde vetten</h2>
      <p>Vetten zijn cruciaal voor hormoonproductie, gewrichtsgezondheid en opname van vitamines.</p>

      <p><strong>Goede bronnen:</strong></p>
      <ul>
        <li>Avocado</li>
        <li>Noten en zaden</li>
        <li>Olijfolie</li>
        <li>Vette vis (zalm, makreel)</li>
      </ul>

      <br/>

      <h2>Praktische tips</h2>

      <p><strong>Meal prep</strong><br/>
      Besteed een paar uur in het weekend aan het voorbereiden van maaltijden. Zo heb je doordeweeks altijd gezonde opties binnen handbereik.</p>

      <p><strong>Eet regelmatig</strong><br/>
      Probeer elke 3-4 uur te eten. Dit houdt je energieniveau stabiel.</p>

      <p><strong>Drink genoeg water</strong><br/>
      Minimaal 2 liter per dag, meer als je zweet tijdens training.</p>

      <br/>

      <h2>De 80/20 regel</h2>
      <p>Perfectie is niet nodig.</p>

      <p>Als 80% van je voeding uit voedzame, onbewerkte producten bestaat, is er ruimte voor 20% flexibiliteit.</p>

      <p>Een stuk taart bij een verjaardag of een pizza op vrijdagavond past prima in een gezond eetpatroon. Geniet ervan zonder schuldgevoel.</p>

      <br/>

      <h2>Begin klein</h2>
      <p>Je hoeft niet alles tegelijk te veranderen. Begin met één verbetering per week:</p>
      <ul>
        <li><strong>Week 1:</strong> Drink 2 liter water per dag</li>
        <li><strong>Week 2:</strong> Eet bij elke maaltijd groenten</li>
        <li><strong>Week 3:</strong> Voeg eiwit toe aan elke maaltijd</li>
        <li><strong>Week 4:</strong> Prep je lunches voor de werkweek</li>
      </ul>

      <p>Kleine, consistente veranderingen leiden tot grote resultaten.</p>
    `
  },
  "herstel-de-vergeten-component": {
    title: "Herstel: de vergeten component van vooruitgang",
    date: "3 januari 2025",
    category: "Herstel",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    content: `
      <p class="lead">Hard trainen is slechts de helft van het verhaal. Wat je doet tussen je trainingen door bepaalt hoeveel vooruitgang je boekt.</p>

      <br/>

      <h2>Het grote misverstand</h2>
      <p>Veel mensen denken dat je sterker wordt tijdens het trainen.</p>

      <p>Maar dat is niet waar.</p>

      <p>Tijdens training breek je je lichaam af – je spieren krijgen microscheurtjes, je energievoorraden raken uitgeput, en je zenuwstelsel wordt belast.</p>

      <p>Het is tijdens het <strong>herstel</strong> dat de magie gebeurt. Dan repareert je lichaam de schade en bouwt het sterkere spieren op.</p>

      <br/>

      <h2>Pijler 1: Slaap</h2>
      <p>Slaap is de belangrijkste factor voor herstel.</p>

      <p>Tijdens de slaap produceert je lichaam groeihormoon, repareert het weefsel, en consolideert je brein de bewegingspatronen die je hebt geoefend.</p>

      <p><strong>Tips voor betere slaap:</strong></p>
      <ul>
        <li>Streef naar 7-9 uur per nacht</li>
        <li>Houd een vast slaapschema aan</li>
        <li>Maak je slaapkamer donker en koel</li>
        <li>Vermijd schermen 1 uur voor het slapen</li>
      </ul>

      <br/>

      <h2>Pijler 2: Voeding</h2>
      <p>Je lichaam heeft materiaal nodig om te repareren en te bouwen.</p>

      <p>Eiwitten leveren de bouwstenen voor spieren. Koolhydraten vullen je energievoorraden aan. Micronutriënten ondersteunen alle herstelprocessen.</p>

      <p>Eet voldoende, vooral na zware trainingen.</p>

      <br/>

      <h2>Pijler 3: Actief herstel</h2>
      <p>Stilzitten op rustdagen is niet altijd het beste.</p>

      <p>Lichte beweging stimuleert de bloedcirculatie, wat helpt bij het afvoeren van afvalstoffen.</p>

      <p><strong>Voorbeelden:</strong></p>
      <ul>
        <li>Een rustige wandeling van 20-30 minuten</li>
        <li>Licht fietsen of zwemmen</li>
        <li>Yoga of stretching</li>
        <li>Foam rolling</li>
      </ul>

      <br/>

      <h2>Pijler 4: Stressmanagement</h2>
      <p>Chronische stress houdt je cortisol hoog, wat herstel belemmert.</p>

      <p>Je lichaam maakt geen onderscheid tussen stress van training en stress van werk of privéleven – het telt allemaal op.</p>

      <p><strong>Wat helpt:</strong></p>
      <ul>
        <li>Meditatie of ademhalingsoefeningen</li>
        <li>Tijd in de natuur</li>
        <li>Hobby's die je ontspannen</li>
      </ul>

      <br/>

      <h2>Signalen van te weinig herstel</h2>
      <p>Je lichaam geeft signalen als het herstel tekortschiet:</p>
      <ul>
        <li>Aanhoudende vermoeidheid</li>
        <li>Dalende prestaties</li>
        <li>Slaapproblemen</li>
        <li>Prikkelbaar voelen</li>
        <li>Vaker ziek worden</li>
        <li>Geen motivatie om te trainen</li>
      </ul>

      <p>Herken je dit? Neem een stapje terug.</p>

      <br/>

      <h2>Rust is geen zwakte</h2>
      <p>Er heerst een cultuur van "harder is beter" in de fitnesswereld.</p>

      <p>Maar de beste atleten ter wereld nemen hun herstel net zo serieus als hun training. Ze weten dat rust geen luxe is, maar een noodzaak.</p>

      <p>Een rustdag nemen is geen teken van zwakte. Het is een teken van wijsheid.</p>

      <br/>

      <h2>Samengevat</h2>
      <ul>
        <li>Plan minimaal 2 rustdagen per week</li>
        <li>Prioriteer je slaap</li>
        <li>Eet voldoende</li>
        <li>Luister naar je lichaam</li>
      </ul>
    `
  },
  "mindset-de-sleutel-tot-succes": {
    title: "Mindset: de sleutel tot blijvend succes",
    date: "1 januari 2025",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    content: `
      <p class="lead">Je lichaam is tot veel meer in staat dan je denkt. Het is je geest die meestal opgeeft voordat je lichaam moet stoppen.</p>

      <br/>

      <h2>De kracht van je gedachten</h2>
      <p>Elke workout begint in je hoofd.</p>

      <p>De stem die zegt "dit is te zwaar" of "ik kan niet meer" is niet je lichaam – het is je brein dat je probeert te beschermen.</p>

      <p>Maar die bescherming is vaak overdreven. Je hebt altijd meer in de tank dan je denkt.</p>

      <br/>

      <h2>Fixed vs. Growth mindset</h2>
      <p>Psycholoog Carol Dweck onderscheidt twee types mindsets:</p>

      <p><strong>Fixed mindset:</strong><br/>
      "Ik ben nu eenmaal niet sportief." Met deze mindset zie je uitdagingen als bewijs van je beperkingen.</p>

      <p><strong>Growth mindset:</strong><br/>
      "Ik kan alles leren met oefening." Met deze mindset zie je uitdagingen als kansen om te groeien.</p>

      <p>Het goede nieuws? Je mindset is niet vast. Je kunt leren om te verschuiven.</p>

      <br/>

      <h2>Techniek 1: Herformuleer je dialoog</h2>
      <p>Let op wat je tegen jezelf zegt.</p>

      <p>Vervang "ik kan dit niet" door "ik kan dit <strong>nog</strong> niet."</p>

      <p>Dat kleine woordje maakt een wereld van verschil.</p>

      <br/>

      <h2>Techniek 2: Focus op het proces</h2>
      <p>Niet: "Ik wil 10 kilo afvallen."</p>

      <p>Wel: "Ik ga 3x per week trainen en gezonder eten."</p>

      <p>Je hebt controle over het proces, niet over het resultaat. Als je het proces goed doet, volgt het resultaat vanzelf.</p>

      <br/>

      <h2>Techniek 3: Omarm het ongemak</h2>
      <p>Groei gebeurt buiten je comfortzone.</p>

      <p>Dat ongemakkelijke gevoel tijdens een zware set? Dat is het gevoel van vooruitgang.</p>

      <p>Leer ervan te houden in plaats van het te vermijden.</p>

      <br/>

      <h2>Techniek 4: Vier kleine overwinningen</h2>
      <p>Wacht niet tot je je einddoel bereikt.</p>

      <p>Vier elke vooruitgang:</p>
      <ul>
        <li>Je eerste pull-up</li>
        <li>5 kilo meer op je deadlift</li>
        <li>Een week consistent getraind</li>
      </ul>

      <p>Deze kleine overwinningen bouwen momentum.</p>

      <br/>

      <h2>Omgaan met tegenslagen</h2>
      <p>Tegenslagen zijn onvermijdelijk.</p>

      <p>Je zult trainingen missen. Je zult periodes hebben waarin het minder gaat. Misschien raak je zelfs geblesseerd.</p>

      <p>Dit is niet het einde – het is onderdeel van de reis.</p>

      <p>Het verschil tussen mensen die slagen en mensen die opgeven? <strong>De eerste groep staat telkens weer op.</strong></p>

      <br/>

      <h2>De kracht van community</h2>
      <p>Je omgeving beïnvloedt je mindset enorm.</p>

      <p>Omring jezelf met mensen die je steunen, die je uitdagen, en die dezelfde doelen nastreven.</p>

      <p>Bij CrossFit Alkmaar vind je die community – mensen die elkaar aanmoedigen, ongeacht niveau.</p>

      <br/>

      <h2>Begin vandaag</h2>
      <p>Je mindset veranderen is als een spier trainen – het kost tijd en consistente oefening.</p>

      <p><strong>Kleine stappen:</strong></p>
      <ul>
        <li>Let op je innerlijke dialoog</li>
        <li>Schrijf elke avond 3 dingen op waar je trots op bent</li>
        <li>Vervang "ik moet" door "ik mag"</li>
        <li>Zoek een trainingsmaatje</li>
      </ul>

      <p>Je gedachten bepalen je acties. Je acties bepalen je gewoontes. Je gewoontes bepalen je resultaten.</p>

      <p><strong>Het begint allemaal met hoe je denkt.</strong></p>
    `
  },
  "waarom-krachttraining-voor-50-plussers": {
    title: "Waarom krachttraining juist voor 50-plussers essentieel is",
    date: "12 december 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    content: `
      <p class="lead">Vanaf je 30e verlies je elk decennium zo'n 3-5% van je spiermassa. Na je 50e versnelt dit proces. Maar hier is het goede nieuws: krachttraining kan dit niet alleen stoppen, maar zelfs omkeren.</p>

      <h2>Het probleem: sarcopenie</h2>
      <p>Sarcopenie is de medische term voor leeftijdsgerelateerd spierverlies. Het klinkt misschien als iets waar je pas op hoge leeftijd mee te maken krijgt, maar het begint al vroeger dan je denkt. De gevolgen?</p>
      <ul>
        <li>Minder kracht in dagelijkse activiteiten</li>
        <li>Hoger risico op vallen</li>
        <li>Tragere stofwisseling (en dus sneller aankomen)</li>
        <li>Verlies van zelfstandigheid op latere leeftijd</li>
      </ul>

      <h2>De oplossing: krachttraining</h2>
      <p>Onderzoek na onderzoek bewijst het: krachttraining is de meest effectieve manier om spierverlies tegen te gaan. En nee, je bent nooit te oud om te beginnen. Studies tonen aan dat zelfs 90-jarigen nog significant spiermassa kunnen opbouwen.</p>

      <h2>Voordelen voor 50-plussers</h2>
      <p><strong>1. Sterkere botten</strong><br/>
      Krachttraining stimuleert de botdichtheid. Dit is cruciaal voor het voorkomen van osteoporose, vooral bij vrouwen na de menopauze.</p>

      <p><strong>2. Beter evenwicht</strong><br/>
      Sterkere spieren betekent beter evenwicht. Dit verlaagt het risico op vallen – een van de grootste gezondheidsrisico's voor ouderen.</p>

      <p><strong>3. Hogere stofwisseling</strong><br/>
      Spieren verbranden meer calorieën dan vet, zelfs in rust. Meer spiermassa betekent een actievere stofwisseling.</p>

      <p><strong>4. Minder gewrichtspijn</strong><br/>
      Sterke spieren ontlasten je gewrichten. Veel mensen met knie- of rugklachten ervaren verlichting door krachttraining.</p>

      <p><strong>5. Mentale voordelen</strong><br/>
      Krachttraining verbetert je slaap, vermindert angst en depressie, en geeft een boost aan je zelfvertrouwen.</p>

      <h2>Hoe begin je?</h2>
      <p>Het belangrijkste is om te beginnen met begeleiding. Bij CrossFit Alkmaar passen we elke oefening aan op jouw niveau en eventuele beperkingen. Onze gemiddelde leeftijd is 35+, en we hebben leden tot in de 70 die veilig en effectief trainen.</p>

      <p>Je hoeft niet meteen zware gewichten te tillen. We beginnen met de basis: goede bewegingspatronen, mobiliteit en geleidelijke opbouw. Zo bouw je een sterke fundering voor de rest van je leven.</p>

      <h2>Het is nooit te laat</h2>
      <p>Of je nu 50, 60 of 70+ bent: je lichaam reageert nog steeds op training. De vraag is niet óf je kunt beginnen, maar wanneer je begint. Elke dag die je wacht, is een dag spiermassa die je verliest.</p>
    `
  },
  "5-tips-om-consistent-te-blijven": {
    title: "5 tips om consistent te blijven met trainen",
    date: "8 december 2024",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    content: `
      <p class="lead">Beginnen met sporten is makkelijk. Volhouden is de uitdaging. Deze 5 bewezen tips helpen je om van trainen een blijvende gewoonte te maken.</p>

      <h2>1. Plan je trainingen als afspraken</h2>
      <p>Zet je trainingen in je agenda zoals je een belangrijke vergadering zou plannen. Niet "ik ga deze week 3x trainen", maar "maandag 18:00, woensdag 7:00, vrijdag 18:00". Specifieke afspraken worden nagekomen, vage voornemens niet.</p>
      <p>Tip: schrijf je in voor lessen via de app. Dan heb je een commitment én iemand die je mist als je niet komt opdagen.</p>

      <h2>2. Maak het zo makkelijk mogelijk</h2>
      <p>Elke drempel die je moet nemen, is een excuus om niet te gaan. Daarom:</p>
      <ul>
        <li>Leg je sportkleren de avond ervoor klaar</li>
        <li>Kies een gym dichtbij huis of werk</li>
        <li>Heb een backup-plan voor drukke dagen (kortere workout)</li>
        <li>Ga direct na het werk, voordat je thuiskomt</li>
      </ul>

      <h2>3. Focus op de gewoonte, niet het resultaat</h2>
      <p>In het begin is het belangrijker dát je gaat, dan wat je doet. Zelfs als je maar 20 minuten traint: je bouwt aan de gewoonte. De resultaten volgen vanzelf.</p>
      <p>James Clear (auteur van Atomic Habits) noemt dit de "2-minuten regel": maak de gewoonte zo klein dat je geen excuus hebt om het niet te doen. Sportkleren aantrekken en naar de gym rijden is al een overwinning.</p>

      <h2>4. Vind je tribe</h2>
      <p>Mensen die samen trainen, blijven langer trainen. Je bent niet alleen verantwoordelijk naar jezelf, maar ook naar je trainingsmaatjes. Bij CrossFit trainen we altijd in groepen – dat is geen toeval.</p>
      <p>Als je deel uitmaakt van een community, is trainen niet alleen een workout, maar een sociale activiteit waar je naar uitkijkt.</p>

      <h2>5. Wees flexibel met jezelf</h2>
      <p>Je gaat trainingen missen. Je gaat periodes hebben waarin het minder gaat. Dat is normaal en hoort erbij. Het verschil tussen mensen die volhouden en mensen die stoppen? De eerste groep pakt de draad weer op.</p>
      <p>Eén gemiste training is geen ramp. Een week niet getraind? Prima, begin volgende week weer. Zelfcompassie is een van de beste voorspellers van langetermijnsucces.</p>

      <h2>Bonus: track je progressie</h2>
      <p>Houd bij wat je doet. Niet om jezelf af te rekenen, maar om te zien hoever je bent gekomen. Niets motiveert meer dan terugkijken en zien dat je 6 maanden geleden niet eens kon wat nu je warming-up is.</p>
    `
  },
  "wat-eet-je-voor-en-na-training": {
    title: "Wat eet je het beste voor en na je training?",
    date: "1 december 2024",
    category: "Voeding",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    content: `
      <p class="lead">De juiste voeding op het juiste moment kan het verschil maken tussen een goede en een geweldige training. Maar wat eet je nou precies? En wanneer?</p>

      <h2>Voor je training</h2>
      <p>Je doel voor de training: genoeg energie hebben zonder een te volle maag. Timing en samenstelling zijn key.</p>

      <p><strong>2-3 uur voor je training:</strong><br/>
      Een volledige maaltijd met koolhydraten, eiwitten en gezonde vetten. Denk aan:</p>
      <ul>
        <li>Rijst met kip en groenten</li>
        <li>Pasta met gehakt en tomatensaus</li>
        <li>Brood met ei en avocado</li>
      </ul>

      <p><strong>30-60 minuten voor je training:</strong><br/>
      Een lichte snack die snel energie geeft. Denk aan:</p>
      <ul>
        <li>Een banaan</li>
        <li>Rijstwafel met pindakaas</li>
        <li>Handje dadels</li>
        <li>Yoghurt met wat muesli</li>
      </ul>

      <p><strong>Tip:</strong> Experimenteer met wat voor jou werkt. Sommige mensen trainen prima op een lege maag, anderen hebben echt iets nodig. Luister naar je lichaam.</p>

      <h2>Na je training</h2>
      <p>Na je training wil je twee dingen: je spieren voorzien van bouwstoffen (eiwitten) en je energievoorraden aanvullen (koolhydraten).</p>

      <p><strong>Binnen 1-2 uur na je training:</strong></p>
      <ul>
        <li>Shakje met whey proteïne en een banaan</li>
        <li>Griekse yoghurt met fruit en noten</li>
        <li>Broodje met kipfilet of tonijn</li>
        <li>Omelet met groenten en brood</li>
      </ul>

      <p><strong>Hoeveel eiwit heb je nodig?</strong><br/>
      Richt op 20-40 gram eiwit na je training. Voor de hele dag: ongeveer 1.6-2.2 gram per kilo lichaamsgewicht als je regelmatig traint.</p>

      <h2>Hydratatie niet vergeten</h2>
      <p>Water is minstens zo belangrijk als voeding. Drink voor, tijdens en na je training. Een goede richtlijn:</p>
      <ul>
        <li>500ml in de 2 uur voor je training</li>
        <li>Tijdens: kleine slokjes wanneer je dorst hebt</li>
        <li>Na: 500-750ml per uur zware inspanning</li>
      </ul>

      <h2>Veelgemaakte fouten</h2>
      <p><strong>1. Te weinig eten</strong><br/>
      Bang om aan te komen eet je te weinig. Resultaat: slechte trainingen, geen spieropbouw, en uiteindelijk een tragere stofwisseling.</p>

      <p><strong>2. Te veel focussen op supplements</strong><br/>
      Supplements zijn een aanvulling, geen vervanging. Focus eerst op echte voeding.</p>

      <p><strong>3. De hele dag "gezond" eten en 's avonds ontsporen</strong><br/>
      Beter: eet regelmatig, genoeg, en sta jezelf af en toe iets lekkers toe zonder schuldgevoel.</p>

      <h2>Het hoeft niet ingewikkeld</h2>
      <p>De basis is simpel: eet gevarieerd, genoeg eiwitten, voldoende groenten, en timing rondom je training. Perfectie is niet nodig – consistentie wel.</p>
    `
  },
  "crossfit-voor-beginners": {
    title: "CrossFit voor beginners: wat kun je verwachten?",
    date: "25 november 2024",
    category: "CrossFit",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    content: `
      <p class="lead">Je hebt misschien video's gezien van extreme workouts en vraagt je af: is dit wel iets voor mij? Spoiler: ja, waarschijnlijk wel. Dit is wat je écht kunt verwachten.</p>

      <h2>Wat is CrossFit eigenlijk?</h2>
      <p>CrossFit is een trainingsmethode die verschillende disciplines combineert: gewichtheffen, gymnastiek, en cardio. Elke dag is de workout anders, waardoor je nooit verveeld raakt en je lichaam constant uitgedaagd wordt.</p>
      <p>Maar het belangrijkste kenmerk? Alles is schaalbaar. Dezelfde workout kan worden gedaan door een topsporter én iemand die net begint. De bewegingen zijn hetzelfde, de intensiteit wordt aangepast.</p>

      <h2>Je eerste les: geen stress</h2>
      <p>Bij CrossFit Alkmaar start iedereen met een kennismakingsgesprek. We bespreken je doelen, eventuele beperkingen, en leggen uit hoe alles werkt. Geen verrassingen.</p>
      <p>Daarna begin je met onze 28 Day Kickstart: 4 weken waarin je alle basis bewegingen leert in een kleine groep. Je krijgt persoonlijke aandacht en bouwt een goede techniek op voordat je naar de reguliere lessen gaat.</p>

      <h2>Wat zit er in een typische les?</h2>
      <p>Een CrossFit les duurt ongeveer 60 minuten en bestaat uit:</p>

      <p><strong>1. Warming-up (10-15 min)</strong><br/>
      We maken je lichaam klaar voor de workout. Dynamisch stretchen, mobiliteit, en lichte bewegingen.</p>

      <p><strong>2. Techniek/Kracht (15-20 min)</strong><br/>
      We werken aan een specifieke beweging of krachtoefening. De coach legt uit, doet voor, en helpt je met je techniek.</p>

      <p><strong>3. Workout of the Day (10-20 min)</strong><br/>
      De WOD: een korte, intensieve workout. Dit is waar je jezelf uitdaagt – op jouw niveau.</p>

      <p><strong>4. Cooling-down (5-10 min)</strong><br/>
      Stretchen en rustig worden. En natuurlijk: bijkletsen met je trainingsmaatjes.</p>

      <h2>Moet ik al fit zijn?</h2>
      <p>Nee. Echt niet. We zien dagelijks mensen die jarenlang niets hebben gedaan en nu hun beste vorm ooit bereiken. CrossFit is bedoeld om je fit te maken, niet om al fit te zijn.</p>
      <p>De coaches passen alles aan. Kun je geen pull-up? Dan doen we een aangepaste versie. Heb je een slechte knie? Dan kiezen we een alternatieve oefening. Er is altijd een oplossing.</p>

      <h2>De community</h2>
      <p>Dit is wat CrossFit anders maakt dan een reguliere sportschool. Je traint samen, moedigt elkaar aan, en viert elkaars successen. Veel van onze leden zijn vrienden geworden buiten de gym.</p>
      <p>Er is geen competitie met anderen – alleen met jezelf. De ervaren atleet die naast je traint? Die begon ook ooit als beginner en weet precies hoe het voelt.</p>

      <h2>Wat heb je nodig?</h2>
      <ul>
        <li>Sportkleding waarin je vrij kunt bewegen</li>
        <li>Sportschoenen (geen hardloopschoenen met dikke zool)</li>
        <li>Water en een handdoek</li>
        <li>Een open mindset</li>
      </ul>

      <h2>Klaar om te beginnen?</h2>
      <p>De eerste stap is altijd het moeilijkst. Maar zodra je die hebt gezet, vraag je je af waarom je zo lang hebt gewacht. We zien je graag!</p>
    `
  },
  "blessures-voorkomen": {
    title: "Zo voorkom je blessures tijdens het sporten",
    date: "18 november 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    content: `
      <p class="lead">Een blessure is de snelste manier om je vooruitgang te stoppen. Gelukkig zijn de meeste sportblessures te voorkomen. Dit zijn de belangrijkste tips.</p>

      <h2>1. Warming-up: niet overslaan</h2>
      <p>We weten het allemaal, maar toch slaan velen het over. Een goede warming-up verhoogt je lichaamstemperatuur, maakt je spieren soepeler, en bereidt je gewrichten voor op beweging.</p>
      <p>Een effectieve warming-up duurt 10-15 minuten en bestaat uit:</p>
      <ul>
        <li>Lichte cardio (roeien, fietsen, touwtje springen)</li>
        <li>Dynamische stretches (geen statisch rekken!)</li>
        <li>Bewegingen die lijken op wat je gaat doen, maar lichter</li>
      </ul>

      <h2>2. Techniek boven gewicht</h2>
      <p>Dit is de belangrijkste regel. Een perfecte squat met 40 kilo is waardevoller dan een slechte squat met 80 kilo. Ego bij de deur laten en focussen op hoe je beweegt.</p>
      <p>Daarom werken we bij CrossFit Alkmaar veel aan techniek, vooral in het begin. Goede bewegingspatronen worden automatismen, en die beschermen je voor de rest van je leven.</p>

      <h2>3. Luister naar je lichaam</h2>
      <p>Er is een verschil tussen ongemak en pijn. Ongemak hoort bij trainen – je spieren worden moe, je hartslag gaat omhoog, het is zwaar. Maar scherpe pijn, pijn in gewrichten, of iets dat "niet goed voelt"? Stop en vraag de coach.</p>
      <p>Beter een workout overslaan dan weken aan de kant staan.</p>

      <h2>4. Herstel serieus nemen</h2>
      <p>Je wordt niet sterker tijdens de training, maar tijdens het herstel. Zorg voor:</p>
      <ul>
        <li><strong>Slaap:</strong> 7-9 uur per nacht. Niet onderhandelbaar.</li>
        <li><strong>Voeding:</strong> Genoeg eiwitten en calorieën om te herstellen.</li>
        <li><strong>Rustdagen:</strong> Minimaal 1-2 per week, afhankelijk van intensiteit.</li>
        <li><strong>Mobiliteit:</strong> Stretchen, foam rollen, of yoga op rustdagen.</li>
      </ul>

      <h2>5. Bouw geleidelijk op</h2>
      <p>De meeste blessures ontstaan door te veel, te snel. Je lichaam heeft tijd nodig om zich aan te passen aan nieuwe belasting. De algemene regel: verhoog volume of intensiteit met maximaal 10% per week.</p>
      <p>Begin je net? Start met 2-3 trainingen per week. Na een paar maanden kun je opbouwen als je lichaam er klaar voor is.</p>

      <h2>6. Variatie in je training</h2>
      <p>Steeds dezelfde beweging herhalen leidt tot overbelasting. CrossFit is hier ideaal voor: elke dag is anders, waardoor je lichaam gevarieerd belast wordt.</p>

      <h2>7. Vraag om hulp</h2>
      <p>Voel je iets raars? Vraag de coach. We kijken liever even mee dan dat je weken later met een blessure zit. En heb je ergens last van? Vertel het ons, zodat we de workout kunnen aanpassen.</p>

      <h2>Blessures zijn geen falen</h2>
      <p>Soms gebeurt het toch. Dat betekent niet dat je iets fout hebt gedaan. Lichamen zijn complex. Het belangrijkste is hoe je ermee omgaat: rust nemen, eventueel een professional raadplegen, en geduldig terugkomen.</p>
    `
  },
  "meer-energie-door-beweging": {
    title: "Waarom beweging je juist meer energie geeft",
    date: "10 november 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1200&q=80",
    content: `
      <p class="lead">"Ik ben te moe om te sporten." We hebben het allemaal weleens gedacht. Maar wat als sporten juist de oplossing is voor je vermoeidheid?</p>

      <h2>De paradox van energie</h2>
      <p>Het klinkt tegenstrijdig: energie verbruiken om energie te krijgen. Maar zo werkt je lichaam. Beweging zet een cascade van positieve effecten in gang die je energieniveau structureel verhogen.</p>

      <h2>Wat er in je lichaam gebeurt</h2>
      <p><strong>1. Meer mitochondriën</strong><br/>
      Mitochondriën zijn de energiefabriekjes in je cellen. Door regelmatig te bewegen, maakt je lichaam er meer aan. Letterlijk meer capaciteit om energie te produceren.</p>

      <p><strong>2. Betere doorbloeding</strong><br/>
      Je hart wordt sterker en je bloedvaten soepeler. Zuurstof en voedingsstoffen worden efficiënter door je lichaam vervoerd. Resultaat: je voelt je alerter en minder moe.</p>

      <p><strong>3. Hormoonhuishouding</strong><br/>
      Beweging reguleert hormonen die invloed hebben op energie: cortisol (stress), serotonine (stemming), en endorfines (geluksgevoel). Na een workout voel je je vaak opgeladen, niet uitgeput.</p>

      <p><strong>4. Betere slaap</strong><br/>
      Regelmatige beweging verbetert je slaapkwaliteit. Je valt sneller in slaap, slaapt dieper, en wordt uitgeruster wakker. Dit alleen al maakt een enorm verschil in je dagelijkse energie.</p>

      <h2>Maar ik ben echt moe...</h2>
      <p>We snappen het. Na een lange werkdag voelt de bank een stuk aantrekkelijker dan de gym. Maar hier is een tip: begin gewoon. Zeg tegen jezelf dat je alleen de warming-up doet. In 9 van de 10 gevallen maak je de hele training af en voel je je daarna veel beter.</p>
      <p>De vermoeidheid die je voelt is vaak mentaal, niet fysiek. Beweging breekt die cyclus.</p>

      <h2>Het vliegwiel effect</h2>
      <p>In het begin kost het moeite. Je lichaam moet wennen, je moet een routine opbouwen. Maar na een paar weken gebeurt er iets magisch: je hebt zin om te gaan. Je mist het als je niet traint. De energie die je erin stopt, krijg je dubbel terug.</p>

      <h2>Welke beweging is het beste?</h2>
      <p>De beweging die je volhoudt. Maar als we mogen kiezen: een combinatie van kracht en cardio werkt het beste. Precies wat we bij CrossFit doen.</p>
      <ul>
        <li><strong>Krachttraining:</strong> Bouwt spiermassa, verhoogt stofwisseling</li>
        <li><strong>Cardio:</strong> Verbetert hart en longen, meer uithoudingsvermogen</li>
        <li><strong>Variatie:</strong> Houdt het interessant en belast je lichaam volledig</li>
      </ul>

      <h2>Begin klein</h2>
      <p>Je hoeft niet meteen 5 keer per week te trainen. Begin met 2 keer. Merk hoe je je voelt. Bouw op als je er klaar voor bent. De sleutel is regelmaat, niet perfectie.</p>

      <h2>Energie is een keuze</h2>
      <p>Je hebt meer controle over je energieniveau dan je denkt. Ja, er zijn factoren die je niet kunt beïnvloeden. Maar beweging, slaap, en voeding kun je wél beïnvloeden. En die maken een wereld van verschil.</p>
    `
  },
  "functioneel-trainen-vs-machines": {
    title: "Functioneel trainen vs. machines: wat werkt beter?",
    date: "9 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&q=80",
    content: `
      <p class="lead">Waarom functionele oefeningen zoals squats en deadlifts effectiever zijn dan geïsoleerde machine-oefeningen. De wetenschap is duidelijk.</p>

      <br/>

      <h2>Wat is functioneel trainen?</h2>
      <p>Functioneel trainen betekent oefeningen doen die je lichaam voorbereiden op bewegingen in het dagelijks leven. Denk aan tillen, duwen, trekken, hurken en draaien.</p>

      <p>In plaats van één spier te isoleren (zoals bij een leg extension machine), train je meerdere spiergroepen tegelijk in natuurlijke bewegingspatronen.</p>

      <br/>

      <h2>Het probleem met machines</h2>
      <p>Fitnessmachines zijn ontworpen om bewegingen te isoleren. Dat klinkt efficiënt, maar je lichaam werkt niet zo.</p>

      <p><strong>In het echte leven:</strong></p>
      <ul>
        <li>Til je een doos op met je hele lichaam, niet alleen je biceps</li>
        <li>Moet je stabiliseren terwijl je beweegt</li>
        <li>Werk je in drie dimensies, niet in één vast pad</li>
      </ul>

      <p>Machines trainen je spieren, maar niet hoe die spieren samenwerken.</p>

      <br/>

      <h2>Voordelen van functioneel trainen</h2>

      <p><strong>1. Meer spieren tegelijk</strong><br/>
      Een squat activeert je quadriceps, hamstrings, bilspieren, core, en zelfs je rug. Een leg press? Voornamelijk je quadriceps. Meer spieren betekent meer calorieën verbranden en sneller sterker worden.</p>

      <p><strong>2. Betere coördinatie</strong><br/>
      Functionele oefeningen trainen je zenuwstelsel om spiergroepen te laten samenwerken. Dit verbetert je balans, coördinatie en reactiesnelheid.</p>

      <p><strong>3. Sterke core</strong><br/>
      Bij vrijwel elke functionele oefening moet je core stabiliseren. Geen aparte buikspieroefeningen nodig – je traint ze automatisch mee.</p>

      <p><strong>4. Praktische kracht</strong><br/>
      De kracht die je opbouwt is direct toepasbaar. Boodschappen tillen, traplopen, met je kinderen spelen – alles wordt makkelijker.</p>

      <p><strong>5. Minder blessures</strong><br/>
      Door bewegingspatronen te trainen in plaats van losse spieren, bouw je een evenwichtiger lichaam. Geen zwakke schakels die blessures veroorzaken.</p>

      <br/>

      <h2>De basisoefeningen</h2>
      <p>Deze functionele oefeningen vormen de kern van effectieve training:</p>

      <p><strong>Squat (hurken)</strong><br/>
      De koning van alle oefeningen. Traint je hele onderbenen, core en zelfs je rug.</p>

      <p><strong>Deadlift (optillen)</strong><br/>
      Simuleert iets van de grond tillen. Traint je rug, bilspieren, hamstrings en grip.</p>

      <p><strong>Press (duwen)</strong><br/>
      Boven je hoofd duwen. Traint schouders, triceps en core-stabiliteit.</p>

      <p><strong>Pull-up (trekken)</strong><br/>
      Je lichaam omhoog trekken. Traint rug, biceps en grip.</p>

      <p><strong>Carry (dragen)</strong><br/>
      Gewicht dragen terwijl je loopt. Traint alles – vooral je core en grip.</p>

      <br/>

      <h2>Maar machines zijn toch veiliger?</h2>
      <p>Een veelgehoord argument. Maar klopt het?</p>

      <p>Machines dwingen je in een vast bewegingspad. Als dat pad niet past bij jouw lichaam, kan dit juist tot problemen leiden.</p>

      <p>Functionele oefeningen met goede techniek zijn veiliger, omdat je lichaam kan bewegen zoals het ontworpen is. Daarom besteden we bij CrossFit Alkmaar veel tijd aan het leren van de juiste techniek.</p>

      <br/>

      <h2>Het beste van beide werelden</h2>
      <p>Machines zijn niet per se slecht. Ze kunnen nuttig zijn voor:</p>
      <ul>
        <li>Revalidatie na blessures</li>
        <li>Extra volume op specifieke spieren</li>
        <li>Absolute beginners die nog coördinatie moeten opbouwen</li>
      </ul>

      <p>Maar ze zouden nooit de basis van je training moeten zijn.</p>

      <br/>

      <h2>Waarom CrossFit werkt</h2>
      <p>CrossFit is gebouwd op functionele bewegingen. Elke workout bevat oefeningen die je hele lichaam uitdagen.</p>

      <p>Geen urenlang van machine naar machine. In plaats daarvan: effectieve, samengestelde bewegingen die je klaarstomen voor het echte leven.</p>

      <p>En het mooiste? Je ziet sneller resultaat. Omdat je meer spieren traint in minder tijd.</p>
    `
  },
  "de-kracht-van-samen-trainen": {
    title: "De kracht van samen trainen: waarom community werkt",
    date: "10 januari 2025",
    category: "Community",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80",
    content: `
      <p class="lead">Alleen trainen is lastig volhouden. Ontdek waarom mensen die samen trainen betere resultaten behalen én langer volhouden.</p>

      <br/>

      <h2>De statistieken liegen niet</h2>
      <p>80% van de mensen met een sportschoolabonnement stopt binnen 5 maanden. Ze beginnen vol goede moed in januari, en tegen de zomer is de motivatie verdwenen.</p>

      <p>Maar bij groepstraining zoals CrossFit? De retentie is vele malen hoger. Mensen blijven jaren komen, sommigen al meer dan een decennium.</p>

      <p>Wat maakt het verschil? Community.</p>

      <br/>

      <h2>Waarom alleen trainen moeilijk is</h2>

      <p><strong>Niemand merkt het als je niet komt</strong><br/>
      Als je een training skipt in een reguliere sportschool, weet niemand het. Er is geen verantwoordelijkheid naar anderen.</p>

      <p><strong>Geen externe motivatie</strong><br/>
      Op dagen dat je geen zin hebt, is er niemand die je een duwtje geeft. Je motivatie moet 100% van binnenuit komen – en dat is uitputtend.</p>

      <p><strong>Saai</strong><br/>
      Alleen op een loopband staren naar een scherm. Alleen van machine naar machine. Het is eenzaam en weinig inspirerend.</p>

      <br/>

      <h2>Wat community doet</h2>

      <p><strong>1. Accountability</strong><br/>
      Als je inschrijft voor een les, word je verwacht. Je trainingsmaatjes vragen waar je was. Die sociale druk werkt – op een positieve manier.</p>

      <p><strong>2. Aanmoediging</strong><br/>
      Wanneer was de laatste keer dat iemand je aanmoedigde in de sportschool? Bij groepstraining is dat de norm. "Kom op, nog twee reps!" kan het verschil maken.</p>

      <p><strong>3. Gedeelde strijd</strong><br/>
      Samen afzien schept een band. Als jullie allemaal dezelfde zware workout doorstaan, ontstaat er kameraadschap die verder gaat dan de gym.</p>

      <p><strong>4. Sociale afspraak</strong><br/>
      Training wordt meer dan alleen bewegen – het wordt een sociale activiteit waar je naar uitkijkt. Je ziet vrienden, je hebt lol, en oh ja, je wordt ook nog fit.</p>

      <br/>

      <h2>De wetenschap erachter</h2>
      <p>Onderzoek van de American College of Sports Medicine toont aan:</p>
      <ul>
        <li>Mensen trainen 200% langer door in groepsverband</li>
        <li>Groepstraining verhoogt endorfine-afgifte (gelukshormonen)</li>
        <li>Sociale steun verlaagt het ervaren inspanningsniveau</li>
      </ul>

      <p>Met andere woorden: dezelfde workout voelt lichter als je hem samen doet.</p>

      <br/>

      <h2>De rol van de coach</h2>
      <p>Bij CrossFit heb je bij elke les een coach. Deze:</p>
      <ul>
        <li>Leidt de warming-up en workout</li>
        <li>Corrigeert je techniek</li>
        <li>Past oefeningen aan op jouw niveau</li>
        <li>Motiveert wanneer het zwaar wordt</li>
      </ul>

      <p>Je hoeft niet zelf te bedenken wat je gaat doen. Je hoeft alleen maar op te komen dagen.</p>

      <br/>

      <h2>Vriendschappen voor het leven</h2>
      <p>Veel van onze leden zijn vrienden geworden buiten de gym. Ze gaan samen uit eten, vieren verjaardagen, en steunen elkaar in moeilijke tijden.</p>

      <p>Dat gebeurt niet bij een reguliere sportschool waar iedereen met oortjes in op zijn eigen eilandje traint.</p>

      <br/>

      <h2>Competitie op de goede manier</h2>
      <p>Er zit iemand naast je die net iets sneller gaat. Onbewust ga je harder. Niet om te winnen, maar omdat je elkaar optilt.</p>

      <p>Dit "positive peer pressure" effect is krachtig. Je haalt prestaties uit jezelf waarvan je niet wist dat ze mogelijk waren.</p>

      <br/>

      <h2>Het maakt niet uit waar je begint</h2>
      <p>Een veel gehoorde angst: "Ik ben niet fit genoeg voor groepstraining."</p>

      <p>Maar juist beginners profiteren het meest van community. Je leert van anderen, krijgt extra aanmoediging, en ziet dat iedereen ooit is begonnen waar jij nu staat.</p>

      <p>Bij CrossFit Alkmaar trainen complete beginners naast ervaren atleten. En raad eens? Die ervaren atleten moedigen de beginners het hardst aan. Ze weten hoe het voelt.</p>

      <br/>

      <h2>Probeer het zelf</h2>
      <p>Je kunt lezen over community, maar je moet het ervaren. Plan een gratis intake en ontdek waarom mensen bij ons blijven.</p>

      <p>De workouts zijn zwaar. Maar je doet ze niet alleen. En dat maakt alle verschil.</p>
    `
  },
  "hoe-vaak-moet-je-trainen": {
    title: "Hoe vaak moet je trainen voor resultaat?",
    date: "11 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80",
    content: `
      <p class="lead">2x per week? 5x per week? De optimale trainingsfrequentie hangt af van je doelen, ervaring en herstelvermogen. Dit is wat de wetenschap zegt.</p>

      <br/>

      <h2>Het korte antwoord</h2>
      <p>Voor de meeste mensen is <strong>3-4 keer per week</strong> de sweet spot. Genoeg om vooruitgang te boeken, met voldoende herstel ertussen.</p>

      <p>Maar het echte antwoord is: het hangt ervan af.</p>

      <br/>

      <h2>Beginners: minder is meer</h2>
      <p>Als je net begint met trainen, is <strong>2-3 keer per week</strong> genoeg.</p>

      <p>Waarom?</p>
      <ul>
        <li>Je lichaam moet wennen aan de nieuwe belasting</li>
        <li>Je spieren, pezen en gewrichten hebben meer hersteltijd nodig</li>
        <li>Je leert nog technieken – kwaliteit gaat boven kwantiteit</li>
        <li>Te snel opbouwen leidt tot blessures of burnout</li>
      </ul>

      <p>Na 2-3 maanden consistent trainen kun je overwegen om op te bouwen.</p>

      <br/>

      <h2>Gevorderden: de sweet spot</h2>
      <p>Heb je een basis opgebouwd? Dan is <strong>3-4 keer per week</strong> ideaal voor de meeste mensen.</p>

      <p>Dit geeft je:</p>
      <ul>
        <li>Genoeg trainingsprikkel voor vooruitgang</li>
        <li>Minstens 1-2 rustdagen tussen intensieve sessies</li>
        <li>Ruimte voor werk, gezin en sociale leven</li>
        <li>Mentale frisheid – je kijkt uit naar je trainingen</li>
      </ul>

      <br/>

      <h2>Meer dan 4 keer per week?</h2>
      <p>Kan, maar dan worden andere factoren belangrijker:</p>

      <p><strong>5-6x per week is mogelijk als:</strong></p>
      <ul>
        <li>Je varieert in intensiteit (niet elke dag vol gas)</li>
        <li>Je slaap en voeding op orde zijn</li>
        <li>Je luistert naar je lichaam</li>
        <li>Je ervaren bent en goed herstelt</li>
      </ul>

      <p>Maar voor 95% van de mensen is 3-4x effectiever dan 6x met slechte herstel.</p>

      <br/>

      <h2>Wat zegt de wetenschap?</h2>
      <p>Onderzoek toont aan dat trainingsfrequentie minder uitmaakt dan totaal trainingsvolume.</p>

      <p>Oftewel: 3 goede trainingen per week kan net zo effectief zijn als 5 matige trainingen.</p>

      <p>De sleutel is <strong>consistentie over tijd</strong>. Iemand die 10 jaar lang 2x per week traint, bereikt meer dan iemand die 3 maanden 6x per week traint en dan stopt.</p>

      <br/>

      <h2>Tekenen dat je te veel traint</h2>
      <p>Luister naar deze signalen:</p>
      <ul>
        <li>Aanhoudende vermoeidheid, ook na rust</li>
        <li>Dalende prestaties ondanks hard werken</li>
        <li>Slaapproblemen</li>
        <li>Vaker ziek worden</li>
        <li>Geen zin meer om te trainen</li>
        <li>Prikkelbaar of somber</li>
      </ul>

      <p>Dit zijn tekenen van overtraining. De oplossing? Minder trainen, beter herstellen.</p>

      <br/>

      <h2>Tekenen dat je meer kunt doen</h2>
      <ul>
        <li>Je herstelt snel en voelt je energiek</li>
        <li>Je maakt geen progressie meer</li>
        <li>Je hebt zin in meer</li>
        <li>Je slaap en voeding zijn op orde</li>
      </ul>

      <p>Dan kun je overwegen een training per week toe te voegen.</p>

      <br/>

      <h2>Het belang van rustdagen</h2>
      <p>Rustdagen zijn geen "vrije dagen" – ze zijn onderdeel van je training.</p>

      <p>Tijdens rust:</p>
      <ul>
        <li>Repareren je spieren zich en worden sterker</li>
        <li>Vult je zenuwstelsel zich aan</li>
        <li>Verwerk je mentaal de trainingsbelasting</li>
      </ul>

      <p>Actief herstel (wandelen, licht fietsen, stretchen) kan beter zijn dan complete rust.</p>

      <br/>

      <h2>Onze aanbeveling</h2>

      <p><strong>Net begonnen?</strong><br/>
      Start met 2x per week. Focus op techniek en gewenning. Na 4-6 weken kun je opbouwen naar 3x.</p>

      <p><strong>Enige ervaring?</strong><br/>
      3x per week is een goede basis. Wil je meer? Bouw langzaam op naar 4x.</p>

      <p><strong>Gevorderd?</strong><br/>
      3-5x per week, afhankelijk van je doelen en herstel. Varieer in intensiteit.</p>

      <br/>

      <h2>Consistentie wint</h2>
      <p>Het allerbeste schema is het schema dat je volhoudt.</p>

      <p>Liever 2x per week het hele jaar door, dan 5x per week voor twee maanden en dan stoppen.</p>

      <p>Begin realistisch. Bouw langzaam op. En vergeet niet: dit is een marathon, geen sprint.</p>
    `
  }
};

export default function BlogPostPage() {
  const { openPopup } = usePopup();
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-8">Dit artikel bestaat niet.</p>
          <Link href="/blog" className="text-blue-900 font-semibold hover:underline">
            ← Terug naar blog
          </Link>
        </div>
      </div>
    );
  }

  const blogData = getBlogPost(slug);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Article Schema for SEO */}
      {blogData && (
        <ArticleSchema
          title={post.title}
          description={blogData.excerpt}
          image={post.image}
          datePublished={post.date}
          slug={slug}
          category={post.category}
        />
      )}

      {/* Hero with blog image */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${post.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block text-sm font-semibold bg-blue-900 px-3 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-gray-300">{post.date}</p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-gray-600 prose-ul:mb-4
                prose-li:mb-2
                prose-strong:text-gray-900
                [&_.lead]:text-xl [&_.lead]:text-gray-700 [&_.lead]:leading-relaxed [&_.lead]:mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA in article */}
          <div className="bg-white rounded-lg shadow-sm p-8 mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Zelf ervaren?</h3>
            <p className="text-gray-600 mb-6">
              Plan een gratis intake en ontdek wat CrossFit Alkmaar voor jou kan betekenen.
            </p>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Gratis intake
            </button>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link 
              href="/blog"
              className="text-blue-900 font-semibold hover:underline"
            >
              ← Terug naar alle artikelen
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}