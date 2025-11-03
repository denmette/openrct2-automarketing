const marketingWindowTag = "marketing_campaigns";

function showMarketingWindow(): void {
  const existingWindow = ui.getWindow(marketingWindowTag);
  if (existingWindow) {
    existingWindow.bringToFront();
    return;
  }

  const isPayForEntrance = config.isPayForEntranceScenario();
  const widgets: WidgetDesc[] = [makeDurationDropdown(20)];
  let yPos = 40;

  // Add informational text about scenario type
  widgets.push({
    type: "label",
    x: 10,
    y: yPos,
    width: 220,
    height: 12,
    text: isPayForEntrance
      ? "Park Entry Scenario - All campaigns available"
      : "Pay-Per-Ride Scenario - Entry campaigns disabled",
    textAlign: "centred",
  });
  yPos += 20;

  // Only show entrance campaigns in pay-for-entrance scenarios
  if (isPayForEntrance) {
    widgets.push(
      makeCampaignCheckbox(
        yPos,
        "Free Park Entry",
        AdvertisingCampaign.ADVERTISING_CAMPAIGN_PARK_ENTRY_FREE,
      ),
    );
    yPos += 20;

    widgets.push(
      makeCampaignCheckbox(
        yPos,
        "Half Price Park Entry",
        AdvertisingCampaign.ADVERTISING_CAMPAIGN_PARK_ENTRY_HALF_PRICE,
      ),
    );
    yPos += 20;
  }

  // Always show ride and other campaigns
  widgets.push(
    makeCampaignCheckbox(
      yPos,
      "Free Ride Entry",
      AdvertisingCampaign.ADVERTISING_CAMPAIGN_RIDE_FREE,
    ),
  );
  yPos += 20;

  widgets.push(
    makeCampaignCheckbox(
      yPos,
      "Free Food/Drink",
      AdvertisingCampaign.ADVERTISING_CAMPAIGN_FOOD_OR_DRINK_FREE,
    ),
  );
  yPos += 20;

  widgets.push(
    makeCampaignCheckbox(
      yPos,
      "General Park Campaign",
      AdvertisingCampaign.ADVERTISING_CAMPAIGN_PARK,
    ),
  );
  yPos += 20;

  widgets.push(
    makeCampaignCheckbox(
      yPos,
      "Specific Ride Campaign",
      AdvertisingCampaign.ADVERTISING_CAMPAIGN_RIDE,
    ),
  );

  const windowDesc: WindowDesc = {
    classification: marketingWindowTag,
    width: 240,
    height: yPos + 40, // Dynamic height based on number of campaigns
    title: "Auto Marketing Campaigns",
    widgets: widgets,
  };
  ui.openWindow(windowDesc);
}

function makeDurationDropdown(y: number): DropdownDesc {
  const options = [2, 4, 6, 8, 10, 12];
  const selectedIndex =
    options.indexOf(config.getCampaignDuration() ?? defaults.duration) ?? 0;
  return {
    type: "dropdown",
    x: 10,
    y,
    width: 220,
    height: 15,
    items: options.map((x) => `${x} weeks`),
    selectedIndex: selectedIndex,
    tooltip: "Select the duration of the marketing campaigns (2-12 weeks).",
    onChange: (index: number) => {
      const duration = options[index];
      config.setCampaignDuration(duration);
    },
  };
}

function makeCampaignCheckbox(
  y: number,
  label: string,
  campaignType: AdvertisingCampaign,
): CheckboxDesc {
  return {
    type: "checkbox",
    x: 10,
    y,
    width: 220,
    height: 15,
    text: label,
    isChecked: config.getCampaignEnabled(campaignType),
    tooltip: `Enable or disable the ${label} campaign.`,
    onChange: (isChecked: boolean) =>
      config.setCampaignEnabled(campaignType, isChecked),
  };
}
