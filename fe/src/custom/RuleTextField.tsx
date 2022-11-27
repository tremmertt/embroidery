const parse = (str: string, field: string) => {
  return str ? str.split(/%s/).join(field) : str;
};

const checkedRules: { [key: string]: RegExp } = {
  required: /^(?!\s*$)/,
  normalText: /^[a-zA-Z0-9\-\_]+$/,
};

const messageErrors: { [key: string]: string } = {
  required: `Please enter your %s`,
  normalText: `Please enter alphanumeric characters and symbols (-, _)`,
};

const checkValid = (value: string, field: string, rules: string) => {
  const listRule = rules.split("|");
  const messages = [] as string[];

  for (let i = 0; i < listRule.length; i++) {
    const ruleName = listRule[i];
    if (Object.keys(checkedRules).includes(ruleName)) {
      console.log("check", checkedRules[ruleName].test(value));
      if (!checkedRules[ruleName].test(value)) messages.push(parse(messageErrors[ruleName], field));
    }
  }
  const isValid = messages && messages.length === 0;

  console.log(isValid, messages);
  return { isValid, messages };
};
const RuleTextField = {
  checkValid,
};
export default RuleTextField;
