// src/lib/seed.ts
import { Company, Post } from "@/types";

export const countries = [
  { code: "US", name: "United States" },
  { code: "DE", name: "Germany" },
  { code: "KR", name: "Korea" },
];

export const companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corp",
    country: "US",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 120 },
      { yearMonth: "2024-02", source: "gasoline", emissions: 110 },
      { yearMonth: "2024-03", source: "gasoline", emissions: 95 },
    ],
  },
  {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      { yearMonth: "2024-01", source: "diesel", emissions: 80 },
      { yearMonth: "2024-02", source: "diesel", emissions: 105 },
      { yearMonth: "2024-03", source: "diesel", emissions: 120 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "Sustainability Report",
    resourceUid: "c1",
    dateTime: "2024-02",
    content: "Quarterly CO2 update",
  },
];
