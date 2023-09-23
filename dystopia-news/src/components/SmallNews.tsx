import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export default function SmallNews({ children }: PropsWithChildren) {
    return <div className={clsx("flex flex-wrap gap-5")}>{children}</div>
}
