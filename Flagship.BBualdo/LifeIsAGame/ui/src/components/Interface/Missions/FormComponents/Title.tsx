import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";
import { MissionSchema } from "@/src/utils/types";
import { UseFormReturn } from "react-hook-form";

const Title = ({ form }: { form: UseFormReturn<MissionSchema> }) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Title
          </FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription className="text-cp-yellow/80">
            This is the final goal you want to achieve.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Title;
