/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Control, Controller, FieldError } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import CountrySelect from '../CountrySelect';

type CountrySelectProps = {
    name: string;
    label: string;
    control: Control<any>;
    error?: FieldError;
    required?: boolean;
};

export const CountrySelectField = ({ name, label, control, error, required = false }: CountrySelectProps) => {
    return (
        <div className='space-y-2'>
            <Label htmlFor={name} className='form-label'>
                {label}
            </Label>

            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? `Please select ${label.toLowerCase()}` : false,
                }}
                render={({ field }) => (
                    <CountrySelect value={field.value} onChange={field.onChange} />
                )}
            />
            
            {error && <p className='text-sm text-red-500'>{error.message}</p>}

            <p className='text-xs text-gray-500'>
                Helps us show market data and news relevant to you.
            </p>
        </div>
    );
};

export default CountrySelectField;