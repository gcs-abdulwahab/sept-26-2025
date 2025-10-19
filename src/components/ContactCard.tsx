import { useState } from "react";
import type { ContactType } from "../types/ContactType";

interface ContactCardProps {
	contact: ContactType;
	// optional callback when contact state changes (e.g., isFiler toggled)
	onChange?: (next: ContactType) => void;
}

const calculateAge = (dob: string | Date) => {
	const birth = new Date(dob);
	const now = new Date();
	let age = now.getFullYear() - birth.getFullYear();
	const m = now.getMonth() - birth.getMonth();
	if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
		age--;
	}
	return age;
};

const ContactCard = ({ contact, onChange }: ContactCardProps) => {
	const [Contact, setContact] = useState<ContactType>(contact);

	const age = calculateAge(Contact.dateOfBirth ?? contact.dateOfBirth);
	const isSenior = age >= 60;
	const taxRate = Contact.isFiler ? 0.11 : 0.22;
	const netSalary = Math.round(Contact.salary * (1 - taxRate));

	const fmtCurrency = (v: number) => new Intl.NumberFormat("en-US").format(Math.round(v));

	const initials = (name = "") =>
		name
			.split(" ")
			.map((n) => n[0] ?? "")
			.join("")
			.slice(0, 2)
			.toUpperCase();

	const dobText = Contact.dateOfBirth ? new Date(Contact.dateOfBirth).toLocaleDateString() : "-";

	return (
		<div className="max-w-md bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden">
			<div className="px-6 py-4">
				<div className="flex items-center gap-4">
					<div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700">
						{initials(Contact.name)}
					</div>

					<div className="flex-1">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-xl font-semibold text-gray-900">{Contact.name}</h3>
								<p className="text-sm text-gray-500">ID: {Contact.id}</p>
							</div>
							<div className="text-right">
								<p className="text-sm text-gray-600">Age <span className="font-medium">{age}</span></p>
								{isSenior && (
									<span className="mt-1 inline-block text-xs bg-red-600 text-white px-2 py-0.5 rounded">Senior Citizen</span>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
					<div>
						<div className="text-xs text-gray-500">Date of Birth</div>
						<div className="mt-1 text-gray-900">{dobText}</div>
					</div>

					<div>
						<div className="text-xs text-gray-500">Status</div>
						<div className="mt-1">
							<span className={`px-2 py-0.5 rounded text-xs ${Contact.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
								{Contact.isActive ? 'Active' : 'Inactive'}
							</span>
						</div>
					</div>

					<div>
						<div className="text-xs text-gray-500">Gross Salary</div>
						<div className="mt-1 text-gray-900">{fmtCurrency(Contact.salary)}</div>
					</div>

					<div>
						<div className="text-xs text-gray-500">Net Salary (after {Math.round(taxRate * 100)}% tax)</div>
						<div className="mt-1 text-gray-900">{fmtCurrency(netSalary)}</div>
					</div>
				</div>

				<div className="mt-4 flex items-center justify-between">
					<label className="flex items-center gap-3">
						<div className="text-sm text-gray-600">Is Filer</div>
						<div
							role="switch"
							aria-checked={!!Contact.isFiler}
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									setContact((c) => {
										const next = { ...c, isFiler: !c.isFiler };
										if (onChange) onChange(next);
										return next;
									});
								}
							}}
							onClick={() => {
								setContact((c) => {
									const next = { ...c, isFiler: !c.isFiler };
									if (onChange) onChange(next);
									return next;
								});
							}}
							className={`w-12 h-6 flex items-center p-1 rounded-full cursor-pointer ${Contact.isFiler ? 'bg-indigo-600' : 'bg-gray-300'}`}
						>
							<div className={`bg-white w-4 h-4 rounded-full shadow transform duration-150 ${Contact.isFiler ? 'translate-x-6' : ''}`} />
						</div>
					</label>

					<div className="text-sm text-gray-500">DOB: {dobText}</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
