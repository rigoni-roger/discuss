'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending: isLoading } = useFormStatus();

  return (
    <Button type="submit" isLoading={isLoading}>
      {children}
    </Button>
  );
}
