"use client";

import { usePopup } from "../components/PopupContext";

export default function OnzeLedenPage() {
  const { openPopup } = usePopup();

  const videos = [
    { id: "G9HkOnSsKg8", type: "normal" },
    { id: "esc-52ZNdPY", type: "normal" },
    { id: "rG7rY2_BguQ", type: "normal" },
    { id: "Pj-4CcdcVwA", type: "normal" },
    { id: "xpIP0VP_OEM", type: "normal" },
    { id: "a2zbZIlU27Y", type: "normal" },
    { id: "vzUzbwCCHEk", type: "normal" },
    { id: "1qhbmRPtysU", type: "short" },
    { id: "-5Xcq147pcs", type: "short" },
    { id: "WuOyAWYDeG0", type: "normal" },
    { id: "PigB4z1ZCB8", type: "normal" },
    { id: "14v6cnGlI7g", type: "normal" },
    { id: "5ThBJD4lJ0g", type: "normal" },
    { id: "HlqFX84ue3o", type: "short" },
  ];

  const normalVideos = videos.filter(v => v.type === "normal");
  const shortVideos = videos.filter(v => v.type === "short");

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Onze Leden
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Echte verhalen van echte mensen. Ontdek waarom onze leden graag bij CrossFit Alkmaar trainen.
          </p>
          <button
            onClick={openPopup}
            className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
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
          
          {/* Normale video's - 2 kolommen grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              </div>
            ))}
          </div>

          {/* Shorts - 3 kolommen grid */}
          {shortVideos.length > 0 && (
            <>
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
                  </div>
                ))}
              </div>
            </>
          )}
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