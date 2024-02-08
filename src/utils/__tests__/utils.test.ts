import {
  formatDays,
  formatHours,
  formatMinutes,
  formatTimeSincePublication,
  generateSlug,
  removeHtmlEntities,
} from "../utils";

describe("formatTimeSincePublication", () => {
  it("returns 'только что' for time less than 60 seconds", () => {
    const result = formatTimeSincePublication(String(Date.now() / 1000 - 30));
    expect(result).toEqual("только что");
  });

  it("returns formatted minutes for time less than 1 hour", () => {
    const seconds = 1500;
    const result = formatTimeSincePublication(
      String(Date.now() / 1000 - seconds)
    );
    expect(result).toEqual("25 минут назад");
  });
});

describe("generateSlug", () => {
  it("generates slug without special characters", () => {
    const title = "This is a test title";
    const result = generateSlug(title);
    expect(result).toEqual("this-is-a-test-title");
  });

  it("replaces cyrillic characters with latin characters", () => {
    const title = "Пример заголовка";
    const result = generateSlug(title);
    expect(result).toEqual("primer-zagolovka");
  });
});

describe("replaceSymbols", () => {
  it("replace all symbols and give quotes", () => {
    const title = "This is a &#34;test&#34; title";
    const result = removeHtmlEntities(title);
    expect(result).toEqual('This is a "test" title');
  });
});

describe("formatMinutes", () => {
  it("returns '1 минуту назад' when input is 60 seconds", () => {
    const result = formatMinutes(60);
    expect(result).toEqual("1 минуту назад");
  });

  it("returns '2 минуты назад' when input is 120 seconds", () => {
    const result = formatMinutes(120);
    expect(result).toEqual("2 минуты назад");
  });
});

describe("formatHours", () => {
  it("returns '1 час назад' when input is 3600 seconds", () => {
    const result = formatHours(3600);
    expect(result).toEqual("1 час назад");
  });

  it("returns '2 часа назад' when input is 7200 seconds", () => {
    const result = formatHours(7200);
    expect(result).toEqual("2 часа назад");
  });
});

describe("formatDays", () => {
  it("returns '1 день назад' when input is 86400 seconds", () => {
    const result = formatDays(86400);
    expect(result).toEqual("1 день назад");
  });

  it("returns '2 дня назад' when input is 172800 seconds", () => {
    const result = formatDays(172800);
    expect(result).toEqual("2 дня назад");
  });
});
