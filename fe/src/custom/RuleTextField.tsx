const parse = (str: string, field: string) => {
  return str ? str.split(/%s/).join(field) : str;
};

const parseConfirm = (str: string, field1?: string, field2?: string) => {
  str = str ? str.split(/%s1/).join(field1) : str;
  str = str ? str.split(/%s2/).join(field2) : str;
  return str;
};

const checkedRules: { [key: string]: RegExp } = {
  required: /^(?!\s*$)/,
  normalText: /^[a-zA-Z0-9\-\_]+$/,
  email: /[^@]+@.+\.\w{2,3}$/,
  password: /^[a-zA-Z0-9\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`]*$/,
  confirmPassword: /^/,
};

const messageErrors: { [key: string]: string } = {
  required: `%s is required`,
  normalText: `Please enter alphanumeric characters and symbols (-, _)`,
  email: `Please enter correct format email ex: abc@example.com`,
  password: `Please enter alphabets (uppercase or lower characters), numbers, and symbols.`,
  confirmPassword: `%s1 and %s2 are not matching`,
};

const nameField: { [key: string]: string } = {
  name: "Name",
  email: "Email",
  password: "Password",
  confirmPassword: "Confirm Password",
};

const checkValid = (value: string, field: string, rules: string, valueConfirm?: string, fieldConfirm?: string) => {
  const listRule = rules.split("|");
  const messages = [] as string[];

  for (let i = 0; i < listRule.length; i++) {
    const ruleName = listRule[i];
    if (Object.keys(checkedRules).includes(ruleName)) {
      if (ruleName.includes("confirm") && fieldConfirm) {
        if (valueConfirm !== value) {
          messages.push(parseConfirm(messageErrors[ruleName], nameField[fieldConfirm], nameField[field]));
        }
      } else if (!checkedRules[ruleName].test(value)) {
        messages.push(parse(messageErrors[ruleName], nameField[field]));
      }
    }
  }
  const isValid = messages && messages.length === 0;
  return { isValid, messages };
};

const RuleTextField = {
  checkValid,
};

export default RuleTextField;
