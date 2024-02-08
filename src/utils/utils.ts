export function formatMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) {
    return "1 минуту назад";
  }
  if (minutes > 1 && minutes < 5) {
    return `${minutes} минуты назад`;
  }
  return `${minutes} минут назад`;
}

export function formatHours(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  if (hours === 1) {
    return "1 час назад";
  }
  if (hours > 1 && hours < 5) {
    return `${hours} часа назад`;
  }
  return `${hours} часов назад`;
}

export function formatDays(seconds: number) {
  const days = Math.floor(seconds / 86400);
  if (days === 1) {
    return "1 день назад";
  }
  if (days > 1 && days < 5) {
    return `${days} дня назад`;
  }
  return `${days} дней назад`;
}

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

export const removeHtmlEntities = (text: string) => {
  return text.replace(/&#34;/g, '"');
};
