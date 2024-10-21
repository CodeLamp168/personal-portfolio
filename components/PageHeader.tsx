// app/components/PageHeader.tsx
export default function PageHeader({ pageTitle }: { pageTitle: string }) {
    return (
      <div className='title-header py-6 text-center md:text-left w-full max-w-xs md:max-w-xl z-10'>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold">{pageTitle}</h1>
      </div>
    )
  }