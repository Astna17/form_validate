'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(10),
    email: z.string().email(),
    message: z.string().min(20)
});

interface FormInput {
    name: string;
    email: string;
    message: string;
}

const Contact: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
            <div className='mb-2'>
                <label
                    htmlFor='name'
                    className='mb-3 block text-base font-medium text-black'
                >
                    Name
                </label>
                <input
                    type='text'
                    placeholder='Name'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('name', { required: true })}
                />
                {errors.name && <p>Name is required and must be at least 10 characters long</p>}
            </div>

            <div className='mb-5'>
                <label
                    htmlFor='email'
                    className='mb-3 block text-base font-medium text-black'
                >
                    Email Address
                </label>
                <input
                    type='email'
                    placeholder='example@domain.com'
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('email', { required: true })}
                />
                {errors.email && <p>Email is required and must be a valid email address</p>}
            </div>
            <div className='mb-5'>
                <label
                    htmlFor='message'
                    className='mb-3 block text-base font-medium text-black'
                >
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder='Type your message'
                    className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                    {...register('message', { required: true })}
                ></textarea>
                {errors.message && <p>Message is required and must be at least 20 characters long</p>}
            </div>
            <div>
                <button className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none' type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Contact;
