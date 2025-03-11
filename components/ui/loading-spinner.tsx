import { cn } from '@/lib/utils';
import { LoaderCircleIcon } from 'lucide-react';

export const LoadingSpinner = ({ className, size = 24 }: { className?: string; size?: number }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <LoaderCircleIcon className={cn('animate-spin text-primary', className)} size={size} />
      <p className="text-sm text-muted-foreground">Loading Turkish Series...</p>
    </div>
  );
};
