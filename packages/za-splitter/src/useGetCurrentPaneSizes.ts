import { useCallback } from 'react';
import { getRefSize } from './helpers';

export const useGetCurrentPaneSizes = ({
    childPanes,
    split,
}: {
    childPanes: Pick<ChildPane, 'ref'>[];
    split: SplitType;
}) =>
    useCallback(
        () => childPanes.map(({ ref }): number => getRefSize({ split, ref })),
        [childPanes, split]
    );
