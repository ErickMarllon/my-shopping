function cleanMask(input?: string): string {
  if (!input) return "";

  return input.replace(/([^\d])+/gim, "");
}

function formatCpf(cpfInput?: string): string {
  if (!cpfInput) return "";

  const cleanCpf = cpfInput.replace(/\D/g, "");

  if (cleanCpf.length === 11) {
    return cleanCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return "";
}

function formatCnpj(cnpj?: string): string {
  if (!cnpj) return "";

  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

function formatTel(telInput?: string): string {
  if (!telInput) return "";

  const cleanTel = telInput.replace(/\D/g, "").replace(/^0/, "");

  if (cleanTel.length > 10) {
    return cleanTel.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (cleanTel.length > 5) {
    return cleanTel.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (cleanTel.length > 2) {
    return cleanTel.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    return cleanTel.replace(/^(\d*)/, "($1");
  }
}

function formatCep(inputCep?: string): string {
  if (!inputCep) return "";
  const cepRegex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
  return cepRegex.test(inputCep) ? inputCep.replace(cepRegex, "$1.$2-$3") : "";
}

function formatWordsUpperAndLower(words?: string): string {
  if (!words) return "";
  return words.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}

export {
  cleanMask,
  formatCep,
  formatCnpj,
  formatCpf,
  formatTel,
  formatWordsUpperAndLower,
};
