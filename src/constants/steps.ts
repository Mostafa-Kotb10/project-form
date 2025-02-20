import ProjectSetupForm from "@/pages/sign-up/ProjectSetupForm";
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
  }
];
