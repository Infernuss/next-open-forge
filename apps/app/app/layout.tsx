import "./styles.css";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html className={fonts} lang="en" suppressHydrationWarning>
    <body>
      <AnalyticsProvider>
        <DesignSystemProvider
          privacyUrl={new URL("/legal/privacy").toString()}
          termsUrl={new URL("/legal/terms").toString()}
        >
          {children}
        </DesignSystemProvider>
      </AnalyticsProvider>
    </body>
  </html>
);

export default RootLayout;
