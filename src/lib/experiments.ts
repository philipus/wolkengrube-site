import type { CollectionEntry } from "astro:content";

export type Experiment = CollectionEntry<"experiments">;
export type ExperimentLog = CollectionEntry<"experimentLogs">;

export function byNewestExperiment(a: Experiment, b: Experiment) {
  return b.data.startedAt.getTime() - a.data.startedAt.getTime();
}

export function byNewestLog(a: ExperimentLog, b: ExperimentLog) {
  return b.data.date.getTime() - a.data.date.getTime();
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

export function getStatusLabel(status: Experiment["data"]["status"]) {
  return status.charAt(0).toUpperCase() + status.slice(1);
}
