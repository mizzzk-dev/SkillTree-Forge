import type { SkillTreeData } from '../types/skillTree';

const STORAGE_KEY = 'skilltree-forge/tree';

export function saveTree(data: SkillTreeData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadTree(): SkillTreeData | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as SkillTreeData;
  } catch {
    return null;
  }
}
