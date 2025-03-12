export function Capitalize(str: string | undefined) {
  const arrOfWords = str?.split(" ");
  const arrOfWordsCased: string[] = [];

  if (arrOfWords) {
    for (let i = 0; i < arrOfWords.length; i++) {
      const word = arrOfWords[i];
      if (arrOfWordsCased)
        arrOfWordsCased.push(
          word[0]?.toUpperCase() + word.slice(1)?.toLowerCase()
        );
    }
  }

  return arrOfWordsCased.join(" ");
}
