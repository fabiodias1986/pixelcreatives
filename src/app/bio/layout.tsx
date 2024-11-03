
 export default function LinksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className=" z-[99999999999999] top-0 left-0 fixed flex flex-col justify-center items-center bg-main w-screen min-h-screen">{children}</section>
  }