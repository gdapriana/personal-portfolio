export default function Header({metadata}: {metadata: {title: string, subtitle: string}}) {
  return (
    <header className="flex w-full flex-col justify-center items-start gap-2">
      <h1 className="text-3xl __gradient-text font-bold dark:text-neutral-200">
        {metadata.title}
      </h1>
      <p className="text-sm text-neutral-400">{metadata.subtitle}</p>
    </header>
  )
}
