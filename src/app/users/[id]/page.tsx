import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  
  if (!res.ok) {
    notFound()
  }
  
  return res.json()
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)

  return (
    <div className="bg-black min-h-screen flex items-center">
      <div className="p-4 max-w-3xl mx-auto text-white">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Back to User List
        </Link>
        <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">{user.name}</h2>
          <p className="text-gray-700 mb-2"><b>Email:</b> {user.email}</p>
          <p className="text-gray-700 mb-2"><b>Phone:</b> {user.phone}</p>
          <p className="text-gray-700 mb-2"><b>Website:</b> 
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {user.website}
            </a>
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Address:</h3>
          <p className="text-gray-700"><b>Street:</b> {user.address.street}</p>
          <p className="text-gray-700"><b>Suite:</b> {user.address.suite}</p>
          <p className="text-gray-700"><b>City:</b> {user.address.city}, {user.address.zipcode}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Company:</h3>
          <p className="text-gray-700"><b>Name:</b> {user.company.name}</p>
          <p className="text-gray-700"><b>CatchPhrase:</b> {user.company.catchPhrase}</p>
          <p className="text-gray-700"><b>Business:</b> {user.company.bs}</p>
        </div>
      </div>
    </div>
  )
}
