import type { SkillTreeData } from '../types/skillTree';

export const sampleTree: SkillTreeData = {
  nodes: [
    {
      id: 'n-001',
      name: 'Quick Slash',
      description: 'Unlock a faster basic attack.',
      position: { x: 80, y: 80 },
      cost: 1,
    },
    {
      id: 'n-002',
      name: 'Combo I',
      description: 'Add a second hit after basic attack.',
      position: { x: 340, y: 200 },
      cost: 2,
    },
  ],
  edges: [
    {
      id: 'e-001',
      fromNodeId: 'n-001',
      toNodeId: 'n-002',
    },
  ],
};
