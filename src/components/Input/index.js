import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {useField} from '@unform/core';
// Styles
import {Container, TextInput, Icon} from './styles';

const Input = ({name, icon, ...rest}, ref) => {
  const inputElementRef = useRef(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef({value: defaultValue});

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputElementRef.current.focus();
      },
    };
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#009bdb' : '#666'}
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        {...rest}
        placeholderTextColor={'#999'}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default forwardRef(Input);
