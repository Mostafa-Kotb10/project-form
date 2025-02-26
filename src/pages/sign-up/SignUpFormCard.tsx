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
import useSignUpContext from "@/hooks/useSignUpContext";

const SignUpFormCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isValid } = useSignUpContext();

  const stepParam = searchParams.get("step") || "project-setup";

  const stepComponent = steps.find((c) => c.step === stepParam);

  if (!stepComponent) return null;

  const onNext = () => {
    const nextIdx = stepComponent.id + 1;

    setSearchParams({ step: steps[nextIdx].step });
  };

  const onPrev = () => {
    const prevIdx = stepComponent.id - 1;

    setSearchParams({ step: steps[prevIdx].step });
  };

  return (
    <div className="mx-auto max-w-5xl h-screen grid place-content-center">
      <Card className="w-[460px] overflow-hidden">
        <CardHeader className="space-y-2 p-7">
          <CardTitle className="font-bold text-2xl">
            {stepComponent.title}
          </CardTitle>
          <CardDescription className="text-gray-700 font-normal">
            {stepComponent.descrption}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {stepComponent.component ? <stepComponent.component /> : null}
        </CardContent>

        <CardFooter>
          {stepComponent.id < steps.length - 1 ? (
            <Button onClick={onNext} disabled={!isValid}>
              Next
            </Button>
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

export default SignUpFormCard;
