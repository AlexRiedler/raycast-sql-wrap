import { closeMainWindow } from "@raycast/api";
import { Clipboard } from "@raycast/api";

export default async function Command() {
  const text: string | undefined = await Clipboard.readText();

  if (text) {
    const wrappedText = text
      .trim()
      .split("\n")
      .map((l) => "'" + l.trim() + "'")
      .join(",\n");

    console.log(wrappedText);

    await Clipboard.copy(wrappedText);
  }
  await closeMainWindow({ clearRootSearch: true });
}
