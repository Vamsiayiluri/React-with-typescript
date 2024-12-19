import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>;
type CustomInputRef = HTMLInputElement;

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
  (props, ref) => {
    return (
      <div>
        <input {...props} ref={ref as ForwardedRef<HTMLInputElement>} />
      </div>
    );
  }
);

export default CustomInput;
