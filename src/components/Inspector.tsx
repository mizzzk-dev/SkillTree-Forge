import type { SkillNode } from '../types/skillTree';

interface InspectorProps {
  selectedNode: SkillNode | undefined;
}

export function Inspector({ selectedNode }: InspectorProps) {
  return (
    <aside className="inspector">
      <h2>Inspector</h2>
      {selectedNode ? (
        <div className="inspector-card">
          <p>
            <strong>Name:</strong> {selectedNode.name}
          </p>
          <p>
            <strong>Cost:</strong> {selectedNode.cost}
          </p>
          <p>
            <strong>Description:</strong> {selectedNode.description}
          </p>
          <p>
            <strong>ID:</strong> {selectedNode.id}
          </p>
        </div>
      ) : (
        <p>Select a node to inspect details.</p>
      )}
    </aside>
  );
}
