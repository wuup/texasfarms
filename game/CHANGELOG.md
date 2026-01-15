# Texas Farms - The Game: Changelog

All notable changes to the game will be documented here.

---

## [0.4.0] - 2026-01-15

### Added
- **Champagne D'Argent Rabbits**
  - New animal type with unique gameplay
  - Buy rabbits for $50 each
  - Market ready at 90 days (faster than pigs!)
  - Valued at $8/lb (higher price per pound, smaller animals)
  - Rabbit genetics: Fur Quality, Growth Rate, Size, Litter Size

- **Rabbit Breeding**
  - Faster breeding cycle than pigs
  - 31-day pregnancy (vs 114 days for pigs)
  - 14-day breeding cooldown
  - Litter sizes: 4-10 kits

- **Rabbit Pelts**
  - Adult rabbits (120+ days) produce valuable pelts
  - Pelt price based on fur quality genetics
  - Extra income when selling mature rabbits

- **Rabbit Hutch Building**
  - Click the hutch to see rabbit statistics
  - Track pregnant does, total weight, health

- **Auto-Play Feature**
  - Click "Auto" button to auto-feed and advance days
  - Reduces tedious clicking for 180-day pig cycles
  - Pulsing green button shows when active
  - Click again to stop

### Changed
- Feed costs now calculated per animal type
- Building counts show pigs and rabbits separately
- Animal modal adapts to show rabbit-specific info
- Version bumped to 0.4.0

### Technical
- Added createRabbit() and rabbit factory functions
- Added rabbit-specific reducer actions (BUY_RABBIT, SELL_RABBIT, BREED_RABBIT)
- ADVANCE_DAY now processes both pigs and rabbits
- FEED_ALL handles mixed animal populations

---

## [0.3.0] - 2026-01-15

### Added
- **Breeding System**
  - Breed mature pigs (180+ days) with happiness above 60%
  - Male and female pigs with sex indicators (♂/♀)
  - Pregnancy duration: 114 days (realistic pig gestation)
  - Breeding cooldown: 60 days after giving birth
  - Litter sizes vary by mother's genetics (6-12 piglets)

- **Genetic Inheritance**
  - Offspring inherit averaged genetics from both parents
  - Mutation rate adds variation (+/- 10% per trait)
  - Four genetic traits: marbling, growth rate, litter size, temperament
  - Visual genetics display with progress bars

- **Lineage Tracking**
  - Each pig tracks mother, father, and generation number
  - Lineage panel in animal details shows family tree
  - Generation counter increases with each breeding cycle

- **Breeding Stock Sales**
  - Sell pigs as breeding stock for 1.5x premium
  - Premium price reflects genetic quality
  - Alternative income strategy for high-genetics pigs

- **Breeding Achievements**
  - Matchmaker: Breed your first pair of pigs
  - Proud Parent: Have piglets born on your farm
  - Pig Dynasty: Raise a 3rd generation pig
  - Selective Breeder: Breed a pig with genetics avg > 85%
  - Litter Master: Have 10+ piglets in a single litter

- **Breeding Tutorial Hints**
  - Contextual hints for breeding-ready pigs
  - Pregnancy notification hints

### Changed
- Animal cards now show sex icons and pregnancy status
- Animal modal redesigned with breeding partner selection
- Updated achievements to 15 total
- Version bumped to 0.3.0

### Technical
- Added createOffspring() for genetic inheritance
- Added canBreed() and getBreedingPairs() helpers
- Added BREED and SELL_BREEDING_STOCK actions
- ADVANCE_DAY now processes pregnancies and births
- State tracks pregnant, pregnantDays, pregnantWith, breedingCooldown per pig

---

## [0.2.0] - 2026-01-15

### Added
- **Weight-Based Economy**
  - Pigs now have weight that increases daily when fed
  - Sell price calculated as weight x $3/lb x seasonal modifier x quality bonus
  - Weight gain affected by genetics, happiness, and season

- **Pig Lifecycle Stages**
  - Piglet (0-60 days): Starting stage
  - Grower (61-120 days): Mid-growth stage
  - Finisher (121-180 days): Market-ready stage
  - Visual indicators show stage with different emoji/labels

- **Seasonal Effects**
  - Spring: +10% growth rate, normal prices
  - Summer: -10% feed cost, -5% market price
  - Fall: +15% market price (best selling time!)
  - Winter: +30% feed cost, -15% growth, +10% market price

- **Random Events System**
  - Perfect Weather: Happiness boost
  - Market Boom: +20% prices for 3 days
  - Farm Visitor: $50 gift
  - Storm: Happiness penalty
  - Feed Sale: 50% off feed for 2 days
  - Vet Visit: Health boost

- **Tutorial System**
  - Contextual hints for new players
  - Guides through first pig purchase, feeding, selling
  - Season and market timing tips
  - Hunger warnings

- **Farm Visual Layout**
  - Sidebar with building icons (Pig Barn, Feed Storage)
  - Coming soon placeholders for Rabbit Hutch, Chicken Coop
  - Pasture area with seasonal backgrounds
  - Season info panel showing current modifiers
  - Active bonus display for temporary events

- **Building Info Modals**
  - Click Pig Barn to see farm statistics
  - Click Feed Storage to see seasonal feed costs

### Changed
- Sell prices now based on weight instead of flat rate
- Feed costs vary by season
- HUD now shows more detailed farm info
- Animal cards show weight and lifecycle stage

### Technical
- Updated test runner to v0.2 with weight/season tests (28 tests)
- Updated playtest runner to v0.2 with 8 scenarios
- Added calculatePigWeight() and calculateSellPrice() helpers
- State now tracks marketBonus and feedDiscount with timers

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
