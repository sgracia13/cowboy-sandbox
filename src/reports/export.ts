import { Row } from "./summary";

export type Column = { key: string; label: string };

export function formatColumn1(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col1"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 1)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn2(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col2"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 2)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn3(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col3"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 3)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn4(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col4"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 4)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn5(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col5"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 5)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn6(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col6"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 6)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn7(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col7"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 7)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn8(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col8"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 8)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn9(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col9"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 9)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn10(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col10"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 10)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn11(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col11"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 11)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn12(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col12"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 12)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn13(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col13"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 13)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn14(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col14"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 14)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn15(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col15"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 15)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn16(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col16"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 16)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn17(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col17"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 17)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn18(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col18"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 18)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn19(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col19"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 19)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn20(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col20"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 20)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn21(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col21"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 21)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn22(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col22"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 22)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn23(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col23"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 23)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn24(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col24"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 24)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn25(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col25"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 25)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn26(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col26"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 26)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn27(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col27"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 27)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn28(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col28"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 28)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn29(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col29"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 29)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn30(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col30"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 30)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn31(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col31"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 31)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn32(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col32"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 32)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn33(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col33"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 33)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn34(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col34"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 34)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn35(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col35"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 35)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn36(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col36"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 36)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn37(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col37"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 37)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn38(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col38"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 38)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn39(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col39"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 39)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn40(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col40"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 40)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn41(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col41"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 41)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn42(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col42"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 42)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn43(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col43"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 43)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn44(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col44"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 44)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

export function formatColumn45(rows: Row[], sep = ","): string {
  const header = ["day", "count", "col45"].join(sep);
  const body = rows.map((r) => [r.day, String(r.count), String(r.count * 45)].join(sep));
  const out = [header, ...body];
  if (out.length === 1) return header;
  return out.join("\n");
}

