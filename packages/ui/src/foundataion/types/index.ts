import { SerializedStyles } from '@emotion/react';

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type SpacingUnit = 'string' | number;

export interface SpacingArea {
  top: SpacingUnit;
  right: SpacingUnit;
  bottom: SpacingUnit;
  left: SpacingUnit;
}

/** Element 의 Spacing 을 설정합니다 */
export interface SpacingCreator {
  /** css shorthand property 를 이용하여 spacing 을 설정합니다 */
  all(spacing: SpacingUnit | Partial<Record<Breakpoint, SpacingUnit>>): SerializedStyles;
  /** left, right spacing 을 설정합니다 */
  horizontal(spacing: SpacingUnit | Partial<Record<Breakpoint, SpacingUnit>>): SerializedStyles;
  /** top, bottom spacing 을 설정합니다 */
  vertical(spacing: SpacingUnit | Partial<Record<Breakpoint, SpacingUnit>>): SerializedStyles;
  /** 특정 위치의 spacing 을 설정합니다 */
  only(spacing: Partial<SpacingArea> | Partial<Record<Breakpoint, Partial<SpacingArea>>>): SerializedStyles;
}
