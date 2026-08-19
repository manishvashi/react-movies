function LoadingSpinner({ size = 'md' }) {
  const sizes = { sm: 'h-6 w-6', md: 'h-10 w-10', lg: 'h-32 w-32' };
  return (
    <div
      className={`animate-spin rounded-full border-t-2 border-b-2 border-blue-500 ${sizes[size]}`}
    />
  );
}

export { LoadingSpinner };
