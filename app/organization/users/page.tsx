"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import UserCreate from '@/components/UserCreate/userCreate';

export default function Page() {
    const [userList, setUserList] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'johnDoe@gmail.com',
            organization: 'Organization 1',
        },
        {
            id: 2,
            name: 'Mahmut Kaya',
            email: 'mahmutKaya@gmail.com',
            organization: 'Organization 2',
        },
        {
            id: 3,
            name: 'Ayşe Yılmaz',
            email: 'ayseYilmaz@gmail.com',
            organization: 'Organization 3',
        },
        {
            id: 4,
            name: 'Fatih Yıldız',
            email: 'fatihYildiz@gmail.com',
            organization: 'Organization 4',
        },
        {
            id: 5,
            name: 'Mehmet Arslan',
            email: 'mehmetArslan@gmail.com',
            organization: 'Organization 5',
        },
        {
            id: 6,
            name: 'Zeynep Kılıç',
            email: 'zeynepKilic@gmail.com',
            organization: 'Organization 6',
        },
        {
            id: 7,
            name: 'Ali Vural',
            email: 'aliVural@gmail.com',
            organization: 'Organization 7',
        },
        {
            id: 8,
            name: 'Deniz Demir',
            email: 'denizDemir@gmail.com',
            organization: 'Organization 8',
        },
        {
            id: 9,
            name: 'Emre Koç',
            email: 'emreKoc@gmail.com',
            organization: 'Organization 9',
        },
        {
            id: 10,
            name: 'Sibel Aydın',
            email: 'sibelAydin@gmail.com',
            organization: 'Organization 10',
        },
    ]);

    const [isCreating, setIsCreating] = useState(false);

    const handleCreateUser = ({ newUser }) => {
        setUserList([...userList, newUser]);
        setIsCreating(false);
    };

    return (
        <div>
            <div className="flex justify-between">
                <h1>Organization Users Page</h1>
                <Button onClick={() => setIsCreating(true)}>Create User</Button>
            </div>

            {/* Modal */}
            {isCreating && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Create New User</h2>
                        <UserCreate onSave={handleCreateUser} onCancel={() => setIsCreating(false)} />
                    </div>
                </div>
            )}

            {userList.length === 0 ? (
                <div className="flex justify-center items-center h-64">
                    <Button onClick={() => setIsCreating(true)}>Create User</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-4">
                    {userList.map((user) => (
                        <Card key={user.id} className="p-3">
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.organization}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
