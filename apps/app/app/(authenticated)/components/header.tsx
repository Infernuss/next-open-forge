import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/design-system/components/ui/breadcrumb";
import { SidebarTrigger } from "@repo/design-system/components/ui/sidebar";
import { Fragment, Suspense } from "react";
import UserMenu, { UserMenuLoading } from "@/app/components/user-menu";

type HeaderProps = {
  pages: string[];
  currentPage: string;
};

export const Header = ({ pages, currentPage }: HeaderProps) => (
  <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
    <div className="flex items-center gap-2">
      <SidebarTrigger />
      <Breadcrumb>
        <BreadcrumbList>
          {pages.map((page, index) => (
            <Fragment key={page}>
              {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{page}</BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
    <Suspense fallback={<UserMenuLoading />}>
      <UserMenu />
    </Suspense>
  </header>
);
