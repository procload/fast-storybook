
import {
  FASTBaseProgress,
  progressTemplate as template,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';

export class TriProgress extends FASTBaseProgress {
}

export const triProgress = TriProgress.compose<FoundationElementDefinition>({
  baseName: "tri-progress",
  template,
});