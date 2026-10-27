/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Chapter } from './epoch1';
import { ERA_1_COMMENTARY, type CommentarySection, type CounterArgumentsData, type ThinkerCommentary } from './commentaryEra1';
import { ERA_2_COMMENTARY } from './commentaryEra2';
import { ERA_3_COMMENTARY } from './commentaryEra3';
import { ERA_4_COMMENTARY } from './commentaryEra4';

export type { CommentarySection, CounterArgumentsData, ThinkerCommentary };

/**
 * Complete, standardized scholarly commentary and historical/modern counter-arguments
 * for all 50 philosophers across the 4 epochs of human thought.
 */
export const ALL_PHILOSOPHER_COMMENTARY: Record<string, ThinkerCommentary> = {
  ...ERA_1_COMMENTARY,
  ...ERA_2_COMMENTARY,
  ...ERA_3_COMMENTARY,
  ...ERA_4_COMMENTARY,
};

/**
 * Returns structured, 4-thematic-section commentary for any chapter.
 * Falls back to parsing original markdown if the ID is missing.
 */
export function getCommentarySections(chapter: Chapter): CommentarySection[] {
  if (!chapter) return [];

  const found = ALL_PHILOSOPHER_COMMENTARY[chapter.id];
  if (found && found.sections && found.sections.length > 0) {
    return found.sections;
  }

  // Fallback: parse existing markdown if present
  const cleanedText = (chapter.scholarlyAnalysis || '')
    .replace(/^Scholarly Commentary & Argument Reconstruction[:\s-]*/i, '')
    .trim();

  if (cleanedText.includes('### ')) {
    const rawSections = cleanedText.split(/(?=###\s+)/g);
    return rawSections.map(sec => {
      const match = sec.match(/^###\s+([^\n]+)\n+([\s\S]*)$/);
      if (match) {
        const title = match[1].trim().replace(/^[0-9IVX]+\.\s*/, '');
        const paragraphs = match[2].trim().split(/\n\s*\n/).filter(p => p.trim().length > 0);
        return {
          title,
          bullets: paragraphs
        };
      }
      return {
        title: 'Core Dialectic',
        bullets: [sec.trim()]
      };
    }).filter(s => s.bullets.length > 0);
  }

  return [
    {
      title: '1. Metaphysical & Epistemological Framework',
      bullets: [cleanedText || 'Essential dialectical foundations and philosophical framework.']
    }
  ];
}

/**
 * Returns structured historical vs modern counter-arguments for any chapter.
 */
export function getCounterArguments(chapter: Chapter): CounterArgumentsData {
  if (!chapter) {
    return { historical: [], modern: [] };
  }

  const found = ALL_PHILOSOPHER_COMMENTARY[chapter.id];
  if (found && found.counterArguments) {
    return found.counterArguments;
  }

  // Fallback: split by then/now if possible or return raw
  const raw = chapter.counterArguments || '';
  if (raw.toLowerCase().includes('today') || raw.toLowerCase().includes('modern')) {
    const parts = raw.split(/(?:today|modernity|contemporary)/i);
    return {
      historical: [parts[0]?.trim() || raw],
      modern: [parts[1]?.trim() || 'Modern philosophical, social, and empirical evaluations.']
    };
  }

  return {
    historical: [raw],
    modern: ['Modern democratic, scientific, and existential perspectives continue to challenge and refine these premises.']
  };
}
