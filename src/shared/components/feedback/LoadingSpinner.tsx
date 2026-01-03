import { Spinner } from "@/shared/components/feedback/spinner";

function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex items-center gap-6">
        <Spinner className="size-4" />
        <Spinner className="size-5" />
        <Spinner className="size-7" />
        <Spinner className="size-9" />
      </div>
    </div>
  );
}

export default LoadingSpinner;
