import {
  AllTimeSinceTodayResponse,
  APIQuery,
  APIResponse,
  CurrentUserResponse,
  CustomTimeRange,
  DurationsResponse,
  HeartbeatsResponse,
  InsightsBestDayResponse,
  InsightsCategoriesResponse,
  InsightsDailyAverageResponse,
  InsightsDaysResponse,
  InsightsEditorsResponse,
  InsightsLanguagesResponse,
  InsightsMachinesResponse,
  InsightsOperatingSystemsResponse,
  InsightsProjectsResponse,
  InsightsWeekdaysResponse,
  ProjectsResponse,
  StatsResponse,
  SummariesParams,
  SummariesResponse,
} from './schema';

/**
 * Represents the WakaTime API client.
 */
export class WakaTime {
  private readonly BASE_URL = 'https://wakatime.com/api/v1';
  apiKey: string;

  /**
   * Creates an instance of the WakaTime API client.
   * @param apiKey The API key to authenticate requests.
   */
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Sets the API key to authenticate requests.
   * @param apiKey The API key to authenticate requests.
   */
  updateAPIKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Retrieves the request options for making API requests.
   * @param path The API path.
   * @param query The query parameters.
   * @returns The request options.
   * @throws An error if no API key is set.
   */
  private getApiOptions(path: string, query?: APIQuery): { url: string; headers: HeadersInit } {
    const queryString = query ? this.toURLQuery(query) : '';
    return {
      url: `${this.BASE_URL}${path}${queryString}`,
      headers: {
        Authorization: `Basic ${btoa(this.apiKey)}`,
        'Content-Type': 'application/json',
      },
    };
  }

  /**
   * Sends a GET request to the specified URL with the provided headers.
   * @param url The URL to send the request to.
   * @param headers The headers to include in the request.
   * @returns A promise that resolves to the JSON response.
   * @throws An error if the URL or headers are missing.
   */
  private async get (url: string, headers: HeadersInit): Promise<APIResponse> {
    if (!url || !headers) {
      throw new Error('Missing url or headers');
    }
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json() as Promise<APIResponse>;
  }

  /**
   * Converts a query object to a URL query string.
   *
   * returns an empty string if the query object is empty.
   *
   * @param query The query object.
   * @returns The URL query string.
   */
  private toURLQuery(query: APIQuery): string {
    const keys = Object.keys(query);
    if (keys.length === 0) return '';

    const queryString = keys
      .map((key) => {
        const value = query[key as keyof APIQuery];
        if (value === undefined) return '';
        return `${key}=${value}`;
      })
      .filter((value) => value !== '')
      .join('&');

    return `?${queryString}`;
  }

  /**
   * Formats a date object to a string in the format "YYYY-MM-DD".
   * @param date The date object to format.
   * @returns The formatted date string.
   */
  private getDateString(date: string | Date): string {
    if (date instanceof Date) {
      return this.formatDate(date);
    }
    return date;
  }

  /**
   * Formats a date object to a string in the format "YYYY-MM-DD".
   * @param date The date object to format.
   * @returns The formatted date string.
   */
  private formatDate(date: Date): string {
    const year = date.getUTCFullYear().toString();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Retrieves the current user's information.
   * @returns A promise that resolves to the user's JSON data.
   */
  async getCurrentUser(): Promise<CurrentUserResponse> {
    const { url, headers } = this.getApiOptions('/users/current');
    return this.get(url, headers) as Promise<CurrentUserResponse>;
  }

  /**
   * Retrieves the summaries for the specified date range.
   * @param range The date range for the summaries.
   * @returns A promise that resolves to the summaries JSON data.
   */
  async getSummaries(params: SummariesParams): Promise<SummariesResponse> {
    const start = this.getDateString(params.start);
    const end = this.getDateString(params.end);

    const { url, headers } = this.getApiOptions('/users/current/summaries', { ...params, start, end });
    return this.get(url, headers) as Promise<SummariesResponse>;
  }

  /**
   * Retrieves all time since today.
   * @returns A promise that resolves to the summaries JSON data.
   */
  async getAllTime(): Promise<AllTimeSinceTodayResponse> {
    const { url, headers } = this.getApiOptions('/users/current/all_time_since_today');
    return this.get(url, headers) as Promise<AllTimeSinceTodayResponse>;
  }

  /**
   * Retrieves the duration data for the specified date.
   * @param date The date for the duration data.
   * @returns A promise that resolves to the duration JSON data.
   */
  async getDurations(date: string | Date): Promise<DurationsResponse> {
    const { url, headers } = this.getApiOptions('/users/current/durations', {
      date: this.getDateString(date),
    });
    return this.get(url, headers) as Promise<DurationsResponse>;
  }

  /**
   * Retrieves the best day insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsBestDay(range: CustomTimeRange): Promise<InsightsBestDayResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/best_day', { start, end });
    return this.get(url, headers) as Promise<InsightsBestDayResponse>;
  }

  /**
   * Retrieves the categories insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsCategories(range: CustomTimeRange): Promise<InsightsCategoriesResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/category', { start, end });
    return this.get(url, headers) as Promise<InsightsCategoriesResponse>;
  }

  /**
   * Retrieves the daily average insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsDailyAverage(range: CustomTimeRange): Promise<InsightsDailyAverageResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/daily_average', { start, end });
    return this.get(url, headers) as Promise<InsightsDailyAverageResponse>;
  }

  /**
   * Retrieves the days insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsDays(range: CustomTimeRange): Promise<InsightsDaysResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/days', { start, end });
    return this.get(url, headers) as Promise<InsightsDaysResponse>;
  }

  /**
   * Retrieves the editors insights for the specifiedCertainly! Here's the continuation and completion of the refactored `WakaTime` class using the native Fetch API:

```typescript
   /**
   * Retrieves the editors insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsEditors(range: CustomTimeRange): Promise<InsightsEditorsResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/editors', { start, end });
    return this.get(url, headers) as Promise<InsightsEditorsResponse>;
  }

  /**
   * Retrieves the languages insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsLanguages(range: CustomTimeRange): Promise<InsightsLanguagesResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/languages', { start, end });
    return this.get(url, headers) as Promise<InsightsLanguagesResponse>;
  }

  /**
   * Retrieves the machines insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsMachines(range: CustomTimeRange): Promise<InsightsMachinesResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/machines', { start, end });
    return this.get(url, headers) as Promise<InsightsMachinesResponse>;
  }

  /**
   * Retrieves the operating systems insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsOperatingSystems(range: CustomTimeRange): Promise<InsightsOperatingSystemsResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/operating_systems', { start, end });
    return this.get(url, headers) as Promise<InsightsOperatingSystemsResponse>;
  }

  /**
   * Retrieves the projects insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsProjects(range: CustomTimeRange): Promise<InsightsProjectsResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/projects', { start, end });
    return this.get(url, headers) as Promise<InsightsProjectsResponse>;
  }

  /**
   * Retrieves the weekdays insights for the specified date range.
   * @param range The date range for the insights.
   * @returns A promise that resolves to the insights JSON data.
   */
  async getInsightsWeekdays(range: CustomTimeRange): Promise<InsightsWeekdaysResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/insights/weekdays', { start, end });
    return this.get(url, headers) as Promise<InsightsWeekdaysResponse>;
  }

  /**
   * Retrieves the heartbeats for the specified date range.
   * @param range The date range for the heartbeats.
   * @returns A promise that resolves to the heartbeats JSON data.
   */
  async getHeartbeats(range: CustomTimeRange): Promise<HeartbeatsResponse> {
    let start = '';
    let end = '';

    if ('start' in range && 'end' in range) {
      start = this.getDateString(range.start);
      end = this.getDateString(range.end);
    } else {
      start = this.getDateString(range);
      end = this.getDateString(range);
    }

    const { url, headers } = this.getApiOptions('/users/current/heartbeats', { start, end });
    return this.get(url, headers) as Promise<HeartbeatsResponse>;
  }

  /**
   * Retrieves the projects.
   * @returns A promise that resolves to the projects JSON data.
   */
  async getProjects(): Promise<ProjectsResponse> {
    const { url, headers } = this.getApiOptions('/users/current/projects');
    return this.get(url, headers) as Promise<ProjectsResponse>;
  }

  /**
   * Retrieves the stats.
   * @returns A promise that resolves to the stats JSON data.
   */
  async getStats(): Promise<StatsResponse> {
    const { url, headers } = this.getApiOptions('/users/current/stats');
    return this.get(url, headers) as Promise<StatsResponse>;
  }
}
