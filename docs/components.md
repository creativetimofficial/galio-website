# Galio Components

Welcome to the Galio Components documentation! Here you'll find all the available components that make up the Galio Framework.

## Getting Started

Galio provides a comprehensive set of React Native components that are designed to work seamlessly together. Each component is carefully crafted to provide a beautiful, consistent user experience.

## Available Components

### Basic Components

- **Text** - Enhanced text component with typography support
- **Button** - Beautiful, customizable buttons
- **Input** - Form input components with validation
- **Card** - Container components for content organization

### Layout Components

- **Block** - Flexible layout container
- **Row** - Horizontal layout component
- **Col** - Column layout component
- **Grid** - Responsive grid system

### Navigation Components

- **Navbar** - Top navigation bar
- **TabBar** - Bottom tab navigation
- **Drawer** - Side navigation drawer

### Data Display Components

- **List** - List and list item components
- **Table** - Data table component
- **Avatar** - User avatar component
- **Badge** - Status indicator component

### Feedback Components

- **Modal** - Modal dialog component
- **Toast** - Notification toast component
- **Loading** - Loading indicator component
- **Progress** - Progress bar component

### Form Components

- **Checkbox** - Checkbox input component
- **Radio** - Radio button component
- **Switch** - Toggle switch component
- **Slider** - Range slider component

## Installation

To use Galio components, make sure you have the framework installed:

```bash
npm install galio-framework
```

## Basic Usage

Import and use components in your React Native app:

```jsx
import React from 'react';
import { View } from 'react-native';
import { Text, Button, Block } from 'galio-framework';

export default function MyComponent() {
  return (
    <Block flex center>
      <Text h4>Welcome to Galio!</Text>
      <Button round size="small">
        Get Started
      </Button>
    </Block>
  );
}
```

## Customization

All Galio components are highly customizable. You can override default styles, colors, and behaviors to match your app's design system.

## Contributing

We welcome contributions! If you'd like to add new components or improve existing ones, please check out our [contributing guidelines](https://github.com/galio-org/galio-framework).

## Support

If you need help with any component, please:

1. Check the component's documentation
2. Look at our [examples](https://github.com/galio-org/galio-examples)
3. Join our [community](https://github.com/galio-org/galio-framework/discussions)
4. Report issues on [GitHub](https://github.com/galio-org/galio-framework/issues) 