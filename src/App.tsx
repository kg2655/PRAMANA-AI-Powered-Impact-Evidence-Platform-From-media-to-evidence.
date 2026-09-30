import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { EvidenceLibraryPage } from './pages/EvidenceLibraryPage';
import { EvidenceDetailPage } from './pages/EvidenceDetailPage';
import { ExplorePage } from './pages/ExplorePage';
import { ComparePage } from './pages/ComparePage';
import { StoriesPage } from './pages/StoriesPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public editorial landing page */}
        <Route path="/landing" element={<LandingPage />} />

        {/* Core application routes wrapped in AppLayout */}
        <Route
          path="/"
          element={
            <AppLayout>
              <DashboardPage />
            </AppLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <DashboardPage />
            </AppLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <AppLayout>
              <ProjectsPage />
            </AppLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <AppLayout>
              <ProjectDetailPage />
            </AppLayout>
          }
        />
        <Route
          path="/evidence"
          element={
            <AppLayout>
              <EvidenceLibraryPage />
            </AppLayout>
          }
        />
        <Route
          path="/evidence/:id"
          element={
            <AppLayout>
              <EvidenceDetailPage />
            </AppLayout>
          }
        />
        <Route
          path="/explore"
          element={
            <AppLayout>
              <ExplorePage />
            </AppLayout>
          }
        />
        <Route
          path="/compare"
          element={
            <AppLayout>
              <ComparePage />
            </AppLayout>
          }
        />
        <Route
          path="/stories"
          element={
            <AppLayout>
              <StoriesPage />
            </AppLayout>
          }
        />

        {/* Fallback to Dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
