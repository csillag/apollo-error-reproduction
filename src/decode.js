export const decode = raw => atob(raw.substr(raw.indexOf(',') + 1));
