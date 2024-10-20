import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { UseFormReturn } from "react-hook-form";
import editProfileInfoSchema from "@/src/schemas/editProfileInfoSchema";
import { z } from "zod";

const CurrentGoal = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof editProfileInfoSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name="currentGoal"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Current Goal
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CurrentGoal;
