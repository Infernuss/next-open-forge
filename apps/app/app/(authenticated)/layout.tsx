import { SidebarProvider } from "@repo/design-system/components/ui/sidebar";
import type { ReactNode } from "react";
import { requireAuthenticatedUser } from "../actions/auth";
import { GlobalSidebar } from "./components/sidebar";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

export default async function AppLayout({ children }: AppLayoutProperties) {
  await requireAuthenticatedUser();

  return (
    <SidebarProvider>
      <GlobalSidebar>{children}</GlobalSidebar>
    </SidebarProvider>
  );
}
