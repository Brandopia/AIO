// Cal.com Configuration
// Update these values to customize your Cal.com integration

export const CAL_CONFIG = {
  // 🔥 UPDATE THIS: Your Cal.com username/team name
  // Example: If your Cal.com link is "https://cal.com/john-doe/consultation"
  // Then your username would be "john-doe"
  username: "ecosystem",
  
  // 🔥 UPDATE THIS: Your event type slug (the part after the username)
  // Example: If your Cal.com link is "https://cal.com/john-doe/consultation"
  // Then your eventType would be "consultation"
  eventType: "1-hr-meeting",
  
  // Full Cal.com link
  get fullLink() {
    return `${this.username}/${this.eventType}`;
  },
  
  // Cal.com namespace (usually matches eventType)
  namespace: "1-hr-meeting",
  
  // UI configuration
  ui: {
    hideEventTypeDetails: false,
    layout: "month_view" as const,
  },
  
  // Origin URL (usually https://cal.com)
  origin: "https://cal.com",
  
  // Embed script URL
  embedScriptUrl: "https://app.cal.com/embed/embed.js",
};

// Helper function to get Cal.com attributes for buttons
export const getCalAttributes = (customConfig?: Partial<typeof CAL_CONFIG>) => {
  const config = { ...CAL_CONFIG, ...customConfig };
  
  return {
    "data-cal-link": config.fullLink,
    "data-cal-namespace": config.namespace,
    "data-cal-config": JSON.stringify(config.ui),
  };
};

// Helper function to get Cal.com script configuration
export const getCalScriptConfig = () => {
  return {
    username: CAL_CONFIG.username,
    eventType: CAL_CONFIG.eventType,
    namespace: CAL_CONFIG.namespace,
    origin: CAL_CONFIG.origin,
    embedScriptUrl: CAL_CONFIG.embedScriptUrl,
    ui: CAL_CONFIG.ui,
  };
}; 