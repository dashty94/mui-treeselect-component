import React from 'react';
import { Controller } from 'react-hook-form';

// material ui
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { RadioGroupControllerProps } from '../../../fields';

export const RadioGroupController: React.FC<RadioGroupControllerProps> = ({
    name,
    label,
    defaultValue,
    control,
    options
}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue || ''}
            render={({ field, fieldState }) => (
                <FormControl error={fieldState?.invalid} component="fieldset">
                    {label && <FormLabel>{label}</FormLabel>}
                    <RadioGroup style={{ flexDirection: 'row' }} {...field}>
                        {options.map((option, index) => (
                            <FormControlLabel
                                key={index}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                    <FormHelperText>{fieldState?.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default RadioGroupController;
