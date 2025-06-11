"use client";
import { useParams } from "react-router-dom";

export default function PageDetails() {
  const { id } = useParams<{ id: string }>();

  return <pre>{JSON.stringify(id, null, 2)}</pre>;
}
