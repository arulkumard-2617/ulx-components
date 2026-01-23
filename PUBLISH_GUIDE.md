# Publishing Guide - Git Installation Fix

## ✅ **Fixed: Dot Files Exclusion**

### Problem
When installing from Git:
```bash
npm install git+https://zrepository.zohocorpcloud.in/zohocorp/user/bhuvanesh-12328/uls-components.git#master-v2
```

All tracked files (including dot files like `.vscode`, `.prettierignore`, etc.) were being included.

### Solution

#### 1. **Added `files` field to `package.json`**
This explicitly controls what gets published:

```json
"files": [
  "addon-main.cjs",
  "dist",
  "README.md",
  "LICENSE.md"
]
```

**Only these 4 items will be included:**
- ✅ `addon-main.cjs` - Addon entry point
- ✅ `dist/` - Compiled components
- ✅ `README.md` - Documentation
- ✅ `LICENSE.md` - License file

#### 2. **Updated `.npmignore`**
Added comprehensive exclusions for:
- ❌ All dot files (`.vscode`, `.prettierignore`, etc.)
- ❌ Source files (`/src/`, `/tests/`)
- ❌ Config files (babel, rollup, tsconfig, etc.)
- ❌ IDE files
- ❌ Development files

## 📦 **What Gets Published**

### ✅ **Included:**
```
uls-components/
├── addon-main.cjs
├── dist/
│   ├── index.js
│   ├── components/
│   └── _app_/
├── README.md
├── LICENSE.md
└── package.json
```

### ❌ **Excluded:**
```
❌ .vscode/
❌ .prettierignore
❌ .eslintrc.cjs
❌ .template-lintrc.cjs
❌ .editorconfig
❌ .npmrc
❌ src/
❌ tests/
❌ babel.config.json
❌ rollup.config.mjs
❌ tsconfig.json
❌ All other dot files
```

## 🧪 **Testing**

### Test what gets published:
```bash
npm pack --dry-run
```

### Verify after Git install:
```bash
# In a test project
npm install git+https://zrepository.zohocorpcloud.in/zohocorp/user/bhuvanesh-12328/uls-components.git#master-v2

# Check what was installed
ls node_modules/uls-components/
```

Should only show:
- `addon-main.cjs`
- `dist/`
- `README.md`
- `LICENSE.md`
- `package.json`

## 🎯 **Result**

✅ **Clean package** - Only essential files
✅ **No dot files** - All config files excluded
✅ **Small size** - Minimal package footprint
✅ **Works from Git** - Proper exclusions applied

## 📝 **Note**

The `files` field in `package.json` takes precedence over `.npmignore`. Both are configured for maximum compatibility:
- `files` field = Explicit whitelist (primary)
- `.npmignore` = Additional exclusions (backup)

