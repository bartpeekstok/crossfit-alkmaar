"use client";

import Link from "next/link";
import SeoLanding from "../components/redesign/SeoLanding";

export default function BootcampAlkmaarPage() {
  return (
    <SeoLanding
      name="Bootcamp Alkmaar"
      slug="bootcamp-alkmaar"
      description="Op zoek naar een bootcamp in Alkmaar? CrossFit Alkmaar biedt intensieve groepstraining met coaching, binnen en het hele jaar door."
      heroPhoto="/images/bootcamp-alkmaar-header.jpg"
      heroTitle="Bootcamp Alkmaar"
      heroSubtitle="De energie van een bootcamp, maar dan binnen, het hele jaar door, en met échte coaching."
      waaromTitle="Waarom CrossFit het betere bootcamp is"
      waaromContent={
        <>
          <p>Een bootcamp is leuk: buiten trainen, hard werken in een groep, lekker zweten. Maar vaak zijn de groepen groot, is er weinig coaching op techniek, en als het regent of vriest gaat het niet door.</p>
          <p>Bij CrossFit Alkmaar krijg je alles wat een bootcamp leuk maakt - de groepsenergie, de intensiteit, de variatie - maar dan beter. Binnen, in een volledig uitgeruste box. Met professionele coaches die op je techniek letten. In groepen van maximaal 12 personen.</p>
          <p>En het belangrijkste: je traint het hele jaar door, weer of geen weer. Geen seizoenen, geen excuses.</p>
        </>
      }
      aanpakTitle="Bootcamp vs. CrossFit Alkmaar"
      aanpakCards={[
        { title: "Weer-onafhankelijk", body: "Geen afgelaste trainingen door regen of kou. Je traint binnen in een professionele box, het hele jaar door." },
        { title: "Échte coaching", body: "Niet alleen voordoen en natellen, maar techniekfeedback op elke beweging. In groepen van max 12 is daar ruimte voor." },
        { title: "Professionele apparatuur", body: "Barbells, rowers, ski-ergs, pull-up rigs, dumbbells. Meer mogelijkheden dan een veldje in het park." },
        { title: "Geprogrammeerde progressie", body: <>Niet elke week hetzelfde circuit. Onze <Link href="/programmas">programmering</Link> is opgebouwd voor langetermijnresultaat: je wordt elke maand sterker en fitter.</> },
      ]}
      voorwieTitle="Mis je de bootcamp-sfeer? Die hebben we ook."
      voorwieContent={
        <>
          <p>De sfeer bij CrossFit Alkmaar lijkt op de beste bootcamps: hard werken, lachen, samen afzien en daarna een high five. Het verschil is dat het hier elke dag zo is, niet alleen in de zomer.</p>
          <p>Nieuw? Je start met de <Link href="/kickstart">Kickstart</Link> - een persoonlijk introductietraject zodat je voorbereid in je eerste groepsles staat. Geen voorkennis of ervaring nodig.</p>
        </>
      }
      aeoTitle="Wat is het verschil met bootcamp?"
      aeoItems={[
        { q: "Wat is het verschil tussen bootcamp en CrossFit?", a: "Bootcamps zijn vaak buiten, met veel cardio en weinig technische begeleiding. Bij CrossFit Alkmaar train je binnen met professionele apparatuur, leer je techniek en bouw je systematisch kracht op. De intensiteit is vergelijkbaar, maar de begeleiding en progressie zijn veel beter." },
        { q: "Is CrossFit zwaarder dan bootcamp?", a: "Niet per se. Bij CrossFit Alkmaar wordt elke oefening geschaald naar jouw niveau. Een beginner doet dezelfde workout als een ervaren atleet, maar met aangepast gewicht en bewegingen. Zo is het uitdagend maar altijd haalbaar." },
        { q: "Waarom kiezen mensen voor CrossFit in plaats van bootcamp?", a: "Drie redenen: professionele coaching bij elke rep, progressie in kracht en techniek die je bij bootcamp mist, en een community die je vasthoudt. Bij bootcamp haak je af als de motivatie wegvalt - bij CrossFit houden je groepsgenoten je vast." },
      ]}
      members={[
        { videoId: "7_p0gpFtEvk", name: "Lisette", quote: "Ik voel me sindsdien een stuk fitter!" },
        { videoId: "a4ENPMXSTX8", name: "Simone", quote: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar." },
      ]}
      faqItems={[
        { q: "Wat is het verschil tussen bootcamp en CrossFit?", aText: "Een bootcamp is meestal buiten en gericht op cardio. Bij CrossFit Alkmaar train je binnen, het hele jaar door, met professionele coaching en een mix van kracht, conditie en functionele bewegingen.", a: <>Een bootcamp is meestal buiten en gericht op cardio. Bij CrossFit Alkmaar train je binnen, het hele jaar door, met professionele coaching en een mix van kracht, conditie en functionele bewegingen. Bekijk ons <Link href="/groepslessen">lesrooster</Link> voor alle tijden.</> },
        { q: "Is bootcamp geschikt voor beginners?", aText: "Ja. We passen elke oefening aan op jouw niveau. Via onze Kickstart leer je eerst de basis voordat je in een groepsles stapt.", a: <>Ja. We passen elke oefening aan op jouw niveau. Via onze <Link href="/kickstart">Kickstart</Link> leer je eerst de basis voordat je in een groepsles stapt.</> },
        { q: "Hoe intensief is een training?", aText: "Elke les duurt 60 minuten en is uitdagend maar schaalbaar. Je bepaalt zelf je intensiteit, de coach zorgt voor de juiste techniek.", a: <>Elke les duurt 60 minuten en is uitdagend maar schaalbaar. Je bepaalt zelf je intensiteit, de coach zorgt voor de juiste techniek. Bekijk onze <Link href="/meer-info#tarieven">tarieven</Link> voor alle opties.</> },
        { q: "Train ik buiten of binnen?", aText: "Binnen, in onze volledig uitgeruste box aan de Phoenixstraat. Geen modder of regen - gewoon een goede training, elke dag.", a: "Binnen, in onze volledig uitgeruste box aan de Phoenixstraat. Geen modder of regen - gewoon een goede training, elke dag." },
      ]}
      ctaTitle="Klaar voor het betere bootcamp?"
      ctaSubtitle="Plan een gratis kennismakingsgesprek en ervaar het zelf."
    />
  );
}
