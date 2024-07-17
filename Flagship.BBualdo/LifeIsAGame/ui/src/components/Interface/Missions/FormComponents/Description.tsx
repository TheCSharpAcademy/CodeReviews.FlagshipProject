import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Textarea } from "@/src/shadcn/ui/textarea";
import { MissionSchema } from "@/src/utils/types";
import { UseFormReturn } from "react-hook-form";

const Description = ({ form }: { form: UseFormReturn<MissionSchema> }) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-bold uppercase tracking-[4px] text-cp-cyan">
            Description
          </FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>
          <FormDescription className="text-cp-yellow/80">
            This is your draft. Make your plan here or write down how you want
            to approach your mission.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Description;
