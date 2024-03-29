import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { CheckIcon } from 'react-native-heroicons/solid';

type CheckboxProps = {
  disabled?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
  hint?: boolean;
};

export const Checkbox: FC<CheckboxProps> = ({
  disabled,
  value = false,
  onChange,
  hint = false,
}) => {
  const [componentValue, setComponentValue] = useState(value);

  useEffect(() => {
    value !== componentValue && setComponentValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handlePress = () => {
    setComponentValue((_value) => {
      onChange?.(!_value);
      return !_value;
    });
  };

  return (
    <Pressable
      className={clsx(
        'w-7 h-7 rounded-full active:opacity-50 items-center justify-center border-solid border',
        componentValue
          ? 'border-green-500 bg-green-500'
          : 'border-gray-300 bg-white',
        disabled ? 'opacity-50' : ''
      )}
      disabled={disabled}
      onPress={handlePress}
    >
      {componentValue && <CheckIcon fill="white" stroke="white" size={20} />}
      {!componentValue && hint && (
        <CheckIcon fill="gray-300" stroke="gray-300" size={20} />
      )}
    </Pressable>
  );
};
