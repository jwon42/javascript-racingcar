import { ALERT } from '../constants/index.js';

const checkEmptyInput = (input: HTMLInputElement) => {
  return input.value.trim() === '';
};

const checkArrayHasEmptyElement = (array: Array<string>) => {
  console.log(array);
  return array.some((x) => x === '');
}

const checkArrayHasOneElement = (array: Array<string>) => {
  return array.length < 2;
};

const checkArrayDupElements = (array: Array<string>) => {
  return array.some((x) => {
    return array.indexOf(x) !== array.lastIndexOf(x);
  });
};

const checkArrayElementsLength = (array: Array<string>) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > 5) {
      return true;
    }
  }
  return false;
};

const checkCarNames = (carNameInput: HTMLInputElement, carNameArray: Array<string>): boolean => {
  if (checkEmptyInput(carNameInput)) {
    alert(ALERT.CARNAME_NOTHING);
    return false;
  } else if (checkArrayHasEmptyElement(carNameArray)) {
    alert(ALERT.CARNAME_EMPTY);
    return false;
  } else if (checkArrayHasOneElement(carNameArray)) {
    alert(ALERT.CARNAME_ALONE);
    return false;
  } else if (checkArrayDupElements(carNameArray)) {
    alert(ALERT.CARNAME_DOUBLE);
    return false;
  } else if (checkArrayElementsLength(carNameArray)) {
    alert(ALERT.CARNAME_LENGTH);
    return false;
  }
  return true;
};

const checkTryCount = (tryCountInput: HTMLInputElement): boolean => {
  if (checkEmptyInput(tryCountInput)) {
    alert(ALERT.TRYCOUNT_NOTHING);
    return false;
  } else if (Number(tryCountInput.value) < 1) {
    alert(ALERT.TRYCOUNT_UINT);
    return false;
  } else if (Number(tryCountInput.value) > 50) {
    alert(ALERT.TRYCOUNT_TOO_BIG);
    return false;
  }
  return true;
};

export { checkCarNames, checkTryCount };
