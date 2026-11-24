import { useState } from "react";
import { useForm } from "@tanstack/react-form"
import { newsLetterSchema } from "@/lib/schema/newsletter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowUp, Calendar } from "lucide-react";

interface NewsletterProps {
    onSubscribe: (email: string) => Promise<void>;
}

export function Newsletter({ onSubscribe}: NewsletterProps) {
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState("");

    const form = useForm({
        defaultValues: {
            email: ""
        }, 
        validators: {
            onSubmit: newsLetterSchema
        },

        onSubmit: async({ value }) => {
            try {
                setServerError("");
                await onSubscribe(value.email)
                setSuccess(true);
                form.reset();
            } catch {
                setServerError("Something went wrong, Please try again")
            }
        }
    });

    return (
        <div className="max-w-md">
            <div className="">

                <h2 className="mb-2 text-base lg:text-lg font-=medium tracking-tight text-white">
                    Stay Updated
                </h2>

                <p className="mb-2 text-xs leading-7 text-gray-300">
                    Get offers and updates delivered to your inbox.
                    Subscribe to our newsletter and never miss an update.
                </p>

                {success ? (
                    <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-400">
                        <p>Thank you for subscribing!</p>
                    </div>
                ) : (
                    <div className="mb-6 lg:mb-0">
                    <form.Field name="email">
                        {(field) => (
                            <div className="">
                                <Input 
                                 type="email" 
                                 placeholder="Enter your email" 
                                 value={ field.state.value }
                                 onBlur={field.handleBlur} 
                                 onChange={(e) => field.handleChange(e.target.value)} 
                                 className="h-12 rounded-xl border-white/10 bg-white/5 px-5 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-white" />

                                    {field.state.meta.errors.length > 0 && (
                                        <p className="mt-2 text-xs text-red-400">
                                            {field.state.meta.errors
                                                .map(String)
                                                .join(", ")}
                                        </p>
                                    )}
                                </div>
                            )}
                    </form.Field>
                            <Button
                                type="submit"
                                className="h-10 mt-2 lg:mt-4 w-full rounded-xl bg-[#B8972A] text-white text-md hover:bg-[#B8972A]"
                            >
                                {form.state.isSubmitting
                                    ? "Subscribing..."
                                    : "Subscribe"}
                            </Button>

                            {serverError && (
                                <p className="text-sm text-red-400">
                                    {serverError}
                                </p>
                            )}
                    </div>
                )}
          </div>

            <button
                type="button"
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }
                aria-label="Scroll to top"
                className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-(--brand-primary) text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-(--brand-primary) cursor-pointer"
            >
                <ArrowUp size={22} />
            </button>

            
                
        </div>
    )
}
