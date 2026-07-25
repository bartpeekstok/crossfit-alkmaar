// Blog post data - single source of truth for both listing and detail pages
export interface BlogPost {
  title: string;
  // Optioneel: aparte <title>-tag voor SEO als die afwijkt van de zichtbare H1
  metaTitle?: string;
  date: string;
  author: string;
  category: string;
  image: string;
  // Optioneel: CSS background-position voor de header-crop (bv. "center 30%")
  // als de gezichten niet in het midden van de foto staan.
  imagePosition?: string;
  excerpt: string;
  content: string;
  // Optioneel: vragen voor FAQPage-schema (rich results). Vul aan als de blog een FAQ-blok heeft.
  faq?: { question: string; answer: string }[];
}

export const blogPosts: { [key: string]: BlogPost } = {
  "sterke-core-zonder-crunches": {
    title: "Een sterke core zonder crunches: dit werkt écht",
    metaTitle: "Sterke core zonder crunches: de beste core-oefeningen",
    date: "2026-07-20",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/images/krachttraining-alkmaar-header.jpg",
    imagePosition: "center 28%",
    excerpt: "Elke dag sit-ups doen voor een sterke core? Niet nodig. Dit zijn de oefeningen die je core wél sterk maken, en zo vaak moet je ze trainen.",
    faq: [
      {
        question: "Wat is de beste oefening voor je buikspieren?",
        answer: "Er is geen losse beste oefening. Zware samengestelde oefeningen zoals squats, deadlifts en overhead presses trainen je core harder dan crunches, omdat je romp daar onder last moet stabiliseren. Wil je gericht aanvullen, kies dan voor planks, farmers carries en hollow holds.",
      },
      {
        question: "Heeft het zin om elke dag je core te trainen?",
        answer: "Nee, dat is niet nodig en meestal ook niet slim. Je core is gewoon spierweefsel en heeft herstel nodig. Twee tot drie keer per week gericht werk, gecombineerd met zware basisoefeningen, geeft meer resultaat dan dagelijks tientallen sit-ups.",
      },
      {
        question: "Hoe krijg ik zichtbare buikspieren?",
        answer: "Zichtbare buikspieren zijn vooral een kwestie van vetpercentage, en dat wordt bepaald door je voeding. Je kunt niet plaatselijk vet verbranden met buikspieroefeningen. Train je core voor kracht en stabiliteit; het zichtbare resultaat volgt uit consistentie in training én voeding.",
      },
      {
        question: "Zijn crunches slecht voor je?",
        answer: "Slecht niet, maar wel beperkt. Crunches trainen alleen het buigen van je romp, terwijl de belangrijkste taak van je core juist het tegenhouden van beweging is: stabiel blijven onder last. Daarom leveren anti-bewegingsoefeningen zoals planks en carries meer op.",
      },
    ],
    content: `
      <p>Vraag tien mensen hoe je een sterke core krijgt en negen zeggen: buikspieroefeningen. Sit-ups, crunches, elke dag een schema van tien minuten. Wij zien het al twaalf jaar anders. De leden die bij ons de zwaarste gewichten tillen, doen zelden een crunch.</p>

      <h2>Wat je core eigenlijk doet</h2>

      <p>Je core is niet je sixpack. Het is het hele pakket spieren rond je romp: buikspieren, rugstrekkers, schuine buikspieren, bekkenbodem en diafragma. En de belangrijkste taak van dat pakket is niet <em>bewegen</em>, maar <strong>beweging tegenhouden</strong>: je romp stijf en stabiel houden terwijl je tilt, draagt, duwt of rent.</p>

      <p>Een crunch traint precies het omgekeerde: je romp oprollen zonder weerstand van betekenis. Dat is niet verkeerd, maar het is een klein stukje van het verhaal, en niet het stuk dat je in het dagelijks leven of in de gym nodig hebt.</p>

      <h2>De oefeningen die je core écht sterk maken</h2>

      <p><strong>1. Zware basisoefeningen.</strong> Squats, deadlifts en overhead presses dwingen je core om onder serieuze last te stabiliseren. Wie 80 kilo deadlift, traint zijn romp harder dan met welk buikspierschema dan ook. Dit is de reden dat onze programmering om deze oefeningen heen is gebouwd.</p>

      <p><strong>2. Carries.</strong> Farmers carries (met zware kettlebells of dumbbells lopen) zijn misschien wel de meest onderschatte core-oefening die er is. Je hele romp werkt om je rechtop te houden, stap voor stap. Simpel, veilig en brutaal effectief.</p>

      <p><strong>3. Anti-bewegingsoefeningen.</strong> Planks, side planks, hollow holds en pallof presses trainen precies waar je core voor bedoeld is: niet bewegen terwijl er krachten aan je trekken. Een goede plank van 45 seconden met volledige spanning levert meer op dan drie minuten hangen in een slordige.</p>

      <p><strong>4. Ademhaling en bracing.</strong> Leren hoe je met je ademhaling spanning opbouwt in je romp (bracing) is de goedkoopste gewichthefriem die er bestaat. Het is techniek, geen extra oefening, en onze coaches leren het je bij elke zware lift.</p>

      <h2>Moet je dan elke dag core trainen?</h2>

      <p>Nee. Je core is gewoon spierweefsel: het wordt sterker van prikkel plus herstel, niet van dagelijkse herhaling. Als je twee tot drie keer per week traint met zware basisoefeningen en af en toe gericht aanvult met carries en planks, is dat ruim voldoende. Dagelijkse sit-up-schema's voelen productief, maar voegen vooral vermoeidheid toe, geen kracht.</p>

      <h2>En zichtbare buikspieren dan?</h2>

      <p>Eerlijk verhaal: die worden in de keuken gemaakt. Zichtbare buikspieren zijn een kwestie van vetpercentage, en je kunt niet plaatselijk vet verbranden met buikspieroefeningen, hoeveel crunches je ook doet. Train je core voor kracht en stabiliteit, eet consistent goed, en het zichtbare resultaat volgt vanzelf.</p>

      <h2>Zo pakken wij het aan</h2>

      <p>Bij CrossFit Alkmaar zit core-werk in vrijwel elke training verwerkt: in de zware liften, in de carries, in de metcons. Je hoeft er geen apart schema voor bij te houden; je hoeft alleen op te komen dagen. Benieuwd hoe dat voelt? <a href="/free-intro">Plan een gratis kennismaking</a> en ervaar het zelf.</p>
    `,
  },
  "sportschool-kiezen-alkmaar": {
    title: "Sportschool kiezen in Alkmaar: een eerlijke vergelijking",
    metaTitle: "Sportschool kiezen in Alkmaar? Zo maak je de juiste keuze",
    date: "2026-07-12",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Dit is CFA",
    image: "/redesign/assets/header-community.jpg",
    excerpt: "Twijfel je tussen sportscholen in Alkmaar? Een eerlijke vergelijking van begeleiding, prijs en aanbod, inclusief wanneer wij níet de beste keuze zijn.",
    faq: [
      {
        question: "Wat is de beste sportschool in Alkmaar?",
        answer: "Dat hangt af van wat jij nodig hebt. Zoek je maximale variatie en faciliteiten, kies dan een grote health club. Is jouw echte uitdaging volhouden, of begin je zonder trainingservaring, dan past een sportschool met kleine groepen en vaste coaches zoals CrossFit Alkmaar het best.",
      },
      {
        question: "Wat is het verschil tussen CrossFit Alkmaar en een grote sportschool?",
        answer: "Bij een grote sportschool train je grotendeels zelfstandig of in grote groepen. Bij CrossFit Alkmaar train je altijd onder begeleiding van een vaste coach, start je in groepen van maximaal 6 personen, en heb je elke drie maanden een check-in gesprek over je voortgang.",
      },
      {
        question: "Is CrossFit niet te zwaar voor beginners?",
        answer: "Nee. Elke training wordt geschaald naar jouw niveau. Onze gemiddelde leeftijd is 35+ en we hebben leden van 20 tot 70+. Iedereen start met de 28 Day Kickstart, waarin je in vier weken de basis leert in een kleine groep.",
      },
      {
        question: "Kan ik eerst kennismaken voordat ik lid word?",
        answer: "Ja. Je start met een gratis kennismaking waarin we je doelen en eventuele beperkingen bespreken. Daarna beslis je zelf of je begint. Alle abonnementen zijn maandelijks opzegbaar.",
      },
    ],
    content: `
      <p>Je wilt fitter worden. Je hebt gezocht op "sportschool Alkmaar" en je hebt een paar opties gevonden: grote health clubs met alles onder één dak, en wij. Allemaal beloven we ongeveer hetzelfde: goede begeleiding, fijne sfeer, resultaat.</p>

      <p>Dus hoe kies je?</p>

      <p>Wij denken: door de juiste vraag te stellen. Niet "welke sportschool is de beste?", maar "waarom is het me tot nu toe niet gelukt?"</p>

      <h2>De vraag die bijna niemand stelt</h2>

      <p>De meeste mensen die een sportschool zoeken, zoeken niet hun éérste sportschool. Ze zijn al eens lid geweest. Ergens anders, of jaren geleden. En op een gegeven moment gestopt.</p>

      <p>Dat is geen karakterfout. Uit onderzoek en uit onze eigen ervaring blijkt telkens hetzelfde: mensen stoppen niet omdat ze lui zijn. Ze stoppen omdat niemand het merkt als ze wegblijven. Geen begeleiding, geen verbinding, geen reden om terug te komen.</p>

      <p>Als dat jouw patroon is, dan is de belangrijkste vraag bij het kiezen van een sportschool niet "waar is het aanbod het grootst?" of "waar is het het goedkoopst?", maar: <strong>"waar houd ik het vol?"</strong></p>

      <h2>Waar je écht op moet vergelijken</h2>

      <p>Vier dingen zeggen meer dan alle mooie foto's op een website. Stel ze bij elke sportschool die je overweegt.</p>

      <h2>1. Hoeveel mensen staan er in de les, en hoeveel coaches?</h2>

      <p>Dit is het eerlijkste getal dat er is. Een coach kan maar een beperkt aantal mensen tegelijk echt zien. Bij een groep van vijftien tot twintig personen kan een goede trainer de sfeer bewaken en de grootste fouten eruit halen. Maar jouw techniek opbouwen, jouw beperkingen kennen, merken dat jij er deze week niet was? Dat lukt niet.</p>

      <p>Vraag bij elke sportschool die je overweegt: hoe groot zijn de groepen, en hoeveel begeleiding krijg ik als beginner? Bij ons start iedereen in de <a href="/kickstart">28 Day Kickstart</a> met maximaal 6 personen per groep. Niet omdat groter niet rendabeler zou zijn, maar omdat we anders onze belangrijkste belofte niet kunnen waarmaken.</p>

      <h2>2. Wat gebeurt er als je een keer wegblijft?</h2>

      <p>Bij de meeste sportscholen: niets. Je abonnement loopt door, je plek in de les gaat naar een ander, en niemand belt.</p>

      <p>Vraag ernaar. "Wat doen jullie als ik twee weken niet kom opdagen?" Het antwoord vertelt je precies hoe het lidmaatschap er over een jaar uitziet. Bij ons kent je coach je bij naam, en elke drie maanden heb je een check-in gesprek. Blijf je weg, dan merken we dat, en dan hoor je van ons.</p>

      <h2>3. Breedte of diepte?</h2>

      <p>Hier moeten we eerlijk zijn: als je vooral variatie en faciliteiten zoekt, zijn er in Alkmaar plekken met een breder aanbod dan wij. Padel, yoga, cycling, sauna, een bar met een daghap. Als je al jaren zelfstandig traint, een goede basis hebt en gewoon een fijne plek zoekt met veel keuze, dan is zo'n health club een prima optie. Serieus.</p>

      <p>Ons aanbod is bewust smaller: krachttraining, conditie en functioneel bewegen, <a href="/groepslessen">in kleine groepen met vaste coaches</a>. Diepte in plaats van breedte. Dat is geen beperking, dat is een keuze. Alles wat we doen staat in dienst van één ding: dat jij over een jaar nog steeds traint.</p>

      <h2>4. Kun je het proberen, en wat kost het?</h2>

      <p>Elke sportschool in Alkmaar biedt een manier om kennis te maken, en dat moet je vooral doen. Ga bij twee of drie plekken langs. Let niet alleen op de apparatuur, maar op de vraag die ze jóu stellen. Wordt er gevraagd naar je doelen, je blessures, wat je eerder hebt geprobeerd? Of krijg je een rondleiding langs de machines en een tarievenlijst?</p>

      <p>Bij ons begint het met een <a href="/free-intro">gratis kennismaking</a>: een gesprek over jouw doelen en waar je tegenaan loopt, zodat we samen kunnen bepalen of we bij elkaar passen. Onze abonnementen zijn maandelijks opzegbaar en starten vanaf 70 euro per maand.</p>

      <h2>Het verhaal dat dit het beste samenvat</h2>

      <p>Een van onze leden vertrok een tijd geleden naar een grote health club in Alkmaar. Logische keuze: meer faciliteiten, meer lessoorten, mooie club. En na een tijdje stond hij weer bij ons voor de deur.</p>

      <p>Niet omdat die club slecht is. Maar omdat hij daar merkte wat hij bij ons had gehad zonder het door te hebben: coaches die zijn techniek kenden, die zagen wanneer hij vastliep, en die het merkten als hij er niet was. Met een goede basis red je je prima in een grote zaal. Maar de begeleiding die die basis bouwt en onderhoudt, die vond hij daar niet terug.</p>

      <p>Dat is de kern van deze hele vergelijking. Grote clubs werken voor mensen die al kunnen trainen. Wij zijn er voor het stuk daarvóór, en voor iedereen die weet dat volhouden zijn echte uitdaging is.</p>

      <h2>Zo maak je je keuze</h2>

      <p>Ga bij minimaal twee plekken kijken. Stel overal dezelfde drie vragen: hoe groot zijn de groepen, wat gebeurt er als ik wegblijf, en hoe ziet mijn eerste maand eruit? Kies daarna niet de plek met de mooiste zaal, maar de plek waar je het antwoord op die vragen het meest vertrouwde.</p>

      <p>En als je denkt dat wij bij je passen: kom vrijblijvend langs voor een <a href="/free-intro">gratis kennismaking</a>. Geen verplichtingen, geen verkooppraatje. Gewoon een gesprek over waar jij naartoe wilt.</p>

      <h2>Veelgestelde vragen</h2>

      <p><strong>Wat is de beste sportschool in Alkmaar?</strong> Dat hangt af van wat jij nodig hebt. Zoek je maximale variatie en faciliteiten, kies dan een grote health club. Is jouw echte uitdaging volhouden, of begin je zonder trainingservaring, dan past een sportschool met kleine groepen en vaste coaches zoals CrossFit Alkmaar het best.</p>

      <p><strong>Wat is het verschil tussen CrossFit Alkmaar en een grote sportschool?</strong> Bij een grote sportschool train je grotendeels zelfstandig of in grote groepen. Bij CrossFit Alkmaar train je altijd onder begeleiding van een vaste coach, start je in groepen van maximaal 6 personen, en heb je elke drie maanden een check-in gesprek over je voortgang.</p>

      <p><strong>Is CrossFit niet te zwaar voor beginners?</strong> Nee. Elke training wordt geschaald naar jouw niveau. Onze gemiddelde leeftijd is 35+ en we hebben leden van 20 tot 70+. Iedereen start met de <a href="/kickstart">28 Day Kickstart</a>, waarin je in vier weken de basis leert in een kleine groep.</p>

      <p><strong>Kan ik eerst kennismaken voordat ik lid word?</strong> Ja. Je start met een <a href="/free-intro">gratis kennismaking</a> waarin we je doelen en eventuele beperkingen bespreken. Daarna beslis je zelf of je begint. Alle abonnementen zijn maandelijks opzegbaar.</p>
    `,
  },
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
  "grootste-fout-weer-gaan-sporten": {
    title: "De grootste fout die mensen maken als ze (weer) gaan sporten",
    date: "2025-04-03",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Dit is CFA",
    image: "/redesign/assets/header-kickstart.jpg",
    excerpt: "Te veel, te snel, te streng: dé valkuil als je (weer) gaat sporten. Zo pak je het slim aan met een plan dat je volhoudt, bij CrossFit Alkmaar.",
    content: `
      <p>We zien het vaak gebeuren. Iemand besluit het roer om te gooien. Nieuwe sportschoenen, abonnement op zak, goede voornemens. En dan? Volle bak erin. Vijf keer per week trainen, streng dieet erbij, alles of niks.</p>

      <p>En dan, drie weken later? Opnieuw beginnen... of alweer gestopt.</p>

      <p>Dat is de valkuil: te veel, te snel, te streng.</p>

      <h2>Minder hard, meer slim</h2>

      <p>De grootste fout die mensen maken is denken dat je keihard moet trainen om resultaat te boeken. Maar eerlijk? Dat hou je niet vol. Zeker niet als je een druk leven hebt met werk, gezin en alles daaromheen. Je lichaam én je hoofd moeten kunnen meekomen.</p>

      <p>Wat wél werkt? Een plan dat bij je past. Drie keer per week. Op vaste tijden. Met begeleiding. In een omgeving waar je niet hoeft te bewijzen dat je erbij hoort - maar gewoon mag beginnen waar je bent.</p>

      <p>Daarom hebben we bij CrossFit Alkmaar de 28-Day Kickstart. Geen overbelasting, geen gekke diëten. Gewoon vier weken met structuur, slimme trainingen en praktische leefstijlgewoontes die je echt kunt volhouden.</p>

      <h2>Rustig bouwen werkt beter dan keihard instorten</h2>

      <p>Na die eerste vier weken heb je vaak al meer energie, slaap je beter, voel je je sterker. Dán kun je verder bouwen. Bijvoorbeeld in BUILD, onze small group training waarin je gericht verder werkt aan kracht, conditie en vertrouwen. In een vaste groep van maximaal zes mensen. Altijd onder begeleiding. Altijd met een plan.</p>

      <p>En precies dát zorgt ervoor dat je het wél volhoudt.</p>

      <h2>Niet harder werken - slimmer werken</h2>

      <p>Wil je fitter worden? Begin dan niet met jezelf keihard afbeulen. Begin met een gesprek. Tijdens onze intake willen we eerst weten wie je bent, wat je al geprobeerd hebt en waar je naartoe wilt. Zo kunnen we zorgen dat je niet voor de tiende keer opnieuw begint - maar eindelijk iets vindt wat bij je past.</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, dan laten we je zien hoe trainen ook anders kan.</p>
    `,
  },
  "heeft-bankdrukken-invloed-op-buikvet": {
    title: "Heeft bankdrukken invloed op buikvet?",
    date: "2025-03-13",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/photo-box2.webp",
    excerpt: "Bankdrukken versterkt borst, triceps en schouders, maar verbrandt het ook buikvet? Zo werkt vetverbranding echt, uitgelegd door CrossFit Alkmaar.",
    content: `
      <p>Bankdrukken, ofwel de bench press, is een populaire oefening die zich richt op het versterken van de borst, triceps en schouders. Maar kan deze oefening ook helpen om buikvet te verbranden? Het antwoord is iets genuanceerder dan je misschien denkt.</p>

      <p>Hoe werkt vetverbranding? Vetverbranding is het resultaat van een calorietekort, waarbij je meer calorieën verbrandt dan je consumeert. Dit gebeurt niet lokaal; je kunt niet specifiek vet verbranden op één plek in je lichaam, zoals je buik, door gerichte oefeningen te doen. Dit fenomeen staat bekend als het mythe van "spot-reduction."</p>

      <p>Wat doet bankdrukken dan wel?</p>

      <ul>
        <li>Indirecte vetverbranding: Hoewel bankdrukken zelf niet direct buikvet verbrandt, draagt het bij aan een verhoogd calorieverbruik door de toename van spiermassa.</li>
        <li>Core-activatie: Tijdens het bankdrukken moet je je core aanspannen om stabiliteit te behouden. Dit versterkt je buikspieren, maar vermindert niet direct het vet dat eroverheen ligt.</li>
      </ul>

      <p>Hoe verlies je effectief buikvet?</p>

      <ul>
        <li>Voeding: Een gebalanceerd dieet met een calorietekort is essentieel. Focus op eiwitrijke maaltijden, gezonde vetten en complexe koolhydraten.</li>
        <li>Volledige lichaamstraining: Oefeningen zoals squats, deadlifts en pull-ups betrekken meerdere spiergroepen en verhogen je algehele calorieverbranding.</li>
        <li>Consistentie: Regelmatige training en een gezond voedingspatroon zijn de sleutels tot langdurig vetverlies.</li>
      </ul>

      <p>Voordelen van bankdrukken in je fitnessroutine:</p>

      <ul>
        <li>Verbeterde houding: Sterkere borst- en schouderspieren dragen bij aan een betere lichaamshouding.</li>
        <li>Functionele kracht: Bankdrukken verbetert de kracht die je nodig hebt voor dagelijkse activiteiten zoals duwen en tillen.</li>
      </ul>

      <p>Bij CrossFit Alkmaar integreren we bankdrukken in onze krachttrainingsprogramma's, maar we combineren het altijd met full-body workouts en cardiovasculaire oefeningen om je te helpen vet te verbranden en spieren op te bouwen. Onze coaches begeleiden je bij het optimaliseren van je techniek en het aanpassen van je trainingsschema aan jouw doelen.</p>

      <p>Wil je effectief vet verliezen en sterker worden? Kom langs bij CrossFit Alkmaar en ontdek hoe wij je kunnen helpen om je fitnessdoelen te bereiken.</p>

      <p><a href="/free-intro">Boek hier je vrijblijvende intake</a>.</p>
    `,
  },
  "drie-keer-per-week-trainen-werkt": {
    title: "Drie keer per week trainen werkt",
    date: "2025-10-20",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/photo-hero.webp",
    excerpt: "Drie trainingen per week is genoeg voor meer kracht, conditie en energie. Zo pak je dat slim aan bij CrossFit Alkmaar.",
    content: `
      <p>Iedereen is druk. Werk, gezin, sociale afspraken en de onvermijdelijke lijstjes die nooit lijken op te houden. Toch is er één afspraak die, als je hem drie keer per week inplant, de rest eenvoudiger maakt: trainen. Niet wanneer het uitkomt, maar volgens een plan. Bij CrossFit Alkmaar zien wij dagelijks wat er gebeurt als leden die keuze maken: meer energie, betere resultaten en vooral continuïteit die standhoudt als het druk wordt. In deze blog leggen we uit waarom drie keer per week trainen werkt, hoe je dat volhoudt en wat wij doen om je daarbij te helpen.</p>

      <p>Drie sessies per week is een strategisch minimum. Het is vaak genoeg om een trainingsprikkel te geven waar je lichaam op kan reageren, en het is realistisch genoeg om in te passen in een volle agenda. Het ritme van om de dag bewegen met steeds een dag herstel ertussen houdt je systeem ‘aan’. Je herstelt net genoeg om progressie te maken, zonder dat de rem erop gaat. Met twee keer per week lukt dat soms ook, maar je marges zijn kleiner en één gemiste training betekent meteen een week met slechts één prikkel. Met drie sessies heb je buffer.</p>

      <p>Wat levert het concreet op? Ten eerste: kracht. Met drie sessies kunnen we structureel werken aan basisoefeningen zoals squats, deadlifts, drukken en trekken. Je ziet dat terug in het dagelijks leven: tillen zonder rugpijn, traplopen zonder hijgen, boodschappen in één keer uit de auto. Ten tweede: conditie. Door slim te variëren tussen kort-intensief en langer gecontroleerd werk bouw je een motor waar je op kunt vertrouwen. Ten derde: techniek. Goede bewegingen leer je niet uit een boek, maar door herhaling onder begeleiding. Drie momenten per week biedt genoeg ruimte om te leren, te verfijnen en te automatiseren.</p>

      <p>“Ja maar, mijn agenda…” Horen we vaker. Daarom werken wij met een uitgebreid rooster en programma. Ochtend, middag, avond: er is altijd een optie. En omdat wij met professionele coaches werken die je kennen, kom je niet binnen in een willekeurige training. We weten waar je staat en wat vandaag belangrijk is. Onze aanpak is simpel: duidelijke uitleg, heldere standaarden, en direct toepasbare aanwijzingen. Geen franje, wel resultaat.</p>

      <p>Continuïteit vraagt meer dan alleen een goed rooster. Het vraagt een plan dat past bij jouw doelen en leven. Daarom starten we met een intake: een gesprek en een praktische check. Wat wil je bereiken? Hoe ziet je week eruit? Welke blessures of beperkingen spelen mee? Op basis daarvan adviseren we je de beste instap: regulier trainen in de groepen, de 28-Day Kickstart om ritme op te bouwen, of BUILD (small group training) als je extra structuur en persoonlijke aandacht nodig hebt. Daarna blijven we schakelen met onze 90-day check-ins. Elke negentig dagen ga je met een coach zitten om je vooruitgang te bespreken, doelen scherp te zetten en, waar nodig, het plan bij te sturen. Zo voorkom je dat je doelloos komt sporten of wegzakt als het druk wordt.</p>

      <p>Een belangrijk onderdeel in drie keer per week trainen is intelligent doseren. Wij programmeren zo dat je niet twee dagen achter elkaar exact hetzelfde belast. Maandag misschien kracht en kort conditioneel werk, woensdag techniek en ‘engine’, vrijdag mixed modal met focus op kwaliteit. We vermijden onnodige herhaling van dezelfde spiergroepen op opeenvolgende dagen en we zorgen dat de krachtblokken en de WOD elkaar aanvullen in plaats van dubbelop zijn. Deze structuur beschermt je tegen overbelasting en versnelt je progressie.</p>

      <p>Vraag je verder af: wat staat mijn trainingsritme het meest in de weg? Tijd? Dan plan je je drie vaste momenten aan het begin van de week in je agenda, alsof het klantafspraken zijn. Energie? Start met kortere sessies en stem je voeding beter af; kleine aanpassingen in ontbijt en hydratatie doen wonderen. Motivatie? Maak het zichtbaar: meet je trainingen, zet kleine doelen en vier mijlpalen. Wij helpen je daarmee: duidelijke registraties, simpele testmomenten en coaches die je kennen en aanspreken als het nodig is. Betrokken, maar altijd eerlijk.</p>

      <p>Voor sommige leden is drie keer per week het einddoel; voor anderen is het de basis waarboven ze later naar vier keer kunnen opschalen. Belangrijk is dat het vol te houden is. Wij kiezen voor discipline boven motivatie. Motivatie is vluchtig; discipline bouw je. Dat klinkt streng, maar het is juist rustgevend. Je hoeft niet elke keer te onderhandelen met jezelf; je volgt het plan. Met onze 90-day check-ins controleren we of het plan nog klopt. Verandert je werkrooster? Krijg je een blessure? We passen aan en je blijft bewegen.</p>

      <p>Klinkt dit als een militaire operatie? Misschien een beetje. In onze achtergrond zit veel ervaring met plannen onder druk. Wat daar werkt, werkt ook in het dagelijks leven: duidelijke doelen, een simpel plan en consequente uitvoering. Het verschil is dat we bij CrossFit Alkmaar werken met gewone mensen met echte agenda’s. We houden het praktisch en menselijk, zonder poespas.</p>

      <p>Wil je dit voor jezelf neerzetten? Plan een gratis intake. We kijken naar je week, je doelen en je startpunt, en we maken een concreet plan voor drie trainingen per week die je wél volhoudt.<a href="/free-intro">Plan hier je gratis intake</a>.</p>
    `,
  },
  "cfa-open-25": {
    title: "De CFA Open ’25: schrijf je nu in voor het leukste event van het jaar!",
    date: "2025-01-19",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Dit is CFA",
    image: "/redesign/assets/header-community.jpg",
    excerpt: "De CFA Open '25: vier zaterdagen vol workouts, teamspirit en gezelligheid bij CrossFit Alkmaar. Lees hoe het event werkt.",
    content: `
      <p>De inschrijving is geopend! Het is weer tijd voor vier weken vol gezelligheid, uitdaging en een heleboel plezier: de CFA Open ’25! Dit jaarlijkse evenement is dé kans om je medesporters beter te leren kennen, je grenzen te verleggen en samen te genieten van de unieke sfeer bij CrossFit Alkmaar.</p>

      <h2>Wat is de CFA Open ’25?</h2>

      <p>De CFA Open ’25 bestaat uit vier zaterdagen vol actie en lol, namelijk op 1, 8, 15 en 22 maart. De eerste drie weken gaan we aan de slag met de workouts van de officiële CrossFit Open. De vierde week sluiten we af met een bonus workout in echte CFA-stijl, gevolgd door een gezellig samenzijn met eten en drinken.</p>

      <p>Het concept is simpel: alle deelnemers worden verdeeld over drie teams. Onder leiding van creatieve en enthousiaste teamcaptains strijden jullie niet alleen tijdens de workouts, maar ook om punten te verdienen met aanmoedigingen, originele outfits en teamspirit. Dit event draait niet alleen om sport, maar vooral om verbinding en plezier.</p>

      <h2>Hoe werkt het?</h2>

      <ul>
        <li>Teamindeling: Op maandag 10 februari worden alle deelnemers via een loting live verdeeld over de drie teams.</li>
        <li>Workouts: De eerste drie weken zijn de workouts gebaseerd op de officiële CrossFit Open. De laatste week wacht een verrassende CFA workout die je niet wilt missen.</li>
        <li>Punten: Teams verdienen punten op allerlei manieren, zoals:  De meeste deelnemers per week.</li>
        <li>De beste aanmoediging en teamspirit.</li>
        <li>De meest creatieve outfits.</li>
      </ul>

      <h2>Waarom meedoen?</h2>

      <ul>
        <li>Verbinding: Ontmoet nieuwe mensen binnen de box en versterk de band met je medesporters.</li>
        <li>Geen prestatiedruk: Of je nu een beginner bent of al jaren traint, iedereen kan meedoen. Het draait om de ervaring, niet om de score.</li>
        <li>Bonus workout en feest: De laatste dag sluiten we af met een feestelijke bonus workout, eten en drinken, en heel veel gezelligheid.</li>
      </ul>

      <h2>Praktische info</h2>

      <ul>
        <li>Waar: CrossFit Alkmaar.</li>
        <li>Inschrijven: Via SportBit of deze link.</li>
      </ul>

      <h2>Mis het niet!</h2>

      <p>Of je nu net bent begonnen met trainen of al een ervaren sporter bent, de CFA Open ’25 is voor iedereen. Laat je niet afschrikken door het woord ‘competitie’ - dit evenement draait om lol, gezelligheid en samen iets moois neerzetten.</p>

      <p>Schrijf je vandaag nog in en zorg dat je erbij bent. Dit wil je niet missen!</p>

      <h2>Tot slot</h2>

      <p>Wie zullen de teamcaptains zijn? En welke teamnamen gaan we dit jaar voorbij zien komen? Begin alvast met speculeren en houd onze socials en updates in de box in de gaten. Eén ding is zeker: de CFA Open ’25 wordt weer een onvergetelijke ervaring!</p>

      <p>Tot snel in de box, Team CFA</p>
    `,
  },
  "maximale-uit-drie-trainingen-per-week": {
    title: "Zo haal je het maximale uit drie trainingen per week, zonder extra moeite",
    date: "2025-06-04",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/photo-community.webp",
    excerpt: "Drie keer per week trainen levert meer op dan vijf keer half werk. Zo haal je het maximale uit je trainingen bij CrossFit Alkmaar.",
    content: `
      <p>Drie keer per week trainen. Voor sommigen klinkt dat als veel. Voor anderen juist als weinig. Maar wat als we je vertellen dat drie keer per week precies genoeg is - mits je het goed aanpakt?</p>

      <p>Bij CrossFit Alkmaar zien we het dagelijks: leden die door slim en gestructureerd te trainen met drie trainingen per week fitter, sterker en gezonder worden dan ooit. En daar hoef je echt geen topsporter voor te zijn.</p>

      <p>Je hoeft alleen maar op te komen dagen - en op een slimme manier te trainen.</p>

      <h2>Meer trainen is niet altijd beter</h2>

      <p>Het idee dat je elke dag in de sportschool moet staan om iets te bereiken, is hardnekkig. Maar het is simpelweg niet waar. Zeker niet als je een druk leven hebt, met werk, gezin en andere verplichtingen.</p>

      <p>Wat wél werkt? Consistentie. Herhaling. Structuur.</p>

      <p>Drie keer per week trainen in een goed opgebouwd programma levert meer resultaat dan vijf keer zomaar wat doen. En je loopt veel minder risico op overbelasting of blessures.</p>

      <h2>Slimme programmering = maximaal rendement</h2>

      <p>Bij ons krijg je geen losse lessen met willekeurige oefeningen. Of elke dag een andere spiergroep. Je volgt een doordacht programma, waarin je lichaam wordt opgebouwd op een manier die je vol kunt houden.</p>

      <p>Elke training is onderdeel van een groter geheel. We combineren kracht, techniek en conditie - met voldoende rust en herstel. En we zorgen dat bewegingen terugkomen, zodat je beter wordt in wat je doet.</p>

      <p>Je traint niet harder, maar slimmer. En dát maakt het verschil.</p>

      <h2>Drie vaste momenten = nul twijfel</h2>

      <p>We zien het vaak: mensen die zelf moeten bedenken wanneer ze gaan trainen, schuiven het steeds op. Tot het er niet meer van komt. Want als alles flexibel is, dan wint je agenda.</p>

      <p>Daarom werken we in onze 28-Day Kickstart en in BUILD met vaste momenten. Je traint op vaste dagen, met een vaste coach, in een vaste groep. Geen keuzestress. Geen uitstelgedrag. Gewoon gaan.</p>

      <p>En omdat die structuur er is, bouw je een ritme op dat je kunt volhouden - ook op drukke dagen.</p>

      <h2>Herhaling geeft vertrouwen</h2>

      <p>Bij veel mensen ontstaat onzekerheid omdat ze steeds iets nieuws moeten doen. Nieuwe oefening, nieuwe set, nieuw tempo. Dat maakt het moeilijk om te weten waar je staat - of je vooruitgaat.</p>

      <p>Daarom bouwen wij bewegingen op. We herhalen ze. We zorgen dat je sterker wordt in de basisoefeningen, zoals squats, deadlifts, duwen en trekken.</p>

      <p>En je zult merken: dat vertrouwen in je lichaam groeit met de week.</p>

      <h2>Rustdagen zijn geen verlies - ze zijn nodig</h2>

      <p>Als je drie keer per week traint, heb je vier rustdagen. En dat voelt soms alsof je ‘niet genoeg doet’. Maar in werkelijkheid is het de perfecte balans.</p>

      <p>Je lichaam krijgt de kans om te herstellen. Spieren kunnen groeien. Je hoofd blijft fris. En je hebt tijd voor werk, gezin en ontspanning.</p>

      <p>Door goed te plannen, voelen die drie trainingen niet als een verplichting - maar als iets waar je naar uitkijkt.</p>

      <h2>En dan: je ziet en voelt het verschil</h2>

      <p>Na een paar weken merk je het al:</p>

      <ul>
        <li>Je bent minder snel moe</li>
        <li>Je tilt zwaarder zonder dat het zwaar voelt</li>
        <li>Je krijgt complimenten van collega’s of vrienden</li>
      </ul>

      <p>En het mooiste? Je hebt het gedaan met drie trainingen per week. Geen crashdieet. Geen extreem schema. Geen stress. Gewoon drie uur per week investeren in jezelf - op een manier die werkt.</p>

      <h2>Ook voor jou haalbaar</h2>

      <p>Of je nu begint met de 28-Day Kickstart of instapt in BUILD: drie keer per week is genoeg. Zolang je maar de juiste dingen doet, op het juiste moment, met de juiste begeleiding.</p>

      <p>En daar zorgen wij voor.</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, dan laten we je zien hoe drie trainingen per week je leven kunnen veranderen.</p>
    `,
  },
  "healthy-habits-challenge-28-day-kickstart": {
    title: "Hoe de Healthy Habits Challenge je helpt tijdens de 28-day kickstart",
    date: "2025-02-10",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Gezondheid",
    image: "/redesign/assets/header-voedingsadvies.jpg",
    excerpt: "Gezondere gewoontes opbouwen tijdens de 28-day kickstart: zo helpt de Healthy Habits Challenge van CrossFit Alkmaar je week voor week.",
    content: `
      <p>Gezonder eten, meer bewegen en je fitter voelen. Dat klinkt mooi, maar hoe pak je het aan? Tijdens de 28-day kickstart bij CrossFit Alkmaar helpen we je met een gestructureerd programma én de healthy habits challenge om op een eenvoudige en effectieve manier gezondere gewoontes op te bouwen.</p>

      <p>Op 10 maart start de volgende editie van de 28-day kickstart. In vier weken volg je twaalf trainingen in een vaste groep van maximaal vijf deelnemers. Naast de trainingen daag je jezelf uit met vier gezonde gewoontes - elke week voegen we er eentje toe. Aan het einde van de challenge voel je je fitter, energieker en heb je praktische tools om je gezonde leefstijl voort te zetten.</p>

      <p>Hier lees je welke gewoontes we tijdens de challenge aanpakken en hoe ze je helpen.</p>

      <h2>Week 1: geen alcohol en maximaal 2 koppen koffie per dag</h2>

      <p>Alcohol en overmatig koffie drinken kunnen je slaap, energie en herstel flink in de weg zitten. Daarom starten we de challenge met het schrappen van alcohol en beperken we koffie tot maximaal twee koppen per dag.</p>

      <p>Waarom deze gewoonte?</p>

      <ul>
        <li>Je lichaam herstelt beter na inspanning.</li>
        <li>Minder cafeïne vermindert stress en rusteloosheid.</li>
      </ul>

      <p>Tips:</p>

      <ul>
        <li>Heb je een vaste gewoonte om een drankje te drinken? Zoek een alternatief, zoals bruiswater met munt en limoen.</li>
      </ul>

      <h2>Week 2: geen snacks of snoep tussendoor</h2>

      <p>Snacken lijkt onschuldig, maar stiekem eten we vaak meer calorieën dan we doorhebben. Deze week focussen we op drie of vier volwaardige maaltijden per dag zonder tussendoortjes.</p>

      <p>Waarom deze gewoonte?</p>

      <ul>
        <li>Het helpt je om bewuster met je eetpatroon om te gaan.</li>
        <li>Minder ‘snackmomenten’ geeft je spijsvertering rust.</li>
      </ul>

      <p>Tips:</p>

      <ul>
        <li>Drink een glas water als je trek hebt tussen maaltijden. Vaak verwar je dorst met honger.</li>
      </ul>

      <h2>Week 3: eet meer groenten</h2>

      <p>Groenten zijn een van de belangrijkste bouwstenen voor een gezond lichaam. Deze week daag je jezelf uit om meer groenten te eten, bij elke maaltijd.</p>

      <p>Waarom deze gewoonte?</p>

      <ul>
        <li>Ze ondersteunen je immuunsysteem en helpen je beter herstellen.</li>
        <li>Meer groenten eten kan helpen om op een gezond gewicht te blijven.</li>
      </ul>

      <p>Tips:</p>

      <ul>
        <li>Varieer met verschillende kleuren groenten om een breed scala aan voedingsstoffen binnen te krijgen.</li>
      </ul>

      <h2>Week 4: 60 minuten bewegen per dag</h2>

      <p>In de laatste week ligt de focus op dagelijks bewegen. Naast de trainingen bij CrossFit Alkmaar is het belangrijk om elke dag minimaal 60 minuten actief te zijn.</p>

      <p>Waarom deze gewoonte?</p>

      <ul>
        <li>Het vermindert stress en verbetert je mentale gezondheid.</li>
        <li>Dagelijks bewegen bevordert je herstel.</li>
      </ul>

      <p>Tips:</p>

      <ul>
        <li>Neem vaker de trap of fiets in plaats van de auto.</li>
        <li>Zoek iets wat je leuk vindt - van dansen tot tuinieren - en maak bewegen onderdeel van je routine.</li>
      </ul>

      <h2>De kracht van een community</h2>

      <p>Een belangrijk onderdeel van de healthy habits challenge is de steun van de groep. In onze besloten online community delen deelnemers hun ervaringen, foto’s en tips om elkaar te motiveren. Samen trainen en elkaar ondersteunen zorgt ervoor dat je de gezonde gewoontes makkelijker volhoudt.</p>

      <p>Daarnaast stapelen we de gewoontes. Dat betekent dat je elke week een nieuwe gewoonte toevoegt, terwijl je de gewoontes van de vorige weken blijft volhouden. Door deze aanpak bouw je stap voor stap een gezondere leefstijl op zonder overweldigd te raken. Het gaat daarbij niet om het getal op de weegschaal, maar om hoe je je voelt. Natuurlijk kun je jezelf wegen aan het begin, maar je energie, kracht en herstel zijn veel belangrijkere graadmeters.</p>

      <h2>Wat deelnemers zeggen over de 28-day kickstart</h2>

      <p>"Ik was echt verrast hoe snel ik me fitter voelde. De gewoontes waren makkelijker vol te houden dan ik dacht, vooral door de steun van de groep!" - Ingrid</p>

      <p>"De combinatie van de trainingen en de gezonde gewoontes heeft me veel meer energie gegeven. Ik ben blij dat ik eindelijk de stap heb gezet." - Martijn</p>

      <p>"De gewoontes stapelen op elkaar, en voor je het weet doe je dingen die je een paar weken eerder niet voor mogelijk hield. Echt een aanrader!" - Sarah</p>

      <p>De 28 day kickstart is niet het enige dat we aanbieden bij CrossFit Alkmaar, maar wel een mooie stap als je al een tijdje zoekende bent en er zelf niet uitkomt. Laat ons je helpen, <a href="/free-intro">boek een vrijblijvende intake</a> en kom gewoon langs!</p>
    `,
  },
  "de-kracht-van-samen-trainen": {
    title: "Samen sterker in een kleine groep",
    date: "2025-07-14",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Programma's",
    image: "/redesign/assets/header-sgt.jpg",
    excerpt: "Small group training bij CrossFit Alkmaar: maximaal zes deelnemers, vaste sessies en een vaste coach. Waarom samen trainen in een kleine groep zo goed werkt.",
    content: `
      <p>Je kent het wel: je staat in een grote groepsles, mist net de uitleg over de volgende oefening en voor je het weet doet iedereen wat anders. Je probeert mee te doen, maar je vraagt je af of je het goed uitvoert. Na de les fiets je naar huis met een half fijn gevoel. Goed gezweet, maar heb je nu echt stappen gezet? In BUILD, onze small-group training bij CrossFit Alkmaar, voorkomen we precies dat gevoel. Met maximaal zes deelnemers, drie vaste sessies per week en één vaste coach haal je uit elke training precies wat nodig is - niets minder, niets meer.</p>

      <h2>Waarom zes het magische getal is</h2>

      <p>Met zes sporters is er ruimte voor feedback in elke set, maar nog genoeg groepsenergie om je uit te dagen. Je hoort je naam, krijgt gerichte aanwijzingen en voelt je onderdeel van een team dat samen vooruit wil. De coach ziet onmiddellijk wanneer een knie naar binnen zakt of je buikspanning weglekt. Eén korte cue volstaat om de rep te redden. Die micro-correcties maken het verschil tussen “ik deed een oefening” en “ik werd beter in bewegen”.</p>

      <h2>Drie vaste sessies, nul twijfel</h2>

      <p>Discipline draait minder om wilskracht en meer om afspraken. Kies je maandag-woensdag-vrijdag 18.00, dan staat dat gewoon in je agenda. Je hoeft nooit te zoeken naar losse plekjes, je weet precies wanneer je sport en de rest van je leven draait eromheen. Leden melden dat ze daardoor juist tijd overhouden: geen last-minute boekingen meer, geen “ik zie wel hoe laat het uitkomt”.</p>

      <p>Elke sessie volgt dezelfde structuur:</p>

      <ul>
        <li>Techniekblok - tempo-variaties, pauze-herhalingen of lichte complexes om vorm te verfijnen.</li>
        <li>Krachtblok - 3-5 werksets op percentages die passen bij de fase van de cyclus.</li>
        <li>Metcon - 8-12 min hoog tempo, bewegingen afgestemd op je niveau.</li>
        <li>Cooldown - ademhaling en lichte stretching om herstel te starten.</li>
      </ul>

      <h2>Acht weken: van fundament tot piek</h2>

      <p>BUILD werkt in cycli van acht weken. De eerste vier weken verhogen we volume en leren we tempo-controle: 31X1-squats, pause-deadlifts, strict-press holds. Week vijf is een deload; je tilt lichter, maar verfijnt vorm. De laatste drie weken stijgt intensiteit - het volume zakt, het gewicht gaat omhoog. Dat golfpatroon geeft weefsel en zenuwstelsel tijd om te herstellen én sterker terug te komen.</p>

      <p>Voorbeeld squat-blok:</p>

      <ul>
        <li>Week 2 - 5×8 @ 65 %, 31X1</li>
        <li>Week 3 - 5×6 @ 70 %, 31X0</li>
        <li>Week 4 - 4×5 @ 75 %, 21X0</li>
        <li>Week 5 - Deload 3×5 @ 60 %, 31X1</li>
        <li>Week 6 - 4×5 @ 77 %, 21X0</li>
        <li>Week 7 - 5×3 @ 82 %, 11X0</li>
        <li>Week 8 - 1RM-test of 3-RM-rep-out</li>
      </ul>

      <p>Zonder pieken en dalen in belasting loop je eerder vast of raak je geblesseerd; met periodisering voelen de zware weken uitdagend maar beheersbaar.</p>

      <h2>Accountability: iedereen ziet je komen (en gaan)</h2>

      <p>In een grote gym merkt niemand als je overslaat. In een BUILD-groep wel. Mis je woensdag? Donderdag krijg je een appje: “Alles goed? Morgen ben je er toch?” Die lichte sociale druk helpt op dagen dat motivatie laag is. Tegelijk vier je samen successen. Wanneer Jolanda voor het eerst vijf strakke pull-ups haalt, juicht de hele groep. Positieve associatie plakt aan de training en verhoogt opkomstcijfers - bij ons gemiddeld 90 procent over zes maanden.</p>

      <h2>Persoonlijke reloads zonder camera’s</h2>

      <p>We filmen geen lifts - jij hoeft niet op video om feedback te krijgen. De coach staat letterlijk naast je. Kom je de halter niet stabiel uit het rek? Dan krijg je direct een regressie: lichter gewicht, tempo terug of extra spotter. Heb je juist een perfecte set? Dan stijgt het percentage in de volgende oefencyclus. Zo individualiseren we zonder high-tech, alleen met oplettende coaching.</p>

      <h2>Herstel geïntegreerd</h2>

      <p>Elke sessie eindigt met een korte ademhaling reset: vier tellen in, zes uit, drie rondes. Daarna mobiliteit voor het belaste patroon. Combineer dat met de voedingscheck-in vanuit de Kickstart (maandelijkse update optioneel) en je hebt een herstelplan zonder extra rompslomp. Gemiddelde data: BUILD-leden melden 30 procent minder spierpijn na week drie vergeleken met hun eigen oude trainingsschema’s.</p>

      <h2>Resultaten die tellen</h2>

      <p>Minder gymtijd, minder blessures, méér kilo’s op de stang.</p>

      <h2>Gratis intake: kijken of het past</h2>

      <p>Voor je instapt, plannen we een gratis gesprek. We bespreken je doelen, stressniveau, mobiliteit en agenda. Is Start-24 (drie sessies p/w) haalbaar? Past de squat-cyclus bij je lijf? Samen bepalen we het beste instapmoment - soms direct BUILD, soms eerst de 28-Day Kickstart.</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, we zetten de koffie klaar.</p>
    `,
  },
  "zo-ziet-een-intake-eruit": {
    title: "Zo ziet een intake er bij ons uit",
    date: "2025-10-22",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Dit is CFA",
    image: "/redesign/assets/header-onze-leden.jpg",
    excerpt: "Geen losse proefles, maar een goede start: zo ziet de intake bij CrossFit Alkmaar eruit, stap voor stap.",
    content: `
      <p>Een goede start voorkomt gedoe. Daarom beginnen we bij CrossFit Alkmaar niet met een losse proefles, maar met een intake. In die intake bepalen we samen wat de beste route is naar resultaat: het reguliere programma, de 28-Day Kickstart om ritme te bouwen, of BUILD als je extra structuur wilt. In deze blog neem ik je stap voor stap mee door de intake, zodat je precies weet wat je kunt verwachten.</p>

      <p>We starten met een gesprek. Kort, to the point en gericht op jouw context. Wat is je trainingsverleden? Waar loop je tegenaan in het dagelijks leven? Wat wil je bereiken en waarom? We vragen door, omdat de reden onder je doel vaak bepaalt wat werkt. “Ik wil afvallen” is anders dan “ik wil weer pijnvrij sporten” of “ik wil mentaal sterker worden”. We vertalen dat naar concrete, meetbare doelen voor de eerste negentig dagen.</p>

      <p>Daarna doen we een eenvoudige bewegingsscreening. Geen medische keuring, wel een slimme check van wat er écht toe doet. Denk aan een air squat voor mobiliteit en controle, een heupscharnier voor de basis van tillen, een overhead reach voor schouderfunctie en een plankvariatie voor rompstabiliteit. We kijken naar bewegingskwaliteit, niet naar records. Zo zien we meteen waar we op moeten letten in je eerste weken. Heb je een blessurehistorie? Dan passen we de screening aan en bouwen we vanaf dag één slim op.</p>

      <p>Vervolgens leggen we onze manier van werken uit. We trainen geprogrammeerd. Dat betekent dat elke week en maand een doel heeft: kracht, techniek, conditie - in wisselende accenten. We vermijden onnodige herhaling van dezelfde spiergroepen op opeenvolgende dagen en we scheiden de krachtblokken van de WOD zó dat ze elkaar versterken, niet herhalen. Elke les is op het uur precies klaar en we sluiten af met gerichte stretches. Je weet dus altijd waar je aan toe bent, ook qua tijd.</p>

      <p>Dan de keuze voor jouw instaproute. Als je nog geen ritme hebt of lang niet hebt getraind, dan is de 28-Day Kickstart ideaal: twaalf trainingen in vier weken, inclusief coaching op gewoontes. Je leert de basis, bouwt conditie op en ontwikkelt een vaste trainingsplek in je agenda. Start je liever in kleine, vaste groep met meer individuele aandacht? Dan is BUILD de beste keuze: maximaal zes deelnemers, een coach die elke set overziet en een cyclus van acht weken met een duidelijke focus (bijvoorbeeld squats of deadlifts) terwijl je totaalfitheid breed wordt ontwikkeld. Ben je al gevorderd en past het reguliere rooster bij je? Dan stap je in onze groepstrainingen met professionele begeleiding en heldere instructies.</p>

      <p>Praktisch maken we het meteen concreet. Je prikt drie vaste trainingsmomenten in de week die daadwerkelijk passen bij je agenda. We bespreken je herstel: slaap, voeding, werkstress. Verwacht geen preek, wel praktische afspraken: een eiwitrijk ontbijt, je koffie beperken, water bijhouden, en dagelijks een korte wandeling. Kleine veranderingen met groot effect. We plannen ook direct je eerste 90-day check-in, zodat er een duidelijke horizon staat.</p>

      <p>Een intake is geen verkooptruc. We vertellen je eerlijk wat je nodig hebt en wat niet. Als een blok personal training jouw techniek in één maand veiliger en efficiënter maakt, dan zeggen we dat. Als het niet nodig is, zeggen we dat ook. Onze ervaring - ook uit omgevingen waar plannen onder druk de norm was - leerde ons dat heldere keuzes beter zijn dan vage beloftes. Die mindset nemen we mee de gym in: duidelijke standaard, duidelijke stappen, duidelijke feedback.</p>

      <p>Na de intake ga je naar je eerste training met vertrouwen. Je coach kent je aandachtspunten en je doel, jij kent de structuur van de les. De warming-up maakt je klaar voor het echte werk, het techniek- of krachtdeel bouwt fundament, en de WOD laat je zweten zonder dat de vorm instort. Je sluit af, je voelt je scherp, en je bent op tijd de deur uit. De dag erna kun je gewoon weer werken, spelen met de kinderen of die meeting leiden - alleen met meer energie.</p>

      <p>Wil je dat we met je meekijken naar de beste start? Plan je intake. We maken het helder en persoonlijk, en je loopt de deur uit met een plan dat werkt in jouw week.<a href="/free-intro">Plan hier je gratis intake</a>.</p>
    `,
  },
  "mindset-de-sleutel-tot-succes": {
    title: "6 mentale geheimen om je training vol te houden en langdurige vooruitgang te boeken",
    date: "2024-11-20",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/community-3.jpg",
    excerpt: "Gemotiveerd blijven en langdurige vooruitgang boeken: zes mentale strategieën uit de praktijk van CrossFit Alkmaar.",
    content: `
      <p>Iedereen die al een tijdje traint kent het gevoel: het is niet altijd makkelijk om gemotiveerd te blijven en je trainingen consistent vol te houden. Soms lijkt je progressie langzaam, maar met de juiste mentale strategieën kun je jezelf blijven verbeteren en langdurige progressie boeken. Bij CrossFit Alkmaar hebben we veel geleerd over het belang van mentale kracht, zowel vanuit onze ervaring in de special forces als vanuit onze dagelijkse trainingen in de gym. Hier delen we zes mentale strategieën die je helpen om je trainingen vol te houden en je fitnessdoelen te bereiken op de lange termijn.</p>

      <h2>1. Focus op kleine overwinningen</h2>

      <p>Wanneer je lange tijd aan je fitnessdoelen werkt, kan het moeilijk zijn om in het moment te blijven. Het is makkelijk om te verlangen naar snelle resultaten, maar de sleutel tot succes is om kleine overwinningen te vieren. Focus op de vooruitgang die je elke week boekt, zoals het verbeteren van je techniek, het verhogen van je gewicht, of het vergroten van je uithoudingsvermogen. In plaats van je alleen maar te richten op het einddoel, kun je de kleine successen onderweg waarderen.</p>

      <p>Bij CrossFit Alkmaar zien we vaak dat leden, zoals Bert, trots zijn op hun vooruitgang, zelfs als ze niet meteen grote prestaties neerzetten. Bert, bijvoorbeeld, heeft geen specifieke ambities op het gebied van zware gewichten, maar hij is er trots op dat hij zich fitter voelt dan veel van zijn leeftijdsgenoten. Door de kleine successen te waarderen, blijft hij gemotiveerd om te blijven trainen.</p>

      <h2>2. Bouw mentale veerkracht op</h2>

      <p>Het volhouden van een trainingsroutine vereist mentale veerkracht. Je zult onvermijdelijk momenten van twijfel of vermoeidheid ervaren, maar het is belangrijk om te leren hoe je deze momenten kunt overwinnen. Het ontwikkelen van mentale veerkracht is net zo belangrijk als het trainen van je spieren.</p>

      <p>In de special forces werd ons geleerd om te focussen op wat we wél konden doen, zelfs als de omstandigheden zwaar waren. Dit principe geldt ook voor training. Wanneer je het moeilijk hebt, concentreer je dan niet op de obstakels, maar op wat je wel kunt bereiken. Dit zal je helpen om door te zetten en je doelen op de lange termijn te bereiken.</p>

      <h2>3. Stel realistische doelen en blijf flexibel</h2>

      <p>Langdurige vooruitgang komt niet altijd van de ene op de andere dag. Het stellen van realistische doelen en het aanpassen van je verwachtingen helpt je om gemotiveerd te blijven, zelfs als de vooruitgang langzaam lijkt te gaan. We hebben geleerd om flexibel te blijven en je doelen bij te stellen als dat nodig is.</p>

      <p>In plaats van te focussen op het behalen van een specifieke prestatie, zoals de perfecte snatch, kun je een bredere visie hebben: fitter worden, sterker worden, of gezonder leven. Het stelt je in staat om langere tijd door te gaan zonder teleurstelling en zorgt ervoor dat je een blijvende relatie met training ontwikkelt.</p>

      <h2>4. Maak het deel van je routine</h2>

      <p>Het opbouwen van consistentie is cruciaal voor het behalen van langdurige progressie. Hoe meer CrossFit training deel uitmaakt van je dagelijkse of wekelijkse routine, hoe makkelijker het wordt om door te zetten. Wanneer training een vast onderdeel van je leven wordt, hoef je minder na te denken over motivatie; je doet het gewoon.</p>

      <p>In de special forces leerden we ook om onvoorwaardelijk te handelen: het was geen optie om niet op te treden wanneer dat nodig was. Op dezelfde manier kun je van je trainingsroutine een gewoonte maken. Het vergt geen motivatie, maar discipline. Dit zorgt ervoor dat je elke week vooruitgang boekt, zelfs als het lastig wordt.</p>

      <h2>5. Wees geduldig met jezelf</h2>

      <p>Langdurige vooruitgang vergt tijd, en soms zie je pas na een tijdje de vruchten van je harde werk. Het is belangrijk om geduldig te zijn en jezelf niet te veel druk op te leggen. Geef jezelf de ruimte om te leren en je lichaam de tijd om te herstellen.</p>

      <p>Toen ik in de special forces werkte, was geduld essentieel. We hadden geen andere keuze dan geduldig te zijn en stap voor stap te werken naar ons doel. Dezelfde benadering kan helpen in de gym. Het is belangrijk om te begrijpen dat groei niet altijd direct zichtbaar is, maar dat elke stap in de juiste richting telt.</p>

      <h2>6. Omarm de reis, niet alleen het resultaat</h2>

      <p>Het ultieme doel is niet alleen de fysieke verandering, maar ook de persoonlijke groei die je doormaakt. Het doorzetten van je trainingen en het omgaan met de ups en downs van het proces maakt je sterker, niet alleen fysiek, maar ook mentaal.</p>

      <p>Bij CrossFit Alkmaar zien we dat de meeste leden niet alleen naar het einddoel streven, maar ook genieten van het proces. Het is de reis die telt, niet alleen de bestemming. Jezelf uitdagen en elke week een beetje beter worden zorgt ervoor dat je uiteindelijk je doelen bereikt, terwijl je onderweg blijft leren en groeien.</p>

      <h2>Langdurige vooruitgang met CrossFit Alkmaar</h2>

      <p>De sleutel tot succes in training en in het leven ligt in het volhouden van je trainingen, het ontwikkelen van een sterke mentale veerkracht en het omarmen van de reis. Door kleine overwinningen te vieren, geduldig te zijn met jezelf, en je training als een routine te maken, kun je op de lange termijn duurzame vooruitgang boeken.</p>

      <p>Bij CrossFit Alkmaar ondersteunen we je niet alleen fysiek, maar ook mentaal, zodat je je fitnessdoelen kunt bereiken en een gezonde, actieve levensstijl kunt behouden. Kom langs voor een <a href="/free-intro">gratis intake</a> en ontdek hoe wij je kunnen helpen je doelen op lange termijn te behalen.</p>
    `,
  },
  "groepslessen-vs-alleen-trainen": {
    title: "Wat je mist als je altijd alleen traint",
    date: "2025-05-05",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/photo-box3.webp",
    excerpt: "Alleen trainen lijkt handig, maar je mist structuur, feedback en motivatie. Dit is het verschil met trainen in een kleine groep bij CrossFit Alkmaar.",
    content: `
      <p>Je bent iemand die zelfstandig aan de slag gaat. Je hebt discipline. Je weet hoe je een workout opzet. Of je probeert het gewoon. Filmpje erbij. Een schema van internet. En je bent toch bezig, dus dat is goed… toch?</p>

      <p>Misschien. Maar als je eerlijk bent, mis je soms ook iets. Twijfel je of je goed bezig bent. Of je vooruitgaat. Of je techniek klopt. Of je te weinig doet - of juist te veel.</p>

      <p>En dat is precies waar het misgaat. Want als je altijd alleen traint, mis je niet alleen begeleiding. Je mist ook structuur, feedback, motivatie en resultaat.</p>

      <h2>Alleen trainen = alles zelf doen</h2>

      <p>Als je alleen traint, moet je alles zelf beslissen. Welke oefeningen? Hoe vaak? Hoe zwaar? Hoe snel opbouwen? Wat als iets niet goed voelt? Wat als je een mindere dag hebt?</p>

      <p>Het lijkt handig - vrijheid en flexibiliteit - maar in de praktijk raak je sneller verdwaald. Je blijft steken in wat je al kent. Je herhaalt wat comfortabel voelt. En daardoor boek je minder vooruitgang dan je zou willen.</p>

      <p>In BUILD nemen we die twijfel weg. Je traint in een vaste kleine groep van maximaal zes mensen, onder begeleiding van een coach die je kent. Alles wordt voor je uitgedacht. Jij hoeft het alleen uit te voeren.</p>

      <h2>Zonder begeleiding mis je de details</h2>

      <p>Een kleine aanpassing in techniek kan het verschil maken tussen vooruitgang en frustratie. Tussen sterker worden en geblesseerd raken. Maar als je alleen traint, zie je dat vaak niet. Je voelt dat iets niet lekker gaat, maar je weet niet wat je moet veranderen.</p>

      <p>In BUILD letten we op die details. Je krijgt correctie waar nodig, aanmoediging als het zwaar wordt, en aanpassing als het even niet lukt. Je leert bewegen met aandacht. En daardoor voel je je zekerder - in de gym én daarbuiten.</p>

      <h2>Zonder structuur blijf je steken</h2>

      <p>Alleen trainen betekent vaak: steeds opnieuw beginnen. Een paar weken knallen, dan verslapt het. Dan weer opnieuw. En dat patroon herhaalt zich.</p>

      <p>In BUILD volg je een programma van acht weken, met elke periode een nieuwe focus. Bijvoorbeeld kracht in je benen, of meer controle over je core. Ondertussen train je je hele lijf, maar wél met richting. Je merkt verschil. Je ziet vooruitgang. En dat motiveert.</p>

      <h2>Je mist motivatie van de groep</h2>

      <p>Je hoeft geen extravert groepsmens te zijn om te profiteren van trainen in een kleine groep. Het gaat niet om competitie. Het gaat om samen ergens aan werken. Je kent de mensen. Je komt op vaste tijden. En ook op dagen dat je geen zin hebt, weet je: zij zijn er ook. Dus jij ook.</p>

      <p>En dat is precies waarom het werkt. Omdat je onderdeel bent van iets.</p>

      <h2>Je mist iemand die je afremt (en dat is geen overbodige luxe)</h2>

      <p>Alleen trainen kan ook betekenen dat je juist te hard gaat. Te vaak. Te zwaar. Te weinig rust. En dan kom je weer in de gevarenzone: pijntjes, overtraining, motivatieverlies.</p>

      <p>Een goede coach weet wanneer je gas mag geven - en wanneer je moet afremmen. In BUILD is die balans er altijd. Zodat je vooruitgaat, zonder te overdrijven.</p>

      <h2>Eerst kennismaken, dan instappen</h2>

      <p>We starten altijd met een intake. We willen weten wat jij nodig hebt. Wat je al geprobeerd hebt. Waar je naartoe wilt. En dan bepalen we samen of BUILD past bij jou - en hoe we je trainingsmomenten het beste in kunnen plannen.</p>

      <p>Want je hoeft het niet alleen te doen. Niet meer.</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, dan laten we je ervaren wat trainen met begeleiding écht voor je doet.</p>
    `,
  },
  "afvallen-in-alkmaar": {
    title: "Afvallen in Alkmaar: waarom alleen minder eten niet werkt",
    date: "2025-11-25",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Gezondheid",
    image: "/redesign/assets/event-voedingsadvies.jpg",
    excerpt: "Afvallen in Alkmaar? Alleen minder eten werkt niet. Waarom krachttraining, structuur en begeleiding het verschil maken.",
    content: `
      <p>Je wilt afvallen. Je woont in of rond Alkmaar. En als je heel eerlijk bent: dit is niet de eerste keer dat je begint. Minder eten. Strenger dieet. Even geen alcohol. Eerste weken gaat het goed. De weegschaal doet wat jij wilt. En dan komt het moment dat alles weer langzaam teruggaat naar “normaal”. De kilo’s ook.</p>

      <p>De waarheid is hard, maar simpel: alleen minder eten werkt niet. Tenminste, niet op de lange termijn. Afvallen in Alkmaar is niet je echte probleem. Op een gezonde manier op gewicht blijven, dát is de uitdaging.</p>

      <p>Bij CrossFit Alkmaar zien we elke week mensen binnenkomen met hetzelfde verhaal. Ze falen niet omdat ze slap zijn. Ze falen omdat het plan niet klopt.</p>

      <h2>1. Je lijf is geen rekenmachine</h2>

      <p>In theorie is het makkelijk: minder calorieën erin dan eruit, en je valt af. Klaar. In de praktijk werkt je lijf anders. Als jij heel weinig gaat eten, denkt je lijf niet: “Top, zomer is in aantocht.” Je lijf denkt: “Alarm. We moeten zuinig doen.”</p>

      <p>Gevolg:</p>

      <ul>
        <li>je krijgt meer trek</li>
        <li>je verbranding gaat omlaag</li>
        <li>je raakt sneller geïrriteerd</li>
      </ul>

      <p>Je houdt het misschien een paar weken vol. Daarna gaat de rem eraf. En precies daar knalt alles er weer bij.</p>

      <p>Afvallen in Alkmaar begint dus niet bij “zo min mogelijk eten”, maar bij slim eten en slim trainen. Zodat je lijf snapt: dit is veilig, dit is vol te houden.</p>

      <h2>2. Zonder spiermassa wordt afvallen een gevecht</h2>

      <p>Veel diëten richten zich alleen op de weegschaal. Gewicht omlaag? Mooi. Maar dat zegt niks over wat je precies kwijt bent: vet of spier.</p>

      <p>Als je alleen minder eet en vooral cardio doet, loop je een groot risico:</p>

      <ul>
        <li>je verliest wat vocht</li>
        <li>je verliest vet, maar minder dan je denkt</li>
      </ul>

      <p>Spieren zijn duur in onderhoud voor je lijf. Als jij weinig eet en niet aan krachttraining doet, denkt je lijf: die spieren zijn luxe, die kunnen weg. Gevolg:</p>

      <ul>
        <li>je wordt slapper</li>
        <li>je komt na je dieet sneller weer aan</li>
      </ul>

      <p>Daarom zetten we bij CrossFit Alkmaar krachttraining centraal. Niet omdat je een bodybuilder moet worden, maar omdat je spiermassa wilt opbouwen of in elk geval behouden. Dat is de motor onder je verbranding.</p>

      <h2>3. Je omgeving saboteert je zonder dat je het merkt</h2>

      <p>Je woont in Alkmaar. Je werkt, je hebt een gezin, sociale afspraken, misschien ploegendiensten of onregelmatige uren. Je omgeving helpt meestal niet mee:</p>

      <ul>
        <li>borrels</li>
        <li>drukke dagen waarop koken erbij inschiet</li>
        <li>“kom, eentje kan wel”</li>
      </ul>

      <p>Je hoeft niet in een bunker te wonen en nooit meer iets lekkers te nemen. Maar als alles om je heen je continu uit je ritme trekt, wordt afvallen een uitputtingsslag.</p>

      <p>Daarom werkt het beter als je:</p>

      <ul>
        <li>een plan hebt voor je week</li>
        <li>mensen om je heen hebt die snappen waar je mee bezig bent</li>
      </ul>

      <p>We zien dat leden in onze small group training en groepen veel makkelijker op koers blijven. Niet omdat ze heiligen zijn, maar omdat hun omgeving in de gym hen helpt scherp te blijven.</p>

      <h2>4. Waarom alleen “discipline” niet genoeg is</h2>

      <p>Veel mensen die bij ons binnenkomen, geven zichzelf er flink van langs. “Ik heb geen ruggengraat.” “Ik ben slap.” Dat soort teksten. Onzin. Je hebt geen gebrek aan discipline. Je hebt een gebrek aan structuur.</p>

      <p>Kijk eens naar je werk. Daar heb je:</p>

      <ul>
        <li>deadlines</li>
        <li>collega’s die op je rekenen</li>
        <li>taken die moeten gebeuren</li>
      </ul>

      <p>Je redt het daar ook niet op motivatie alleen. Er is een systeem. Bij afvallen moet dat net zo zijn:</p>

      <ul>
        <li>simpele afspraken over eten</li>
        <li>iemand die meekijkt</li>
        <li>een plan voor wat je doet als het misgaat</li>
      </ul>

      <p>Dat is wat we proberen te bouwen bij CrossFit Alkmaar. Minder zweverig, meer praktisch.</p>

      <h2>5. Hoe pakken wij afvallen in Alkmaar aan?</h2>

      <p>We beginnen niet met een weegschaal. We beginnen met een gesprek. In onze gratis intake vragen we:</p>

      <ul>
        <li>wat heb je al geprobeerd?</li>
        <li>waar ging het mis?</li>
        <li>hoe ziet je week eruit?</li>
      </ul>

      <p>Daarna kijken we wat logisch is:</p>

      <ul>
        <li>starten in BUILD small group</li>
        <li>of eerst meedoen aan de 28-Day Kickstart</li>
      </ul>

      <p>In de 28-Day Kickstart combineren we:</p>

      <ul>
        <li>simpele afspraken over eten die je vol kunt houden</li>
        <li>coaching en check-ins</li>
        <li>een duidelijke start- en einddatum</li>
      </ul>

      <p>Geen superdieet. Geen shakes. Geen “nooit meer brood”. Wel: heldere lijnen, duidelijk programma, mensen om je heen.</p>

      <h2>6. Afvallen zonder jezelf te slopen</h2>

      <p>Afvallen in Alkmaar moet niet betekenen dat je nergens meer plezier aan beleeft. Als je dieet je sociale leven sloopt, hou je het niet vol. Klaar.</p>

      <p>Belangrijke principes die we meegeven:</p>

      <ul>
        <li>focus op eiwitten, groente en voldoende eten rond je trainingen</li>
        <li>plan je uitspattingen in, in plaats van dat ze je overkomen</li>
        <li>ga niet compenseren met extreem sporten; je lijf is geen strafkamp</li>
      </ul>

      <p>We hebben liever dat je 80% van de tijd goede keuzes maakt, dan dat je 100% perfect gaat voor vier weken en daarna alles laat vallen.</p>

      <h2>7. De rol van training bij afvallen</h2>

      <p>Training is niet alleen “calorieën verbranden”. Training zorgt ook voor:</p>

      <ul>
        <li>betere hormoonbalans</li>
        <li>minder stress</li>
        <li>beter slapen</li>
      </ul>

      <p>Als jij twee tot drie keer per week traint bij ons, zien we meestal dit:</p>

      <ul>
        <li>je houding wordt beter</li>
        <li>je wordt sterker</li>
        <li>je krijgt meer vertrouwen</li>
      </ul>

      <p>Dat vertrouwen is misschien wel het belangrijkste. Je merkt: ik kan dit. Dat maakt het makkelijker om ook in de keuken andere keuzes te maken.</p>

      <h2>FAQ</h2>

      <p><strong>1. Hoeveel kilo kan ik afvallen in een maand?</strong> Dat verschilt per persoon, maar een veilige richtlijn is 0,5 tot 1 kilo per week. We mikken liever op langzaam en blijvend, dan op snel en tijdelijk.</p>

      <p><strong>2. Moet ik een streng dieet volgen als ik bij jullie train?</strong> Nee. We werken met simpele, haalbare aanpassingen. Geen extreem dieet. Wel duidelijke afspraken die passen bij jouw leven.</p>

      <p><strong>3. Kan ik bij jullie trainen als ik flink overgewicht heb en weinig conditie?</strong> Ja. We passen oefeningen aan en bouwen rustig op. Je hoeft niet fit te zijn om te mogen starten. Dat is juist waarom wij er zijn.</p>

      <p><strong>4. Moet ik drie keer per week komen om resultaat te zien?</strong> Twee keer per week is een goed begin. Drie keer is ideaal. Tijdens de intake kijken we wat realistisch is voor jouw agenda.</p>

      <p><strong>5. Wat is precies de 28-Day Kickstart?</strong> Dat is een programma van vier weken waarin je 3x per week traint in een kleine groep, met coaching en eenvoudige leefstijlaanpassingen. Een ideale start als je serieus wilt afvallen in Alkmaar, maar nog zoekende bent naar ritme. Meer info: <a href="/kickstart">28-Day Kickstart</a>.</p>

      <p>Wil jij afvallen in Alkmaar zonder nóg een crashdieet? Plan dan een <a href="/free-intro">gratis intake</a> bij CrossFit Alkmaar. We kijken samen wat voor jou wél werkt: training, structuur en een plan dat past bij jouw leven.</p>
    `,
  },
  "personal-training-alkmaar": {
    title: "Personal training Alkmaar: wanneer één-op-één trainen de beste keuze is",
    date: "2025-11-26",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Programma's",
    image: "/redesign/assets/header-personal-training.jpg",
    excerpt: "Personal training in Alkmaar: wanneer is één-op-één trainen de slimste keuze? Eerlijk advies van CrossFit Alkmaar.",
    content: `
      <p>De meeste mensen redden het prima in een groep. Maar soms is één-op-één gewoon slimmer. Je herkent het misschien. Drukke baan. Gezin. Onregelmatige uren. Je rug of schouder is al eens naar de fysiotherapeut geweest. Je wilt geen risico meer. Je wilt duidelijkheid en resultaat.</p>

      <p>Dan is personal training in Alkmaar vaak de snelste route. Niet de goedkoopste, wel de meest directe.</p>

      <p>Bij CrossFit Alkmaar werken we dagelijks met mensen die bewust kiezen voor één-op-één. Vaak tijdelijk. Soms voor de lange termijn. Altijd met een duidelijk doel.</p>

      <h2>1. Wanneer is personal training echt zinvol?</h2>

      <p>Je hebt geen personal trainer nodig om een beetje fitter te worden. Dat lukt in een goede groep ook. Maar personal training is wél slim als:</p>

      <ul>
        <li>je na een operatie weer veilig wilt opbouwen</li>
        <li>je een heel concreet doel hebt met een duidelijke deadline</li>
        <li>je geen zin hebt om na te denken, maar gewoon wilt doen wat werkt</li>
        <li>je merkt dat je in een groep nét te onzeker of geremd bent</li>
      </ul>

      <p>We hebben leden die eerst drie tot zes maanden één-op-één trainen en daarna doorstromen naar small group of de reguliere lessen. Die combinatie werkt goed.</p>

      <h2>2. Geen generiek schema, maar jouw plan</h2>

      <p>Een standaard schema kun je overal vandaan halen. Een goede personal trainer kijkt verder:</p>

      <ul>
        <li>hoeveel stress draag je mee?</li>
        <li>hoe slaap je?</li>
        <li>welke oefeningen kun je wel en niet goed verdragen?</li>
        <li>wat is je echte doel, onder de “ik wil fitter worden”-laag?</li>
      </ul>

      <p>Op basis daarvan maken we bij CrossFit Alkmaar een plan:</p>

      <ul>
        <li>welke focus we kiezen (kracht, vetverlies, herstel, performance)</li>
        <li>welke mijlpalen we gebruiken om voortgang te meten</li>
      </ul>

      <p>Geen onzin. Geen circuskunstjes. Gewoon een helder traject.</p>

      <h2>3. Personal training is ook mentale rust</h2>

      <p>Je komt binnen. Je hoeft niets te bedenken. Geen twijfel over welke oefening, hoeveel gewicht, hoeveel herhalingen. Je personal trainer:</p>

      <ul>
        <li>past ter plekke aan als je slecht hebt geslapen of pijn hebt</li>
        <li>zet je soms nét over een mentale drempel</li>
        <li>remt je af als je te hard gaat</li>
      </ul>

      <p>Dat geeft rust. Zeker als de rest van je leven al vol is.</p>

      <h2>4. Voorbeelden van doelen bij personal training in Alkmaar</h2>

      <p>Doelen die we vaak zien bij personal training:</p>

      <ul>
        <li>“Ik wil sterker worden voor mijn werk in de zorg of als agent/brandweerman.”</li>
        <li>“Ik wil een stevige basis opbouwen voordat ik in een groep stap.”</li>
        <li>“Ik wil afvallen en heb iemand nodig die me scherp houdt.”</li>
      </ul>

      <p>Soms is het doel klein: weer durven tillen zonder angst. Soms is het groot: een obstacle run, een test of selectie, of gewoon weer volledig vertrouwen in je lijf.</p>

      <h2>5. Hoe personal training bij CrossFit Alkmaar eruitziet</h2>

      <p>Bij ons betekent personal training:</p>

      <ul>
        <li>sessies van meestal 60 minuten</li>
        <li>combinatie van kracht, conditie en mobiliteit</li>
        <li>aandacht voor techniek, houding en ademhaling</li>
        <li>regelmatig een korte check: hoe gaat het buiten de gym?</li>
      </ul>

      <p>Je traint in dezelfde ruimte als de andere groepen, maar de focus ligt volledig op jou. Geen ingewikkelde apparaten, maar functionele oefeningen die je in het dagelijks leven terugziet.</p>

      <h2>6. Wat kost personal training in Alkmaar?</h2>

      <p>Laat het helder zijn: personal training is een investering. Maar als je rekent in tijd en resultaat, is het vaak goedkoper dan jaren klooien:</p>

      <ul>
        <li>fysio’s omdat je weer ergens doorheen bent gegaan</li>
        <li>opnieuw beginnen omdat je het toch hebt laten liggen</li>
      </ul>

      <p>In de gratis intake zijn we gewoon eerlijk over de kosten en wat je ervoor terugkrijgt. Daarna beslis jij.</p>

      <h2>7. Personal training als opstap naar small group of groepen</h2>

      <p>Je hoeft niet te kiezen: óf altijd personal training óf altijd groep. Een traject dat vaak goed werkt:</p>

      <ul>
        <li>daarna instromen in BUILD small group of de reguliere lessen</li>
        <li>af en toe een losse personal trainingssessie om weer scherp te stellen</li>
      </ul>

      <p>Zo heb je het beste van beide werelden: persoonlijke aandacht én de energie van een groep.</p>

      <h2>FAQ</h2>

      <p><strong>1. Hoe vaak moet ik personal training doen voor resultaat?</strong> Eén keer per week is een goede start, twee keer per week is ideaal als je snel vooruitgang wilt. We kijken samen wat past bij jouw doel en agenda.</p>

      <p><strong>2. Is personal training alleen voor “topsporters”?</strong> Nee. De meeste van onze personal training-klanten zijn juist drukke mensen met werk, gezin en weinig tijd. Ze willen gewoon dat het werkt, zonder gedoe.</p>

      <p><strong>3. Kan ik personal training combineren met de groepen?</strong> Ja. Dat doen we vaak. Bijvoorbeeld één keer per week personal training en één of twee keer per week meedraaien in de groepen of BUILD.</p>

      <p><strong>4. Ik heb blessures, kan ik dan wel personal training doen?</strong> Juist dan is één-op-één verstandig. We overleggen als nodig met je fysio of arts en bouwen rustig aan je belastbaarheid.</p>

      <p><strong>5. Hoe begin ik met personal training bij jullie?</strong> Met een gratis intake. We bekijken je situatie, doelen en mogelijkheden. Als personal training de beste optie is, maken we een plan.</p>

      <p>Wil jij niet gokken met je lijf, maar gericht werken aan kracht, fitheid of herstel? Plan dan een <a href="/free-intro">gratis intake</a> bij CrossFit Alkmaar. Dan kijken we eerlijk of personal training in Alkmaar de beste stap is voor jou.</p>
    `,
  },
  "sportschool-voor-beginners": {
    title: "Hoe je als beginner succesvol kunt starten met trainen",
    date: "2024-10-08",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/photo-box1.webp",
    excerpt: "Starten met trainen als beginner? Met deze zes tips van CrossFit Alkmaar begin je succesvol én hou je het vol.",
    content: `
      <p>Alle begin is moeilijk.</p>

      <p>Je staat op het punt om te starten met trainen, maar de gedachten die door je hoofd gaan, zijn allesbehalve motiverend. "Ben ik wel fit genoeg? Kan ik dit wel volhouden? Wat als ik het niet kan?" Als deze twijfels je bekend voorkomen, weet dan dat je niet de enige bent. Iedereen begint ergens, en het mooie aan trainen is dat je altijd stappen vooruit kunt zetten, ongeacht je startpunt.</p>

      <p>Bij CrossFit Alkmaar geloven we dat iedereen in staat is om hun doelen te bereiken, of het nu gaat om fitter worden, sterker voelen of simpelweg gezonder leven. De sleutel tot succes? Beginnen, en blijven gaan. Op onze social media zie je veel mensen met honderden trainingen bij ons, die zijn allemaal een keer begonnen. Hier zijn een paar tips om je op weg te helpen en je vertrouwen te geven vanaf dag één.</p>

      <h2>1. Stel realistische doelen</h2>

      <p>Voordat je begint, is het belangrijk om te weten waarom je wilt trainen. Wil je sterker worden, afvallen, of misschien gewoon lekkerder in je vel zitten? Wat je doel ook is, zorg ervoor dat het realistisch en haalbaar is. Door kleine, meetbare doelen te stellen, blijf je gemotiveerd. Vier elke overwinning, hoe klein ook, want elke stap vooruit brengt je dichter bij waar je wilt zijn.</p>

      <p>Als je doel meetbaar is (bepaalde lichaamswaarden, kracht of uithoudingsvermogen), kun je meten of je op de goede weg bent. Bij CrossFit Alkmaar heb je elke drie maanden een voortgangsgesprek met je coach. Zo houden we vinger aan de pols: ben je nog goed op weg of moet je plan worden bijgestuurd?</p>

      <h2>2. Focus op techniek</h2>

      <p>Een van de grootste fouten die beginners maken, is te snel willen gaan. Ja, snelheid en kracht zijn belangrijk, maar zonder goede techniek kun je blessures oplopen. Neem de tijd om de juiste vorm te leren. Het mooie van trainen bij CrossFit Alkmaar is dat je persoonlijke begeleiding krijgt. Zo zorgen we ervoor dat je vanaf het begin goed leert bewegen, wat essentieel is voor je lange termijn succes.</p>

      <h2>3. Blijf consistent</h2>

      <p>Misschien wel het belangrijkste aspect van trainen: consistentie. Het is beter om drie keer per week te komen trainen, dan één keer alles te geven en vervolgens weken niet te komen. Door regelmaat in je trainingen te brengen, zul je merken dat je lichaam zich aanpast, sterker wordt en dat je conditie verbetert. Het hoeft niet perfect te zijn, maar wel regelmatig.</p>

      <h2>4. Vertrouw op professionals</h2>

      <p>Bij CrossFit Alkmaar staan we voor je klaar. Wij begeleiden je niet alleen bij de oefeningen, maar ook mentaal. Want trainen gaat niet alleen om fysiek sterker worden, maar ook om het ontwikkelen van een positieve mindset. Vertrouw erop dat wij het beste met je voor hebben en dat wij samen met jou willen werken aan je doelen. Durf vragen te stellen, en wees niet bang om hulp te vragen als iets moeilijk aanvoelt.</p>

      <p>Mensen begeleiden in hun fitness reis is ons werk. We doen dit elke dag, hebben er een bak ervaring in en we zijn er goed in. Laat ons je helpen.</p>

      <h2>5. Vier je vooruitgang</h2>

      <p>Je hoeft geen gevorderde atleet te zijn om trots te zijn op wat je bereikt. Misschien heb je voor het eerst een push-up kunnen doen, of merk je dat je energieker door het leven gaat. Dit zijn allemaal momenten om trots op te zijn. Door je vooruitgang te vieren, hoe klein ook, blijf je gemotiveerd om door te gaan.</p>

      <h2>6. Wees geduldig met jezelf</h2>

      <p>Tot slot, wees geduldig. Resultaten komen niet van de ene op de andere dag. Het kan weken of zelfs maanden duren voordat je echt verschil ziet of voelt. Maar met consistentie en doorzettingsvermogen ga je uiteindelijk je doelen bereiken. Het belangrijkste is dat je blijft geloven in jezelf en in het proces.</p>

      <p>Trainen is een reis, en elke stap die je zet, brengt je dichter bij een betere versie van jezelf. Bij CrossFit Alkmaar zijn we er om je te helpen bij elke stap van die reis. We geloven dat je meer kunt bereiken dan je denkt, en we staan klaar om je te ondersteunen bij het ontdekken van je volledige potentieel. Dus waar wacht je nog op? Zet die eerste stap, en wij zorgen ervoor dat je succesvol zult zijn.</p>

      <p><a href="/free-intro">Boek hier die gratis intake</a>. We zien je graag binnenlopen.</p>
    `,
  },
  "krachttraining-50plus": {
    title: "Beïnvloedt gewichtheffen je gewrichten na je 50e?",
    metaTitle: "Krachttraining na je 50e: goed of slecht voor je gewrichten?",
    date: "2026-07-25",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/community-2.jpg",
    excerpt: "Is gewichtheffen slecht voor je gewrichten na je 50e? Integendeel: krachttraining houdt ze juist sterk en gezond. CrossFit Alkmaar legt uit hoe dat werkt.",
    faq: [
      {
        question: "Is het te laat om na mijn 50e te beginnen met krachttraining?",
        answer: "Nee. Spieren en botten reageren op elke leeftijd op trainingsprikkels. Je bouwt vanaf een ander startpunt op dan iemand van dertig, maar de vooruitgang in kracht en stabiliteit is net zo reëel. Hoe eerder je begint, hoe eerder je profiteert van sterkere spieren rond je gewrichten.",
      },
      {
        question: "Hoe vaak moet ik na mijn 50e krachttraining doen?",
        answer: "Twee tot drie keer per week is voor de meeste mensen een goed uitgangspunt. Dat geeft genoeg prikkel om spiermassa en botdichtheid op te bouwen, met voldoende ruimte voor herstel tussen de trainingen door.",
      },
      {
        question: "Helpt krachttraining tegen osteoporose?",
        answer: "Het kan een belangrijke rol spelen. Botweefsel wordt sterker als het belast wordt, en gewichtheffen is een directe manier om die belasting te geven. Twijfel je of krachttraining past bij een medische situatie zoals osteoporose, overleg dan ook met je arts.",
      },
      {
        question: "Wat als ik al pijnklachten aan mijn knieën, heupen of schouders heb?",
        answer: "Dan is begeleiding extra belangrijk, niet een reden om te stoppen met bewegen. Onze coaches passen oefeningen, gewicht en bewegingsbereik aan op wat jouw gewrichten op dat moment aankunnen, en bouwen van daaruit rustig op.",
      },
    ],
    content: `
      <p>Veel mensen denken dat gewichtheffen slecht is voor je gewrichten, vooral na je 50e. Maar het tegendeel is waar. Met de juiste techniek en opbouw is krachttraining een van de beste dingen die je voor je gewrichten kunt doen.</p>

      <h2>Wat er met je lichaam gebeurt na je 50e</h2>

      <p>Vanaf ongeveer je dertigste verlies je geleidelijk spiermassa, een proces dat sarcopenie heet en na je 50e versnelt. Ook je botdichtheid neemt af. Minder spierweefsel rond je knieën, heupen en schouders betekent minder stabiliteit en minder demping voor die gewrichten, wat het risico op pijn en blessures juist vergroot. Minder bewegen of alleen voorzichtig blijven doen versnelt dit proces eerder dan dat het helpt.</p>

      <h2>Waarom krachttraining juist helpt</h2>

      <p>Krachttraining remt dit proces niet alleen af, het kan het deels ook omkeren. Door regelmatig weerstand te bieden aan je spieren, geef je je lichaam het signaal om spiermassa op te bouwen of te behouden. Sterkere spieren rond je gewrichten nemen een deel van de belasting over van het gewricht zelf, wat voor minder slijtage en pijn zorgt. Daarnaast stimuleert het belasten van botten met gewicht de aanmaak van botweefsel, wat het risico op broze botten verkleint.</p>

      <h2>Techniek en opbouw zijn de sleutel</h2>

      <p>Het risico zit niet in het optillen van gewicht, maar in de manier waarop. Te snel te zwaar gaan, met een matige uitvoering, is waar blessures ontstaan, ongeacht je leeftijd. Bij CrossFit Alkmaar bouwen we daarom altijd rustig op: eerst techniek, dan volume, dan pas gewicht. Onze coaches passen elke oefening aan op wat jouw lichaam op dat moment aankan, of dat nu een lichte kettlebell is of een volwaardige squat met de barbell.</p>

      <h2>Mobiliteit en herstel</h2>

      <p>Naast kracht werkt goede krachttraining ook aan je mobiliteit: hoe soepel je gewrichten door hun volledige bewegingsbereik kunnen bewegen. Dat is precies wat je nodig hebt om actief te blijven, of dat nu tillen, tuinieren of spelen met kleinkinderen is. Herstel vraagt na je vijftigste wel iets meer aandacht dan op je dertigste: voldoende slaap, genoeg eiwit en soms een dag extra rust tussen twee zware trainingen. Onze coaches houden daar rekening mee bij het opbouwen van je trainingsschema.</p>

      <h2>Voor wie dit is</h2>

      <p>We begeleiden leden van alle leeftijden en niveaus, van mensen die voor het eerst een halter oppakken tot leden die al jaren fanatiek trainen. Ook uit <a href="/crossfit-heerhugowaard">Heerhugowaard</a> en <a href="/crossfit-heiloo">Heiloo</a> komen leden bij ons trainen met dezelfde vraag: kan ik dit nog op mijn leeftijd? Het antwoord is bijna altijd ja, mits de begeleiding en opbouw goed geregeld zijn.</p>

      <p>Onthoud deze drie dingen:</p>

      <ul>
        <li>Spiermassa en botdichtheid nemen na je 50e sneller af, en krachttraining is een directe manier om daar iets aan te doen.</li>
        <li>Niet het gewicht, maar de opbouw en techniek bepalen of je veilig traint.</li>
        <li>Een coach die met je meedenkt over je gewrichten en herstel, maakt het verschil tussen vooruitgang en blessures.</li>
      </ul>

      <p>Benieuwd wat krachttraining met begeleiding voor jouw lichaam kan doen? <a href="/free-intro">Plan hier een gratis kennismaking</a> of start met de <a href="/kickstart">28-day kickstart</a> en ervaar het zelf.</p>
    `,
  },
  "meer-energie-door-beweging": {
    title: "Waarom je juist moet sporten als je hoofd overloopt",
    date: "2024-09-25",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Gezondheid",
    image: "/redesign/assets/community-1.jpg",
    excerpt: "Hoofd vol en geen zin om te sporten? Juist dan geeft bewegen je energie terug. Waarom sporten werkt als je hoofd overloopt.",
    content: `
      <p>We kennen het allemaal: je hoofd zit vol met werk, thuiszaken of een eindeloze to-do-lijst. En dan staat er ook nog dat sporten op..... Alles lijkt soms te veel en de bank met een zak chips lijkt een prima schuilplaats. Misschien wil je ’s ochtends gewoon langer blijven liggen. Maar deze aanpak helpt je op de lange termijn niet vooruit. Vaak voel je je juist de volgende dag nog vermoeider en minder energiek. Uiteindelijk is het een vorm van verstoppen.</p>

      <h2>Comfortfood en vluchtgedrag</h2>

      <p>Wanneer je gestrest bent, is het verleidelijk om te grijpen naar comfortfood en de tv. Even wegduiken in je eentje met een zak chips lijkt een snelle oplossing, maar geeft je geen energie. Je problemen blijven gewoon bestaan, en dat gevoel van vermoeidheid wordt alleen maar erger. Je blijft in een vicieuze cirkel draaien zonder verbetering.</p>

      <h2>Waarom sporten de oplossing is</h2>

      <p>In plaats van wegduiken, kun je beter voor beweging kiezen. Sporten klinkt misschien als een grote uitdaging op zo’n moment, maar het heeft enorme voordelen. Tijdens beweging maakt je lichaam endorfines aan, de zogenaamde gelukshormonen. Dit zorgt ervoor dat je je beter voelt en helpt je hoofd leeg te maken.</p>

      <h2>Meer energie door beweging</h2>

      <p>Na een uur sporten voel je vaak meer energie. Je bloedsomloop wordt gestimuleerd, en dat zorgt ervoor dat je je energie beter benut. In plaats van energie te verliezen door stil te zitten op de bank, krijg je juist een energieboost. Dit helpt niet alleen om je stress te verminderen, maar ook om met een frisse blik naar je problemen te kijken.</p>

      <h2>De drempel over</h2>

      <p>Het kan lastig zijn om jezelf tot sporten te zetten, vooral als je gestrest of moe bent. Het voelt soms alsof je de energie niet hebt om te beginnen. Maar als je eenmaal bezig bent, ben je jezelf dankbaar. Zelfs als je maar 50% inzet of zelfs 25%, is het beter dan helemaal niet sporten. Als je niet gaat, is het de volgende keer nog makkelijker om uit te stellen, en voor je het weet, stop je helemaal met sporten. Laat je hoofd niet winnen van je wilskracht!</p>

      <h2>Kies voor jezelf</h2>

      <p>De volgende keer dat je hoofd overloopt, en je in de verleiding komt om je te verstoppen met snacks of op bed te blijven liggen, herinner jezelf eraan dat bewegen de oplossing is. Sporten geeft je de energie terug die je nodig hebt en helpt je om je gedachten op een rij te krijgen. Kies voor beweging en word op de lange termijn fysiek én mentaal sterker.</p>

      <p>Dus, in plaats van de makkelijke weg te kiezen, zet die eerste stap en ga bewegen. Je zult zien dat je je daarna een stuk beter voelt! Geen idee hoe je dat zelf moet doen op een manier die je lang volhoudt? <a href="/free-intro">Boek hier gratis een vrijblijvende intake</a> met één van onze coaches, we helpen je graag!</p>
    `,
  },
  "hoe-vaak-moet-je-trainen": {
    title: "Moet je meer trainen als je écht fit wilt worden?",
    date: "2026-07-22",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/header-groepslessen.jpg",
    excerpt: "Hoe vaak moet je trainen voor resultaat? Fitnessniveau, doelen en herstel bepalen het antwoord. CrossFit Alkmaar legt uit.",
    faq: [
      {
        question: "Hoe vaak moet ik als beginner trainen?",
        answer: "Twee tot drie keer per week is een prima start. Je lichaam is nog niet gewend aan trainingsprikkels, dus zelfs een lage frequentie geeft al duidelijke vooruitgang. Vier of vijf keer per week is voor beginners vaak te veel en werkt eerder averechts.",
      },
      {
        question: "Is elke dag trainen slecht voor je?",
        answer: "Voor de meeste mensen wel. Je lichaam wordt sterker tijdens het herstel na de training, niet tijdens de training zelf. Train je elke dag zonder rust, dan bouw je die aanpassing af in plaats van op, en loop je meer kans op blessures.",
      },
      {
        question: "Hoeveel rust heb ik nodig tussen twee trainingen?",
        answer: "Dat verschilt per persoon en per type training. Vaak is 24 tot 48 uur voldoende, maar na een reeks zware trainingen die dezelfde spiergroepen belasten kan je lichaam meer tijd nodig hebben. Goede voeding en voldoende slaap versnellen het herstel.",
      },
    ],
    content: `
      <p>Je hebt doelen: je wilt afvallen, aankomen of gewoon lekkerder in je vel zitten. Je bent dit keer vastberaden om ze te bereiken.</p>

      <p>Gaat heel veel sporten je daarbij helpen?</p>

      <p>Misschien.</p>

      <p>Om je een preciezer antwoord te geven, moeten we een paar variabelen in overweging nemen: je fitnessniveau, je doelen en je herstel.</p>

      <h2>Je fitnessniveau</h2>

      <p>Als je net begint met sporten, hoef je niet enorm veel te trainen om resultaten te zien. Zelfs één sessie per week heeft voordelen, maar twee of drie zijn veel beter. Vier of vijf kunnen te veel en zelfs contraproductief zijn.</p>

      <p>Als je erg ervaren bent in de sportschool of zeer fit, moet je misschien vier of vijf keer per week trainen om de beste resultaten te behalen.</p>

      <p>De reden voor dit verschil is dat je lichaam zich aanpast aan de training na verloop van tijd. Als je nog niet veel getraind hebt, zal een kleine dosis lichaamsbeweging een significant effect hebben. Wanneer je een hoger fitnessniveau hebt bereikt, moet je meer doen om je lichaam te stimuleren om veranderingen door te voeren.</p>

      <p>Maar maak je geen zorgen: je hoeft zeker niet de hele tijd te trainen. De meeste van onze leden trainen twee tot vier keer per week en behalen geweldige resultaten.</p>

      <h2>Je doelen</h2>

      <p>De volgende variabele: je specifieke doelen.</p>

      <p>Als je doel algemene fitness is, zijn twee tot vier trainingen per week prima.</p>

      <p>Maar als je doelen specifieker zijn, passen we dat plan misschien aan.</p>

      <p>Bijvoorbeeld, een gewichtheffer die op een zeer hoog niveau wedstrijden wil doen, traint misschien vijf of meer keer per week. Sommige elite fitnesscompetitie deelnemers trainen zelfs twee keer per dag. Maar dit trainingsniveau is voor de meeste mensen niet nodig.</p>

      <p>Een ander voorbeeld: Iemand wil een bepaald fitnessniveau bereiken tegen een bepaalde datum. Misschien wil die persoon een marathon lopen of meedoen aan een <a href="/hyrox-training-alkmaar">HYROX-wedstrijd</a>. We kunnen dan extra sessies toevoegen om ervoor te zorgen dat die persoon klaar is voor de wedstrijddag.</p>

      <p>Maar nogmaals, je kunt aanzienlijke vooruitgang boeken richting algemene gezondheids- en fitnessdoelen met twee tot vier trainingen per week. Je hoeft niet elke dag te trainen. Sterker nog, waarschijnlijk moet je dat helemaal niet doen. Lees verder!</p>

      <h2>Je herstel</h2>

      <p>Eenvoudige sportwetenschap: Als je traint, belast je het lichaam en zorgt het ervoor dat het reparaties en verbeteringen uitvoert. Die verbeteringen verhogen je fitnessniveau.</p>

      <p>Maar je moet je lichaam de tijd geven om deze aanpassingen te maken, en je moet het de bouwstenen geven die het nodig heeft om dat te doen.</p>

      <p>Dus als je een zware training doet, moet je goed slapen, goed eten en je lichaam genoeg tijd geven om zichzelf te herstellen. Als je dat niet doet, vertraag of keer je zelfs de vooruitgang om.</p>

      <p>Een voorbeeld: Een zeer gemotiveerd persoon wil fitter worden, dus hij traint elke dag twee keer. Hij werkt in ploegendiensten en krijgt niet veel slaap. En soms eet hij slecht. Als hij zo doorgaat, kan zijn lichaam niet herstellen van al die trainingen. Hij zal pijnlijk en prikkelbaar zijn, en zijn prestaties zullen verslechteren. Hij kan zelfs gewond raken.</p>

      <p>Meer is niet altijd beter. Je moet onthouden dat je lichaam zichzelf eigenlijk verbetert na de training, niet tijdens de training. Als je het niet de dingen geeft die het nodig heeft om zich aan te passen aan de trainingsstress, kom je niet dichter bij je doelen.</p>

      <p>Je wilt 'net genoeg' trainen, en dan heb je de juiste hoeveelheid rust en herstel nodig. In sommige gevallen is 24 uur herstel voldoende. In andere gevallen zijn 48 uur nodig. En sommige mensen hebben langere pauzes nodig als ze net een reeks zeer zware trainingen hebben voltooid die dezelfde delen van het lichaam herhaaldelijk hebben belast.</p>

      <h2>Een coach kan je helpen!</h2>

      <p>Dat is allemaal veel om over na te denken, en het kan een uitdaging zijn om alles alleen uit te zoeken.</p>

      <p>Goed nieuws: Wij hebben jarenlange ervaring met het werken met allerlei mensen die allerlei doelen hebben, en we kunnen je precies vertellen hoe vaak je moet trainen om je persoonlijke doelen te bereiken. Je hoeft niet te gokken.</p>

      <p>Het beste plan is om met ons af te spreken en ons te vertellen wat je wilt bereiken en hoe je in het verleden hebt getraind (maak je geen zorgen als je nog nooit getraind hebt).</p>

      <p>Vanaf daar geven we je een exact plan dat je helpt snel vooruitgang te boeken richting je doelen. We vertellen je hoe vaak je moet trainen, hoeveel rust je nodig hebt, en zelfs welke voedingsmiddelen je helpen op tijd te herstellen voor de volgende training. Wil je dat plan volledig op jou afgestemd, inclusief één-op-één begeleiding? Kijk dan ook eens naar <a href="/personal-training-alkmaar">personal training bij CrossFit Alkmaar</a>.</p>

      <p>Onthoud deze drie dingen:</p>

      <ul>
        <li>Meer is niet altijd beter. Sommige mensen hebben meer workouts nodig en sommige hebben er minder nodig.</li>
        <li>Je moet je lichaam altijd de tijd geven om zich aan te passen aan de training.</li>
        <li>Een coach kan je precies vertellen hoeveel training en hersteltijd je nodig hebt om je doelen te bereiken.</li>
      </ul>

      <p>Boek een gratis intake bij CrossFit Alkmaar en ontdek hoe vaak je moet trainen om de resultaten te behalen die je wilt. We zijn er om je te helpen, <a href="/free-intro">plan hier je gratis intake</a>!</p>
    `,
  },
  "de-juiste-sportschool-kiezen": {
    title: "Afvallen als doel: waarom de keuze voor de juiste sportschool belangrijk is",
    date: "2024-10-30",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Gezondheid",
    image: "/redesign/assets/header-community.jpg",
    excerpt: "Wil je afvallen? Dan is de keuze voor de juiste sportschool cruciaal. Waarom begeleiding en coaching in Alkmaar het verschil maken.",
    content: `
      <p>Voor veel mensen is afvallen de reden om zich bij een sportschool aan te sluiten. Volgens recente cijfers van het RIVM uit 2023 heeft meer dan 50% van de Nederlandse volwassenen nu overgewicht, vergeleken met een derde in de jaren '80. Hoewel het aantal sportscholen is gestegen (vandaag de dag is er gemiddeld 0,2 sportschool per 1000 inwoners!) blijft overgewicht een groeiend probleem.</p>

      <h2>Waarom lossen meer sportscholen het probleem niet op?</h2>

      <p>Het probleem ligt vaak in het soort sportschool dat je kiest. Bij budgetketens betaal je alleen voor toegang, maar zonder begeleiding blijft het vaak alleen bij intenties. Bij CrossFit Alkmaar investeer je daarentegen in een team van ervaren coaches die jouw succes echt belangrijk vinden en je stap voor stap begeleiden.</p>

      <h2>Het probleem met ‘toegangs-sportscholen’ en waarom begeleiding essentieel is</h2>

      <p>Stel je dit voor: iemand die wil afvallen meldt zich aan bij de dichtstbijzijnde budget-sportschool. De eerste maand gaan ze een paar keer, maar al snel raakt de motivatie op en komt het dagelijks leven ertussen. Voor de rest van het jaar blijft het lidmaatschap doorlopen zonder dat de sportschool ooit contact opneemt om te vragen waarom je niet meer komt opdagen.</p>

      <p>Wat ze echt nodig hadden? Niet alleen toegang tot fitnessapparaten, maar daadwerkelijke coaching en begeleiding die hen motiveert en op weg helpt naar hun doelen. Afvallen gebeurt namelijk niet alleen tijdens die paar uur per week sporten; het is de hele week door een kwestie van de juiste keuzes maken. En die ondersteuning bieden wij bij CrossFit Alkmaar.</p>

      <h2>Bij CrossFit Alkmaar kies je voor coaching en een community</h2>

      <p>Bij CrossFit Alkmaar investeren we in coaching, niet alleen in apparaten en faciliteiten. Onze eerste stap is het begrijpen van jouw doelen en een op maat gemaakt plan ontwikkelen om ze te bereiken. Wil je afvallen? Dan zijn we eerlijk: alleen trainen is niet genoeg. Daarom bieden we ook voeding coaching, zodat je direct vanaf de start de juiste gewoontes opbouwt die gewichtsverlies ondersteunen.</p>

      <p>Trainen blijft natuurlijk belangrijk. Door te trainen, verbrand je calorieën en bouw je spieren op, wat je stofwisseling stimuleert. Wist je dat spieren zelfs in rust meer calorieën verbranden dan vet? Dus, door spieren op te bouwen, leg je een basis voor langdurig gewichtsverlies en een gezondere toekomst.</p>

      <h2>Community en verantwoordelijkheid als succesfactoren</h2>

      <p>CrossFit Alkmaar is meer dan alleen een sportschool: wij zijn een hechte community van gelijkgestemden die samen werken aan hun doelen. Onze coaches bouwen een veilige en plezierige omgeving waarin iedereen zich welkom voelt en elkaar motiveert. Zo kijken onze leden ernaar uit om te trainen, niet alleen door de workouts, maar ook door de mensen om hen heen.</p>

      <p>Wat ons echt uniek maakt? Wij houden actief contact met leden die we even niet zien, om ze weer op het juiste spoor te krijgen. We willen geen sportschool zijn met een passieve ledenbasis, maar een community waarin iedereen echt betrokken is bij zijn of haar gezondheid.</p>

      <h2>Serieus over afvallen? Kies voor coaching, niet alleen een sportschool</h2>

      <p>Als je echt serieus bent over gewichtsverlies, is de keuze voor een sportschool met toegewijde, fulltime coaches de eerste stap. Vermijd sportscholen waar het personeel er slechts is om toezicht te houden; je verdient een team dat volledig gefocust is op jouw succes.</p>

      <h2>Start jouw CrossFit Alkmaar-reis vandaag</h2>

      <p>Ben je klaar om écht aan de slag te gaan met jouw fitness- en gewichtsdoelen? Schrijf je in voor een <a href="/free-intro">gratis intake</a> bij CrossFit Alkmaar en ontdek hoe coaching, begeleiding en een community van gelijkgestemden jou kunnen helpen om het beste uit jezelf te halen.</p>

      <p><a href="/free-intro">Meld je hier direct aan</a> en zet de eerste stap naar een fittere en sterkere versie van jezelf!</p>
    `,
  },
  "doelen-stellen-die-werken": {
    title: "Trainen zonder doel is als autorijden zonder bestemming",
    date: "2025-04-07",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Training",
    image: "/redesign/assets/header-hyrox.jpg",
    excerpt: "Zonder doel is trainen als autorijden zonder bestemming. Zo geeft een plan met richting je motivatie en resultaat.",
    content: `
      <p>Je kunt prima een uurtje gaan zweten. Of af en toe iets doen ‘omdat het goed voor je is’. Maar als je geen idee hebt waar je naartoe werkt, wordt het lastig om gemotiveerd te blijven. En dat is precies waarom veel mensen afhaken.</p>

      <p>Trainen zonder doel voelt namelijk als doelloos rondjes rijden. Je bent wel bezig, maar je komt nergens. En dan is het logisch dat je op een gegeven moment afhaakt. Want waarom zou je blijven investeren in iets waarvan je niet eens weet wat het oplevert?</p>

      <h2>Een plan geeft richting</h2>

      <p>Dat betekent niet dat je meteen een sixpack hoeft te willen of een marathon moet trainen. Maar wél dat je iets nodig hebt om naartoe te werken: sterker worden, energieker voelen, beter slapen, soepeler bewegen. Het hoeft geen groot of spectaculair doel te zijn. Als het maar duidelijk is.</p>

      <p>Zodra je weet wat je wilt bereiken, kun je bepalen wat je daarvoor nodig hebt. En dat is precies waar wij je bij helpen.</p>

      <p>Bij CrossFit Alkmaar beginnen we daarom altijd met een intake. Niet om te testen hoe fit je bent, maar om te ontdekken wie je bent, wat je al hebt geprobeerd, waar je naar op zoek bent en wat bij jou past. Want alleen als we dát weten, kunnen we een goed plan voor je maken.</p>

      <h2>Vooruitgang motiveert</h2>

      <p>Of je nu begint met de 28-Day Kickstart of instapt in BUILD: je werkt altijd ergens naartoe. Je traint niet zomaar wat, maar volgens een plan dat is opgebouwd met een doel. Elke week zie je kleine stapjes vooruit. Dat kan zijn dat je een beweging beter uitvoert, dat je merkt dat je hersteltijd korter wordt, of dat je met minder moeite een workout afmaakt.</p>

      <p>En die vooruitgang - hoe klein ook - zorgt ervoor dat je gemotiveerd blijft.</p>

      <h2>Zonder doel verval je snel in losse pogingen</h2>

      <p>Als je geen richting hebt, wordt trainen iets wat je ‘doet als het uitkomt’. En we weten allemaal hoe vaak het dan écht gebeurt. Het leven zit vol afleidingen: werk, afspraken, vermoeidheid, social media. Als trainen geen duidelijke plek in je week heeft en geen concreet doel dient, is het heel makkelijk om het te laten schieten.</p>

      <p>Daarom maken we het makkelijk om het wél te laten slagen. We plannen vaste trainingsmomenten. We trainen in kleine groepen. We houden het overzichtelijk. En we zorgen ervoor dat je weet waar je aan werkt.</p>

      <h2>Jij bepaalt waar je naartoe wilt - wij helpen je er komen</h2>

      <p>Je hoeft geen ervaring te hebben. Je hoeft niet fit te zijn. Je hoeft alleen te willen beginnen. Wij zorgen voor het plan, de structuur en de begeleiding.</p>

      <p>Dus: blijf je nog even doelloos rondrijden, of wordt het tijd om een bestemming te kiezen?</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, dan maken we samen een plan dat werkt voor jou.</p>
    `,
  },
  "training-als-stressverlichter": {
    title: "Hoe trainen je helpt omgaan met stress, werkdruk en mentale vermoeidheid",
    date: "2025-05-08",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Gezondheid",
    image: "/redesign/assets/community-3.jpg",
    excerpt: "Stress, werkdruk of mentale vermoeidheid? Trainen is geen extra belasting maar juist de oplossing. Zo helpt bewegen je hoofd tot rust te brengen.",
    content: `
      <p>Je hebt een drukke baan. Je agenda zit vol. Je hoofd draait overuren. En dan zegt iemand: “Je moet echt weer gaan sporten.”</p>

      <p>Maar eerlijk? Het voelt alsof je daar juist géén ruimte voor hebt. Je bent moe. Je bent vol. Je hebt weinig energie. En dus stel je het uit. Tot het rustiger wordt. Tot je meer tijd hebt. Tot je hoofd wat leger voelt. Alleen… dat moment komt niet.</p>

      <p>En dat is precies het probleem.</p>

      <p>Want trainen is geen extra belasting. Het is precies wat je nodig hebt als je veel aan je hoofd hebt.</p>

      <h2>Te veel in je hoofd? Dan moet je je lijf gebruiken</h2>

      <p>Stress, piekeren, werkdruk - het zet je lijf continu op scherp. Je lichaam denkt dat je in gevaar bent. Dat zorgt voor gespannen spieren, onrustig slapen, een kort lontje en weinig focus. En het blijft doorgaan… tenzij je het doorbreekt.</p>

      <p>Beweging is de snelste manier om uit je hoofd en in je lijf te komen. Niet als afleiding, maar als reset. Je adem verandert. Je hartslag stijgt. Je zweet. Je voelt je lichaam weer. En daarna? Dan voel je je helderder. Rustiger. Sterker.</p>

      <h2>Je hoeft niet kapot te gaan om te herstellen</h2>

      <p>Veel mensen denken dat trainen zwaar moet zijn. Tot het gaatje. Pijn = goed. Maar juist bij stress en vermoeidheid is dat niet wat je nodig hebt.</p>

      <p>Bij CrossFit Alkmaar geloven we in trainen met aandacht. In kleine groepen. Met begeleiding. Waarin je wordt geholpen om precies genoeg te doen - niet meer, niet minder. Je hoeft niet op je tenen te lopen. Je hoeft alleen te bewegen op een manier die jou weer in balans brengt.</p>

      <h2>Ritme geeft rust</h2>

      <p>Als alles in je leven flexibel moet zijn, wordt het een chaos. Daarom werken we met vaste trainingsmomenten. Drie keer per week. Niet als verplichting, maar als houvast. Dat betekent: drie keer per week even tijd voor jezelf. Even geen werk, geen kinderen, geen telefoon. Alleen jij en je training. Je hoeft niets te regelen, niets te verzinnen. Wij hebben het al voor je voorbereid.</p>

      <p>En dat geeft rust. Voor je hoofd én voor je lijf.</p>

      <h2>Mentale vermoeidheid los je niet op met nóg meer denken</h2>

      <p>Als je overprikkeld bent, ga je sneller op zoek naar rust op de bank, series, telefoon - logisch. Maar dat is vaak passieve rust. Wat je nodig hebt, is actieve ontspanning. Je lijf gebruiken. Je hoofd leegmaken. Je zintuigen opnieuw instellen.</p>

      <p>Trainen in een vaste, kleine groep is daar perfect voor. Je bent even helemaal in het moment. Je hoeft alleen maar te luisteren naar je coach, te bewegen, te voelen. En daarna merk je pas hoe hard je dat nodig had.</p>

      <h2>Kleine groep, grote verandering</h2>

      <p>In onze 28-Day Kickstart train je in een vaste groep van maximaal vijf mensen. Alles wordt afgestemd op jouw niveau, jouw energie en jouw ritme. Na vier weken voel je verschil - niet omdat je alles perfect hebt gedaan, maar omdat je bent blijven komen.</p>

      <p>Veel mensen stromen daarna door naar BUILD: small group training in een groep van zes, met elke acht weken een nieuwe focus. Geen overload. Geen chaos. Gewoon begeleiding, structuur en resultaat.</p>

      <h2>We beginnen altijd met een gesprek</h2>

      <p>Voor we starten, plannen we altijd een intake. Geen test, geen oordeel. Alleen een gesprek. We willen weten hoe je je voelt, wat je al geprobeerd hebt, en waar je tegenaan loopt. Pas dan kiezen we samen het juiste programma - en plannen we jouw momenten in.</p>

      <p>Je hoeft het niet zelf te regelen. Je hoeft het niet zelf vol te houden. Je hoeft het niet zelf op te lossen.</p>

      <p><a href="/free-intro">Boek een gratis intake</a>, dan zorgen we samen dat trainen niet nóg iets is dat moet, maar iets dat helpt.</p>
    `,
  },
  "wat-eet-je-voor-en-na-training": {
    title: "Wat eet je het beste voor en na je training?",
    date: "2024-12-01",
    author: "Bart Peekstok, eigenaar CrossFit Alkmaar",
    category: "Voeding",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    excerpt: "De juiste voeding op het juiste moment kan het verschil maken tussen een goede en een geweldige training. Wat eet je voor en na je training, en wanneer?",
    content: `
      <p>De juiste voeding op het juiste moment kan het verschil maken tussen een goede en een geweldige training. Maar wat eet je nou precies? En wanneer?</p>

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

      <p>De basis is simpel: eet gevarieerd, genoeg eiwitten, voldoende groenten, en timing rondom je training. Perfectie is niet nodig, consistentie wel.</p>
    `,
  },
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
