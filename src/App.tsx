/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, ChevronRight, Sparkles, BookMarked, 
  Layers, Compass, Globe, Menu, X, Link as LinkIcon
} from 'lucide-react';

import { EPOCH_1_CHAPTERS, Chapter } from './data/epoch1';
import { EPOCH_2_CHAPTERS } from './data/epoch2';
import { EPOCH_3_CHAPTERS } from './data/epoch3';
import { EPOCH_4_CHAPTERS } from './data/epoch4';

interface BookPart {
  part: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

const CHRONOLOGICAL_BOOK_PARTS: BookPart[] = [
  {
    part: "Philosophical Era I",
    title: "Ancient Foundations & Axial Age Wisdom (c. 800–200 BCE)",
    description: "The foundational crystallization of human thought across Vedic South Asia, early China, and Classical Greece, ordered strictly from oldest to newest thinker.",
    chapters: EPOCH_1_CHAPTERS
  },
  {
    part: "Philosophical Era II",
    title: "Classical Statecraft, Scholasticism & Awakening (c. 150 BCE – 1400 CE)",
    description: "The synthesis of classical philosophy, Buddhist metaphysics, Islamic and Jewish golden-age theology, and medieval Christian scholasticism, ordered chronologically.",
    chapters: EPOCH_2_CHAPTERS
  },
  {
    part: "Philosophical Era III",
    title: "Early Modern Rationalism, Enlightenment & Critique (1500–1850 CE)",
    description: "The birth of modern scientific method, political contract theory, continental rationalism, British empiricism, German idealism, and early feminism, ordered chronologically.",
    chapters: EPOCH_3_CHAPTERS
  },
  {
    part: "Philosophical Era IV",
    title: "Late Modernity, Existentialism & Contemporary Horizons (1850–Present)",
    description: "The critique of bourgeois morality, Marxism, existentialism, pragmatism, phenomenology, post-structuralism, and contemporary philosophy of technology and ethics, ordered chronologically.",
    chapters: EPOCH_4_CHAPTERS
  }
];

// Helper to find all chapters across parts
const ALL_CHAPTERS: Chapter[] = CHRONOLOGICAL_BOOK_PARTS.flatMap(p => p.chapters);

export default function App() {
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  const [selectedChapterId, setSelectedChapterId] = useState('upanishads');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPart = CHRONOLOGICAL_BOOK_PARTS[selectedPartIndex];
  const currentChapter = currentPart.chapters.find(c => c.id === selectedChapterId) || currentPart.chapters[0];

  // Beginner-friendliness indicator
  const beginnerScore = currentChapter.vocabularyGlossary 
    ? (currentChapter.reflectionQuestions ? 75 : 50) 
    : (currentChapter.argument && currentChapter.argument.premises ? 40 : 20);
  const beginnerLabel = beginnerScore >= 75 ? '🌟 Beginner Friendly' : 
                        beginnerScore >= 50 ? '📖 Moderate' : 
                        '🎓 Advanced';
  const beginnerExplanation = beginnerScore >= 75 
    ? 'Clear structure with glossary and questions' 
    : beginnerScore >= 50 
    ? 'Some structure, partial guidance' 
    : 'Minimal guidance, recommended for experienced readers';

  // Function to jump to a linked philosopher by name or ID
  const jumpToPhilosopher = (targetNameOrId: string) => {
    const found = ALL_CHAPTERS.find(c => 
      c.id === targetNameOrId || 
      c.name.toLowerCase().includes(targetNameOrId.toLowerCase())
    );
    if (found) {
      // Find which part contains this chapter
      const pIdx = CHRONOLOGICAL_BOOK_PARTS.findIndex(p => p.chapters.some(ch => ch.id === found.id));
      if (pIdx !== -1) {
        setSelectedPartIndex(pIdx);
        setSelectedChapterId(found.id);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Extract related philosophers based on influences or keyword matches in analysis
  const getRelatedPhilosophers = (chapter: Chapter): Chapter[] => {
    const relatedIds = new Set<string>();
    
    // Check influences text for known philosopher names
    chapter.influences.forEach(inf => {
      ALL_CHAPTERS.forEach(c => {
        if (inf.toLowerCase().includes(c.name.toLowerCase()) && c.id !== chapter.id) {
          relatedIds.add(c.id);
        }
      });
    });

    // Check counter-arguments or analysis for mentions
    ALL_CHAPTERS.forEach(c => {
      if (c.id !== chapter.id) {
        if (
          chapter.scholarlyAnalysis.toLowerCase().includes(c.name.toLowerCase()) ||
          chapter.counterArguments.toLowerCase().includes(c.name.toLowerCase())
        ) {
          relatedIds.add(c.id);
        }
      }
    });

    // Fallback: pick adjacent chronological thinkers if none found
    if (relatedIds.size === 0) {
      const idx = ALL_CHAPTERS.findIndex(c => c.id === chapter.id);
      if (idx > 0) relatedIds.add(ALL_CHAPTERS[idx - 1].id);
      if (idx < ALL_CHAPTERS.length - 1) relatedIds.add(ALL_CHAPTERS[idx + 1].id);
    }

    return Array.from(relatedIds).map(id => ALL_CHAPTERS.find(c => c.id === id)!).filter(Boolean).slice(0, 4);
  };

  const relatedThinkers = getRelatedPhilosophers(currentChapter);

  return (
    <div className="min-h-screen bg-[#F7F4EB] text-[#0A3630] flex flex-col font-sans selection:bg-[#C5A059]/30 selection:text-[#0A3630]">
      {/* Top Academic Header (Search bar removed per instructions) */}
      <header className="bg-philosophy-ivory/95 backdrop-blur-md sticky top-0 z-50 border-b border-philosophy-emerald/30 shadow-[0_1px_3px_rgba(6,62,59,0.08)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-6 flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-philosophy-emerald text-philosophy-ivory focus:outline-none focus:ring-2 focus:ring-philosophy-emerald focus:ring-offset-2 focus:ring-offset-philosophy-ivory transition-all duration-200 hover:bg-philosophy-emerald/90 hover:shadow-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="relative p-3 md:p-3.5 bg-philosophy-emerald rounded-xl shadow-lg" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-br from-philosophy-emerald to-philosophy-emerald/80 rounded-xl opacity-20" />
              <svg className="w-6 h-6 md:w-7 md:h-7 text-philosophy-ivory" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {/* Custom philosophy symbol: Phi (φ) within a wisdom circle - the golden ratio of wisdom */}
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2"/>
                {/* Phi symbol - the golden ratio, symbol of harmony and wisdom */}
                <path d="M12 4c-2.5 0-4.5 2-4.5 4.5S9.5 13 12 13s4.5-2 4.5-4.5S14.5 4 12 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Wisdom rays emanating from center */}
                <path d="M12 2v2" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
                <path d="M12 20v2" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
                <path d="M2 12h2" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
                <path d="M20 12h2" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
                <path d="M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
                <path d="M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
                <path d="M4.93 19.07l1.41-1.41" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
                <path d="M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl font-bold font-serif tracking-tight text-philosophy-deep-teal leading-tight">
                The World's Philosophies
              </h1>
              <p className="text-xs md:text-sm text-philosophy-deep-teal/60 mt-0.5 font-sans tracking-wide leading-normal">
                Authoritative Primary Sources & Scholarly Treatise
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-gradient-to-b from-transparent via-philosophy-emerald/40 to-transparent ml-4 mr-2" aria-hidden="true" />
            <div className="hidden lg:block text-right">
              <p className="text-[10px] text-philosophy-emerald/50 font-sans tracking-widest uppercase">
                Philosophy
              </p>
            </div>
          </div>
        </div>
        {/* Gold accent line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-philosophy-emerald/50 to-transparent mx-auto max-w-7xl px-4" aria-hidden="true" />
      </header>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-6 md:py-8 bg-philosophy-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Sidebar Navigation (Philosophical Eras) */}
          <div className={`
            lg:block ${mobileMenuOpen ? 'block' : 'hidden'}
            lg:col-span-1 bg-philosophy-ivory border border-philosophy-deep-teal/15 rounded-2xl p-5 shadow-sm flex flex-col gap-4 h-fit
            fixed lg:sticky top-20 lg:top-24 left-4 right-4 lg:left-auto lg:right-auto z-40 max-h-[80vh] lg:max-h-[72vh] overflow-y-auto
            bg-philosophy-ivory/95 backdrop-blur lg:backdrop-blur-none
          `}>
            <div className="flex items-center justify-between border-b border-[#0A3630]/15 pb-3">
              <h3 className="font-serif font-bold text-[#0A3630] flex items-center gap-2 text-sm">
                <BookMarked className="w-4 h-4 text-[philosophy-deep-teal/60]" />
                Philosophical Eras
              </h3>
              {mobileMenuOpen && (
                <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-[#0A3630]">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="space-y-4 pr-1">
              {CHRONOLOGICAL_BOOK_PARTS.map((part: any, pIdx: number) => {
                return (
                  <div key={pIdx} className="space-y-2">
                    <button
                      onClick={() => setSelectedPartIndex(pIdx)}
                      className={`w-full text-left font-serif font-bold text-xs tracking-wide uppercase px-2 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-philosophy-emerald focus:ring-offset-2 focus:ring-offset-philosophy-ivory ${
                        selectedPartIndex === pIdx 
                          ? 'text-philosophy-deep-teal bg-philosophy-emerald/20 border-l-4 border-philosophy-deep-teal font-bold' 
                          : 'text-philosophy-deep-teal/70 hover:text-philosophy-deep-teal hover:bg-philosophy-emerald/10'
                      }`}
                    >
                      {part.part}
                    </button>
                    <div className="space-y-1 pl-2 border-l-2 border-[#0A3630]/15">
                      {part.chapters.map((ch: any) => (
                        <button
                          key={ch.id}
                          onClick={() => {
                            setSelectedPartIndex(pIdx);
                            setSelectedChapterId(ch.id);
                            setMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-philosophy-emerald focus:ring-offset-2 focus:ring-offset-philosophy-ivory ${
                            selectedChapterId === ch.id
                              ? 'bg-philosophy-emerald/20 text-philosophy-deep-teal border-l-4 border-philosophy-deep-teal font-bold shadow-sm'
                              : 'text-philosophy-deep-teal/80 hover:bg-philosophy-emerald/10 hover:text-philosophy-deep-teal'
                          }`}
                        >
                          <span className="truncate">{ch.name}</span>
                          <ChevronRight className={`w-3.5 h-3.5 ${selectedChapterId === ch.id ? 'text-philosophy-deep-teal' : 'text-philosophy-deep-teal/40'}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chapter Detailed Reader View */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#FBF9F1] border border-[#0A3630]/15 rounded-3xl p-6 md:p-10 shadow-md relative overflow-hidden space-y-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Chapter Header */}
              <div className="border-b border-philosophy-deep-teal/15 pb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-widest text-philosophy-emerald bg-philosophy-emerald/10 font-bold px-3 py-1 rounded-full border border-philosophy-emerald/30">
                    {currentChapter.tradition} • {currentChapter.era}
                  </span>
                  <span className="text-[11px] md:text-xs font-mono text-philosophy-deep-teal/60">
                    Region: {currentChapter.region}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-serif text-philosophy-deep-teal">{currentChapter.name}</h2>
                <p className="text-philosophy-deep-teal/80 text-sm md:text-base mt-2 italic font-serif leading-relaxed">
                  "{currentChapter.summary}"
                </p>
              </div>

              {/* Cross-Linked Connected Thinkers / Influences */}
              <div className="p-5 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-widest text-[philosophy-emerald] flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  Connected Philosophers & Cross-References
                </h3>
                <div className="flex flex-wrap gap-2">
                  {relatedThinkers.map((thinker: any) => (
                    <button
                      key={thinker.id}
                      onClick={() => jumpToPhilosopher(thinker.id)}
                      className="text-xs bg-white hover:bg-philosophy-emerald/10 hover:text-philosophy-deep-teal text-philosophy-deep-teal border border-philosophy-deep-teal/20 px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-philosophy-emerald focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <ChevronRight className="w-3 h-3 text-philosophy-emerald" />
                      <span>{thinker.name} ({thinker.era})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Vocabulary Glossary / Meaning for Difficult Words */}
              {currentChapter.vocabularyGlossary && currentChapter.vocabularyGlossary.length > 0 && (
                <div className="p-5 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[philosophy-emerald] flex items-center gap-2">
                    <BookMarked className="w-4 h-4" />
                    Key Terminology & Etymological Meanings
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentChapter.vocabularyGlossary.map((vocab: any, vIdx: number) => (
                      <div key={vIdx} className="bg-[#F7F4EB] p-3 rounded-xl border border-[#0A3630]/10">
                        <span className="font-serif font-bold text-xs text-[#0A3630]">{vocab.term}: </span>
                        <span className="text-xs text-[#0A3630]/80">{vocab.definition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Intellectual Influences */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-bold tracking-widest text-[philosophy-emerald] flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Intellectual Influences & Background
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(currentChapter.influences || []).map((inf: string, idx: number) => (
                    <span key={idx} className="text-xs bg-[#0A3630]/5 border border-[#0A3630]/15 px-3 py-1.5 rounded-lg text-[#0A3630] font-medium">
                      {inf}
                    </span>
                  ))}
                </div>
              </div>

              {/* Historical & Cultural Setting / Central Thinking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 md:p-6 bg-[white] rounded-2xl border border-[philosophy-deep-teal]/15 space-y-2">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-[philosophy-deep-teal/60]" />
                    Historical & Cultural Setting (Verified)
                  </h4>
                  <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed">
                    {currentChapter.historicalContext}
                  </p>
                </div>

                <div className="p-5 md:p-6 bg-[white] rounded-2xl border border-[philosophy-deep-teal]/15 space-y-2">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-[philosophy-deep-teal/60]" />
                    Central Philosophical Thinking
                  </h4>
                  <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed">
                    {currentChapter.centralThinking}
                  </p>
                </div>
              </div>

              {/* Researched Primary Source Citation */}
              <div className="p-6 md:p-8 bg-[philosophy-deep-teal] text-[white] rounded-2xl border border-[philosophy-emerald]/40 space-y-4 shadow-xl">
                <div className="flex items-center justify-between text-xs text-[white] font-mono border-b border-[philosophy-deep-teal]/10 pb-2">
                  <span>AUTHORITATIVE PRIMARY SOURCE</span>
                  <span>{currentChapter.quote.source} ({currentChapter.quote.citation})</span>
                </div>
                <div className="space-y-3">
                  {currentChapter.quote.translation ? (
                    <>
                      <p className="font-serif italic text-[philosophy-emerald]/90 text-xs">
                        Original Text / Transliteration: "{currentChapter.quote.originalText}"
                      </p>
                      <p className="font-serif text-base md:text-lg text-[white] font-medium leading-relaxed">
                        English Translation: "{currentChapter.quote.translation}"
                      </p>
                    </>
                  ) : (
                    <p className="font-serif text-base md:text-lg text-[white] font-medium leading-relaxed">
                      "{currentChapter.quote.originalText}"
                    </p>
                  )}
                </div>
                {currentChapter.quote.translatorOrEdition && (
                  <p className="text-[11px] text-[white]/60">
                    Scholarly Edition / Translator: {currentChapter.quote.translatorOrEdition}
                  </p>
                )}
              </div>

              {/* Scholarly Commentary & Argument Reconstruction */}
              <div className="space-y-4">
                <div className="border-b border-[#0A3630]/15 pb-2">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[philosophy-emerald] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Scholarly Commentary & Argument Reconstruction
                  </h3>
                </div>

                {(() => {
                  const cleanedText = currentChapter.scholarlyAnalysis
                    .replace(/^Scholarly Commentary & Argument Reconstruction[:\s-]*/i, '')
                    .trim();

                  if (cleanedText.includes('### ')) {
                    const rawSections = cleanedText.split(/(?=###\s+)/g);
                    const parsed = rawSections.map((sec: string) => {
                      const match = sec.match(/^###\s+([^\n]+)\n+([\s\S]*)$/);
                      if (match) {
                        return { title: match[1].trim(), content: match[2].trim() };
                      }
                      return { title: '', content: sec.trim() };
                    }).filter(s => s.content.length > 0 || s.title.length > 0);

                    return (
                      <div className="space-y-4">
                        {parsed.map((sec: any, idx: number) => (
                          <div key={idx} className="bg-[#0A3630]/5 p-5 md:p-6 rounded-2xl border border-[#0A3630]/15 space-y-3 shadow-xs">
                            {sec.title && (
                              <div className="flex items-center gap-2.5 border-b border-[#0A3630]/10 pb-2.5">
                                <span className="w-6 h-6 rounded-full bg-[#C5A059]/20 text-[#0A3630] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#C5A059]/30">
                                  {idx + 1}
                                </span>
                                <h4 className="font-serif font-bold text-sm md:text-base text-[#0A3630]">
                                  {sec.title.replace(/^[0-9IVX]+\.\s*/, '')}
                                </h4>
                              </div>
                            )}
                            <div className="space-y-3">
                              {sec.content.split(/\n\s*\n/).map((p: string, pIdx: number) => (
                                <p key={pIdx} className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed font-serif">
                                  {p.trim()}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  const paragraphs = cleanedText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
                  return (
                    <div className="space-y-3 bg-[#0A3630]/5 p-5 md:p-6 rounded-2xl border border-[#0A3630]/10">
                      {paragraphs.map((p: string, pIdx: number) => (
                        <p key={pIdx} className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed font-serif">
                          {p.trim()}
                        </p>
                      ))}
                    </div>
                  );
                })()}

                <div className="p-6 bg-[#F7F4EB] rounded-2xl border border-[#0A3630]/15 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-[#0A3630]">
                    <span>Comprehensive Logical Structure ({currentChapter.argument.type})</span>
                  </div>
                  <div className="space-y-2 text-xs md:text-sm text-[#0A3630]/85">
                    <p className="font-semibold text-[philosophy-emerald]">Premises:</p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      {currentChapter.argument.premises.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-[#0A3630]/15 mt-3">
                      <p className="font-semibold text-[philosophy-emerald]">Conclusion:</p>
                      <p className="font-medium text-[#0A3630] mt-1">{currentChapter.argument.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Era vs Today Examples with Relevance Explanation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 md:p-6 bg-[white] rounded-2xl border border-[philosophy-deep-teal]/15 space-y-2">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] text-xs uppercase tracking-wider text-[philosophy-emerald]">
                    Examples from That Era & Relevance
                  </h4>
                  <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed">
                    {currentChapter.eraExamples}
                  </p>
                </div>

                <div className="p-5 md:p-6 bg-[white] rounded-2xl border border-[philosophy-deep-teal]/15 space-y-2">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] text-xs uppercase tracking-wider text-[philosophy-emerald]">
                    Today's Era (Contemporary Relevance & Why It Matters)
                  </h4>
                  <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed">
                    {currentChapter.contemporaryExamples}
                  </p>
                </div>
              </div>

              {/* Counter-Arguments & Reflection Questions */}
              <div className="space-y-6 pt-4 border-t border-[#0A3630]/15">
                <div className="p-5 md:p-6 bg-[white] rounded-2xl border border-[philosophy-deep-teal]/15 space-y-2">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] text-xs uppercase tracking-wider text-[philosophy-emerald]">
                    Counter-Arguments (Then and Now)
                  </h4>
                  <p className="text-xs md:text-sm text-[#0A3630]/85 leading-relaxed">
                    {currentChapter.counterArguments}
                  </p>
                </div>

                <div className="p-6 bg-[#0A3630]/5 rounded-2xl border border-[#0A3630]/15 space-y-3">
                  <h4 className="font-serif font-bold text-[philosophy-deep-teal] flex items-center gap-2 text-sm">
                    <Compass className="w-4 h-4 text-[philosophy-deep-teal/60]" />
                    Reflection Questions
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#0A3630]/90">
                    {currentChapter.reflectionQuestions.map((q: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="font-bold text-[philosophy-deep-teal/60] shrink-0">{i + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[philosophy-deep-teal]/20 py-6 text-center text-xs text-[philosophy-deep-teal/60] bg-[white]">
        <p className="text-[philosophy-deep-teal/60]">
          Created by Heena Chhatlani, 2026 • The World's Philosophies • Authoritative Primary Sources & Scholarly Treatise
        </p>
      </footer>
    </div>
  );
}
