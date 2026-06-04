// Blog post data - single source of truth for both listing and detail pages
export interface BlogPost {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: { [key: string]: BlogPost } = {
  "tienerprogramma-bij-crossfit-alkmaar": {
    title: "Tienerprogramma bij CrossFit Alkmaar",
    date: "2026-04-07",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Programma's",
    image: "/images/blog/blog-tieners.webp",
    excerpt: "Op 1 mei starten we met ons tienerprogramma bij CrossFit Alkmaar! Een vaste groep van twaalf jongeren tussen 14 en 17 jaar, twee keer per week trainen onder professionele begeleiding.",
    content: `
      <p>Op 1 mei starten we met ons tienerprogramma bij CrossFit Alkmaar! We starten met een vaste groep van twaalf jongeren tussen van 14 tot en met 17 jaar oud. Er wordt twee keer per week getraind op vaste tijden met vaste coaches.</p>

      <p>Met ons tienerprogramma bieden we een mooie tegenhanger voor de grote sportscholen waar tieners alleen betalen voor toegang en vervolgens zonder begeleiding kunnen trainen. Wij bieden onze tienergroep hetzelfde als we onze volwassen leden bieden: professionele coaching waardoor je heel blijft en vooruit gaat.</p>

      <p>Ook al blijven deze jongeren niet voor altijd bij CrossFit Alkmaar (dat hoop ik natuurlijk wel), dan hoop ik dat we ze een goede basis in kracht- en conditietraining mee kunnen geven waar ze de rest van hun sportieve leven wat aan hebben.</p>

      <h2>Is krachttraining wel veilig voor tieners?</h2>

      <p>Veel mensen denken dat krachttraining als puber gevaarlijk is. Net zoals veel mensen denken dat deadlifts gevaarlijk zijn voor je rug. In beiden schuilt een kleine kern van waarheid: ze kunnen inderdaad gevaarlijk zijn als je niet weet wat je aan het doen bent. Met goede begeleiding en techniek is krachttraining juist erg goed voor tieners. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3483033/" target="_blank" rel="noopener noreferrer">In dit onderzoek</a> lees je dat er een relatief laag blessurerisico is bij jongeren die krachttraining volgen onder gekwalificeerde begeleiding. De meeste blessures die wél voorkomen zijn het gevolg van ongelukken, verkeerde techniek of gebrek aan supervisie.</p>

      <p>Nog zo'n fabel is dat krachttraining de groei van pubers zou remmen. Dit zijn hardnekkige verhalen die hele volksstammen voor waar aannemen terwijl er <a href="https://pubmed.ncbi.nlm.nih.gov/17119361/" target="_blank" rel="noopener noreferrer">heel veel onderzoek</a> is dat juist de voordelen van krachttraining door tieners benoemt in plaats van deze fabels.</p>

      <h2>Meer dan alleen sterker worden</h2>

      <p>Ik kan natuurlijk doorgaan met allerlei onderzoek delen in deze blog, maar die kun je zelf ook wel overal vinden als je online zoekt. Naast een veilige manier en omgeving om een sterke basis te bouwen waar een tiener de rest van zijn/haar leven wat aan heeft, bieden we met ons tienerprogramma nog zoveel meer:</p>

      <h2>Een echt teamgevoel</h2>

      <p>Doordat we trainen in een vaste groep, ontstaat er al gauw een echt teamgevoel. Hoewel we individueel de oefeningen afwerken, steunen we elkaar wel tijdens de trainingen. We zijn pas klaar als iedereen klaar is en moedigen de laatste mensen net zo hard aan als degenen die als eerste klaar waren. Zo bouwen we aan respect voor elk niveau en aan het inzicht dat iedereen ergens goed in is.</p>

      <h2>Snel resultaat en zelfvertrouwen</h2>

      <p>Als je regelmatig traint, verandert er al gauw iets in je lijf: je valt wat af en je spieren worden wat zichtbaarder. In een tienerlichaam gaat dit nog veel sneller. Het lijf reageert op alle prikkels die het krijgt, veel sneller dan bij een volwassen lijf. Hierdoor raak je gemotiveerd en leer je dat inzet loont. Daarnaast geeft het een hoop zelfvertrouwen: tevreden zijn met je eigen lijf is iets dat ik elke puber gun in de periode van hun leven waarin er een hoop onzekerheid kan zijn.</p>

      <h2>Bewuster van een gezonde leefstijl</h2>

      <p>Ook kan het trainen pubers wat bewuster maken van een gezonde leefstijl. Doordat je je zo goed voelt doordat je regelmatig traint, ontstaat al gauw de interesse in zaken die je vooruitgang nog meer kunnen steunen. Natuurlijk horen pubers ook af en toe (te) veel te snoepen of snacken, maar wat zou het mooi zijn als ze zich hier op jonge leeftijd al wat bewuster van worden en er bewust mee om kunnen gaan.</p>

      <h2>Zin in!</h2>

      <p>Ik hoop dat we bij CrossFit Alkmaar veel tieners de lol en het gevoel dat kracht- en conditietraining geeft kunnen laten ervaren. Ik begon zelf op m'n 15e met krachttraining en dat heeft me altijd veel zelfvertrouwen gebracht. Ik trainde samen met een vriend en we motiveerden elkaar om te blijven gaan. Soms trainden we te hard en te veel, maar dat ging gelukkig altijd wel goed. Met de kennis en ervaring die we door de jaren heen hebben opgebouwd bij CrossFit Alkmaar, weet ik zeker dat we hier een mega fitte en zelfverzekerde tienergroep gaan bouwen. Zin in!</p>

      <p><a href="/tieners">Lees hier meer over ons tienerprogramma</a> of plan direct een gratis kennismaking.</p>
    `,
  },
  "hoe-je-ook-tussen-je-oren-sterker-wordt-van-trainen": {
    title: "Hoe je ook tussen je oren sterker wordt van trainen bij een goede sportschool",
    date: "2026-04-06",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/blog-mentaal-sterker.jpg",
    excerpt: "Bij trainen denk je al snel aan een sterker lijf. Maar wat doet het met je hoofd? Over omgaan met ongemak, je ego parkeren en even helemaal in het moment zijn.",
    content: `
      <p>Als je denkt aan mentaal sterker of beter worden door CrossFit of trainen in het algemeen, denk je al gauw aan doorzetten en afzien. Want ja, ook dat gebeurt in CrossFit. Je leert zeker omgaan met discomfort in de vorm van een hoge hartslag, longen die de vraag naar zuurstof van je lijf niet bij kunnen houden en verzuurde spieren.</p>

      <p>En daar word je ook echt wel steeds beter in als je langer traint. Dat komt denk ik vooral doordat je steeds beter weet wat er komen gaat en hoe het gaat voelen. Dus misschien is dat wel meer specifiek wennen aan die situatie die elke keer terugkomt. Ik durf zelfs te zeggen dat die situatie op een gegeven moment een soort comfortzone wordt omdat je hem zo vaak opzoekt.</p>

      <h2>Leer uitdagingen niet uit de weg te gaan</h2>

      <p>Waar je denk ik écht mentaal sterker van wordt, is het omgaan met dingen waar je (nog) niet goed in bent. Omdat je ze nog nooit hebt gedaan of gewoon omdat ze je niet liggen. En dan staat er iemand naast je die het met twee keer zoveel gewicht als jij doet. Je zou die situaties lekker uit de weg kunnen gaan, maar dan ben je een dief van je eigen vooruitgang.</p>

      <p>Zodra je jezelf over die drempel tilt om ook op de dagen te komen die jou minder liggen (misschien wel een paar trainingen achter elkaar), leer je jezelf aan om uitdagingen niet uit de weg te gaan. En als je met goede coaches traint, leer je ook dat je beloond wordt voor je inzet. Je ziet jezelf langzaam vooruit gaan doordat je de uitdaging bent aangegaan in plaats van ervoor weg te lopen. En dat er naast je iemand staat die het doet alsof het niks voorstelt, dat is dan dus ook prima. Zo leer je denk ik dat je aan elke uitdaging moet beginnen en met kleine stapjes altijd dichter bij je doel komt.</p>

      <h2>Parkeer je ego bij de deur</h2>

      <p>Wat nog een punt is waarmee je eelt tussen je oren kweekt, is dat je nooit altijd de beste kunt zijn tijdens alle trainingen. In de beginjaren van CrossFit Alkmaar waren Joost en ik altijd met afstand de fitste twee mannen van de gym. Logisch, we waren ook de enige twee die al jaren aan CrossFit deden en er de hele dag mee bezig waren.</p>

      <p>Toen na een paar jaar de eerste leden af en toe sneller of sterker waren tijdens trainingen, heb ik er wel even tijd voor nodig gehad om dat een plekje te geven. Zeker met een mentaliteit van altijd maar overal de beste in willen zijn, voelde dat toch wel een beetje als 'verliezen'.</p>

      <p>Inmiddels ben ik zeker niet meer de fitste bij CrossFit Alkmaar, maar ben ik er juist super trots op dat mensen zo superfit bij CrossFit Alkmaar worden. Ik kan ook gewoon nog steeds trots zijn op mijn eigen prestaties, ook al zijn er zat mensen die sneller, sterker en fitter zijn. Want er gaat altijd wel iemand 'beter' zijn dan jij bent, en dat is ook prima. Ik denk dat je hierdoor goed leert relativeren en je eigen ego opzij te zetten.</p>

      <h2>Even helemaal in het moment</h2>

      <p>Nog een belangrijk mentaal aspect van trainen en CrossFit in het bijzonder: je bent in het moment. Waar we allemaal de hele dag worden afgeleid door onze telefoon, agenda's en andere druktes, sta je tijdens een zware lift of stevige workout even helemaal in het moment met jezelf. Je focust op de 'taak' die voor je ligt en geeft alles wat je hebt, er is gewoon geen ruimte voor enige andere afleiding.</p>

      <p>Zelf vind ik het ook lastig om mezelf even 'uit' te zetten. Met een gezin en een eigen zaak zijn er altijd een miljoen dingen die door m'n hoofd gaan en die ik nog moet doen. Tijdens een uurtje trainen ben ik daar even niet mee bezig. Mijn telefoon zit ook niet in m'n zak, ik ben gewoon lekker aan het sporten. Zo ben ik daarna weer scherp voor die miljoen dingen die nog op m'n bordje liggen.</p>

      <h2>Meer dan alleen een goed lijf</h2>

      <p>Dat CrossFit mij en onze leden veel meer brengt dan alleen een goed lijf, daar ben ik me al heel lang van bewust. Zo heb ik hierboven de verbinding met andere leden doordat je samen afziet en het vergoten van je zelfvertrouwen nog geen eens benoemd. Want ook dat gebeurt er als je jezelf een keer of drie per week uitdaagt in een veilige omgeving. En laten we die omgeving nu net hebben gecreëerd bij CrossFit Alkmaar!</p>

      <p>Wil je ook werken aan een sterker en fitter lijf en hoofd, kom gewoon (weer) langs. De koffie staat hier altijd klaar.</p>
    `,
  },
  "wat-we-nu-anders-doen-dan-tien-jaar-geleden": {
    title: "Wat we nu anders doen dan tien jaar geleden bij CrossFit Alkmaar",
    date: "2026-03-30",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/blog-tien-jaar-anders.jpg",
    excerpt: "Na dik twaalf jaar CrossFit Alkmaar is het leuk om eens terug te kijken naar wat er zoal veranderd is. Van een halve zaal zonder toiletten tot een volledig pand vol professionals.",
    content: `
      <p>Na dik twaalf jaar CrossFit Alkmaar is het leuk om eens terug te kijken naar wat er zoal veranderd is of hetzelfde is gebleven door de jaren heen.</p>

      <h2>1. Onze locatie</h2>

      <p>Toen we ons huidige pand betrokken, huurden we alleen de achterste zaal. Er waren nog geen toiletten, kleedkamers, bar, zithoek of douches. Die hebben we (met een hoop hulp) allemaal zelf gebouwd.</p>

      <p>De helft van het pand werd door de eigenaar gebruikt om zijn collectie oude legervoertuigen te stallen en onderhouden (dat was echt ideaal als zo'n oude dieselmotor daar even werd gestart) en een ander klein deel werd gehuurd door een barista. Zo hadden we dus altijd hele goede koffie bij CrossFit Alkmaar!</p>

      <p>Door de jaren heen hebben we stukje bij beetje het hele pand overgenomen. Zodra we weer wat waren gegroeid en het budget het toeliet, huurden we er weer een paar vierkante meter extra bij. Ons 'kantoor' zat boven in wat nu de dames kleedkamer is. Er was daar geen verwarming, dus in de winter zaten we daar met onze jas aan achter een steenkoud bureau te werken.</p>

      <p>Nu gebruiken we het hele pand. We hebben het inmiddels gekocht en hebben zo de zekerheid dat CrossFit Alkmaar op deze plek kan blijven bestaan. We hebben meerdere zalen waarin onze leden nog steeds meer dan genoeg ruimte hebben om veilig te trainen met alle materialen die we gebruiken. We hebben helaas geen barista meer maar de koffie bij CrossFit Alkmaar is nog steeds erg goed!</p>

      <h2>2. Ons materiaal</h2>

      <p>Toen we begonnen, hadden we twee roeiers, vier stangen, een paar kettlebells en wat springtouwen. We hadden ook een optrekrek met vier plekken. Zodra we dat rek hadden geplaatst kwamen we erachter dat er eigenlijk maar twee man tegelijk echt in konden hangen zonder last van elkaar te hebben.</p>

      <p>Er werd een hoop materiaal gedeeld en we maakten het gewoon werkbaar. Inmiddels hebben we een veelvoud van wat we toen hadden: de roeiers hebben zich vermenigvuldigd tot twaalf stuks, we hebben meer dan dertig stangen, en gewoon van alles echt heel veel. We onderhouden al ons materiaal goed. Onze held Maarten heeft er een dagtaak aan om te zorgen dat alles altijd goed werkt en blijft werken.</p>

      <p>Tijdens corona hebben we ingevoerd dat elk lid zijn of haar materialen even afneemt met een schone doek en wat alcohol. Dat was toen een logisch iets met alles wat er speelde. We zijn hier na alle lockdowns nooit meer mee gestopt.</p>

      <p>Als ik nu terugkijk, was het eigenlijk best wel raar dat we dat nog niet deden. We maakten al ons materiaal twee keer per week schoon en vonden dat al heel goed. Nu besef ik me dat op een drukke dag het materiaal door soms meer dan tien (bezwete) mensen wordt gebruikt… We blijven het maar lekker schoonmaken na elke les.</p>

      <h2>3. Team CFA</h2>

      <p>In het begin deden we alles met z'n tweeën: lesgeven, klussen, administratie, marketing, ledencontact, schoonmaken en alles wat er bij het runnen van een gym komt kijken. Door de jaren heen breidde het team steeds meer uit.</p>

      <p>Eerst kwamen er wat coaches bij die na het halen van hun CrossFit Level 1 gelijk konden starten, we waren maar wat blij dat we zelf eindelijk een avond of weekenddag thuis konden zijn! Natuurlijk vooral veel parttimers en na een paar jaar startte voor het eerst een fulltimer bij CrossFit Alkmaar.</p>

      <p>Waar we vroeger vooral keken naar hoe fit en goed in CrossFit een coach zelf was, kijken we nu vooral eerst naar de persoon. Is dit een leuk iemand die ervoor kan zorgen dat onze leden zich gezien voelen en die ervoor kan zorgen dat iedereen met een goed gevoel de box weer uitloopt? Dat is iets dat moeilijker aan te leren is dan alle technische bewegingen coachen en aanleren.</p>

      <p>Inmiddels hebben we meer fulltimers dan parttimers bij CrossFit Alkmaar: professionals die vanuit passie dus echt de hele week bezig zijn met het fitter maken van onze leden. Niks ten nadele van onze parttime coaches natuurlijk: iedereen heeft onze eigen CFA Coach Course doorlopen en daarna stage gelopen totdat we van beide kanten vonden dat het niveau goed genoeg was om door te gaan.</p>

      <p>Ik merk dat ik nog wel even door kan gaan met deze vergelijking van toen en nu. Volgende week ga ik ermee verder. Ideaal, want ik vind het soms lastig waar ik nu weer wat over kan schrijven…</p>

      <p>Wil je (weer) een keertje langskomen om te checken hoe het er nu allemaal aan toe gaat bij CrossFit Alkmaar? Boek een <a href="/free-intro" class="text-blue-600 hover:underline">gratis kennismaking</a>, we laten je graag alles zien!</p>
    `,
  },
  "hyrox-bij-crossfit-alkmaar": {
    title: "HYROX bij CrossFit Alkmaar!",
    date: "2026-03-16",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Nieuws",
    image: "/images/blog/Blog hyrox.jpg",
    excerpt: "Na jaren de HYROX-hype in de gaten te hebben gehouden, omarmen we deze variant van CrossFit nu met beide armen. CrossFit Alkmaar is officieel HYROX gym!",
    content: `
      <p>Bij CrossFit Alkmaar waaien we niet zomaar met alle fitness hypes mee. Als we dat deden, konden we elk jaar onze sportschool weer opnieuw opbouwen en rebranden.</p>

      <p>Wij geloven nog steeds dat een stevige mix van kracht- en conditietraining precies is wat iedereen nodig heeft. Natuurlijk aangepast aan het niveau, de ervaring en eventuele beperkingen van de deelnemers. We hebben hier door de jaren heen al honderden Alkmaarders mee geholpen en we hebben er een bak ervaring in.</p>

      <h2>Van CrossFit 'hype' naar blijvertje</h2>

      <p>Toen we twaalf jaar geleden begonnen met CrossFit Alkmaar, dachten veel mensen dat CrossFit een hype zou blijken te zijn. Inmiddels blijkt dat niet zo te zijn: er zijn 300 boxen in Nederland en mensen ontdekken nog steeds het plezier en het nut van sporten met CrossFit.</p>

      <h2>HYROX: meer dan een hype</h2>

      <p>Een 'hype' die we al een paar jaar volgen is die van HYROX. Mijn eerste reactie was dat HYROX vooral een aftreksel was van CrossFit, alleen dan zonder de technische bewegingen en met (veel) meer hardlopen. Dat vond ik als CrossFitter zonde, maar toch hoorde ik steeds meer leden en andere mensen om me heen zeggen dat ze een HYROX hadden gedaan of van plan waren te doen.</p>

      <p>Inmiddels heb ik zelf ook een HYROX gedaan en snap ik de populariteit. Het is natuurlijk ook wel eens lekker om gewoon even te rammen zonder allemaal zeer technische bewegingen. Daarnaast had ik na de finish gelijk al ideeën over hoe ik de volgende keer sneller zou kunnen zijn!</p>

      <h2>CrossFit Alkmaar wordt officiële HYROX gym</h2>

      <p>HYROX is dan ook een mooie aanvulling op ons huidige aanbod. Onze Oxygen lessen zijn al erg populair. In deze lessen doen we al wat langere workouts zonder halterstangen of technische bewegingen. Daarom zijn we inmiddels een officiële HYROX gym geworden, hebben we de eerste materialen aangeschaft en uitgebreid. Nu is het alleen nog even wachten op de sprinttrack die geïnstalleerd gaat worden begin mei en dan kan ons HYROX-aanbod van start!</p>

      <h2>HYROX Simulatie op 22 augustus</h2>

      <p>Op zaterdag 22 augustus organiseren we onze eerste HYROX Simulatie! Bereid je voor op race day of doe voor het eerst een echte HYROX. Een volledige simulatie van de race zoals je die kent: 1 kilometer runs afgewisseld met 8 functionele workouts. Geschikt voor beginners én ervaren HYROX-atleten. <a href="/hyrox-simulatie-alkmaar" class="text-blue-600 hover:underline">Bekijk alle info en schrijf je in</a>!</p>

      <p>Dus, na deze 'hype' een tijd in de gaten te hebben gehouden, omarmen we deze variant van CrossFit nu met beide armen! Houd onze kanalen in de gaten voor het HYROX-rooster dat vanaf mei opengaat.</p>
    `,
  },
  "had-je-een-steentje-in-je-schoen": {
    title: "Had je een steentje in je schoen?",
    date: "2026-03-23",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/Blog hardlopen.jpg",
    excerpt: "Over hardlopen, zone 2 training en waarom het soms slimmer is om af te remmen. Ook als coach blijft dat een uitdaging.",
    content: `
      <p>Hoewel ik natuurlijk verslingerd ben aan CrossFit en alles wat daarbij hoort, doe ik soms ook nog wat andere sporten ernaast. Zo heb ik een tijd geleden judo weer opgepakt. Helaas lukt dat me minder vaak dan ik zou willen doordat 'mijn' groep maar één keer per week traint en dat net op een tijdstip is dat ik vaak niet kan. Als ik dan één of twee keer mis, heb ik zomaar alweer een paar weken niet getraind daar.</p>

      <p>Dat is natuurlijk anders met hardlopen: ik trek m'n hardloopschoenen aan en begin bij de voordeur. Ideaal en lekker efficiënt natuurlijk. Door de jaren heen heb ik altijd een haat/liefde verhouding met hardlopen gehad. Bij de mariniers werd er altijd veel hardgelopen, dus dat hield ik toen ook zelf goed bij. Na m'n diensttijd deed ik toch altijd vooral veel CrossFit en gewichtheffen maar af en toe voelde ik ineens weer het vuurtje en begon ik ook weer met hardlopen.</p>

      <p>Gisteren liep ik een langzame tien kilometer in zone 2, dat is op een lage intensiteit waarbij je nog makkelijk kunt praten. Ik gebruik hier een hartslagmeter voor om te zorgen dat ik niet boven die zone uitkom. Ik kan dat horloge instellen zodat hij trilt als mijn hartslag boven de 125 komt. Ideaal, want ik heb nogal de neiging om vooral erg hard te gaan….</p>

      <p>Doordat m'n horloge is gekoppeld aan Strava worden al m'n loopjes daar ook gelijk gepost zodat al mijn bekenden en vrienden ze ook kunnen zien. Toen mijn langzame loop van gisteren erop werd gepost, stroomde mijn inbox gelijk vol met berichten van vrienden die zeiden: 'had je een steentje in je schoen?' of 'heb je het alleen op je rechterbeen gedaan?' en 'heb je achteruit gelopen?'. Allemaal natuurlijk met een knipoog en ik doe zelf ook graag mee aan dit soort opmerkingen zodra ik de kans krijg.</p>

      <img src="/images/blog/strava-reactie.jpg" alt="Strava reactie op langzame loop: Wat is er gebeurd? Zat je achter een vrachtwagen?" style="max-width:400px;margin:2rem auto;display:block;border-radius:0.5rem" />

      <p>Altijd maar hard, harder en hardst. Dat zal er altijd wel in blijven zitten bij mij en veel andere mensen. Toch leer je door de jaren heen ook steeds beter dat je af en toe best naar je lijf kan (moet) luisteren. Als je al veel getraind hebt, moe bent of gewoon even wat minder lekker in je vel zit bijvoorbeeld. Vroeger ramde ik altijd maar door, ongeacht hoe ik me voelde. En dat kan ook best lang goed gaan eigenlijk.</p>

      <p>Maar zodra je de veertig passeert, ontkom je er niet aan dat dat op een gegeven moment toch niet meer lukt. Ik heb het zelf geleerd door meerdere blessures die ik achteraf prima kan verklaren. Waar we bij CrossFit Alkmaar de hele dag bezig zijn om onze leden te pushen maar ook zeker af te remmen als dat nodig is, blijft dat bij mezelf toch altijd een grote uitdaging. Niet het pushen, maar het afremmen. Ik word er steeds beter in, maar het blijft een uitdaging.</p>

      <p>Ik hoor mezelf vaak tegen leden zeggen dat ze vandaag beter even niet maximaal kunnen gaan of wat minder gewicht kunnen pakken. Dat is waar we hier goed in zijn, we houden onze leden heel terwijl we ze wel op hoge intensiteit laten trainen. Misschien zijn we er juist wel zo goed in doordat we zelf al vaak in de valkuil zijn gestapt van altijd maar harder en meer, ook als het even niet zo slim was.</p>

      <p>Ik kan het allemaal prima uitleggen aan onze leden hoor, terwijl ik zelf ook nog die valkuil in stap af en toe. Dat gaat er waarschijnlijk nooit helemaal uit en ik denk dat het ons ook goede coaches maakt. Laat ons lekker alle fouten maken zodat we jou kunnen vertellen waarom je het niet moet doen!</p>

      <p>Morgen maar weer even een snelle loop posten op Strava, dat zal die gasten leren!</p>
    `,
  },
  "twaalf-jaar-crossfit-alkmaar": {
    title: "Twaalf jaar CrossFit Alkmaar en nog steeds dit beeld",
    date: "2026-03-16",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/Blog Bij CrossFit Alkmaar doen we al twaalf jaar vooral CrossFit..jpg",
    excerpt: "Al twaalf jaar zijn we bij CrossFit Alkmaar aan het opboksen tegen het beeld dat veel mensen van CrossFit hebben. Maar CrossFit is voor iedereen.",
    content: `
      <p>Bij CrossFit Alkmaar doen we al twaalf jaar vooral CrossFit. En zijn we al net zo lang aan het opboksen tegen het beeld dat veel mensen van CrossFit hebben.</p>

      <p>We worden best wel eens benaderd door mensen die het spannend vinden om op intake te komen. Sommige mensen vragen zelfs om een trainingsschema dat ze kunnen volgen voordat ze bij ons starten….</p>

      <p>Dat vind ik altijd zo jammer, bij CrossFit Alkmaar maken we je juist fit voor het leven. Je komt niet bij ons om te laten zien hoe fit je bent. Als mensen eenmaal bij ons binnen zijn, kunnen we ze altijd goed laten zien dat er hier toch vooral 'normale' mensen sporten. Mensen die drie keer per week aan hun kracht en conditie komen werken.</p>

      <p>Voor veel mensen heeft CrossFit nog steeds een rauwe 'hardcore' uitstraling (Burgemeester Anja Schouten benoemde dit ook al eens toen ze bij ons langskwam, <a href="/blog/een-hardcore-sportschool">lees het hier</a>). Ze denken dat het alleen geschikt voor superfitte mensen die het liefste zonder shirt zware gewichten boven hun hoofd tillen en op hun handen lopen. En dan natuurlijk het liefst met superharde heavy metal muziek op de achtergrond.</p>

      <p>In de eerste jaren van CrossFit Alkmaar hebben we zelf ook wel een beetje bijgedragen aan dit beeld. Ik vond het zelf ook stoer als mijn handen helemaal stuk waren van honderd pull ups en ja, er stond eigenlijk standaard Metallica aan als we aan het trainen waren. Nu, twaalf jaar verder, is CrossFit voor mij zoveel meer geworden dan die rauwe sport waarin het niet zwaar en hard genoeg kan gaan.</p>

      <p>Want CrossFit (Alkmaar) is voor mij nu vooral dé methode om iedereen fit te krijgen. En eigenlijk ook vooral die groep mensen die nog nooit (veel) heeft gesport en het al een drempel vindt om een sportschool (laat staan een CrossFit box) binnen te stappen. Ik ben altijd blij als iemand de stap neemt om een intake te boeken en bij ons langs te komen zodat we rustig kunnen laten zien wat we hier doen en waarom dat wél werkt voor de meeste mensen.</p>

      <p>Iemand helemaal stuk maken met een zware workout, daar is niks moeilijks aan. Wat wél echt een vak is, is het maken van een programma waar mensen sterker en fitter van worden. Om vervolgens dat programma ook per persoon passend te maken, is de volgende skill die een goede trainer onderscheidt van de rest.</p>

      <p>En laten we daar nu net best wel goed in zijn bij CrossFit Alkmaar. Hier loop je altijd voldaan naar buiten. Of je nu die beginner bent die het spannend vond om die eerste stap te zetten of die atleet die de sport wat serieuzer neemt en op z'n handen naar buiten loopt.</p>

      <p>Onze <a href="/kickstart">28 day kickstart</a> is juist geschreven voor jou als je het lastig vindt om te starten en niet zo goed weet wat je moet doen. Heb je al wat meer ervaring met trainen? Ook dan ligt er een mooi pad voor je start bij CrossFit Alkmaar voor je uitgestippeld. Iedereen start met die gratis intake, <a href="/free-intro">boek hem hier</a>.</p>
    `,
  },
  "waarom-crossfit-alkmaar-niet-zomaar-een-sportschool-is": {
    title: "Waarom CrossFit Alkmaar niet zomaar een sportschool is",
    date: "2026-03-09",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog waarom CFA anders is.jpg",
    excerpt: "Waarom CrossFit Alkmaar zo'n gevestigde naam is dat zelfs collega's hem gebruiken.",
    content: `
      <p>Dit weekend kwam ik erachter dat een collega in Alkmaar onze bedrijfsnaam gebruikt in zijn advertenties. In plaats van zijn eigen naam staat er heel groot 'CrossFit Alkmaar, dé plek voor CrossFit in Alkmaar' met daaronder natuurlijk een link naar zijn sportschool. Die tekst is niks aan gelogen, wij zijn inderdaad al meer dan twaalf jaar dé plek in Alkmaar als je wilt trainen onder begeleiding van gemotiveerde en professionele coaches.</p>

      <p>Tot een paar jaar geleden kon ik me hier heel druk over maken, tegenwoordig zie ik het maar vooral als een compliment. We hebben hier een plek gebouwd waar mensen jarenlang lid zijn, meer dan duizend lessen meedoen en waar we al duizenden mensen het plezier in trainen hebben laten ontdekken. Logisch dat collega's graag meeliften op die naam natuurlijk.</p>

      <p>Er zijn in Nederland inmiddels zo rond de 200 CrossFit boxen en alle eigenaren krijgen de vrijheid om hun aanbod en werkwijze in te vullen zoals zij dat willen. Een mooi concept: zo heeft elke CrossFit sportschool haar eigen specialiteiten en focus. Zo kan de ene gym meer focussen op wat meer gewichten tillen, de ander vooral op fanatieke wedstrijdatleten en weer een ander juist op beginnende sporters.</p>

      <p>Wij roepen bij CrossFit Alkmaar al meer dan twaalf jaar dat we voor 'kwaliteit boven kwantiteit' gaan, we hebben een professioneel aanbod voor zowel de beginnende sporter als de meer ervaren atleet. Door de jaren heen hebben we ons aanbod en onze werkwijze natuurlijk steeds verder aangepast, altijd met deze visie voor ogen. Ondertussen hebben we hier een mooi concept staan, waar we volledig achter staan:</p>

      <h2>Geen massale groepen</h2>

      <p>Met onze negenhonderd vierkante meter zijn we één van de grotere CrossFit locaties in Noord-Holland. We hebben grote ruimtes, maar geen grote groepen. In onze groepslessen is plek voor maximaal twaalf deelnemers per grote zaal. Zo hebben onze coaches genoeg aandacht voor elk lid, heeft iedereen genoeg ruimte om veilig te bewegen en voel je je niet verloren in een groep van twintig deelnemers. Onze small groups zijn ook echt small groups: in een vaste groep van zes deelnemers heb je een ervaring die neigt naar personal training.</p>

      <h2>We kennen je naam</h2>

      <p>Sporten bij CrossFit Alkmaar is niet anoniem. Iedereen start met een gratis kennismakingsgesprek waarin we bespreken wie je bent, waar je tegenaan loopt en wat je al hebt geprobeerd. Hierdoor kennen al onze coaches je naam, we weten het als je een blessure hebt of als er even iets wat minder goed gaat. Zo heeft je coach vaak al een aanpassing voor je klaar nog voordat je erom gevraagd hebt.</p>

      <h2>We willen dat je komt!</h2>

      <p>We moedigen onze leden aan om drie keer per week te sporten. Dat moet niet, maar in onze ogen is dat wat er nodig is om goed te werken aan een sterker en fitter lijf. Zien we dat je al even niet geweest bent? Dan nemen we contact met je op om te vragen hoe het met je is en hoe we je weer aan de slag kunnen krijgen. Dat kunnen we heel makkelijk doen met automatische mailtjes, maar dat is niet hoe we werken. Je coach neemt persoonlijk contact met je op.</p>

      <h2>We spreken je graag</h2>

      <p>Elk lid van CrossFit Alkmaar heeft elke drie maanden recht op een '90 day check in' met één van onze coaches. Hier houden we vinger aan de pols, vieren we samen je successen en kijken we vooruit naar wat er nog beter kan.</p>

      <h2>Professionele coaches</h2>

      <p>Al onze coaches hebben onze eigen CFA coach course doorlopen en daarna stage gelopen voordat ze alleen voor onze leden komen te staan. We hebben vooral fulltime coaches, die de hele week bezig zijn om onze leden fitter te maken. Een coach bij CrossFit Alkmaar geeft nooit meer dan drie lessen achter elkaar. Zo garanderen wij dat er altijd een frisse, gemotiveerde coach voor de les staat. Wekelijkse coach meetings, maandelijkse coach evaluaties en gezamenlijke en individuele cursussen zorgen dat ons team altijd kwaliteit levert.</p>

      <h2>Passie voor wat we doen</h2>

      <p>Geen branche is zo trendgevoelig als de sportbranche: er is altijd wel weer een nieuwe hype of magic pill waar iedereen achteraan rent. Wij geloven heilig in wat we bij CrossFit Alkmaar doen: een stevige mix van kracht- en conditietraining. Dit werkt, voor iedereen. Natuurlijk introduceren we soms nieuw materiaal of nieuwe bewegingen, maar onze basis blijft hetzelfde: onder begeleiding van professionele coaches werken aan kracht en conditie. Al onze coaches en eigenaren trainen zelf ook nog steeds op deze manier en je ziet ze dan ook vaak deelnemen aan de lessen.</p>

      <p>Eigenlijk doen we al twaalf jaar hetzelfde hier: onze leden staan voorop. Dat is altijd al zo geweest, en zo gaat het altijd blijven. Dat voelt goed voor ons én onze leden, en zo gaan we de komende twaalf jaar ook nog verder. Ik zou het ook niet anders kunnen.</p>

      <p>Benieuwd hoe dat dan in de praktijk voelt? Boek gewoon even dat gratis kennismakingsgesprek via <a href="/free-intro">deze link</a>, dan zet ik de koffie hier voor je klaar. Tot snel!</p>
    `,
  },
  "bart-bij-scherpschutters-podcast": {
    title: "Bart bij Scherpschutters podcast",
    date: "2026-03-02",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Persoonlijk",
    image: "/images/blog/Blog scherpschutters.jpg",
    excerpt: "Benieuwd naar één van de gezichten achter CrossFit Alkmaar? Bart vertelt zijn verhaal bij de podcast Scherpschutters.",
    content: `
      <p>Bart en Joost, de eigenaren van CrossFit Alkmaar zijn zelf niet zo vaak te zien op onze social media. Logisch, CrossFit Alkmaar draait natuurlijk vooral om onze leden en de mooie dingen die zij bij ons bereiken.</p>

      <p>Hun achtergrond bij het Korps mariniers, waarvan een groot aantal jaren bij haar special forces, heeft de manier waarop zij CrossFit Alkmaar hebben neergezet voor een groot deel beïnvloed: professioneel, hard werken maar ook hard ontspannen en altijd alles netjes op z'n plek.</p>

      <p>Bart werd een tijd geleden uitgenodigd bij de podcast Scherpschutters om zijn verhaal te vertellen. Benieuwd naar één van de gezichten achter CrossFit Alkmaar? Check it out!</p>

      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin-top:1rem">
        <iframe src="https://www.youtube.com/embed/06F4yorf3co" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none" title="Bart bij Scherpschutters podcast" allowfullscreen></iframe>
      </div>
    `,
  },
  "ben-jij-fit-genoeg-voor-crossfit-alkmaar": {
    title: "Ben jij fit genoeg voor CrossFit Alkmaar?",
    date: "2026-02-23",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog fit genoeg.jpg",
    excerpt: "Denk je dat je eerst fit moet zijn om bij ons te starten? Onzin. Bij CrossFit Alkmaar is er maar één eis.",
    content: `
      <p>Afgelopen week kregen we een telefoontje van iemand die ons al een tijdje volgt op social media. Ze vond het er allemaal leuk uitzien, wilde een paar kilo afvallen en zich gewoon weer fit in haar vel voelen. Ze zag ook de meerwaarde van trainen met een coach. Ideaal, met al die doelen kunnen wij haar prima helpen!</p>

      <p>En toen kwam die vraag waarvan ik het altijd zo jammer vind als die gesteld wordt: 'hebben jullie een schema voor me zodat ik me een paar weken kan voorbereiden voordat ik bij jullie kom sporten?'.</p>

      <p>Deze dame denkt dus dat er een bepaald ingangsniveau is om aan CrossFit te doen bij ons. Super jammer dat die denkbeeldige drempel voor veel mensen bestaat. Maar ik begrijp het ergens ook wel: als je CrossFit even intypt op Google of YouTube, zie je de meest gespierde dames en heren trainen met immens zware gewichten en de meest ingewikkelde oefeningen. Vaak met snoeiharde heavy metal op de achtergrond, een behoorlijke 'hardcore' uitstraling dus. Ik schreef al eens een andere blog over 'hardcore sportscholen', die lees je <a href="/blog/een-hardcore-sportschool">HIER</a>.</p>

      <p>En ja, ook dat is CrossFit. Maar wat nog veel meer CrossFit is (in mijn bescheiden mening dan), is iemand die nog nooit heeft gesport en onder begeleiding van goede coaches leert hoe je een gewicht van de vloer moet optillen. Of hoe je dat gewicht op een veilige en efficiënte manier boven je hoofd duwt. Hoe hard je moet beginnen aan een vierhonderd meter sprint, of wanneer het slimmer is om eerst maar eens met tweehonderd meter te beginnen.</p>

      <p>'Functionele bewegingen' dat is wat we hier vooral doen. Een hippe term in de fitnessindustrie die niks meer betekent dan dat we bewegingen doen die je ook in je dagelijkse leven maakt of die je daarbij helpen. Een gewicht van de vloer optillen, hoe vaak doe je dat wel niet op een dag? Of het nu je boodschappen, kinderen of de afstandsbediening van de tv zijn..... En die bewegingen kan iedereen dus doen. Sterker nog, ik denk dat iedereen die bewegingen zou MOETEN doen.</p>

      <p>Als ik op verjaardagen (weer) moet uitleggen wat dat CrossFit nu eigenlijk is, dan vertel ik altijd het volgende: 'We trainen kracht en conditie. De ene dag de één wat meer en de andere dag weer andersom. Dat doen we op ieders eigen niveau, daardoor kan echt iedereen meedoen. Hierdoor word je sterker, sneller en fitter, echt allround fit.'.</p>

      <p>Een behoorlijk beknopte omschrijving van wat CrossFit echt is, maar wel duidelijk. En ik heb hier al heel wat verjaardagen op kunnen oefenen, dit dekt de lading wel behoorlijk. Beter dan dat ik het ga hebben over alle energiesystemen, gewichtheffen, gymnastiek en periodisering....</p>

      <p>En toch krijg ik dan nog vaak te horen dat het niet echt wat voor diegene is. Onzin, denk ik dan altijd, dit is juist precies goed voor iedereen! Door de jaren heen hebben we hier al zoveel mensen zien veranderen. Mensen die lekkerder in hun vel zitten maar ook mensen die mentaal een stuk sterker worden, super gaaf om te zien wat regelmatig trainen met mensen kan doen.</p>

      <p>We hebben wel eens getwijfeld of we de naam 'CrossFit' nog wilden blijven voeren. Voor sommige mensen werpt dit toch een drempel op. Door die mooie YouTube filmpjes of misschien hebben ze een ervaring met een proefles gehad bij coaches die niet echt goed weten waar ze mee bezig zijn. Er zijn verhalen genoeg van mensen die tijdens een proefles 'CrossFit' gelijk even honderd pull ups moeten doen, of tweehonderd squats. Het resultaat? Een week spierpijn, en een heel verkeerd beeld van CrossFit. Zo zonde.</p>

      <p>Bij CrossFit Alkmaar hebben we één eis voor mensen die starten: kun je hier zelf naartoe komen? Perfect, dan kunnen onze coaches je begeleiden naar een fittere en sterkere versie dan je ooit voor mogelijk hebt gehouden. En ja, daar hoort wat spierpijn bij in het begin. Maar wel op normale niveaus.</p>

      <p>Twijfel jij of je wel fit genoeg bent om te starten met trainen? Boek <a href="/free-intro">HIER</a> een gesprek met mij of één van onze coaches, dan vertellen we je dat je meer dan fit genoeg bent ;)</p>
    `,
  },
  "een-hardcore-sportschool": {
    title: "Een 'hardcore' sportschool?",
    date: "2026-02-16",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog hardcore sportschool.jpg",
    excerpt: "De burgemeester noemde CrossFit Alkmaar 'een sportschool voor de hardcore sporters.' Maar klopt dat beeld eigenlijk wel?",
    content: `
      <p>Afgelopen donderdag was burgemeester Anja M.C.G. Schouten bij CrossFit Alkmaar voor een mooie bijeenkomst waarbij Maarten Lankhorst zijn Draaginsigne Gewonden kreeg uitgereikt. Een belangrijk moment voor Maarten en iedereen die dichtbij hem staat en we waren vereerd dat Maarten dit bij CrossFit Alkmaar wilde doen omdat dit een plek is waar hij zich veilig voelt.</p>

      <p>Maar daar gaat deze post even niet over. In haar toespraak vertelde de burgemeester dat CrossFit Alkmaar een mooie plek was: <em>'maar wel echt een sportschool voor de hardcore sporters.'</em></p>

      <p>Natuurlijk waren deze woorden erg aardig en goed bedoeld, maar het zette me toch aan het denken: Hoe kan het toch dat we met zijn allen een bepaald beeld hebben van hoe een 'sportschool' eruit hoort te zien: een grote zaal vol toestellen waar je individueel tussen rondloopt en dan een paar van die toestellen afwerkt.</p>

      <p>Vaak van een grote keten die het geen r##t interesseert of je er je fitnessdoelen haalt. Die rond de jaarwisseling met een groot marketingbudget allerlei kortingen rondstrooit om je een jaarcontract af te laten sluiten. Waar de ruimte niet eens is ingericht op het benodigde aantal klanten. Deze kunnen ze niet eens huisvesten, het model is immers ingericht op slapende klanten. Die wel betalen, maar niet komen. Lekker.</p>

      <p>Waarom heeft een sportschool als de onze voor veel mensen een 'hardcore' uitstraling? Een ruimte die niet helemaal volgepakt is, maar waar je juist veel ruimte hebt om te bewegen. Om spullen op te tillen, weg te gooien en allerlei grote bewegingen te doen met je hele lijf. Gewoon no-nonsens trainen, onder begeleiding van goede coaches.</p>

      <p>Wij hebben amper slapende leden, we nemen namelijk contact op als iemand twee weken niet geweest is.</p>

      <p>Oh ja, onze tarieven zijn ook nog een paar keer zo hoog als die van die grote ketens. Omdat wij er wél op zijn ingericht dat je komt en gebruik maakt van je lidmaatschap, dan word je namelijk mega fit en sterk. En dat is de reclame die wij maken, onze leden die fit en sterk voor het leven worden bij CrossFit Alkmaar.</p>

      <p>Als ik naar een volle les bij CrossFit Alkmaar sta te kijken, krijg ik helemaal geen 'hardcore' gevoel bij de mensen die ik daar zie staan. Ik zie gewone mensen die drie, misschien vier keer per week een uur komen trainen onder begeleiding van onze coaches. Omdat ze het hier wél volhouden en resultaten boeken.</p>

      <p>Lid worden bij CrossFit Alkmaar? Dat kan niet zomaar met een proeflesje of door online je abonnement uit te kiezen. We willen eerst weten wie je bent en wat je doelen zijn, daarom kom je eerst op intake om dit allemaal te bespreken. Zo kunnen we je op een veilige en effectieve manier helpen richting de fitnessdoelen die je wilt bereiken.</p>

      <p>Ondertussen worden we toch vergeleken met de grote fitnessketens. In mijn beleving bieden wij een heel ander product dan dat zij doen. Wij bieden coaching, zij bieden toegang. Twee heel verschillende dingen.</p>

      <p>Wat zou het toch mega mooi zijn als dit het beeld wordt dat we voor ons zien als we het woord 'sportschool' horen: een plek waar mensen graag vaak komen en waar ze wél hun resultaten halen.</p>
    `,
  },
  "wijze-lessen": {
    title: "Wijze lessen",
    date: "2026-02-09",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog wijze lessen.jpg",
    excerpt: "Over speeches, stoere foto's, trots zijn op jezelf en hoe CrossFit Alkmaar meer brengt dan alleen een fit lijf.",
    content: `
      <p>Afgelopen januari gaf ik een speech aan honderdzeventig(!) man op de viering van ons tienjarig jubileum van CrossFit Alkmaar. Die ging natuurlijk vooral over hoe Joost en ik die toko vanaf niks hebben opgebouwd. Vandaag gaf ik weer de presentatie die ik elke twee maanden geef bij Wij zijn BROER! aan de jongeren die daar in behandeling zitten.</p>

      <p>Die presentatie gaat over mijn jeugd waarin ik wel een tijdje 'van het padje' ben geweest, hoe ik daarna bijzondere dingen heb gedaan bij het Korps Mariniers en haar special forces en daarna ook over het starten en opbouwen van CrossFit Alkmaar.</p>

      <p>Met het verhaal dat ik bij Wij zijn BROER! vertel, probeer ik de jongeren te inspireren om zelf in actie te komen als ze iets willen veranderen, dat ze niet naar anderen moeten luisteren die zeggen dat iets onmogelijk is en dat het heerlijk is als je iets vindt waar je gewoon smerig goed in bent!</p>

      <p>Ik laat dan natuurlijk allemaal stoere foto's en films van bij de mariniers en CrossFit Alkmaar zien. En ook altijd een paar speldjes en onderscheidingen waar ik mega trots op ben. Als ik dan vraag of er iemand anders iets heeft waar hij/zij trots op is, gaan er altijd maar weinig handen de lucht in. Best heftig eigenlijk, ik hoop ze dan altijd te inspireren met mijn verhaal en vertel ze ook dat je gewoon mag zeggen dat je trots bent op iets waar je hard voor hebt gewerkt. Zoals voor mij mijn tijd bij de special forces en alle bijzondere dingen die ik daar gedaan heb en het opbouwen van CrossFit Alkmaar.</p>

      <p>De 'lessen' die ik de jeugd bij Wij zijn BROER! meegeef zijn hoop ik waardevol. Net zoals het werk dat we bij CrossFit Alkmaar doen. Bij CrossFit Alkmaar helpen we onze leden dus al tien jaar naar een sterkere en fittere versie van zichzelf. Ik ben altijd vooral bezig geweest met het fysieke aspect hiervan, maar weet sinds een aantal jaar ook hoeveel we op het mentale vlak voor mensen kunnen betekenen.</p>

      <p>Zo help ik nu iemand die ik drie keer per week ontmoet bij CrossFit Alkmaar. We doen vooral sporten, maar dit brengt hem veel meer dan alleen een fit lijf. Hij zat al een tijd thuis voor zich uit te staren, zonder doel. Met onze afspraken geef ik hem al een ritme en een reden om z'n nest uit te komen. Daarnaast weet ik zeker dat ik hem op zoveel andere manieren kan helpen, gebruik makend van mijn ervaringen in mijn werk en mijn leven. En daar ben ik dan weer trots op!</p>

      <p>Ben jij ook op zoek naar positieve verandering in je leven? Begin eens met drie keer per week te trainen, moet je eens opletten wat dat je nog meer brengt naast een fit lijf! Natuurlijk vind ik het mooi (en verstandig) als je dat bij ons komt doen, geef een gil als we je erbij kunnen helpen.</p>
    `,
  },
  "doe-je-het-zelf-of-schakel-je-een-professional-in": {
    title: "Doe je het zelf of schakel je een professional in?",
    date: "2026-02-02",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/Blog professional.jpg",
    excerpt: "Waarom huur je wél een schilder in voor je huis, maar geen coach voor je fitnessdoelen?",
    content: `
      <p>Stel je voor: je wilt je huis een frisse nieuwe look geven. De muren zijn grauw en je wilt een levendige kleur die je woning tot leven brengt. Je besluit de schilderkwast op te pakken en zelf aan de slag te gaan. Maar halverwege merk je dat het resultaat niet aan je verwachtingen voldoet: strepen, druipers en oneffenheden zijn overal zichtbaar. Wat doe je dan? Je belt een professionele schilder.</p>

      <p>Nog eentje: je badkamer moet worden gestukt. Het is een specialistische klus die precisie en vakmanschap vereist. Maar jij denkt: 'Hoe moeilijk kan het nou zijn?' Na enkele uren worstelen met pleister en troffel, realiseer je je dat het eindresultaat niet is wat je voor ogen had. Weer bel je een professional.</p>

      <p>Waarom kiezen we er zo vaak voor om professionals in te schakelen voor dit soort klussen, maar niet wanneer het aankomt op onze fitnessdoelen? Bij CrossFit Alkmaar zien we vaak mensen die zelf aan hun fitnessreis zijn begonnen, maar uiteindelijk vastlopen of teleurgesteld raken in hun resultaten. Hier zijn enkele redenen waarom het inhuren van een ervaren coach de sleutel kan zijn tot het bereiken van je fitnessdoelen:</p>

      <h2>Expertise en ervaring</h2>

      <p>Net zoals een schilder weet welke verf en technieken hij moet gebruiken voor een perfect resultaat, hebben professionele coaches een diepgaande kennis van trainingstechnieken, lichaamssamenstelling en blessurepreventie. Bij CrossFit Alkmaar beschikken onze coaches over jarenlange ervaring en expertise om je te begeleiden bij elke stap van je fitnessreis. Ze weten welke oefeningen het beste zijn voor jouw specifieke doelen en hoe je ze veilig en effectief kunt uitvoeren.</p>

      <h2>Persoonlijke aanpak</h2>

      <p>Een schilder kijkt naar jouw specifieke ruimte en wensen voordat hij begint met werken. Evenzo nemen onze coaches de tijd om je persoonlijke fitnessdoelen te begrijpen, evenals eventuele beperkingen die je hebt. Ze creëren een op maat gemaakt plan dat is afgestemd op jouw behoeften. Dit persoonlijke programma zorgt ervoor dat je sneller en efficiënter resultaten behaalt.</p>

      <h2>Motivatie en verantwoordelijkheid</h2>

      <p>Een van de grootste uitdagingen bij zelf sporten is het behouden van motivatie. Het is gemakkelijk om een workout over te slaan of minder hard te werken als er niemand is die je verantwoordelijk houdt. Onze coaches fungeren als je persoonlijke cheerleader en zorgen ervoor dat je gemotiveerd blijft en je doelen bereikt. Ze bieden de steun en aanmoediging die je nodig hebt om door te zetten, zelfs op de moeilijkste dagen.</p>

      <h2>Consistentie en routine</h2>

      <p>Het creëren van een consistente routine is essentieel voor het behalen van je fitnessdoelen. Zonder een coach is het makkelijk om van je schema af te wijken. Onze coaches helpen je een haalbare routine op te bouwen en deze vol te houden. Ze passen je programma aan naarmate je vordert, zodat je altijd op de juiste weg blijft.</p>

      <h2>Blessurepreventie en rehabilitatie</h2>

      <p>Fouten in techniek kunnen leiden tot blessures, wat je voortgang ernstig kan belemmeren. Onze professionele coaches zorgen ervoor dat je oefeningen correct uitvoert, waardoor het risico op blessures aanzienlijk wordt verminderd. Mocht je toch een blessure oplopen, dan kunnen ze je begeleiden bij het herstelproces en helpen je snel weer op de been te krijgen.</p>

      <h2>Resultaten en tevredenheid</h2>

      <p>Net zoals je een professionele schilder zou inhuren voor een perfect eindresultaat, zorgen onze coaches ervoor dat je de resultaten behaalt die je wilt. Ze hebben de kennis en ervaring om je te helpen je fitnessdoelen te bereiken, of het nu gaat om gewichtsverlies, spieropbouw of het verbeteren van je algehele fitheid.</p>

      <p>Bij CrossFit Alkmaar geloven we in de kracht van professionele begeleiding. Onze coaches hebben een berg aan ervaring en zijn toegewijd om je te helpen slagen in je fitnessreis. Waarom zou je je doelen riskeren door het alleen te doen, wanneer je kunt profiteren van de expertise en ondersteuning van een professional?</p>

      <p>Kies voor de zekerheid van succes en de gemoedsrust die komt met het inhuren van een ervaren coach. Begin vandaag nog aan je fitnessreis met CrossFit Alkmaar en zie het verschil dat professionele begeleiding kan maken. Boek nu <a href="/free-intro">HIER</a> een vrijblijvende en gratis intake en ontdek hoe wij je kunnen helpen je fitnessdoelen te bereiken!</p>
    `,
  },
  "waarom-mensen-duizend-trainingen-doen-bij-crossfit-alkmaar": {
    title: "Waarom mensen duizend trainingen doen bij CrossFit Alkmaar",
    date: "2026-01-26",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog duizend workouts.jpg",
    excerpt: "Van honderd naar tweeduizend workouts. Waarom blijven mensen zo lang lid bij CrossFit Alkmaar?",
    content: `
      <p>Bij CrossFit Alkmaar zijn we jaren geleden begonnen met het uitreiken van badges aan leden die al vijfhonderd trainingen bij ons hebben gedaan. Ik weet nog goed dat we de badges uitreikten aan de eerste groep leden die deze mijlpaal hadden gehaald. Ik denk dat het er toen een stuk of tien waren, we waren super trots dat er mensen zo lang lid bleven bij CrossFit Alkmaar!</p>

      <p>Inmiddels hebben we ook een badge voor je eerste honderd workouts. Want ook dat is natuurlijk al een prestatie om te vieren: honderd keer bij ons naar binnen gelopen om aan dat sterke en fitte lijf te werken! Daarna volgen de badges voor tweehonderdvijftig, vijfhonderd, duizend(!) en in de komende dagen reiken we voor het eerst een badge uit aan iemand die TWEEDUIZEND workouts heeft gedaan bij CrossFit Alkmaar.</p>

      <p>Het lijkt misschien een beetje knullig of kinderachtig om volwassen mensen badges uit te reiken omdat ze een bepaalde prestatie hebben gedaan. Ik denk dat wij dit onbewust hebben meegenomen uit onze twaalf en een half jaar bij het Korps Mariniers en haar special forces. Voor uitzendingen of zware opleidingen kregen we daar ook medailles of badges op ons pak. En hoewel we toen vooral heel hard tegen elkaar zeiden dat het ons niks interesseerde, waren we er stiekem toch best trots op als je na een lange opleiding waar meer mensen afvielen dan overbleven eindelijk die felbegeerde speld, badge of medaille kreeg opgespeld.</p>

      <p>En dat zie ik ook terug bij CrossFit Alkmaar. Wekelijks komen er leden op onze coaches af om te vragen hoeveel lessen ze inmiddels hebben meegedaan. Ik zie de badges terug op kleding, petten, tassen en social media. Omdat onze leden er toch trots op zijn dat ze al zo vaak hebben getraind bij CrossFit Alkmaar, en terecht!</p>

      <p>En wij? Wij zijn er nog veel trotser op dat mensen zo lang lid zijn bij CrossFit Alkmaar. Dat mensen ons vertrouwen om ze door soms zware of lange trainingen te helpen. Dat mensen die nog nooit echt getraind hebben hun vertrouwen in onze handen leggen om ze te begeleiden op weg naar die eerste honderd workouts en alle veranderingen die dat in hun lijf en hoofd teweeg brengt.</p>

      <p>Inmiddels hebben meer dan honderd van onze leden de grens van vijfhonderd trainingen gepasseerd. En reiken we in de komende dagen nog drie badges uit voor duizend trainingen bij CrossFit Alkmaar! Daarmee is de club mensen met meer dan duizend trainingen ook groter dan tien geworden.</p>

      <p>De dame (onze leden weten precies wie ik bedoel) die binnenkort de grens van tweeduizend passeert, wordt natuurlijk even goed in het zonnetje gezet door ons. Er zijn ook al een handjevol mensen die niet heel veel achter haar liggen op weg naar die tweeduizend......</p>

      <p>En waarom blijven mensen nu zo lang lid bij CrossFit Alkmaar? Omdat we goede coaches hebben die je veilig laten trainen op 'hoge intensiteit'. Dat betekent dus zwaar tillen en hard trainen. Daardoor ga je namelijk hard vooruit en krijg je een sterk en fit lijf dat tegen een stootje kan.</p>

      <p>Maar wat naast die kundige coaches nog veel belangrijker is: Het is leuk bij CrossFit Alkmaar! Hoe effectief die nieuwe vorm van trainen die je hebt ontdekt ook is, als je het niet leuk vindt ga je het nooit jaren volhouden. En dat is toch echt de enige weg naar dat sterke en fitte lijf: jarenlang consistent drie (of meer) keer per week trainen. Check al die blije gezichten op onze socials maar eens, daar is niks nep aan.</p>

      <p>Benieuwd of het nu echt allemaal zo leuk en goed is bij CrossFit Alkmaar? Boek gewoon <a href="/free-intro">hier</a> die vrijblijvende intake, dan laten we je alles zien en leren we elkaar kennen. Samen maken we een plan dat bij jou past en waarmee jij op weg bent naar die eerste honderd workouts!</p>
    `,
  },
  "moet-je-spierpijn-hebben-na-elke-workout": {
    title: "Moet je spierpijn hebben na elke workout?",
    date: "2026-01-19",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/Blog spierpijn.jpg",
    excerpt: "Spierpijn na het trainen: is het nodig? En wat zegt het over de kwaliteit van je workout?",
    content: `
      <p>Als je voor het eerst begint met gericht te trainen, vraag je je misschien af of je na je trainingen spierpijn gaat hebben.</p>

      <p>Het korte antwoord: als je nog nooit eerder hebt getraind, ga je waarschijnlijk wel wat spierpijn ervaren. Een goede coach kan je wel helpen om geleidelijk aan een programma te beginnen zodat je niet overdreven veel spierpijn hebt.</p>

      <p>Het goede nieuws: naarmate je gewend raakt aan het trainen, ga je minder vaak spierpijn hebben omdat je lichaam zich aanpast aan de activiteiten die je doet.</p>

      <p>Ook zeer ervaren sporters krijgen af en toe nog spierpijn. Dit gebeurt meestal wanneer ze een oefening voor het eerst doen of de intensiteit van een training aanzienlijk verhogen door meer gewicht toe te voegen, meer herhalingen te doen of de rusttijden te verkorten.</p>

      <p>Hoewel het waar is dat mensen op zo'n extreem niveau kunnen trainen dat ze ziek worden of geblesseerd raken, komt dit zelden voor – vooral wanneer mensen onder toezicht van goede coaches trainen.</p>

      <p>Een goede coach evalueert altijd het huidige fitnessniveau van cliënten. En schrijft daarna alleen redelijke hoeveelheden activiteit voor die leiden tot vooruitgang in de richting van doelen, niet tot extreme niveaus van spierpijn. Getrainde coaches kunnen je ook leren hoe je bewegingen correct uitvoert zodat je gewrichtspijn en blessures vermijdt, wat geen normale aspecten van training moeten zijn.</p>

      <p>Maar wat veroorzaakt die spierpijn nou?</p>

      <p>Spierpijn wordt veroorzaakt door microscopisch kleine scheurtjes in de spier. Geen zorgen, deze stress op de spier kan een goede zaak zijn. Passende niveaus van inspanning dagen het lichaam uit. Het lichaam reageert op die stress door zichzelf te herstellen en zich aan te passen om klaar te zijn voor vergelijkbare en zelfs grotere uitdagingen. Dus als 10 squats je op een dag spierpijn bezorgen, kan het lichaam spieren toevoegen zodat er 12 squats nodig zijn om je de volgende keer spierpijn te bezorgen (ok, misschien niet gelijk de volgende keer al).</p>

      <p>Professionele coaches begrijpen precies hoe ze spieren, bindweefsel en fysiologische systemen moeten uitdagen zodat ze sterker, krachtiger en efficiënter worden. Een effectief trainingsprogramma balanceert passende stress met rust, herstel en voeding om ervoor te zorgen dat het lichaam zichzelf voortdurend verbetert.</p>

      <p>Naarmate je meer ervaring opdoet, ga je herkennen dat bepaalde lage niveaus van spierpijn gewoon deel uitmaken van het proces. En je coach zal altijd met je overleggen en de trainingsintensiteit aanpassen om ervoor te zorgen dat je trainingen passend zijn.</p>

      <p>Uiteindelijk zul je misschien niet zo vaak spierpijn hebben. En dan vraag je je waarschijnlijk af: 'Betekent dat dat ik niet hard genoeg werk?' Het antwoord is dat spierpijn niets zegt over de kwaliteit van de workout. Een training kan je fitter maken, zelfs als je daarna geen spierpijn hebt.</p>

      <p>Hier is de kern van het verhaal: Fitness training kan je spieren pijn doen, maar goede coaches zorgen ervoor dat alles wat je doet veilig en passend is. Naarmate je fitter wordt, ga je minder vaak spierpijn hebben. Maar je kunt nog steeds milde spierpijn voelen na bepaalde trainingen.</p>

      <p>Als je nieuw bent in trainen of overweegt een fitnessprogramma te starten, is het beste plan om met een ervaren coach te praten over je geschiedenis en doelen. Die coach kan het perfecte plan voor je samenstellen en ervoor zorgen dat het regelmatig wordt aangepast op basis van jouw feedback.</p>

      <p>Bij CrossFit Alkmaar beginnen alle nieuwe cliënten met een gesprek voordat ze beginnen met trainen. We stellen vragen en luisteren naar je antwoorden, en dan vertellen we hoe we je kunnen helpen. We beantwoorden ook al je vragen, zodat je je op je gemak voelt. Zodra je begint met trainen, sta je er niet alleen voor. Onze coaches zullen je begeleiden, je trainingen aanpassen en ervoor zorgen dat je altijd op het juiste spoor zit.</p>

      <p>Als je meer vragen hebt over spierpijn of iets anders gerelateerd aan fitness en voeding, boek dan <a href="/free-intro">hier</a> een gratis intake met één van onze coaches.</p>
    `,
  },
  "is-hardlopen-slecht-voor-je": {
    title: "Is hardlopen slecht voor je?",
    date: "2026-01-12",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/Blog hardlopen.jpg",
    excerpt: "Hardlopen is niet slecht voor je. Maar het is niet de oplossing voor elk fitnessprobleem.",
    content: `
      <p>Mensen die fit willen worden, vragen vaak of hardlopen slecht voor je is. Als je de meest gestelde vragen over fitness op Google zoekt, is dit één van de top tien vragen.</p>

      <p>Het korte antwoord: Hardlopen is niet slecht voor je.</p>

      <p>Maar het is niet de oplossing voor elk fitnessprobleem, en het is niet de beste optie voor sommige mensen. Ten slotte is het mogelijk om te veel te hardlopen als je bepaalde doelen hebt.</p>

      <p><strong>Hardlopen is super goed voor je!</strong></p>

      <p>Hardlopen is een ideale activiteit omdat je er niet veel speciale uitrusting of zelfs toegang tot een sportschool voor nodig hebt. Je kunt gewoon je hardloopschoenen aantrekken en de weg, het strand of de paden in een park op gaan. Of je kunt een loopband in de garage of kelder gebruiken als je dat liever doet.</p>

      <p>Hardlopen is een geweldige oefening voor je cardiovasculaire systeem. Je versterkt ook je spieren en botten tot op zekere hoogte. Daarnaast biedt hardlopen veel van de 'extra' voordelen van algemene beweging: verbeterde stemming, betere slaap, meer zelfvertrouwen en ga zo maar door.</p>

      <p>Veel mensen houden ervan om een stuk te gaan hardlopen, en sommigen vinden het zo leuk dat ze zich aansluiten bij clubs of beginnen met trainen voor lange afstanden en zelfs marathons.</p>

      <p><strong>Maar waarom denken sommige mensen dan dat hardlopen slecht is?</strong></p>

      <p>Elke activiteit brengt enig risico met zich mee. Wij geloven dat de risico's van fitnessactiviteiten erg klein zijn—vooral vergeleken met de vele significante gezondheidsrisico's van inactiviteit.</p>

      <p>Daarnaast kunnen sommige hardlopers die veel kilometers maken blessures die met overbelasting te maken hebben krijgen. En sommige mensen hebben gewrichten die gewoon niet blij worden wanneer iemand met een minder dan perfecte techniek hardloopt. Ten slotte kan hardlopen in grote hoeveelheden spierverlies veroorzaken als iemand krachttraining vermijdt of niet goed eet.</p>

      <p>Maar dat betekent zeker niet dat hardlopen slecht is.</p>

      <p><strong>Hardlopen: Een element van fitness</strong></p>

      <p>Hardlopen is fantastisch voor cardiovasculaire training, maar je kunt veel van de voordelen van hardlopen krijgen zonder vijftig kilometer per week te lopen.</p>

      <p>En hardlopen is niet de beste optie om kracht, vermogen, flexibiliteit en andere elementen van fitness te verbeteren.</p>

      <p>Als je doelen zijn om je algehele fitness te verbeteren, gewicht te verliezen en spieren op te bouwen, raden we een programma aan dat cardiovasculaire training in balans brengt met krachttraining (en goede voeding).</p>

      <p>Een goed uitgewerkt programma kan enkele trainingen bevatten waarin hardlopen de enige beweging is. Maar dat gaat niet vaak gebeuren vergeleken met de andere trainingen die andere fitnesselementen combineren om het gewenste resultaat te bereiken.</p>

      <p>Een voorbeeld: iemand die gewicht wil verliezen en kracht wil opbouwen, hoeft niet vaak tien kilometer te hardlopen, als dat al nodig is. Een betere training zou deadlifts, dumbbell presses en kortere runs van honderd of tweehonderd bevatten.</p>

      <p>In veel gevallen kan hardlopen vervangen worden door andere bewegingen die de cardiovasculaire fitheid verbeteren. Zwemmen, fietsen en roeien zijn geweldige opties en verminderen allemaal de belasting van de gewrichten, wat belangrijk is voor sommige mensen.</p>

      <p>Dat betekent niet dat je niet zou moeten hardlopen of dat 'hardlopen slecht is'. Het is verstandig om een coach te raadplegen om te bepalen of hardlopen de juiste activiteit is om je persoonlijke doelen te bereiken. Als dat zo is, kan een coach je helpen bepalen hoe ver, hoe snel en hoe vaak je moet hardlopen. En als het niet de perfecte beweging is om je doelen te bereiken, kan de coach je wijzen op de juiste activiteiten.</p>

      <p>Het beste plan? Praat met een coach, leg je doelen uit en deel je voorkeuren voor fitnessactiviteiten, en laat de coach een specifiek plan maken dat je enthousiast maakt (super belangrijk!) om te trainen en de resultaten te bereiken die je wilt.</p>

      <p>Als je gewoon van hardlopen houdt en geen spier- of gewrichtspijn ervaart, doe het dan lekker wanneer je wilt. Hardlopen is een geweldige manier om actief te blijven. Het is niet slecht voor je. Onthoud gewoon dat het slechts een aspect van fitness is.</p>

      <p>En als je hardlopen haat, maak je geen zorgen: Er zijn veel andere manieren om fit te worden zonder te joggen of sprinten. Wij kennen ze allemaal en helpen je graag met suggesties.</p>

      <p>Als je met ons wilt praten over een fitnessplan, klik dan gewoon <a href="/free-intro">HIER</a> om een gratis intake te boeken.</p>
    `,
  },
  "waarom-je-bij-crossfit-alkmaar-geen-proefles-kan-doen": {
    title: "Waarom je bij CrossFit Alkmaar geen proefles kan doen",
    date: "2026-01-05",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Community",
    image: "/images/blog/Blog proefles.jpg",
    excerpt: "We hebben alles geprobeerd: proeflessen, meedoen aan groepslessen. Waarom we nu beginnen met een goed gesprek.",
    content: `
      <p>Door de jaren heen hebben we qua instroom alles wel geprobeerd bij CrossFit Alkmaar.</p>

      <p>Gratis proeflessen hebben we heel lang gedaan. Eerst een losse proefles waar mensen apart voor konden inschrijven, we gaven deze gestandaardiseerde proefles dan aan groepen van vier tot zes personen. Daardoor konden we iedereen genoeg aandacht geven en goed uitleggen wat CrossFit was.</p>

      <p>We hadden hier aardig wat A4tjes over vol getypt en de helft van de proefles bestond eigenlijk uit een lectuur over wat CrossFit nu eigenlijk was en waarom het zo goed voor je is. We hadden het over energiesystemen, intensiteit en functionele bewegingen. Daarna deden we wat burpees, sprints en thrusters, gaven we een high five en schreven mensen zich (hopelijk) in.</p>

      <p>We hebben ook een periode mensen mee laten doen aan de grote groepslessen als gratis proefles. Er konden dan maximaal twee 'proeflessers' meedoen aan de groepsles waar maximaal twaalf deelnemers aan meedoen. Dat was ideaal voor mensen om de sfeer te proeven, maar soms deden mensen mee aan les met alleen maar burpees en hardlopen (want ook dat is CrossFit). Of aan een les met allemaal oefeningen waar zij nou nét even niet zo goed in waren.</p>

      <p>Onze coaches doen de hele dag niks anders dan mensen helpen met het aanpassen van oefeningen aan beperkingen of niveaus, dat was het probleem niet. Maar of dit nu altijd een goede (en leuke) eerste ervaring met CrossFit was, valt te betwijfelen. Het percentage mensen dat inschreef na zo'n mooie les met alleen maar burpees of hardlopen was niet zo heel hoog. Zonde dat we hierdoor een grote groep mensen niet hebben kunnen helpen doordat we de eerste indruk misschien niet zo leuk maakten.</p>

      <p>Eigenlijk waren we al die jaren vooral aan het laten zien wat CrossFit Alkmaar nu eigenlijk was. We vroegen nooit aan de nieuwe mensen waarom ze eigenlijk wilden trainen, wat hun doelen en motivaties waren. Als echte CrossFit freaks waren we vooral het gospel van CrossFit aan het verkondigen.</p>

      <p>Tegenwoordig is het precies andersom: Als geïnteresseerden langskomen bij CrossFit Alkmaar gaan we in eerste instantie zelfs helemaal niet sporten. Je kunt je sportkleren dus thuis laten.</p>

      <p>Na een rondleiding door onze locatie (en een bakje koffie als je dat wilt), starten we met onze gratis intake: een vraaggesprek dat draait om JOU en niet om ons. We willen graag weten wie je bent, wat je uitdagingen zijn en, vooral, wat je wilt bereiken. Want dat is de enige manier om je te kunnen helpen naar de doelen die je hebt.</p>

      <p>Zo kunnen we een plan op maat maken met personal training, small groups, groepslessen en/of voedingsbegeleiding. Daarnaast leren we je beter kennen. Sporten bij CrossFit Alkmaar is immers niet anoniem, we kennen al onze leden bij naam en weten het als je ergens last van hebt en we bellen je op als je even niet bij ons bent geweest. Daarnaast heb je elke drie maanden recht op een 'goal review gesprek' met één van de coaches. Zo kunnen we samen kijken of alles bevalt en of je goed op weg bent naar je doelen.</p>

      <p>En natuurlijk zijn we tijdens de intake ook nog steeds ons gospel van CrossFit aan het verkondigen. Want wij kunnen iedereen helpen naar een fittere en sterkere versie van zichzelf, dat doen we al meer dan tien jaar. Maar het draait nu tijdens de intake vooral om jou en niet om al die mooie energiesystemen en functionele bewegingen waar wij als coaches het zo graag over hebben.</p>

      <p>Benieuwd of zo'n gratis intake iets voor jou is? Boek hem dan makkelijk via <a href="/free-intro">deze link</a>, dan zet ik de koffie vast voor je klaar.</p>
    `,
  },
  "blessures-en-trainen-bij-crossfit-alkmaar": {
    title: "Blessures en trainen bij CrossFit Alkmaar",
    date: "2025-12-29",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/blog/Blog blessure.jpg",
    excerpt: "Een blessure aan m'n knie. Wat ik als coach bij CrossFit Alkmaar heb geleerd over luisteren naar je lichaam.",
    content: `
      <p>Een blessure aan m'n knie, sh#t!</p>

      <p>Na jarenlang zonder echte blessures te hebben getraind, ben ik het laatste jaar wél aan de beurt. Na een liesblessure die een jaar heeft geduurd, heb ik volgens de fysio nu een 'jumpers knee'. Het naampje vind ik niet zo belangrijk, ik voel zelf ook wel dat er iets niet goed zit. Wat ik wel belangrijk vind, is dat het heel snel over gaat! Helaas lijkt dat niet zo te zijn....</p>

      <p>Allebei die blessures kan ik prima verklaren: Toen de spier in mijn lies scheurde, was ik eigenlijk niet van plan om te sporten. Ik had slecht geslapen, niet gegeten, was druk in m'n hoofd en had ook eigenlijk geen tijd. Toch ging ik nog even wel snel trainen en toch ook wel dat zware gewicht gepakt waarvan ik wist dat ik dat beter niet kon doen. Sterker nog, op weg naar CrossFit Alkmaar had ik nog besloten dat ik het niet zo zwaar zou gaan doen.</p>

      <p>Achteraf waren die dag (en de periode ernaartoe) alle ingrediënten aanwezig, je kon het bijna zien aankomen.</p>

      <p>En nu die knie. Daar heb ik stiekem eigenlijk al best lang last van, maar ik kon er wel redelijk mee trainen als ik warm was. Dat ik steeds langer nodig had om het op te warmen, nam ik maar op de koop toe. Ook hier weer een recept voor een blessure: gewoon doorgaan en niet naar de omstandigheden of je lijf luisteren. En dan ben ik nog een coach bij CrossFit Alkmaar ook.....</p>

      <p>Als coach bij CrossFit Alkmaar ben ik helemaal niet bang om mensen een beetje te pushen om meer te tillen of harder te gaan in een training. Maar alleen als ik het idee heb dat mensen dat ook echt kunnen. Vaker vertel ik tegen onze leden dat er misschien beter wat gewicht van die stang af kan of dat ze vandaag ook prima eens een keer op zeventig procent kunnen trainen in plaats van honderd(tien) procent. Ik denk dat ik (en ons hele team van coaches) daar behoorlijk serieus en goed mee bezig zijn, het aantal blessures bij CrossFit Alkmaar ligt erg laag en ik zie nooit mensen veel te veel doen.</p>

      <p>Practice what you preach, dat doe ik zelf aan de ene kant wel: ik train veel en doe dat al zo lang ik me kan herinneren. Daardoor heb ik een sterk en fit lijf, het geeft me zelfvertrouwen en ik kan nog makkelijk met m'n kinderen rennen, stoeien en spelen. Ook kan ik daardoor prima af en toe een patatje of pizza eten zonder dat de weegschaal daar gelijk op reageert.</p>

      <p>Maar aan de andere kant doe ik dat practice what you preach dus helemaal niet: Ik heb mezelf deze blessures toch wel een beetje aangedaan. Al had ik wat eerder naar de omstandigheden of mijn lichaam geluisterd, had ik ze zeker kunnen voorkomen. Ik ben gewoon te lang, te zwaar en te hard doorgegaan. Dat is een beetje de aard van dit beestje. Bij de special forces van het Korps Mariniers heeft dit me altijd veel gebracht, maar nu vind ik het nog steeds lastig om dat af en toe uit te zetten. Er staat nu namelijk niks op het spel.</p>

      <p>Nou ja, niks op het spel: Ik baal als een stekker dat ik niet gewoon lekker m'n ding kan doen en dat ik pijn in m'n knie heb, elke dag. Dat is toch wel wat meer dan 'niks'.</p>

      <p>Eigenlijk had ik gewoon een coach nodig die naast me stond en tegen me zei dat ik misschien eens wat minder zou moeten doen. Precies wat ik en ons team bij CrossFit Alkmaar tot ons werk hebben gemaakt: mensen afremmen of pushen wanneer nodig. Ik ben er nu zelf het voorbeeld van waarom het belangrijk is dat er een coach met je meekijkt en je afremt of pusht waar nodig. Dat is namelijk dé manier om hard te kunnen trainen en vooruit te gaan. Of je nu wilt afvallen, aankomen, fitter of sterker wilt worden.</p>

      <p>Dan moet je hard trainen, en dat is hartstikke goed voor je. Maar wel als je weet wat je doet of als er een goede coach naast je staat die weet waar hij het over heeft. En bij CrossFit Alkmaar weten we waar we het over hebben. Al meer dan tien jaar ervaring in het begeleiden en coachen van onze leden naar hun fitnessdoelen. En dus ook ervaring in wat er gebeurt als je niet naar je lijf of de omstandigheden luistert.</p>

      <p>Ondertussen doe ik wel gewoon de trainingen mee bij CrossFit Alkmaar, ik pas gewoon (een hoop) aan waar nodig om die knie te ontzien. Langzaam gaat dat wel weer de goede kant op. Ik kan niet wachten tot ik weer lekker alles kan doen als deze blessure over is. En (als het goed is) ik neem deze 'les' gewoon ook weer mee in m'n rugzakje. Dat rugzakje gebruik ik voor m'n eigen trainingen, maar natuurlijk ook als coach bij CrossFit Alkmaar.</p>

      <p>Blessures zouden niet bij je trainingen moeten horen als je met goede coaches traint. Kleine pijntjes horen er af en toe nu eenmaal bij. Die kun je trouwens beter accepteren dan alle pijntjes die je gaat ontwikkelen als je niet regelmatig (drie keer per week of meer) je lijf prikkelt. Als je maar naar die kleine pijntjes luistert voordat ze blessures worden, ik kan het dus weten....</p>

      <p>Ook werken aan een fit en sterk lijf dat tegen een stootje kan onder begeleiding van coaches die weten waar ze het over hebben? <a href="/free-intro">HIER</a> boek je makkelijk een afspraak met mij of één van onze coaches, laat ons je helpen.</p>
    `,
  },
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
