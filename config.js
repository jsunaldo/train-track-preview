// Payment configuration.
// The site works in DEMO mode until both fields are set: buy buttons open a
// clearly-labeled demo checkout. To go live, point these at your BTCPay Server
// (self-hosted or a host like Voltage/LunaNode) and enable the store setting
// "Allow anyone to create invoice" (Pay Button). BTCPay's hosted checkout then
// offers BOTH Lightning and on-chain on every purchase.
window.STORE_CONFIG = {
  btcpayUrl: "",      // e.g. "https://pay.calstone.example"
  btcpayStoreId: "",  // BTCPay dashboard -> Store settings -> Store ID
  currency: "USD",
};
