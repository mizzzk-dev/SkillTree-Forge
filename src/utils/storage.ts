import type { SkillNode, SkillTreeData } from '../types/skillTree';
import { sanitizeEdges } from './graphValidation';

const STORAGE_KEY = 'skilltree-forge/tree';

function isValidNode(node: unknown): node is SkillNode {
  if (typeof node !== 'object' || node === null) {
    return false;
  }

  const value = node as Partial<SkillNode>;
  return (
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    typeof value.description === 'string' &&
    typeof value.cost === 'number' &&
    typeof value.position?.x === 'number' &&
    typeof value.position?.y === 'number'
  );
}

export function saveTree(data: SkillTreeData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadTree(): SkillTreeData | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<SkillTreeData>;
    const nodes = (parsed.nodes ?? []).filter(isValidNode);
    const edges = sanitizeEdges(nodes, parsed.edges ?? []);

    return {
      nodes,
      edges,
    };
  } catch {
    return null;
  }
}
