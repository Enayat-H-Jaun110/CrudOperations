import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EmployeePage = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-y-6">
      <h1 className="text-3xl text-center text-blue-900">
        Press Button Create Employees
      </h1>
      <Button asChild size={"lg"}>
        <Link href={"/employee/create"}>Create Employee</Link>
      </Button>
    </main>
  );
};

export default EmployeePage;