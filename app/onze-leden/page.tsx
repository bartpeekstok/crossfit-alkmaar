"use client";

import { usePopup } from "../components/PopupContext";

export default function OnzeLedenPage() {
  const { openPopup } = usePopup();

  const videos = [
    { id: "G9HkOnSsKg8", type: "normal", caption: "Malou (9 jaar lid): 'Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten'" },
    { id: "esc-52ZNdPY", type: "normal", caption: "Steven (kickstart nov 2024): 'Houding en techniek, daar zijn de trainers hier ongelooflijk goed in'" },
    { id: "rG7rY2_BguQ", type: "normal", caption: "Jeanine (2 jaar lid): 'Toen ik hier voor het eerst kwam dacht ik: dit is het!'" },
    { id: "Pj-4CcdcVwA", type: "normal", caption: "Aaike (2 jaar lid): 'De sfeer is gewoon super goed en de trainers zijn van een goed niveau!'" },
    { id: "xpIP0VP_OEM", type: "normal", caption: "Demi (1 jaar lid): 'Iedereen gaat voor je juichen, dan krijg je een boost om door te gaan!'" },
    { id: "a2zbZIlU27Y", type: "normal", caption: "Bert (2 jaar lid): 'Ik had niet verwacht dat ik het zó leuk zou vinden'" },
    { id: "vzUzbwCCHEk", type: "normal", caption: "Paula (kickstart sept 2024): 'Die zware boodschappentassen? Dat gaat nu gewoon een stuk beter!'" },
    { id: "1qhbmRPtysU", type: "short", caption: "Jarrald (kickstart nov 2024): 'Lang sponsor geweest van sportscholen, nu 20 kilo afgevallen'" },
    { id: "atUYhclLhEE", type: "short", caption: "Maarten (3,5 jaar lid): 'CFA is voor mij een veilige haven'" },
    { id: "WuOyAWYDeG0", type: "normal", caption: "Lisette (1,5 jaar lid): 'Ik voel me sindsdien een stuk fitter!'" },
    { id: "PigB4z1ZCB8", type: "normal", caption: "Simon (4,5 jaar lid, nu coach): 'Je ziet mensen bij iedere workout fitter en sterker worden'" },
    { id: "14v6cnGlI7g", type: "normal", caption: "Simone (4 jaar lid): 'Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar.'" },
    { id: "5ThBJD4lJ0g", type: "normal", caption: "Souad (10 jaar lid): 'Vooral denken in mogelijkheden'" },
    { id: "HlqFX84ue3o", type: "short", caption: "Tim (10 jaar lid): 'Ik voel me fit en m'n hartslag in rust is ook omlaaggegaan'" },
  ];

  const normalVideos = videos.filter(v => v.type === "normal");
  const shortVideos = videos.filter(v => v.type === "short");

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/onze-leden-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Onze Leden
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Echte verhalen van echte mensen. Ontdek waarom onze leden graag bij CrossFit Alkmaar trainen.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Video's sectie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Bekijk de verhalen</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Van beginners tot gevorderden, van jong tot oud. Iedereen heeft zijn eigen reden om te trainen. Dit zijn hun verhalen.
          </p>

          {/* Shorts - 3 kolommen grid - BOVENAAN */}
          {shortVideos.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Korte clips</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {shortVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="aspect-[9/16]">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube short"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-center text-gray-900 p-4 text-sm font-medium italic">
                      {video.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Normale video's - 2 kolommen grid */}
          <h3 className="text-2xl font-bold mb-6 text-center">Verhalen</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {normalVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-gray-900 p-4 text-lg font-medium italic">
                  {video.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Word ook onderdeel van onze community</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ontdek of CrossFit Alkmaar bij jou past.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>
    </div>
  );
}