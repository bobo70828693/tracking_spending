import axios from 'axios'

const fugleRequest = axios.create({
    baseURL: 'https://api.fugle.tw/realtime/v0.2',
})

// Fugle API
export const apiFugleStockInfo = (data) => fugleRequest.get('/intraday/meta', data)
