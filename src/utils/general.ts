export function dateFormatter(date: Date, short: boolean = false) {
  return date.toLocaleDateString(undefined, {
    month: short ? "short" : "long",
    year: "numeric",
  });
}

// Source - https://stackoverflow.com/a/1026087
// Posted by Steve Harrison, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-14, License - CC BY-SA 4.0

export function capitalizeFirstLetter(text: string) {
  if (!text) {
    return text;
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}
