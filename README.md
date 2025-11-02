# OpenRCT2 Auto Marketing Plugin

The OpenRCT2 Auto Marketing plugin simplifies park management by automating the renewal of marketing campaigns. With this plugin, you can set up a single duration for all campaigns, configure which campaigns to include, and let the plugin handle automatic renewal when campaigns expire. The plugin is now **scenario-aware** and will automatically adapt to different park pricing models (pay-for-entrance vs pay-per-ride scenarios).

## Features
- **Automated Marketing Campaigns**: Automatically renew marketing campaigns at the end of their duration.
- **Scenario-Aware Campaign Selection**: Automatically detects park pricing model and only shows relevant campaigns:
  - **Pay-for-Entrance Scenarios**: All campaigns available including Free Park Entry and Half Price Park Entry
  - **Pay-per-Ride Scenarios**: Entrance campaigns automatically disabled (not applicable)
- **Customizable Campaigns**: Select and configure which campaigns to include from the available options.
- **User-Friendly Interface**: Access the settings via the "Auto Marketing Campaign" window under the Map dropdown menu.
- **Enable/Disable Campaigns**: Toggle campaigns on or off directly from the settings window.
- **Smart Campaign Filtering**: Prevents wasting money on campaigns that won't work in your scenario type.

## Installation Instructions
1. Compile or download the output file: `openrct2-automarketing-1.0.0.js`.
2. Place the file in your OpenRCT2 plugin folder. By default, this folder is located at:
   - Windows: `Documents\OpenRCT2\plugin`
   - macOS: `~/Library/Application Support/OpenRCT2/plugin`
   - Linux: `~/.config/OpenRCT2/plugin`

## Usage
1. Launch OpenRCT2.
2. Open the "Map" dropdown menu and select "Auto Marketing Campaign" to open the settings window.
3. In the settings window:
   - The plugin will automatically detect your scenario type and show relevant campaigns
   - Configure the desired marketing campaigns from the available options
   - Set a single renewal period (e.g., every 2, 4, or 6 weeks) for all campaigns
   - Enable or disable specific campaigns as needed
   - Note: Entrance campaigns (Free/Half-Price Park Entry) only appear in scenarios that allow entrance fees
4. The plugin will automatically manage and renew the selected campaigns based on your settings and scenario type.

## Campaign Types by Scenario

### Pay-for-Entrance Scenarios (All campaigns available)
- ✅ Free Park Entry
- ✅ Half Price Park Entry  
- ✅ Free Ride Entry
- ✅ Free Food/Drink
- ✅ General Park Campaign
- ✅ Specific Ride Campaign

### Pay-per-Ride Scenarios (Entrance campaigns disabled)
- ❌ Free Park Entry (not applicable)
- ❌ Half Price Park Entry (not applicable)
- ✅ Free Ride Entry
- ✅ Free Food/Drink
- ✅ General Park Campaign
- ✅ Specific Ride Campaign

Enjoy seamless marketing automation and focus on building the best park possible!