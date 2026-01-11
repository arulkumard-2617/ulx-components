# ULS Components

> A modern, accessible UI component library built with Ember.js 6.4 LTS

[![Ember Version](https://img.shields.io/badge/Ember-6.4%20LTS-orange.svg)](https://emberjs.com/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

ULS Components is a comprehensive, design-system-driven UI component library for Ember.js applications. Built with modern Glimmer components (`.gjs` format), it provides a complete set of reusable, accessible, and configurable UI components following the Atomic Design pattern.

---

## 🎯 Overview

ULS Components is a **library**, not an application. All components are:

- ✅ **Generic** - No application-specific logic
- ✅ **Configurable** - Highly customizable via arguments
- ✅ **Reusable** - Works across multiple applications
- ✅ **Accessible** - WCAG 2.1 Level AA compliant by default
- ✅ **Modern** - Built with Ember.js 6.4 LTS and Glimmer components

---

## 📦 Installation

```bash
npm install uls-components
```

Or with yarn:

```bash
yarn add uls-components
```

---

## 🚀 Quick Start

### 1. Install the addon

```bash
ember install uls-components
```

### 2. Import styles

In your `app/styles/app.css` or `app/styles/app.less`:

```less
@import 'uls-components/styles';
```

### 3. Use components

```handlebars
{{! app/templates/application.hbs }}
<UlsButton @variant="primary" @onClick={{this.handleClick}}>
  Click Me
</UlsButton>

<UlsInputText 
  @label="Name"
  @value={{this.name}}
  @onChange={{this.handleNameChange}}
/>
```

---

## 📚 Component Categories

ULS Components follows the **Atomic Design** pattern:

### Elements (Atoms)
Basic building blocks - simple, single-purpose components.

- `uls-button` - Interactive button component
- `uls-input-text` - Text input field
- `uls-checkbox` - Checkbox input
- `uls-icon` - Icon component
- `uls-badge` - Badge component
- ... and more

### Collections (Molecules)
Composed components - combine multiple elements.

- `uls-card` - Card container with header/body/footer
- `uls-accordion` - Expandable accordion component
- `uls-tabs` - Tab navigation component
- `uls-menu` - Navigation menu
- ... and more

### Modules (Organisms)
Complex components - full-featured, business-logic components.

- `uls-dialog` - Modal dialog component
- `uls-data-table` - Advanced data table with sorting/filtering
- `uls-toast` - Toast notification system
- `uls-wizard` - Multi-step wizard
- ... and more

---

## 💻 Usage Examples

### Button Component

```handlebars
<UlsButton 
  @variant="primary"
  @size="large"
  @disabled={{false}}
  @onClick={{this.handleClick}}
>
  Submit
</UlsButton>
```

### Input Component

```handlebars
<UlsInputText
  @label="Email Address"
  @value={{this.email}}
  @placeholder="Enter your email"
  @required={{true}}
  @error={{this.emailError}}
  @helperText="We'll never share your email"
  @onChange={{this.handleEmailChange}}
/>
```

### Card Component

```handlebars
<UlsCard 
  @header="Card Title"
  @footer="Card Footer"
>
  <p>Card content goes here</p>
</UlsCard>
```

### Dialog Component

```handlebars
<UlsDialog
  @isOpen={{this.showDialog}}
  @title="Confirm Action"
  @onClose={{this.closeDialog}}
  @onConfirm={{this.handleConfirm}}
>
  <p>Are you sure you want to proceed?</p>
</UlsDialog>
```

---

## 🏗️ Project Structure

```
uls-components/
├── addon/
│   ├── components/
│   │   ├── -private/          # Internal components (not exported)
│   │   ├── elements/          # Atoms (basic components)
│   │   ├── collections/       # Molecules (composed components)
│   │   └── modules/           # Organisms (complex components)
│   ├── modifiers/             # Ember modifiers
│   ├── helpers/                # Template helpers
│   ├── services/               # Services
│   └── utils/                  # Pure JS utilities
├── app/                        # Re-exports for compatibility
├── tests/                      # Test files
└── docs/                       # Documentation
```

### Component File Structure

**Simple components** (flat files):
```
elements/
├── button.gjs
├── input-text.gjs
└── checkbox.gjs
```

**Complex components** (folders with subcomponents):
```
collections/
└── accordion/
    ├── index.gjs      # Main component
    ├── item.gjs       # Subcomponent
    └── header.gjs     # Subcomponent
```

---

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- Ember CLI 6.4+
- npm or yarn

### Cursor Rules

> **⚠️ Important for AI Agents**: This project includes a [`.cursorrules`](./.cursorrules) file that is **automatically read by Cursor AI agents**. All code generation and modifications MUST follow the rules defined in that file.

The `.cursorrules` file contains:
- Component structure and naming conventions
- Code standards and best practices
- Accessibility requirements
- Documentation templates
- Atomic Design categorization rules

**All AI assistants working on this project are automatically configured to follow these rules.**

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd uls-components

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm start
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test
npm test -- --filter button
```

### Building

```bash
# Build for production
npm run build

# Build for development
npm run build:dev
```

---

## 📖 Documentation

### Component Documentation

Each component includes comprehensive documentation:

- **Purpose** - What the component does
- **Public API** - All available arguments
- **Usage Examples** - Code examples
- **Accessibility** - Keyboard navigation and ARIA support
- **Constraints** - Limitations and requirements

### API Documentation

Full API documentation is available in the [docs/](./docs/) directory.

### Component Reference

Browse all available components:

- [Elements](./docs/components/elements.md)
- [Collections](./docs/components/collections.md)
- [Modules](./docs/components/modules.md)

---

## 🎨 Styling

ULS Components uses the ULS design system for styling. Styles are automatically included when you install the addon.

### Customization

You can customize components using CSS variables or by overriding styles:

```css
:root {
  --uls-primary-color: #007bff;
  --uls-border-radius: 4px;
}
```

### Themes

ULS Components supports multiple themes:

- Light theme (default)
- Dark theme
- Cardinal theme
- Cobalt theme

---

## ♿ Accessibility

All components are built with accessibility in mind:

- ✅ **Keyboard Navigation** - Full keyboard support
- ✅ **ARIA Attributes** - Proper ARIA roles and properties
- ✅ **Screen Reader Support** - Semantic HTML and ARIA labels
- ✅ **WCAG 2.1 Level AA** - Compliant by default

### Keyboard Shortcuts

- **Tab** - Navigate between interactive elements
- **Enter/Space** - Activate buttons and controls
- **Escape** - Close modals and overlays
- **Arrow Keys** - Navigate menus and lists

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Guidelines

1. **Follow the [Cursor Rules](./.cursorrules)** - This file is automatically read by AI agents and defines all coding standards
2. Write tests for all new components
3. Ensure accessibility compliance
4. Document all public APIs
5. Follow Ember.js best practices

> **Note**: The `.cursorrules` file ensures consistency across all AI-generated code. When using Cursor or other AI assistants, they will automatically apply these rules.

### Code Style

- Use `.gjs` format for all components
- Follow the Atomic Design pattern
- Use `kebab-case` for file names
- Use `PascalCase` for class names
- Prefix all components with `uls-`

---

## 📝 Component Philosophy

### PrimeReact Reference

ULS Components uses **PrimeReact as a conceptual reference only**:

- ✅ Component responsibilities and scope
- ✅ Interaction patterns and UX behavior
- ✅ Props/arguments structure
- ✅ Accessibility requirements

**However:**

- ❌ No PrimeReact code is used
- ❌ No React patterns or JSX
- ❌ All components are native Ember.js implementations

### Design Principles

1. **Generic** - No application-specific logic
2. **Configurable** - Highly customizable via arguments
3. **Reusable** - Works across multiple applications
4. **Accessible** - WCAG 2.1 Level AA compliant
5. **Maintainable** - Clear, documented, testable code

---

## 📋 Requirements

- **Ember.js**: 6.4 LTS or higher
- **Node.js**: 18 or higher
- **Modern Browsers**: Latest versions of Chrome, Firefox, Safari, Edge

---

## 🐛 Known Issues

See our [Issue Tracker](https://github.com/your-org/uls-components/issues) for known issues and feature requests.

---

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Resources

### Official Documentation

- [Ember.js Guides](https://guides.emberjs.com/)
- [Ember API Documentation](https://api.emberjs.com/)
- [Glimmer Component Documentation](https://github.com/glimmerjs/glimmer-component)

### Accessibility

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Design System

- [ULS Design System](https://your-design-system-url)

---

## 🙏 Acknowledgments

- Built with [Ember.js](https://emberjs.com/)
- Component design inspired by [PrimeReact](https://primereact.org/) (conceptual reference only)
- Following [Atomic Design](https://atomicdesign.bradfrost.com/) principles

---

## 📞 Support

- **Documentation**: [docs/](./docs/)
- **Issues**: [GitHub Issues](https://github.com/your-org/uls-components/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/uls-components/discussions)

---

## 🗺️ Roadmap

See our [Roadmap](./ROADMAP.md) for planned features and improvements.

---

**Made with ❤️ using Ember.js**

