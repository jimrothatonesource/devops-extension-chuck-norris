# Chuck Norris Build Enhancer

An Azure DevOps extension that adds Chuck Norris quotes to your build reports, because even your builds need some roundhouse kicks of motivation!

![](docs/chuck-build-report.png)

## What This Extension Does

This extension provides two main features:

1. **Chuck Norris Build Task** - A marker task you can add to your pipeline that enables the build report enhancement
2. **Build Report Enhancement** - Adds a "Chuck Norris Says" section to your build summary with motivational quotes

The extension shows different Chuck Norris images and quotes based on your build status:
- ✅ **Success**: Chuck approves your build
- ⚠️ **Warning**: Chuck warns you about potential issues  
- ❌ **Failed**: Chuck is disappointed but still motivating
- ⏳ **Running**: Chuck is waiting patiently

## Installation

### Option 1: Install from Marketplace (if published)
1. Go to your Azure DevOps organization
2. Navigate to Organization Settings → Extensions
3. Browse the marketplace for "Chuck Norris Build Enhancer"
4. Install the extension

### Option 2: Install from VSIX file
1. Download the `.vsix` file from the releases
2. Go to your Azure DevOps organization
3. Navigate to Organization Settings → Extensions
4. Click "Upload new extension" and select the `.vsix` file
5. Install the extension

### Using the Extension
1. Add the "Chuck Norris Quotes" task to your pipeline
2. Enjoy the motivational quotes in your build reports!

## Building the Extension

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher recommended)
- Azure DevOps organization with extension publishing permissions

### Build Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the extension**
   ```bash
   npm run build
   ```
   This compiles the TypeScript code and packages the extension.

3. **Package the extension**
   ```bash
   npm run package
   ```
   Creates a `.vsix` file ready for upload.

4. **Publish to Azure DevOps** (optional)
   ```bash
   npm run publish
   ```
   Publishes directly to your Azure DevOps organization.

### Publishing to Azure DevOps

#### Prerequisites for Publishing
- Azure DevOps publisher account
- Personal Access Token (PAT) with Marketplace (publish) permissions
- TFX CLI installed globally: `npm install -g tfx-cli`

#### Publishing Commands

**1. Login to Azure DevOps**
```bash
# Interactive login (will prompt for URL and PAT)
tfx login

# Or specify PAT directly
tfx login --token YOUR_PERSONAL_ACCESS_TOKEN --service-url https://dev.azure.com/yourorg
```
Enter your Azure DevOps URL and Personal Access Token when prompted, or use the direct command with your PAT.

**2. Create/Update Extension**
```bash
tfx extension create --manifest-globs vss-extension.json
```

**3. Publish Extension**
```bash
# Publish to marketplace (public)
tfx extension publish --manifest-globs vss-extension.json --token YOUR_PERSONAL_ACCESS_TOKEN

# Publish and share with specific organization
tfx extension publish --manifest-globs vss-extension.json --share-with osvtest --token YOUR_PAT_HERE

# Publish as private extension
tfx extension publish --manifest-globs vss-extension.json --no-prompt --token YOUR_PAT_HERE
```

**4. Install Published Extension**
```bash
# Install in your organization
tfx extension install --publisher jimrothatonesource --extension-id chucknorris-build-enhancer --service-url https://dev.azure.com/osvtest --token YOUR_PAT_HERE
```

#### Alternative: Manual Publishing
1. Build the extension: `npm run build`
2. Upload the generated `.vsix` file to Azure DevOps Extensions
3. Go to Organization Settings → Extensions → Upload new extension
4. Select your `.vsix` file and follow the installation wizard

### Project Structure

```
├── ChuckNorrisTask/           # Azure DevOps build task
│   ├── task.json             # Task definition
│   ├── ChuckNorrisTask.ps1   # PowerShell script
│   ├── icon.png              # Task icon
│   └── chuck.png             # Chuck Norris image
├── src/enhancer/             # TypeScript source code
│   └── buildResults.ts       # Build report enhancement logic
├── static/                   # Static web assets
│   ├── css/app.css           # Styling
│   ├── images/               # Status images
│   └── StatusSection.html    # Build report section template
├── docs/                     # Documentation
└── dist/                     # Compiled output
```

### Configuration

Before building, update `vss-extension.json`:
- Change the `publisher` field to your Azure DevOps publisher ID
- Update repository links if needed
- Modify the extension ID if creating a custom version

See [Azure DevOps Extension Development](https://docs.microsoft.com/en-us/azure/devops/extend/get-started/node) for detailed documentation.

## Usage in Pipelines

Add the "Chuck Norris Quotes" task to your Azure DevOps pipeline:

```yaml
- task: ChuckNorrisTask@1
  displayName: 'Chuck Norris Quotes'
```

The task acts as a marker that enables the build report enhancement. It doesn't perform any actual work - it just tells the extension to show Chuck Norris quotes in the build summary.

## Troubleshooting

**Extension not showing in build reports?**
- Make sure you've added the Chuck Norris Quotes task to your pipeline
- Verify the extension is installed in your Azure DevOps organization
- Check that the build completed successfully

**Build task not found?**
- Ensure the extension is properly installed
- Try refreshing your browser cache
- Verify you're using the correct task name: `ChuckNorrisTask`

## Development

### Local Development

1. Clone the repository
2. Run `npm install` to install dependencies
3. Make your changes to the TypeScript files in `src/`
4. Run `npm run build` to compile
5. Test locally by uploading the generated `.vsix` file

### Contributing

Contributions are welcome! Here's how you can help:

- 🐛 **Report bugs** and help verify fixes
- 🚀 **Submit pull requests** for bug fixes and new features
- 📝 **Improve documentation** and examples
- 💡 **Suggest new Chuck Norris quotes** for different build states

Please refer to [Contribution guidelines](docs/CONTRIBUTING.md) and the [Code of Conduct](docs/CODE_OF_CONDUCT.md) for more details.

## Credits

- **Original Inspiration**: [The Ultimate Top 25 Chuck Norris "The Programmer" Jokes](http://codesqueeze.com/the-ultimate-top-25-chuck-norris-the-programmer-jokes/)
- **Original Contributor**: Mathias Olausson
- **Current Maintainer**: OneSource Virtual

## License

This project is licensed under the MIT License - see the [LICENSE](docs/license.md) file for details.
