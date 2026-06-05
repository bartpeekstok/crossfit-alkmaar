"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function SportenOvergangAlkmaarPage() {
  return (
    <SeoLanding
      name="Sporten overgang Alkmaar"
      slug="sporten-overgang-alkmaar"
      description="Krachttraining en begeleide fitness speciaal gericht op vrouwen in de overgang. Verbeter je botdichtheid, verminder overgangsklachten en krijg meer energie met professionele coaching in kleine groepen."
      heroPhoto="/images/sporten-overgang-header.jpg"
      heroTitle="Sporten in de Overgang in Alkmaar"
      heroSubtitle="Sterker, fitter en meer energie - juist in deze fase van je leven"
      waaromTitle="Waarom juist nu bewegen zo belangrijk is"
      waaromContent={
        <>
          <p>De overgang brengt grote veranderingen in je lichaam. Door de daling van oestrogeen verlies je sneller botmassa en spierkracht. Je stofwisseling vertraagt, je slaap kan verslechteren en je stemming kan wisselend zijn. Dat is niet iets om je voor te schamen - het overkomt miljoenen vrouwen.</p>
          <p>Wat wél in je eigen hand ligt: hoe je hiermee omgaat. En daar speelt beweging een enorme rol. <Link href="/krachttraining-alkmaar">Krachttraining</Link> is wetenschappelijk bewezen een van de krachtigste middelen om overgangsklachten te verminderen. Het stimuleert de aanmaak van botweefsel, behoudt je spiermassa, verbetert je slaapkwaliteit en geeft je meer energie.</p>
          <p>Daarnaast heeft bewegen een positief effect op je mentale gezondheid. Sporten maakt endorfines aan die je humeur verbeteren, stress verminderen en je helpen om je weer meer jezelf te voelen. Je hoeft geen topsporter te zijn - al kleine stappen maken een groot verschil.</p>
        </>
      }
      aanpakTitle="Wat sporten bij CrossFit Alkmaar je oplevert"
      aanpakCards={[
        { title: "Sterkere botten door krachttraining", body: "Krachttraining stimuleert je botopbouw en remt het verlies van botdichtheid. Dit is juist in de overgang essentieel om osteoporose te voorkomen en sterk te blijven." },
        { title: "Meer energie en beter slapen", body: "Regelmatig bewegen verbetert je slaapkwaliteit en geeft je overdag meer energie. Veel van onze leden merken al na een paar weken verschil in hoe ze zich voelen." },
        { title: "Trainingen aangepast aan jouw lichaam", body: "Elke oefening is schaalbaar. Of je nu net begint of al jaren sport - onze coaches passen de training aan zodat het bij jou past. Geen one-size-fits-all aanpak." },
        { title: "Begripvolle coaches die luisteren", body: "Onze coaches begrijpen waar je doorheen gaat. Ze luisteren, denken mee en zorgen dat je je op je gemak voelt. Je bent hier geen nummer, maar een mens." },
      ]}
      voorwieTitle="Hoe we je begeleiden"
      voorwieContent={
        <>
          <p>Je begint met een gratis kennismakingsgesprek. We luisteren naar je verhaal, je klachten en je doelen. Geen verplichtingen, geen druk - gewoon een eerlijk gesprek.</p>
          <p>Daarna start je met de <Link href="/kickstart">Kickstart</Link>: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Je gaat pas naar de <Link href="/groepslessen">groepslessen</Link> als jij je er klaar voor voelt.</p>
          <p>In de groepslessen train je in kleine groepen van maximaal 12 personen. Elke oefening wordt aangepast aan jouw niveau. Heb je behoefte aan nog meer persoonlijke aandacht? Dan is <Link href="/personal-training">personal training</Link> een mooie optie.</p>
          <p>Wil je ook werken aan je voeding? Bekijk dan onze mogelijkheden voor <Link href="/voedingsadvies">voedingsadvies</Link>. Een goede combinatie van training en voeding kan je helpen om je nog beter te voelen. Bekijk ook onze <Link href="/meer-info#tarieven">tarieven</Link>.</p>
        </>
      }
      aeoTitle="Sporten in de overgang"
      aeoItems={[
        { q: "Waarom is krachttraining extra belangrijk in de overgang?", a: <>Tijdens de overgang verlies je versneld botmassa en spiermassa door dalende oestrogeenspiegels. <Link href="/krachttraining-alkmaar">Krachttraining</Link> remt dit verlies af, verbetert je botdichtheid en helpt bij het behouden van een gezond gewicht. Het is een van de effectiefste dingen die je kunt doen voor je gezondheid in deze fase.</> },
        { q: "Helpt sporten tegen overgangsklachten?", a: "Ja. Regelmatig trainen vermindert opvliegers, verbetert je slaapkwaliteit, geeft meer energie en helpt bij stemmingswisselingen. Bij CrossFit Alkmaar passen we de training aan op hoe je je die dag voelt." },
        { q: "Is CrossFit niet te zwaar in de overgang?", a: "Elke oefening bij CrossFit Alkmaar is schaalbaar. Je traint op jouw niveau en jouw tempo. Onze coaches hebben ervaring met leden in de overgang en begrijpen dat sommige dagen anders voelen. Je wordt nooit gedwongen iets te doen dat niet goed voelt." },
      ]}
      members={[
        { videoId: "iJ6KoiK5QZk", name: "Renze", quote: "Ik houd niet van fitness, dat vind ik veel te saai" },
        { videoId: "BkYbL7jvYjY", name: "Paula", quote: "Die zware boodschappentassen? Dat gaat nu gewoon een stuk beter!" },
      ]}
      faqItems={[
        { q: "Waarom is krachttraining belangrijk in de overgang?", aText: "Tijdens de overgang daalt het oestrogeenniveau, waardoor botdichtheid afneemt en spiermassa sneller verloren gaat. Krachttraining stimuleert de botopbouw, behoudt spiermassa en helpt bij het reguleren van je hormoonhuishouding. Dit vermindert het risico op osteoporose en houdt je sterker en vitaler.", a: <>Tijdens de overgang daalt je oestrogeenniveau, waardoor je sneller botmassa en spierkracht verliest. <Link href="/krachttraining-alkmaar">Krachttraining</Link> stimuleert de botopbouw, behoudt je spiermassa en helpt bij het reguleren van je hormoonhuishouding. Dit vermindert het risico op osteoporose en houdt je sterker en vitaler.</> },
        { q: "Is CrossFit geschikt voor vrouwen in de overgang?", aText: "Absoluut. Elke oefening bij CrossFit Alkmaar is schaalbaar naar jouw niveau. Onze coaches houden rekening met je lichaam en passen de training aan. Je traint in kleine groepen met persoonlijke aandacht, zodat je veilig en effectief beweegt.", a: "Absoluut. Elke oefening bij CrossFit Alkmaar is schaalbaar naar jouw niveau. Onze coaches houden rekening met je lichaam en passen de training aan. Je traint in kleine groepen met persoonlijke aandacht, zodat je veilig en effectief beweegt." },
        { q: "Helpt sporten tegen overgangsklachten?", aText: "Ja, regelmatig bewegen en krachttraining kunnen overgangsklachten verminderen. Onderzoek toont aan dat sporten helpt bij het verminderen van opvliegers, beter slapen, meer energie, een stabielere stemming en het behouden van een gezond gewicht.", a: "Ja, regelmatig bewegen en krachttraining kunnen overgangsklachten verminderen. Onderzoek toont aan dat sporten helpt bij het verminderen van opvliegers, beter slapen, meer energie, een stabielere stemming en het behouden van een gezond gewicht." },
        { q: "Moet ik al fit zijn om te beginnen?", aText: "Nee, je hoeft helemaal niet fit te zijn. Je start met de Kickstart: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Onze coaches begeleiden je stap voor stap. Je gaat pas naar de groepslessen als jij je er klaar voor voelt.", a: <>Nee, je hoeft helemaal niet fit te zijn. Je start met de <Link href="/kickstart">Kickstart</Link>: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Onze coaches begeleiden je stap voor stap.</> },
      ]}
      ctaTitle="Zet de eerste stap - voor jezelf"
      ctaSubtitle="De overgang is uitdagend genoeg. Laat ons je helpen om je weer sterker en energieker te voelen. Plan een vrijblijvend kennismakingsgesprek."
    />
  );
}
