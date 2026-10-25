// The kinds of work the "Show work in" filter can pick out.
// Projects and skills are tagged with these keys.
export const AREAS = {
  frontend: 'Front end',
  backend: 'Back end',
  database: 'Databases',
  design: 'UI and graphics',
} as const;

export type Area = keyof typeof AREAS;
