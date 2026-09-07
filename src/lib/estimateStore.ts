import { mkdirSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";

export type EstimateStatus = "문의접수" | "상담중" | "예약완료";
export const estimateStatuses: EstimateStatus[] = ["문의접수", "상담중", "예약완료"];

export type EstimateInquiry = {
  id: string;
  name: string;
  phone: string;
  fromPlace: string;
  toPlace: string;
  rideDate: string;
  peopleCount: number | null;
  vehicleType: string;
  memo: string;
  status: EstimateStatus;
  createdAt: string;
};

const dbPath = path.join(process.cwd(), "data", "misobus.sqlite");

function db() {
  mkdirSync(path.dirname(dbPath), { recursive: true });
  const database = new DatabaseSync(dbPath);
  database.exec(`
    CREATE TABLE IF NOT EXISTS estimates (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      from_place TEXT NOT NULL,
      to_place TEXT NOT NULL,
      ride_date TEXT NOT NULL,
      people_count INTEGER,
      vehicle_type TEXT NOT NULL,
      memo TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL
    )
  `);
  return database;
}

function toInquiry(row: Record<string, unknown>): EstimateInquiry {
  return {
    id: String(row.id),
    name: String(row.name),
    phone: String(row.phone),
    fromPlace: String(row.from_place),
    toPlace: String(row.to_place),
    rideDate: String(row.ride_date),
    peopleCount: row.people_count === null ? null : Number(row.people_count),
    vehicleType: String(row.vehicle_type),
    memo: String(row.memo),
    status: row.status as EstimateStatus,
    createdAt: String(row.created_at),
  };
}

export async function createEstimateInquiry(input: Omit<EstimateInquiry, "id" | "status" | "createdAt">) {
  const inquiry: EstimateInquiry = {
    ...input,
    id: randomUUID(),
    status: "문의접수",
    createdAt: new Date().toISOString(),
  };

  const database = db();
  database.prepare(`
    INSERT INTO estimates (
      id, name, phone, from_place, to_place, ride_date, people_count, vehicle_type, memo, status, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    inquiry.id,
    inquiry.name,
    inquiry.phone,
    inquiry.fromPlace,
    inquiry.toPlace,
    inquiry.rideDate,
    inquiry.peopleCount,
    inquiry.vehicleType,
    inquiry.memo,
    inquiry.status,
    inquiry.createdAt,
  );
  database.close();

  return inquiry;
}

export async function listEstimateInquiries() {
  const database = db();
  const rows = database.prepare("SELECT * FROM estimates ORDER BY created_at DESC").all();
  database.close();
  return rows.map(toInquiry);
}

export async function updateEstimateStatus(id: string, status: EstimateStatus) {
  if (!estimateStatuses.includes(status)) throw new Error("Invalid status");

  const database = db();
  database.prepare("UPDATE estimates SET status = ? WHERE id = ?").run(status, id);
  database.close();
}
