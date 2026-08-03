import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  type Mock,
} from "vitest";

const OLD_ENV = process.env;
const finnhubActionsPath = "../../../lib/actions/finnhub.actions";
let mockFetch: Mock;

beforeEach(() => {
  vi.resetModules();
  mockFetch = vi.fn();
  global.fetch = mockFetch as unknown as typeof fetch;
  process.env = { ...OLD_ENV };
});

afterEach(() => {
  process.env = OLD_ENV;
});

describe("searchStocks", () => {
  it("returns empty array when api key is missing", async () => {
    delete process.env.FINNHUB_API_KEY;
    delete process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

    const { searchStocks } =await import(finnhubActionsPath);
    const result = await searchStocks();

    expect(result).toEqual([]);
  });

  it("returns matching stocks when searching by query", async () => {
    process.env.FINNHUB_API_KEY = "test-key";

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        count: 1,
        result: [
          {
            symbol: "tsla",
            description: "Tesla Inc",
            displaySymbol: "TSLA",
            type: "Common Stock",
          },
        ],
      }),
    });

    const { searchStocks } =await import(finnhubActionsPath);
    const result = await searchStocks("tesla");

    expect(result[0].symbol).toBe("TSLA");
    expect(result[0].name).toBe("Tesla Inc");
  });

  it("does not return more than 15 stocks", async () => {
    process.env.FINNHUB_API_KEY = "test-key";

    const manyResults = Array.from({ length: 20 }, (_, i) => ({
      symbol: `SYM${i}`,
      description: `Company ${i}`,
      type: "Common Stock",
    }));

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ count: 20, result: manyResults }),
    });

    const { searchStocks } =await import(finnhubActionsPath);
    const result = await searchStocks("company");

    expect(result.length).toBeLessThanOrEqual(15);
  });

  it("returns empty array when fetch fails", async () => {
    process.env.FINNHUB_API_KEY = "test-key";
    mockFetch.mockRejectedValue(new Error("network error"));

    const { searchStocks } =await import(finnhubActionsPath);
    const result = await searchStocks();

    expect(result).toEqual([]);
  });
});

describe("getNews", () => {
  it("throws an error when api key is missing", async () => {
    delete process.env.FINNHUB_API_KEY;
    delete process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

    const { getNews } = await import(finnhubActionsPath);

    await expect(getNews()).rejects.toThrow();
  });
});