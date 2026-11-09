// src/lib/code.ts
// Tiny token model for the Engineer view's code listings. Each line is a list of
// tokens; CodeFile.astro renders them with the .tok-* classes from global.css.

export interface Tok {
  c?: "tok-key" | "tok-str" | "tok-num" | "tok-ok" | "tok-com" | "tok-p";
  t: string;
  href?: string;
}
export type Line = Tok[];

export const key = (t: string): Tok => ({ c: "tok-key", t });
export const str = (t: string, href?: string): Tok => ({ c: "tok-str", t: `"${t}"`, href });
export const num = (t: string): Tok => ({ c: "tok-num", t });
export const com = (t: string): Tok => ({ c: "tok-com", t });
export const p = (t: string): Tok => ({ c: "tok-p", t });
export const txt = (t: string): Tok => ({ t });

type JsonValue = string | number | boolean | readonly string[];

/** A flat JSON object (strings, numbers, booleans, string arrays) as lines. */
export function jsonLines(obj: Record<string, JsonValue>, links: Record<string, string> = {}): Line[] {
  const entries = Object.entries(obj);
  const lines: Line[] = [[p("{")]];
  entries.forEach(([k, v], i) => {
    const comma = i < entries.length - 1 ? [p(",")] : [];
    const head: Tok[] = [txt("  "), key(`"${k}"`), p(": ")];
    if (Array.isArray(v)) {
      const items = (v as readonly string[]).flatMap((s, j) => (j ? [p(", "), str(s)] : [str(s)]));
      lines.push([...head, p("["), ...items, p("]"), ...comma]);
    } else if (typeof v === "string") {
      lines.push([...head, str(v, links[k]), ...comma]);
    } else {
      lines.push([...head, num(String(v)), ...comma]);
    }
  });
  lines.push([p("}")]);
  return lines;
}
