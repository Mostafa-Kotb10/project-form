import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { storeSetupFormSchema, StoreSetupFormTypes } from "@/validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignUpContext from "@/hooks/useSignUpContext";
import { Textarea } from "@/components/ui/textarea";
import useSave from "@/hooks/useSave";
import { Button } from "@/components/ui/button";

const StoreSetupForm = () => {
  const { formData } = useSignUpContext();

  const form = useForm<StoreSetupFormTypes>({
    resolver: zodResolver(storeSetupFormSchema),
    mode: "onChange",
    defaultValues: {
      storeName: formData.storeName || "",
      storeAddress: formData.storeAddress || "",
      storeNumber: formData.storeNumber || "",
      storeDescription: formData.storeDescription || "",
      storeType: formData.storeType || "",
      businessCategory: formData.businessCategory || "",
      currency: formData.currency || "",
      paymentMethods: formData.paymentMethods || "",
    },
  });

  useSave({
    isValid: form.formState.isValid,
    formData: form.getValues(),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-h-[17rem]  p-1 overflow-y-scroll">
        <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storeAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Address</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storeNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Number</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storeDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Description</FormLabel>
              <FormControl>
                <Textarea placeholder="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="storeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="online" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="online">online</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="Wholesale">Wholesale</SelectItem>
                  </SelectContent>
                </Select>
              
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="fashion" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="groceries">Groceries</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>currency </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="egp">EGP</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <Button type="submit">Test Submit</Button>
    </Form>
  );
};

export default StoreSetupForm;
