"use client";
import { useSearchParams } from "next/navigation";

export default function PageDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <div>Page Details</div>
      <pre>{JSON.stringify(id, null, 2)}</pre>
    </>
  );
}
