import type { ChangeEvent } from 'react';
import type { SkillNode } from '../types/skillTree';

interface InspectorProps {
  selectedNode: SkillNode | undefined;
  onUpdateNode: (nodeId: string, patch: Partial<Pick<SkillNode, 'name' | 'description' | 'cost'>>) => void;
}

export function Inspector({ selectedNode, onUpdateNode }: InspectorProps) {
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    if (!selectedNode) {
      return;
    }
    onUpdateNode(selectedNode.id, { name: event.target.value });
  }

  function handleCostChange(event: ChangeEvent<HTMLInputElement>) {
    if (!selectedNode) {
      return;
    }
    onUpdateNode(selectedNode.id, { cost: Number.parseInt(event.target.value, 10) || 0 });
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (!selectedNode) {
      return;
    }
    onUpdateNode(selectedNode.id, { description: event.target.value });
  }

  return (
    <aside className="inspector">
      <h2>Inspector</h2>
      {selectedNode ? (
        <div className="inspector-card">
          <label>
            Name
            <input type="text" value={selectedNode.name} onChange={handleNameChange} />
          </label>

          <label>
            Cost
            <input type="number" min={0} value={selectedNode.cost} onChange={handleCostChange} />
          </label>

          <label>
            Description
            <textarea rows={4} value={selectedNode.description} onChange={handleDescriptionChange} />
          </label>

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
