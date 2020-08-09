import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => { // armazeno na rest todos os outros atributos como opcionais
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} value="" {...rest}>
                <option value="" disabled hidden >Selecione uma opção</option>

                {options.map(option => {
                    return <option  key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;