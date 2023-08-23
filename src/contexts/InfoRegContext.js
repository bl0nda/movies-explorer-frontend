import { createContext } from "react";

export const InfoRegistrationContext = createContext();

export const notification = {
  success: {
    imageSRC: "../images/success-reg.svg",
    imageAlt: "галочка в кружочке",
    text: "Вы успешно зарегистрировались!"
  },
  fail: {
    imageSRC: "../images/err-reg.svg",
    imageAlt: "красный крест в кружочке",
    text: "Что-то пошло не так! Попробуйте ещё раз.",
  },
};
