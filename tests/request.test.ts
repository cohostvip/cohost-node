import { describe, it, expect, vi, beforeEach } from 'vitest';
import { request } from '../src/http/request'; // Adjust path if needed

global.fetch = vi.fn();

describe('request()', () => {
  const token = 'test-token';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns plain data when response is raw object (no status wrapper)', async () => {
    const mockResponse = { id: '123', name: 'Test Object' };
    (fetch as any).mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: async () => mockResponse,
    });

    const api = request({ token });
    const result = await api('/test');

    expect(result).toEqual(mockResponse);
  });

  it('unwraps { status: "ok", data: ... } responses', async () => {
    const mockResponse = { status: 'ok', data: { id: 'abc', label: 'Unwrapped' } };
    (fetch as any).mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: async () => mockResponse,
    });

    const api = request({ token });
    const result = await api('/wrapped');

    expect(result).toEqual(mockResponse.data);
  });

  it('uses custom baseUrl if provided', async () => {
    const mockResponse = { status: 'ok', data: { message: 'custom base URL used' } };
    const customBaseUrl = 'https://api.customhost.com/v2';

    (fetch as any).mockResolvedValue({
      ok: true,
      headers: { get: () => 'application/json' },
      json: async () => mockResponse,
    });

    const api = request({ token, baseUrl: customBaseUrl });
    const result = await api('/endpoint');

    expect(fetch).toHaveBeenCalledWith(
      'https://api.customhost.com/v2/endpoint',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          Authorization: `Bearer ${token}`,
        }),
      })
    );

    expect(result).toEqual(mockResponse.data);
  });
});
