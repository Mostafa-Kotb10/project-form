import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useSearchParams } from "react-router-dom";

import { steps } from "@/constants/steps";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("step"));

  const stepParam = searchParams.get("step") || "project-setup";

  const StepComponent = steps.find((c) => c.step === stepParam);

  if (!StepComponent) return null;

  const onNext = () => {
    const nextIdx = StepComponent.id + 1;

    setSearchParams({ step: steps[nextIdx].step });
  };

  const onPrev = () => {
    const prevIdx = StepComponent.id - 1;
    
    setSearchParams({step: steps[prevIdx].step })
  }

  return (
    <div className="mx-auto max-w-5xl p-5 h-screen grid place-content-center">
      <Card className="w-[450px] mx-auto">
        <CardHeader className="space-y-2">
          <CardTitle className="font-bold text-2xl">
            {StepComponent.title}
          </CardTitle>
          <CardDescription className="text-gray-700 font-normal">
            {StepComponent.descrption}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <StepComponent.component />
        </CardContent>

        <CardFooter>
          {StepComponent.id < steps.length - 1 ? (
            <Button onClick={onNext}>Next</Button>
          ) : (
            <div className="flex items-center justify-between w-full">
              <Button onClick={onPrev}>Previous</Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
