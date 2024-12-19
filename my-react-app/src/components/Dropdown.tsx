type DropdownProps<T> = {
  options: T[];
  onSelect: (option: T) => void;
  renderOption: (option: T) => React.ReactNode;
};

export const Dropdown = <T extends {}>({
  options,
  onSelect,
  renderOption,
}: DropdownProps<T>) => {
  return (
    <select onChange={(e) => onSelect(options[Number(e.target.value)])}>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {renderOption(option)}
        </option>
      ))}
    </select>
  );
};
