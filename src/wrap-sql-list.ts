import { closeMainWindow } from "@raycast/api";
import { Clipboard } from "@raycast/api";

function containsOnlyDigits(str: string): boolean {
  return /^\d+$/.test(str);
}

export default async function Command() {
  const text: string | undefined = await Clipboard.readText();

  if (text) {
    const wrappedText = text
      .trim()
      .split("\n")
      .map((l) => {
        if (!containsOnlyDigits(l.trim())) {
          return l.trim();
        } else {
          return "'" + l.trim() + "'";
        }
      })
      .join(",\n");

    await Clipboard.copy(wrappedText);
  }
  await closeMainWindow({ clearRootSearch: true });
}
