import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeOffIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function RegisterBox() {
  const [showPassword, setShowpassword] = useState<boolean>(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: RegisterSchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  {...field}
                />
              </FormControl>
              {form.formState.errors.username ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  Any name is fine. It doesn’t have to be unique.
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              {form.formState.errors.email ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  Enter a valid email for verification.
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div className="flex gap-2">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="w-11"
                  onClick={() => setShowpassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </Button>
              </div>
              {form.formState.errors.password ? (
                <FormMessage />
              ) : (
                <FormDescription>
                  At least 8 characters for better security.
                </FormDescription>
              )}
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default RegisterBox;
