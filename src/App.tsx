import { useEffect, useMemo, useState } from 'react';
import { Canvas } from './components/Canvas';
import { Inspector } from './components/Inspector';
import { Toolbar } from './components/Toolbar';
import { sampleTree } from './data/sampleTree';
import type { SkillNode, SkillTreeData } from './types/skillTree';
import { loadTree, saveTree } from './utils/storage';

function createNodeId(nodes: SkillNode[]): string {
  return `n-${String(nodes.length + 1).padStart(3, '0')}`;
}

export function App() {
  const [tree, setTree] = useState<SkillTreeData>(() => loadTree() ?? sampleTree);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(tree.nodes[0]?.id ?? null);

  useEffect(() => {
    saveTree(tree);
  }, [tree]);

  const selectedNode = useMemo(
    () => tree.nodes.find((node) => node.id === selectedNodeId),
    [selectedNodeId, tree.nodes],
  );

  function handleAddSampleNode() {
    const newNode: SkillNode = {
      id: createNodeId(tree.nodes),
      name: `New Skill ${tree.nodes.length + 1}`,
      description: 'Sample node created from toolbar action.',
      position: { x: 120 + tree.nodes.length * 40, y: 320 },
      cost: 1,
    };

    setTree((prev) => ({
      ...prev,
      nodes: [...prev.nodes, newNode],
    }));
    setSelectedNodeId(newNode.id);
  }

  function handleUpdateNode(
    nodeId: string,
    patch: Partial<Pick<SkillNode, 'name' | 'description' | 'cost'>>,
  ) {
    setTree((prev) => ({
      ...prev,
      nodes: prev.nodes.map((node) => (node.id === nodeId ? { ...node, ...patch } : node)),
    }));
  }

  return (
    <div className="app-shell">
      <Toolbar onAddSampleNode={handleAddSampleNode} />
      <main className="main-layout">
        <Canvas
          nodes={tree.nodes}
          edges={tree.edges}
          selectedNodeId={selectedNodeId}
          onSelectNode={setSelectedNodeId}
        />
        <Inspector selectedNode={selectedNode} onUpdateNode={handleUpdateNode} />
      </main>
    </div>
  );
}
