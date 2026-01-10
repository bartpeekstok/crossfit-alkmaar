// Blog post data extracted for both client and server usage
export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: { [key: string]: BlogPost } = {
  "waarom-warming-up-onmisbaar-is": {
    title: "Waarom een goede warming-up onmisbaar is",
    date: "8 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    excerpt: "Geen tijd voor warming-up? Dan heb je ook geen tijd voor resultaten. Die 10 minuten maken het verschil tussen een goede en een geweldige training.",
    content: "" // Content stays in page.tsx for now
  },
  "doelen-stellen-die-werken": {
    title: "Doelen stellen die echt werken",
    date: "7 januari 2025",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
    excerpt: "Waarom 'afvallen' geen goed doel is. En hoe je wél doelen stelt die je motiveren én resultaat opleveren.",
    content: ""
  },
  "training-als-stressverlichter": {
    title: "Training als de ultieme stressverlichter",
    date: "6 januari 2025",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80",
    excerpt: "Gestrest? Ga sporten. De wetenschap is duidelijk: beweging is een van de beste remedies tegen stress die er bestaat.",
    content: ""
  },
  "de-kracht-van-goede-voeding": {
    title: "De kracht van goede voeding: brandstof voor je prestaties",
    date: "5 januari 2025",
    category: "Voeding",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    excerpt: "Voeding is de fundering waarop al je trainingsresultaten worden gebouwd. Zonder de juiste brandstof presteert zelfs de beste motor niet optimaal.",
    content: ""
  },
  "herstel-de-vergeten-component": {
    title: "Herstel: de vergeten component van vooruitgang",
    date: "3 januari 2025",
    category: "Herstel",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    excerpt: "Hard trainen is slechts de helft van het verhaal. Wat je doet tussen je trainingen door bepaalt hoeveel vooruitgang je boekt.",
    content: ""
  },
  "mindset-de-sleutel-tot-succes": {
    title: "Mindset: de sleutel tot blijvend succes",
    date: "1 januari 2025",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    excerpt: "Je lichaam is tot veel meer in staat dan je denkt. Het is je geest die meestal opgeeft voordat je lichaam moet stoppen.",
    content: ""
  },
  "waarom-krachttraining-voor-50-plussers": {
    title: "Waarom krachttraining juist voor 50-plussers essentieel is",
    date: "12 december 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    excerpt: "Vanaf je 30e verlies je elk decennium zo'n 3-5% van je spiermassa. Na je 50e versnelt dit proces. Maar krachttraining kan dit omkeren.",
    content: ""
  },
  "5-tips-om-consistent-te-blijven": {
    title: "5 tips om consistent te blijven met trainen",
    date: "8 december 2024",
    category: "Mindset",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    excerpt: "Beginnen met sporten is makkelijk. Volhouden is de uitdaging. Deze 5 bewezen tips helpen je om van trainen een blijvende gewoonte te maken.",
    content: ""
  },
  "wat-eet-je-voor-en-na-training": {
    title: "Wat eet je het beste voor en na je training?",
    date: "1 december 2024",
    category: "Voeding",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80",
    excerpt: "De juiste voeding op het juiste moment kan het verschil maken tussen een goede en een geweldige training.",
    content: ""
  },
  "crossfit-voor-beginners": {
    title: "CrossFit voor beginners: wat kun je verwachten?",
    date: "25 november 2024",
    category: "CrossFit",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    excerpt: "Je hebt misschien video's gezien van extreme workouts. Is dit wel iets voor mij? Spoiler: ja, waarschijnlijk wel.",
    content: ""
  },
  "blessures-voorkomen": {
    title: "Zo voorkom je blessures tijdens het sporten",
    date: "18 november 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    excerpt: "Een blessure is de snelste manier om je vooruitgang te stoppen. Gelukkig zijn de meeste sportblessures te voorkomen.",
    content: ""
  },
  "meer-energie-door-beweging": {
    title: "Waarom beweging je juist meer energie geeft",
    date: "10 november 2024",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=1200&q=80",
    excerpt: "'Ik ben te moe om te sporten.' We hebben het allemaal weleens gedacht. Maar wat als sporten juist de oplossing is?",
    content: ""
  },
  "functioneel-trainen-vs-machines": {
    title: "Functioneel trainen vs. machines: wat werkt beter?",
    date: "9 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&q=80",
    excerpt: "Waarom functionele oefeningen zoals squats en deadlifts effectiever zijn dan geïsoleerde machine-oefeningen. De wetenschap is duidelijk.",
    content: ""
  },
  "de-kracht-van-samen-trainen": {
    title: "De kracht van samen trainen: waarom community werkt",
    date: "10 januari 2025",
    category: "Community",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80",
    excerpt: "Alleen trainen is lastig volhouden. Ontdek waarom mensen die samen trainen betere resultaten behalen én langer volhouden.",
    content: ""
  },
  "hoe-vaak-moet-je-trainen": {
    title: "Hoe vaak moet je trainen voor resultaat?",
    date: "11 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80",
    excerpt: "2x per week? 5x per week? De optimale trainingsfrequentie hangt af van je doelen, ervaring en herstelvermogen.",
    content: ""
  },
  "krachttraining-alkmaar": {
    title: "Krachttraining in Alkmaar: waar begin je?",
    date: "12 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
    excerpt: "Krachttraining is de beste investering in je gezondheid. Maar waar begin je in Alkmaar? Een overzicht van je opties.",
    content: ""
  },
  "afvallen-in-alkmaar": {
    title: "Afvallen in Alkmaar: de eerlijke waarheid over gewichtsverlies",
    date: "13 januari 2025",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
    excerpt: "Zoek je een sportschool in Alkmaar om af te vallen? Voor je je inschrijft, moet je dit weten over wat écht werkt bij gewichtsverlies.",
    content: ""
  },
  "sportschool-voor-beginners": {
    title: "Sportschool voor beginners: waar moet je op letten?",
    date: "14 januari 2025",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    excerpt: "Voor het eerst naar een sportschool? Begrijpelijk dat je niet weet waar je moet beginnen. Dit is alles wat je moet weten als beginner.",
    content: ""
  },
  "fitness-voor-50-plussers": {
    title: "Fitness voor 50+: sterker worden op latere leeftijd",
    date: "15 januari 2025",
    category: "Gezondheid",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    excerpt: "Op zoek naar een sportschool in Alkmaar die geschikt is voor 50-plussers? Dit is waarom krachttraining op latere leeftijd juist zo belangrijk is.",
    content: ""
  },
  "personal-training-alkmaar": {
    title: "Personal training in Alkmaar: is het de investering waard?",
    date: "16 januari 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=1200&q=80",
    excerpt: "Personal training kost al snel €50-100 per sessie. Is dat de investering waard? En zijn er alternatieven die net zo effectief zijn?",
    content: ""
  }
};

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}
