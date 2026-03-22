export async function paraphraseText(text: string, style: string) {
  try {
    const response = await fetch("/api/paraphrase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error("Failed to paraphrase via backend.");
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Error paraphrasing text:", error);
    throw error;
  }
}
