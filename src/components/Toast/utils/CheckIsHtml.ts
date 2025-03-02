function CheckIsHtml(text: string): boolean {
  return /<\/?[^>]+>/i.test(text);
}

export { CheckIsHtml };
