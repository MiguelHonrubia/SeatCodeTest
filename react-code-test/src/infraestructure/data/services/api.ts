import { ApiError } from "../../core/utils/api-error";
import { deepCopy } from "../../core/utils/deep-copy";

const NETWORK_ERROR = new ApiError(
  {},
  { message: "generalModalErrorNetwork", type: "UNRECOVERABLE" }
);

const replacer = (key: string, value: any) => {
  if (typeof value === "string") {
    return value || null;
  }
  return value;
};

export default class Api {
  private baseUrl: string;
  private defaultOptions: RequestInit;
  private static instance: Api;

  constructor(options: { baseUrl: string; defaultOptions: RequestInit }) {
    this.baseUrl = options.baseUrl;
    this.defaultOptions = {
      credentials: "same-origin",
      ...options.defaultOptions,
    };
    this.defaultOptions.headers = {
      Authorization: "Bearer ",
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.defaultOptions.headers,
    };
  }

  static getInstance(options: {
    baseUrl: string;
    defaultOptions: RequestInit;
  }) {
    if (!this.instance) {
      this.instance = new Api(options);
    }
    return this.instance;
  }

  fetch(url: string, options: RequestInit) {
    return fetch(url, options)
      .catch(() => {
        throw NETWORK_ERROR;
      })
      .then(this.parseBody)
      .then(this.checkStatus.bind(this, url, options));
  }

  parseBody(response: any) {
    const contentType = response.headers.get("Content-Type");
    const pagination = JSON.parse(response.headers.get("X-Pagination"));
    let parsePromise;

    if (/json/.test(contentType as string)) {
      parsePromise = response.json();
    } else if (/multipart/.test(contentType as string)) {
      parsePromise = response.formData();
    } else if (/pdf|xml/.test(contentType as string)) {
      parsePromise = response.blob();
    } else {
      parsePromise = response.text();
    }

    return parsePromise.then((parsedBody: any) => ({
      response,
      parsedBody,
      pagination,
    }));
  }

  checkStatus(
    url: string,
    originalOptions: RequestInit,
    { response, parsedBody, pagination }: any
  ) {
    if (response.ok) {
      return pagination ? { parsedBody, pagination } : parsedBody;
    }
    switch (response.status) {
      case 400:
      case 401:
      case 404:
      case 500:
        break;
    }

    throw new ApiError(response, parsedBody);
  }

  // Request
  async genericRequest(method: string, path: string, options: RequestInit) {
    const opt = { ...deepCopy(this.defaultOptions), ...options, method };
    opt.headers = { ...this.defaultOptions.headers, ...options.headers };
    try {
      if (options && options.body instanceof FormData) {
        delete opt.headers["Content-Type"];
      }

      if (opt.headers["Content-Type"] === "application/json") {
        opt.body = JSON.stringify(opt.body, replacer);
      }

      opt.headers = {
        ...opt.headers,
      };

      return this.fetch(this.baseUrl + path, opt);
    } catch (error) {}
  }

  get(path: string, options: RequestInit = {}) {
    return this.genericRequest("get", path, {
      ...options,
      headers: { ...options.headers },
    });
  }

  post(path: string, options: RequestInit) {
    return this.genericRequest("post", path, options);
  }

  put(path: string, options: RequestInit) {
    return this.genericRequest("put", path, options);
  }

  patch(path: string, options: RequestInit) {
    return this.genericRequest("PATCH", path, options);
  }

  delete(path: string, options: RequestInit = {}) {
    options.headers = options.headers || {};
    return this.genericRequest("delete", path, options);
  }
}
