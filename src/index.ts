import * as messages from "./__localization__/index.js";

const localeMessages = messages["en_us"];

export function greet() {
  return localeMessages.hello;
}