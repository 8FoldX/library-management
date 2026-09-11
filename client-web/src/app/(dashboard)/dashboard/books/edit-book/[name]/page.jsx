import EditBook from "@/components/pages/Dashboard/Books/CRUD/EditBook";

const Page = async ({ params }) => {
  const { name } = await params;

  return <EditBook name={name} />;
};

export default Page;