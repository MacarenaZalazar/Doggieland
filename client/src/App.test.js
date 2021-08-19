import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import NavBar from './components/NavBar/NavBar';

test("Expect 'welcome' & 'doggieland' to render in route /", () => {
  render(
    <Provider store={store}>
      <BrowserRouter> 
        <App />
      </BrowserRouter> 
    </Provider>
  );
  const linkElement = screen.getByText(/welcome/i);
  const linkElement2 = screen.getByText(/Doggieland/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});

  

