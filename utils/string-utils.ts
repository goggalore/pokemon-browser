// You can capitalize with CSS, but since the hyphens are bad for readability anyway,
// these functions are invoked to handle the formatting all in one go

// Removes hyphens and capitalizes words in a sentence.
export default function formatTitle(string: string) {
  return capitalizeWords(replaceHyphensWithSpace(string))
}

// Capitalizes the first character of a string.
export function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1)
}

// Capitalizes each separate word in a spring, delimited  by whitespace (\s).
export function capitalizeWords(string: string): string {
  const words = string.split(/\s/)
  const wordsCapitalized = words.map(capitalize)

  return wordsCapitalized.join(' ')
}

// Removes all '-' characters from a string and replaces them with a space.
// It only considers the literal character, not all forms of hyphens.
export function replaceHyphensWithSpace(string: string): string {
  return string.replace('-', ' ')
}