# Texas Farms - The Game: Development Roadmap

## Current Phase: Phase 4 IN PROGRESS

### Phase 1 Goals ✅
Build a minimal playable game with one animal type.

- [x] Project structure and entry point (game.html)
- [x] Game state architecture
- [x] Action/dispatch system
- [x] Save/Load to localStorage
- [x] Basic renderer (emoji/CSS)
- [x] Day/time system
- [x] GOS Pig entity (buy, feed, sell)
- [x] Simple economy (money in/out)
- [x] HUD (money, day, season display)
- [x] Debug panel (state inspector, time controls, spawn)
- [x] Test framework setup
- [x] 3 passing unit tests (16+ tests across 5 suites)
- [x] 3 passing playtest scenarios (5 scenarios)
- [x] Mobile touch support

**BONUS COMPLETED:**
- [x] Toast notification system
- [x] Sound effects (Web Audio API)
- [x] Achievement system (10 achievements)
- [x] Season-specific backgrounds
- [x] Animal state animations
- [x] Money change animations

**Success Criteria:** Player can start game, buy a pig, feed it daily, wait 180 days, sell for profit. Game saves/loads correctly. Playtests pass.

---

## Phase 2 - Core Loop Polish ✅

- [x] Animal happiness and health systems
- [x] Pig lifecycle stages (piglet → grower → finisher)
- [x] Weight gain system (genetics affect growth rate)
- [x] Feeding mechanics (seasonal cost modifiers)
- [x] Death/illness if neglected
- [x] Visual feedback for animal state
- [x] Sound effects (Web Audio API)
- [x] Better farm visual layout (buildings, pasture, info panel)
- [x] Tutorial/onboarding hints
- [x] 8 playtest scenarios (3 new: seasonal, weight-based)
- [x] Random events system (6 events)
- [x] Season modifiers (growth, feed cost, market price)

**Success Criteria:** Meaningful decisions around animal care. Neglect has consequences. New player can learn without reading docs. ✅ ACHIEVED

---

## Phase 3 - Breeding & Genetics ✅

- [x] Breeding system (requires 2 animals, happiness threshold)
- [x] Genetic inheritance (offspring = parents average + mutation)
- [x] Genetic traits: marbling, growth rate, litter size, temperament
- [x] Breeding cooldown
- [x] Pregnancy duration
- [x] Selling breeding stock (premium price)
- [x] Genetic UI (show animal genetics visually)
- [x] Lineage tracking
- [ ] Inbreeding penalties? (deferred to future)
- [ ] 3 breeding-focused playtests (partial - manual testing done)

**Success Criteria:** Player can selectively breed for better genetics. Breeding stock sales are viable strategy. ✅ ACHIEVED

---

## Phase 4 - More Animals

- [ ] Champagne D'Argent Rabbits
  - Faster breeding cycle
  - Lower meat value, higher volume
  - Pelt as secondary product?
- [ ] Speckled Sussex Chickens
  - Egg production (daily income!)
  - Meat as secondary
  - Brooding/hatching
- [ ] Toulouse Geese
  - Seasonal (holidays?)
  - Guard animal bonus (protect from predators?)
  - Feathers?
- [ ] Animal interactions?
- [ ] Per-animal playtests

**Success Criteria:** Each animal type has distinct gameplay. Viable strategies around each.

---

## Phase 5 - Vermont Seasons

- [ ] Season cycle (each season = ~30 days)
- [ ] Spring: breeding bonuses, planting, mud
- [ ] Summer: growth bonuses, heat stress risk, tourists?
- [ ] Fall: harvest, premium prices, winter prep
- [ ] Winter: high feed costs, cold stress, limited activities
- [ ] Weather events
  - Storms (damage risk)
  - Drought (water costs)
  - Perfect weather (bonuses)
  - Blizzard (survival challenge)
- [ ] Season-specific activities
- [ ] Year-end summary screen
- [ ] 4 season survival playtests

**Success Criteria:** Seasons feel distinct. Winter is a real challenge. Year has rhythm.

---

## Phase 6 - Economy & Markets

- [ ] Dynamic pricing (supply/demand simulation)
- [ ] Farmer's market (better prices, limited slots, reputation)
- [ ] Restaurant contracts (bulk orders, steady income)
- [ ] Wholesale (low price, high volume)
- [ ] Breeding stock market (other farmers buy your genetics)
- [ ] Price forecasting hints
- [ ] Economic events (pork shortage = high prices)
- [ ] Debt/loans system?
- [ ] 4 economy playtests (test for exploits)

**Success Criteria:** Multiple viable sales strategies. Market feels alive.

---

## Phase 7 - Charcuterie & Products

- [ ] Butchering system (animal → cuts)
- [ ] Cut types (chops, roasts, belly, etc.)
- [ ] Charcuterie crafting
  - Bacon (cure time, sell price)
  - Sausage (recipes, ingredients)
  - Specialty items
- [ ] Aging/curing time mechanics
- [ ] Quality based on animal genetics
- [ ] Recipe unlocks
- [ ] Processing building requirement?
- [ ] 3 production playtests

**Success Criteria:** Charcuterie is highest margin but requires time/skill. Clear progression from selling live animals → cuts → charcuterie.

---

## Phase 8 - Farm Building

- [ ] Grid-based farm layout
- [ ] Building construction
  - Barn (animal housing)
  - Coop (chickens)
  - Hutch (rabbits)
  - Processing building
  - Feed storage
- [ ] Pasture fencing
- [ ] Building upgrades
- [ ] Placement strategy matters
- [ ] Solar panel system (power budget)
- [ ] Water management
- [ ] 3 building playtests

**Success Criteria:** Farm layout decisions matter. Expansion feels rewarding.

---

## Phase 9 - Progression & Polish

- [ ] Achievement system
- [ ] Unlockables (new animals, recipes, buildings)
- [ ] Farm reputation/level
- [ ] Statistics tracking
- [ ] Leaderboards (localStorage for now)
- [ ] Multiple save slots
- [ ] Settings (volume, speed, etc.)
- [ ] Credits (link to real Texas Farms!)
- [ ] Share your farm (screenshot/export?)

**Success Criteria:** Long-term goals. Reasons to keep playing.

---

## Phase 10 - Server Migration (Future)

- [ ] Design API endpoints
- [ ] Swap localStorage adapter for fetch adapter
- [ ] User accounts
- [ ] Cloud saves
- [ ] Global leaderboards
- [ ] Multiplayer trading?
- [ ] Admin dashboard

---

## Backlog (Unscheduled Ideas)

- Predator events (foxes, need geese or dogs)
- Farm dog companion
- Visitors/tourists
- Farm stand (passive income)
- Seasonal festivals
- Quests/challenges
- Climate change long-term effects
- Organic certification system
- Farm-to-table restaurant partnership storyline
- Vermont maple syrup side activity
- Compost/soil health minigame

---

## Completed

### Phase 3 - Breeding & Genetics (v0.3.0)
- Breeding system with happiness threshold (60%)
- Male/female pigs with sex indicators
- Pregnancy duration (114 days) and breeding cooldown (60 days)
- Genetic inheritance (parents average + 10% mutation)
- Litter sizes based on genetics (6-12 piglets)
- Lineage tracking across generations
- Breeding stock premium sales (1.5x)
- Visual genetics display with progress bars
- 5 breeding-related achievements
- Breeding tutorial hints

### Phase 2 - Core Loop Polish (v0.2.0)
- Pig lifecycle stages (piglet → grower → finisher)
- Weight-based economy (weight x $3/lb x modifiers)
- Season modifiers for growth, feed cost, market price
- Random events system (6 events)
- Tutorial hints for new players
- Farm visual layout with buildings sidebar
- Building info modals (Barn stats, Feed costs)
- Pasture visualization with seasonal themes
- Season info panel showing active modifiers
- 28 unit tests across 7 test suites
- 8 playtest scenarios including seasonal/weight tests

### Phase 1 - Foundation (v0.1.0)
- Project structure and game.html entry point
- Game state architecture with reducer pattern
- Action/dispatch system for all mutations
- Save/Load to localStorage
- Basic renderer (emoji/CSS/Canvas-ready)
- Day/time/season system
- GOS Pig entity with genetics
- Economy system (buy, feed, sell)
- HUD with money, date, animal count
- Debug panel with state inspector and controls
- Test framework with 16+ passing tests
- 5 playtest scenarios with automated runner
- Mobile touch support with responsive design
- Toast notifications for user feedback
- Web Audio API sound effects
- Achievement system with 10 achievements
- Season-specific backgrounds
- Animal state animations and visual feedback

---

## Notes

- Keep each phase small enough to complete in one session
- Always leave the game in a working state
- Playtest after every phase
- Balance is more important than features
