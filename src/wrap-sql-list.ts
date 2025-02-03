import { showHUD } from "@raycast/api";
import { Clipboard } from "@raycast/api";

export default async function Command() {
  const text: string | undefined = await Clipboard.readText();

  if (text) {
    const wrappedText = text
      .trim()
      .split("\n")
      .map((l) => "'" + l.trim() + "'")
      .join(",\n");

    await Clipboard.copy(wrappedText);
  }
  await showHUD("SQL List Wrapped");
}
