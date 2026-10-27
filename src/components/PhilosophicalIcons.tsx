/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export type IconType = 'codex' | 'temple' | 'owl' | 'astrolabe';

export interface IconOption {
  id: IconType;
  name: string;
  subtitle: string;
  description: string;
}

export const ICON_OPTIONS: IconOption[] = [
  {
    id: 'codex',
    name: 'Open Codex & Wisdom Flame',
    subtitle: 'Illuminated Manuscripts & Inquiry',
    description: 'An open ancient codex with the flame of philosophical illumination rising from the spine.'
  },
  {
    id: 'temple',
    name: 'Temple of Reason',
    subtitle: 'Classical Architecture of Thought',
    description: 'Classical Greek pediment supported by three columns, symbolizing logic, ethics, and physics.'
  },
  {
    id: 'owl',
    name: 'Owl of Minerva',
    subtitle: 'Classical Emblem of Wisdom',
    description: 'The owl of philosophical contemplation perched upon a laurel branch of peace.'
  },
  {
    id: 'astrolabe',
    name: 'Celestial Astrolabe',
    subtitle: 'Global Navigation of Ideas',
    description: 'Concentric armillary rings framing the compass star of human discovery.'
  }
];

export function PhilosophicalIcon({ type, className = "w-6 h-6" }: { type: IconType; className?: string }) {
  switch (type) {
    case 'temple':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Triangular Pediment */}
          <path d="M2 8L12 2L22 8H2Z" fill="currentColor" fillOpacity="0.15" />
          {/* Frieze / Entablature line */}
          <line x1="2" y1="9" x2="22" y2="9" strokeWidth="1.75" />
          {/* Three Columns */}
          <line x1="6" y1="9" x2="6" y2="19" strokeWidth="2" />
          <line x1="12" y1="9" x2="12" y2="19" strokeWidth="2" />
          <line x1="18" y1="9" x2="18" y2="19" strokeWidth="2" />
          {/* Column capitals & bases */}
          <line x1="4.5" y1="9.5" x2="7.5" y2="9.5" strokeWidth="1.5" />
          <line x1="10.5" y1="9.5" x2="13.5" y2="9.5" strokeWidth="1.5" />
          <line x1="16.5" y1="9.5" x2="19.5" y2="9.5" strokeWidth="1.5" />
          {/* Stylobate / Steps */}
          <line x1="3" y1="19" x2="21" y2="19" strokeWidth="1.75" />
          <line x1="1" y1="21" x2="23" y2="21" strokeWidth="2" />
          {/* Center medallion */}
          <circle cx="12" cy="5.8" r="1.2" fill="currentColor" />
        </svg>
      );

    case 'owl':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Owl Body & Crown */}
          <path d="M12 3C8 3 6 6 6 10C6 14 8 18 12 19C16 18 18 14 18 10C18 6 16 3 12 3Z" fill="currentColor" fillOpacity="0.15" />
          {/* Owl Ear Tufts */}
          <path d="M6 5L9 8" strokeWidth="1.75" />
          <path d="M18 5L15 8" strokeWidth="1.75" />
          {/* Big Wise Eyes */}
          <circle cx="9" cy="9.5" r="2.2" strokeWidth="1.5" />
          <circle cx="9" cy="9.5" r="0.8" fill="currentColor" />
          <circle cx="15" cy="9.5" r="2.2" strokeWidth="1.5" />
          <circle cx="15" cy="9.5" r="0.8" fill="currentColor" />
          {/* Beak */}
          <path d="M12 11L11 13H13L12 11Z" fill="currentColor" />
          {/* Feather marks on breast */}
          <path d="M10 15C11 16 13 16 14 15" strokeWidth="1.25" />
          {/* Laurel branch perch */}
          <path d="M3 21C7 20 17 20 21 21" strokeWidth="1.75" />
          <path d="M6 20.5C5 18.5 7 17.5 8 19" strokeWidth="1.25" />
          <path d="M16 19C17 17.5 19 18.5 18 20.5" strokeWidth="1.25" />
        </svg>
      );

    case 'astrolabe':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Outer Ring & Suspension Loop */}
          <circle cx="12" cy="13" r="8.5" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
          <circle cx="12" cy="3" r="1.5" strokeWidth="1.5" />
          <line x1="12" y1="4.5" x2="12" y2="6.5" strokeWidth="1.75" />
          {/* Inner Armillary Rings */}
          <ellipse cx="12" cy="13" rx="8.5" ry="4" strokeWidth="1.25" />
          <ellipse cx="12" cy="13" rx="4" ry="8.5" strokeWidth="1.25" />
          {/* Central Pivot & Celestial Axis */}
          <line x1="12" y1="6.5" x2="12" y2="19.5" strokeWidth="1.5" strokeDasharray="1 2" />
          <line x1="5.5" y1="13" x2="18.5" y2="13" strokeWidth="1.5" strokeDasharray="1 2" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          {/* North Star indicator */}
          <path d="M12 9.5L12.5 11L14 11.5L12.5 12L12 13.5L11.5 12L10 11.5L11.5 11L12 9.5Z" fill="currentColor" />
        </svg>
      );

    case 'codex':
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {/* Open Book Left & Right Leaves */}
          <path d="M12 19C9 17 4 17 2 19V6C4 4 9 4 12 6C15 4 20 4 22 6V19C20 17 15 17 12 19Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M12 6V19" strokeWidth="1.75" />
          {/* Left page text lines */}
          <line x1="5" y1="9" x2="9" y2="9" strokeWidth="1.25" opacity="0.6" />
          <line x1="5" y1="12" x2="9" y2="12" strokeWidth="1.25" opacity="0.6" />
          <line x1="5" y1="15" x2="8" y2="15" strokeWidth="1.25" opacity="0.6" />
          {/* Right page text lines */}
          <line x1="15" y1="9" x2="19" y2="9" strokeWidth="1.25" opacity="0.6" />
          <line x1="15" y1="12" x2="19" y2="12" strokeWidth="1.25" opacity="0.6" />
          <line x1="16" y1="15" x2="19" y2="15" strokeWidth="1.25" opacity="0.6" />
          {/* Wisdom Flame rising from spine */}
          <path d="M12 1.5C12.8 2.5 13.5 3.5 13 4.5C12.5 5.5 11.5 5.8 12 7C12.5 5.8 13.5 5.5 13 4.5C12.5 3.5 12 2.5 12 1.5Z" fill="currentColor" />
          <circle cx="12" cy="4.2" r="0.6" fill="#C5A059" />
        </svg>
      );
  }
}
