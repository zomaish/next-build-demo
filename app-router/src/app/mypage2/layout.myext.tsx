"use client";

import Link from "next/link";

export default function MyPage2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Page 2</title>
      </head>
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>
          <div className="flex flex h-screen">
            <div className="flex-1 overflow-y-auto">{children}</div>
            <div className="w-64 bg-green-100">
              <div className="flex flex-col gap-4 p-4">
                <Link href="/mypage">My Page</Link>
                <Link href="/mypage/someId">My Page / id</Link>
                <Link href="/mypage2">My Page2</Link>
                <Link href="/mypage2/someId">My Page2 / id</Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
