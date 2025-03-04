import { useMemo } from "react";

interface IConditionalStringProps {
  conditions: boolean[];
  defaultMessage: string;
  falseMessage?: string;
  messages?: string[];
}
export function useConditionalString({
  conditions,
  defaultMessage = "active",
  falseMessage = "",
  messages,
}: IConditionalStringProps) {
  const resultMessage = useMemo(() => {
    let result = falseMessage;

    conditions.forEach((condition, index) => {
      if (condition) {
        result = messages?.[index] ?? defaultMessage;
      }
    });
    return result;
  }, [conditions, defaultMessage, falseMessage, messages]);
  return [resultMessage];
}
