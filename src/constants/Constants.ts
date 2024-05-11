interface IRule {
  value: number;
  message: string;
}

interface IWeatherFormRules {
  required: string;
  minLength: IRule;
  maxLength: IRule;
}

export const API_KEY = "1313109668e6378c955159d0b4442a3f";

export const weatherFormRules: IWeatherFormRules = {
  required: "Город обязателен для заполнения",
  minLength: {
    value: 3,
    message: "Город должен содержать минимум 3 символа",
  },
  maxLength: {
    value: 15,
    message: "Город должен содержать максимум 15 символов",
  },
};
