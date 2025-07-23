export function FoodPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${className}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-300 dark:text-gray-600"
      >
        <path
          d="M9 2V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V2H6V8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8V2H3V8C3 9.65685 4.34315 11 6 11V22H8V11C9.65685 11 11 9.65685 11 8V2H9Z"
          fill="currentColor"
        />
        <path
          d="M15 2V7C15 9.20914 16.7909 11 19 11V22H21V2C18.2386 2 16 4.23858 16 7V2H15Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}