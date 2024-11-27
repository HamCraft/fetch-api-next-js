import Link from 'next/link'

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }
  return res.json()
}

export default async function Home() {
  const users = await getUsers()

  return (
    <div className='bg-black'>
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">User Directory</h1>
      <ul className="space-y-2">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id} className="p-4 bg-white shadow rounded-lg hover:bg-gray-50 transition">
            <Link
              href={`/users/${user.id}`}
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
