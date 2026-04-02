export interface Position {
  x: number;
  y: number;
}

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  position: Position;
  cost: number;
}

export interface SkillEdge {
  id: string;
  fromNodeId: string;
  toNodeId: string;
}

export interface SkillTreeData {
  nodes: SkillNode[];
  edges: SkillEdge[];
}
