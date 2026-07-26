/**
 * A tiny UI kit — accessible, theme-aware building blocks used across screens.
 * Kept intentionally small and dependency-free.
 */
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useSpeak } from '../hooks/useSpeak';
import './kit.css';

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline' | 'danger';
}) {
  return <button className={`btn btn-${variant} ${className}`} {...props} />;
}

export function Card({
  children,
  className = '',
  as: As = 'div',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <As className={`card ${className}`} {...rest}>
      {children}
    </As>
  );
}

export function ProgressBar({
  value,
  label,
}: {
  value: number;
  label?: string;
}) {
  const pct = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

/** A Portuguese text chip with a speak button — the core reusable content view. */
export function PtLine({
  pt,
  fa,
  pronunciation,
  small,
}: {
  pt: string;
  fa?: string;
  pronunciation?: string;
  small?: boolean;
}) {
  const { speak, speaking } = useSpeak();
  return (
    <div className={`ptline ${small ? 'ptline-sm' : ''}`}>
      <div className="ptline-main">
        <span className="pt ptline-pt" lang="pt">
          {pt}
        </span>
        <button
          className="speak-btn"
          onClick={() => void speak(pt)}
          aria-label={`پخش صدای: ${pt}`}
          aria-pressed={speaking}
        >
          <SpeakerIcon />
        </button>
      </div>
      {pronunciation && <div className="ptline-pron">{pronunciation}</div>}
      {fa && <div className="ptline-fa">{fa}</div>}
    </div>
  );
}

export function SpeakerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M3 10v4a1 1 0 0 0 1 1h3l4 4a1 1 0 0 0 1.7-.7V5.7A1 1 0 0 0 11 5L7 9H4a1 1 0 0 0-1 1Z" />
      <path
        d="M16 8.5a4 4 0 0 1 0 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'primary' | 'warning' | 'success';
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <div className="disclaimer" role="note">
      <span aria-hidden="true">ℹ️</span> {children}
    </div>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return <div className="empty-state">{children}</div>;
}
