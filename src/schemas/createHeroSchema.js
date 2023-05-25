import * as Yup from "yup";

export const createHeroSchema = Yup.object().shape({
  nickname: Yup.string("Enter hero nickname")
    .min(2, "Nickname should be of minimum 2 characters length")
    .max(64, "Nickname should be of maximum 64 characters length")
    .required("Nickname is required"),

  realName: Yup.string("Enter hero real name")
    .min(2, "Real name should be of minimum 8 characters length")
    .max(64, "Real name should be of maximum 64 characters length")
    .required(),

  originDescription: Yup.string("Enter hero description")
    .min(6, "Description should be of minimum 6 characters length")
    .max(240, "Description should be of maximum 240 characters length")
    .required("Description is required"),

  // superpowers: Yup.string("Enter hero superpowers")
  //   .min(2, "Superpowers should be of minimum 2 characters length")
  //   .required("Superpowers is required"),

  // catchPhrase: Yup.string("Enter hero catch phrase")
  //   .min(2, "Catch phrase should be of minimum 2 characters length")
  //   .required("Catch phrase is required"),
});
