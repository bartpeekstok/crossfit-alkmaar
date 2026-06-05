"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function PersonalTrainerAlkmaarPage() {
  return (
    <SeoLanding
      name="Personal Trainer Alkmaar"
      slug="personal-trainer-alkmaar"
      description="Personal training met gecertificeerde coaches in Alkmaar. Individueel of in kleine groepen, afgestemd op jouw doelen."
      heroPhoto="/images/personal-training-header.jpg"
      heroTitle="Personal Trainer Alkmaar"
      heroSubtitle="Een coach die volledig op jou focust. Jouw doelen, jouw tempo, jouw resultaat."
      waaromTitle="Waarom een personal trainer bij CrossFit Alkmaar?"
      waaromContent={
        <>
          <p>Bij een personal trainer denk je misschien aan dure sessies in een commerciële gym. Bij CrossFit Alkmaar werkt het anders. Onze coaches zijn gecertificeerd en gespecialiseerd in functionele fitness - en je krijgt altijd persoonlijke aandacht.</p>
          <p>Of je nu kiest voor 1-op-1 personal training of onze <Link href="/small-group-training">small group training</Link> (max 4 personen): je traint altijd met een plan dat is afgestemd op jouw doelen, je niveau en eventuele blessures.</p>
          <p>Geen standaard schema van internet, maar een coach die naast je staat, je techniek corrigeert en je verder helpt dan je zelf zou komen.</p>
        </>
      }
      aanpakTitle="Personal training opties"
      aanpakCards={[
        { title: "1-op-1 Personal Training", body: "Volledige aandacht van je coach. Ideaal als je specifieke doelen hebt, revalidatie combineert met training, of gewoon het snelste resultaat wilt." },
        { title: "Small Group Training (max 4)", body: "Dezelfde persoonlijke aanpak, maar samen met een klein groepje. Je profiteert van de energie van de groep én de aandacht van je coach." },
        { title: "Kickstart Traject", body: <>Nieuw bij CrossFit? Start met de <Link href="/kickstart">Kickstart</Link>: persoonlijke sessies waarin je de basis leert voordat je naar groepslessen gaat.</> },
        { title: "Voedingsbegeleiding", body: <>Combineer training met <Link href="/voedingsadvies">voedingsadvies</Link> voor maximaal resultaat. Onze coaches helpen je met een plan dat past bij jouw leefstijl.</> },
      ]}
      voorwieTitle="Voor wie is personal training?"
      voorwieContent={
        <>
          <p>Personal training is voor iedereen die meer begeleiding wil. Of je nu wilt afvallen, sterker worden, revalideren na een blessure, of je voorbereiden op een specifiek doel - onze coaches maken het persoonlijk.</p>
          <p>Onze personal trainers werken met leden van 20 tot 70+ jaar. Het maakt niet uit waar je staat, het gaat erom waar je naartoe wilt.</p>
        </>
      }
      aeoTitle="Waarom een personal trainer?"
      aeoItems={[
        { q: "Wat doet een personal trainer anders dan een groepscoach?", a: <>Een personal trainer richt zich 100% op jou: jouw doelen, jouw lichaam, jouw tempo. Bij CrossFit Alkmaar combineer je het beste van twee werelden - <Link href="/personal-training">personal training</Link> voor individuele aandacht en groepslessen voor motivatie en community.</> },
        { q: "Hoe kies je een goede personal trainer in Alkmaar?", a: "Let op ervaring, certificeringen en persoonlijke klik. Bij CrossFit Alkmaar zijn alle trainers gecertificeerd en hebben jarenlange ervaring met uiteenlopende doelen: van afvallen tot revalidatie tot topprestaties." },
        { q: "Wat kost personal training en is het de investering waard?", a: <>Personal training is duurder dan groepslessen, maar levert sneller resultaat omdat het programma volledig op jou is afgestemd. Bij CrossFit Alkmaar bieden we ook <Link href="/small-group-training">small group training</Link> in groepen van max 6 als betaalbaar alternatief.</> },
      ]}
      members={[
        { videoId: "HlqFX84ue3o", name: "Tim", quote: "Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Wat doet een personal trainer bij CrossFit Alkmaar?", aText: "Onze personal trainers maken een programma op maat, begeleiden je 1-op-1 en helpen je bij specifieke doelen zoals afvallen, krachtopbouw of revalidatie.", a: "Onze personal trainers maken een programma op maat, begeleiden je 1-op-1 en helpen je bij specifieke doelen zoals afvallen, krachtopbouw of revalidatie." },
        { q: "Hoe vaak train ik met een personal trainer?", aText: "Dat bepaal je zelf. De meeste leden kiezen voor 1-2 sessies per week, vaak gecombineerd met groepslessen.", a: <>Dat bepaal je zelf. De meeste leden kiezen voor 1-2 sessies per week, vaak gecombineerd met <Link href="/groepslessen">groepslessen</Link>.</> },
        { q: "Wat kost personal training?", aText: "Neem contact op voor onze tarieven. We bieden losse sessies en pakketten aan. De kennismaking is altijd gratis.", a: <>Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> voor alle opties. We bieden losse sessies en pakketten aan. De kennismaking is altijd gratis.</> },
        { q: "Is personal training geschikt voor beginners?", aText: "Zeer geschikt. Je krijgt alle aandacht en leert de basis op jouw tempo, zonder de druk van een groep.", a: "Zeer geschikt. Je krijgt alle aandacht en leert de basis op jouw tempo, zonder de druk van een groep." },
      ]}
      ctaTitle="Gratis kennismakingsgesprek"
      ctaSubtitle="Benieuwd wat een personal trainer voor jou kan betekenen? Plan een vrijblijvend gesprek."
    />
  );
}
