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
    openExternalBrowser({ where: 'all' })
    // openExternalBrowser({ where: 'all', to: 'https:www.some-url-you-want.com' });
    // openExternalBrowser({ where: 'kakaotalk' });
    // openExternalBrowser({ where: 'kakaotalk', onOpen: (where) => console.log(where) });
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
  // useOpenExternalBrowser({ where: 'kakaotalk', onOpen: (where) => console.log(where) });

  return <div />;
}
```

<br />

## API

### where

In-app environment to open an external browser

* `all` - open when below in-apps
* `string (in-app)`
  + `kakaotalk` - open when kakaotalk in-app
  + `line` - open when line in-app
* `string[] (in-apps)`
  + `['kakaotalk', 'line']` - open when kakaotalk or line in-app

#### example

```tsx
openExternalBrowser({ where: 'all' });
openExternalBrowser({ where: 'kakaotalk' });
openExternalBrowser({ where: ['kakaotalk', 'line'] });

useOpenExternalBrowser({ where: 'all' });
useOpenExternalBrowser({ where: 'kakaotalk' });
useOpenExternalBrowser({ where: ['kakaotalk', 'line'] });
```

### to

url to open in external browser

* `default (undefined)` - current url (location.href)
* `string` - url you want

#### example

```tsx
openExternalBrowser({ where: 'all', to: 'https://www.your-url.com' });

useOpenExternalBrowser({ where: 'all', to: 'https://www.your-url.com' });
```

### onOpen

callback function when open external browser

* `default (undefined)` - do nothing
* `function ((where: InApp) => void)` - callback function

#### example

```tsx
openExternalBrowser({ where: 'all', onOpen: (where) => console.log(where) });

useOpenExternalBrowser({ where: 'all', onOpen: (where) => console.log(where) });
```

```tsx
import { useOpenExternalBrowser, type OpenEventHandler } from 'open-external-browser';

function Foo() {
  const [state, setState] = useState<string>('');

  const onOpen: OpenEventHandler = (where) => {
    setState(where);
    trackEvent(where);
  }

  useOpenExternalBrowser({ where: 'all', onOpen: onOpen });

  return <span>{state}</span>
}
```
