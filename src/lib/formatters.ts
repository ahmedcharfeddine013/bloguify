export function formatNumber(value: number): string {
  if (value < 0) {
    return "-" + formatNumber(-value);
  }

  if (value < 1000) {
    return value.toString();
  } else if (value >= 1000 && value < 1000000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else if (value >= 1000000 && value < 1000000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else {
    return (value / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
}
