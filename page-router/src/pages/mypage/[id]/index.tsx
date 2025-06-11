"use client";
import { useParams } from "next/navigation";

export default function PageDetails() {
  const params = useParams();
  console.log(params);
  const id = params?.id;

  return (
    <>
      <div>Page Details</div>
      <pre>{JSON.stringify(id, null, 2)}</pre>
    </>
  );
}
