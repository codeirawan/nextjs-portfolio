import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "visits.json");

export async function GET(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";

  const excludedIps =
    process.env.MY_IPS?.split(",").map((ip) => ip.trim()) || [];

  let visitsData = {
    totalViews: 0,
    viewsPerDay: {} as Record<string, number>,
    uniqueVisitors: {} as Record<string, string[]>,
  };

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(visitsData, null, 2));
  } else {
    const fileData = fs.readFileSync(filePath, "utf-8");
    visitsData = JSON.parse(fileData);
  }

  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  if (!excludedIps.includes(ip)) {
    visitsData.totalViews += 1;

    if (!visitsData.viewsPerDay[today]) {
      visitsData.viewsPerDay[today] = 0;
    }
    visitsData.viewsPerDay[today] += 1;

    if (!visitsData.uniqueVisitors[today]) {
      visitsData.uniqueVisitors[today] = [];
    }
    if (!visitsData.uniqueVisitors[today].includes(ip)) {
      visitsData.uniqueVisitors[today].push(ip);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(visitsData, null, 2));

  return NextResponse.json({
    totalViews: visitsData.totalViews,
    viewsPerDay: visitsData.viewsPerDay,
    uniqueVisitors: visitsData.uniqueVisitors,
    ip,
    excluded: excludedIps.includes(ip),
  });
}
