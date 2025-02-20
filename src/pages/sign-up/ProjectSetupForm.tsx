import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { projectInfoSchema, ProjectInfoTypes } from "@/validation/schema";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ProjectSetupForm = () => {
  const form = useForm<ProjectInfoTypes>({
    resolver: zodResolver(projectInfoSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          name="projectName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="projectDescription"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter project description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProjectSetupForm;
