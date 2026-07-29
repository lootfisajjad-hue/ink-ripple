/**
 * App root: seeds the local DB, loads profiles, and wires routing. Uses a hash
 * router so the PWA works from any static host with no server rewrites.
 */
import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { seedContent } from '@/infra/db/seed';
import { useSession } from '@/app/store/session';
import { Layout } from './Layout';
import { Onboarding } from './screens/Onboarding';
import { Dashboard } from './screens/Dashboard';
import { Learn } from './screens/Learn';
import { LessonScreen } from './screens/LessonScreen';
import { Course } from './screens/Course';
import { CourseCollection } from './screens/CourseCollection';
import { CourseLessonScreen } from './screens/CourseLessonScreen';
import { Words } from './screens/Words';
import { WordsCategory } from './screens/WordsCategory';
import { Flashcards } from './screens/Flashcards';
import { ReviewScreen } from './screens/ReviewScreen';
import { Citizenship } from './screens/Citizenship';
import { InterviewPractice } from './screens/InterviewPractice';
import { InterviewSimulator } from './screens/InterviewSimulator';
import { Documents } from './screens/Documents';
import { Society } from './screens/Society';
import { Pronunciation } from './screens/Pronunciation';
import { AIConversation } from './screens/AIConversation';
import { Progress } from './screens/Progress';
import { Settings } from './screens/Settings';
import { Profiles } from './screens/Profiles';

function Boot({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const loadProfiles = useSession((s) => s.loadProfiles);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        await seedContent();
        await loadProfiles();
      } finally {
        if (alive) setReady(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, [loadProfiles]);

  if (!ready) {
    return (
      <div className="boot">
        <div className="boot-logo">Olá Brasil</div>
        <div className="boot-sub">در حال آماده‌سازی…</div>
      </div>
    );
  }
  return <>{children}</>;
}

/** Redirect to onboarding until an active, onboarded profile exists. */
function RequireProfile({ children }: { children: React.ReactNode }) {
  const profile = useSession((s) => s.profile);
  if (!profile || !profile.onboarded)
    return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}

export function App() {
  return (
    <HashRouter>
      <Boot>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route
            element={
              <RequireProfile>
                <Layout />
              </RequireProfile>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/lesson/:id" element={<LessonScreen />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/c/:track" element={<CourseCollection />} />
            <Route path="/course/:id" element={<CourseLessonScreen />} />
            <Route path="/words" element={<Words />} />
            <Route path="/words/:category" element={<WordsCategory />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/review" element={<ReviewScreen />} />
            <Route path="/citizenship" element={<Citizenship />} />
            <Route
              path="/citizenship/interview"
              element={<InterviewPractice />}
            />
            <Route
              path="/citizenship/simulator"
              element={<InterviewSimulator />}
            />
            <Route path="/citizenship/documents" element={<Documents />} />
            <Route path="/citizenship/society" element={<Society />} />
            <Route path="/pronunciation" element={<Pronunciation />} />
            <Route path="/conversation" element={<AIConversation />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profiles" element={<Profiles />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Boot>
    </HashRouter>
  );
}
