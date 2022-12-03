const parse = (str: string, field: string) => {
  return str ? str.split(/%s/).join(field) : str;
};

const parseConfirm = (str: string, field1?: string, field2?: string) => {
  str = str ? str.split(/%s1/).join(field1) : str;
  str = str ? str.split(/%s2/).join(field2) : str;
  return str;
};

const parseMinMax = (str: string, field: string, quantity: number) => {
  str = str ? str.split(/%s/).join(field) : str;
  str = str ? str.split(/%m/).join(quantity.toString()) : str;
  return str;
};

const checkedRules: { [key: string]: RegExp } = {
  required: /^(?!\s*$)/,
  normalText: /^[a-zA-Z0-9\-\_ ]+$/,
  email: /[^@]+@.+\.\w{2,3}$/,
  password: /^[a-zA-Z0-9\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`]*$/,
  confirmPassword: /^/,
  min: /./,
  max: /./,
};

const messageErrors: { [key: string]: string } = {
  required: `%s is required`,
  normalText: `Please enter alphanumeric characters and symbols (-, _)`,
  email: `Please enter correct format email ex: abc@example.com`,
  password: `Please enter alphabets (uppercase or lower characters), numbers, and symbols.`,
  confirmPassword: `%s1 and %s2 are not matching`,
  min: `%s must be at least %m characters`,
  max: `%s must be smaller than %m characters`,
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
    let ruleName = listRule[i];
    if (Object.keys(checkedRules).includes(ruleName) || ruleName.includes("min") || ruleName.includes("max")) {
      if (ruleName.includes("confirm") && fieldConfirm) {
        if (valueConfirm !== value) {
          messages.push(parseConfirm(messageErrors[ruleName], nameField[fieldConfirm], nameField[field]));
        }
      } else if (ruleName.includes("min")) {
        const numberMin = parseInt(ruleName.split(":")[1]);
        ruleName = "min";
        if (value.length < numberMin) {
          messages.push(parseMinMax(messageErrors[ruleName], nameField[field], numberMin));
        }
      } else if (ruleName.includes("max")) {
        const numberMax = parseInt(ruleName.split(":")[1]);
        ruleName = "max";
        if (value.length > numberMax) {
          messages.push(parseMinMax(messageErrors[ruleName], nameField[field], numberMax));
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
