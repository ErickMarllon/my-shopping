interface InputProps {
  searchValue: string;
  onSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  cleanAfterSubmit?: boolean;
  closeAfterSubmit?: boolean;
  debounceTime?: number;
  minCharacters?: number;
  isToggle?: boolean;
}
export type { InputProps };
