import { useState } from 'react';
import { ServiceWorkerDemo } from '../ServiceWorkerDemo/ServiceWorkerDemo';
import './App.styles.css';

const demoTypes = Object.freeze({
  SERVICE: 'serviceWorker',
  SHARED: 'sharedWorker',
  DEDICATED: 'dedicatedWorker',
});

export const App = function () {
  const [demoType, setDemoType] = useState('serviceWorker');

  const demoTitle =
    demoType === demoTypes.SERVICE
      ? 'Service Worker'
      : demoType === demoTypes.SHARED
      ? 'Shared Worker'
      : 'Dedicated Worker';

  return (
    <div className="app">
      <h1>Web Worker Demos</h1>
      <div className="app__demos">
        <div className="app__demos__selector">
          <label>
            <input
              type="radio"
              name="demoType"
              value={demoTypes.SERVICE}
              checked={demoType === demoTypes.SERVICE}
              onChange={() => setDemoType(demoTypes.SERVICE)}
            />
            Service Worker
          </label>
          <label>
            <input
              type="radio"
              name="demoType"
              value={demoTypes.SHARED}
              checked={demoType === demoTypes.SHARED}
              onChange={() => setDemoType(demoTypes.SHARED)}
            />
            Shared Worker
          </label>
          <label>
            <input
              type="radio"
              name="demoType"
              value={demoTypes.DEDICATED}
              checked={demoType === demoTypes.DEDICATED}
              onChange={() => setDemoType(demoTypes.DEDICATED)}
            />
            Service Worker
          </label>
        </div>
        <div className="app__demos__demo-box">
          <h2>{demoTitle}</h2>
          {demoType === demoTypes.SERVICE ? <ServiceWorkerDemo /> : null}
        </div>
      </div>
    </div>
  );
};
