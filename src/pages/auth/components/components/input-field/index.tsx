import React from "react";
import PasswordVisibilityToggle from "@/pages/auth/components/components/password-visibility-toggle";
import classes from "./classes.module.scss";


interface InputFieldProps {
    id: string;
    name: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    isVisible?: boolean;
    toggleVisibility?: (isVisible: boolean) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, placeholder, type = "text", value, onChange, isVisible, toggleVisibility }) => {
    return (
        <div className={classes.input_container}>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete="off"
                value={value}
                className={classes.form_field}
                onChange={(e) => onChange(e.target.value)}
                required
            />

            <label htmlFor={id} className={classes.form_label}>
                {placeholder}
            </label>

            {toggleVisibility && (
                <PasswordVisibilityToggle
                    isVisible={isVisible}
                    toggleVisibility={() => toggleVisibility(!isVisible)}
                />
            )}
        </div>
    );
};

export default InputField;
