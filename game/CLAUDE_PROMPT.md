# Texas Farms - The Game: Claude Development Prompt

You are developing **Texas Farms - The Game**, a browser-based farming simulator for Texas Farms Vermont. This is an autonomous, iterative development project. Your job is to continuously improve and expand the game through building, testing, and playtesting.

---

## Learn About the Real Farm First

**Before starting development**, explore the Texas Farms website to understand the business:

```
# Key files to read (relative to repo root):
../about-us.html           # Farm story and philosophy
../farm-story.html         # The full farm narrative
../story/*.md              # Detailed story chapters
../animals/*.html          # Each animal breed page
../charcuterie.html        # Cured meat products
../for-restaurants.html    # B2B offerings
../faqs.html               # Common questions answered
../_config.yml             # Site metadata
```

Read these files to pick up accurate details about:
- Animal breeds and their characteristics
- Pricing and products
- Vermont/seasonal context
- The farm's values and story

The website content may be updated - always check the source files for current information rather than relying solely on the summary below.

---

## About Texas Farms Vermont (Summary)

Texas Farms is a real off-grid, regenerative farm located in Concord, Vermont (in a historic area called "Texas"). Understanding the real farm will help you make the game authentic.

**What they raise:**
- **Gloucestershire Old Spot (GOS) Pigs** - A heritage breed from England, known as "orchard pigs." They have excellent marbling and are prized for charcuterie. The farm sells feeder piglets ($200), whole/half hogs, and cuts.
- **Champagne D'Argent Rabbits** - A French heritage breed with silver fur, raised for meat.
- **Speckled Sussex Chickens** - Dual-purpose heritage breed for eggs and meat.
- **Toulouse Geese** - French heritage breed, good for meat and as farm guardians.

**Their practices:**
- Off-grid (solar powered)
- No-till, regenerative farming
- Pasture-raised, no antibiotics or hormones
- Focus on heritage breeds and genetic preservation
- Located in Vermont's Northeast Kingdom

**Products they sell:**
- Feeder piglets (for others to raise)
- Whole and half hogs
- Individual pork cuts (chops, bacon, roasts)
- Charcuterie (bacon, sausage, cured meats)
- Breeding stock (registered pigs, pedigreed rabbits)

---

## Game Vision

**Inspiration:** Animal Crossing meets Stardew Valley, but specifically about running a heritage breed farm in Vermont.

**Core Loop:**
1. Raise heritage animals
2. Manage pastures and resources
3. Produce and sell products (meat, eggs, breeding stock)
4. Expand and improve your farm
5. Survive Vermont seasons and weather

**Tone:** Cozy, educational, satisfying progression. Players should learn about heritage breeds and sustainable farming while having fun.

**Unique Elements:**
- Heritage breed genetics matter (breeding for traits)
- Vermont seasons are harsh (winter prep is real)
- Off-grid mechanics (manage solar power, water)
- Charcuterie crafting system
- Farmer's market and restaurant sales

---

## Technical Architecture

### Constraints (MUST FOLLOW)

1. **No external assets** - All graphics must be CSS, Canvas, SVG, or emoji. No image files. This allows you to iterate freely.

2. **Browser-only for now** - Everything runs client-side. No server required.

3. **LocalStorage persistence** - Save game state to localStorage. But architect for future server sync.

4. **Single HTML file entry** - `game.html` loads everything. Keep JS modular but bundled.

5. **Mobile-friendly** - Must work on phones. Touch controls.

### Architecture Patterns

```
/game
├── game.html              # Entry point, loads everything
├── CLAUDE_PROMPT.md       # This file (your instructions)
├── ROADMAP.md             # Feature phases and backlog
├── CHANGELOG.md           # Track what you've built/changed
├── tests/
│   ├── test-runner.html   # Visual test runner
│   └── *.test.js          # Test files
├── src/
│   ├── engine/
│   │   ├── GameState.js   # Central state object
│   │   ├── GameLoop.js    # Main update/render loop
│   │   ├── Actions.js     # All game mutations (reducer pattern)
│   │   ├── SaveLoad.js    # LocalStorage (swap for API later)
│   │   └── Time.js        # Day/season/weather system
│   ├── entities/
│   │   ├── Animal.js      # Base animal class
│   │   ├── Pig.js         # GOS pig specifics
│   │   ├── Rabbit.js      # Champagne D'Argent
│   │   ├── Chicken.js     # Speckled Sussex
│   │   └── Goose.js       # Toulouse
│   ├── systems/
│   │   ├── Economy.js     # Money, prices, market
│   │   ├── Breeding.js    # Genetics, offspring
│   │   ├── Production.js  # Eggs, meat, charcuterie
│   │   ├── Weather.js     # Vermont seasons
│   │   └── Energy.js      # Off-grid solar/power
│   ├── ui/
│   │   ├── Renderer.js    # Canvas/CSS rendering
│   │   ├── HUD.js         # Stats, money, time display
│   │   ├── Menus.js       # Buy, sell, build menus
│   │   └── DebugPanel.js  # GOD MODE (critical!)
│   └── data/
│       ├── animals.js     # Animal stats, breeds
│       ├── products.js    # What can be made/sold
│       └── prices.js      # Market prices
└── playtests/
    ├── playtest-runner.js # Automated playtest harness
    ├── scenarios/         # Playtest scenarios
    └── reports/           # Playtest results (JSON)
```

### State Architecture (Critical for Server Migration)

All game state lives in ONE serializable object:

```javascript
const gameState = {
  meta: {
    version: "0.1.0",
    created: timestamp,
    lastSaved: timestamp,
    totalPlayTime: seconds
  },
  farm: {
    name: "My Farm",
    money: 1000,
    day: 1,
    season: "spring", // spring, summer, fall, winter
    year: 1
  },
  animals: [
    {
      id: "pig_1",
      type: "gos_pig",
      name: "Wilbur",
      age: 30, // days
      health: 100,
      happiness: 80,
      genetics: { marbling: 0.8, size: 0.7, temperament: 0.9 },
      pregnant: false,
      dueDate: null
    }
  ],
  buildings: [...],
  inventory: [...],
  unlocks: [...],
  stats: {
    totalAnimalsRaised: 0,
    totalMoneyEarned: 0,
    // ... for achievements
  }
};
```

### Action Pattern (All Mutations)

NEVER mutate state directly. All changes go through actions:

```javascript
// actions.js
function dispatch(state, action) {
  switch (action.type) {
    case 'BUY_ANIMAL':
      return { ...state, animals: [...state.animals, action.animal], farm: { ...state.farm, money: state.farm.money - action.price }};
    case 'ADVANCE_DAY':
      return advanceDay(state);
    // etc
  }
}
```

This makes the game:
- Predictable (easy to test)
- Replayable (can record/replay actions)
- Server-ready (actions become API calls)

---

## Debug Panel (GOD MODE) - CRITICAL

You cannot visually see the game. You MUST build a comprehensive debug panel that lets you:

### Inspection
- View full game state as formatted JSON
- See all animals with stats
- View economy (money in/out history)
- Check current season/weather

### Controls
- Add/remove money
- Spawn any animal (with custom genetics)
- Kill/heal animals
- Advance time (1 day, 7 days, 30 days, 1 season)
- Trigger weather events
- Set season manually

### Metrics Dashboard
- Current balance trend (going up or down?)
- Animal population over time
- Production rates
- Bankruptcy countdown (if losing money)

### Console
- Execute game actions directly
- Query state with expressions
- Log action history

The debug panel should be toggleable and not affect normal gameplay.

---

## Automated Playtesting

Since you can't play the game manually, you need automated playtesting.

### Playtest API

```javascript
// playtest-runner.js
async function runPlaytest(scenario) {
  const game = new Game();
  game.loadScenario(scenario.startState);

  for (const action of scenario.actions) {
    await game.dispatch(action);
    if (scenario.checkpoints[game.state.farm.day]) {
      scenario.checkpoints[game.state.farm.day](game.state);
    }
  }

  return {
    finalState: game.state,
    metrics: game.getMetrics(),
    passed: scenario.validate(game.state)
  };
}
```

### Required Scenarios

Build these playtest scenarios and ADD MORE as features are added:

1. **new_player_week_1** - Fresh start, can player survive 7 days?
2. **bankruptcy_test** - Do nothing, how fast do you go broke?
3. **pig_rush** - Buy max pigs immediately, is it OP or instant loss?
4. **winter_survival** - Start in fall, survive winter
5. **breeding_genetics** - Do genetics actually pass to offspring correctly?
6. **economy_100_days** - Does money inflate/deflate over time?
7. **optimal_strategy** - AI tries to maximize money, what's the ceiling?

### Metrics to Track

After each playtest, record:
- Final money
- Final animal count
- Days survived
- Peak money
- Lowest money
- Win/lose state
- Time to first sale
- Time to first breeding

### Scaling Playtests

As the game grows:
- Add scenarios for each new feature
- Increase simulation length for complex interactions
- Run regression tests (did new feature break old balance?)

---

## Development Process

### Your Iteration Loop

1. **Read ROADMAP.md** - What's the next feature?
2. **Write tests first** - Define what success looks like
3. **Implement feature** - Build it
4. **Run tests** - Verify it works
5. **Run playtests** - Verify it's balanced
6. **Analyze results** - Is it fun? Balanced? Broken?
7. **Adjust** - Fix issues found in playtesting
8. **Update CHANGELOG.md** - Document what changed
9. **Update ROADMAP.md** - Mark complete, note next steps
10. **Commit with clear message** - Push progress
11. **Repeat**

### Commit Frequently

After each meaningful change:
```bash
git add -A
git commit -m "feat(game): Add pig breeding with genetics system

- Pigs can now breed when happiness > 70
- Offspring inherit averaged genetics with mutation
- Added breeding cooldown of 30 days
- Playtest: breeding_genetics passes"
git push
```

### When Stuck

If playtests reveal problems you can't solve:
1. Document the issue in CHANGELOG.md
2. Add a TODO in the code
3. Move on to something else
4. Come back later with fresh perspective

---

## Graphics Strategy

### Phase 1: Emoji & CSS (Current)
- Animals are emoji: 🐷 🐰 🐔 🦢
- Buildings are CSS boxes with borders
- UI is HTML/CSS
- Works, iterates fast

### Phase 2: Canvas Sprites (Later)
- Simple pixel art drawn with Canvas
- Still no external files
- More game-like feel

### Phase 3: Asset Swap (Future)
When ready for real graphics:
```javascript
// renderer.js
const SPRITES = {
  gos_pig: config.useRealAssets ? '/images/pig.png' : drawPigEmoji,
  // ...
};
```

Build with this swap in mind. All rendering goes through a central renderer that can be swapped.

---

## Phase 1 Deliverable (Your First Goal)

Build a minimal playable game:

1. **Start screen** - "Texas Farms - The Game", New Game button
2. **Farm view** - Simple grid/area showing your farm
3. **One animal type** - GOS Pigs only
4. **Basic loop:**
   - Start with $1000 and 1 pig
   - Pigs need feeding (costs money daily)
   - Pigs can be sold for meat after 180 days
   - Selling price based on weight (genetics affect this)
5. **Day cycle** - Advance day button, shows current day/season
6. **Save/Load** - Persist to localStorage
7. **Debug panel** - Full state inspection and controls
8. **3 passing playtests**

This is the seed. Once this works, iterate to add complexity.

---

## Feature Backlog (See ROADMAP.md for Current Priorities)

### Animals
- [ ] Pig lifecycle (piglet → adult → butcher weight)
- [ ] Rabbit system
- [ ] Chicken system (eggs!)
- [ ] Goose system
- [ ] Breeding and genetics
- [ ] Animal happiness/health
- [ ] Veterinary events

### Economy
- [ ] Dynamic market prices
- [ ] Farmer's market sales (better prices, limited)
- [ ] Restaurant contracts (bulk, steady)
- [ ] Breeding stock premium
- [ ] Charcuterie crafting (higher margins)

### Farm Management
- [ ] Pasture management (rotate animals)
- [ ] Building construction
- [ ] Fencing and enclosures
- [ ] Feed storage
- [ ] Solar power management

### Vermont Seasons
- [ ] Spring (breeding season, planting)
- [ ] Summer (growth, heat stress)
- [ ] Fall (harvest, prep for winter)
- [ ] Winter (survival mode, high costs)
- [ ] Weather events (storms, drought)

### Progression
- [ ] Unlock new animal types
- [ ] Unlock charcuterie recipes
- [ ] Farm reputation system
- [ ] Achievements
- [ ] Year-end summary

---

## Remember

1. **You are building for real iteration** - Every commit should leave the game in a working state.

2. **Tests are your eyes** - Without tests, you're blind. Write them first.

3. **Playtesting reveals truth** - A feature that passes tests but fails playtests is broken.

4. **The debug panel is your interface** - Build it well, it's how you see the game.

5. **Commit often** - Small, working increments. Never leave broken code.

6. **The game should be fun** - If playtests show degenerate strategies or boring loops, fix them.

7. **This is Texas Farms** - Keep it authentic to the real farm. Heritage breeds matter. Vermont winters are hard. Sustainable farming is the way.

Now go build something great. Start with Phase 1, get it working, get tests passing, then iterate.
