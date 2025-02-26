import ProjectSetupForm from "@/pages/sign-up/ProjectSetupForm";
import StoreSetupForm from "@/pages/sign-up/StoreSetupForm";
import UserInfoForm from "@/pages/sign-up/UserInfoForm";


export const steps = [
  {
    id: 0,
    title: "Project Setup",
    descrption:
      "Tell us more about your project. This form will contain data used to setup your overall project and market details.",
    step: "project-setup",
    component: ProjectSetupForm,
  },
  {
    id: 1,
    title: "User Info",
    descrption: "Give us more info about your self your interests and more.",
    step: "user-info",
    component: UserInfoForm,
  },
  {
    id: 2,
    title: "Store Setup",
    descrption: "Provide essential details about your store, including its name, address, contact information, business category, and operating hours. This information helps define your store's identity and ensures a smooth setup process.",
    step: "store-setup",
    component: StoreSetupForm
  }
];
