import { getCollection } from 'astro:content';

// Drafts show up in `npm run dev` only, never in the built site.
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

// Entries marked "sample" are placeholders: visible while you develop, left out of the built site.
export async function getActivities() {
  const activities = await getCollection('activities', ({ data }) => import.meta.env.DEV || !data.sample);
  return activities.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}
