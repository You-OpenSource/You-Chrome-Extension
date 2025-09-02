# You.com Chrome Extension - Development Notes

## Important URLs

### Welcome Page
- **Correct URL**: `https://you.com` 
- **Previous broken URLs**: 
  - `https://about.you.com/welcome-youchat` (404)
  - `https://about.you.com/welcome/` (404)

### Other Extension URLs
- Exit Survey: `https://about.you.com/exit-survey`
- YouChat: `https://you.com/search?tbm=youchat`
- Code: `https://code.you.com/`

## Development Commands

### Install Dependencies
```bash
npm install
```

### Build Extension
```bash
npm run build
```

### Run Tests
```bash
npm test
```

### Code Formatting
```bash
npm run prettier:fix
```

## Testing the Extension

1. **Installation Flow**:
   - When installing the extension for the first time, it should open `https://you.com`
   - This happens via the `chrome.runtime.onInstalled` event listener in `background.js`

2. **Manual Testing**:
   - Load unpacked extension in Chrome
   - Check that the welcome page opens correctly on first install
   - Verify all redirect rules work properly

## Common Issues

### 404 Landing Page
- **Issue**: After installation, extension tries to open a non-existent welcome page
- **Solution**: Updated the URL in `background.js` line 79 to `https://you.com`
- **Linear Issue**: FE-2482

### NPM Cache Permissions
If you encounter npm permission errors:
```bash
sudo chown -R $(whoami) ~/.npm
```

## File Structure

- `public/background.js` - Background service worker, handles installation events
- `public/manifest.json` - Extension manifest file
- `src/` - React application source code
- `public/index.html` - Popup HTML
- `public/newtab.html` - New tab override page

## Version History

- 0.0.0.7 - Fixed 404 welcome page issue
- 0.0.0.6 - Previous version with broken welcome URL