# AGENTS.md

## Project
SkillTree Forge is a browser-based skill tree editor for game development.
Tech stack: React, TypeScript, Vite.

## Product goals
- Build a small but polished browser-based skill tree editor
- Prioritize clarity, maintainability, and fast iteration
- Focus on MVP features first

## MVP scope
- Add skill nodes
- Select and edit node properties
- Drag and move nodes
- Connect nodes with directed edges
- Export the tree as JSON
- Load sample data
- Persist current state in localStorage

## Non-goals for now
- Undo/redo
- Zoom and minimap
- Auto layout
- Backend
- Authentication
- Complex animation

## UI/UX rules
- Dark theme
- Game-like but minimal UI
- Keep controls simple and obvious
- Prefer readability over flashy effects

## Code rules
- Use TypeScript strictly
- Keep components small and focused
- Separate UI, types, sample data, and utility functions
- Avoid unnecessary libraries unless they clearly reduce complexity
- Prefer simple SVG lines for edges
- Prefer local component state unless shared state is necessary

## File structure
- src/components
- src/types
- src/utils
- src/data

## Validation rules
- Prevent self-links
- Prevent duplicate edges
- Prevent cyclic dependencies if possible
- Do not break existing behavior when adding features

## Done when
- App builds successfully
- Main user flow works in browser
- No TypeScript errors
- README is updated when behavior changes

## Git rules
- Work per issue
- Use small, focused commits
- Write clear commit messages
- Do not push directly to main

## Review guidelines
- Check for broken node selection/edit flow
- Check for edge rendering bugs
- Check for invalid graph data
- Check for missing empty-state or error handling
- Check for accidental UI regressions
