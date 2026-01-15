# Texas Farms - The Game: Changelog

All notable changes to the game will be documented here.

---

## [0.1.0] - 2026-01-15

### Added
- **Core Game Loop**
  - Buy Gloucestershire Old Spot pigs ($200 each)
  - Feed pigs daily ($5 per pig)
  - Advance time day by day
  - Sell mature pigs (180 days) for profit based on genetics
  - Health and happiness systems with neglect consequences

- **Time System**
  - Day/season/year cycle
  - 30 days per season (Spring, Summer, Fall, Winter)
  - Season-specific backgrounds

- **Save System**
  - Save/load to localStorage
  - Automatic game state persistence
  - Continue from title screen

- **User Interface**
  - Title screen with New Game/Continue
  - HUD showing money, date, animal count
  - Animal cards with health bars and status
  - Animal detail modal with genetics display
  - Toast notification system for all actions
  - Money change animations (+/- floating text)

- **Audio**
  - Web Audio API sound effects (no external files)
  - Sounds for: buy, sell, feed, day advance, achievements
  - Success/warning/error feedback tones

- **Achievement System**
  - 10 achievements to unlock
  - Persistent achievement storage
  - Achievement modal to view progress
  - Achievements: First pig, First sale, Pig Farmer, Survivor, etc.

- **Debug Panel**
  - State inspector (JSON view)
  - Time controls (+1/7/30/90 days)
  - Money controls
  - Animal spawn/kill controls
  - Action log

- **Testing**
  - Unit test framework (test-runner.html)
  - 16+ tests across 5 test suites
  - Playtest runner (playtest-runner.html)
  - 5 automated playtest scenarios

- **Mobile Support**
  - Responsive design
  - Large touch targets (48px minimum)
  - Touch-friendly animations
  - Bottom-sheet modals on mobile

### Technical
- Reducer pattern for all state mutations
- Deep clone for immutable state updates
- CSS-only graphics (emoji + gradients)
- Single HTML file architecture

---

## Version History

### [0.0.1] - Initial
- Initial project structure
- CLAUDE_PROMPT.md with development instructions
- ROADMAP.md with phased feature plan
- Basic game.html scaffold
