# Texas Farms - The Game: Changelog

All notable changes to the game will be documented here.

---

## [1.4.0] - 2026-01-15

### Added
- **Background Music System**
  - Press M key to toggle ambient music
  - Click music icon in HUD to toggle
  - Procedural chord progressions (no audio files needed)
  - Relaxing farm-style ambient soundtrack
  - Music preference saved with game state

- **New Sound Effects**
  - Thunder sound for storms
  - Achievement unlock fanfare

### Changed
- Version bumped to 1.4.0
- Instructions panel updated with M key

---

## [1.3.0] - 2026-01-15

### Added
- **Skill/Experience System**
  - Press K to view skills panel
  - Four skills: Farming, Fishing, Foraging, Mining
  - Gain XP from relevant activities
  - 100 XP per level
  - 5% bonus per level (yield, catch rate, etc.)
  - Level-up notifications

- **Mouse Click Interaction**
  - Click on nearby tiles to interact (within 2 tiles)
  - Yellow hover indicator shows clickable tiles
  - No more struggling to line up E key interactions!
  - Click to till, water, plant, harvest, forage, mine

### Changed
- Skills saved/loaded with game state
- Version bumped to 1.3.0

---

## [1.2.0] - 2026-01-15

### Added
- **Complete Save/Load System**
  - Save game from farmhouse dialog
  - Continue button on title screen when save exists
  - Saves ALL game state:
    - Player position, money, energy
    - Day, season, year, time of day
    - All animals with stats and genetics
    - All crops with growth progress
    - Complete inventory
    - Placed sprinklers
    - Shipping bin contents
    - Resource respawn timers
    - Forage bush cooldowns
    - Achievements and NPC relationships

### Changed
- Title screen now shows "New Game" and "Continue" options
- Tutorial disabled for loaded games
- Version bumped to 1.2.0

---

## [1.1.0] - 2026-01-15

### Added
- **Seasonal Crop System**
  - Crops now have seasonal restrictions like Stardew Valley
  - Spring crops: Turnip, Potato, Carrot
  - Summer crops: Tomato, Pepper
  - Fall crops: Pumpkin, Corn
  - Some crops grow in multiple seasons (Turnip, Carrot, Corn)

- **New Crops**
  - 🥔 Potato (Spring only, 6 days, $120)
  - 🌶️ Pepper (Summer only, 7 days, $140)
  - 🎃 Pumpkin (Fall only, 12 days, $350)

- **Crop Withering**
  - Crops die when season changes if not harvestable in new season
  - Plan your planting around season lengths!

### Changed
- Market seed shop now shows current season
- In-season seeds highlighted in green
- Out-of-season seeds grayed out with valid seasons shown
- Version bumped to 1.1.0

---

## [1.0.0] - 2026-01-15

### Added
- **Shipping Bin**
  - Place items for overnight sale
  - View items in bin and total value
  - Automatic payment at day start
  - Located near farmhouse (📦 icon)

- **Crafting System**
  - Press C to open crafting menu
  - Sprinkler recipe: 5 stone + 3 wood
  - Scarecrow recipe: 10 wood + 2 stone
  - Shows available resources

- **Sprinklers**
  - Crafted item that auto-waters crops
  - Waters all 8 adjacent tiles each morning
  - Place on grass or tilled soil

- **Foraging System**
  - Berry bushes (🫐) scattered around map
  - Find Wild Berries, Mushrooms, or Wild Honey
  - Bushes regrow after 3 days

- **Resource Respawning**
  - Cleared rocks and stumps respawn after 7 days
  - Sustainable resource gathering

### Changed
- Version bumped to 1.0.0 (feature complete!)
- Help dialog updated with crafting info
- Controls panel shows crafting key

---

## [0.9.0] - 2026-01-15

### Added
- **Achievement System**
  - 12 achievements to unlock
  - Press Tab to view progress
  - Achievements: Green Thumb, Entrepreneur, Angler, Lucky Catch
  - Achievements: Animal Friend, Farm Empire, Wealthy Farmer, Millionaire
  - Achievements: Survivor, Veteran, Social Butterfly, Storm Chaser
  - Achievement popup with sound on unlock
  - Progress saved to localStorage

### Changed
- Version bumped to 0.9.0
- Help dialog updated with Tab key info

---

## [0.8.0] - 2026-01-15

### Added
- **Weather System**
  - Dynamic weather: Sunny, Cloudy, Rainy, Stormy
  - Weather icon in HUD shows current conditions
  - Rain particles with wind effect
  - Storm lightning flashes with thunder sound
  - Season affects weather probability
  - Rain automatically waters all crops!

### Changed
- Version bumped to 0.8.0
- Weather persists for 3-10 real minutes

---

## [0.7.0] - 2026-01-15

### Added
- **Full Tutorial System**
  - Step-by-step walkthrough for new players
  - Teaches: movement, inventory, tilling, planting, watering
  - Teaches: energy, fishing, NPCs, and market
  - Can be skipped anytime with ESC
  - Progress tracked through gameplay actions

- **Help System**
  - Press H anytime to see controls and tips
  - Complete reference for all game mechanics

- **Fishing Mini-Game**
  - Fishing Rod tool added to starter inventory
  - Cast line into water and wait for bite
  - Press E quickly when "!" appears to catch
  - 4 fish types: Bass ($40), Trout ($80), Catfish ($120)
  - Rare Golden Fish worth $500!
  - Old Boot junk item for variety
  - Visual fishing line and bobber animation
  - Sound effects for cast, splash, bite, catch

### Changed
- Instructions panel simplified
- Starting inventory now includes Fishing Rod
- Version bumped to 0.7.0

---

## [0.6.0] - 2026-01-15

### Added
- **Full Inventory System**
  - 8-slot inventory bar at bottom of screen
  - Number keys 1-8 to select items
  - Q key to see item info
  - Items stack with count display
  - Tool selection highlights

- **Farming Tools**
  - Hoe: Till grass into farmland
  - Watering Can: Water tilled soil and crops
  - Pickaxe: Break rocks for stone
  - Axe: Chop stumps for wood

- **Crop System**
  - 4 crop types: Turnips (4 days), Carrots (6 days), Tomatoes (8 days), Corn (10 days)
  - Visual growth stages for each crop
  - Water indicator shows when crops need water
  - Sparkle effect when crops are ready to harvest
  - Seeds purchasable at market stall

- **Energy System**
  - Energy bar displays current stamina
  - Tools and actions cost energy
  - Energy restored when new day starts
  - "Too tired" warning when depleted

- **Day/Night Cycle**
  - Visual lighting changes throughout day
  - Dawn and sunset golden hour effects
  - Night overlay with blue tint
  - Time passes automatically

- **Sound Effects (Web Audio API)**
  - Unique sounds for: hoe, water, plant, harvest, pickup, error, sell
  - No external audio files required

- **NPC Characters**
  - Mayor Bob: Greets you near the farmhouse
  - Sally (Shopkeeper): Runs the market stall
  - Old Pete (Wanderer): Roams around giving advice
  - NPCs have rotating dialog
  - Gift system - give items to NPCs for reactions

- **Resource Gathering**
  - Rocks appear on map (use pickaxe)
  - Wood stumps appear (use axe)
  - Collected resources can be sold

### Changed
- Market now organized into Buy Animals, Buy Seeds, Sell sections
- Seeds sold in packs of 5
- Interaction highlight shows for all usable tiles
- NPCs highlighted in cyan when nearby
- Version bumped to 0.6.0

---

## [0.5.0] - 2026-01-15

### Added
- **Complete Game Rewrite**
  - Canvas-based 2D exploration gameplay
  - Top-down tile map world
  - Walking farmer character
  - WASD/Arrow movement with collision

- **Interactive World**
  - 30x20 tile world map
  - Farmhouse, Barn, Market Stall, Pond
  - Fenced pasture for animals
  - Feed trough for feeding

- **Real-time Gameplay**
  - Time passes automatically (30 sec = 1 day)
  - No more click-per-day tedium
  - Sleep at farmhouse to skip to next day

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
