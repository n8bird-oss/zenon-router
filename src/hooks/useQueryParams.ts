export function useQueryParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}