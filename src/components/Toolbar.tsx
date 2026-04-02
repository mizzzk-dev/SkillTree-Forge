interface ToolbarProps {
  onAddSampleNode: () => void;
}

export function Toolbar({ onAddSampleNode }: ToolbarProps) {
  return (
    <header className="toolbar">
      <h1>SkillTree Forge</h1>
      <button type="button" onClick={onAddSampleNode}>
        Add Sample Node
      </button>
    </header>
  );
}
