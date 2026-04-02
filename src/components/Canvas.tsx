import type { SkillEdge, SkillNode } from '../types/skillTree';

interface CanvasProps {
  nodes: SkillNode[];
  edges: SkillEdge[];
  selectedNodeId: string | null;
  onSelectNode: (nodeId: string) => void;
}

export function Canvas({ nodes, edges, selectedNodeId, onSelectNode }: CanvasProps) {
  return (
    <section className="canvas">
      <svg className="edge-layer" width="100%" height="100%">
        {edges.map((edge) => {
          const from = nodes.find((node) => node.id === edge.fromNodeId);
          const to = nodes.find((node) => node.id === edge.toNodeId);
          if (!from || !to) return null;

          return (
            <line
              key={edge.id}
              x1={from.position.x + 72}
              y1={from.position.y + 24}
              x2={to.position.x + 72}
              y2={to.position.y + 24}
            />
          );
        })}
      </svg>

      {nodes.map((node) => (
        <button
          key={node.id}
          type="button"
          className={`node-card ${selectedNodeId === node.id ? 'is-selected' : ''}`}
          style={{ left: node.position.x, top: node.position.y }}
          onClick={() => onSelectNode(node.id)}
        >
          <strong>{node.name}</strong>
          <span>Cost: {node.cost}</span>
        </button>
      ))}
    </section>
  );
}
