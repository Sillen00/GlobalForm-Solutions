function FormDetailsSkeletonPage() {
  return (
    <div role='status' className='animate-pulse'>
      <div className='flex justify-between gap-2'>
        <div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-1 mt-3'></div>
        <div className='h-8 bg-gray-200 dark:bg-gray-700 w-48 mb-1 mt-3'></div>
      </div>
      <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5'></div>
      <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[160px] mb-2.5'></div>
      <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[140px] mb-2.5'></div>
      <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px]'></div>

      <div className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2 mt-28'></div>
      <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5'></div>

      <div className='flex gap-8 mt-10'>
        <div className='h-8 bg-gray-200 rounded-sm dark:bg-gray-700 min-w-[100px]'></div>
        <div className='h-8 bg-gray-200 rounded-sm dark:bg-gray-700 min-w-[100px]'></div>
        <div className='h-8 bg-gray-200 rounded-sm dark:bg-gray-700 min-w-[100px]'></div>
      </div>

      <div className='h-32 bg-gray-200 dark:bg-gray-700 w-full mb-4 mt-4'></div>

      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default FormDetailsSkeletonPage
