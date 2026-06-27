// ─── Shape definitions ────────────────────────────────────────────────────────

export const SHAPES = [
  {
    id: 'cube',
    name: 'Cube',
    color: '#4F8EF7',
    colorDark: '#1D4ED8',
    colorLight: '#BFDBFE',
    hint: 'A cube has equal square faces.',
    example: 'Like a dice or a box!',
    homeLabel: 'Cube Home',
    bgClass: 'from-blue-400 to-blue-600',
    realWorldExample: 'a dice or box',
    propertyClue: "doesn't roll easily",
    featureClue: 'flat square faces',
    homeClue: 'square door',
  },
  {
    id: 'cuboid',
    name: 'Cuboid',
    color: '#A855F7',
    colorDark: '#7E22CE',
    colorLight: '#E9D5FF',
    hint: 'A cuboid looks like a long box.',
    example: 'Like a book, brick, or lunch box!',
    homeLabel: 'Cuboid Home',
    bgClass: 'from-purple-400 to-purple-700',
    realWorldExample: 'a brick or lunch box',
    propertyClue: 'slides and stacks easily',
    featureClue: 'rectangle faces',
    homeClue: 'rectangle door',
  },
  {
    id: 'sphere',
    name: 'Sphere',
    color: '#F87171',
    colorDark: '#DC2626',
    colorLight: '#FEE2E2',
    hint: 'A sphere is round like a ball.',
    example: 'Like a ball!',
    homeLabel: 'Sphere Home',
    bgClass: 'from-red-400 to-red-600',
    realWorldExample: 'a ball',
    propertyClue: 'rolls everywhere',
    featureClue: 'round with no corners',
    homeClue: 'round arched door',
  },
  {
    id: 'cylinder',
    name: 'Cylinder',
    color: '#34D399',
    colorDark: '#059669',
    colorLight: '#D1FAE5',
    hint: 'A cylinder has two round faces.',
    example: 'Like a can or a drum!',
    homeLabel: 'Cylinder Home',
    bgClass: 'from-emerald-400 to-emerald-600',
    realWorldExample: 'a can or drum',
    propertyClue: 'can roll on its side',
    featureClue: 'two circular flat ends',
    homeClue: 'oval door',
  },
  {
    id: 'cone',
    name: 'Cone',
    color: '#FBBF24',
    colorDark: '#D97706',
    colorLight: '#FEF3C7',
    hint: 'A cone has a pointy top and round bottom.',
    example: 'Like an ice cream cone!',
    homeLabel: 'Cone Home',
    bgClass: 'from-yellow-400 to-orange-500',
    realWorldExample: 'an ice cream cone',
    propertyClue: 'has a pointy top',
    featureClue: 'round bottom and pointy top',
    homeClue: 'triangle door',
  },
];

// ─── 5 unique question templates ──────────────────────────────────────────────

const QUESTION_TEMPLATES = [
  {
    type: 'name_match',
    build: (s) => `Find the home for the ${s.name}!`,
  },
  {
    type: 'real_world_match',
    build: (s) => `Which home matches the shape like ${s.realWorldExample}?`,
  },
  {
    type: 'property_match',
    build: (s) => `Find the shape that ${s.propertyClue}.`,
  },
  {
    type: 'feature_match',
    build: (s) => `Find the shape with ${s.featureClue}.`,
  },
  {
    type: 'home_clue_match',
    build: (s) => `Find the home with the ${s.homeClue}!`,
  },
];

// ─── Round generator ──────────────────────────────────────────────────────────
//
// Zips a shuffled copy of SHAPES with a shuffled copy of QUESTION_TEMPLATES so
// each of the 5 rounds gets a UNIQUE target shape AND a UNIQUE question type.
// This guarantees no repeated shapes and no repeated templates in one session.

export function generateRounds() {
  // Shuffle both arrays independently
  const shuffledShapes = [...SHAPES].sort(() => Math.random() - 0.5);
  const shuffledTemplates = [...QUESTION_TEMPLATES].sort(() => Math.random() - 0.5);

  return shuffledShapes.map((target, i) => {
    const template = shuffledTemplates[i];

    // 2 distractors drawn from the other 4 shapes (randomly)
    const distractors = SHAPES
      .filter(s => s.id !== target.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const options = [target, ...distractors].sort(() => Math.random() - 0.5);

    return {
      target,
      options,
      questionType: template.type,
      question: template.build(target),
    };
  });
}
