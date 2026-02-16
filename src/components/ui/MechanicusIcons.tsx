// Adeptus Mechanicus themed SVG icons
// All icons use currentColor for theming, 32x32 viewBox default

interface IconProps {
  className?: string;
}

// Cog Mechanicum — the skull-and-cog, central symbol of the Adeptus Mechanicus
export function CogMechanicum({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer cog teeth */}
      <path d="M14.5 2h3l.5 3.2a11 11 0 012.6 1.1l2.7-1.8 2.1 2.1-1.8 2.7a11 11 0 011.1 2.6l3.2.5v3l-3.2.5a11 11 0 01-1.1 2.6l1.8 2.7-2.1 2.1-2.7-1.8a11 11 0 01-2.6 1.1l-.5 3.2h-3l-.5-3.2a11 11 0 01-2.6-1.1l-2.7 1.8-2.1-2.1 1.8-2.7a11 11 0 01-1.1-2.6L4.1 17v-3l3.2-.5a11 11 0 011.1-2.6L6.6 8.2l2.1-2.1 2.7 1.8a11 11 0 012.6-1.1L14.5 2z" stroke="currentColor" strokeWidth="1.2" />
      {/* Inner ring */}
      <circle cx="16" cy="15.5" r="7" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Skull - cranium */}
      <path d="M12 12.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 1.5-.7 2.8-1.8 3.5h-4.4c-1.1-.7-1.8-2-1.8-3.5z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
      {/* Eye sockets */}
      <circle cx="14.2" cy="12.5" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="17.8" cy="12.5" r="1.2" fill="currentColor" opacity="0.7" />
      {/* Nasal cavity */}
      <path d="M15.4 14.5L16 15.5l.6-1" stroke="currentColor" strokeWidth="0.8" />
      {/* Jaw / teeth */}
      <path d="M13.5 16h5v1.5c0 .8-.5 1.5-1.2 1.5h-2.6c-.7 0-1.2-.7-1.2-1.5V16z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.1" />
      <path d="M14.2 16v1.5M15.4 16v1.8M16.6 16v1.8M17.8 16v1.5" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

// Simple cog gear icon — used inline in dividers
export function CogIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 1h2l.3 1.8a5.5 5.5 0 011.5.6l1.5-1 1.4 1.4-1 1.5c.3.5.5 1 .6 1.5L15 7v2l-1.8.3a5.5 5.5 0 01-.6 1.5l1 1.5-1.4 1.4-1.5-1a5.5 5.5 0 01-1.5.6L9 15H7l-.3-1.8a5.5 5.5 0 01-1.5-.6l-1.5 1-1.4-1.4 1-1.5a5.5 5.5 0 01-.6-1.5L1 9V7l1.8-.3a5.5 5.5 0 01.6-1.5l-1-1.5L3.8 2.3l1.5 1a5.5 5.5 0 011.5-.6L7 1z" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="0.8" fill="currentColor" />
    </svg>
  );
}

// Servo-Skull — floating skull with mechanical eye and antenna
export function ServoSkull({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Antenna */}
      <path d="M16 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="3.5" r="1.2" stroke="currentColor" strokeWidth="0.8" />
      {/* Cranium */}
      <path d="M10 14c0-3.5 2.7-6.5 6-6.5s6 3 6 6.5c0 2-1 3.8-2.5 5H12.5C11 17.8 10 16 10 14z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
      {/* Mechanical eye (left) — lens */}
      <circle cx="13" cy="14" r="2" stroke="currentColor" strokeWidth="1" />
      <circle cx="13" cy="14" r="0.8" fill="currentColor" />
      {/* Bionic eye (right) — targeting reticle */}
      <circle cx="19" cy="14" r="2" stroke="currentColor" strokeWidth="1" />
      <path d="M17.5 14h3M19 12.5v3" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="19" cy="14" r="0.5" fill="currentColor" />
      {/* Jaw */}
      <path d="M12 19h8l-1 3.5c0 .5-.5 1-1.2 1h-3.6c-.7 0-1.2-.5-1.2-1L12 19z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
      {/* Teeth */}
      <path d="M13 19v2M14.5 19v2.5M16 19v3M17.5 19v2.5M19 19v2" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* Hover jets */}
      <path d="M11 23l-1 3M13.5 23.5l-.5 3M18.5 23.5l.5 3M21 23l1 3" stroke="currentColor" strokeWidth="0.6" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

// Aquila — the two-headed eagle of the Imperium
export function Aquila({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left wing */}
      <path d="M20 12L3 4c1.5 2 3 5 4 8l-5 2 6 1c.5 2 2 4 4 5l8-8z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      {/* Right wing */}
      <path d="M20 12l17-8c-1.5 2-3 5-4 8l5 2-6 1c-.5 2-2 4-4 5l-8-8z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      {/* Left head */}
      <path d="M14 8l-3-3-1 2 2 2" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
      <circle cx="12.5" cy="7" r="0.5" fill="currentColor" />
      {/* Right head */}
      <path d="M26 8l3-3 1 2-2 2" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round" />
      <circle cx="27.5" cy="7" r="0.5" fill="currentColor" />
      {/* Central skull */}
      <circle cx="20" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="19.2" cy="9.8" r="0.6" fill="currentColor" opacity="0.6" />
      <circle cx="20.8" cy="9.8" r="0.6" fill="currentColor" opacity="0.6" />
      <path d="M19.5 11l.5.5.5-.5" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

// Nav Icons — small 16x16 icons for navigation links

// Cog gear — Operations Board / Command Deck
export function NavCogIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 1h2l.3 1.8a5.5 5.5 0 011.5.6l1.5-1 1.4 1.4-1 1.5c.3.5.5 1 .6 1.5L15 7v2l-1.8.3a5.5 5.5 0 01-.6 1.5l1 1.5-1.4 1.4-1.5-1a5.5 5.5 0 01-1.5.6L9 15H7l-.3-1.8a5.5 5.5 0 01-1.5-.6l-1.5 1-1.4-1.4 1-1.5a5.5 5.5 0 01-.6-1.5L1 9V7l1.8-.3a5.5 5.5 0 01.6-1.5l-1-1.5L3.8 2.3l1.5 1a5.5 5.5 0 011.5-.6L7 1z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// Vox-caster — broadcast antenna for Vox Logs (blog)
export function NavVoxIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Antenna mast */}
      <path d="M8 5v9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Antenna tip */}
      <circle cx="8" cy="4" r="1.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="4" r="0.5" fill="currentColor" />
      {/* Signal waves */}
      <path d="M4.5 6.5a5 5 0 017 0" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M3 5a7 7 0 0110 0" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Base */}
      <path d="M5.5 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Data-scroll — parchment/scroll for GTM Playbook
export function NavScrollIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Scroll body */}
      <path d="M4 3h8c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1V4c0-.5.5-1 1-1z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
      {/* Top roll */}
      <path d="M3 3.5c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5" stroke="currentColor" strokeWidth="1" />
      {/* Bottom roll */}
      <path d="M3 12.5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5" stroke="currentColor" strokeWidth="1" />
      {/* Text lines */}
      <path d="M5.5 5.5h5M5.5 7.5h4M5.5 9.5h5M5.5 11.5h3" stroke="currentColor" strokeWidth="0.6" opacity="0.5" strokeLinecap="round" />
      {/* Seal */}
      <circle cx="10.5" cy="11.5" r="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// Crossed swords + anvil — Arsenal / Forge
export function NavForgeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Anvil base */}
      <path d="M3 12h10l1 2H2l1-2z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      {/* Anvil body */}
      <path d="M4.5 10h7c.5 0 1 .5 1 1v1h-9v-1c0-.5.5-1 1-1z" stroke="currentColor" strokeWidth="1" />
      {/* Hammer */}
      <path d="M8 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="6" y="1" width="4" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

// Aquila badge — Service Record / honor badge
export function NavAquilaIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shield shape */}
      <path d="M8 1.5l5.5 2v4c0 3-2 5.5-5.5 7-3.5-1.5-5.5-4-5.5-7v-4l5.5-2z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
      {/* Mini aquila wings */}
      <path d="M8 7L4 5l1 2.5-1 .5 2 .5L8 7z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      <path d="M8 7l4-2-1 2.5 1 .5-2 .5L8 7z" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.1" />
      {/* Central skull dot */}
      <circle cx="8" cy="7" r="1" fill="currentColor" opacity="0.4" />
      {/* Star below */}
      <path d="M8 10l.7 1.5 1.6.2-1.2 1.1.3 1.6L8 13.5l-1.4.8.3-1.6-1.2-1.1 1.6-.2L8 10z" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

// Omnissiah wrench-cog — Field Manuals
export function NavOmniIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cog (background) */}
      <path d="M6.5 2h3l.2 1.2a4 4 0 011 .4l1-.7 1 1-.7 1a4 4 0 01.4 1l1.2.2v1.5H13" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <circle cx="8" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Wrench */}
      <path d="M4 12l5.5-5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Wrench head */}
      <path d="M10 6a2.5 2.5 0 00-2 1l1.5 1.5a2.5 2.5 0 001.5-2L10 6z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      {/* Wrench handle end */}
      <path d="M3 13l1.5-1.5L3 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
