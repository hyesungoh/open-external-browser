import { useOpenExternalBrowser } from 'open-external-browser';

function App() {
  useOpenExternalBrowser({ where: 'all' });

  return (
    <main>
      <h1>open external browser</h1>
    </main>
  );
}

export default App;
