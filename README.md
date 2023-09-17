# open-external-browser

open external browser where in-app

<div align='center'>

https://github.com/hyesungoh/open-external-browser/assets/26461307/633d6b8c-2c53-4b7a-9e6f-92dde27a2e1a

</div>

<br />

## How to use

### 1. install

```bash
npm install open-external-browser
# or
yarn add open-external-browser
```

### 2-1. Open when you want

```tsx
import { openExternalBrowser } from 'open-external-browser';

function Bar() {
  const onClick = () => {
    openExternalBrowser({where: 'all'})
    // openExternalBrowser({ where: 'all', to: 'https:www.some-url-you-want.com' });
    // openExternalBrowser({ where: 'kakaotalk' });
  }

  return <button onClick={onClick}>open</button>
}
```

### 2-2. Open with effect

```tsx
import { useOpenExternalBrowser } from 'open-external-browser';

function Foo() {
  useOpenExternalBrowser({ where: 'all' });
  // same API with openExternalBrowser
  // useOpenExternalBrowser({ where: 'all', to: 'https:www.some-url-you-want.com' });
  // useOpenExternalBrowser({ where: 'kakaotalk' });

  return <div />;
}
```

<br />

## API

### where

In-app environment to open an external browser

* `all` - open when below in-apps
* `kakaotalk` - open when kakaotalk in-app
* `line` - open when line in-app

### to

url to open in external browser

* `default (undefined)` - current url (location.href)
* `string` - url you want
