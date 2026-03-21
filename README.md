# Little Dragon Recommendations 🐉

A beautiful, customizable React component for displaying recommendations in a grid layout.

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
import RecommendationsList from 'little-dragon-recommendations';

function App() {
  const handleClick = (item: Recommendation) => {
    console.log('Clicked:', item);
  };

  return (
    <Recommendations 
      storeSlug={storeSlug}
      productType='flower'
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `storeSlug` | `string` | **required** | The store identifier |
| `productType` | `string` | `flower` | The type of product to recommend (flower or pre-roll) |
| `type` | `best \| value \| exotic \| similar` | `value` | The type of recommendation to make |
| `originalMenuItemId` | `int` | **required when `type` is `similar`** | The original item to base similar recommendations on |
| `baseUrl` | `string` | `https://demo-api.littledragon.keithswork.com` | The base URL for the API |
| `onAddToCart` | `function` | `null` | A method to call when the "add to cart" button is clicked |

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Type check
npm run type-check

# Lint
npm run lint