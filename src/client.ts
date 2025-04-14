import { EventsAPI } from './api/events';
import { OrdersAPI } from './api/orders';
import { apiBaseUrl } from './apiVersion';
import { request, RequestFn } from './http/request';
import { CohostClientSettings } from './settings';

/**
 * Configuration options for instantiating a CohostClient.
 */
export interface CohostClientOptions {
  /** API token used for authenticated requests. */
  token: string;

  /** Optional client settings such as debug mode or custom API URL. */
  settings?: CohostClientSettings;
}

/**
 * CohostClient provides grouped access to various API modules such as Events and Orders.
 * 
 * Usage:
 * ```ts
 * const client = new CohostClient({ token: 'your-token' });
 * const event = await client.events.fetch('event-id');
 * const order = await client.orders.fetch('order-id', 'user-id');
 * ```
 */
export class CohostClient {
  /** Access to Event-related endpoints */
  readonly events: EventsAPI;

  /** Access to Order-related endpoints */
  readonly orders: OrdersAPI;

  constructor({ token, settings = {} }: CohostClientOptions) {
    const sharedRequest: RequestFn = request({
      token,
      baseUrl: settings.apiUrl || apiBaseUrl,
      debug: settings.debug,
    });

    this.events = new EventsAPI(sharedRequest, settings);
    this.orders = new OrdersAPI(sharedRequest, settings);
  }
}
