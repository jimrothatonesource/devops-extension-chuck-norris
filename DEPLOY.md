# Local Testing Instructions for Chuck Norris Build Enhancer

## Current Status
- **Extension Version**: 1.0.1
- **Publisher**: jimrothatonesource
- **Target Organization**: osvtest (https://dev.azure.com/osvtest/)
- **VSIX File**: `jimrothatonesource.chucknorris-build-enhancer-1.0.1.vsix`

## GOAL: Test the Extension LOCALLY Before Publishing to Marketplace

### Step 1: Build the Extension

Make sure you have a fresh VSIX file by running:

```powershell
npm run clean
npm run build
```

This creates: `jimrothatonesource.chucknorris-build-enhancer-1.0.1.vsix`

### Step 2: Create Publisher Account (Required - One-time Setup)

You need to create a publisher account to share extensions privately with your organization. This is different from publishing to the public marketplace - your extension stays private:

1. Go to https://marketplace.visualstudio.com/manage/publishers
2. Sign in with your Azure DevOps account (the one that has access to osvtest)
3. Click **Create Publisher**
4. Publisher ID: `jimrothatonesource`
5. Display Name: `Jim Roth at OneSource Virtual` (or your preferred name)
6. Submit

**Note:** This creates a publisher account for PRIVATE extensions only. Your extension will NOT be published publicly - it stays private to your test organization.

### Step 3: Upload and Share with osvtest

Once you have the VSIX file ready:

1. Go to https://marketplace.visualstudio.com/manage/publishers/jimrothatonesource
2. Click **New Extension** → Select **Azure DevOps**
3. Click **Upload** and select: `jimrothatonesource.chucknorris-build-enhancer-1.0.1.vsix`
4. Once uploaded, click the extension name to manage it
5. Go to the **Share** tab
6. Add organization `osvtest` and save

### Step 4: Install in osvtest Organization

1. Go to https://dev.azure.com/osvtest/
2. Click **Organization Settings** (gear icon in bottom-left)
3. Click **Extensions** in the left sidebar
4. Find "Chuck Norris Build Enhancer" in the private extensions list
5. Click **Get it free** or **Install**
6. Select the project(s) where you want to use it
7. Click **Install**

### Step 5: Test in a Pipeline

1. Go to any project in osvtest
2. Create or edit a pipeline (YAML or Classic)
3. Add the Chuck Norris Quotes task:
   
   **For YAML pipelines:**
   ```yaml
   - task: jimrothatonesource.chucknorris-build-enhancer.ChuckNorrisTask@1
     displayName: 'Chuck Norris Quotes'
   ```

4. Run the pipeline
5. View the build summary - you should see the "Chuck Norris Says" section with a random quote and image based on build status.

## Troubleshooting

### "Extension not found in marketplace"
- Make sure the extension was published successfully
- Check the organization name in the `--share-with` parameter
- Verify you have the correct permissions

### "Not authorized" during publish
- Verify your PAT has "Marketplace (Manage)" permissions
- Check that the PAT hasn't expired
- Try logging out and logging back in: `npx tfx-cli logout` then `npx tfx-cli login`

### "Cannot read properties of null (reading 'versions')"
This error typically means one of these issues:
1. **Publisher doesn't exist** - You must create the publisher ID at https://marketplace.visualstudio.com/manage/publishers first (see "Create Publisher Account First" section)
2. **Wrong extension command** - Use `extension create` for the first publish (already in instructions), `extension publish` for updates
3. **Service URL mismatch** - Make sure you're logged in with the correct service URL that matches your organization
4. **PAT permissions** - Ensure your PAT has "Marketplace (Manage)" permissions
5. **Organization name** - Make sure the `--share-with` parameter uses the exact organization name

If all else fails, follow Step 4 (Upload and Share) to upload the VSIX directly through the marketplace web interface

### Task not showing in pipeline
- Verify the extension is installed in the organization
- Refresh your browser
- Make sure you're using the correct task ID: `jimrothatonesource.chucknorris-build-enhancer.ChuckNorrisTask@1`

## Rebuilding the Extension

If you make changes to the extension, rebuild it with:

```powershell
npm run clean
npm run build
```

This will create a new VSIX file in the project directory.

## Next Steps After Testing

Once you've verified the extension works locally in osvtest:

1. Test it thoroughly in multiple scenarios
2. Fix any bugs you find
3. Then consider publishing publicly (change `"public": true` in vss-extension.json)
4. Get feedback from your team before wider deployment
