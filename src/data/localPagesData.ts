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

export const localPagesDataAlpesMaritimes: LocalPageData[] = [
  {
    ville: {
      nom: "Nice",
      communes_voisines: ["Saint-Laurent-du-Var", "Villefranche-sur-Mer", "La Trinité", "Saint-André-de-la-Roche", "Falicon", "Cagnes-sur-Mer"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "carreleur professionnel pour rénovation et décoration",
    specificites: "Capitale de la Côte d'Azur, Nice est réputée pour son architecture colorée et ses immeubles de style Belle Époque. Notre entreprise s'adapte aux spécificités des appartements haussmanniens comme aux villas contemporaines de la région."
  },
  {
    ville: {
      nom: "Antibes",
      communes_voisines: ["Juan-les-Pins", "Vallauris", "Biot", "Villeneuve-Loubet", "Valbonne", "Golfe-Juan"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "spécialiste du carrelage et de la pierre naturelle",
    specificites: "Entre le Cap d'Antibes et ses résidences de prestige et la vieille ville aux ruelles pittoresques, notre équipe intervient pour tous types de projets, du plus classique au plus luxueux."
  },
  {
    ville: {
      nom: "Cannes",
      communes_voisines: ["Le Cannet", "Mougins", "Mandelieu-la-Napoule", "La Roquette-sur-Siagne", "Théoule-sur-Mer", "Vallauris"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "expert en pose de carrelage et rénovation haut de gamme",
    specificites: "Ville du Festival et des palaces, Cannes est synonyme d'élégance et de raffinement. Notre savoir-faire en matériaux nobles répond parfaitement aux exigences des propriétés de standing de la Croisette et des collines environnantes."
  },
  {
    ville: {
      nom: "Cagnes-sur-Mer",
      communes_voisines: ["Saint-Laurent-du-Var", "La Colle-sur-Loup", "Villeneuve-Loubet", "Saint-Paul-de-Vence", "Nice", "Vence"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "artisan carreleur pour rénovation et création d'espaces",
    specificites: "Entre mer et collines, Cagnes-sur-Mer offre une diversité architecturale allant du village médiéval du Haut-de-Cagnes aux résidences balnéaires modernes. Notre équipe s'adapte à tous les styles pour vos projets de carrelage."
  },
  {
    ville: {
      nom: "Grasse",
      communes_voisines: ["Mouans-Sartoux", "Peymeinade", "Le Tignet", "Auribeau-sur-Siagne", "Pégomas", "La Roquette-sur-Siagne"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "votre carreleur pour tous travaux de rénovation intérieure",
    specificites: "Capitale mondiale du parfum, Grasse séduit par son centre historique et ses bastides provençales. Notre expertise s'adapte parfaitement aux rénovations d'habitations traditionnelles comme aux constructions récentes."
  },
  {
    ville: {
      nom: "Menton",
      communes_voisines: ["Roquebrune-Cap-Martin", "Gorbio", "Sainte-Agnès", "Castellar", "La Turbie", "Beausoleil"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Alpes-Maritimes",
    titre_accroche: "artisan carreleur et spécialiste de la rénovation",
    specificites: "Surnommée la perle de la France, Menton est célèbre pour ses jardins et ses façades colorées. Notre entreprise vous accompagne dans vos projets de carrelage et de rénovation, en harmonie avec le charme méditerranéen de la région."
  }
];

export const localPagesDataVar: LocalPageData[] = [
  {
    ville: {
      nom: "Toulon",
      communes_voisines: ["La Garde", "La Valette-du-Var", "Le Revest-les-Eaux", "Ollioules", "Six-Fours-les-Plages", "Saint-Mandrier-sur-Mer"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "artisan carreleur pour projets de rénovation et décoration",
    specificites: "Préfecture du Var et port militaire, Toulon allie patrimoine historique et modernité. Notre entreprise intervient aussi bien dans les appartements haussmanniens du centre-ville que dans les villas contemporaines des hauteurs."
  },
  {
    ville: {
      nom: "La Seyne-sur-Mer",
      communes_voisines: ["Toulon", "Ollioules", "Six-Fours-les-Plages", "Saint-Mandrier-sur-Mer", "Sanary-sur-Mer", "Bandol"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "expert en pose de carrelage et rénovation intérieure",
    specificites: "Entre son passé industriel et naval et sa reconversion balnéaire, La Seyne-sur-Mer propose une variété architecturale unique. Nous mettons notre savoir-faire au service de tous vos projets de carrelage et de rénovation."
  },
  {
    ville: {
      nom: "Hyères",
      communes_voisines: ["Carqueiranne", "La Crau", "La Londe-les-Maures", "Pierrefeu-du-Var", "La Garde", "Le Pradet"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "spécialiste du carrelage et de la rénovation de salle de bain",
    specificites: "Ville aux multiples facettes entre ses îles paradisiaques, sa presqu'île de Giens et son centre historique, Hyères offre un cadre de vie exceptionnel. Notre équipe vous accompagne dans tous vos projets d'aménagement intérieur."
  },
  {
    ville: {
      nom: "Fréjus",
      communes_voisines: ["Saint-Raphaël", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Bagnols-en-Forêt", "Les Adrets-de-l'Estérel", "Saint-Aygulf"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "votre carreleur pour tous travaux de rénovation",
    specificites: "Cité romaine riche d'un patrimoine bimillénaire, Fréjus est également une destination balnéaire prisée. Notre entreprise s'adapte aux spécificités des constructions anciennes comme aux résidences contemporaines."
  },
  {
    ville: {
      nom: "Draguignan",
      communes_voisines: ["Trans-en-Provence", "Flayosc", "Ampus", "La Motte", "Lorgues", "Figanières"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "artisan carreleur et spécialiste des douches à l'italienne",
    specificites: "Ancienne préfecture du Var située dans l'arrière-pays, Draguignan conserve un charme provençal authentique. Nous proposons nos services de carrelage et de rénovation dans le respect du style architectural local."
  },
  {
    ville: {
      nom: "Saint-Raphaël",
      communes_voisines: ["Fréjus", "Puget-sur-Argens", "Les Adrets-de-l'Estérel", "Saint-Aygulf", "Agay", "Boulouris"]
    },
    region: "Provence-Alpes-Côte d'Azur",
    departement: "Var",
    titre_accroche: "entreprise de carrelage et rénovation intérieure",
    specificites: "Station balnéaire élégante aux multiples visages, Saint-Raphaël s'étend des plages aux massifs de l'Estérel. Notre expertise s'adapte aussi bien aux villas Belle Époque qu'aux appartements contemporains."
  }
];
