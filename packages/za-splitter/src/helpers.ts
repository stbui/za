export type SplitType = 'horizontal' | 'vertical';

export const getRefSize = ({
    ref,
    split,
}: {
    split: SplitType;
    ref: React.RefObject<HTMLDivElement>;
}) => {
    const sizeAttr = split === 'vertical' ? 'width' : 'height';
    return ref.current?.getBoundingClientRect()[sizeAttr] ?? 0;
};
