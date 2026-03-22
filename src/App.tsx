/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { WritingTools } from './pages/WritingTools';
import { UtilityTools } from './pages/UtilityTools';
import { AllTools } from './pages/AllTools';

// Tools
import { WordCounter } from './tools/WordCounter';
import { Paraphraser } from './tools/Paraphraser';
import { AgeCalculator } from './tools/AgeCalculator';
import { PercentageCalculator } from './tools/PercentageCalculator';
import { CGPAConverter } from './tools/CGPAConverter';
import { TimetableGenerator } from './tools/TimetableGenerator';
import { StudyTimer } from './tools/StudyTimer';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<WritingTools />} />
          <Route path="/utility" element={<UtilityTools />} />
          <Route path="/all-tools" element={<AllTools />} />
          
          {/* Tool Routes */}
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route path="/tools/paraphraser" element={<Paraphraser />} />
          <Route path="/tools/age-calculator" element={<AgeCalculator />} />
          <Route path="/tools/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/tools/cgpa-converter" element={<CGPAConverter />} />
          <Route path="/tools/timetable-generator" element={<TimetableGenerator />} />
          <Route path="/tools/study-timer" element={<StudyTimer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

