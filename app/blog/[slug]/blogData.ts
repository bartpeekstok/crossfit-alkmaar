// Blog post data - single source of truth for both listing and detail pages
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: { [key: string]: BlogPost } = {
  "een-hardcore-sportschool": {
    title: "Een 'hardcore' sportschool?",
    date: "2026-02-16",
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
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
