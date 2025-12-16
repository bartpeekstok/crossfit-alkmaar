"use client";

import { usePopup } from "../../components/PopupContext";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogPosts: { [key: string]: any } = {
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

  return (
    <div className="min-h-screen bg-gray-200">
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