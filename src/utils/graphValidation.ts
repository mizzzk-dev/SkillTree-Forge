import type { SkillEdge, SkillNode } from '../types/skillTree';

function buildAdjacencyMap(edges: SkillEdge[]): Map<string, string[]> {
  const adjacency = new Map<string, string[]>();

  for (const edge of edges) {
    const current = adjacency.get(edge.fromNodeId) ?? [];
    current.push(edge.toNodeId);
    adjacency.set(edge.fromNodeId, current);
  }

  return adjacency;
}

function hasPath(adjacency: Map<string, string[]>, from: string, to: string): boolean {
  const queue: string[] = [from];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || visited.has(current)) {
      continue;
    }

    if (current === to) {
      return true;
    }

    visited.add(current);
    const nextNodes = adjacency.get(current) ?? [];
    queue.push(...nextNodes);
  }

  return false;
}

export function isValidEdge(candidate: SkillEdge, existingEdges: SkillEdge[]): boolean {
  if (candidate.fromNodeId === candidate.toNodeId) {
    return false;
  }

  const duplicate = existingEdges.some(
    (edge) => edge.fromNodeId === candidate.fromNodeId && edge.toNodeId === candidate.toNodeId,
  );

  if (duplicate) {
    return false;
  }

  const adjacency = buildAdjacencyMap(existingEdges);
  return !hasPath(adjacency, candidate.toNodeId, candidate.fromNodeId);
}

export function sanitizeEdges(nodes: SkillNode[], edges: SkillEdge[]): SkillEdge[] {
  const nodeIds = new Set(nodes.map((node) => node.id));
  const validEdges: SkillEdge[] = [];

  for (const edge of edges) {
    if (!nodeIds.has(edge.fromNodeId) || !nodeIds.has(edge.toNodeId)) {
      continue;
    }

    if (isValidEdge(edge, validEdges)) {
      validEdges.push(edge);
    }
  }

  return validEdges;
}
