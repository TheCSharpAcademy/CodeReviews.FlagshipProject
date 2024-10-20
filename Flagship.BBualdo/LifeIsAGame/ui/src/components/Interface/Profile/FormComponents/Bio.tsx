import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Textarea } from "@/src/shadcn/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import editProfileInfoSchema from "@/src/schemas/editProfileInfoSchema";
import { z } from "zod";

const Bio = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof editProfileInfoSchema>>;
}) => {
  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Bio
          </FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Bio;
