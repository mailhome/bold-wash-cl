import { contactSchema } from '@/lib/schema/contactSchema';
import { useForm } from '@tanstack/react-form';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
    }, 
    validators: {
        onChange: contactSchema
    },
    onSubmit: async ({ value }) => {
        console.log("Contact form Submitted");
    }
  })

  return (
    <Card className='w-full bg-white h-full max-w-lg xl:max-w-2xl '>
        <CardHeader className='font-medium py-3 lg:py-4 text-md lg:text-xl'>
            Send us a message
        </CardHeader>
        <CardContent>
            <form onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation()
                form.handleSubmit()
            }}>
                <div className="space-y-4 lg:space-y-8">
                {/* Full name */}
                <form.Field name="fullName">
                    {(field) => (
                        <div className="space-y-2">
                            <Label className='' htmlFor={field.name}>
                                Full Name
                            </Label>
                            <Input 
                                id={field.name} 
                                name={field.name}
                                placeholder='Your full Name'
                                value={field.state.value} 
                                onBlur={field.handleBlur} 
                                onChange={(e) => field.handleChange(e.target.value)} 
                                className='text-base placeholder:text-base h-9 px-2 border-slate-200 rounded-sm focus-visible:ring-[#326D51]' 
                                aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid} 
                                autoComplete='name'/>
                                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                <p className='text-sm text-red-500'>
                                    {String(field.state.meta.errors[0])}
                                </p>
                            )}
                        </div>
                    )}
                </form.Field>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-4">
                    {/* Email */}
                    <form.Field name="email">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>
                                    Email
                                </Label>
                                <Input 
                                id={field.name}
                                name={field.name}
                                placeholder='Enter your Email'
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                className='text-base placeholder:text-base h-9 px-2 border-slate-200 rounded-sm focus-visible:ring-[#326D51]'
                                onChange={(e) => field.handleChange(e.target.value)}
                                aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid} 
                                autoComplete='name' />
                                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                <p className='text-sm text-red-500'>
                                    {String(field.state.meta.errors[0])}
                                </p>
                            )}
                            </div>
                        )}
                    </form.Field>

                    <form.Field name="phone">
                        {(field) => (
                            <div className="space-y-2">
                                <Label htmlFor={field.name}>
                                    Phone number
                                </Label>
                                <Input 
                                id={field.name}
                                name={field.name} 
                                placeholder='0801002000'
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                className='text-base placeholder:text-base h-9 px-2 border-slate-200 rounded-sm focus-visible:ring-[#326D51]'
                                onChange={(e) => field.handleChange(e.target.value)}
                                aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid}
                                autoComplete='name' 
                                />
                                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                    <p className='text-sm text-red-500'>
                                    {String(field.state.meta.errors[0])}
                                     </p>
                                )  }
                            </div>
                        )}
                    </form.Field>
                </div>
                <form.Field name="message">
                    {(field) => (
                        <div className="space-y-2">
                            <Label htmlFor={field.name}>
                                Message
                            </Label>
                            <Textarea 
                            id={field.name} 
                            name={field.name} 
                            placeholder='How can we help you'
                            value={field.state.value} 
                            onBlur={field.handleBlur} 
                            onChange={(e) => field.handleChange(e.target.value)} 
                            className='min-h-30 resize-none rounded-md border-slate-200 px-2 py-4  focus-visible:ring-[#326D51]' 
                            aria-invalid={field.state.meta.isTouched && !field.state.meta.isValid} />
                            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                <p className='text-sm text-red-500'>
                                    {String(field.state.meta.errors[0])}
                                </p>
                            )}
                        </div>
                    )}
                </form.Field>
                {/* Submit form */}
                <form.Subscribe 
                    selector={(state) => [ state.canSubmit, state.isSubmitting]}>
                        {([canSubmit, isSubmitting]) => (
                            <Button 
                                type="submit"
                                disabled={!canSubmit || isSubmitting}
                                className={`h-14 w-full rounded-md bg-[#326D51] text-base font-semibold text-white hover:bg-[#305845] disabled:opacity-60`}>
                                    <Send className='mr-2 size-5' />
                                    {isSubmitting ? "Sending" : "Send Message"}
                            </Button>
                        )}
                    </form.Subscribe>
                </div>
            </form>
        </CardContent>
    </Card>
  )
}
