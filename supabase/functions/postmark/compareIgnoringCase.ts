export const compareIgnoringCase = (
  a: string | null | undefined,
  b: string | null | undefined,
) => (a || "").toLowerCase() === (b || "").toLowerCase();
