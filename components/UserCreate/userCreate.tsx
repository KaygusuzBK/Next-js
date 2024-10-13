import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function UserCreate({ onSave, onCancel }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');

    const handleSubmit = () => {
        if (!name || !email || !organization) {
            return;
        }
        const newUser = {
            id: Math.random(),
            name,
            email,
            organization,
        };
        onSave(newUser);
    };

    return (
        <div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
            </div>
            <div>
                <label>Organization</label>
                <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="border p-2 w-full mb-4"
                />
            </div>
            <div className="flex justify-end space-x-4">
                <Button onClick={onCancel} className="bg-gray-500">Cancel</Button>
                <Button onClick={handleSubmit} className="bg-blue-500">Save</Button>
            </div>
        </div>
    );
}
