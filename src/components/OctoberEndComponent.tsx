import { useState } from "react";
import type { Employee } from "../types/EmployeeType";
interface OctoberEndComponentProps {
  employees: Employee[];
}

const getInitials = (name: string = ""): string => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return parts
    .slice(0, 2)
    .map((p) => ([...p][0] ?? "")) // spread to handle surrogate pairs
    .join("")
        .toUpperCase();
    
};

const OctoberEndComponent = ({ employees }: OctoberEndComponentProps) => {
    const [employeeList, setEmployeeList] = useState<Employee[]>(employees);
    const [removingIds, setRemovingIds] = useState<number[]>([]);

    const handleChange = (employee: Employee) => {
      const exists = employeeList.some((e) => e.id === employee.id);
      if (exists) {
        // mark as removing so we can animate out
        setRemovingIds((s) => (s.includes(employee.id) ? s : [...s, employee.id]));
        // wait for animation to complete then actually remove
        setTimeout(() => {
          setEmployeeList((prev) => prev.filter((e) => e.id !== employee.id));
          setRemovingIds((s) => s.filter((id) => id !== employee.id));
        }, 320); // should match CSS transition duration
      } else {
        setEmployeeList((prev) => [...prev, employee]);
      }
    };

  return (
    <section className="max-w-4xl mx-auto p-6" aria-labelledby="employees-heading">
      <header className="flex items-center justify-between mb-4">
        <div>
          <h2 id="employees-heading" className="text-2xl font-semibold text-slate-900">
            Team Members
          </h2>
          <p className="text-sm text-slate-500">{employees.length} people</p>
          <p className="text-xs text-slate-400">Random: {Math.random().toFixed(4)}</p>
        </div>
      </header>

      {employeeList.length === 0 ? (
        <div
          className="p-6 text-center text-slate-500 bg-gradient-to-b from-sky-50 to-transparent border border-dashed border-slate-200 rounded-md"
          role="status"
        >
          No employees found.
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {employeeList.map((employee) => (
            <article
              key={employee.id}
              className={`flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-300 ease-in-out ${
                removingIds.includes(employee.id) ? "opacity-0 -translate-x-4 scale-95" : "opacity-100"
              }`}
              aria-label={employee.name}
            >
              <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 font-semibold flex items-center justify-center text-lg" aria-hidden>
                {getInitials(employee.name)}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-slate-900">{employee.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{employee.position}</p>
                      <div className="mt-2 text-xs text-slate-400">ID: {employee.id}</div>
                      <input
                        type="checkbox"
                        name={`empcheck-${employee.id}`}
                        id={`empcheck-${employee.id}`}
                        checked={employeeList.some((e) => e.id === employee.id)}
                        onChange={() => handleChange(employee)}
                      />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default OctoberEndComponent;