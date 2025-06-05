function capitalizeWords(sentence) {
    if (!sentence) return "";
  
    return sentence
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  console.log(capitalizeWords("hello world"));
  console.log(capitalizeWords("hellO FUN World"));
  console.log(capitalizeWords("  hellO  FUN World"));
  console.log(capitalizeWords(" "));
  