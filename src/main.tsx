import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
//etape 02 route, imbrication 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TweetsMasterPage } from './pages/TweetsMasterPage.tsx';
import { TweetDetailsPage } from './pages/TweetDetailsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';


{/* routes pour la bonne conservtaion du layout */}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* route affiche le layout App */}
        <Route path="/" element={<App />}>
          {/* route index affiche la page principale des tweets  */}
          <Route index element={<TweetsMasterPage />} />
          {/* route enfant pour voir le détail d'un tweet  */}
          <Route path="tweets/:id" element={<TweetDetailsPage />} />
          {/* route enfant de secours */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)