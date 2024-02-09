/**
 * Formats the time unit based on the provided value, unit, and suffixes.
 *
 * @param {number} value - The numerical value of the time unit.
 * @param {string} unit - The unit of time (e.g., "minute", "hour", "day").
 * @param {string[]} suffixes - An array of suffixes for different numerical endings.
 * @param {string} [ending="назад"] - The default ending for the formatted time unit.
 * @returns {string} The formatted time unit.
 */
function formatTimeUnit(
  value: number,
  unit: string,
  suffixes: string[],
  ending = "назад"
) {
  const lastDigit = value % 10;

  if (lastDigit === 1) {
    return `${value} ${unit}${suffixes[0]} ${ending}`;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${value} ${unit}${suffixes[1]} ${ending}`;
  }

  return `${value} ${unit}${suffixes[2]} ${ending}`;
}

/**
 * Formats the given number of seconds into minutes.
 *
 * @param {number} seconds - The number of seconds.
 * @returns {string} The formatted time in minutes.
 */
export function formatMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return formatTimeUnit(minutes, "минут", ["у", "ы", ""]);
}

/**
 * Formats the given number of seconds into hours.
 *
 * @param {number} seconds - The number of seconds.
 * @returns {string} The formatted time in hours.
 */
export function formatHours(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  return formatTimeUnit(hours, "час", ["", "а", "ов"]);
}

/**
 * Formats the given number of seconds into days.
 *
 * @param {number} seconds - The number of seconds.
 * @returns {string} The formatted time in days.
 */
export function formatDays(seconds: number) {
  const days = Math.floor(seconds / 86400);
  return formatTimeUnit(days, "д", ["ень", "ня", "ней"]);
}

/**
 * Formats the time since publication based on the provided seconds.
 *
 * @param {string} seconds - The time in seconds since publication.
 * @returns {string} The formatted time since publication.
 */
export function formatTimeSincePublication(seconds: string) {
  const now = new Date();
  const publicationDate = new Date(parseInt(seconds, 10) * 1000);

  const diffMilliseconds = now.getTime() - publicationDate.getTime();
  const diffSeconds = Math.floor(diffMilliseconds / 1000);

  if (diffSeconds < 60) {
    return "только что";
  }
  if (diffSeconds < 3600) {
    return formatMinutes(diffSeconds);
  }
  if (diffSeconds < 86400) {
    return formatHours(diffSeconds);
  }
  return formatDays(diffSeconds);
}

/**
 * Generates a slug from the provided title.
 *
 * @param {string} title - The title to generate a slug from.
 * @returns {string} The generated slug.
 */
export const generateSlug = (title: string) => {
  const translitMap: { [key: string]: string } = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "j",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shh",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya",
    " ": "-",
  };

  return title
    .toLowerCase()
    .replace(/[а-яё]/g, (char) => translitMap[char] || char)
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Removes HTML entities from the provided text.
 *
 * @param {string} text - The text containing HTML entities.
 * @returns {string} The text with HTML entities removed.
 */
export const removeHtmlEntities = (text: string) => {
  if (!text || text.trim() === "") {
    return text;
  }
  return text.replace(/&#34;/g, '"');
};
