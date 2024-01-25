function DashboardFormCardSkeleton() {
  return (
    <div role='status' className='animate-pulse'>
      <div>
        <div className='h-40 bg-gray-200 rounded-lg dark:bg-gray-700 px-4 pt-5'>
          <div className='flex justify-between'>
            <div className='h-3 bg-gray-100 rounded-full dark:bg-gray-600 min-w-[100px]'></div>
            <div className='h-3 bg-gray-100 rounded-full dark:bg-gray-600 min-w-[50px]'></div>
          </div>

          <div className='h-5 bg-gray-100 rounded-full dark:bg-gray-600 max-w-[170px] mt-5'></div>

          <div className='h-3 bg-gray-100 rounded-full dark:bg-gray-600 max-w-[70px] mt-14'></div>
        </div>

        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default DashboardFormCardSkeleton
