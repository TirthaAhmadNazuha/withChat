import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider, useLoaderData, defer, Await,
} from 'react-router-dom';
import App from './App';
import PagesLayout from './components/pagesLayout';
import './index.css';

const Say = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>The Greeting!</h1>
      <React.Suspense fallback={<h2>Name Loading...</h2>}>
        <Await
          resolve={data.greeting}
          errorElement={<h2>Error name not found</h2>}
        >
          {(greeting) => (<h2>{greeting.say}</h2>)}
        </Await>
      </React.Suspense>
    </>
  );
};

const SayLaoder = ({ params }) => defer({ greeting: fetch(`http://localhost:8080/sayHello/${params.name}`).then((data) => data.json()) });//

const ErrorElem = () => (<h1>Error the Loader not found data!</h1>);

const LoadingElem = () => (<h2>Loading...</h2>);

const router = createBrowserRouter([
  {
    path: '/',
    element: <PagesLayout />,
    errorElement: <ErrorElem />,
  },
  {
    path: '/app',
    element: <App />,
    errorElement: <ErrorElem />,
  },
  {
    path: 'hello/:name',
    loader: SayLaoder,
    element: <Say />,
  },
]);

let root = null;
document.addEventListener('DOMContentLoaded', () => {
  if (!root) {
    root = document.getElementById('root');
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<LoadingElem />} />
      </React.StrictMode>,
    );
  }
});
