const ROUTE = {
  REVERSE_PROXY:
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://cors.olivera.tech",
  HOME: "/",
  GLOBAL: "/global",
  COUNTRY: "/country/:countryname",
  CANADA: "/country/canada",
  COUNTRY_BASE: "/country",
  SEARCH: "/search",
  COMPARE: "/compare",
};

export default ROUTE;
