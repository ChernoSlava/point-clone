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
  it("returns formatted hours for time less than 1 day", () => {
    const seconds = 10800; // 3 hours
    const result = formatTimeSincePublication(
      String(Date.now() / 1000 - seconds)
    );
    expect(result).toEqual("3 часа назад");
  });
  it("returns formatted days for time more than 1 day", () => {
    const seconds = 345600; // 4 days
    const result = formatTimeSincePublication(
      String(Date.now() / 1000 - seconds)
    );
    expect(result).toEqual("4 дня назад");
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
  it("should return empty string", () => {
    const result = removeHtmlEntities("");
    expect(result).toBe("");
  });
});

describe("formate Date", () => {
  describe("formatMinutes", () => {
    it("returns '1 минуту назад' when input is 60 seconds", () => {
      const result = formatMinutes(60);
      expect(result).toEqual("1 минуту назад");
    });

    it("returns '2 минуты назад' when input is 120 seconds", () => {
      const result = formatMinutes(120);
      expect(result).toEqual("2 минуты назад");
    });
    it("returns '6 минут назад' when input is 360 seconds", () => {
      const result = formatMinutes(360);
      expect(result).toEqual("6 минут назад");
    });
    it("returns '55 минут назад' when input is 3300 seconds", () => {
      const result = formatMinutes(3300);
      expect(result).toEqual("55 минут назад");
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
    it("returns '8 часов назад' when input is 28800 seconds", () => {
      const result = formatHours(28800);
      expect(result).toEqual("8 часов назад");
    });
    it("returns '23 часа назад' when input is 82800 seconds", () => {
      const result = formatHours(82800);
      expect(result).toEqual("23 часа назад");
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
    it("returns '6 дней назад' when input is 518400 seconds", () => {
      const result = formatDays(518400);
      expect(result).toEqual("6 дней назад");
    });
    it("returns '33 дня назад' when input is 2851200 seconds", () => {
      const result = formatDays(2851200);
      expect(result).toEqual("33 дня назад");
    });
  });
});
