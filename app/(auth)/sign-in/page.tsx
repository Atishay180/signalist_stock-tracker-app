"use client"

import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <h1 className='form-title'>Log In Your Account </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField
          label="Email"
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          register={register}
          name="password"
          error={errors.password}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? "Signing In..." : "Log In"}
        </Button>

        <FooterLink text="Don’t have an account?" linkText="Sign Up" href='/sign-up' />
      </form>
    </>
  )
}

export default SignIn
