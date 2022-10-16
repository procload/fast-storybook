import { Progress } from '@microsoft/fast-components';
import {
  ProgressOptions,
  progressTemplate as template,
} from '@microsoft/fast-foundation';
import { progressStyles as styles } from './progress.styles';

/**
 * Progress base class
 * @public
 */
export class TriProgress extends Progress {}

export const triProgress = TriProgress.compose<ProgressOptions>({
  baseName: 'tri-progress',

  /**
   * Import and reuse the progress template
   */
  template,
  /**
   * Add our instance of styles
   */
  styles: styles,
  indeterminateIndicator1: `
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,
  indeterminateIndicator2: `
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `,
});
