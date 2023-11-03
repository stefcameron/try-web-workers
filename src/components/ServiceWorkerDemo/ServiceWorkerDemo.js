import { useEffect } from 'react';
import './ServiceWorkerDemo.styles.css';

export const ServiceWorkerDemo = function () {
  //
  // STATE
  //

  //
  // EFFECTS
  //

  useEffect(() => {
    if (navigator?.serviceWorker) {
      let registration;
      navigator.serviceWorker.register('/static/serviceWorker.js').then(
        (reg) => {
          console.log(
            '[ServiceWorkerDemo] Service worker registration succeeded:',
            reg
          );
          registration = reg;
        },
        (err) => {
          console.error(
            `[ServiceWorkerDemo] Service worker registration failed: "${err.message}"`,
            err
          );
        }
      );

      return () => {
        console.log('[ServiceWorkerDemo] Unregistering worker');
        registration.unregister().then(
          () => {
            console.log(
              '[ServiceWorkerDemo] Service worker successfully unregistered'
            );
          },
          (err) => {
            console.error(
              `[ServiceWorkerDemo] Failed to unregister service worker: "${err.message}"`,
              err
            );
          }
        );
      };
    }
  }, []);

  //
  // RENDER
  //

  return (
    <div className="service-worker-demo">
      <details>
        <summary>More Info</summary>
        <h3>Use case ideas</h3>
        <p>
          Taken mostly from the{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
            target="__blank"
            referrerPolicy="no-referrer"
          >
            Service Worker API
          </a>{' '}
          docs:
        </p>
        <ul>
          <li>
            Offline experience (network request interception, caching, etc.)
          </li>
          <li>Background data synchronization.</li>
          <li>Responding to resource requests from other origins.</li>
          <li>
            Receiving centralized updates to expensive-to-calculate data such as
            geolocation or gyroscope, so multiple pages can make use of one set
            of data.
          </li>
          <li>
            Client-side compiling and dependency management of CoffeeScript,
            less, CJS/AMD modules, etc. for development purposes.
          </li>
          <li>Hooks for background services.</li>
          <li>Custom templating based on certain URL patterns.</li>
          <li>
            Performance enhancements, for example pre-fetching resources that
            the user is likely to need in the near future, such as the next few
            pictures in a photo album.
          </li>
          <li>API mocking.</li>
        </ul>
      </details>
    </div>
  );
};
