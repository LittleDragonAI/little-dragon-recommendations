# Little Dragon Recommendations 🐉

A beautiful, customizable React component for displaying recommendations in a grid layout.

## Features

- 🎨 Clean, modern design
- 📱 Responsive grid layouts (1-4 columns)
- 🖼️ Optional image support
- ♿ Accessibility-friendly (ARIA labels, keyboard navigation)
- 📦 Easy to integrate
- 🎯 TypeScript support
- 🚀 Lightweight with zero dependencies (except React)

## Installation

```bash
npm install little-dragon-recommendations
```

or

```bash
yarn add little-dragon-recommendations
```

## Usage

```tsx
import { Recommendations, Recommendation } from 'little-dragon-recommendations';
import 'little-dragon-recommendations/dist/style.css';

const myRecommendations: Recommendation[] = [
  {
    id: 1,
    title: 'Great Product',
    description: 'An amazing product you should check out!',
    imageUrl: 'https://example.com/image.jpg',
    url: 'https://example.com/product',
  },
  // ... more recommendations
];

function App() {
  const handleClick = (item: Recommendation) => {
    console.log('Clicked:', item);
  };

  return (
    <Recommendations 
      items={myRecommendations}
      onItemClick={handleClick}
      columns={3}
      showImages={true}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Recommendation[]` | **required** | Array of recommendation items to display |
| `onItemClick` | `(item: Recommendation) => void` | `undefined` | Callback when an item is clicked. If not provided and item has `url`, opens in new tab |
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | Number of columns in the grid |
| `showImages` | `boolean` | `true` | Whether to display images |
| `className` | `string` | `''` | Additional CSS class for the container |

## Recommendation Type

```typescript
interface Recommendation {
  id: string | number;
  title: string;
  description?: string;
  imageUrl?: string;
  url?: string;
  metadata?: Record<string, any>;
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server with demo
npm run dev

# Build the library
npm run build

# Type check
npm run type-check

# Lint
npm run lint
```

## Publishing

The package is configured to be published to npm. Before publishing:

1. Update version in `package.json`
2. Build the library: `npm run build`
3. Publish: `npm publish`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
