import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center">CRUD Operations using nextJs14 </h1>
      <Button asChild size={"lg"}>
        <Link href={"/employee"}>Sign in as Employee</Link>
      </Button>
    </main>
  );
};

export default Home;