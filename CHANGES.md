# Changes Made to OpenRCT2 Auto Marketing Plugin

## Summary
Modified the plugin to only enable entrance-related marketing campaigns (Free Park Entry and Half Price Park Entry) when the park is operating under a pay-for-entrance scenario.

## Changes Made

### 1. Added Park Scenario Detection (`src/config.ts`)
- Added `isPayForEntranceScenario()` function that detects if the current park allows charging for entrance fees
- Uses OpenRCT2's park flags:
  - `park.getFlag("freeParkEntry")` - false when entrance fees are allowed
  - `park.getFlag("unlockAllPrices")` - true for RCT1-style scenarios that allow both entrance and ride fees

### 2. Dynamic UI Based on Scenario Type (`src/window.ts`)
- Modified the settings window to conditionally show entrance campaigns based on scenario type
- Added informational label that shows current scenario type:
  - "Park Entry Scenario - All campaigns available" for pay-for-entrance scenarios
  - "Pay-Per-Ride Scenario - Entry campaigns disabled" for pay-per-ride scenarios
- Dynamic window height adjustment based on number of visible campaigns
- Reorganized widget positioning to accommodate conditional display

### 3. Campaign Filtering Logic (`src/main.ts`)
- Enhanced `validateCampaigns()` function to filter out entrance campaigns in pay-per-ride scenarios
- Only the following campaigns are affected by scenario type:
  - Free Park Entry (campaign ID 0)
  - Half Price Park Entry (campaign ID 2)
- All other campaigns remain available regardless of scenario type:
  - Free Ride Entry
  - Free Food/Drink
  - General Park Campaign
  - Specific Ride Campaign

## Technical Details

### Scenario Detection Logic
The plugin now checks park flags to determine the appropriate pricing model:

1. **Pay-for-Entrance Scenario**: Entrance campaigns are enabled when:
   - `!park.getFlag("freeParkEntry")` (scenario allows entrance fees)
   - OR `park.getFlag("unlockAllPrices")` (RCT1-style scenario)

2. **Pay-per-Ride Scenario**: Entrance campaigns are disabled when:
   - `park.getFlag("freeParkEntry")` is true (entrance fees not allowed)
   - AND `park.getFlag("unlockAllPrices")` is false

### Backward Compatibility
- Existing saved settings are preserved
- Plugin will automatically disable entrance campaigns in pay-per-ride scenarios
- No configuration changes required for existing installations

## Benefits
1. **Prevents Invalid Campaigns**: Stops the plugin from attempting to run entrance campaigns in scenarios where they're not applicable
2. **Improved User Experience**: Clear visual indication of why certain campaigns may not be available
3. **Scenario-Aware**: Automatically adapts to different OpenRCT2 scenario types
4. **Resource Efficiency**: Avoids wasting money on ineffective campaigns

## Files Modified
- `src/config.ts` - Added scenario detection function
- `src/main.ts` - Added campaign filtering logic
- `src/window.ts` - Made UI conditional based on scenario type
- Added TypeScript compilation fixes for OpenRCT2 API compatibility