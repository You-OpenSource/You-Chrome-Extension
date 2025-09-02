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

### Resolving Merge Conflicts
When merging from upstream and encountering conflicts:

1. **Fetch latest from upstream**:
   ```bash
   git fetch upstream main
   ```

2. **Merge upstream/main**:
   ```bash
   git merge upstream/main
   ```

3. **Resolve conflicts**:
   - For `package-lock.json`: Remove the file and regenerate with `npm install`
   - For source files: Manually resolve, keeping our fixes while incorporating upstream changes
   - Always increment version number when resolving manifest.json conflicts

4. **Add resolved files and commit**:
   ```bash
   git add <resolved-files>
   git commit -m "Merge upstream/main and resolve conflicts"
   ```

## File Structure

- `public/background.js` - Background service worker, handles installation events
- `public/manifest.json` - Extension manifest file
- `src/` - React application source code
- `public/index.html` - Popup HTML
- `public/newtab.html` - New tab override page

## Version History

- 2.0.8 - Fixed 404 welcome page issue (updated from upstream 2.0.7)
- 2.0.7 - Current upstream version with updated branding
- 0.0.0.6 - Previous version with broken welcome URL