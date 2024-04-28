import { EmployeeForm } from '@/components/employeeForm'
import { FormWrapper } from '@/components/form-wrappers'
import React from 'react'

const EmployeeCreatePage = () => {
  return (
    <main className='flex items-center justify-center h-screen'>
        <FormWrapper title="Create a new employee form">
            <EmployeeForm />

        </FormWrapper>

    </main>
  )
}

export default EmployeeCreatePage