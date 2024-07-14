export function evaluateRegex(inputValue: string): boolean[] {
  return [
    /[^\w\s\p{L}]/u.test(inputValue),
    /\d/.test(inputValue),
    /[a-zA-Zа-яА-Я]/.test(inputValue),
  ];
}
