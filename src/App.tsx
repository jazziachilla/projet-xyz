import { Outlet } from 'react-router-dom';

//on eleve tweetlist parce que plus dans App 
export function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h1>Mon fil d'actualité</h1>
      </header>
      <Outlet />
    </div>
  );
}