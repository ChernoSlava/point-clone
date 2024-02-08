import { formatTimeSincePublication, generateSlug } from "../utils";

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
