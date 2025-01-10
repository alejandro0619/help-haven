import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="w-full snap-start">
      <div className="h-20 w-full bg-dark text-light flex justify-between items-center p-5 rounded-xl">
        <span className="flex items-center gap-5">
          <p className="text-xl font-extrabold">
            HelpHaven
          </p>
          <Separator orientation="vertical" className="h-5 bg-light" />
          <p className="text-sm font-semibold">
            Your helpdesk. Reimagined.
          </p>

        </span>
        <p className="text-sm font-semibold">
          © 2025 HelpHaven. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
export default Footer;
