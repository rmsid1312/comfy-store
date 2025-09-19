import { Skeleton } from "./ui/skeleton";

export default function Loading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-12 gap-4">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 mx-auto w-[250px]" />
              <Skeleton className="h-4 mx-auto w-[250px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
