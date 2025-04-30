
interface Commune {
  nom: string;
  communes_voisines: string[];
}

export interface LocalPageData {
  ville: Commune;
  region: string;
  departement: string;
  titre_accroche: string;
  specificites?: string;
}

export const localPagesDataAin: LocalPageData[] = [
  {
    ville: {
      nom: "Bourg-en-Bresse",
      communes_voisines: ["Péronnas", "Viriat", "Saint-Denis-lès-Bourg", "Montagnat", "Jasseron", "Polliat"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "carreleur professionnel spécialisé dans la rénovation intérieure",
    specificites: "Capitale de l'Ain, Bourg-en-Bresse est reconnue pour son patrimoine architectural riche, notamment son monastère royal de Brou. Notre équipe s'adapte particulièrement aux besoins de rénovation des logements typiques de la région."
  },
  {
    ville: {
      nom: "Ambérieu-en-Bugey",
      communes_voisines: ["Saint-Denis-en-Bugey", "Château-Gaillard", "Douvres", "Ambronay", "Bettant", "Saint-Rambert-en-Bugey"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "expert en pose de carrelage et rénovation de salle de bain",
    specificites: "Située au pied du massif du Bugey, Ambérieu-en-Bugey bénéficie d'un cadre naturel exceptionnel. Nos prestations s'adaptent parfaitement aux habitations traditionnelles de cette commune dynamique."
  },
  {
    ville: {
      nom: "Oyonnax",
      communes_voisines: ["Bellignat", "Arbent", "Dortan", "Géovreisset", "Veyziat", "Martignat"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "votre carreleur pour tous travaux de rénovation",
    specificites: "Capitale française de la plasturgie, Oyonnax présente un patrimoine industriel unique. Nous intervenons aussi bien pour les particuliers que pour les professionnels souhaitant moderniser leurs locaux."
  },
  {
    ville: {
      nom: "Miribel",
      communes_voisines: ["Saint-Maurice-de-Beynost", "Neyron", "Beynost", "Thil", "Mas Rillier", "Les Échets"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "artisan carreleur et spécialiste des douches à l'italienne",
    specificites: "Située aux portes de Lyon, Miribel offre un cadre de vie privilégié entre le Rhône et le Parc de Miribel-Jonage. Notre entreprise accompagne les habitants dans leurs projets de rénovation moderne."
  },
  {
    ville: {
      nom: "Meximieux",
      communes_voisines: ["Pérouges", "Villieu-Loyes-Mollon", "Charnoz-sur-Ain", "Chazey-sur-Ain", "Saint-Jean-de-Niost", "Bourg-Saint-Christophe"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "entreprise de carrelage et rénovation intérieure",
    specificites: "À proximité de la cité médiévale de Pérouges, Meximieux bénéficie d'un riche patrimoine historique. Nous sommes spécialisés dans la rénovation respectueuse du cachet des habitations anciennes."
  },
  {
    ville: {
      nom: "Belley",
      communes_voisines: ["Brens", "Chazey-Bons", "Saint-Germain-les-Paroisses", "Magnieu", "Virignin", "Arbignieu"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Ain",
    titre_accroche: "artisan carreleur pour vos projets de rénovation",
    specificites: "Capitale historique du Bugey, Belley est entourée de montagnes et de lacs. Notre entreprise apporte son savoir-faire pour créer des espaces intérieurs alliant tradition et modernité."
  }
];

export const localPagesDataOuestLyonnais: LocalPageData[] = [
  {
    ville: {
      nom: "L'Arbresle",
      communes_voisines: ["Sain-Bel", "Éveux", "Fleurieux-sur-L'Arbresle", "Saint-Germain-Nuelles", "Bully", "Savigny"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "artisan carreleur pour vos projets de rénovation",
    specificites: "Située au carrefour des vallées de la Brévenne et de la Turdine, L'Arbresle est appréciée pour son cadre de vie paisible. Notre équipe intervient régulièrement dans cette ville et ses environs pour tous types de travaux."
  },
  {
    ville: {
      nom: "Tassin-la-Demi-Lune",
      communes_voisines: ["Écully", "Charbonnières-les-Bains", "Francheville", "Craponne", "Saint-Genis-les-Ollières", "Lyon"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "spécialiste du carrelage et de la rénovation de salle de bain",
    specificites: "Commune résidentielle de l'ouest lyonnais, Tassin-la-Demi-Lune se caractérise par un habitat diversifié allant des maisons de maître aux résidences contemporaines. Nous proposons des solutions adaptées à chaque type de logement."
  },
  {
    ville: {
      nom: "Écully",
      communes_voisines: ["Lyon", "Tassin-la-Demi-Lune", "Champagne-au-Mont-d'Or", "Dardilly", "Saint-Didier-au-Mont-d'Or", "Charbonnières-les-Bains"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "expert en pose de carrelage et aménagement intérieur",
    specificites: "Connue pour ses grandes écoles et son cadre verdoyant, Écully abrite de nombreuses demeures de caractère. Notre entreprise met son expertise au service des projets de rénovation haut de gamme."
  },
  {
    ville: {
      nom: "Charbonnières-les-Bains",
      communes_voisines: ["Tassin-la-Demi-Lune", "Écully", "La Tour-de-Salvagny", "Marcy-l'Étoile", "Saint-Genis-les-Ollières", "Dardilly"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "carreleur professionnel pour rénovation de qualité",
    specificites: "Ancienne station thermale, Charbonnières-les-Bains est aujourd'hui une commune résidentielle prisée. Nous accompagnons ses habitants dans la rénovation de leurs propriétés avec des matériaux de qualité."
  },
  {
    ville: {
      nom: "Dardilly",
      communes_voisines: ["Écully", "Champagne-au-Mont-d'Or", "Limonest", "La Tour-de-Salvagny", "Charbonnières-les-Bains", "Dommartin"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "entreprise de carrelage et pierre naturelle",
    specificites: "Commune natale du Curé d'Ars, Dardilly allie dynamisme économique et cadre de vie préservé. Notre équipe propose des services de carrelage et de rénovation adaptés aux exigences des résidents."
  },
  {
    ville: {
      nom: "Limonest",
      communes_voisines: ["Dardilly", "Saint-Didier-au-Mont-d'Or", "Champagne-au-Mont-d'Or", "Saint-Cyr-au-Mont-d'Or", "Chasselay", "Lissieu"]
    },
    region: "Auvergne-Rhône-Alpes",
    departement: "Rhône",
    titre_accroche: "votre carreleur pour tous travaux de rénovation",
    specificites: "Située sur les hauteurs des Monts d'Or, Limonest offre une vue imprenable sur l'agglomération lyonnaise. Nous réalisons des travaux de carrelage et de rénovation pour sublimer les intérieurs des résidences de cette commune prestigieuse."
  }
];
