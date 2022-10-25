
import {
  FASTBaseProgress,
  progressTemplate,
} from '@microsoft/fast-foundation';
import { FASTElementDefinition } from '@microsoft/fast-element';

export class TriProgress extends FASTBaseProgress {
}

export const triProgress = TriProgress.compose<FASTElementDefinition>({
  template: progressTemplate()
});