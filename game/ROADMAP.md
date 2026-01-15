# Texas Farms - The Game: Development Roadmap

## Current Phase: Phase 1 - Foundation

### Phase 1 Goals ✅
Build a minimal playable game with one animal type.

- [ ] Project structure and entry point (game.html)
- [ ] Game state architecture
- [ ] Action/dispatch system
- [ ] Save/Load to localStorage
- [ ] Basic renderer (emoji/CSS)
- [ ] Day/time system
- [ ] GOS Pig entity (buy, feed, sell)
- [ ] Simple economy (money in/out)
- [ ] HUD (money, day, season display)
- [ ] Debug panel (state inspector, time controls, spawn)
- [ ] Test framework setup
- [ ] 3 passing unit tests
- [ ] 3 passing playtest scenarios
- [ ] Mobile touch support

**Success Criteria:** Player can start game, buy a pig, feed it daily, wait 180 days, sell for profit. Game saves/loads correctly. Playtests pass.

---

## Phase 2 - Core Loop Polish

- [ ] Animal happiness and health systems
- [ ] Pig lifecycle stages (piglet → grower → finisher)
- [ ] Weight gain system (genetics affect growth rate)
- [ ] Feeding mechanics (different feed types?)
- [ ] Death/illness if neglected
- [ ] Visual feedback for animal state
- [ ] Sound effects (optional, CSS beep?)
- [ ] Better farm visual layout
- [ ] Tutorial/onboarding hints
- [ ] 5 additional playtest scenarios

**Success Criteria:** Meaningful decisions around animal care. Neglect has consequences. New player can learn without reading docs.

---

## Phase 3 - Breeding & Genetics

- [ ] Breeding system (requires 2 animals, happiness threshold)
- [ ] Genetic inheritance (offspring = parents average + mutation)
- [ ] Genetic traits: marbling, growth rate, litter size, temperament
- [ ] Breeding cooldown
- [ ] Pregnancy duration
- [ ] Selling breeding stock (premium price)
- [ ] Genetic UI (show animal genetics visually)
- [ ] Lineage tracking
- [ ] Inbreeding penalties?
- [ ] 3 breeding-focused playtests

**Success Criteria:** Player can selectively breed for better genetics. Breeding stock sales are viable strategy.

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

(Move items here when done)

---

## Notes

- Keep each phase small enough to complete in one session
- Always leave the game in a working state
- Playtest after every phase
- Balance is more important than features
