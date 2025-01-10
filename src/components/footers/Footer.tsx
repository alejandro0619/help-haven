import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="w-full snap-start">
      <div className="h-fit lg:h-20 w-full bg-dark text-light flex flex-col lg:flex-row gap-4 justify-between items-center p-2 lg:px-10 rounded-xl">
        <span className="flex items-center gap-5">
          <p className="text-md font-extrabold">
            HelpHaven
          </p>
          <Separator orientation="vertical" className="h-5 bg-light " />
          <p className="text-md font-semibold">
            Your helpdesk. Reimagined.
          </p>

        </span>
        <p className="text-md font-semibold">
          © 2025 HelpHaven. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
export default Footer;
