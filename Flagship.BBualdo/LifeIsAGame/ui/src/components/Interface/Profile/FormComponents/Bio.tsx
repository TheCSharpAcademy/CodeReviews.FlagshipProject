import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Textarea } from "@/src/shadcn/ui/textarea";
import { UserProfileEditType } from "@/src/utils/types";
import { UseFormReturn } from "react-hook-form";

const Bio = ({ form }: { form: UseFormReturn<UserProfileEditType> }) => {
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
