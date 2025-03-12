function currencyFormatter(value: number | string): string {
  if (typeof value === "string") {
    value = value.replace(",", ".").replace(/\./g, "");
  }

  const numericValue = Number(value);
  if (isNaN(numericValue)) return "";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue / 100);
}

function currencyFormatterNoPrefix(value: number | string): string {
  if (typeof value === "string") {
    value = value.replace(",", ".").replace(/\./g, "");
  }

  const numericValue = Number(value);
  if (isNaN(numericValue)) return "";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue / 100);

  return "" + amount.replace("R$", "");
}

function formatPercValuesToCurrency(
  perc: string,
  total: number,
  returnNumberOnly?: boolean
) {
  const numberedPerc = perc.replace("%", "");

  const totalValue = total * (Number(numberedPerc) / 100);

  if (returnNumberOnly) return totalValue;

  return currencyFormatter(totalValue);
}

export {
  currencyFormatter,
  formatPercValuesToCurrency,
  currencyFormatterNoPrefix,
};
