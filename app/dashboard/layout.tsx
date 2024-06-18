import Page from "@/app/dashboard/page";
import SideNav from "../ui/dashboard/sidenav";

export default function Layout() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="flex-grow p-4 md:overflow-y-auto md:p-12">
        <Page />
      </div>
    </div>
  );
}
