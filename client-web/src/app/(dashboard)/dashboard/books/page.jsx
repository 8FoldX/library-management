import React from "react";

import {
  UpdateBookCard,
  AddBook,
} from "@/components/pages/Dashboard";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* Add Book Section */}
        <section>
          <AddBook />
        </section>

        {/* Update Books Section */}
        <section>
          <UpdateBookCard />
        </section>

      </div>
    </main>
  );
};

export default Page;