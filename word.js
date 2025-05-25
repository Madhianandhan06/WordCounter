  const textInput = document.getElementById("textInput");
  const wordCount = document.getElementById("wordCount");
  const charCount = document.getElementById("charCount");

  textInput.addEventListener("input", () => {
    let text = textInput.value.trim();
    let words = text === "" ? 0 : text.split(/\s+/).length;
    let chars = text.length;

    wordCount.textContent = words;
    charCount.textContent = chars;
  });
