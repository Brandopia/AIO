# Cal.com Customization Guide

## Quick Setup

To customize your Cal.com integration, update the configuration in `src/config/cal-config.ts`:

```typescript
export const CAL_CONFIG = {
  // 🔥 UPDATE THIS: Your Cal.com username/team name
  username: "YOUR_CAL_USERNAME_HERE",

  // 🔥 UPDATE THIS: Your event type slug
  eventType: "YOUR_EVENT_TYPE_HERE",

  // The rest will be generated automatically
  get fullLink() {
    return `${this.username}/${this.eventType}`;
  },
  // ...
};
```

## How to Find Your Cal.com Link

1. Go to your Cal.com dashboard
2. Copy your booking link (e.g., `https://cal.com/john-doe/consultation`)
3. Extract the parts:
   - Username: `john-doe`
   - Event type: `consultation`

## Current Configuration

Your current setup uses:

- **Username:** `ecosystem`
- **Event Type:** `1-hr-meeting`
- **Full Link:** `ecosystem/1-hr-meeting`

## Files Using Cal.com

All these components automatically use your configuration:

- Home page (2 buttons)
- About page (1 button)
- Services page (1 button)
- Contact page (1 button)
- Case Studies page (1 button)
- Booking popup (1 button)
- Navigation bar (2 buttons)
- Go to top button (1 button)

## Optional: Use CalButton Component

You can also use the `CalButton` component for new buttons:

```tsx
import { CalButton } from "@/components/ui/cal-button";

<CalButton className="bg-green-600 hover:bg-green-700">
  Book Consultation
</CalButton>;
```

That's it! Update the config file and all Cal.com buttons will use your custom link.
