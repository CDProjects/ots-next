// src/types/aceternity-ui.d.ts
declare module 'aceternity-ui' {
    import { ReactNode } from 'react';
  
    export interface BackgroundBeamsProps {
      className?: string;
      children?: ReactNode;
      beams?: number;
      beamColor?: string;
    }
  
    export interface TextGenerateEffectProps {
      words: string;
      className?: string;
      children?: ReactNode;
    }
  
    export interface SparklesCoreProps {
      id: string;
      background: string;
      minSize: number;
      maxSize: number;
      particleDensity: number;
      className: string;
      particleColor: string;
      children?: ReactNode;
    }
  
    export function BackgroundBeams(props: BackgroundBeamsProps): JSX.Element;
    export function TextGenerateEffect(props: TextGenerateEffectProps): JSX.Element;
    export function SparklesCore(props: SparklesCoreProps): JSX.Element;
  }