const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {

    return await fetch(`${BASE_URL}/coins`).then(response => response.json());
}

export async function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(response => response.json());
}

export async function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json());
}

export async function fetchCoinOHLCV(coinId: string) {
    const start = Math.floor(new Date(Date.now() - (1000 * 60 * 60 * 24 * 7)).setHours(0,0,0,0) / 1000);
    const end = Math.floor(new Date().setHours(24,0,0,-1) / 1000);
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`).then(response => response.json());
}